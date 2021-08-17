<template>
  <div>
    <Header :rightMenu="true" />
    <div class="main-content">
      <div class="alert" v-if="errorMessage">
        {{ errorMessage }}
      </div>
      <div class="container">
        <div class="content">
          <h1>
            著作物登録
          </h1>
          <div class="fields">
            <label>作曲者名</label><br /><br />
            <div
              v-for="(user, index) in users"
              :key="user.id"
              class="radio-field"
            >
              <input
                v-model="formElements.creator_ids[0]"
                :value="user.id"
                type="radio"
              />
              <span>{{ user.name }}</span>
            </div>
            <div
              v-for="(group, index) in groups"
              :key="group.id"
              class="radio-field"
            >
              <input
                v-model="formElements.creator_ids[0]"
                :value="group.id"
                type="radio"
              />
              <span>{{ group.name }}</span>
            </div>
          </div>
          <div class="fields">
            <label>共作者追加</label>
            <div
              v-for="(coAuthor, i) in coAuthors"
              :key="i"
              class="input-coauthor"
            >
              <input
                :id="'input-text-coauthor-' + i"
                v-model="coAuthor.id"
                placeholder="作曲者ID"
                type="text"
              />
              <input
                :id="'input-button-' + i"
                type="button"
                @click="addCoauthor"
                value="ADD"
              />
              <input
                :id="'input-button-delete-' + i"
                type="button"
                @click="deleteCoauthor(i)"
                value="DELETE"
                v-show="coAuthor.displayFlag"
              />
            </div>
          </div>
          <div class="fields">
            <label>作品名フリガナ</label>
            <input
              v-model="formElements.creative_work_name_kana"
              id="input-text-name-kana"
              type="text"
            />
          </div>
          <div class="fields">
            <label>作品名</label>
            <input
              v-model="formElements.creative_work_name"
              id="input-text-name"
              type="text"
            />
          </div>
          <div class="fields">
            <label>ジャンル</label>
            <select
              name="genres"
              id="genres"
              @change="onChangeGenre($event)"
              v-model="formElements.creative_work_genre"
            >
              <option value="0" selected></option>
              <option
                v-for="(genre, index) in genres"
                :key="index"
                :value="genre"
                >{{ genre }}</option
              >
            </select>
          </div>
          <div class="fields">
            <label>サブジャンル</label>
            <select
              name="subGenres"
              id="subGenres"
              v-model="formElements.creative_work_sub_genre"
            >
              <option value="0" selected></option>
              <option
                v-for="(pickedSubgenre, index) in pickedSubgenres"
                :key="index"
                :value="pickedSubgenre.subGenres"
                >{{ pickedSubgenre.subGenres }}</option
              >
            </select>
          </div>
          <div class="fields">
            <label>リリース日</label>
            <input
              v-model="formElements.release_date"
              id="input-text"
              type="date"
            />
          </div>
          <div class="fields">
            <label>販売開始日</label>
            <input
              v-model="formElements.sale_start_date"
              id="input-text"
              type="date"
            />
          </div>
          <div class="fields">
            <label>アートワークファイル</label>
            <input
              @change="onFileChange($event, 'artworkFile')"
              id="input-text-artwork"
              type="file"
            />
          </div>
          <div class="fields">
            <label>著作物ファイル</label>
            <input
              @change="onFileChange($event, 'copyrightFile')"
              id="input-text-copyright"
              type="file"
            />
          </div>
          <div class="fields">
            <div
              v-for="copyrightCategory in copyrightCategories"
              :key="copyrightCategory.id"
              class="checkbox-field"
            >
              <input
                :value="copyrightCategory.id"
                @change="addCategory(copyrightCategory.id)"
                class="checkbox-input"
                type="checkbox"
                checked
              />
              <span>{{ copyrightCategory.name }}</span>
            </div>
          </div>
          <div class="action-form">
            <a class="cancel-button" href="/">キャンセル</a>
            <a class="register-button" @click="register">著作物登録</a>
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
import AWS from 'aws-sdk'
export default {
  data() {
    return {
      users: [
        { id: 'user_id:40c95716-f9be-44db-98d2-bb7d67033716', name: 'cuong' }
      ],
      groups: [],
      pickedSubgenres: [],
      coAuthors: [{ id: '', displayFlag: false }],
      formElements: {
        creator_ids: [],
        creative_work_name_kana: '',
        creative_work_name: '',
        creative_work_genre: '',
        creative_work_sub_genre: '',
        creative_work_art_work_file: '',
        creative_work_file: '',
        release_date: '',
        sale_start_date: '',
        copyright_categories: []
      },
      creative_work_file: null,
      creative_work_art_work_file: null,
      errorMessage: '',
      genres: this.$store.state.genres,
      subGenres: this.$store.state.subGenres,
      copyrightCategories: this.$store.state.copyrightCategories
    }
  },
  created() {
    for (let i = 0; i < this.copyrightCategories.length; i++) {
      this.formElements.copyright_categories.push(
        this.copyrightCategories[i].id
      )
    }
    axios
      .get(
        'https://9gfglk4kul.execute-api.ap-northeast-1.amazonaws.com/prod/v1/users/user_id:40c95716-f9be-44db-98d2-bb7d67033716/groups'
      )
      .then(response => {
        this.groups = response.data
      })
  },
  methods: {
    onChangeGenre(event) {
      this.pickedSubgenres = []
      for (let i = 0; i < this.subGenres.length; i++) {
        if (this.subGenres[i].genres.toString() === event.target.value) {
          this.pickedSubgenres.push(this.subGenres[i])
        }
      }
    },
    onFileChange(event, fileName) {
      var files = event.target.files || event.dataTransfer.files
      if (!files.length) return
      if (fileName === 'artworkFile') {
        this.creative_work_art_work_file = files[0]
      } else if (fileName === 'copyrightFile') {
        this.creative_work_file = files[0]
      }
    },
    addCategory(id) {
      const index = this.formElements.copyright_categories.indexOf(id)
      if (index > -1) {
        this.formElements.copyright_categories.splice(index, 1)
      } else {
        this.formElements.copyright_categories.push(id)
      }
    },
    addCoauthor() {
      this.coAuthors.push({ id: '', displayFlag: true })
    },
    deleteCoauthor(i) {
      this.coAuthors.splice(i, 1)
    },
    uploadFile(file, type) {
      var fileName = file.name
      var albumPhotosKey = 'creative_works/'

      var photoKey = albumPhotosKey + fileName

      // Use S3 ManagedUpload class as it supports multipart uploads
      AWS.config.region = 'ap-northeast-1'
      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'ap-northeast-1:f9f79180-8602-4034-a400-8db839a07c45'
      })
      var upload = new AWS.S3.ManagedUpload({
        params: {
          Bucket: 'bc-secure-storage-api-cuongnn-bucket83908e77-nczm2ffo15wh',
          Key: photoKey,
          Body: file
        }
      })

      upload
        .promise()
        .then(data => {
          if (type == 'creative_work_file') {
            this.formElements.creative_work_file = this.formatkey(
              data.Location.replaceAll('https://', '')
            )
            this.createCreativeWorks()
          } else if (type == 'creative_work_art_work_file') {
            this.formElements.creative_work_art_work_file = this.formatkey(
              data.Location.replaceAll('https://', '')
            )
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    register() {
      this.formElements.creator_ids.length = 1;
      if (this.coAuthors.length > 0) {
        for (let i = 0; i < this.coAuthors.length; i++) {
          if (this.coAuthors[i].id !== '') {
            this.formElements.creator_ids.push(this.coAuthors[i].id)
          }
        }
      }
      this.formElements.release_date = this.formElements.release_date.replaceAll(
        '-',
        ''
      )
      this.formElements.sale_start_date = this.formElements.sale_start_date.replaceAll(
        '-',
        ''
      )
      //UPLOAD FILE TO S3
      this.uploadFile(
        this.creative_work_art_work_file,
        'creative_work_art_work_file'
      )
      this.uploadFile(this.creative_work_file, 'creative_work_file')
    },
    formatkey(str) {
      var getString =
        str.split('.')[0] + '/' + str.split('/')[1] + '/' + str.split('/')[2]
      return getString
    },
    createCreativeWorks() {
      console.log(JSON.stringify(this.formElements))
      axios
        .post(
          'https://9gfglk4kul.execute-api.ap-northeast-1.amazonaws.com/prod/v1/creative_works',
          JSON.stringify(this.formElements)
        )
        .then(response => {
          console.log(response)
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
  width: 1127px;
  margin: 0 auto;
  padding-bottom: 10rem;
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
input[id*='input-text'] {
  width: 100%;
  padding: 10px 6px;
  border: 1px solid #dedede;
  border-radius: 3px;
}
input[id*='input-text-coauthor'] {
  width: 50%;
  margin-bottom: 1rem;
  padding: 10px 6px;
  border: 1px solid #dedede;
  border-radius: 3px;
  float: left;
}
input[id*='input-button'] {
  float: left;
  padding: 11px 18px;
  margin-left: 0.5rem;
  background-color: #e0e1e2;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  color: #00000099;
  cursor: pointer;
}
input[id*='input-button-delete'] {
  float: left;
  padding: 11px 18px;
  margin-left: 0.5rem;
  background-color: #e0e1e2;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  color: #00000099;
  cursor: pointer;
}
.radio-field {
  width: 40%;
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
}
@media screen and (max-width: 993px) {
  .container {
    width: 723px;
  }
}
</style>
