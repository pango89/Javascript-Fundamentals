// Very basic example for event delegation.
// Event handlers are not provided at individual li elements
// but are provided at parent ul element.

document.querySelector("#category").addEventListener("click", (e) => {
  // Prints 'laptops' or 'cameras' or 'mobiles' based on which li element is clicked.
  console.log(e.target.id);

  if (e.target.tagName === "LI") {
    // Redirects to /laptops etc.
    window.location.href = "/" + e.target.id;
  }
});
