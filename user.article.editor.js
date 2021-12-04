function generateTitleInput(article, title) {
	jQuery('#set-title-button-' + article).removeClass("glyphicon");
	jQuery('#set-title-button-' + article).removeClass("glyphicon-pencil");
	var code = '<div style="display: inline-block;"><input style="width: 550px;" name="title-' +  article + '" type="text" value="' + title + '" />'
				+ '	<a id="save-title-button-' + article + '" class="btn btn-primary btn-xs" '
				+ 'href="javascript:saveTitle(\'' + article + '\')">Sửa</a></span></div>';
	jQuery("#title-" + article).html(code);
}

function generateProvinceInput(article, city) {
	var code = '<div style="display: inline-block;">'
		+ '<a class="btn btn-xs btn-default dropdown-toggle btn-select article-choose-city"'+
		' data-toggle="dropdown" href="#" id="choose-city-' + article +'">'
		+ city
		+ '<span class="caret"></span>'
		+ '</a> <input type="hidden" name="city" id="city-input-' + article +'" value="' + city +'">'
		+ '<ul class="dropdown-menu article-change-city" '+
		'id="change-city-' + article +'" '+
		'style="overflow: scroll;min-width: 133px; left: auto; font-size: 12px;height:200px; top:initial !important; left:initial !important;">'
		+ '<li><a tabindex="-1"  data-option="Hà Nội">Hà Nội</a></li>'
		+ '<li><a tabindex="-1" '+
		'	data-option="Thành phố Hồ Chí Minh">Hồ Chí Minh</a></li>'
		+ '<li><a tabindex="-1" data-option="Đà Nẵng">Đà Nẵng</a></li>'
		+ '<li><a tabindex="-1" data-option="Hải Phòng">Hải	Phòng</a></li>'
		+ '<li><a tabindex="-1" data-option="Cần Thơ">Cần Thơ</a></li>'
		+ '<li><a tabindex="-1" data-option="Bình Dương">Bình	Dương</a></li>'
		+ '<li><a tabindex="-1" data-option="An Giang">An Giang</a></li>'
		+ '<li><a tabindex="-1" data-option="Bắc Cạn">Bắc Cạn</a></li>'
		+ '<li><a tabindex="-1" data-option="Bạc Liêu">Bạc Liêu</a></li>'
		+ '<li><a tabindex="-1" data-option="Bắc Ninh">Bắc Ninh</a></li>'
		+ '<li><a tabindex="-1" data-option="Bến Tre">Bến Tre</a></li>'
		+ '<li><a tabindex="-1" data-option="Bình Định">Bình Định</a></li>'
		+ '<li><a tabindex="-1" data-option="Bình Phước">Bình Phước</a></li>'
		+ '<li><a tabindex="-1" data-option="Bình Thuận">Bình Thuận</a></li>'
		+ '<li><a tabindex="-1" data-option="Cà Mau">Cà Mau</a></li>'
		+ '<li><a tabindex="-1" data-option="Cao Bằng">Cao Bằng</a></li>'
		+ '<li><a tabindex="-1" data-option="Đắk Lắk">Đắk Lắk</a></li>'
		+ '<li><a tabindex="-1" data-option="Đắk Nông">Đắk Nông</a></li>'
		+ '<li><a tabindex="-1" data-option="Điện Biên">Điện Biên</a></li>'
		+ '<li><a tabindex="-1" data-option="Đồng Nai">Đồng Nai</a></li>'
		+ '<li><a tabindex="-1" data-option="Đồng Tháp">Đồng Tháp</a></li>'
		+ '<li><a tabindex="-1" data-option="Gia Lai">Gia Lai</a></li>'
		+ '<li><a tabindex="-1" data-option="Hà Giang">Hà Giang</a></li>'
		+ '<li><a tabindex="-1" data-option="Hà Nam">Hà Nam</a></li>'
		+ '<li><a tabindex="-1" data-option="Hà Tĩnh">Hà Tĩnh</a></li>'
		+ '<li><a tabindex="-1" data-option="Hải Dương">Hải Dương</a></li>'
		+ '<li><a tabindex="-1" data-option="Hậu Giang">Hậu Giang</a></li>'
		+ '<li><a tabindex="-1" data-option="Hòa Bình">Hòa Bình</a></li>'
		+ '<li><a tabindex="-1" data-option="Hưng Yên">Hưng Yên</a></li>'
		+ '<li><a tabindex="-1" data-option="Khánh Hòa">Khánh Hòa</a></li>'
		+ '<li><a tabindex="-1" data-option="Kiên Giang">Kiên Giang</a></li>'
		+ '<li><a tabindex="-1" data-option="Kon Tum">Kon Tum</a></li>'
		+ '<li><a tabindex="-1" data-option="Lai Châu">Lai Châu</a></li>'
		+ '<li><a tabindex="-1" data-option="Lâm Đồng">Lâm Đồng</a></li>'
		+ '<li><a tabindex="-1" data-option="Lạng Sơn">Lạng Sơn</a></li>'
		+ '<li><a tabindex="-1" data-option="Lào Cai">Lào Cai</a></li>'
		+ '<li><a tabindex="-1" data-option="Long An">Long An</a></li>'
		+ '<li><a tabindex="-1" data-option="Nam Định">Nam Định</a></li>'
		+ '<li><a tabindex="-1" data-option="Nghệ An">Nghệ An</a></li>'
		+ '<li><a tabindex="-1" data-option="Ninh Bình">Ninh Bình</a></li>'
		+ '<li><a tabindex="-1" data-option="Ninh Thuận">Ninh Thuận</a></li>'
		+ '<li><a tabindex="-1" data-option="Phú Thọ">Phú Thọ</a></li>'
		+ '<li><a tabindex="-1" data-option="Quảng Bình">Quảng Bình</a></li>'
		+ '<li><a tabindex="-1" data-option="Quảng Nam">Quảng Nam</a></li>'
		+ '<li><a tabindex="-1" data-option="Quảng Ngãi">Quảng Ngãi</a></li>'
		+ '<li><a tabindex="-1" data-option="Quảng Ninh">Quảng Ninh</a></li>'
		+ '<li><a tabindex="-1" data-option="Quảng Trị">Quảng Trị</a></li>'
		+ '<li><a tabindex="-1" data-option="Sóc Trăng">Sóc Trăng</a></li>'
		+ '<li><a tabindex="-1" data-option="Sơn La">Sơn La</a></li>'
		+ '<li><a tabindex="-1" data-option="Tây Ninh">Tây Ninh</a></li>'
		+ '<li><a tabindex="-1" data-option="Thái Bình">Thái Bình</a></li>'
		+ '<li><a tabindex="-1" data-option="Thái Nguyên">Thái Nguyên</a></li>'
		+ '<li><a tabindex="-1" data-option="Thanh Hóa">Thanh Hóa</a></li>'
		+ '<li><a tabindex="-1" data-option="Thừa Thiên Huế">Thừa Thiên Huế</a></li>'
		+ '<li><a tabindex="-1" data-option="Tiền Giang">Tiền Giang</a></li>'
		+ '<li><a tabindex="-1" data-option="Trà Vinh">Trà Vinh</a></li>'
		+ '<li><a tabindex="-1" data-option="Tuyên Quang">Tuyên Quang</a></li>'
		+ '<li><a tabindex="-1" data-option="Vĩnh Long">Vĩnh Long</a></li>'
		+ '<li><a tabindex="-1" data-option="Vĩnh Phúc">Vĩnh Phúc</a></li>'
		+ '<li><a tabindex="-1" data-option="Yên Bái">Yên Bái</a></li>'
		+ '<li><a tabindex="-1" data-option="Phú Yên">Phú Yên</a></li>'
		+ '</ul>'
		+ '</div>'
		+ '<div class="btn-group" style="margin-left: 5px">'
		+ '<a class="btn btn-xs btn-default dropdown-toggle btn-select" '+
		'id="choose-district-' + article +'" data-toggle="dropdown">Quận'
		+ ' Huyện <span class="caret"></span>'
		+ '</a> <input type="hidden" name="district" '+
		'	id="district-input-' + article +'">'
		+ '<ul class="dropdown-menu" id="change-district-' + article +'" '+
		'	style="min-width: 130px; font-size: 12px;">'
		+ '</ul>'
		+ '</div>'
		+ '<span style="display: inline-block; margin-left: 5px">'
		+ '	<a id="save-address-button-' + article + '" class="btn btn-primary btn-xs" '
		+ 'href="javascript:saveProvince(\'' + article + '\')">Chuyển</a></span>';

	jQuery("#province-" + article).html(code);
	jQuery(".article-change-city li a").click(function() {
		var id = jQuery(this).parent().parent().prop("id");
		var idx = id.lastIndexOf('-');
		var article = id.substring(idx + 1);
		var text = jQuery(this).text();
		jQuery("#choose-city-" + article).html(text + " <span class='caret'></span>");
		jQuery("#city-input-" + article).val(text);
		generateArticleDistrict(article, text);
	});
	generateArticleDistrict(article, city);
	jQuery('#set-province-button-' + article).removeClass("glyphicon");
	jQuery('#set-province-button-' + article).removeClass("glyphicon-pencil");
}

