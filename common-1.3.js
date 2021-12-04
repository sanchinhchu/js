function installPopupListener() {
	jQuery('h4.meta-title').on('click', function(e) {
		e.preventDefault();
		jQuery("#popup-status").text("");
		jQuery(".modal-title").html(jQuery(this).text());
		jQuery(".modal-body").html("");
		var code = jQuery(this).attr('data-code');
		jQuery(".modal-body").load('/nguoi-dung/chi-tiet-noi-dung-' + code);
		jQuery("#meta-" + code).css('opacity', ' 0.5');
		jQuery(".article-button").each(function() {
			$(this).css('display', 'inline');
		});
	});
	
	$('#myModal').on('hidden.bs.modal', function (e) {
		var code = jQuery('#current-article-id').text();
		jQuery.ajax({
			type : 'GET',
			url : '/tai-khoan/da-doc?article-id='+ code,
			cache : false,
			success : function(data, textStatus, jqXHR) {
				//alert(textStatus);
			},
			error : function(jqXHR, textStatus, errorThrown) {
				//alert(textStatus);
			}
		});
	});
}

function refreshPage() {
	$("html, body").animate({ scrollTop: 0 }, "slow");
	refresh(2000);
}

function refresh(timeoutPeriod) {
	setTimeout(function() {
		window.location.reload(); 
	}, timeoutPeriod);
}

function deleteTag(name) {
	var result = confirm("Bạn có chắc chắn muốn xóa bộ thẻ '" + name + "'?");
	if (!result) return;
	$.ajax({
		type : "GET",
		data : "name=" + name,
		url : "/tag/delete",
		success : function(data, textStatus, jqXHR) {
			window.location = '/';
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert("Lỗi máy chủ xin thử lại sau !!!" + textStatus);
		}
	});
}

function markAsRead(code) {
	jQuery("#meta-" + code).css('opacity', '0.5'); // + " .meta_title"
	//jQuery("#meta-" + code + " .text").css('opacity', '0.5');
	//jQuery("#meta-properties-"  + code).css('opacity', '0.5');
}



function addUserArticle(id) {	
	jQuery.ajax({
		type : 'GET',
		url : '/tai-khoan/luu-tin?article-id='+ id,
		cache : false,
		success : function(data, textStatus, jqXHR) {
			//console.log(data + ' : '+ textStatus)
			jQuery('#action-message-'+id).show();
			if(data == 'done') {
				jQuery('#action-message-'+id).text('Lưu thành công!');
				jQuery('.modal').modal('toggle');
			} else {
				jQuery('#action-message-'+id).text(data + '-' + textStatus);	
			};
		},
		error : function(jqXHR, textStatus, errorThrown) {
			jQuery('#action-message-'+id).show();
			jQuery('#action-message-'+id).text(textStatus);
		}
	});
}

function removeUserArticle(id) {	
	jQuery.ajax({
		type : 'GET',
		url : '/tai-khoan/xoa-tin-luu?article-id='+ id,
		cache : false,
		success : function(data, textStatus, jqXHR) {
			jQuery('#action-message-'+id).show();
			if(data == 'done') {
				jQuery('#action-message-'+id).text('Xóa tin lưu thành công!');
				if(jQuery('#back-url') == null || jQuery('#back-url') == 'undefined') {
					refresh(5000); 
				} else {
					window.location = jQuery('#back-url').text();	
				}
			} else {
				jQuery('#action-message-'+id).text(data + '-' + textStatus);	
			};
		},
		error : function(jqXHR, textStatus, errorThrown) {
			jQuery('#action-message-'+id).text(textStatus);
		}
	});
}

function removeAllSavedArticles() {	
	var r = confirm("Bạn có chắc chắn xóa hết tin đã lưu?");
	if (r != true) return;
	jQuery.ajax({
		type : 'GET',
		url : '/tai-khoan/xoa-het-tin-da-luu',
		cache : false,
		success : function(data, textStatus, jqXHR) {
			if(data == 'done') {
				refresh(5000); 
			} else {
				alert(data + '-' + textStatus);	
			};
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert(textStatus);
		}
	});
}

function setAsAgent(id, phone) {
	var r = confirm("Xác nhận báo " + phone + " là môi giới?");
	if (r != true) return;
	jQuery.ajax({
		type : 'GET',
		url : '/tai-khoan/bao-cao-moi-gioi?phone=' + phone + "&article_id=" + id,
		cache : false,
		success : function(data, textStatus, jqXHR) {
			if (data == "done") { 
				jQuery('.modal').modal('toggle');
				refresh(3000);
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert(textStatus);
		}
	});
}

function reportSpam(id) {
	var r = confirm("Xác nhận báo là tin rác?");
	if (r != true) return;
	jQuery.ajax({
		type : 'GET',
		url : '/tai-khoan/bao-cao-tin-rac?article_id=' + id,
		cache : false,
		success : function(data, textStatus, jqXHR) {
			if (data == "done") { 
				jQuery('.modal').modal('toggle');
				refresh(3000);
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert(textStatus);
		}
	});
}

installPopupListener();


function dep() {
	var x = document.getElementsByClassName("detail-content");
	var i;
	for (i = 0; i < x.length; i++) {
		  var value = x[i].innerHTML.trim();
		  var idx = value.lastIndexOf('-');
		 		  
		 var keke = value.substring(idx+1);
		 var kekeJS = CryptoJS.enc.Base64.parse(keke);
	
		 var encryptString = value.substring(0, idx).trim();
		 var decodeBase64 = CryptoJS.enc.Base64.parse(encryptString);
		
	     var decryptedData = CryptoJS.AES.decrypt({
		    ciphertext: decodeBase64
		  },
		  kekeJS, {
		    mode: CryptoJS.mode.ECB,
		    padding: CryptoJS.pad.Pkcs7
		  }
		 );
		
		 x[i].innerHTML = decryptedData.toString(CryptoJS.enc.Utf8);
	}	
}


