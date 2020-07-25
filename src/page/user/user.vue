<template>
  <div>
    <head-top></head-top>
    this is user page
    <router-link to="/home">去首页</router-link>

    <foot-guide></foot-guide>
  </div>
</template>

<script>
  import headTop from '../../components/header/header'
  import footGuide from '../../components/footer/footer'

  export default {
      data(){
          return{
              guessCity: '',   //当前城市
              guessCityid: '', //当前城市id
          }
      },
      components: {
      	headTop,
      	footGuide,
      },
  }
</script>

<style>
</style>
