import { Observable } from "rxjs";
import { fromEvent } from "rxjs";
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

const el = document.getElementById('elemento');

const mouseMove = fromEvent(el, 'mousemove');

mouseMove.subscribe((e) => {
    console.log(`Coordenadas: X=${e.clientX}, Y=${e.clientY}`);
});