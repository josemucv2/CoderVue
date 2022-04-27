var app = new Vue({
    el: '#App',
    data: {
        message: 'Hello Vue!',
        numeroA : 35,
        numeroB : 5,
        contador :0,
    },
    
    methods: {
        
        calculoMatematico(){
            return this.numeroA + this.numeroB
        },
        
        contadorsuma(){
           this.contador++
        },
        
        contadorResta(){ 
            if(this.contador >0) {
                this.contador--
            } else {
                alert('no se aceptan numeros negativos')
            }
        }
    },
    
    computed:{
        duplicar(){
            return this.numeroA * 2
        }
    }

})


