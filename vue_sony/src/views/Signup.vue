<template>
  <div>
    <Header :rightMenu="false" />
    <div class="main-content">
      <div class="container">
        <div v-show="alert" class="alert">
          {{ alert }}
        </div>
        <div class="loginForm">
          <h1>
            サインアップ
          </h1>
          <div class="fieldsRequired">
            <label>Eメール</label>
            <label style="color:red;margin-left:0.2rem">*</label>
            <input
              v-model="formElements.email"
              name="email"
              type="email"
              required
            />
          </div>
          <div class="fieldsRequired">
            <label>パスワード</label>
            <label style="color:red;margin-left:0.2rem">*</label>
            <input
              v-model="formElements.password"
              name="password"
              type="text"
              required
            />
          </div>
          <div class="fieldsRequired">
            <label>パスワード（確認用）</label>
            <label style="color:red;margin-left:0.2rem">*</label>
            <input
              v-model="formElements.re_password"
              name="re-password"
              type="text"
              required
            />
          </div>
          <div class="action">
            <input
              type="submit"
              value="サインアップ"
              class="fluid ui button"
              @click="createUser()"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
export default {
  data() {
    return {
      alert: "",
      formElements: {
        email: "",
        password: "",
        re_password: "",
      },
    };
  },
  methods: {
    async createUser() {
      if (this.checkForm()) {
        const idFromAws = await this.checkExist();
        this.$router.push("/")
      }
    },
    async checkExist() {
      if (this.formElements.email !== "") {
        const user = await axios.get(" http://localhost:3000/users", {
          params: { email: this.formElements.email },
        });
        if (user.data.length > 0) {
          this.alert = "exist email";
          return "";
        } else {
          const id = this.getIdFromAws();
          return id;
        }
      }
    },
    checkForm() {
      if (this.formElements.password !== this.formElements.re_password) {
        this.alert = "password not matches";
        return false;
      } else if (this.formElements.email == "") {
        this.alert = "please type email";
        return false;
      } else if (this.formElements.password == "" || this.formElements.re_password == "") {
        this.alert = "please type password";
        return false;
      } else {
        return true;
      }
    },
    getIdFromAws() {
      return "a";
    },
  },
  components: {
    Header,
    Footer,
  },
};
</script>
<style scoped>
.main-content {
  margin-top: 2rem;
  width: 100%;
  position: relative;
  height: fit-content;
}
.container {
  width: 1127px;
  height: 100px;
  margin: 0 auto;
}
.alert {
  width: 96.5%;
  color: #9f3a38;
  background-color: #fff6f6;
  padding: 14px 21px;
  text-align: left;
  border: 1px solid #e0b4b4;
  border-radius: 3px;
  font-size: 14px;
}
.loginForm {
  border: 1px solid #dedede;
  width: 40%;
  margin: 0 auto;
  margin-top: 1rem;
  border-radius: 3px;
}
.loginForm h1 {
  color: #00b5ad;
  text-align: center;
  margin-top: 0.3em;
  font-size: 28px;
}
.fieldsRequired {
  display: block;
  margin-bottom: 10px;
}
label {
  color: #000000de;
  font-size: 13px;
  font-family: sans-serif;
  font-weight: bold;
  float: left;
  margin-left: 0.8rem;
}
input {
  width: 92%;
  margin-top: 0.5rem;
  padding: 10px 6px;
  border: 1px solid #dedede;
  border-radius: 3px;
}
.checkbox {
  display: inline-block;
  width: 100%;
  text-align: left;
}
.checkbox input {
  width: 6%;
}
.action input {
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 20px;
}
.sign-up {
  margin-bottom: 2rem;
}
.action input:hover {
  cursor: pointer;
  background-color: #babbbc;
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
