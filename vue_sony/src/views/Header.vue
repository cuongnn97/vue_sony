<template>
  <div class="header">
    <div class="logo">
      <a href="/">
        <img src="../assets/sonylogo.png" alt="a" />
      </a>
    </div>
    <div v-show="rightMenu" class="right-menu">
      <a class="item" href="/login">
        cuong
      </a>
      <a class="item" href="/login">
        ログアウト
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    rightMenu: {
      type: Boolean,
      required: true,
      default: false
    }
  }
}
</script>
<style scoped>
.header {
  margin-top: -0.5rem;
  margin-left: -0.5rem;
  min-height: 2.85714286rem;
  box-shadow: 5px;
  border: 1px solid rgba(34, 36, 38, 0.15);
  box-shadow: 0px 1px 1px #dedede;
  border-radius: 0.28571429rem;
}
.logo {
  width: 10%;
  float: left;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
}
.right-menu {
  width: 80%;
  float: right;
  text-align: right;
}
.item {
  color: #000000de;
  font: 18px sans-serif;
  text-decoration: none;
  padding: 0.7rem;
  display: inline-block;
  border-left: 1px solid #e8e8e9;
}
</style>
