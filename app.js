// definición de variables
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");

// carrito principal
// acá va la información de local storage
let cart = [];

// de acá conseguimos los productos
// primero de modo local desde json
class Products{
    async getProducts(){
        try {
            let result = await fetch('catalogo.json');
            let data = await result.json();
            let products = data.items;
            products = products.map(item =>{
                const {title,price} = item.fields;
                const {id} = item.sys;
                const image = item.fields.image.fields.file.url;
                // now we'll return the clean object
                return {title,price,id,image}
            })
            return products;
        } catch (error) {
            console.log(error);
        }
    }
}

// ui - mostar productos
// obtención de todos los items que están siendo devueltos desde productos para luego mostrar o manipular o lo que sea
// acá van a estar la mayoría de los métodos
class UI { 
    displayProducts(products){
        // console.log(products);
        let result = '';
        products.forEach(product => {
            result += `
            
            `
        });
    }
}

// local storage
class Storage {}

// event listener de donde despegamos
document.addEventListener("DOMContentLoaded", ()=>{
    const ui = new UI();
    const products = new Products();

    // obtener todos los productos
    products.getProducts().then(products => ui.displayProducts(products));
});