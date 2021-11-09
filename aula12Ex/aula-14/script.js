function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagen')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora sao ${hora} horas`
    if (hora >= 0 && hora < 12){
       img.scr = 'Manha.png'
    }else if (hora >= 12 && hora <18) {
        img.scr = 'Tarde.png'
    }else {
        img.scr = 'Noite.png'
    }
}

