import { of, Subject } from "rxjs";
import {scan, delay} from "rxjs/operators";

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
