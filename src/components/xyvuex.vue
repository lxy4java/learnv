<template>
    <div id="xyvuex">
        <h1 v-if="condition">test vuex {{condition}}
        </h1>
        <h2 v-show="vshow">{{vshow}}</h2>
        <button v-on:click="myshow">{{name}}</button>
    </div>
</template>

<script>

    export default {
        name: 'xyvuex',
        data() {
            return { condition: true, name: "隐藏",vshow: true }
        },
        methods: {
            myshow: function () {
                if (this.condition == true) {
                    this.condition = false;
                    this.name = "隐藏";
                    this.vshow=false;
                } else {
                    this.condition = true;
                    this.name = "展示";
                    this.vshow=true;
                }


            }
        }

    }
</script>

<style>

</style>