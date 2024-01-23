function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
   
    
    let data = new Date()
    let min = data.getMinutes()
    let hora = data.getHours()
    
    
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!!
        img.src = "fotomanha.png"
        document.body.style.background = "#6cabbb";
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE!!
        img.src = "fototarde.png"
        document.body.style.background = "#9b5f2e"
    } else  {
        // BOA NOITE
        img.src = "fotonoite.png"
        document.body.style.background = "#292522"
   
        
    } 
}