function generateArticleDistrict(article, province) {
	if (district[province] == undefined || district[province] == null) return;
	var districtProvince = district[province];
	var districtOptCode = "";
	for (var i = 0; i < districtProvince.length; i++) {
		districtOptCode += "<li><a tabindex=\"-1\" data-option=\"" + districtProvince[i] + "\">" + districtProvince[i] + "</a></li>";
	}
	jQuery("#change-district-" + article).html(districtOptCode);
	jQuery("#change-district-" + article).css('overflow','scroll');
	jQuery("#change-district-" + article).css('height','200px');

	jQuery("#change-district-" + article + " li a").click(function() {
		var text = jQuery(this).text();
		jQuery("#choose-district-" + article).html(text + " <span class='caret'></span>");
		jQuery("#district-input-" + article).val(text);
	});
}

function generatePlaceInput(article, place) {
	jQuery('#set-place-button-' + article).removeClass("glyphicon");
	jQuery('#set-place-button-' + article).removeClass("glyphicon-pencil");
	var code = '<div style="display: inline-block;"><input style="width: 550px;" name="place-' +  article + '" type="text" value="' + place + '" />'
				+ '	<a id="save-place-button-' + article + '" class="btn btn-primary btn-xs" '
				+ 'href="javascript:savePlace(\'' + article + '\')">Sửa</a></span></div>';
	jQuery("#place-" + article).html(code);
}


