

class Auto {
    constructor(marca, modelo, año, precio, stock){
        this.marca = marca
        this.modelo = modelo
        this.año = año
        this.precio = precio
        this.stock = stock
    }
}

const auto1 = new Auto("Ford", "Focus", 2019, `5.000.000`, 20)
const auto2 = new Auto("Renault", "Sandero rs", 2021, `3.500.000`, 5)
const auto3 = new Auto("Volkswagen", "Polo GTS", 2022, `6.000.000`, 10)
const auto4 = new Auto("Toyota", "Etios", 2018, `2.500.000`, 7)
const auto5 = new Auto("DS", "DS3 sport chic", 2017, `4.000.000`, 3)


const autos = [auto1, auto2, auto3, auto4, auto5]

const divAutos = document.getElementById("autos")

autos.forEach(auto =>{
    divAutos.innerHTML += `
        <div>
            <p>Marca:${auto.marca}</p>
            <p>Modelo:${auto.modelo}</p>
            <p>Año:${auto.año}</p>
            <p>Precio:${auto.precio}</p>
            <p>Stock:${auto.stock}</p>
        </div>
    `
});