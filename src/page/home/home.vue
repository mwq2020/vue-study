<template>
  <div>

    <!-- 头部组件标签 -->
    <head-top></head-top>


    <h2>this is home page</h2>
    <hr/>
    <h2>{{message}}</h2>
    <router-link to="/user">去用户中心</router-link>


    <!-- 尾部组件标签 -->
    <foot-guide></foot-guide>
  </div>

</template>

<script>
  //引用加载的组件
  import headTop from '../../components/header/header'
  import footGuide from '../../components/footer/footer'

  export default {
      data(){
          return{
              message: 'hello vue',   //当前城市
          }
      },
      //指定组件必须
      components: {
      	headTop,
      	footGuide,
      },
  }
</script>

<style>
</style>
