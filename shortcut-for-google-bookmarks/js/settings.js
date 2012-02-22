settings = {
  get shortcutKeyAdd() {
	var key = localStorage['shortcut_key_add'];
	return (typeof key == 'undefined') ? "alt+b" : key;
  },
  set shortcutKeyAdd(val) {
	localStorage['shortcut_key_add'] = val;
  },
  get shortcutKeyManage() {
	var key = localStorage['shortcut_key_manage'];
	return (typeof key == 'undefined') ? "alt+m" : key;
  },
  set shortcutKeyManage(val) {
	localStorage['shortcut_key_manage'] = val;
  },
  get popupOnAdd() {
	var key = localStorage['popup_on_add'];
    return (typeof key == 'undefined') ? true : key === 'true';
  },
  set popupOnAdd(val) {
	localStorage['popup_on_add'] = val;
  }
};

