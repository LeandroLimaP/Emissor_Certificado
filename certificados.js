    function alunoConcluiuCurso(nome, curso) {
    const progresso = JSON.parse(localStorage.getItem("progresso")) || [];
  const registro = progresso.find(p =>
    p.nome.trim().toLowerCase() === nome.trim().toLowerCase() &&
    p.curso.trim().toLowerCase() === curso.trim().toLowerCase()
  );
  return registro && registro.progresso === 100;
  }

    const { jsPDF } = window.jspdf;
    const logado = JSON.parse(localStorage.getItem("logado"));
    if (!logado || logado.tipo !== "administrador") {
      alert("Acesso negado!");
      window.location.href = "index.html";
    }

    const alunos = JSON.parse(localStorage.getItem("alunos")) || [];
    const cursos = JSON.parse(localStorage.getItem("cursos")) || [];

    const alunoSelect = document.getElementById("alunoSelect");
    const cursoSelect = document.getElementById("cursoSelect");

    alunos.forEach((aluno, index) => {
      const opt = document.createElement("option");
      opt.value = index;
      opt.textContent = `${aluno.nome} - ${aluno.email}`;
      alunoSelect.appendChild(opt);
    });

    cursos.forEach((curso, index) => {
      const opt = document.createElement("option");
      opt.value = index;
      opt.textContent = `${curso.nome} (${curso.data})`;
      cursoSelect.appendChild(opt);
    });

    document.getElementById("certificadoForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const aluno = alunos[alunoSelect.value];
      const curso = cursos[cursoSelect.value];
      const codigo = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);

      const certificados = JSON.parse(localStorage.getItem("certificados")) || [];
      certificados.push({
        alunoNome: aluno.nome,
        cursoNome: curso.nome,
        dataCurso: curso.data,
        cargaHoraria: curso.carga,
        codigo: codigo
      });
      localStorage.setItem("certificados", JSON.stringify(certificados));
      // localStorage.removeItem("certificados"); 

      gerarPDF(aluno.nome, curso.nome, curso.data, curso.carga, codigo);
    });

    function gerarPDF(nome, curso, data, carga, codigo) {
      const doc = new jsPDF("landscape");
      const largura = doc.internal.pageSize.getWidth();
      const altura = doc.internal.pageSize.getHeight();

      // Fundo azul claro
      doc.setFillColor(230, 245, 255);
      doc.rect(0, 0, largura, altura, "F");

      // Título
      doc.setFont("Helvetica", "bold");
      doc.setTextColor(0, 51, 102);
      doc.setFontSize(30);
      doc.text("Certificado", largura / 2, 40, { align: "center" });

      doc.setFontSize(14);
      doc.setFont("Helvetica", "bold");
      doc.text("DE PARTICIPAÇÃO", largura / 2, 50, { align: "center" });

      // Nome do participante
      doc.setFont("helvetica", "italic");
      doc.setTextColor(100, 180, 255);
      doc.setFontSize(26);
      doc.text(nome, largura / 2, 80, { align: "center" });

      // Texto principal
      doc.setFont("Helvetica", "normal");
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(14);
      const texto = `Por sua participação e conclusão no curso de ${curso}, com carga horária de ${carga} horas, realizado em ${data}.`;
      doc.text(texto, largura / 2, 100, { align: "center", maxWidth: 260 });

      // Código de verificação
      doc.setFontSize(12);
      doc.setTextColor(80);
      doc.text(`Código de verificação: ${codigo}`, largura / 2, 130, { align: "center" });
      doc.text(`Valide em: validar.html`, largura / 2, 138, { align: "center" });

      // Linha e coordenador
      doc.setFontSize(12);
      doc.setFont("Helvetica", "italic");
      doc.text("Cupinxas", largura / 2, 152, { align: "center" });
      doc.setDrawColor(0);
      doc.line(largura / 2 - 30, 160, largura / 2 + 30, 160);
      doc.setFontSize(12);
      doc.setFont("Helvetica", "bold");
      doc.text("COORDENADOR", largura / 2, 168, { align: "center" });


      // Ícones (circulares decorativos)
      doc.setFillColor(0, 51, 102);
      doc.circle(30, 40, 10, "F");
      doc.setFillColor(100, 180, 255);
      doc.circle(largura - 30, altura - 30, 10, "F");

      doc.save(`certificado_${nome.replaceAll(" ", "_")}.pdf`);
    }