<template>
    <header v-xyscroll>
        <label v-on:click="loadAll"> ALL </label><label v-on:click="loadMY"> MY </label>
        <button>登录</button>
        <button>注册</button>
    </header>
</template>


<script>
    export default {
        name: 'xyheader',
        data() {
            return {
                condition: true,
                msg: 'Welcome to my world page'
            }
        },
        methods: {
            loadAll: function (event) {
                /*var el = event.currentTarget;
                console.log(el.parentNode);
                var node = document.createTextNode("hehehehehe");
                el.parentNode.appendChild(node)
                */
                this.$store.dispatch('setAll', true);
                 this.$store.dispatch('setMy', false);

            },
            loadMY: function (event) {
                this.$store.dispatch('setMy', true);
                this.$store.dispatch('setAll', false);
            }

        }

    }
</script>


<style scoped>
    header {
        top: 0px;
        width: 96%;
        height: 50px;
        position: fixed;
        background: red;
    }
    
    label {
        font-weight: normal;
        width: 70px;
        float: left;
        margin-left: 50px;
        margin-top: 10px;
        background: limegreen;
        text-align: center;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    
   button{
       float: right;
       margin: 10px;
       background: limegreen;
       border-top-left-radius: 5px;
       border-top-right-radius: 5px;
       border-bottom-left-radius: 5px;
       border-bottom-right-radius: 5px;
   }
</style>