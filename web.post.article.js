jQuery(document).ready(function() {
	$("#editor").editor({
        uiLibrary: 'bootstrap',
        height: 500
    });
});

function saveContent() {
	var gRecaptchar = jQuery('#g-recaptcha-response').val();
	var content = $( "#editor" ).find("[data-role='body']").html();
	
	jQuery.ajax({
		type : 'POST',
		url : '/dang-tin/gui-noi-dung',
		data : {
          captcha: jQuery('#g-recaptcha-response').val(),
          text: content
        },
		success : function(data, textStatus, jqXHR) {
			jQuery("#message").text(data);
		},
		error : function(jqXHR, textStatus, errorThrown) {
			jQuery("#message").text(textStatus);
		}
	});
}