<template>
  <div>
    <h2>個人所有の著作権一覧</h2>
    <h3>cuongが所有する著作権一覧</h3>
    <CopyrightList :ownerId="'user_id:40c95716-f9be-44db-98d2-bb7d67033716'" />
  </div>
</template>
<script>
import axios from "axios";
import CopyrightList from "./CopyrightList";
import Settings from "../../../constants/Settings.js";
import SercueStorageApi from "../../../constants/SercueStorageApi.js";
const api = new SercueStorageApi(Settings.api_url);
export default {
  data() {
    return {
      displayFlag: true,
      allSelected: false,
      ownedCopyrightIds: [],
      ownedCopyrights: [],
      creativeWorkIds: [],
    };
  },
  async created() {
    const copyrightsData = await api.request(
      "get",
      "users/user_id:40c95716-f9be-44db-98d2-bb7d67033716/copyrights"
    );
    for (const copyright of copyrightsData.data) {
      if (this.creativeWorkIds.indexOf(copyright.creative_work_id) === -1) {
        this.creativeWorkIds.push(copyright.creative_work_id);
      }
    }
    for (const creativeWork of this.creativeWorkIds) {
      const copyrights = api.request("get", "creative_works/" + creativeWork);
      this.ownedCopyrights.push(copyrights.data);
    }
  },
  methods: {},
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
h3 {
  text-align: left;
  margin: 0;
  margin-left: 1.3rem;
  width: 100%;
  font-size: 18px;
}
</style>
