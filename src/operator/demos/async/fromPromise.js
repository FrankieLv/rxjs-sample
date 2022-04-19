import { from } from 'rxjs';

//Example 1
const array = [10, 20, 30];
const result = from(array);

result.subscribe(x => console.log(x));

// Logs:
// 10
// 20
// 30

//Example 2: fromPromise - resolve

const promiseGood = Promise.resolve("good");
const source1$ = from(promiseGood);

source1$.subscribe(
    x => console.log(x),
    error => console.log("error", error),
    () => console.log("complete")
);

//Example 3: fromPromise - reject

const promiseRject = Promise.reject("reject");
const source2$ = from(promiseRject);

source2$.subscribe(
    x => console.log(x),
    error => console.log("error", error),
    () => console.log("complete")
);