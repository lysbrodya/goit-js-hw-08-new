// const onPlay = function (e) {
//   console.log(e);
// };

const throttle = require('lodash.throttle');

// player.on('play', onPlay);
function apdateTime(e) {
  const carentTime = e.seconds;
  localStorage.setItem('videoplayer-current-time', carentTime);
}
// throttle(apdateTime(), 1000)
player.on('timeupdate', throttle(apdateTime, 1000));

const lastTimeVideoStop = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(lastTimeVideoStop)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
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
