import { Observable } from 'rxjs';

//Example 1: A basic observable and observer
//Key point: "observer" in the "onSubscribe()" funtion is a proxy object of the "theObserver".
const source$ = new Observable(observer => {
  try{
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  }catch(error){
    observer.error("error");
  }
});

const theObserver = {
  next: item => console.log("hello:" + item),
  complete: item => console.log("complete"),
  error: item => console.log("error")
}

source$.subscribe(theObserver);

