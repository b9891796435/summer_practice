<template>
  <div class="home">
    <h1>DOM事件与Vue自定义事件</h1>
    <p>
      自定义事件用于子组件向父组件传递数据。在事件被触发时所需传递的数据将会被包含入事件对象，然后由父组件上的侦听器接收。该部分基础为DOM事件，所以要使用自定义事件，
      就需要对DOM事件有所了解。
    </p>
    <h2>DOM事件</h2>
    <p>
      DOM事件是在DOM中满足一定条件所触发的事件，会经由Web api转化为事件对象并以捕获-冒泡顺序依次被侦听器所接受。event对象在数据传递过程中最常用的属性是event.target。这个属性是对触发事件的元素的引用。Event（）为事件对象的构造函数，使用target.dispatchEvent（event）方法在target上派发event事件。
    </p>
    <h2>Vue自定义事件</h2>
    <p>
      
    </p>
    <el-input v-model="input" placeholder="请输入内容">
      <template #append>
      <el-button icon="el-icon-search" @click="onClickButton"></el-button>
    </template>
    </el-input>
    <li v-for="i in magic" :key="i.message">
      <HelloWorld  :msg="i.message"/>
    </li>
    <h2>遇到的问题</h2>
      <p>主要问题来源于过长时间没有使用Vue组件导致语法混乱以及Vscode的背刺。组件语法错误使用F12看报错加百度以及查看文档解决，Vscode背刺使用百度/谷歌解决。</p>
    <h2>其他感受</h2>
    <p>太长时间不写东西果然会手生，<del>死线是第一生产力（bushi</del></p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      input:'',
      magic:[],
    }
  },
  methods:{
    onClickButton:function(){
      console.log(this.input)
      this.magic.push({message:this.input})
      this.input=''
    }
  }
}
</script>
<style scoped>
div{
  text-align: left;
}
</style>