chrome.storage.sync.get(["states", "start"], res => {
  const st = res.start;
  if (st !== "") {
    res.states[st].map(url => {
      setTimeout(() => {
        findAllURL(url)
      }, 1000);
    })

  }

})


const findAllURL = (text) => {
  var current = window.location.href;
  if (current.includes(text)) {
    document.documentElement.innerHTML = '';
    document.documentElement.innerHTML = '<h1>Domain is blocked';
    document.documentElement.scrollTop = 0;
  }
}
