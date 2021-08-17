<template>
  <div>
    <Header :rightMenu="true" />
    <div class="main-content">
      <div class="container">
        <div class="content">
          <h1>
            編集
          </h1>
          <div class="fields">
            <label>グループ名フリガナ</label>
            <input
              name="group[name_kana]"
              v-model="groupFromDb.name"
              class="input-text"
              type="text"
            />
          </div>
          <div class="fields">
            <label>グループ名</label>
            <input
              name="group[name]"
              v-model="groupFromDb.name_kana"
              class="input-text"
              type="text"
            />
          </div>
          <div class="action-form">
            <a class="cancel-button" href="/">キャンセル</a>
            <input
              type="submit"
              value="グループ登録"
              class="ui primary button"
              @click="editGroup"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
<script>
import Header from '../Header'
import Footer from '../Footer'
import axios from 'axios'
export default {
  data() {
    return {
      formElements: {
        group_name: '',
        group_name_kana: ''
      },
      groupFromDb: []
    }
  },
  created() {
    axios
      .get(
        'https://9gfglk4kul.execute-api.ap-northeast-1.amazonaws.com/prod/v1/groups/' +
          this.$route.query.group_id
      )
      .then(response => {
        this.groupFromDb = response.data
      })
  },
  methods: {
    editGroup() {
      this.formElements.group_name = this.groupFromDb.name
      this.formElements.group_name_kana = this.groupFromDb.name_kana
      axios
        .patch(
          'https://9gfglk4kul.execute-api.ap-northeast-1.amazonaws.com/prod/v1/groups/' +
            this.$route.query.group_id,
          JSON.stringify(this.formElements)
        )
        .then(response => {
          window.location.href = '/'
        })
    }
  },
  components: {
    Header,
    Footer
  }
}
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
