function notify(titulo, texto, tipo, posicao, duracao=3000){
    new notify({
        status:tipo,
        title: titulo,
        text: texto,
        effect: 'fade',
        speed: 500,
        showicon:true,
        showCloseButton: true,
        autoclose: true,
        autotimeout: duracao,
        gap: 20,
        distance: 20,
        type: 1,
        position:posicao
    })
}