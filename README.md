# 📄 Sistema de Emissão de Certificados

## 🎯 Objetivo
Este projeto visa fornecer uma aplicação web para o **gerenciamento e emissão de certificados** de cursos de extensão. Ele permite a criação de cursos, cadastro de alunos, emissão de certificados em PDF e validação pública por meio de código único.

---

## 🛠 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**
- **jsPDF** – Para geração de arquivos PDF
- **LocalStorage** – Para persistência de dados no navegador

---

## 📁 Estrutura de Pastas

```bash
📦 Emissor_Certificados
├── css/
│   ├── cursos.css
│   ├── lista-alunos.css
│   └── ...
├── js/
│   ├── cursos.js
│   ├── meus-cursos.js
│   └── ...
├── index.html
├── login.html
├── cadastro.html
├── cursos.html
├── lista-curso.html
├── lista-alunos.html
├── meus-cursos.html
├── certificados.html
├── certificados-modelo.html
└── validar.html
```

---

## 👨‍💼 Usuários e Acessos

- **Administrador**:
  - Login fixo: `cupinxas`
  - Senha: `cupinxas123`
  - Pode: cadastrar/editar cursos e alunos, emitir certificados, ver dashboard

- **Aluno**:
  - Cadastra-se livremente via formulário
  - Pode: ver cursos, se inscrever, baixar certificados dos cursos concluídos

---

## 🔐 Autenticação e Segurança

- Diferenciação de perfil de usuário no login
- Restrições de acesso a páginas administrativas via `localStorage`
- Redirecionamento automático se acesso não autorizado for tentado

---

## 📌 Funcionalidades

### ✅ Administrador
- Cadastro de cursos (com nome, descrição, carga horária, data)
- Cadastro de alunos (com nome, e-mail, CPF)
- Listagem e edição de cursos e alunos
- Emissão de certificados em PDF
- Dashboard com métricas

### 🎓 Aluno
- Visualiza lista de cursos disponíveis
- Inscreve-se ou cancela inscrição
- Gera certificados dos cursos nos quais está inscrito
- Valida certificado via código único

---

## 📤 API (Simulada via LocalStorage)

Como o projeto roda totalmente no frontend, os dados são manipulados via **LocalStorage** como se fossem endpoints de uma API.

### 📚 Entidades Armazenadas

#### `alunos`
```json
[
  {
    "nome": "João Silva",
    "email": "joao@email.com",
    "cpf": "123.456.789-00"
  }
]
```

#### `cursos`
```json
[
  {
    "nome": "JavaScript Básico",
    "descricao": "Curso introdutório",
    "carga": 20,
    "data": "2024-06-01"
  }
]
```

#### `inscricoes`
```json
[
  {
    "nome": "João Silva",
    "curso": "JavaScript Básico"
  }
]
```

#### `certificados`
```json
[
  {
    "nome": "João Silva",
    "curso": "JavaScript Básico",
    "codigo": "ABC123XYZ"
  }
]
```

---

## 🧪 Testes e Uso

1. Acesse `index.html`
2. Faça login como administrador ou crie um aluno
3. Navegue pelo menu lateral
4. Cadastre cursos e alunos
5. Emita certificados para alunos inscritos
6. Valide certificados em `validar.html`

---

## 📷 Telas

- Login e Cadastro
- Dashboard
- Meus Cursos (Aluno)
- Cadastro de Cursos (Admin)
- Lista de Cursos e Alunos
- Emissão e Validação de Certificados

---

## 🚀 Melhorias Futuras

- Integração com backend real (Node.js ou Firebase)
- Geração automática de QR Code no certificado
- Responsividade mobile total
- Dashboard com gráficos
- Upload de assinatura digital e logotipo da instituição

---

## 👨‍💻 Desenvolvido por
Leandro Lima – Projeto acadêmico de Desenvolvimento Frontend
