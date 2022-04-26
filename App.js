var app = new Vue({
    el: '#App',
    data: {
        message: 'Hello Vue!',
        numeroA : 35,
        numeroB : 5,
    },
    methods: {
        calculoMatematico(){
            return this.numeroA + this.numeroB
        }

    },
    computed:{
        duplicar(){
            return this.numeroA * 2
        }
    }

})


