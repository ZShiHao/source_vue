const textComponent={
    data(){
        return {
            text:'zhang'
        }
    },
    template:'<div>{{text}}<input v-model="text"/></div>'
}


const App = {
    name: 'App',
    data() {
        return {
            text: 'zhang',
            show: true,
        }
    },
    components:{
        textComponent
    },
    template: '<div><text-component/><text-component></text-component></div>'
}

let vm = new Vue({
    data(){
        return {
            show:true
        }
    },
    components:{
        textComponent
    },
    template:'<div><text-component/><text-component></text-component></div>'
})
vm.$mount('#app')
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