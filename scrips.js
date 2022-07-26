
class Auto {
    constructor(marca, modelo, precio, stock){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.stock = stock;
    }
}

const autos = []

const form = document.getElementById("idForm")
const divListado = document.getElementById("divListado")
const btnListado = document.getElementById("btnListado")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let marca = document.getElementById("idMarca").value;
    let modelo = document.getElementById("idModelo").value;
    let precio = document.getElementById("idPrecio").value;
    let stock = document.getElementById("idStock").value;

    const auto = new Auto (marca, modelo, precio, stock)
    autos.push(auto)

    form.reset()
})

btnListado.addEventListener("click", () => {
    autos.forEach(auto => {
        divListado.innerHTML += `
        <div class="card mt-3" style="width: 18rem;">
            <div class="card-body">
                <h2 class="card-title">${auto.modelo}</h2>
                <p class="card-text">Marca: ${auto.marca}</p>
                <p class="card-text">Precio: ${auto.precio}</p>
                <p class="card-text">Stock: ${auto.stock}</p>
            </div>
        </div>
        `
    })
})
