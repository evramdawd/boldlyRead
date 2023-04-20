const slider = document.getElementById("rangeSlider");
const value = document.getElementById("value")

value.textContent = slider.value

let test = slider.addEventListener("input", (event) => {
  value.innerText = event.target.value
  slider.innerHTML = event.target.value;
  let storeVal = slider.innerHTML;
  return storeVal
})

// function setStorageKey(key, val) {
//   chrome.storage.sync.set({key: val});
// }

// function getStorageKeyValue(key, onGetStorageKeyValue){
//   chrome.storage.sync.get([key], function(result) {
//      onGetStorageKeyValue(result.key);
//   });
// }
//   let val = 10;
//   setStorageKey("K1", val);

//   getStorageKeyValue("K1", function(key) {
//     alert("Set value: "+val+" --- Received value: "+ key);
//   })


// function updateInput(val) {
//   document.getElementById('rangeSlider').innerHTML=val; 
// }

console.log(slider.value);
        
console.log(slider);

// slider.oninput = (e) => {
//     output.innerHTML = e.target.value;
// }