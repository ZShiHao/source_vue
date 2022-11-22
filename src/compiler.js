const App = {
    name: 'App',
    data() {
        return {
            text: 'zhang',
            show: false,
            items: [1, 2, 3]
        }
    },
    methods: {
        handle() {

        }
    },
    template: '<div v-for="ite in items" v-show="show" @click="1+1" v-bind:value="text" class="hi"><h1>{{text}}</h1>zhang</div>'
}

let vm = new Vue({
    render: h => h(App),
}).$mount('#app')
console.log(vm)

function render() {
    with (this) {
        function f(ite) {
            const data = {
                directives: [{name: "show", rawName: "v-show", value: (show), expression: "show"}],
                staticClass: "hi",
                attrs: {"value": text},
                on: {
                    "click": function ($event) {
                        1 + 1
                    }
                }
            }
            return _c('div', data, [_c('h1', [_v(_s(text))]), _v("zhang")])
        }

        return _l((items), f)
    }
}