import { Observable } from "rxjs";

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
