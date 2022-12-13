window.addEventListener("scroll", () => {
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
  });
  
  // ! cambiar de login a registro
  
  irRegister.addEventListener("click", () => {
    buttomUser()
  });
  irLogin.addEventListener("click", () => {
    buttomUser()
  })

//       !    carrito desplegable

popUpCart.addEventListener("click", () => {
    pullOutCart()
  })
  
  trolleyX.addEventListener("click", () => {
    pullOutCart()
  })

  // ! click de cambio login a register
function buttomUser() {
    document.getElementById("formAdd").classList.toggle("formNone");
    document.getElementById("formLogin").classList.toggle("formNone");
}

function pullOutCart (){
    document.getElementById("modal").classList.toggle("see");
}