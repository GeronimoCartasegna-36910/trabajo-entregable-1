let free = false 

const ValidarEntrada = (time) =>{
    let edad = prompt("¿Cual es tu edad?");
    if (edad > 18) {
        if (time >= 2 && time < 7 && free == false){
            alert ("podes pasar gratis paaa porque sos la primera persona despues de las 2 AM");
            free = true;

        } else{
            alert(`son las ${time}:00Hs y podes pasar, pero tenes que pagar entrada`);
        }



    }else {
        alert("capo sos menor de edad, no podes pasar")
    }
}

ValidarEntrada(23)
ValidarEntrada(4)
ValidarEntrada(2)
ValidarEntrada(5)
ValidarEntrada(8)