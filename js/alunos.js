const logado = JSON.parse(localStorage.getItem("logado"));
    if (!logado) {
      alert("Acesso negado! Faça login.");
      window.location.href = "login.html";
    } else if (logado.tipo !== "administrador") {
      document.getElementById("areaAluno").style.display = "none";
      document.getElementById("restrito").style.display = "block";
    }

    document.getElementById("alunoForm")?.addEventListener("submit", function(e) {
      e.preventDefault();
      const aluno = {
        nome: e.target[0].value,
        usuario: e.target[1].value,
        email: e.target[2].value,
        cpf: e.target[3].value,
        senha: e.target[4].value
      };
      const alunos = JSON.parse(localStorage.getItem("alunos")) || [];
      alunos.push(aluno);
      localStorage.setItem("alunos", JSON.stringify(alunos));
      alert("Aluno cadastrado com sucesso!");
      e.target.reset();
    });