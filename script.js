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