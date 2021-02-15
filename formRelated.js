/**
 * DOM Properties are typed.
 */
console.log(input.getAttribute("checked"));
console.log(input.checked); //Returns a boolean

/**
 * Being style name as the string but the value is in the object format
 */
console.log(div.getAttribute("style"));
console.log(div.style);
console.log(div.style.height);

/**
 * Checking the link elements
 */
console.log(a);
console.log(a.getAttribute("href"));
console.log(a.href);

/**
 * Non-standard Attributes and dataset
 */
let user = {
  name: "Ebraj",
  age: 21,
};
for (let div of document.querySelectorAll("[show-info]")) {
  let field = div.getAttribute("show-info");
  div.innerHTML = user[field];
}

/**
 * Getting the non standard attributes
 */
let order = document.querySelector("#order");
console.log(order.getAttribute("data-order-state"));
console.log(order.dataset.orderState);
