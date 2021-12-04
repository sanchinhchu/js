
function addAgentPattern(articleId) {
	var pattern = getSelectionText();
	pattern = pattern.trim();
	if(pattern == '') {
		jQuery('#adm-status').text('Xin chọn một đoạn chữ!');
		return;
	}

	jQuery("#adm-status").text("Đang gửi dữ liệu...");

	jQuery.get('/quan-tri/them-mau-moi-gioi?article-id=' + articleId + '&pattern=' + pattern, function(data) {
		jQuery('#adm-status').text(data);
	});
}


function addSpamPattern(articleId) {
	var pattern = getSelectionText();
	pattern = pattern.trim();
	if(pattern == '') {
		jQuery('#adm-status').text('Xin chọn một đoạn chữ!');
		return;
	}

	jQuery("#adm-status").text("Đang gửi dữ liệu...");

	jQuery.get('/quan-tri/them-mau-tin-rac?article-id=' + articleId + '&pattern=' + pattern, function(data) {
		jQuery('#adm-status').text(data);
	});
}

function getSelectionText() {
	var text = "";
	if (window.getSelection) {
		text = window.getSelection().toString();
	} else if (document.selection && document.selection.type != "Control") {
		text = document.selection.createRange().text;
	}
	return text;
}