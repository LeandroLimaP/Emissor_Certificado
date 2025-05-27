    const logado = JSON.parse(localStorage.getItem("logado"));
    if (!logado) {
      alert("Acesso restrito. Faça login.");
      window.location.href = "login.html";
    }

    document.getElementById("totalAlunos").textContent = (JSON.parse(localStorage.getItem("alunos")) || []).length;
    document.getElementById("totalCursos").textContent = (JSON.parse(localStorage.getItem("cursos")) || []).length;
    document.getElementById("totalCertificados").textContent = (JSON.parse(localStorage.getItem("certificados")) || []).length;

    const menu = document.getElementById("menuNav");
    const baseLinks = [
      { texto: "Tela Inicial", href: "dashboard.html" },
      { texto: "Validar Certificado", href: "validar.html" },
      { texto: "Ver Cursos", href: "lista-curso.html" }
    ];

    const adminLinks = [
      { texto: "Cadastrar Curso", href: "cursos.html" },
      { texto: "Cadastrar Aluno", href: "alunos.html" },
      { texto: "Listar Alunos", href: "lista-alunos.html" },
      { texto: "Emitir Certificados", href: "certificados.html" },
      
    ];

    (logado.tipo === "administrador" ? [...baseLinks, ...adminLinks] : baseLinks).forEach(link => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${link.href}">${link.texto}</a>`;
      menu.appendChild(li);
    });