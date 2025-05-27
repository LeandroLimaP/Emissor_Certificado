document.getElementById("validaForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const codigo = document.getElementById("codigo").value.trim();
      const certificados = JSON.parse(localStorage.getItem("certificados")) || [];
      const encontrado = certificados.find(c => c.codigo === codigo);

      const resultado = document.getElementById("resultado");
      if (encontrado) {
        resultado.innerHTML = `
          <strong>Certificado Válido</strong><br>
          Aluno: ${encontrado.alunoNome}<br>
          Curso: ${encontrado.cursoNome}<br>
          Data: ${encontrado.dataCurso}<br>
          Carga Horária: ${encontrado.cargaHoraria}h<br>
        `;
      } else {
        resultado.innerHTML = `<strong style="color: red">Certificado inválido!</strong>`;
      }
      resultado.style.display = "block";
    });w