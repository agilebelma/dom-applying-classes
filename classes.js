// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. Uncomment the line below and reload the browser.
  // one()
one()
two()
three ()
  // Your turn! Create a new function called `two`, then call it from here.
}

function one () {
  var one = document.getElementById('one')

  // Next, we apply a new CSS class to it:
  one.classList.add('blue')
}

// CREATE FUNCTION two HERE

function two () {
  var two = document.getElementById('two')

  // Next, we apply a new CSS class to it:
  two.classList.add('green')
}

// CREATE FUNCTION three HERE

function three () {
  var three = document.getElementById('three')

  // Next, we apply a new CSS class to it:
  three.classList.add('orange')
}


// CREATE FUNCTION makeVisible HERE
