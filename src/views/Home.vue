<template>
  <div class="home">
    <!-- <button @click="$router.go(-1)">返回</button>
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    <router-link to="/produce/123">
    产品123</router-link><br>
    <router-link to="/produce/abc">
    产品abc</router-link><br>
     <router-link to="/produce/789?from=China">
    产品789</router-link><br>
    <button @click="$router.push('/about')">about</button> -->
    <Header></Header>
    <van-tabs v-model="active" animated title-active-color="#f30">
      <van-tab v-for="index in 7" :title="'选项' + index" :key="index">内容{{index}}</van-tab>
    </van-tabs>
  </div>
</template>

<script>
 import Header from '../components/Header.vue'

export default {
  name: 'Home',
  data(){return {active:0,tabs:[],}},
   created(){
    this.getPage();
  },
  methods:{
    getPage(){
      this.$http.get("http://www.520mg.com/mi/page.php")
      .then(res=>{
        console.log(res.data);
        this.tabs = res.data.data.tabs;
      })
    }
  },
  components: {
    Header,
  }
}
</script>
