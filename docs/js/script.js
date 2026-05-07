const portfolio = {
    nome: "Israel",
    curso: "Desenvolvimento de Software Multiplataforma",
    faculdade: "FATEC Jacarei",
    semestre: "2° semestre | 2026/1",
    foto: "assets/israel.JPG",
    titulo: "Hey there! Meu nome é Israel.",
    sobre: [
        "Atualmente cursando Desenvolvimento de Software Multiplataforma pela FATEC - Jacareí, estou em transição de carreira para aréa de tecnologia.",
        "Estou construindo minha formação em software com foco em resolver problemas reais, organizando dados, regras de negócio e interfaces que ajudem pessoas a tomar decisões com mais clareza.",
        "Minha trajetória junta experiência com processos e lideranca a uma base técnica em desenvolvimento web, banco de dados e engenharia de software.",
        "Meu interesse atual é aprofundar no backend, APIs e modelagem de dados, mantendo o frontend como apoio para transformar sistemas em experiências simples de usar."
    ],
    destaques: ["Backend e APIs", "Banco de dados", "Estrutura de Dados", "Engenharia de software", "Interfaces objetivas"],
    projetos: [
        {
            nome: "AgriRS Lab - INPE",
            tipo: "Projeto acadêmico - ABP | 1° semestre",
            descricao: "Website desenvolvido em equipe para o Laboratório de Sensoriamento Remoto Agricola do INPE, centralizando informações sobre pesquisas, projetos, publicações e equipe.",
            tecnologias: ["HTML5", "CSS3", "JavaScript", "Node.js", "PostgreSQL"],
            status: "Concluido",
            imagem: "assets/agrirs-logo.png",
            link: "https://github.com/abpundefined/1DSM-ABP-Undefined"
        },
        {
            nome: "Chatbot Secretaria Acadêmica",
            tipo: "Projeto acadêmico | 2° semestre",
            descricao: "Sistema em desenvolvimento para navegação conversacional, chatbot, consulta de informações acadêmicas e apoio ao atendimento da secretaria.",
            tecnologias: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
            status: "Em desenvolvimento",
            imagem: "assets/logo-fatec.png",
            link: "http://github.com/abpundefined/2DSM-ABP-UNDEFINED"
        },
    ],
    tecnologias: [
        ["JavaScript", "assets/javascript.svg"], ["TypeScript", "assets/typescript.svg"],
        ["Python", "assets/python.svg"], ["PostgreSQL", "assets/postgresql.svg"],
        ["HTML5", "assets/html5.svg"], ["CSS3", "assets/css.svg"],
        ["Git", "assets/git.svg"], ["GitHub", "assets/github.svg"], ["VS Code", "assets/vscode.svg"]
    ],
    jornada: [
        ["1° semestre | 2025/2", "Concluido", ["Algoritmo e Logica de Programação", "Desenvolvimento Web I", "Modelagem de Banco de Dados", "Engenharia de Software I", "Design Digital", "Sistemas Operacionais e Redes"]],
        ["2° semestre | 2026/1", "Atual", ["Banco de Dados Relacional", "Engenharia de Software II", "Desenvolvimento Web II", "Estrutura de Dados", "Matematica para Computação", "Técnicas de Programação I"]]
    ],
    metas: [
        "Consolidar modelagem e consultas em bancos de dados relacionais", "Implementar estruturas de dados com clareza", "Desenvolver aplicações utilizando Python", "Aprimorar organização e versionamento de codigo", "Construir APIs bem documentadas"
    ],
    experiencia: "9 anos de experiência como Supervisor de Loja, atuando com gestão de equipes, processos e soluções de problemas.",
    contato: {
        email: "learsi.slemes@hotmail.com", linkedin: "https://www.linkedin.com/in/israel-lemes", github: "https://github.com/Israelisl"
    }
};

const lista = (itens) => itens.map((item) => `<li>${item}</li>`).join("");
const tags = (itens) => itens.map((item) => `<span class="badge bg-secondary me-1 mb-1">${item}</span>`).join("");

document.querySelector("#sobre").innerHTML = `
    <div class="row align-items-center w-100">
        <div class="col-md-4 text-center mb-4 mb-md-0">
            <img src="${portfolio.foto}" alt="Foto de ${portfolio.nome}" class="hero-photo rounded-circle shadow">
        </div>
        <div class="col-md-8">
            <h1 id="sobre-titulo" class="display-4 fw-bold"></h1>
            <p class="text-accent fw-bold mb-4">${portfolio.semestre}</p>
            
            ${portfolio.sobre.map((texto) => `<p class="text-custom-muted fs-5">${texto}</p>`).join("")}
            
            <div class="mt-4">
                ${portfolio.destaques.map((item) => `<span class="badge border border-secondary text-light p-2 me-2 mb-2 bg-transparent">${item}</span>`).join("")}
            </div>
        </div>
    </div>
`;

