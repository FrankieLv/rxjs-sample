import {concat,  of, EMPTY, throwError} from "rxjs"

//Example: these 3 operator must be combined with other operators for some specific scnearios

let isComplete = true;

concat(of(1), isComplete? EMPTY : throwError(() => {
    const error = {message: "this is an error"};
    error.timestamp = Date.now();
    return error;
 })).subscribe({
    next: (item) => console.log(item),
    error: () => console.log("error"),
    complete: () => console.log("complete")
})