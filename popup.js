console.log('This is a popup!');

chrome.storage.sync.get(['color'], function(result) {
    console.log('Color retrieved from storage:', result.color);
  });