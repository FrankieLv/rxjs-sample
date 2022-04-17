import { Observable } from 'rxjs';

//Example: Unicast - ColdObservable

const source$ = new Observable(observer => {
  let number = 1;
  const handle = setInterval(() => {
    observer.next(number++);
  }, 1000)
});

const theObserver = {
  next: item => console.log("theObserver next:" + item)
}
source$.subscribe(theObserver);


const newObserver = {
  next: item => console.log("newObserver next:" + item),
  error: item => console.log("newObserver error:" + item)
}


setTimeout(() => source$.subscribe(newObserver), 3000)