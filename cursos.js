function inscreverAluno(cursoId) {
  const alunoCPF = localStorage.getItem('alunoLogado');
  if (!alunoCPF) {
    alert("Faça login como aluno para se inscrever.");
    return;
  }

  let inscricoes = JSON.parse(localStorage.getItem('inscricoes')) || [];

  const jaInscrito = inscricoes.some(i => i.alunoId === alunoCPF && i.cursoId === cursoId);
  if (jaInscrito) {
    alert("Você já está inscrito neste curso.");
    return;
  }

  inscricoes.push({ alunoId: alunoCPF, cursoId });
  localStorage.setItem('inscricoes', JSON.stringify(inscricoes));
  alert("Inscrição realizada com sucesso!");
}