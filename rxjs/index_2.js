import { Observable, interval, fromEvent, forkJoin, of, from } from "rxjs";
import { bufferTime, switchMap, delay, take,concatMap, mergeMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";


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

//fromEvent(document, 'click').pipe(switchMap(() => interval(1000))).subscribe(console.log);

/*const fork = forkJoin(
    of('Hola'),
    of('Mundo').pipe(delay(500)),
    interval(1000).pipe(take(2))
);*/

//fork.subscribe(val => console.log(val));

const source = of(
    ajax.getJSON('https://api.github.com/users/ctmil'),
    ajax.getJSON('https://api.github.com/users/ibuioli')
);

const obsMergeMap = source.pipe(
    mergeMap(v => v)
);

obsMergeMap.subscribe(
    v => console.log(v)
);

