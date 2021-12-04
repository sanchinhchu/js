function registryAccount() {
	var phone = jQuery("#phone").val();
	if (!checkPhone(phone)) return; 

	var password = jQuery("#register-password").val();
	var repassword = jQuery("#repassword").val();
	if (!checkPassword(password, repassword)) {
		return;
	}

	jQuery.ajax({
		type : 'POST',
		url : '/dang-ky',
		cache : false,
		data : $('#registry-account').serialize(),
		success : function(data, textStatus, jqXHR) {
			if (data == '(*)Bạn chưa chọn loại hình') {
				jQuery('#type-error').text(data);
			}
			if (data == 'done') {
				alert('Bạn đã đăng ký thành công.  \n'
						+ 'Mời nạp thẻ thanh toán để kích hoạt tài khoản.');
				setTimeout(function() {
					window.location = '/thanh-toan/nap-the';
				}, 1000);
			} else {
				jQuery('#error').html(data);
			}
		},
		error : function(jqXHR, textStatus, errorThrown) {
			jQuery('#error').html(textStatus);
		}
	});
}

function checkPassword(password, repassword) {
	if (password == "" || password == null) {
		jQuery("#pass-error").html("(*) Chưa nhập mật khẩu!!!");
		return false;
	}

	if (password.length < 6) {
		jQuery("#pass-error").html("(*) Mật khẩu phải lớn hơn 5 kí tự!");
		return false;
	}

	if (password != repassword) {
		jQuery("#repass-error").html("(*) Mật khẩu nhập lại không khớp!");
		return false;
	}
	return true;
}

function checkPhone(phone) {
	if (phone.length < 9 || 13 < phone.length) {
		jQuery(".rspPhoneStatus").html("(*) Số điện thoại phải từ 10 đến 12 số!");
		return false;
	}
	/* else if (checkTypePhone(phone) && 9 < phone.length < 13) {
			return true;
		} else if (isNaN(phone)) {
			jQuery(".rspPhoneStatus").html("(*) Chỉ được nhập số!");
			return false;
		} else {
			jQuery(".rspPhoneStatus").html("(*) Số điện thoại không hợp lệ!");
			return false;
		} */
	return true;
}

function checkTypePhone(phone) {
	var ruleMobilePhone1 = /^[0]{1}[9]{1}[03]{1}[0-9]{7}$/;
	var ruleMobilePhone2 = /^[0]{1}[1]{1}[2]{1}[01268]{1}[0-9]{7}$/;
	var ruleViettelPhone1 = /^[0]{1}[9]{1}[678]{1}[0-9]{7}$/;
	var ruleViettelPhone2 = /^[0]{1}[1]{1}[6]{1}[3456789]{1}[0-9]{7}$/;
	var ruleVinaPhone1 = /^[0]{1}[9]{1}[14]{1}[0-9]{7}$/;
	var ruleVinaPhone2 = /^[0]{1}[1]{1}[2]{1}[34579]{1}[0-9]{7}$/;

	if (phone.match(ruleMobilePhone1) || phone.match(ruleMobilePhone2)
			|| phone.match(ruleViettelPhone1)
			|| phone.match(ruleViettelPhone2)
			|| phone.match(ruleVinaPhone1) || phone.match(ruleVinaPhone2)) {
		return true;
	}

	return false;
}

function checkEmail(email) {
	if (email == null || email == '') return true;
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (!filter.test(email) || email == "" || email == null) {
		jQuery("#email-error").html("(*) Địa chỉ email không hợp lệ");
		return false;
	}
	return true;
}