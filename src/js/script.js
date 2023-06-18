const dia = document.getElementById("dia")
const hora = document.getElementById("hora")
const minuto = document.getElementById("minuto")
const segundo = document.getElementById("segundo")

const lancamento = '01 dec 2023'

function countDown() {
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

function formato(tempo) {
    return tempo < 10? `0${tempo}` : tempo
}

countDown()
setInterval(countDown, 1000)