import { Observable } from 'rxjs';

//Example 1: Terminated status - Error
/* 
Key Point:
The observable object becomes the terminated status for one specific observer object by complete() method
The observable object won't emit the info to this specific observer object.
However, the observable object will still be running and emit the info to any new observer object
*/

const source$ = new Observable(observer => {
  let number = 1;
  const handle = setInterval(() => {
    observer.next(number++);
    if(number > 2){
      observer.complete();
      console.log("obersevable: I'm still working" + number);
    }
  }, 1000)
});

const theObserver = {
  next: item => console.log("theObserver:" + item)
}

source$.subscribe(theObserver);

const newObserver = {
  next: item => console.log("newObserver:" + item)
}

setTimeout(() => source$.subscribe(newObserver), 5000)