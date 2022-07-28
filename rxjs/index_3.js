import { of, Subject, from, ConnectableObservable, ReplaySubject, BehaviorSubject } from "rxjs";
import {scan, delay, multicast} from "rxjs/operators";

const src = of(1,2,3,4,5).pipe(delay(1000));
const scanObs = src.pipe(
    scan((a,c) => [...a, c], [])
);

scanObs.subscribe(v => console.log(v));

const subject = new Subject();
subject.subscribe({
    next: (n, x) => console.log(`ObsA: ${n}`)
});
subject.subscribe({
    next: (n, x) => console.log(`ObsB: ${n + 1}`)
});

subject.next(1);
subject.next(2);

/*const source = from([1,2,3,4]);
const multi = source.pipe(multicast(() => new Subject())) as ConnectableObservable<any>;

multi.subscribe({
    next: x => console.log(`observerA: ${x}`)
});


multi.subscribe({
    next: x => console.log(`observerB: ${x}`)
});

multi.connect()*/

const obs = new ReplaySubject(4);

obs.next(1);
obs.next(2);
obs.next(3);

obs.subscribe(console.log);

obs.next(4);
obs.next(5);

obs.subscribe(console.log);

const subject1 = new BehaviorSubject(1);

subject1.subscribe(console.log());

subject1.next(2);

subject1.subscribe(console.log());