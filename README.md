# Javascript-Fundamentals

call() - Calls a function with a given this value and arguments provided individually - Function Borrowing.

apply() - Calls a function with a given this value, and arguments provided as an array.

bind() - Creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments.

Polyfill for bind() - Create your own implementation for bind()

Function Currying - Can be achieved using bind() or closures.

Debouncing - Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page.

async/defer -
![](https://github.com/pango89/Javascript-Fundamentals/blob/master/Fundamentals/async-defer.png)

Event Capturing/Event Trickling - Event listeners are propagated from parent to child direction in DOM tree/hierarchy. Event Listener's 3rd parameter is 'useCapture' which is by default false i.e. dafault behavior is event bubbling. Capturing is the 1st phase of event propagation cycle.

Event Bubbling - Event listeners are propagated from child to parent direction in DOM tree/hierarchy. Bubbling is the 2nd phase of event propagation cycle.

Event Delegation - The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.

Implement function sum(a)(b)(c)(d)...() upto any number of parameters.
