import Vue from 'vue'

Vue.directive('xyscroll', {
  // 做绑定的准备工作
  // 比如添加事件监听器，或是其他只需要执行一次的复杂操作
  // el 表示当前elment，其他参数见官网
  bind: function (el) {
    var beforeScroll=0;
    window.addEventListener("scroll",function(e){
      var alfterScroll =document.body.scrollTop;
      if(alfterScroll-beforeScroll<0){
        el.style.display='block';
      }else{
        el.style.display='none';
      }
      beforeScroll=alfterScroll;
    })
  },

})