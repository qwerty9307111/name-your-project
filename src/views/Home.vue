<template>
  <div class="home">
    <!-- <HelloWorld :msg="'Hello World'"></HelloWorld> -->
    <div class="side-bar">
      <el-button @click="getRandomName" class="submit" type="primary" circle icon="el-icon-arrow-right"></el-button>
      <el-form>
        <el-form-item>
          <el-radio-group class="mt-20" v-model="type">
            <el-radio-button v-for="type in types" :label="type" :key="type"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="命名规范：">
          <el-select class="nomenclature" @change="showResult" v-model="nomenclature" placeholder="请选择">
            <el-option
              v-for="item in nomenclatureOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
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

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data () {
    return {
      type: '随机',
      types: ['随机', '翻译'],
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
    getRandomName () {
      this.randomName = getRandomName()
      this.showResult()
    },
    showResult () {
      if (!this.randomName) return false
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
