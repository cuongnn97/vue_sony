<template>
  <div>
    <Header :rightMenu="false" />
    <div class="main-content">
      <div class="container">
        <div v-show="alert" class="alert">
          アカウント登録もしくはログインしてください。
        </div>
        <form>
          <div class="loginForm">
            <h1>
              サインイン
            </h1>
            <div class="fieldsRequired">
              <label>Eメール</label>
              <label style="color:red;margin-left:0.2rem">*</label>
              <input name="email" type="text" required />
            </div>
            <div class="fieldsRequired">
              <label>パスワード</label>
              <label style="color:red;margin-left:0.2rem">*</label>
              <input name="password" type="text" required />
            </div>
            <div class="checkbox">
              <input type="checkbox" />
              <span>ログインを記憶する</span>
            </div>
            <div class="action">
              <a href="/users/password/new">パスワードをお忘れですか?</a>
              <input
                type="submit"
                value="サインイン"
                class="fluid ui button"
                data-disable-with="サインイン"
              />
              <div class="sign-up">
                <a href="/users/sign_up">サインアップ</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from './Header'
import Footer from './Footer'
export default {
  data() {
    return {
      alert: false
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>
<style scoped>
.main-content {
  margin-top: 2rem;
  width: 100%;
  position: relative;
  height: fit-content;
}
.container {
  width: 60%;
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
.action a {
  float: right;
  color: #4183c4;
  text-decoration: none;
  margin-right: 3%;
}
.sign-up {
  margin-bottom: 2rem;
}
.action input:hover {
  cursor: pointer;
  background-color: #babbbc;
}
</style>
