document.querySelector("#form").addEventListener("click", (e) => {
  console.log(e);

  // own data behavior called uppercase assigned to name and pan input field of the form.
  // Although event is delegated to parent form, the special behavior of the name and pan field is managed.
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUppercase();
  }
});
