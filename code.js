const bagCost = document.querySelector(".bag-cost");
const shoeCost = document.querySelector(".shoe-cost");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");

plus.addEventListener("click", increaseQuantity);

function increaseQuantity(e) {
  //   return bagCost * 2;
  console.log("clicked");
  increase();
}

function increase() {
  const increase = bagCost.innerText * 2;
  console.log(increase);
  var node = document.createElement("p"); // Create a <li> node
  var textnode = document.createTextNode(increase);
  node.appendChild(textnode);
  bagCost.appendChild(node);

  const node = increase +
}
