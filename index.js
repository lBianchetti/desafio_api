const containerImage = document.querySelector('#countryFlag')
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/name/france')
xhr.send();

let resultado;

xhr.onreadystatechange = function () {
    if (xhr.status === 200 && xhr.readyState === 4) {
        resultado = JSON.parse(xhr.response)
        const image = document.createElement('img')
        image.src = resultado[0].flags.png
        image.alt = resultado[0].flags.alt
        containerImage.appendChild(image)
        
    } else {
        console.log(xhr.status)
    }
}