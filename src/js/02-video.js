import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    const STORAGE_KEY = "videoplayer-current-time"
const playerCurrentTime = localStorage.getItem(STORAGE_KEY);

player.on('timeupdate', throttle(ev => {
    localStorage.setItem(STORAGE_KEY, ev.seconds);
}, 1000));
player.setCurrentTime(playerCurrentTime)
    .then(function (seconds) {
console.log(seconds)
    })
    .catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});