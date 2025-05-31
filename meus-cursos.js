const logado = JSON.parse(localStorage.getItem("logado"));
if (!logado) {
  alert("Acesso negado! Faça login.");
  window.location.href = "index.html";
}

document.getElementById("boasVindas").textContent = `Olá, ${logado.nome}. Veja os cursos disponíveis e inscreva-se:`;

const cursos = JSON.parse(localStorage.getItem("cursos")) || [];
let inscricoes = JSON.parse(localStorage.getItem("inscricoes")) || [];

const container = document.getElementById("listaCursos");

cursos.forEach(curso => {
  const estaInscrito = inscricoes.some(ins => ins.nome === logado.nome && ins.curso === curso.nome);

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${curso.nome}</h3>
    <p>${curso.descricao}</p>
    <p><strong>Carga Horária:</strong> ${curso.carga} horas</p>
    <p><strong>Data:</strong> ${curso.data || "-"}</p>
    <button onclick="toggleInscricao('${curso.nome}')">
      ${estaInscrito ? "Cancelar Inscrição" : "Inscrever-se"}
    </button>
  `;
  container.appendChild(card);
});

function toggleInscricao(nomeCurso) {
  let inscricoes = JSON.parse(localStorage.getItem("inscricoes")) || [];
  const index = inscricoes.findIndex(i => i.nome === logado.nome && i.curso === nomeCurso);

  if (index >= 0) {
    inscricoes.splice(index, 1);
    alert("Inscrição cancelada.");
  } else {
    inscricoes.push({ nome: logado.nome, curso: nomeCurso });
    alert("Inscrição realizada com sucesso!");
  }

  localStorage.setItem("inscricoes", JSON.stringify(inscricoes));
  location.reload();
}
