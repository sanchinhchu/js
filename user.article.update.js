function saveTitle(id) {
	var title = jQuery('input[name=title-' + id +']').val();
	jQuery.ajax({
		type : 'POST',
		url : '/tai-san-nguoi-dung/thay-doi-tieu-de-tin-luu-'+ id,
		cache : false,
		data : 'title=' + title,
		success : function(data, textStatus, jqXHR) {
			if (data == "done") {
				jQuery('#set-title-button-' + id).addClass("glyphicon");
				jQuery('#set-title-button-' + id).addClass("glyphicon-pencil");
				jQuery("#title-" + id).html(title);
			} else {
				jQuery('#save-title-button-' + id).text(data);
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			jQuery('#save-title-button-' + id).text(textStatus);
		}
	});
}

function saveProvince(id) {
	var city = jQuery("#city-input-" + id).attr('value');
	var district = jQuery("#district-input-" + id).attr('value');
	jQuery.ajax({
		type : 'POST',
		url : '/tai-san-nguoi-dung/thay-doi-tinh-thanh-tin-luu-' + id,
		cache : false,
		data : 'province=' + city + '&district=' + district,
		success : function(data, textStatus, jqXHR) {
			if (data == "done") {
				jQuery('#set-province-button-' + id).addClass("glyphicon");
				jQuery('#set-province-button-' + id).addClass("glyphicon-pencil");
				jQuery('#save-address-button-' + id).text('Đã Lưu, Xin Đợi Giây lát');
				setTimeout(function() { location.reload(); }, 5000);
			} else {
				jQuery('#save-address-button-' + id).text(data);
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			jQuery('#save-address-button-' + id).text(textStatus);
		}
	});
}

function savePlace(id) {
	var place = jQuery('input[name=place-' + id +']').val();
	jQuery.ajax({
		type : 'POST',
		url : '/tai-san-nguoi-dung/thay-doi-dia-danh-tin-luu-'+ id,
		cache : false,
		data : 'place=' + place,
		success : function(data, textStatus, jqXHR) {
			if (data == "done") {
				jQuery('#set-place-button-' + id).addClass("glyphicon");
				jQuery('#set-place-button-' + id).addClass("glyphicon-pencil");
				jQuery("#place-" + id).html(place);
			} else {
				jQuery('#save-place-button-' + id).text(data);
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			jQuery('#save-place-button-' + id).text(textStatus);
		}
	});
}

function setActionObject(id) {
	var actionObject = jQuery("#actions-input-" + id).attr('data-option');
	var actionValues = jQuery("#actions-input-" + id).attr('value');
	jQuery.ajax({
		type : 'POST',
		url : '/tai-san-nguoi-dung/thay-doi-loai-hinh-tin-luu-'+ id,
		cache : false,
		data : 'type=' + actionObject,
		success : function(data, textStatus, jqXHR) {
			if (data == "done") {
				jQuery('#set-actions-button-' + id).text('Đã Lưu, Xin Đợi Giây lát');
				setTimeout(function() { location.reload(); }, 5000);
			} else {
				jQuery('#set-actions-button-' + id).text(data);
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			jQuery('#set-actions-button-' + id).text(textStatus);
		}
	});
}

function saveFieldValue(id, field, inputName) {
	var value = jQuery('input[name=' + inputName + '-'+ id +']').val();
	postFieldValue(id, field, inputName, value);
}

function postFieldValue(id, field, inputName, value) {
	jQuery.ajax({
		type : 'POST',
		url : '/tai-san-nguoi-dung/thay-doi-du-lieu-tin-luu-'+ id,
		cache : false,
		data : 'value=' + value + '&field=' + field,
		success : function(data, textStatus, jqXHR) {
			if (data == "done") {
				jQuery('#set-' + inputName +'-button-' + id).text('Đã Lưu, Xin Đợi Giây lát');
				setTimeout(function() {
					location.reload();
				}, 3000);
			} else {
				jQuery('#set-' + inputName + '-button-' + id).text(data);
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			jQuery('#set-' + inputName  + '-button-' + id).text(textStatus);
		}
	});
}

function deleteImage(article, path) {
	jQuery.ajax({
		type : 'GET',
		url : '/tai-san-nguoi-dung/'+ path,
		cache : false,
		success : function(data, textStatus, jqXHR) {
			if (data == "done") {
				jQuery('#image-error-' + article).text('Xóa thành công! Xin đợi trong giây lát...');
				setTimeout(function() {
					location.reload();
				}, 5000);
			} else {
				jQuery('#image-error-' + article).text(data);
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			jQuery('#image-error-' + article).text(textStatus);
		}
	});
}

function saveContent(id) {	
	var content = $( "#editor" ).find("[data-role='body']").html();
	jQuery.ajax({
		type : 'POST',
		url : '/tai-san-nguoi-dung/luu-noi-dung-tin-luu-'+ id,
		cache : false,
		data : 'value=' + content,
		success : function(data, textStatus, jqXHR) {
			jQuery('#save-content-button-' + id).text('Đã Lưu, Xin Đợi Giây lát');
			setTimeout(function() {
				location.reload();
			}, 5000);
		},
		error : function(jqXHR, textStatus, errorThrown) {
			jQuery('#save-content-button-' + id).text(textStatus);
		}
	});
}

function saveUserArticle() {	
	var content = $("#editor").find("[data-role='body']").html();
	$("#html-content").val(content);
	$("#save-user-article-form").submit();
}