
// BOLD SOME LETTERS ATTEMPT:
// const contents;


// after loading the DOM
// document.addEventListener('DOMContentLoaded', () => { 
  // use querySelectorAll to select all 'p' elements in the body -> return an array of all 'p' elements
  
  /* iterate through the array of 'p' elements
    // on each individual element (each 'p') we use .split to get an array of words
    // loop through each word, get the length of the word, then bold some first letters of each word
      // for bolding, we could put the strong tag before and after
    // now we have an array of strings that have been altered 
      // use innerText or innerHTML to change the text
    // take this array and rejoin it (.join) into a single string
    // then replace/update the old paragraph with the new paragraph
    */


/*
width: 100%;
height: calc(100ch - 50px);
background-color: rgba(0,0,0,0.2);
position: absolute;
z-index: 10;
backdrop-filter: blur(3px);
*/
let body = document.body;
console.log(body);

// body.style["background-color"] = "blue";
// body.style["backdrop-filter: blur(10px)"]
document.querySelector('html').style.overflow = "auto";
body.style.overflow = "auto";
body.style.position = "relative";
body.style.height = "100%";

let containerDivBlur = document.createElement("div");
body.prepend(containerDivBlur);
containerDivBlur.style = "width: 100%; height: 100%; background-color: rgba(0,0,0,0.2); position: absolute; z-index: -1; backdrop-filter: blur(2px);"

// containerDivBlur.style = "width: 100%; height: calc(100ch - 50px); background-color: rgba(0,0,0,0.2); position: absolute; z-index: 1; backdrop-filter: blur(3px);"


document.querySelectorAll("p").forEach(function(el) {
  // el.innerText = updatedParagraphs[i];

    // console.log("para.innerText: ", para.innerText);
    let parArray = el.innerText.split(' ');
    // console.log("parArray: ", parArray);
    
    // Iterating thru Logic for bolding parts of the words:
    for(let i = 0; i < parArray.length; i++) {
      // Get length of word: -> assign the number of letters to be bolded based on a Math.floor() of 1/4 of the length of the word.
      let boldedLength = Math.floor(0.4 * parArray[i].length);
      if (boldedLength === 0) boldedLength = 1;
      // parArray[i] --> [L, o, r, e, m]
      parArray[i] = parArray[i].split("");
      parArray[i].unshift("<span class=\"focusBlur\" style=\"font-weight: bold; color: black; background-color: #f7f7f7;\">");
      parArray[i].splice(boldedLength+1, 0, "</span>");
      parArray[i] = parArray[i].join("");
      // console.log(parArray[i]);
    }
    // push parArray to updatedParagraphs
    // console.log(parArray);
    parArray = parArray.join(" ")
    el.innerHTML = parArray;
    el.className = "focusBlur"
    el.style = "position: relative"
    el.style = "z-index: 1"
    el.style = "background-color: #f7f7f7"
});
  
  
  // opacity: 0.3
  
  // let test = "Lorem";
  // console.log(test.length);

  // let boldedLength = Math.floor(0.4*test.length);
  // console.log(boldedLength);
  
  // test = test.split("");
  // console.log(test);
  // test.splice(boldedLength, 0, "</b>");
  // console.log(test);
  // test.splice(0, 0, "<b>");
  // console.log(test);
  // test = test.join("");
  // console.log(test);
  


// });




// document.addEventListener('DOMContentLoaded', () => {
//   console.log('hello');
//   const paragraphs = [...document.body.querySelectorAll('p')];
//   console.log('hi');
//   console.log(paragraphs);
//   for (const para of paragraphs) {
//     console.log(para.innerText);
//     const parArray = para.innerText.split(' ');
//     console.log(parArray);
//   }
// });






/* BLUR:
const imageWidth = 600
const imageHeight = 400
const blurWidth = 500
const blurHeight = 200
const blurOffset = 10
const maxTop = imageHeight - blurHeight
const maxLeft = imageWidth - blurWidth

var posTop = (imageHeight - blurHeight) / 2
var posLeft = (imageWidth - blurWidth) / 2

var mouseX = 0
var mouseY = 0
var blurWrap = document.querySelector('.blur-wrap')
var blur = document.querySelector('.blur')

function moveHandler ({clientX, clientY}) {
  posTop = posTop + clientY - mouseY
  posLeft = posLeft + clientX - mouseX
  if (posTop > maxTop) { posTop = maxTop }
  if (posLeft > maxLeft) { posLeft = maxLeft }
  if (posTop < 0) { posTop = 0 }
  if (posLeft < 0) { posLeft = 0 }
  blurWrap.style.top = posTop + 'px'
  blurWrap.style.left = posLeft + 'px'
  blur.style.backgroundPosition = `${blurOffset - posLeft}px ${blurOffset - posTop}px`
  mouseX = clientX
  mouseY = clientY
}

function mouseupHandler () {
  blurWrap.style.willChange = ''
  blur.style.willChange = ''
  document.removeEventListener('mousemove', moveHandler)
  document.removeEventListener('mouseup', mouseupHandler)
}

blurWrap.addEventListener('mousedown', function ({clientX, clientY}) {
  blurWrap.style.willChange = 'top, left'
  blur.style.willChange = 'background-position'
  mouseX = clientX
  mouseY = clientY
  document.addEventListener('mouseup', mouseupHandler)
  document.addEventListener('mousemove', moveHandler)
})
*/
