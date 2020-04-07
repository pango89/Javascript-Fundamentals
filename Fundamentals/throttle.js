// Throttling is a technique in which, no matter how many times
// the user fires the event, the attached function will be
// executed only once in a given time interval.

let counter = 0;

const getData = () => {
  // Calls an API to fetch data
  console.log("Fetching Data...", ++counter);
};

const throttle = (func, delay) => {
  let allow = true; // Closure

  return function () {
    const context = this;
    const args = arguments;

    if (allow) {
      func.apply(context, args);
      allow = false;

      setTimeout(() => {
        allow = true;
      }, delay);
    }
  };
};

const keyPressHandler = throttle(getData, 500);
