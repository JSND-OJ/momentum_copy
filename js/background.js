const images = ["1.gif", "2.gif", "3.gif", "4.gif", "5.gif"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('img/${chosenImage}')`
document.body.style.backgroundRepeat = 'no-repeat'
document.body.style.backgroundSize = 'cover'