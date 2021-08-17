<template>
  <div>
    <Header :rightMenu="true" />
    <div class="main-content">
      <h1>
        著作権譲渡
      </h1>
      <div class="alert" v-if="errorMessage">
        {{ errorMessage }}
      </div>
      <div class="container">
        <div class="content">
          <div class="fields">
            <label>作曲者名</label><br /><br />
            <input
              v-model="creativeWorkFromDb.user_name"
              class="input-text"
              type="text"
              disabled
            />
          </div>
          <div class="fields">
            <label>作品名フリガナ</label>
            <input
              v-model="creativeWorkFromDb.name_kana"
              class="input-text"
              type="text"
              disabled
            />
          </div>
          <div class="fields">
            <label>作品名</label>
            <input
              v-model="creativeWorkFromDb.name"
              class="input-text"
              type="text"
              disabled
            />
          </div>
          <div class="fields">
            <label>ジャンル</label>
            <input
              v-model="creativeWorkFromDb.genre"
              class="input-text"
              type="text"
              disabled
            />
          </div>
          <div class="fields">
            <label>サブジャンル</label>
            <input
              v-model="creativeWorkFromDb.sub_genre"
              class="input-text"
              type="text"
              disabled
            />
          </div>
          <div class="fields">
            <label>リリース日</label>
            <input
              v-model="creativeWorkFromDb.release_date"
              class="input-text"
              type="text"
              disabled
            />
          </div>
          <div class="fields">
            <label>販売開始日</label>
            <input
              v-model="creativeWorkFromDb.sale_start_date"
              class="input-text"
              type="text"
              disabled
            />
          </div>
          <div class="fields">
            <label>譲受人ID</label>
            <input
              v-model="formElements.assignee_ids"
              class="input-text"
              type="text"
            />
          </div>
          <div class="fields" style="display:inline-block">
            <div
              v-for="copyrightCategory in copyrightCategories"
              :key="copyrightCategory.id"
              class="checkbox-field"
            >
              <input
                :value="copyrightCategory.id"
                v-model="creativeWorkFromDb.copyright_categories"
                @change="addCategory(copyrightCategory.id)"
                class="checkbox-input"
                type="checkbox"
                disabled
              />
              <span>{{ copyrightCategory.name }}</span>
            </div>
          </div>
          <div class="fields" style="display:grid;">
            <label>契約期間</label>
            <div class="range-date">
              <input
                v-model="formElements.start_date"
                id="input-range-date"
                type="date"
              />
              <span>~</span>
              <input
                v-model="formElements.end_date"
                id="input-range-date"
                type="date"
                style="float: right"
              />
            </div>
          </div>
          <div class="fields">
            <label>契約自動更新</label><br /><br />
            <div
              v-for="contract in contracts"
              :key="contract.id"
              class="radio-field"
            >
              <input
                v-model="formElements.auto_renewal"
                :value="contract.id"
                type="radio"
              />
              <span>{{ contract.value }}</span>
            </div>
          </div>
          <div class="action-form">
            <a class="cancel-button" href="/">キャンセル</a>
            <a class="register-button" @click="createContracts()">著作物登録</a>
          </div>
        </div>
        <div class="image-content">
          <label>アートワーク</label>
          <img
            :src="
              'https://bc-secure-storage-api-cuongnn-bucket83908e77-nczm2ffo15wh.s3.ap-northeast-1.amazonaws.com/' +
                creativeWorkFromDb.art_work_file_path
            "
            alt="a"
          />
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
      contracts: [
        { id: false, value: '無' },
        { id: true, value: '有' }
      ],
      creativeWorkFromDb: [],
      formElements: {
        creator_id: '',
        assignor_ids: '',
        assignee_ids: '',
        creative_work_id: '',
        start_date: '',
        end_date: '',
        auto_renewal: true,
        copyright_categories: []
      },
      genres: this.$store.state.genres,
      subGenres: this.$store.state.subGenres,
      copyrightCategories: this.$store.state.copyrightCategories,
      errorMessage: ''
    }
  },
  created() {
    axios
      .get(
        'https://9gfglk4kul.execute-api.ap-northeast-1.amazonaws.com/prod/v1/creative_works/' +
          this.$route.query.creative_work_id
      )
      .then(response => {
        this.creativeWorkFromDb = response.data
        axios
          .get(
            'https://9gfglk4kul.execute-api.ap-northeast-1.amazonaws.com/prod/v1/users/' +
              this.creativeWorkFromDb.creator_ids
          )
          .then(response => {
            this.creativeWorkFromDb.user_name = response.data.name
          })
        if (this.creativeWorkFromDb.release_date !== null) {
          this.creativeWorkFromDb.release_date =
            this.creativeWorkFromDb.release_date.substring(0, 4) +
            '/' +
            this.creativeWorkFromDb.release_date.substring(
              4,
              this.creativeWorkFromDb.release_date.length
            )
          this.creativeWorkFromDb.release_date =
            this.creativeWorkFromDb.release_date.substring(0, 7) +
            '/' +
            this.creativeWorkFromDb.release_date.substring(
              7,
              this.creativeWorkFromDb.release_date.length
            )
        }
        if (this.creativeWorkFromDb.sale_start_date !== null) {
          this.creativeWorkFromDb.sale_start_date =
            this.creativeWorkFromDb.sale_start_date.substring(0, 4) +
            '/' +
            this.creativeWorkFromDb.sale_start_date.substring(
              4,
              this.creativeWorkFromDb.sale_start_date.length
            )
          this.creativeWorkFromDb.sale_start_date =
            this.creativeWorkFromDb.sale_start_date.substring(0, 7) +
            '/' +
            this.creativeWorkFromDb.sale_start_date.substring(
              7,
              this.creativeWorkFromDb.sale_start_date.length
            )
        }
      })
    for (let i = 0; i < this.copyrightCategories.length; i++) {
      this.formElements.copyright_categories.push(
        this.copyrightCategories[i].id
      )
    }
  },
  methods: {
    createContracts() {
      this.formElements.creator_id = this.$route.query.owner_id
      this.formElements.assignor_ids = this.creativeWorkFromDb.creator_ids
      this.formElements.creative_work_id = this.$route.query.creative_work_id
      this.formElements.copyright_categories = this.creativeWorkFromDb.copyright_categories
      this.formElements.start_date = this.formElements.start_date.replaceAll(
        '-',
        ''
      )
      this.formElements.end_date = this.formElements.end_date.replaceAll(
        '-',
        ''
      )
      axios
        .post(
          'https://9gfglk4kul.execute-api.ap-northeast-1.amazonaws.com/prod/v1/contracts',
          JSON.stringify(this.formElements)
        )
        .then(response => {
          window.location.href = '/'
        })
        .catch(error => {
          if (error.response !== undefined) {
            this.errorMessage = error.response.data.message
          }
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
.content {
  width: 50%;
}
.image-content {
  width: 40%;
  display: flex;
  flex-direction: column;
}
.image-content img {
  width: 300px;
  height: 168px;
  object-fit: cover;
}
.image-content label {
  width: 100%;
  text-align: left;
  margin-bottom: 25px;
}
.main-content {
  margin-top: 2rem;
  width: 100%;
  position: relative;
  height: fit-content;
}
.alert {
  width: 96.5%;
  color: #9f3a38;
  background-color: #fff6f6;
  padding: 14px 21px;
  text-align: left;
  border: 1px solid #e1b7b7;
  border-radius: 3px;
  font-size: 14px;
}
.container {
  display: flex;
  width: 60%;
  margin: 0 auto;
  padding-bottom: 10rem;
  justify-content: space-between;
}
.main-content h1 {
  margin: 0 auto;
  width: 60%;
  color: #00b5ad;
  text-align: left;
  border-bottom: 2px solid #00b5ad;
  padding-bottom: 0.21428571rem;
  margin-bottom: 25px;
}
.fields label {
  margin-top: 1rem;
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
#input-range-date {
  width: 45%;
  padding: 10px 6px;
  border: 1px solid #dedede;
  border-radius: 3px;
  float: left;
}
.radio-field {
  width: 45%;
  float: left;
  text-align: left;
  margin-bottom: 1rem;
}
.fields select {
  width: 101%;
  padding: 10px 6px;
  border: 1px solid #dedede;
  border-radius: 3px;
  background-color: white;
}
.fields .range-date {
  display: flex;
  align-items: center;
  justify-content: space-between
}
.checkbox-field {
  width: 40%;
  float: left;
  text-align: left;
  margin-bottom: 1rem;
  background-color: white;
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
.register-button {
  float: left;
  background-color: #2185d0;
  text-decoration: none;
  color: white;
  padding: 8px 25px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  margin-left: 0.3rem;
}
@media screen and (max-width: 1199px) {
  .container {
    width: 933px;
  }
  .main-content h1 {
    width: 933px;
  }
}
@media screen and (max-width: 993px) {
  .container {
    width: 723px;
  }
  .main-content h1 {
    width: 723px;
  }
}
</style>
