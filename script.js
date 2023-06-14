function iniciarStorage(){
  localStorage.setItem("favoritos", JSON.stringify([]));
  inserirFavorito("LIVRO", "Cem anos de solidão", "100 anosdesolidao.jpg", "1967", "https://books.google.com.br/books?id=MAqQDwAAQBAJ&printsec=frontcover&hl=pt-BR#v=onepage&q&f=false");
  inserirFavorito("LIVRO", "A guerra dos mundos", "guerra-dos-mundos.png", "1897", "https://books.google.com.br/books?id=lOq-DgAAQBAJ&printsec=frontcover&hl=pt-BR#v=onepage&q&f=false");
  inserirFavorito("LIVRO", "Clube da luta", "clube-da-luta.jfif", "1996", "https://books.google.com.br/books?id=oUMg6nsMljEC&printsec=frontcover&hl=pt-BR#v=onepage&q&f=false");
  inserirFavorito("LIVRO", "O senhor dos anéis - as duas torres", "senhor-dos-anel.jfif", "1954", "https://books.google.com.br/books?id=UbKuDwAAQBAJ&printsec=frontcover&hl=pt-BR#v=onepage&q&f=false");
  inserirFavorito("FILME", "Orgulho e preconceito", "Orgulho e preconceito.jpg", "2005", "https://www.papodecinema.com.br/filmes/orgulho-preconceito/");
  inserirFavorito("FILME", "A cor que caiu do espaço", "a cor que caiu do espaço.jpg", "2019", "https://www.papodecinema.com.br/filmes/a-cor-que-caiu-do-espaco/");
  inserirFavorito("FILME", "O iluminado", "O iluminado.jpg", "1980", "https://www.papodecinema.com.br/filmes/o-iluminado/");
  inserirFavorito("LIVRO", "Os miseráveis", "Os-miseráveis.jpg", "1862", "https://books.google.com.br/books?id=xIbVDgAAQBAJ&printsec=frontcover&hl=pt-BR#v=onepage&q&f=false");
  inserirFavorito("FILME", "O senhor dos anéis - O retorno do Rei", "o senhor dos aneis.jpg", "2003", "https://www.papodecinema.com.br/filmes/o-senhor-dos-aneis-o-retorno-do-rei/img3-1082");

  criarFavoritos()
}

function criarFavoritos() {
  var container = document.querySelector(".container");

  var favoritos = JSON.parse(localStorage.getItem("favoritos"));

  for (let i = 0; i < favoritos.length; i = i + 3) {
    var row = document.createElement("div");
    row.className = "row";
    container.appendChild(row);
  }

  for (let j = 0; j < favoritos.length; j++) {
    (function() {
      let titulo = favoritos[j];
    var favorito = JSON.parse(localStorage.getItem(titulo));

    var listItem = document.createElement("div");
    listItem.className = "col";
    listItem.addEventListener('click', function(){
      redirecionar(favorito.titulo);
    });
    

    var divCategoria = document.createElement("div");
    divCategoria.className = "img-name1";
    divCategoria.textContent = favorito.categoria;
    
    var divTitulo = document.createElement("div");
    divTitulo.className = "img-name";
    divTitulo.textContent = favorito.titulo + " - " + favorito.ano;

    var imagem = document.createElement("img");
    imagem.src = "titulos/" + favorito.imagem;
    imagem.style.width = "100%"; 
    imagem.style.height = "580px";

    var rows = document.getElementsByClassName("row");

    let rowCount = Math.floor(j / 3);
    console.log(rows.length + " - " + rowCount);

    rows[rowCount].appendChild(listItem);

    listItem.append(divCategoria);
    listItem.append(imagem);
    listItem.append(divTitulo);
  })();
}
  
}

function inserirFavorito (categoria, titulo, imagem, ano, url) {

  var favorito = {
    categoria: categoria,
    titulo: titulo,
    imagem, imagem,
    ano: ano,
    url: url
  };

  localStorage.setItem(titulo, JSON.stringify(favorito));

  adicionarNaListaFavoritos(titulo);
}

function adicionarNaListaFavoritos(titulo) {
  var favoritos = JSON.parse(localStorage.getItem("favoritos"));
  favoritos.push(titulo);
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}


function redirecionar(titulo) {
    console.log(titulo);
    var favorito = JSON.parse(localStorage.getItem(titulo));
    console.log(favorito.categoria + " " + favorito.titulo + " " + favorito.ano + " " + favorito.url);
    window.location.href = favorito.url;

  };


  