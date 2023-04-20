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
