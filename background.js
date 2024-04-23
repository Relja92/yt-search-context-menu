chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "searchYoutube",
    title: "Search YouTube for '%s'",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "searchYoutube" && info.selectionText) {
    const query = encodeURIComponent(info.selectionText);
    const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${query}`;
    chrome.tabs.create({ url: youtubeSearchUrl });
  }
});
