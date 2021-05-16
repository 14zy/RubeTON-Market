const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });



  customBowlAdd = function(item, price) {
    cart2 = localStorage.getItem("cart");

    if (cart2) {
      localStorage.setItem("cart", price + "|"+item);
    } else {
      localStorage.setItem("cart", price + "|"+item);
    }
    
  };


customBowlCheck = function() {
  cart2 = localStorage.getItem("cart");

  if (cart2) {
    return cart2
  }

}

removeCustomBowl = function() {
  localStorage.clear();
}