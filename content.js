chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.speed) {
      document.querySelectorAll('video').forEach(function (video) {
        video.playbackRate = request.speed;
      });
    }
  });