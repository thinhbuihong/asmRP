var listState = document.getElementById('state');
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let state = document.getElementById("state");


chrome.storage.sync.get(["states", "start"], res => {
  for (st in res.states) {
    let opt = "<option value='" + st + "'>" + st
    listState.innerHTML += opt;
  }
  if (res.start) {
    state.value = res.start;
  }
})


const startState = () => {
  const st = state.value;
  chrome.storage.sync.set({ start: st }, () => {

  });
}
const stopState = () => {
  chrome.storage.sync.set({ start: "" }, () => {

  })
}
start.addEventListener("click", startState)
stop.addEventListener("click", stopState)
