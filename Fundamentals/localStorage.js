// Stores Key value pairs in string format
// Is Persisted even when tab/window/system is restarted
localStorage.setItem("key", "value");
localStorage.getItem("key");
localStorage.removeItem("key");

// Store JSON
let data = {
  name: "Pankaj",
  address: [{ office: { city: "Bangalore" } }, { home: { city: "Ranchi" } }],
};

localStorage.setItem("user", JSON.stringify(data));
JSON.parse(localStorage.getItem("user"));

// Same follows for sessionStorage
// It is not persisted when browser tab/window is closed
