// learn form { http://stackoverflow.com/questions/3937000/chrome-extension-accessing-localstorage-in-content-script }
chrome.extension.sendRequest({ method: "getShortcutKey" }, function (response) {
	shortcut.add(response.add, function () {
		chrome.extension.sendRequest({ command: "add" }, function (response) { });
	});
	shortcut.add(response.manage, function () {
		chrome.extension.sendRequest({ command: "manage" }, function (response) { });
	});
});
