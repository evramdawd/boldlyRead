const slider = document.getElementById("rangeSlider");
const output = document.getElementById("demo");

slider.addEventListener("slider", (event) => {
  value.textContent = event.target.value
})


console.log(slider.value);
        


// slider.oninput = (e) => {
//     output.innerHTML = e.target.value;
// }