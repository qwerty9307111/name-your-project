<template>
  <div class="home">
    <!-- <HelloWorld :msg="'Hello World'"></HelloWorld> -->
    <div class="side-bar">
      <el-button
        @click="getRandomName"
        class="submit"
        type="primary"
        circle
        icon="el-icon-arrow-right"
      ></el-button>
      <el-form>
        <el-form-item>
          <el-radio-group class="mt-20" v-model="type">
            <el-radio-button v-for="type in types" :label="type" :key="type"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Specification:">
          <el-select
            class="nomenclature"
            @change="showResult"
            v-model="nomenclature"
            placeholder="Select"
          >
            <el-option
              v-for="item in nomenclatureOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item v-show="showTextArea">
          <el-input type="textarea" :rows="2" placeholder="Please input" v-model="text"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="content">{{result}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import getRandomName from '@/script/getRandomName'
import changeCase from '@/script/changeCase'
import cases from '@/script/cases'
import md5 from 'blueimp-md5'
import jsonp from 'jsonp'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  watch: {
    type () {
      console.log(this.type)
      this.showTextArea = this.type === 'Translation'
    }
  },
  data () {
    return {
      showTextArea: false,
      text: '',
      type: 'Random Name',
      types: ['Random Name', 'Translation'],
      nomenclature: '',
      nomenclatureOptions: [],
      result: '',
      randomName: ''
    }
  },
  created () {
    this.nomenclatureOptions = []
    this.nomenclature = cases[0]
    cases.forEach(item => {
      this.nomenclatureOptions.push({
        label: item,
        value: item
      })
    })
  },
  methods: {
    translate (q = '') {
      const appId = '20200702000511306'
      const secretKey = 'W3jr9aME239y9PXF0kTu'
      const salt = (new Date()).getTime()
      const sign = md5(appId + q + salt + secretKey)
      const baseUrl = {
        http: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
        https: 'https://fanyi-api.baidu.com/api/trans/vip/translate'
      }
      const url = `${baseUrl.https}?q=${encodeURI(q)}&from=zh&to=en&appid=${appId}&salt=${salt}&sign=${sign}&action=1`
      jsonp(url, null, (err, data) => {
        if (err) {
          console.log('err', err)
          this.result = ''
          this.randomName = ''
        }
        if (data) {
          try {
            this.randomName = data.trans_result[0].dst.split(' ')
          } catch (e) {
            this.randomName = ''
          }
          this.showResult()
        }
      })
    },
    getRandomName () {
      if (this.type === 'Random Name') {
        this.randomName = getRandomName()
        this.showResult()
      } else {
        if (!this.text) {
          this.result = ''
          this.randomName = ''
        } else {
          this.translate(this.text)
        }
      }
    },
    showResult () {
      if (!this.randomName) return (this.result = '')
      this.result = changeCase(this.randomName, this.nomenclature)
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: flex-start;
}
.side-bar {
  position: relative;
  max-width: 350px;
  flex: 1;
  background-color: #21252b;
  .submit {
    position: absolute;
    z-index: 9;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
  }
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 2;
  background-color: #282c34;
  font-size: 50px;
  color: white;
}
</style>
