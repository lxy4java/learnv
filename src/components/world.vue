<template>
  <div class="world">

    <div class="org_box" v-show="showall" v-on:mouseout="hiddenme">
      <span class="org_bot_cor"></span> 边框法实现底部90度尖角对话框
    </div>

    <div class="org_box" v-show="showmy" v-on:mouseout="hiddenme">
      <span class="org_bot_cor_2"></span> 边框法实现底部90度尖角对话框
    </div>

    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'world',
    data() {
      return {
        showall: this.$store.getters.getAll,
        showmy: this.$store.getters.getMy,
        msg: 'Welcome to my world page'
      }
    },
    computed:{
       showall(){
         return this.$store.getters.getAll;
       },
       /***每个属性对应属性名所代表的方法，当dispatch发生时会调用computed方法**/
       showmy(){
         return this.$store.getters.getMy;
       }
    },
    methods: {
      hiddenme: function (event) {
          this.$store.dispatch('setMy', false);
          this.$store.dispatch('setAll', false);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  z-index: -1;
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
.world{
  height: 1000px;
  margin-top: 60px;
}

.org_box{
    height:480px;
    line-height:400px; 
    margin-left:30px; 
    padding-left:2em;
    background: #f3961c;
    position:relative; 
    width: 300px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    z-index: 999;
    position:absolute;
}
.org_bot_cor{
    /* width: 0; */
    /* height: 0; */
    /* font-size: 0; */
    border-width: 15px;
    border-style: solid;
    border-color: transparent transparent green;
    _border-color: #f3961c white white;
    /* overflow: hidden; */
    position: absolute;
    left: 40px;
    top: -30px;
    z-index: 999;
    position:absolute;
}

.org_bot_cor_2{
    /* width: 0; */
    /* height: 0; */
    /* font-size: 0; */
    border-width: 15px;
    border-style: solid;
    border-color: transparent transparent green;
    _border-color: #f3961c white white;
    /* overflow: hidden; */
    position: absolute;
    left: 160px;
    top: -30px;
    z-index: 999;
    position:absolute;
}
</style>