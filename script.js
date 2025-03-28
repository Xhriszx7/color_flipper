let colors = ['green', 'blue', 'red', 'aqua', 'rgb(0, 114, 114)', '#00ff00']
let changeButton = document.querySelector('#changeColorBtn')
let color = document.querySelector('.color')

changeButton.addEventListener('click', function () {
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber]
    color.innerText = colors[randomNumber]
    console.log(randomNumber);
    
})
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}
