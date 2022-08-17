
 const idProductos = document.getElementById("idProductos")

 fetch("./productos.json")
 .then(response => response.json())
 .then(productos =>{
    productos.forEach((producto, indice) => {
        idProductos.innerHTML += `
        <div id="${indice}" class="card" style="width: 18rem;">
            <img src="./imagenes/${producto.img} " class="card-img-top">
                <div class="card-body">
                    <h2 class="card-title">${producto.nombre}</h2>
                    <p class="card-text">${producto.precio}</p>
                    <p class="card-text">${producto.stock}</p>
                    <a href="#" class="btn btn-primary">comprar!</a>
                </div>
        </div>
        
        `
    });
 })
