$(document).ready(function () {
	$('ul.sub_nav').hide();
	
    $('ul.main_nav li').hover(function () {
	
			$(this).find('> ul').stop(true, true).slideDown('slow');
			
 		}, function() {
	
 			$(this).find('> ul').stop(true, true).slideUp('slow'); 	
	
		});
	
	/* Bổ sung thêm đoạn code tìm kiếm, Đăng ký, dùng cú pháp jQuery*/	
	 $('#btnTim').click(function(){
	        var gTri = $('#txtTim').val();
	        if (gTri.trim().toLowerCase()=="thien thanh")
	            alert('Tìm thấy');      
	        else
	            alert('Không tìm thấy');
	      }     
	   ); //hết click
	   $('#txtTim').keypress(function(e){
	        if (e.keyCode==13)
	        {
	            var gTri = $('#txtTim').val();
	            if (gTri.trim().toLowerCase()=="thien thanh")
	                alert('Tìm thấy');      
	            else
	                alert('Không tìm thấy');
	        }
	      }
	    );//hết keypress
	    
	    $('#Signup').click(function(){
	          window.location.href="DangKy.html";
	      }     
	   ); //hết signup

 		$('#btnDangky').click(function(){
			var kq ="";
		    //var phai = $('#gtinh:checked').val(); //hoặc
		    var phai = $('#gtinh').prop('checked');
		    kq = "<b>Xác nhận lại thông tin</b><br />";
		    kq += "<b>Tên đăng nhập:</b> " + $('#dnhap').val() + "<br />"; 
		    kq += "<b>Mật khẩu:</b> " + $('#mkhau').val() + "<br />";
		    kq += "<b>Họ tên:</b> " + $('#hoten').val() + "<br />";
		    kq += "<b>Phái:</b> " + ((phai)?"Nam":"Nữ") + "<br />";
		    kq += "<b>Ngày sinh:</b> " + $('#datepicker').val() + "<br />";
		    kq += "<b>Nghề nghiệp:</b> " + $('#nnghiep option:selected').text() + "<br />";
		    kq += "<b>Email:</b> " + $('#email').val() + "<br />";
		    kq += "<b>Điện thoại:</b> " + $('#dthoai').val() + "<br />";
		    kq += "<b>Ghi chú:</b> " + $('#gchu').val() + "<br />";
		    
		    //đổi màu của element
		    $('#ketqua').css('color','black');
		    $('#ketqua').html(kq);
          }     
	   ); //hết click	      
});


