document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault();
      const usuario = document.getElementById("usuario").value;
      const senha = document.getElementById("senha").value;

      if (usuario === "cupinxas" && senha === "cupinxas123") {
        localStorage.setItem("logado", JSON.stringify({ tipo: "administrador", nome: "Administrador" }));
        window.location.href = "dashboard.html";
        return;
      }

      const lista = JSON.parse(localStorage.getItem("alunos")) || [];
      const encontrado = lista.find(u => (u.usuario === usuario || u.email === usuario) && u.senha === senha);

      if (encontrado) {
        localStorage.setItem("logado", JSON.stringify({ tipo: "aluno", nome: encontrado.nome }));
        window.location.href = "dashboard.html";
      } else {
        alert("Usuário ou senha inválidos!");
      }
    });