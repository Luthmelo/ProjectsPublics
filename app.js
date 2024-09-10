function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    if (!dados || dados.length === 0) {
      section.innerHTML = "<p>Nenhum dado encontrado.</p>";
      return;
    }
  
    if (!campoPesquisa) {
      section.innerHTML = "<p>Digite um termo para pesquisar.</p>";
      return;
    }
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
  
    // Itera sobre cada dado da pesquisa e constrói o HTML dos resultados
    for (let dado of dados) {
      título = dado.título.toLowerCase()
      descrição = dado.descrição.toLowerCase()
      palavrasChave = dado.palavrasChave.toLowerCase()


        if (dado.título.toLowerCase().includes(campoPesquisa)|| palavrasChave.includes(campoPesquisa)) {

        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.título}</a>
            </h2>
            <p class="descricao-meta">${dado.descrição}</p>
            <a href=${dado.link} target="_blank">Saiba mais</a>
          </div>
        `;
      }
    }
  
    if (resultados === "") {
      section.innerHTML = "<p>Nenhum resultado encontrado para o termo pesquisado.</p>";
    } else {
      section.innerHTML = resultados;
    }
  }