import { Observable } from 'rxjs';

//Example: unsubscribe
/* 
Key Point:
1. we cannot assume that all the obverable object like the example 1 can be completed automatically and all the resources can be released.
2. if some observable object is endless like some "fromEvent" and some data are cached, this will cause the performance issue.
3. the observal object should have the ability to unsubscribe and release the resources(complete the process) in the observable object.
*/

const source$ = new Observable(observer => {
  let number = 1;
  let cacheNumber = [];
  const handle = setInterval(() => {
    observer.next(number++);
    cacheNumber.push(number);
    if(number > 2){
      try{
        throw Error("I'm an Error");
      }catch(error){
        observer.error(error + ":" + number);
      }
      console.log("obersevable: I'm still working" + number);
    }
  }, 1000)
  return {
    unsubscribe: () => {
      clearInterval(handle);
    }
  }
});

const theObserver = {
  next: item => console.log("theObserver next:" + item),
  error: item => {console.log("newObserver error:" + item); subscription1.unsubscribe()}
}

let subscription1 = source$.subscribe(theObserver);


const newObserver = {
  next: item => console.log("newObserver next:" + item),
  error: item => console.log("newObserver error:" + item)
}

let subcription2 = null;
setTimeout(() => subcription2 = source$.subscribe(newObserver), 5000)

setTimeout(() => {
  subcription2.unsubscribe();
}, 8500)