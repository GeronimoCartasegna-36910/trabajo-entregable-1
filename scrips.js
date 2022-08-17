
 const idProductos = document.getElementById("idProductos")

 fetch("./productos.json")
 .then(response => response.json())
 .then(productos =>{
    productos.forEach((producto, indice) => {
        idProductos.innerHTML += `
        <div id="${indice}" class="card m-3 p-3" style="width: 18rem;">
            <img src="./imagenes/${producto.img} " class="card-img-top card_img">
                <div class="card-body">
                    <h2 class="card-title">${producto.nombre}</h2>
                    <p class="card-text">Precio: $${producto.Precio}</p>
                    <p class="card-text">Stock: ${producto.Stock}</p>
                    <a href="#" class="btn btn-primary">comprar!</a>
                </div>
        </div>
        
        `
    });
 })
