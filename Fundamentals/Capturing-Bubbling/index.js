// 3rd arguement of addEventListener is 'useCapture' which is by default false hence represent bubble up.
// If True, it represents capturing or trickling down
document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("Grandparent Clicked!");
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("Parent Clicked!");
  },
  false
);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("Child Clicked!");

    // e.stopPropagation(); // This will stop the event propagation
  },
  true
);

// When child is clicked, the above script will output:-
// Grandparent Clicked!
// Child Clicked!
// Parent Clicked!

// Description - In 1st phase, all event capturing will be done.
// So Grandparent and Child got printed. In the 2nd phase,
// all bubbling will happen. So Parent got printed.
