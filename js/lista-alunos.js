const logado = JSON.parse(localStorage.getItem("logado"));
    const tabela = document.getElementById("tabelaAlunos");
    const corpo = tabela.querySelector("tbody");
    const headerAcoes = document.getElementById("acoesHeader");

    if (!logado) {
      alert("Acesso negado! Faça login.");
      window.location.href = "index.html";
    } else {
      tabela.style.display = "table";
      const alunos = JSON.parse(localStorage.getItem("alunos")) || [];
      const certificados = JSON.parse(localStorage.getItem("certificados")) || [];

      alunos.forEach((aluno, i) => {
        const cursos = certificados
          .filter(c => c.nome && aluno.nome && c.nome.trim().toLowerCase() === aluno.nome.trim().toLowerCase())
          .map(c => c.curso)
          .join(", ") || "Nenhum";

        const linha = document.createElement("tr");
        linha.innerHTML = `
          <td>${aluno.nome}</td>
          <td>${aluno.email}</td>
          <td>${aluno.cpf}</td>
          <td class="cursos-info">${cursos}</td>
          <td class="acoes">${
            logado.tipo === "administrador"
              ? `<button class="editar" onclick="editar(${i})">Editar</button>
                 <button class="excluir" onclick="excluir(${i})">Excluir</button>`
              : "-"
          }</td>
        `;
        corpo.appendChild(linha);
      });

      if (logado.tipo !== "administrador") {
        headerAcoes.style.display = "none";
        const acoesColunas = document.querySelectorAll(".acoes");
        acoesColunas.forEach(coluna => coluna.style.display = "none");
      }
    }

    function editar(index) {
      const alunos = JSON.parse(localStorage.getItem("alunos")) || [];
      const aluno = alunos[index];
      const nome = prompt("Novo nome:", aluno.nome);
      const email = prompt("Novo e-mail:", aluno.email);
      const cpf = prompt("Novo CPF:", aluno.cpf);
      if (nome && email && cpf) {
        alunos[index] = { ...aluno, nome, email, cpf };
        localStorage.setItem("alunos", JSON.stringify(alunos));
        location.reload();
      }
    }

    function excluir(index) {
      if (confirm("Deseja realmente excluir este aluno?")) {
        const alunos = JSON.parse(localStorage.getItem("alunos")) || [];
        alunos.splice(index, 1);
        localStorage.setItem("alunos", JSON.stringify(alunos));
        location.reload();
      }
    }