document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('resetSpeed').addEventListener('click', resetSpeed);
    document.getElementById('speedInput').addEventListener('input', function () {
      updateSliderAndApply();
    });
    document.getElementById('speedSlider').addEventListener('input', function () {
      updateInputAndApply();
    });
  });
  
  function applySpeed() {
    var speed = parseFloat(document.getElementById('speedInput').value);
    sendMessageToContentScript(speed);
  }

  function resetSpeed() {
    document.getElementById('speedInput').value = 1.0;
    updateSliderAndApply();
  }
  
  function updateInputAndApply() {
    var sliderValue = document.getElementById('speedSlider').value;
    document.getElementById('speedInput').value = sliderValue;
    applySpeed();
  }
  
  function updateSliderAndApply() {
    var inputValue = document.getElementById('speedInput').value;
    document.getElementById('speedSlider').value = inputValue;
    applySpeed();
  }
  
  function sendMessageToContentScript(speed) {
    //todo: fix error
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { speed: speed }, function(response) {});
    });
  }
  