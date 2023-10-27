import { interval } from 'rxjs';
import { finalize, take } from 'rxjs/operators';

const localVideoElem = document.querySelector('#local-video');
const remoteVideoEl = document.querySelector('#remote-video');
const callBtn = document.querySelector('#call') as HTMLButtonElement;

console.log('%clocalVideoElem: %O', 'background-color: green', localVideoElem);
console.log('%cremoteVideoEl: %O', 'background-color: green', remoteVideoEl);

callBtn?.addEventListener('click', (e: MouseEvent) => {
  const intervalMillisec = 2000;
  const maximum = 3;

  console.log(
    `%cCall btn is clicked. Going to use "interval(${intervalMillisec})" & "take(${maximum})" & "finalize" RXJS functions`,
    'background-color:yellow;color:black'
  );

  interval(intervalMillisec)
    .pipe(
      take(maximum),
      finalize(() => {
        console.log('finalize => COMPLETED');
      })
    )
    .subscribe((interval: number) => {
      console.log(
        `Nested function invoked after ${
          intervalMillisec / 1000
        }s on ${++interval}/${maximum} times`
      );
    });
});
