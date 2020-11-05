let statelist = document.getElementById("states");
chrome.storage.sync.get(["states"], res => {
  for (state in res.states) {
    statelist.innerHTML += "<li>" + state + "<button class='remove'>Remove</button>";
    document.getElementsByClassName("remove")[0].addEventListener("click", () => remove(state));
  }
  function remove(state) {
    let states = res.states;
    delete states[state]
    chrome.storage.sync.set({ states }, () => {
      // window.alert(JSON.stringify(states));
    });
    location.reload();
  }

})


