let statelist = document.getElementById("states");
chrome.storage.sync.get(["states"], res => {
  for (state in res.states) {
    statelist.innerHTML += "<li>" + state + "<button id='remove'>Remove</button>";
    document.getElementById("remove").addEventListener("click", () => remove(state));
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


