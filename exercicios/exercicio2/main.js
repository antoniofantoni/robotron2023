const calcula = document.querySelector("#calcular");

// calcula.onclick = function () {
//   alert("Fui clicado");
// };

//ou
const pegaBotao = document.querySelector("#calcular");
const pegaResultado = document.querySelector(".resultado");

pegaBotao.addEventListener("click", () => {
  const resultado = pegaResultado;
  resultado.innerHTML = "Fui clicado";
});
