function addurl(e) {
  e.preventDefault();
  let url = document.getElementById("url");
  let list = document.getElementById("websblock");

  list.innerHTML += "<li>" + url.value;
  url.value = "";
}
document.getElementById("addurl").addEventListener("click", addurl);

function addstate(e) {
  e.preventDefault();
  let namestate = document.getElementById("namestate");
  let list = document.getElementById("websblock");

  function ar() {
    let listurl = list.getElementsByTagName("li");
    let u = [];
    for (i = 0; i < listurl.length; i++) {
      u.push(listurl[i].innerText);
    }
    // window.alert("listurl: " + JSON.stringify(listurl));
    // console.log(u);
    return u;
  }

  // let oldstate = {};
  chrome.storage.sync.get("states", res => {
    let oldstate = res.states || {};
    const states = {
      ...oldstate,
      [namestate.value]: ar()
    }
    chrome.storage.sync.set({ states }, function () {
      location.reload()
    })
  })
}
document.getElementById("addstate").addEventListener("click", addstate);