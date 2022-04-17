import { Observable } from 'rxjs';

//Example: Unicast - HotObservable

let number = 1;
const source$ = new Observable(observer => {
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