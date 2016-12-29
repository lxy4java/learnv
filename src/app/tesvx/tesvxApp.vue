<template>
  <div id="tesvxapp">
    <vuex></vuex>
  </div>
</template>

<script>
import vuex from '../../components/xyvuex'

export default {
  name: 'tesvxapp',
  components: {
    vuex
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
