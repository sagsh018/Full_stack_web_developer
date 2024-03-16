const btn = document.querySelector('button');
const heading = document.querySelector('h1');

btn.addEventListener('click', () => {
    // const newColor = generateNewColor();
    const newColor1 = getRandomColor();
    // document.body.style.backgroundColor = newColor;
    document.body.style.backgroundColor = newColor1;
    heading.innerText = newColor;
});

// Way of generating random color using rgb
function generateNewColor() {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`;
}

// way to generating random color using hexadecimal color code like #12fA34
function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}