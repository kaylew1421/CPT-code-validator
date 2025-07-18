// background.js

chrome.runtime.onInstalled.addListener(() => {
  console.log("✅ CPT Validator extension installed.");
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "PING") {
    sendResponse({ status: "PONG from background!" });
  }
});
