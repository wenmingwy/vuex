<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <input type="text" v-model="inputNum" placeholder=""> -->      
       <Counter v-for="n in 5" v-bind:key="n" v-bind:index="n"/> 
      <!-- <Counter/>  -->
  </div>
</template>

<script>
import Counter from './components/counter.vue'
export default {
  name:'app',
  components: {
    Counter
  },
  data(){
    return {
    } 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
