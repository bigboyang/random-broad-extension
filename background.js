
// chrome storage sync 와 chrome storage local 의 차이점을 알아보면 좋다.

// sync 와 local 두가지로 set 과 get 을 사용할 수 있는데 뭐가 다를까?!
// Chrome 이 오프라인 상태일 때 Chrome 은 데이터를 로컬에 저장한다. 다음에 브라우저가 온라인 상태가 되면 Chrome은 데이터를 동기화 한다.
// 사용자가 동기화를 비활성화 하더라도 저장, 동기화가 계속 작동한다. 이 경우 storage.local과 동일하게 작동한다.
// local 은 기본적으로 최대 5MB 까지 저장 가능한데 manifest 파일의 'unlimitedStorage' 를 permission 에 추가해주면 용량 제한 없이 저장이 가능하다.
// 반면 sync 는

// 전체 용량제한 : 100KB
// 항목당 용량제한 : 8KB
// 항목 수 제한 : 최대 512개
// 1시간 당 set, remove, clear 사용 제한 : 1800회
// 1분 당 set, remove, clear 사용 제한 : 120회
// 와 같은 제약사항이 있다.

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});