/**
 * Getting the Random Attribute
 */
let testBody = document.querySelector(".test-body");
console.log(testBody.getAttribute("something"));

/**
 * Setting the attribute
 */
testBody.setAttribute("extraAtt", "Extra attribute");
console.log(testBody);

/**
 * Accessing all the attributes
 */
console.log(testBody.attributes);
for (let attr of testBody.attributes) {
  console.log(`${attr.name}:${attr.value}`);
}

/**
 * Understanding the outerHTMl
 */
console.log(testBody.outerHTML);

/**
 *Changing the attribute value
 */
testBody.extraAtt = "Value Changed";
console.log(testBody.getAttribute("extraAtt"));
testBody.id = "changed-id";
console.log(testBody.getAttribute("id"));

/**
 * Extra .........
 */
let obj = {
  name: "Ebraj",
  age: 21,
};
console.log(obj);
for (let key in obj) {
  console.log(key);
}
