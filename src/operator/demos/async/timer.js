import { of, timer, concatMap } from 'rxjs';

//Example 1
timer(1000)
  .subscribe(console.log);

//Example 2
timer(1000, 2000)
  .subscribe(console.log);

//Example 3: it equals interval(1000)
timer(1000, 1000)
  .subscribe(console.log);


//Example 4: specific date
const now = new Date();
const later = new Date(now.getTime + 2000);
timer(later)
  .subscribe(console.log);