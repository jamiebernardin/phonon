/**
 * Created by jbernardin on 3/6/16.
 */
//import {Observable} from 'rxjs/Rx';
//
//const startButton = document.querySelector('#start');
//const stopButton = document.querySelector('#stop');
//const display = document.querySelector('#display')
//
//const start$ = Observable.fromEvent(startButton, 'click');
//const stop$ = Observable.fromEvent(stopButton, 'click');
//
//const interval$ = Observable.interval(1000)
//    .takeUntil(stop$);
//
//const data = {count:0};
//const inc = (acc) => ({count: acc.count+1});
//
//var setData = (val) => display.firstChild.nodeValue = val;
//
//start$
//    .switchMapTo(interval$)
//    .mapTo(inc)
//    .startWith(data)
//    .scan(
//      (acc, f) => f(acc)
//    )
//    .subscribe(event => setData(event.count));
//# sourceMappingURL=foo.js.map