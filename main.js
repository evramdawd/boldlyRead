
// BOLD SOME LETTERS ATTEMPT:
// const contents;


// after loading the DOM
document.addEventListener('DOMContentLoaded', () => { 
  // use querySelectorAll to select all 'p' elements in the body -> return an array of all 'p' elements
  
  // iterate through the array of 'p' elements
    // on each individual element (each 'p') we use .split to get an array of words
    // loop through each word, get the length of the word, then bold some first letters of each word
      // for bolding, we could put the strong tag before and after
    // now we have an array of strings that have been altered 
      // use innerText or innerHTML to change the text
    // take this array and rejoin it (.join) into a single string
    // then replace/update the old paragraph with the new paragraph
  
  // const paragraphs = [...document.body.querySelectorAll('p')];
  // console.log('hi');
  // console.log("paragraphs: ", paragraphs);
  // // declare an empty array, 'updatedParagraphs'
  
  // const updatedParagraphs = [];
  // // ITERATING THROUGH ALL THE <p> TAGS:
  // for (const para of paragraphs) {
  //   // console.log("para.innerText: ", para.innerText);
  //   const parArray = para.innerText.split(' ');
  //   console.log("parArray: ", parArray);
    
  //   // Logic for bolding parts of the words:
  //   for(let i = 0; i < parArray.length; i++) {
  //     // Get length of word: -> assign the number of letters to be bolded based on a Math.floor() of 1/4 of the length of the word.
  //     let boldedLength = Math.floor(0.4 * parArray[i].length);
  //     if (boldedLength === 0) boldedLength = 1;
  //     // parArray[i] --> [L, o, r, e, m]
  //     parArray[i] = parArray[i].split("");
  //     parArray[i].unshift("<b>");
  //     parArray[i].splice(boldedLength+1, 0, "</b>");
  //     parArray[i] = parArray[i].join("");
  //   }
  //   // push parArray to updatedParagraphs
  //   updatedParagraphs.push(parArray);
  // }
  // console.log(updatedParagraphs);

  // iterate through the actual DOM elements (with 'p' tag)
    // for each paragraph, replace it with the paragraph at the corresponding index in updatedParagraphs

    // document.querySelectorAll("footer li a").forEach(function(el) {
    //   el.style.color = Ftextlink;
    // });

  document.querySelectorAll("p").forEach(function(el) {
    // el.innerText = updatedParagraphs[i];

      // console.log("para.innerText: ", para.innerText);
      let parArray = el.innerText.split(' ');
      console.log("parArray: ", parArray);
      
      // Iterating thru Logic for bolding parts of the words:
      for(let i = 0; i < parArray.length; i++) {
        // Get length of word: -> assign the number of letters to be bolded based on a Math.floor() of 1/4 of the length of the word.
        let boldedLength = Math.floor(0.4 * parArray[i].length);
        if (boldedLength === 0) boldedLength = 1;
        // parArray[i] --> [L, o, r, e, m]
        parArray[i] = parArray[i].split("");
        parArray[i].unshift("<b>");
        parArray[i].splice(boldedLength+1, 0, "</b>");
        parArray[i] = parArray[i].join("");
        console.log(parArray[i]);
      }
      // push parArray to updatedParagraphs
      console.log(parArray);
      parArray = parArray.join(" ")
      el.innerHTML = parArray;
      console.log(el.innerText);
  });
  
  
  
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
  


});




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
