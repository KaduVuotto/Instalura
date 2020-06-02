const adicionarComentario = (comentario, usuario) => {
    
    const novoComentario = {
        date: Date.now(),
        text: conteudoCampoInput,
        userName: usuario,
    }
    return novoComentario;
}

export default adicionarComentario;