const titulo = document.querySelector("#sobre-titulo");
let letra = 0;
function digitarTitulo() {
    titulo.textContent += portfolio.titulo[letra] || "";
    letra += 1;
    if (letra < portfolio.titulo.length) setTimeout(digitarTitulo, 85);
}
setTimeout(digitarTitulo, 300);

document.querySelector("#projetos").innerHTML = `
    <div class="mb-4">
        <span class="text-success fw-bold text-uppercase" style="font-size: 0.85rem;">Projetos acadêmicos, pessoais e de estudo:</span>
        <h2 class="fw-bold">Projetos em destaque</h2>
    </div>
    <div class="row g-4 justify-content-center">
        ${portfolio.projetos.map((projeto) => `
            <div class="col-md-6 col-lg-4">
                <div class="card bg-custom-surface project-card h-100 shadow-sm border-0">
                    <div class="card-body d-flex flex-column">
                        <span class="badge bg-success align-self-start mb-3">${projeto.status}</span>
                        ${projeto.imagem ? `<img src="${projeto.imagem}" alt="Logo do projeto ${projeto.nome}" class="mb-3" style="height: 50px; object-fit: contain;">` : ""}
                        <h5 class="card-title text-accent fw-bold">${projeto.nome}</h5>
                        <p class="card-text text-dark" style="font-size: 0.9rem;">${projeto.descricao}</p>
                        <div class="mt-auto pt-3">
                            <div>${tags(projeto.tecnologias)}</div>
                            ${projeto.link ? `<a href="${projeto.link}" class="text-accent text-decoration-none fw-bold mt-2 d-inline-block" target="_blank">Ver projeto &rarr;</a>` : ""}
                        </div>
                    </div>
                </div>
            </div>
        `).join("")}
    </div>
`;

document.querySelector("#competencias").innerHTML = `
    <div class="mb-4">
        <span class="text-success fw-bold text-uppercase" style="font-size: 0.85rem;">Jornada, tecnologias e metas</span>
        <h2 class="fw-bold">Base técnica em construção</h2>
    </div>
    <div class="row g-4">
        <div class="col-md-6">
            <div class="bg-custom-surface p-4 rounded h-100">
                <h4 class="mb-4">Tecnologias estudadas</h4>
                <div class="row g-2 text-center">
                    ${portfolio.tecnologias.map(([nome, icone]) => `
                        <div class="col-4 col-sm-3">
                            <div class="skill-item rounded h-100 p-2 text-dark">
                                <img src="${icone}" alt="${nome}" class="skill-icon">
                                <div style="font-size: 0.8rem; font-weight: bold;">${nome}</div>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="bg-custom-surface p-4 rounded h-100">
                <h4 class="mb-3">Jornada</h4>
                ${portfolio.jornada.map(([periodo, status, disciplinas]) => `
                    <div class="mb-3 border-bottom border-secondary pb-2">
                        <span class="badge bg-secondary mb-1">${status}</span>
                        <h6 class="fw-bold text-dark">${periodo}</h6>
                        <ul class="text-dark small ps-3">${lista(disciplinas)}</ul>
                    </div>
                `).join("")}
            </div>
        </div>
        <div class="col-md-12">
            <div class="bg-custom-surface p-4 rounded">
                <div class="row">
                    <div class="col-md-6 mb-4 mb-md-0">
                        <h4 class="mb-3">Experiência profissional</h4>
                        <p class="text-dark">${portfolio.experiencia}</p>
                    </div>
                    <div class="col-md-6">
                        <h4 class="mb-3">Metas técnicas para 2026/1</h4>
                        <ul class="text-dark ps-3">${lista(portfolio.metas)}</ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

const btnSubir = document.createElement("a");
btnSubir.href = "#sobre";
btnSubir.className = "btn-subir";
btnSubir.setAttribute("aria-label", "Voltar ao topo");

btnSubir.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
    </svg>
`;

document.body.appendChild(btnSubir);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnSubir.classList.add("mostrar");
    } else {
        btnSubir.classList.remove("mostrar");
    }
});

document.querySelector("#footer-contato").innerHTML = `
    <div class="d-flex justify-content-center gap-4 flex-wrap">
        <a href="mailto:${portfolio.contato.email}" aria-label="Enviar Email">
            <img src="assets/email.svg" alt="Ícone de Email" class="footer-icon">
        </a>
        <a href="${portfolio.contato.linkedin}" target="_blank" rel="noreferrer" aria-label="Acessar LinkedIn">
            <img src="assets/linkedin.svg" alt="Ícone do LinkedIn" class="footer-icon">
        </a>
        <a href="${portfolio.contato.github}" target="_blank" rel="noreferrer" aria-label="Acessar GitHub">
            <img src="assets/github.svg" alt="Ícone do GitHub" class="footer-icon">
        </a>
    </div>
`;