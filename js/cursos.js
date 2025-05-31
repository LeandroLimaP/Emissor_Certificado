// curso.js

function logout() {
  localStorage.removeItem("logado");
  window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formCurso");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nomeCurso").value.trim();
    const descricao = document.getElementById("descricaoCurso").value.trim();
    const carga = document.getElementById("cargaHoraria").value.trim();

    if (!nome || !descricao || !carga) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    const cursos = JSON.parse(localStorage.getItem("cursos")) || [];
    cursos.push({ nome, descricao, carga });
    localStorage.setItem("cursos", JSON.stringify(cursos));

    alert("Curso cadastrado com sucesso!");
    form.reset();
  });
});


