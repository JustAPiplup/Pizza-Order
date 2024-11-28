// Input and InnerHTML

// .innerHTML command:
//  1. Gets the content of an HTML elment. E.g. <p>Click <a>here</a> </p>
// The innerHTML of the paragraph is: Click <a>here</a>
// The Inner of the anchor <a> is: here
// 2. Sets the content of an HTML element.

// document.getElementById("btn").addEventListener("click", showContent);

// function showContent() {
//     document.getElementById("output").innerHTML =
//     "Welcome to my <a href"
// }

// value command: retrieves the content of an <Input> element.
// *Important* value command should ALWAYTS be used within a function

document.getElementById("order-btn").addEventListener("click", getOrder);

function getOrder() {
  // Input: Retrieve the user's data
  let topping1 = document.getElementById("top1-input").value;
  let topping2 = document.getElementById("top2-input").value;
  let size = document.getElementById("size-input").value;

  // Processing: make output statement
  let output = `Your ${size} pizza with ${topping1} and ${topping2} will be ready in 20 minutes`;

  // Output: Displlay output in the "Your Order" section of the website
  document.getElementById("order-output").innerHTML = output;
}
