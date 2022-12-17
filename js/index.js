// ! header cambiando de color

window.addEventListener("scroll", () => {
  var header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
});

// !     cambiar de login a registro

irRegister.addEventListener("click", () => {
  buttomUser()
});
irLogin.addEventListener("click", () => {
  buttomUser()
})

// !           carrito desplegable

popUpCart.addEventListener("click", () => {
  pullOutCart()
})

trolleyX.addEventListener("click", () => {
  pullOutCart()
})






