<template>
  <div>
    <!-- <span>{{index}}</span>   -->
    <p>number is {{$store.getters.getCountByIndex(index)}}</p>
    <button @click="inc">+</button>&emsp;&emsp;
    <button @click="dec">-</button>
  </div>
</template>

<script>
export default {
  props:{
      index:Number
  },
  methods: {
    inc() {
      this.$store.commit('updateCountByIndex',{
          index:this.index,
          value:1
      });
    },
    dec() {
     this.$store.commit('updateCountByIndex',{
          index:this.index,
          value:-1      })
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
