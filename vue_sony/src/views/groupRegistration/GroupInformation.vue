<template>
  <div>
    <Header :rightMenu="true" />
    <div class="main-content">
      <div class="container">
        <div class="content">
          <h1>
            グループ情報
          </h1>
          <table>
            <tbody>
              <tr>
                <td>グループ名フリガナ</td>
                <td>{{ groupFromDb.name_kana }}</td>
              </tr>
              <tr>
                <td>グループ名</td>
                <td>{{ groupFromDb.name }}</td>
              </tr>
              <tr>
                <td>ID</td>
                <td>{{ $route.query.group_id }}</td>
              </tr>
              <tr>
                <td>グループメンバー</td>
                <td>
                  <ul>
                    <li style="width:100%">
                      cuong
                    </li>
                  </ul>
                  <input
                    type="text"
                    name="group[user_id]"
                    id="group_user_id"
                    placeholder="グループメンバーID"
                  />
                  <input
                    type="submit"
                    name="commit"
                    value="追加"
                    class="submit-button"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div class="return-button">
            <a href="/">戻る</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
<script>
import Header from "../Header";
import Footer from "../Footer";
import Settings from "../../settings/index.js";
import SercueStorageApi from "../../sercueStorageApi/index.js";
export default {
  data() {
    return {
      formElements: {
        group_name: "",
        group_name_kana: "",
      },
      groupFromDb: [],
    };
  },
  async created() {
    const groups = await SercueStorageApi.request(
      "get",
      `groups/${this.$route.query.group_id}`
    );
    this.groupFromDb = groups.data;
  },
  components: {
    Header,
    Footer,
  },
};
</script>
<style scoped>
body {
  font-family: sans-serif;
}
.main-content {
  position: relative;
  height: 100vh;
  margin-top: 2rem;
  width: 100%;
}
.container {
  width: 1127px;
  margin: 0 auto;
}
.content h1 {
  width: 100%;
  color: #00b5ad;
  text-align: left;
  border-bottom: 2px solid #00b5ad;
  padding-bottom: 0.21428571rem;
  font-size: 28px;
}
table {
  border-spacing: 0px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ddd;
}
td,
tr {
  text-align: left;
  padding: 10px 5px;
  font-size: 14px;
  border-bottom: 1px solid #ddd;
}
tr:last-child td {
  border-bottom: none;
}
td:nth-child(1) {
  width: 13%;
  font-weight: bold;
  background-color: #00000008;
  border-right: 1px solid #ddd;
}
a {
  background-color: #e0e1e2;
  text-decoration: none;
  color: #00000099;
  padding: 8px 20px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  float: left;
  margin-top: 1rem;
}
#group_user_id {
  width: 50%;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px 10px;
}
.submit-button {
  border: none;
  border-radius: 5px;
  background-color: #2185d0;
  text-decoration: none;
  color: white;
  padding: 9px 20px;
  font-weight: bold;
  font-size: 14px;
  margin-left: 0.5rem;
}
@media screen and (max-width: 1199px) {
  .container {
    width: 933px;
  }
}
@media screen and (max-width: 993px) {
  .container {
    width: 723px;
  }
}
</style>
