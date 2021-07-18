<template>
  <div class="home">
    <h1>props传参</h1>
    <p>
      props传参用于父向子组件传参。利用props进行组件传参的方法很简单，只需要在调用组件时将对应props名称以属性的形式写入组件元素中即可将所需参数传入子组件。子组件需要在编写时为
      所需要的参数使用props字段提前声明参数数据类型。如：
      <code>export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}</code><br/>
如此即可在子组件中以类似data字段的使用方法使用props。如下例中，输入内容后点击按钮便会创建一个组件并传入输入值作为参数：
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