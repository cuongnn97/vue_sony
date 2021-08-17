<template>
  <div>
    <h2>未譲渡契約</h2>
    <div v-show="ownedCopyrights.length" class="copyright-list">
      <h3>cuong</h3>
      <table>
        <thead>
          <tr>
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
            <td>{{ ownedCopyright.creative_work_name }}</td>
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
            <td>
              <button disabled>Waiting</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      ownedCopyrights: []
    }
  },
  created() {
    axios
      .get(
        'https://9gfglk4kul.execute-api.ap-northeast-1.amazonaws.com/prod/v1/users/user_id:40c95716-f9be-44db-98d2-bb7d67033716/contracts'
      )
      .then(response => {
        this.ownedCopyrights = response.data
        for (const ownedCopyright of this.ownedCopyrights) {
          axios
            .get(
              'https://9gfglk4kul.execute-api.ap-northeast-1.amazonaws.com/prod/v1/creative_works/' +
                ownedCopyright.creative_work_id
            )
            .then(response => {
              ownedCopyright.creative_work_name = response.data.name
            })
        }
      })
  }
}
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
}
.copyright-list {
  width: 100%;
}
h3 {
  text-align: left;
  margin: 0;
  margin-left: 1.3rem;
  width: 100%;
}
table {
  width: 100%;
  margin-top: 1rem;
  border: 1px solid #2224261a;
  border-spacing: 0;
  border-radius: 0.28571429rem;
}
th {
  background-color: #f9fafb;
  padding: 13px 11px;
  text-align: left;
  font-size: 14px;
  border-bottom: 1px solid #2224261a;
}
td {
  padding-top: 0.5rem;
  text-align: left;
  font-size: 14px;
  border-bottom: 1px solid #2224261a;
}
tr:last-child td {
  border-bottom: none;
}
td li {
  margin-left: -1.5rem;
}
td button {
  padding: 14px 21px;
  border: none;
  float: right;
  margin-right: 2rem;
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
</style>
