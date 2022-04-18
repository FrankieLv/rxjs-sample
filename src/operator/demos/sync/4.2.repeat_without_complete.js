import { Observable } from 'rxjs';
import { repeat } from 'rxjs/operators'

//Example: 
/*
1. instance operator. 
2. the number to repeat decides how many time to re-subscribe the source$ observable
3. the repeat$ re-subsribe the source$ only after the previous subscription is completed.
*/
const source$ = new Observable(observer =>{
    console.log("on subscribe...");
    observer.next(1);
    observer.next(2);
    observer.next(3);
    //observer.complete();

    return {
        unsubscribe: () => {
            console.log("on unsubscribe...");
        }
    }
})

const repeat$ = source$.pipe(repeat(2));

repeat$.subscribe(
    console.log,
    null,
    () => console.log('complete')
);


