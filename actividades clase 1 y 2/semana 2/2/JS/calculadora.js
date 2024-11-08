let operacion = "";
let primerNumero = "";

function agregarNumero(num){

    const resultado = document.getElementById('resultado');
    resultado.value += num;
}

function limpiar(){

    document.getElementById('resultado').value="";
    primerNumero = "";
    operacion = "";
}

function agregarOperacion(op){
    const resultado = document.getElementById('resultado');
    if(resultado.value != ''){
        primerNumero = resultado.value;
        operacion = op;
        resultado.value = '';
    }
}

function calcularResultado(){
    const segundoNumero = document.getElementById('resultado').value;
    let res;
    //revisamos que los números tengan valor
    if(primerNumero != '' && segundoNumero != ''){
        switch (operacion) {
            case '+':
                console.log(res = parseFloat(primerNumero) + parseFloat(segundoNumero));
                res = parseFloat(primerNumero) + parseFloat(segundoNumero);
                break;

            case '-':
                    console.log(res = parseFloat(primerNumero) - parseFloat(segundoNumero));
                    res = parseFloat(primerNumero) - parseFloat(segundoNumero);
                break;

            case '*':
                    console.log(res = parseFloat(primerNumero) * parseFloat(segundoNumero));
                    res = parseFloat(primerNumero) * parseFloat(segundoNumero);
                break;

            case '/':
                if(segundoNumero == 0){
                    alert("Division by Zero")
                    return;
                    
                }
                    console.log(res = parseFloat(primerNumero) / parseFloat(segundoNumero));
                    res = parseFloat(primerNumero) / parseFloat(segundoNumero);
                break;
        
            default:
                break;
        }
        document.getElementById('resultado').value=res;
        primerNumero = '';
        operacion = '';

    }
}