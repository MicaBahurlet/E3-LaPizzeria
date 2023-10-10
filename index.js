const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

//Yo quiero que al ingresar un numero se imprima en pantalla las características de la pizza. Si se ingresa un numero que no corresponde mandar un mensaje, pero que se pisen los mensajes con la img, que muestre solo 1 cosa.  


// 1° defino viariables. 

const InputFormPizza = document.getElementById ("InputForm"); // primero me traigo el input number.
const FormPizzas = document.getElementById ("Form") // también me traigo el form, traigo el form
const BucarPizza = document.getElementById ("BuscaPizza") // me traigo el btn
const ErrorMensaje = document.getElementById ("ContenedorError") // donde voy a mostrar mensaje de error
const PizzaSelected = document.getElementById ("PizzaRender") // traigo el container de pizza

//console.log (InputFormPizza)





const BuscarPizza = (e) => { 
  e.preventDefault (); // quiero eliminar el comportamiento por defecto del form
  const PizzaNumber = InputFormPizza.value; // me quiero agarar el valor number que se ingrese al input
  if (PizzaNumber === ""){
    ErrorMensaje.innerText = "Upps! el campo está vacío, ingresá un número por favor. 	" // me traigo la variable donde quiero imprimir el mensaje y agrego el inner text. También pódría ser inner html
    PizzaSelected.innerHTML = ""; // esto lo agrego porque quiero que se imprima SÓLO una cosa, que se pisen los mensajes y las img
    return
  }
  else { // si no
    const pizzaEncontrada = pizzas.find(pizza => pizza.id === parseInt(PizzaNumber)); // quiero que dentro del array de pizzas busques el id y me parsees el value que se pone en el input PizzaNumber

    if (pizzaEncontrada) { // Si la pizza es encontrada por el ID quiero que me crees esta card. 
      ErrorMensaje.innerHTML = "";
      PizzaSelected.innerHTML =  // antes había desestructurado para crear una nueva variante, pero creo que es más funcional así
      `
        <div id="CardPizza"> 
          <h2>${pizzaEncontrada.nombre.toLocaleUpperCase()}</h2> 
          <h3>$${pizzaEncontrada.precio}</h3>
          <img src="${pizzaEncontrada.imagen}" alt="${pizzaEncontrada.nombre}">
        </div>
      ` 
      saveLocalStorage(pizzaEncontrada); // llamar funcion del localStorage

    } else { // sino la encontras por el id quiero que me pongas este mensaje
      ErrorMensaje.innerHTML = "Upps! No existe ninguna pizza con ese número ¿Volves a buscar?";
      PizzaSelected.innerHTML = ""; // y pongo ésto para que mi pise la img de la pizza si es que se encontró una antes.
   
    }  
  }
}


//LocalStorage en function para que quede más organizado. El Local Storage SOLO soporta String. Por eso uso JSON 

const saveLocalStorage = (pizzaEncontrada) => { // a esta funcion también debería llamarla en pizza encontrada
  localStorage.setItem('ultimaPizza', JSON.stringify(pizzaEncontrada)); 
};



const cargarUltimaPizza = () => {
  const ultimaPizza = JSON.parse(localStorage.getItem('ultimaPizza')); // del localStorage traeme los items que se llamen ultimaPizza
  
  if (ultimaPizza) {
    PizzaSelected.innerHTML =  // acá uso ${} para que me reemplace los datos de la última pizza que haya buscado la persona. 
    `
      <div id="CardPizza"> 
        <h2>${ultimaPizza.nombre.toLocaleUpperCase()}</h2> 
        <h3>$${ultimaPizza.precio}</h3>
        <img src="${ultimaPizza.imagen}" alt="${ultimaPizza.nombre}">
      </div>
    `;
  }
};




//// Funcion inicializadora

const init = () =>{
  document.addEventListener("DOMContentLoaded", cargarUltimaPizza) // DOMContentLoaded para que al cargar la página me guarde lo que tengo en el localStorage
  FormPizzas.addEventListener ("submit", BuscarPizza) // 1° función, elimino el comportamiento por defecto del form y además me quedo con el value y si el campo está vacio o no corresponde a una pizza imprmo error

}

init()





