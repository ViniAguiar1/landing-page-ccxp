const ingressos = []
const dia = document.getElementById("dia")
const hora = document.getElementById("hora")
const minuto = document.getElementById("minuto")
const segundo = document.getElementById("segundo")

const lancamento = '01 dec 2023'

countDown = () => {
    const dataLancamento = new Date(lancamento)
    const hoje = new Date()

    const segundosTotal = (dataLancamento - hoje)/1000

    const finalDia = Math.floor(segundosTotal / 60 / 60 / 24)
    const finalHora = Math.floor(segundosTotal / 60 / 60) % 24
    const finalMinuto = Math.floor(segundosTotal / 60) % 60
    const finalSegundos = Math.floor(segundosTotal) % 60

    dia.innerHTML = finalDia + "D"
    hora.innerHTML = formato(finalHora + "H")
    minuto.innerHTML = formato(finalMinuto + "M")
    segundo.innerHTML = formato(finalSegundos + "S") 
}

formato = (tempo) => {
    return tempo < 10? `0${tempo}` : tempo
}

countDown()
setInterval(countDown, 1000)

highlightCard = (selector) => {
    let element = document.querySelector(selector)
    element.classList.toggle("card-highlight")
}

checkKeyboardCode = () => {
    document.addEventListener('keydown', (event) =>{
        let name = event.key
        let code = event.code
        // Alert the key name and key code on keydown
        alert(`Tecla pressionada ${name} \r\n Key code value: ${code}`)
    }, false)
}

addKeyboardEventListener = () => {
    document.addEventListener('keydown', (event) => {
        let ingresso1 = document.getElementById("quinta")
        let ingresso2 = document.getElementById("sexta")
        let ingresso3 = document.getElementById("sabado")
        let ingresso4 = document.getElementById("domingo")

        let code = event.code
        if(code == 'Digit1'){
            ingresso1.classList.toggle("card-highlight")
            ingresso2.classList.remove("card-highlight")
            ingresso3.classList.remove("card-highlight")
            ingresso4.classList.remove("card-highlight")
        } if(code == 'Digit2'){
            ingresso1.classList.remove("card-highlight")
            ingresso2.classList.toggle("card-highlight")
            ingresso3.classList.remove("card-highlight")
            ingresso4.classList.remove('card-highlight')
        } if(code == 'Digit3') {
            ingresso1.classList.remove("card-highlight")
            ingresso2.classList.remove("card-highlight")
            ingresso3.classList.toggle("card-highlight")
            ingresso4.classList.remove("card-highlight")
        } if (code == 'Digit4'){
            ingresso1.classList.remove("card-highlight")
            ingresso2.classList.remove("card-highlight")
            ingresso3.classList.remove("card-highlight")
            ingresso4.classList.toggle("card-highlight")
        }
    }, false)
}

selectCard = (selector) => {
    let element = document.querySelector(selector)
    element.classList.toggle('card-selector')
    if (ingressos.includes(selector)) ingressos.pop(selector)
    else ingressos.push(selector)
}

showSelectorCards = () => {
    if(ingressos.length > 0) {
        alert(`Ingressos selecionados: ${ingressos}`)
    }
}

// checkKeyboardCode()
addKeyboardEventListener()
selectCard()
showSelectorCards()