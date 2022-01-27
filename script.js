// Mouse-Circle and Mouse-Dot Function

const mouseCircle = document.querySelector(".mouse-circle")  // select the mouseCircle element
const mouseDot = document.querySelector(".mouse-dot")  // selct the mouseDot element

// Create an arrow function to define the (top and left)  position for the element
const mouseCircleFn = (x, y) => {
  mouseCircle.style.cssText = `top:${y}px; left:${x}px; opacity:1`// define x,y using css style properties
  mouseDot.style.cssText = `top:${y}px; left:${x}px; opacity:1` // define x,y using css style properties
};

document.body.addEventListener('mousemove', (e) => {
  let x = e.clientX
  let y = e.clientY

  mouseCircleFn(x, y);
})

// Once the cursor leave the page hide the element
document.body.addEventListener('mouseleave', () => {
  mouseCircle.style.opacity = '0' // inorder to hide the elements (the opacity = 0)
  mouseDot.style.opacity = '0'  // inorder to hide the elements (the opacity = 0)
})

// EndOF Mouse-Circle and Mouse-Dot Function