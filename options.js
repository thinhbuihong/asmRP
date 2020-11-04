window.onload = () => {
  document.getElementById("savelimit").addEventListener("click", () => {
    let limit = document.getElementById("limit").value;
    if (limit) {
      chrome.storage.sync.set({
        "limit": limit,
      }, () => {
        close();
      })
    }
  })

  document.getElementById("resettotal").addEventListener("click", () => {
    chrome.storage.sync.set({
      "total": 0
    }, () => {
      let ontif = {
        type: 'basic',
        iconUrl: 'icon48.png',
        title: 'Total reset',
        message: 'total has been reset to 0'
      }
      chrome.notifications.clear('limitNotif');
      chrome.notifications.create('limitNotif', ontif)
    })
  })

  chrome.storage.sync.get("limit", (budget) => {
    document.getElementById("limit").value = budget.limit;
  })
}