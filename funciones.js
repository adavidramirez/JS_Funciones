function proceso(n) {
  let texto = prompt("Ingresa una cadena de texto: ");
  if (texto == "") {
    return alert("La cadena de texto está vacía...");
  } else {
    if (n == 1) {
      return alert(`Resultado: ${texto.toUpperCase()}`);
    } else if (n == 2) {
      return alert(`Resultado: ${texto.toLowerCase()}`);
    } else if (n == 3) {
      return alert(`Resultado: ${texto.length}`);
    } else if (n == 4) {
      return alert(`Resultado: ${texto.charAt(0)}`);
    } else if (n == 5) {
      return alert(`Resultado: ${texto.charAt(texto.length-1)}`);
    } else if (n == 6) {
      return alert(`Resultado: ${texto.slice(1,texto.length)}`);
    }
  }
}
