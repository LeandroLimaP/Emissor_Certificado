document.getElementById("cadastroForm").addEventListener("submit", function(event) {
      event.preventDefault();
      const nome = document.getElementById("nome").value;
      const usuario = document.getElementById("usuario").value;
      const email = document.getElementById("email").value;
      const cpf = document.getElementById("cpf").value;
      const senha = document.getElementById("senha").value;

      const alunos = JSON.parse(localStorage.getItem("alunos")) || [];
      alunos.push({ nome, usuario, email, cpf, senha });
      localStorage.setItem("alunos", JSON.stringify(alunos));
      alert("Cadastro realizado com sucesso!");
      window.location.href = "login.html";
    });