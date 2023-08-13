let celsiusInput = document.querySelector('#celsius > input')
let FahrenheitInput = document.querySelector('#Fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')


let btn = document.querySelector('.button button')


function roundNumber(number){
    return Math.round(number*100)/100
}

celsiusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celsiusInput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15

    FahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
})

FahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(FahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp - 32) * (5/9) + 273.15

    celsiusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
})

kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9/5) +32

    celsiusInput.value = roundNumber(cTemp)
    FahrenheitInput.value = roundNumber(fTemp)
})

btn.addEventListener('click' , ()=>{
    celsiusInput.value = ""
    FahrenheitInput.value = ""
    kelvinInput.value = ""
})





