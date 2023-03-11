import Player from '@vimeo/player';
    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!')
    });
    
    const onPlay = function(time) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(time));
    };
    player.on('timeupdate', throttle((onPlay), 1000));
    player.setCurrentTime(30.456).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});