import Vue from '../src/vue.js'
const vm = new Vue({
    el: "#app",
    data: {
        user: {
            name: "daoxin",
            age: "28"
        },
        textStr: "vue 响应式的text指令",
        htmlStr: "vue 响应式的<span style='color:#bb0'>html</span>指令",
        modelStr: "daoxin",
        arr: [1, 2, 3],
        href:"http://www.liuhangbiao.com"

    },
    methods: {
        handleClick: function () {
            this.user.name = "my name is daoxin"
            this.arr.push(Math.floor(Math.random()*10))
        }
    }
})