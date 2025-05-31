// cursos.js

document.getElementById("formCurso").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const descricao = document.getElementById("descricao").value;
  const carga = document.getElementById("carga").value;
  const data = document.getElementById("data").value;

  const cursos = JSON.parse(localStorage.getItem("cursos")) || [];

  cursos.push({ nome, descricao, carga, data });

  localStorage.setItem("cursos", JSON.stringify(cursos));
  alert("Curso cadastrado com sucesso!");
  document.getElementById("formCurso").reset();
});
