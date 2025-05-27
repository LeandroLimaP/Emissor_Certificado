const logado = JSON.parse(localStorage.getItem("logado"));
    if (!logado) {
      alert("Acesso negado! Faça login.");
      window.location.href = "login.html";
    }

    document.getElementById("boasVindas").textContent = `Bem-vindo(a), ${logado.nome}!`;

    const cursos = JSON.parse(localStorage.getItem("cursos")) || [];
    const lista = document.getElementById("listaCursos");

    const imagens = [
      "data:image/jpeg;base64,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"
      ];

    cursos.forEach((curso, index) => {
      const card = document.createElement("div");
      card.className = "card";
      const imagem = imagens[index % imagens.length];
      const descricaoId = `desc-${index}`;
      const btnId = `btn-${index}`;
      const inscricaoId = `inscrever-${index}`;

      card.innerHTML = `
        <img src="${imagem}" alt="Imagem do curso">
        <div class="card-content">
          <h3>${curso.nome}</h3>
          <p><strong>Carga Horária:</strong> ${curso.carga}</p>
          <p id="${descricaoId}" class="descricao-curta"><strong>Descrição:</strong> ${curso.descricao}</p>
          <span id="${btnId}" class="ler-mais" onclick="toggleDescricao('${descricaoId}', '${btnId}')">Ler mais</span>
          <p><strong>Data:</strong> ${curso.data}</p>
          <button id="${inscricaoId}" onclick="inscrever('${index}')">Inscrever-se</button>
        </div>
      `;
      lista.appendChild(card);
    });

    function toggleDescricao(id, btnId) {
      const desc = document.getElementById(id);
      const btn = document.getElementById(btnId);
      const isExpanded = !desc.classList.contains("descricao-curta");
      if (isExpanded) {
        desc.classList.add("descricao-curta");
        btn.textContent = "Ler mais";
      } else {
        desc.classList.remove("descricao-curta");
        btn.textContent = "Ler menos";
      }
    }

    function inscrever(index) {
      const curso = cursos[index];
      const usuario = logado.usuario || logado.email;

      let inscricoes = JSON.parse(localStorage.getItem("inscricoes")) || [];
      const jaInscrito = inscricoes.some(insc => insc.usuario === usuario && insc.curso === curso.nome);

      if (jaInscrito) {
        alert("Você já está inscrito neste curso.");
        return;
      }

      inscricoes.push({ usuario: usuario, curso: curso.nome });
      localStorage.setItem("inscricoes", JSON.stringify(inscricoes));
      alert(`Inscrição realizada no curso: ${curso.nome}`);
    }

    function logout() {
      localStorage.removeItem("logado");
      window.location.href = "login.html";
    }