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

//Yo quiero que al ingresar un numero se imprima en pantalla las características de la pizza. Si se ingresa un numero que no corresponde mandar un mensaje. 


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
    ErrorMensaje.innerText = "Upps! está vacío, ingresá un número por favor. 	" // me traigo la variable donde quiero imprimir el mensaje y agrego el inner text. También pódría ser inner html
    PizzaSelected.innerHTML = ""; // esto lo agrego porque quiero que se imprima SÓLO una cosa, que se pisen los mensajes y las img
    return
  }
  else {
    const pizzaEncontrada = pizzas.find(pizza => pizza.id === parseInt(PizzaNumber));

    if (pizzaEncontrada) {
      ErrorMensaje.innerHTML = "";
      PizzaSelected.innerHTML = 
      `
        <div id="CardPizza">
          <h2>${pizzaEncontrada.nombre.toLocaleUpperCase()}</h2>
          <h3>$${pizzaEncontrada.precio}</h3>
          <img src="${pizzaEncontrada.imagen}" alt="${pizzaEncontrada.nombre}">
        </div>
      ` 
      

    } else {
      ErrorMensaje.innerHTML = "Upps! No existe ninguna pizza con ese número. ";
      PizzaSelected.innerHTML = "";
   
    }  
  }
}




//// Funcion inicializadora

const init = () =>{
  FormPizzas.addEventListener ("submit", BuscarPizza) // 1° función, elimino el comportamiento por defecto del form y además me quedo con el value y si el campo está vacio o no corresponde a una pizza imprmo error

}

init()





//
//const renderizarPizza = (pizzaBuscada) =>{
//  const {nombre, precio,imagen, ingredientes} = pizzaBuscada
//
//  return PizzaSelected.innerHTML = 
//    `
//     <div id= "CardPizza">
//        <h2>${nombre()}</h2>
//        <h3>${precio()}</h3>
//        <img src="${imagen}">
//        <p>${ingredientes()}</p> 
//      </div>
//    `   
//
//}
//
//const saveLocalSorage = (selection) => {
//  localStorage.setItem('pizzaGuardada', JSON.stringify(selection))
//}
//
//
//const filterPizza = (pizzasArray, laPizzaBuscada) =>{
//
//  const BucarPizza = pizzasArray.filter((pizza)=> {return pizza.id == laPizzaBuscada})
//  return BucarPizza [0]
//}
//
//const BuscandoPizza = () =>{
//  const laPizza = InputFormPizza.value
//  PizzaSelected.innerHTML = ""
//
//  if (BuscarPizza (laPizza)){
//    ErrorMensaje.innerHTML = ""
//    const pizzaFilter = filterPizza(pizzas,laPizza)
//    renderizarPizza (pizzaFilter)
//  }
//
//}
//
//
//const pizzaGuardada = () =>{
//  const pizzaInicial = JSON.parse(localStorage.getItem(`pizzaGuardada`))
//  if (pizzaInicial){
//    const pizzaFilter = filterPizza (pizzas, pizzaInicial)
//    renderizarPizza (pizzaFilter)
//  }
//}
//
//







