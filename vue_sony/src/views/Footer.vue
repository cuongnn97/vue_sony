<template>
  <div class="footer">
    <p>©{{currentYear}} Sony Corporation</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear() // 2021
    }
  }
}
</script>
<style scoped>
.footer {
  bottom: 0;
  left: 0;
  position: absolute;
  font-size: 14px;
  width: 100%;
  text-align: center;
  border: 1px solid #dedede;
  background-color: white;
}
</style>
