import { Observable, pipe, of } from "rxjs";
import { concat, interval, range } from 'rxjs';
//import { fromEvent } from "rxjs";
import {map, filter, take} from "rxjs/operators";

/*import { timer } from "rxjs";
import {tap, mapTo, share} from "rxjs/operators";*/

/*import {interval, timer} from "rxjs";

const obs = new Observable((Observer) => {
    Observer.next(1);
    Observer.next(2);
    Observer.next(3);
    setTimeout(() => {
        Observer.next(4);
        Observer.complete();
    }, 1000 );
})

//const contador = new timer(1000);

console.log('Just before subscribe');
obs.subscribe({
    next: x => console.log("got value " + x),
    error: err => console.error('something wrong ocurred: '+err),
    complete: () => console.log('done')
});
console.log('Just after susbcribe');

contador.subscribe((n) => {
    //console.log(`Cada ${n} segundos`);
    console.log(`TRIGGERED`);
})*/

/*const el = document.getElementById('elemento');

const mouseMove = fromEvent(el, 'mousemove');

mouseMove.subscribe((e) => {
    console.log(`Coordenadas: X=${e.clientX}, Y=${e.clientY}`);
});*/

const nums = of(1,2,3,4,5);

const alCuadrado = pipe(
    filter((n) => n % 2 === 0),
    map(n => n*n)
);

const cuadrado = alCuadrado(nums);

cuadrado.subscribe(x => console.log(x));

/*const clicks = fromEvent(document, 'click');

const positions = clicks.pipe(
    tap(ev => console.log('Procesado: ' + ev),
    err => console.log(err)),
    () => console.log('Completado')
);

positions.subscribe(pos => console.log(pos));*/

/*const time = timer(1000);


const obs = time.pipe(
    tap(() => console.log('TAP ON')),
    mapTo('END')
);

const subs01 = obs.subscribe(val => console.log(val));
const subs02 = obs.subscribe(val => console.log(val));

const shareObs = obs.pipe(share());

console.log('SHARE ON');

const subs03 = shareObs.subscribe(val => console.log(val));
const subs04 = shareObs.subscribe(val => console.log(val));*/

const timer = interval(1000).pipe(take(4));

const rango = range(1,10);

const result = concat(timer, rango);

result.subscribe(x => console.log(x));