function generateActionObjectMenu(article, actionObject) {
	var code = '<div style="display: inline-block;">'
		+ '<a class="btn btn-xs btn-default dropdown-toggle btn-select article-choose-actions"'+
		' data-toggle="dropdown" href="#" id="choose-actions-' + article +'">'
		+ actionObject
		+ '<span class="caret"></span>'
		+ '</a> <input type="hidden" name="actions" data-option="" id="actions-input-' + article +'" value="' + actionObject +'">'
		+ '<ul class="dropdown-menu article-change-actions" '+
		'id="change-actions-' + article +'" '+
		'style="min-width: 130px; font-size: 12px; top:initial !important; left:initial !important;">'
		+ '<li><a tabindex="-1"  data-option="1,2">Bán đất</a></li>'
		+ '<li><a tabindex="-1" '+
		'	data-option="1,1">Bán nhà</a></li>'
		+ '<li><a tabindex="-1" data-option="1,4">Bán chung cư</a></li>'
		+ '<li><a tabindex="-1" data-option="1,5">Bán biệt thự</a></li>'
		+ '<li><a tabindex="-1" data-option="2,1">Cho thuê nhà</a></li>'
		+ '<li><a tabindex="-1" data-option="2,11">Cho thuê nhà mặt phố</a></li>'
		+ '<li><a tabindex="-1" data-option="2,4">Cho thuê chung cư</a></li>'
		+ '<li><a tabindex="-1" data-option="2,5">Cho thuê biệt thự</a></li>'
		+ '<li><a tabindex="-1" data-option="2,6">Cho thuê phòng trọ</a></li>'
		+ '<li><a tabindex="-1" data-option="2,3">Cho thuê văn phòng</a></li>'
		+ '<li><a tabindex="-1" data-option="*,10">Bất động sản kinh doanh</a></li>'
		+ '</ul>'
		+ '</div>'
		+ '<span style="display: inline-block; margin-left: 5px">'
		+ '	<a id="set-actions-button-'
		+ article
		+ '" class="btn btn-primary btn-xs" '
		+ 'href="javascript:setActionObject(\'' + article + '\')">Chuyển</a></span>';

	jQuery("#actions-" + article).html(code);
	jQuery(".article-change-actions li a").click(function() {
		var id = jQuery(this).parent().parent().prop("id");
		var idx = id.lastIndexOf('-');
		var article = id.substring(idx + 1);
		var text = jQuery(this).text();
		var data_option = jQuery(this).attr('data-option');
		jQuery("#choose-actions-" + article).html(text + " <span class='caret'></span>");
		jQuery("#actions-input-" + article).val(text);
		jQuery("#actions-input-" + article).attr('data-option', data_option);
	});
}

function generateFieldValueInput(article, field, inputName, value) {
	var code = '<div style="display: inline-block;"><input style="width: 300px;" name="' + inputName + '-' 
					+  article + '" type="text"  value="' + value + '" />'
	+ ' <a id="set-' + inputName + '-button-' + article + '" class="btn btn-primary btn-xs" '
	+ ' href="javascript:saveFieldValue(\'' + article + '\', \'' + field + '\', \'' + inputName + '\')">Sửa</a></span></div>';
	jQuery("#" + inputName + "-" + article).html(code);
}

function generateContentEditor(article) {
	var html = jQuery('#article-content-' + article).html();
	html = '<div id=\"editor\">' + html + '</div><div class="pull-right" style="margin-top:20px;">';
	html	 += '<a id=\"save-content-button-' + article +'\" class="btn btn-default" href="javascript:saveContent(\'' + article+ '\');">Lưu lại</a></div>';
	jQuery('#article-content-' + article).html(html);
	jQuery("#editor").editor({
        uiLibrary: 'bootstrap'
    });
}

jQuery(document).ready(function() {
	var edit = window.location.href.indexOf('#edit') > 0;
	$(".glyphicon-pencil").each(function() {
		var idx = window.location.href.indexOf('#edit');
		if(edit) {
			$(this).show();
			$('#comment').hide();
		} else {
			$(this).hide();
			$('#comment').show();
		}
		
	});
});

function showEditor() {
	$(".glyphicon-pencil").each(function() {
		$(this).toggle();
	});
	if($(".glyphicon-pencil").first().css('display') == 'none') {
		$('#comment').show();
		var idx = window.location.href.indexOf('#edit');
		if(idx > 0) window.location.href = window.location.href.substring(0, idx);
	} else {
		$('#comment').hide();
		window.location.href += '#edit';
	}
}