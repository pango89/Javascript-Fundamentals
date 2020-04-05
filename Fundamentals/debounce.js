// Debouncing is a programming practice used to ensure that
// time-consuming tasks do not fire so often, that it stalls
// the performance of the web page

let counter = 0;

const getData = () => {
  // Calls an API to fetch data
  console.log("Fetching Data...", ++counter);
};

const debounce = (func, delay) => {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};

const keyPressHandler = debounce(getData, 500);
