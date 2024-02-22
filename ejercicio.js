let btn = document.getElementById('btn')
let resultado = document.getElementById('resultado');

btn.addEventListener('click', ()=>{
    
    let numero = document.getElementById('num').value;
    let num = parseInt(numero);

    let fib = [];
    fib[0] = 0;
    fib[1] = 1;
    
    
    if(!isNaN(num) || num <= 0){
       
        
        for (let i = 2; i < num; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }

        
        resultado.innerHTML += "<h1 class='fib'>" + fib.join(", ") + "</h1>";
        
    
    }else{
        resultado.innerHTML = "<p class='fib'>Ingresa un numero porfavor</p>"
    }
})

 




    
    


