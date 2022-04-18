import { EMPTY } from 'rxjs';

// Example: the observable object calls the observer.complete() method immediately
EMPTY.subscribe({
  next: () => console.log('Next'),
  complete: () => console.log('Complete!')
});

// Outputs
// Complete!