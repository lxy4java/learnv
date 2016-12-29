<template>
  <div id="myapp">
    <div id="content">
      <xyHeader/>
      <world></world>
    </div>
    <div id="navi">
      <xyNavi></xyNavi>
    </div>
  </div>
</template>

<script>
  import World from '../../components/world'
  import xyHeader from '../../components/xyheader'
  import xyNavi from '../../components/xynavi'
  export default {
    name: 'myapp',
    components: { xyHeader, World, xyNavi }
  }
</script>

<style>
#myapp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: blue;
  width: 100%;
  margin: 0px;
}
#content{
  width: 96%;
  float: right;
}
#navi{
  position: fixed;
  width: 5%;
  height: 100%;
  float: left;
  top: 0px;
  left: 0px;
  background: green;
}

</style>