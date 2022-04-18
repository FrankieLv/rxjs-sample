import { of } from 'rxjs';
import { map } from 'rxjs/operators';

of(1, 2, 3)
  .subscribe((v) => console.log(`value: ${v}`));

// Logs:
// value: 1
// value: 2
// value: 3