chrome.storage.sync.get(['color'], function(result) {
    console.log('Value currently is ' + result.color);
  });

$(document).on("keyup", function(e) {
	if(e.keyCode === 82) {

        console.log('key pressed in contenst script');

        // 변경할 값 설정
        let newColor = '#ff5733'; // 새로운 색상 코드

        // chrome.storage.sync에 새로운 값을 저장
        chrome.storage.sync.set({ color: newColor }, function() {
        if (chrome.runtime.lastError) {
            console.error('Error setting color:', chrome.runtime.lastError);
        } else {
            console.log('Color updated successfully:', newColor);
        }
        });

	}
})

chrome.storage.onChanged.addListener(function(changes, namespace) {
    for (var key in changes) {
      var storageChange = changes[key];
      console.log('Storage key "%s" in namespace "%s" changed. ' +
                  'Old value was "%s", new value is "%s".',
                  key,
                  namespace,
                  storageChange.oldValue,
                  storageChange.newValue);
    }
  });