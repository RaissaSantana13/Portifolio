function typeWrite(elemento) {
    const textoArray = ["Raissa Santana","Desenvolvedora Full Stack", "Criadora de Projetos", "Programadora Front-end"].reverse();
    let index = 0;
    
    function startTyping(text) {
        elemento.innerHTML = '';
        const charArray = text.split('');
        charArray.forEach((letra, i) => {
            setTimeout(() => elemento.innerHTML += letra, 75 * i);
        });
    }

    setInterval(() => {
        startTyping(textoArray[index]);
        index = (index + 1) % textoArray.length;
    }, 4000);

    startTyping(textoArray[0]);
}

const titulo = document.querySelector('#typing-text');
typeWrite(titulo);

const listaProjetos = [
    {
        title: "Bookly",
        description: "O Bookly é um ecossistema desktop completo para gestão de acervos literários e hábitos de leitura. Diferente de uma simples lista, o sistema permite o controle granular de Autores, Gêneros e Obras, integrando um módulo de Sessões de Leitura que monitora o progresso em tempo real. \n\n" +
                     "Destaques Técnicos: \n" +
                     "• Arquitetura DDD Lite: Organização rigorosa em camadas (Domain, Service, Repository e App) para alta manutenibilidade. \n" +
                     "• Persistência Avançada: Uso de EF Core com mapeamento Fluent API e consultas otimizadas em SQL Server. \n" +
                     "• Segurança e Integridade: Sistema de autenticação de usuários e validações de negócio implementadas com FluentValidation. \n" +
                     "• Qualidade de Software: Cobertura de testes unitários utilizando MSTest para validar regras críticas do domínio. \n" +
                     "• UX no WinForms: Interface intuitiva com injeção de dependência nativa para desacoplamento de serviços.",
        videoUrl: "https://player.cloudinary.com/embed/?cloud_name=dzkjdll3l&public_id=Bookly", 
        repoUrl: "https://github.com/RaissaSantana13/Bookly"
    }, 
    {
        title: "Termo",
        description: "Uma recriação fiel e otimizada do popular jogo de palavras 'Termo', desenvolvida como uma aplicação desktop interativa. O projeto foca na lógica algorítmica de comparação de strings e na experiência do usuário (UX) através de feedbacks visuais e sonoros em tempo real. \n\n" +
                     "Destaques Técnicos: \n" +
                     "• Motor de Jogo: Implementação de lógica para validação de tentativas, identificando letras corretas, deslocadas ou inexistentes com alta precisão. \n" +
                     "• Gestão de Recursos: Manipulação de arquivos externos para carregamento dinâmico de dicionários e persistência de estatísticas do jogador. \n" +
                     "• Interface Dinâmica (WinForms): Uso de controles personalizados e manipulação de eventos de teclado para uma jogabilidade fluida. \n" +
                     "• Multimédia: Integração de áudio e animações (GIFs) para reforçar o engajamento do utilizador em eventos de vitória ou derrota. \n" +
                     "• Arquitetura Modular: Separação clara entre a biblioteca de lógica (TermoLib) e a interface de utilizador (TermoApp), facilitando a manutenção.",
        videoUrl: "https://player.cloudinary.com/embed/?cloud_name=dzkjdll3l&public_id=Termo", 
        repoUrl: "https://github.com/RaissaSantana13/JogoTermoMVP"
    }, 
    {
        title: "BiblioXchange",
        description: "O BiblioXchange é uma plataforma web responsiva dedicada à troca e partilha de livros, funcionando como uma vitrine virtual interativa. O foco do projeto foi a criação de uma interface fluida e intuitiva, utilizando tecnologias core do desenvolvimento web para proporcionar uma experiência de navegação moderna e acessível. \n\n" +
                     "Destaques Técnicos: \n" +
                     "• Desenvolvimento Front-end: Implementação de uma estrutura semântica com HTML5 e estilização avançada com CSS3, garantindo um layout responsivo e visualmente apelativo. \n" +
                     "• Interatividade Dinâmica: Utilização de JavaScript para manipulação do DOM, permitindo a gestão de modais, filtragem de conteúdos e navegação dinâmica entre as vitrines de livros. \n" +
                     "• Experiência do Utilizador (UX/UI): Design focado na facilidade de uso, com menus de navegação claros, feedbacks visuais ao passar o rato (hover effects) e transições suaves. \n" +
                     "• Arquitetura Web: Organização modular de ficheiros (HTML, CSS e JS) para facilitar a manutenção e escalabilidade da plataforma. \n" +
                     "• Gestão de Conteúdos: Estruturação de páginas individuais para obras, integrando descrições detalhadas e metadados de cada livro para uma experiência completa.",
        videoUrl: "https://player.cloudinary.com/embed/?cloud_name=dzkjdll3l&public_id=biblioxchange", 
        repoUrl: "https://github.com/RaissaSantana13/BiblioXchange"
    }, 

    {
        title: "Alter Ego",
        description: "O Alter Ego Project é uma experiência web imersiva baseada no conceito visual do álbum da artista Lisa. O foco central foi o desenvolvimento de uma interface dinâmica que se transforma completamente para representar diferentes personalidades artísticas, unindo estética de alto impacto com funcionalidade técnica. \n\n" +
                     "Destaques Técnicos: \n" +
                     "• Interfaces Temáticas Dinâmicas: Implementação de um sistema de alternância de estados que modifica cores, fundos (assets visuais) e tipografias em tempo real via JavaScript. \n" +
                     "• Integração de Media: Incorporação estratégica do Spotify SDK/Embed para uma experiência auditiva integrada que complementa a navegação visual. \n" +
                     "• Estilização CSS Avançada: Uso de variáveis CSS e layouts modernos para garantir que cada 'alter ego' possua uma identidade visual única e responsiva. \n" +
                     "• Manipulação do DOM: Lógica em JavaScript para gerir transições suaves e interatividade baseada em eventos do utilizador. \n" +
                     "• Design Visual Imersivo: Curadoria e implementação de assets de alta qualidade para criar uma atmosfera de estúdio profissional no navegador.",
        videoUrl: "https://player.cloudinary.com/embed/?cloud_name=dzkjdll3l&public_id=Alter_Ego", 
        repoUrl: "https://github.com/RaissaSantana13/Alter-Ego-Project"
    }
];

const modal = document.getElementById('modal-projeto');
const cards = document.querySelectorAll('.project-card');
const closeBtn = document.querySelector('.close-modal');


cards.forEach(card => {
    card.addEventListener('click', () => {
        const index = card.getAttribute('data-index');
        const projeto = listaProjetos[index];

        document.getElementById('modal-title').innerText = projeto.title;
        document.getElementById('modal-description').innerText = projeto.description;
        document.getElementById('modal-video').src = projeto.videoUrl;
        document.getElementById('modal-repo').href = projeto.repoUrl;

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; 
    });
});

function fecharModal() {
    modal.classList.add('hidden');
    document.getElementById('modal-video').src = ""; 
    document.body.style.overflow = 'auto';
}

closeBtn.addEventListener('click', fecharModal);

window.addEventListener('click', (e) => {
    if (e.target == modal) fecharModal();
});