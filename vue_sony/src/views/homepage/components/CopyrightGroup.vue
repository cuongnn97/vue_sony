<template>
  <div>
    <div class="title">
      <h2>
        グループ所有の著作権一覧
        <a class="primary-button" href="/groups/new">グループ登録</a>
      </h2>
    </div>
    <div v-if="groups.length" class="group-list">
      <div v-for="(group, i) in groups" :key="i">
        <h3>
          {{ group.name }}が所有する著作権一覧
          <a id="edit-button" :href="'/groups/edit?group_id=' + group.id"
            >編集</a
          >
          <a
            id="group-registration-button"
            :href="'groups?group_id=' + group.id"
            >グループ詳細</a
          >
        </h3>
        <CopyrightList :ownerId="group.id" />
      </div>
    </div>
    <div v-else class="notification">
      グループはありません
    </div>
  </div>
</template>
<script>
import CopyrightList from "./CopyrightList";
import Settings from "../../../settings/index.js";
import SercueStorageApi from "../../../sercueStorageApi/index.js";
export default {
  data() {
    return {
      groups: [],
      ownedCopyrights: [],
      creativeWorkIds: [],
    };
  },
  async created() {
    const groups = await SercueStorageApi.request(
      "get",
      "users/user_id:40c95716-f9be-44db-98d2-bb7d67033716/groups"
    );
    this.groups = groups.data;
  },
  components: {
    CopyrightList,
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
.title {
  margin-top: 1.5rem;
}
.title a {
  float: right;
  display: block;
  background-color: #2185d0;
  text-decoration: none;
  color: white;
  text-align: center;
  margin-bottom: 0.1rem;
  padding: 8px 25px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
}
.download-button {
  display: block;
  background-color: #e0e1e2;
  text-decoration: none;
  color: #00000099;
  margin-bottom: 0.1rem;
  padding: 8px 15px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  max-width: 436px;
  width: 100%;
}
h3 {
  text-align: left;
  margin: 0;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 1rem;
  margin-left: 1.5rem;
  font-size: 18px;
}
.ui .button {
  background-color: #e0e1e2;
}
#edit-button {
  margin-left: 1rem;
  background-color: #e0e1e2;
  text-decoration: none;
  color: #00000099;
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 14px;
}
#group-registration-button {
  float: right;
  background-color: #2185d0;
  text-decoration: none;
  color: white;
  padding: 8px 25px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  margin-right: 1.5rem;
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
</style>
