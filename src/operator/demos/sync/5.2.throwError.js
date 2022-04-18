import { throwError } from 'rxjs';

//Example: The observable object just call the observer.error() method immediately
const errorWithTimestamp$ = throwError(() => {
   const error = {message: "this is an error"};
   error.timestamp = Date.now();
   return error;
});

errorWithTimestamp$.subscribe({
   error: err => console.log(err.timestamp, err.message)
});

errorWithTimestamp$.subscribe({
   error: err => console.log(err.timestamp, err.message)
});

// Logs the timestamp and a new error message each subscription;