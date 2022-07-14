

class Auto {
    constructor(marca, modelo, año, precio, stock){
        this.marca = marca
        this.modelo = modelo
        this.año = año
        this.precio = precio
        this.stock = stock
    }
}

const Autos = []
let marca, modelo, año, precio, stock, continua, filtros

function BuscarPorMarca (Autos){
    let NombreMarca = prompt("Ingrese la marca que desee hayar")

    let marcaBuscada = Autos.find(Auto => Auto.marca == NombreMarca)

    if(marcaBuscada == undefined){
        console.log("marca no encontrada")
    } else {
        console.log(marcaBuscada)
    }
}

function BuscarPorPrecio (Autos){
    let precio = parseFloat(prompt("Ingrese un precio"))
    let precioBuscado = Autos.filter (Auto => Auto.precio >= precio)

    if(precioBuscado.length == 0){
        console.log("no hay productos con este precio")
    } else {
        console.log(precioBuscado)
    }
}

function  OrdenarAutos (Autos) {

    let MetodoOrdenamiento = parseInt(prompt("Ingrese 1 para ordenar de menor a mayor, 2 para ordenar de mayor a menor"))

    if(MetodoOrdenamiento === 1 ){
        console.log(Autos.sort((a,b) => a-b))

    }else if(MetodoOrdenamiento === 2){
        console.log(Autos.sort((a,b) => b-a))
    }    
}



do{
    

    do{
        marca = prompt("Ingrese la marca del vehiculo a agregar").toLowerCase()
        modelo = prompt("Ingrese el modelo del vehiculo agregado").toLowerCase()
    } while((marca.length == 0 || modelo.length == 0))


    do{
        año = parseInt(prompt("Ingrese el año del vehiculo agregado"))
        precio = parseFloat(prompt("Ingrese el precio del vehiculo agregado"))
        stock = parseInt(prompt("Ingrese el stock del vehiculo agregado"))
    }while((isNaN(precio) || isNaN(stock)) || isNaN(año) || (precio <= 0 || stock <= 0 || año <= 2010))

    const auto = new Auto(marca, modelo, año, precio, stock)
    continua = prompt("¿Desea ingresea otro vehiculo?").toLowerCase()
    Autos.push(auto)

} while (continua !="no")


do{
    filtros = parseInt(prompt(`Ingrese la opcion que desee:
        1-Buscar por marca
        2-Buscar por precio
        3-Ordenar de menor a mayor
    `))
}while (filtros < 1 || filtros <3)

switch(filtros){
    case 1:
        BuscarPorMarca(Autos)
    break 

    case 2:
        BuscarPorPrecio(Autos)
    break

    case 3:
        OrdenarAutos(Autos)
    break

    default:
        alert("Opcion no valida")
        break
}