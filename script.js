const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}
const header = document.querySelector("header"); 
window.addEventListener ("scroll", function() { 
    header.classList.toggle ("sticky", window.scrollY > 100); 
});