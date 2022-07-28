import { of } from "rxjs";
import {scan, delay} from "rxjs/operators";

const src = of(1,2,3,4,5).pipe(delay(1000));
const scanObs = src.pipe(
    scan((a,c) => [...a, c], [])
);

scanObs.subscribe(v => console.log(v));
