let bg =document.getElementById("background")
let g = document.getElementById("image")
let c = document.getElementById("cat")
window.addEventListener('scroll', function(){
    let v = window.scrollY;
    bg.style.top = v * 0.5 +'px'
    g.style.left = -v * 0.15 +'px'
    text.style.right =  -v  * 0.5+'px'
})
const clippedImage = document.querySelector('.image-2');
const clippingSlider = document.querySelector('.image-compare-input');

clippingSlider.addEventListener('input', (event) => {
  const newValue = `${event.target.value}%`
  clippedImage.style.setProperty('--exposure', newValue)
})