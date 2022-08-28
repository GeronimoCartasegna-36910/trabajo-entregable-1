//asigno las variables
const idProductos = document.getElementById("idProductos")
const idCarrito = document.getElementById("cart-modal")
let carrito = []

//creo el localstorage
if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"))
} else{
    localStorage.setItem("carrito", JSON.stringify(carrito))
}


//cargo datos de los productos
fetch("productos.json")
.then(response => response.json())
.then(productos => {
    productos.forEach((producto, indice) => {
        idProductos.innerHTML += `
        
        <div class="card" id="producto${indice}" style="width: 18rem;">
            <img src="./imagenes/${producto.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Talle: ${producto.talle}</p>
                <p class="card-text">Precio: $${producto.Precio}</p>
                <p class="card-text">Stock: ${producto.Stock}</p>
                <buttom class="btn btn-info">Agregar al carrito</buttom>
            </div>
        </div>
        `
    })

 //agrego el evento al boton de agregar al carrito
    productos.forEach((producto, indice) =>{
        const botonAgregarCarrito = (document.getElementById(`producto${indice}`).lastElementChild.lastElementChild)

        botonAgregarCarrito.addEventListener("click",() => {
            Toastify({
                text: "Producto Agregado Correctamente",
                duration: 2000
                }).showToast();

             carrito.push(producto)
             console.log(carrito)
             localStorage.setItem("carrito", JSON.stringify(carrito))
             
             
        })
    })

    idCarrito.addEventListener("click", ()=>{
        
        Swal.fire({
            title: 'Tu Carrito',
        
            showCancelButton: true,
            confirmButtonText: 'Finalizar compra',
            cancelButtonText:"seguir comprando"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Su compra fue realizada con exito', '', 'success')
            }
          })
    })


    
    
})




    



