<template>
  <div>
    <div v-if="ownedCopyrights.length" class="copyright-list">
      <table>
        <thead>
          <tr>
            <th style="width:5%;text-align:center">
              <input type="checkbox" @click="selectAll" v-model="allSelected" />
            </th>
            <th @click="checkId" style="width:22.4%">Creative Work</th>
            <th style="width:59%">Copyright Categories</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="ownedCopyright in ownedCopyrights"
            :key="ownedCopyright.id"
          >
            <td style="text-align:center">
              <input
                type="checkbox"
                @click="select(ownedCopyright.id)"
                :value="ownedCopyright.id"
                v-model="ownedCopyrightIds"
              />
            </td>
            <td>{{ ownedCopyright.name }}</td>
            <td>
              <span style="font-weight:bold">Original</span>
              <ul>
                <li
                  v-for="(copyrightCategory,
                  i) in ownedCopyright.copyright_categories"
                  :key="i"
                >
                  {{ copyrightCategory }}
                </li>
              </ul>
            </td>
            <td style="width:130px">
              <a
                :href="
                  '/contracts/new?creative_work_id=' +
                    ownedCopyright.id +
                    '&' +
                    'owner_id=user_id:40c95716-f9be-44db-98d2-bb7d67033716'
                "
                >著作権譲渡</a
              >
              <a
                class="edit-creative-work"
                :href="
                  '/creative_works/edit?creative_work_id=' + ownedCopyright.id
                "
                >編集</a
              >
              <a
                class="download-creative-work"
                @click="downloadOrchardFiles(ownedCopyright.id)"
                >Download</a
              >
            </td>
          </tr>
        </tbody>
      </table>
      <a
        class="download-button"
        target="_blank"
        data-no-turbolink="false"
        id="user_orchard"
        @click="downloadOrchardFiles(ownedCopyrightIds.toString())"
        >チェックした曲のThe Orchard Bulk Uploadファイルをダウンロード</a
      >
    </div>
    <div v-else class="notification">
      著作権はありません
    </div>
  </div>
</template>
<script>
import Settings from "../../../settings/index.js";
import SercueStorageApi from "../../../sercueStorageApi/index.js";
export default {
  data() {
    return {
      displayFlag: true,
      allSelected: false,
      ownedCopyrightIds: [],
      creativeWorkIds: [],
      ownedCopyrights: [],
    };
  },
  props: {
    ownerId: {
      type: String,
      required: false,
    },
  },
  async created() {
    let copyrightsData = null;
    if (this.ownerId.startsWith("user_id")) {
      copyrightsData = await SercueStorageApi.request(
        "get",
        `users/${this.ownerId}/copyrights`
      );
    } else if (this.ownerId.startsWith("group_id")) {
      copyrightsData = await SercueStorageApi.request(
        "get",
        `groups/${this.ownerId}/copyrights`
      );
    } else if (this.ownerId.startsWith("publisher_id")) {
      copyrightsData = await SercueStorageApi.request(
        "get",
        `publishers/${this.ownerId}/copyrights`
      );
    }
    for (const copyright of copyrightsData.data) {
      if (this.creativeWorkIds.indexOf(copyright.creative_work_id) === -1) {
        this.creativeWorkIds.push(copyright.creative_work_id);
      }
    }
    for (const creativeWork of this.creativeWorkIds) {
      const copyrights = await SercueStorageApi.request(
        "get",
        `creative_works/${creativeWork}`
      );
      this.ownedCopyrights.push(copyrights.data);
    }
  },

  methods: {
    selectAll() {
      this.ownedCopyrightIds = [];
      if (!this.allSelected) {
        for (let i = 0; i < this.ownedCopyrights.length; i++) {
          this.ownedCopyrightIds.push(this.ownedCopyrights[i].id);
        }
      }
    },
    select(id) {
      this.allSelected = false;
      const index = this.ownedCopyrightIds.indexOf(id);
      if (index > -1) {
        this.ownedCopyrightIds.splice(index, 1);
      } else {
        this.ownedCopyrightIds.push(id);
      }
    },
    async downloadOrchardFiles(creative_work_ids) {
      if (creative_work_ids !== "") {
        const s3_key = await SercueStorageApi.request("post", `orchard/`, {
          data: {
            creative_work_ids: creative_work_ids,
          },
        });
        window.open(Settings.aws_url + s3_key.data.s3_key);
      }
    },
  },
};
</script>
<style scoped>
body {
  font-family: sans-serif;
}
h2 {
  text-align: left;
  margin: 0;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 24px;
}
.copyright-list {
  width: 100%;
}
table {
  width: 100%;
  margin-top: 1rem;
}
th {
  background-color: #f9fafb;
  padding: 13px 11px;
  text-align: left;
  font-size: 14px;
}
td {
  padding-top: 0.5rem;
  text-align: left;
  font-size: 14px;
}
td li {
  margin-left: -1.5rem;
}
td a {
  display: block;
  background-color: #2185d0;
  text-decoration: none;
  color: white;
  text-align: center;
  margin-bottom: 0.1rem;
  padding: 8px 9px;
  border-radius: 5px;
  font-weight: bold;
}
.edit-creative-work {
  display: block;
  background-color: #e0e1e2;
  text-decoration: none;
  color: #00000099;
  text-align: center;
  margin-bottom: 0.1rem;
  padding: 8px 9px;
  border-radius: 5px;
  font-weight: bold;
}
.download-creative-work {
  display: block;
  background-color: #e0e1e2;
  text-decoration: none;
  color: #00000099;
  text-align: center;
  margin-bottom: 0.1rem;
  padding: 8px 9px;
  border-radius: 5px;
  font-weight: bold;
}
.notification {
  width: 96.5%;
  color: #276f86;
  background-color: #f8ffff;
  padding: 14px 21px;
  text-align: left;
  border: 1px solid #3dc3c3;
  border-radius: 3px;
  font-size: 14px;
}
.download-button {
  display: block;
  background-color: #e0e1e2;
  text-decoration: none;
  color: #00000099;
  padding: 8px 15px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  max-width: 436px;
  width: 100%;
}
a:hover {
  cursor: pointer;
}
</style>
