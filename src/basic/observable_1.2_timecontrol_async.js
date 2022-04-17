import { Observable } from 'rxjs';

//Example: A basic observable and observer - time control
// The observable controls how and when push the info to the observer
const source$ = new Observable(observer => {
  let number = 1;
  const handle = setInterval(() => {
    observer.next(number++);
    if (number > 4){
      clearInterval(handle);
    }
  }, 1000)
});

const theObserver = {
  next: item => console.log("hello:" + item)
}

source$.subscribe(theObserver);

