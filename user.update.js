(function(){
	App = (function(){
		function App(){
			this.getListUser();
			this.formatDate = "DD/MM/YYYY HH:MM";

			this.successOpt = { 
					 style: 'bootstrap', 
					 className: 'success', 
					 position: 'right middle',
					 showAnimation: 'slideDown',
					 showDuration: 400,
					 hideAnimation: 'slideUp',
					 hideDuration: 200 };
			
			this.errorOpt = { 
					 style: 'bootstrap', 
					 className: 'error', 
					 position: 'right middle',
					 showAnimation: 'slideDown',
					 showDuration: 400,
					 hideAnimation: 'slideUp',
					 hideDuration: 200 };
			
			$('.btn-submit').click(this.submit.bind(this));
		}

		App.prototype.get = function(url, callback, errcallback, async){
			jQuery.ajax({
				type : 'GET',
				url : url,
				async : async,
				success : callback,
				error : function(xhr, error){
					errcallback(error);
				}
			});
		}
		App.prototype.post = function(url, body, callback, errcallback, async){
			jQuery.ajax({
				type : 'POST',
				data: JSON.stringify(body),
				contentType: 'application/json',
				url : url,
				async : async,
				success : callback,
				error : function(xhr, error){
					errcallback(error);
				}
			});
		}
		
		App.prototype.getListUser = function() {
			this.get('/user/get-user-info', this.fillData.bind(this), console.log, true);
		}
		
		App.prototype.success = function(data) {
			if (data && data == 'done'){
				$('.btn-submit').notify('Thành công', this.successOpt);
			} else {
				$('.btn-submit').notify('Cập nhật thông tin người dùng thất bại. Xin thử lại sau.', this.errorOpt);
			}
			
		}
		
		App.prototype.error = function() {
			$('.btn-submit').notify('Cập nhật thông tin người dùng thất bại. Xin thử lại sau.', this.errorOpt);
		}
		
		App.prototype.submit = function() {
			var data = this.getData();
			this.post('/user/user-info-edit', data, this.success.bind(this), this.error.bind(this), true);
		}
		
		App.prototype.getData = function() {
			var data = this.data;
			data.fullName = $('input[name="fullName"]').val();
			data.address = $('input[name="address"]').val();
			data.department = $('input[name="department"]').val();
			data.description = $('input[name="description"]').val();
			
			data.creationDate = moment($('input[name="creationDate"]').val(), this.formatDate) - 0;
			data.expirationDate = moment($('input[name="expirationDate"]').val(), this.formatDate) - 0;
			data.modificationDate = moment($('input[name="modificationDate"]').val(), this.formatDate) - 0;
			
			data.position = $('input[name="position"]').val();
			data.pwd = $('input[name="pwd"]').val();
			data.role = $('input[name="role"]').val();
			data.userName = $('input[name="userName"]').val();
			return data;
		}
		
		App.prototype.fillData = function(data) {
			this.data = data;
			$('input[name="fullName"]').val(data.fullName || '');
			$('input[name="address"]').val(data.address || '');
			$('input[name="department"]').val(data.department || '');
			$('input[name="description"]').val(data.description || '');
			
			$('input[name="creationDate"]').val(data.creationDate ? moment(data.creationDate).format(formatDate) : '');
			$('input[name="expirationDate"]').val(data.expirationDate ? moment(data.expirationDate).format(formatDate) : '');
			$('input[name="modificationDate"]').val(data.modificationDate ? moment(data.modificationDate).format(formatDate) : '');
			
			$('input[name="position"]').val(data.position || '');
			$('input[name="pwd"]').val(data.pwd || '');
			$('input[name="role"]').val(data.role || '');
			$('input[name="userName"]').val(data.userName || '');
		}
		return App
	})();

	new App();
}).call(this)