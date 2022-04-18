import { NEVER } from 'rxjs';
import { startWith } from 'rxjs/operators';

//Example: An observable object that won't be completed forever. It won't call the observer.next()/error()/complete() method forever.
function info() {
  console.log('Will not be called');
}
const result = NEVER.pipe(startWith(7));
result.subscribe(x => console.log(x), info, info);