<template>
  <div>
    <Header :rightMenu="true" />
    <div class="main-content">
      <div class="container">
        <div class="content">
          <h1>
            出版社登録
          </h1>
          <div class="fields">
            <label>出版社名フリガナ</label>
            <input
              name="publisher[name_kana]"
              v-model="formElements.publisher_name_kana"
              class="input-text"
              type="text"
            />
          </div>
          <div class="fields">
            <label>出版社名</label>
            <input
              name="publisher[name]"
              v-model="formElements.publisher_name"
              class="input-text"
              type="text"
            />
          </div>
          <div class="fields">
            <label>JASRAC会員 ID</label>
            <input
              name="publisher[jasrac_member_id]"
              v-model="formElements.jasrac_member_id"
              class="input-text"
              type="text"
            />
          </div>
          <div class="action-form">
            <a class="cancel-button" href="/">キャンセル</a>
            <input
              type="submit"
              value="出版社登録"
              class="ui primary button"
              @click="createPublisher"
            />
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
        publisher_name_kana: "",
        publisher_name: "",
        jasrac_member_id: "",
        user_id: "user_id:40c95716-f9be-44db-98d2-bb7d67033716",
      },
    };
  },
  methods: {
    async createPublisher() {
      await SercueStorageApi.request("post", "publishers/", {
        data: JSON.stringify(this.formElements),
      });
      window.location.href = "/";
    },
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
  margin-top: 2rem;
  width: 100%;
  position: relative;
  height: 100vh;
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
}
.fields {
  margin-bottom: 1rem;
}
.fields label {
  color: #000000de;
  font-size: 13px;
  font-family: sans-serif;
  font-weight: bold;
  width: 100%;
  float: left;
  text-align: left;
  margin-bottom: 0.5rem;
}
.input-text {
  width: 100%;
  padding: 10px 6px;
  border: 1px solid #dedede;
  border-radius: 3px;
}
.action-form {
  width: 100%;
  display: inline-block;
  text-align: left;
}
.cancel-button {
  float: left;
  padding: 8px 18px;
  background-color: #e0e1e2;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  color: #00000099;
  cursor: pointer;
  text-decoration: none;
}
.action-form input {
  float: left;
  background-color: #2185d0;
  color: white;
  padding: 8px 25px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  margin-left: 0.3rem;
  border: none;
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
