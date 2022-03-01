let order = []
let clickorder = []
let score = 0

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const blue = document.querySelector('.azul')
const red = document.querySelector('.vermelho')
const green = document.querySelector('.verde')
const yellow = document.querySelector('.amarelo')

const shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4)
    order[order.length] = colorOrder
    clickedOrder = []

    for (let i in order) {
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i + 1))
    }
}

const lightColor = (element, number) => {
    let number = number + 500
    setTimeout(() => {
        element.classList.add('selected')
    }, number - 250)
    setTimeout(() => {
        element.classList.remove('selected')
    }, number)
}

const checkOrder = () => {
    for (let i in order) {
        if (clickedOrder[i] !== order[i]) {
            localStorage()
            break
        }
    }

    if (clickorder.length === order.length) {
        alert (`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível`)
        nextLevel()
    }
}
