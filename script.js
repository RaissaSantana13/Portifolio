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
        title: "Nome do Projeto 1",
        description: "Aqui você descreve o que fez no projeto, as tecnologias usadas, etc.",
        videoUrl: "https://www.youtube.com/embed/SEU_VIDEO_AQUI", 
        repoUrl: "https://github.com/seu-usuario/projeto"
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