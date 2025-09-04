function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light Mode adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")

    img.setAttribute(
      "alt",
      "Foto de Thiago Alves sorrindo, blusa preta e fundo degradê roxo para azul."
    )
  } else {
    // se tiver sem light mode, manter imagem normal
    img.setAttribute("src", "./assets/avatar.png")

    img.setAttribute(
      "alt",
      "Foto de Thiago Alves sorrindo, camisa preta e fundo amarelo."
    )
  }
}
