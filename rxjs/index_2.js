import { Observable, interval } from "rxjs";
import { bufferTime } from "rxjs/operators";


const myObs = new Observable((Observer) => {
    Observer.next(1);
    Observer.next(2);
    Observer.next(3);
    Observer.complete();
});

const subs = myObs.subscribe({
    next: x => console.log("El siguiente valor es " + x),
    error: err => console.error('Error: '+err),
    complete: () => console.log('Suscripcion completa')
});

subs.unsubscribe();

const timer = interval(500);

const buffer = timer.pipe(bufferTime(2000, 1000));

const subs1 = buffer.subscribe(val => {
    console.log('buffer:',val);
});
