// scrollToPosition.js
const scrollToPosition = () => {
    const destino = 680; // coordenada Y desejada
    window.scrollTo({
        top: destino,
        behavior: 'smooth' // animação de scroll suave
    });
};

export default scrollToPosition;
