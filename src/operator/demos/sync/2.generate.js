import { generate } from 'rxjs';

//example: the "generate" equals "for"
const result = generate(2, x => x < 5, x => x + 1, x => x * x);

result.subscribe(x => console.log(x));

// Logs:
// 4
// 9
// 16
