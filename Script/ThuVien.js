/**
 * @author THANHTAM
 */

	function xlDangNhap(ten, mkhau)
		{
			if (ten.toLowerCase()=="thienthanh")
					if (mkhau=="abc")
						alert('Đăng nhập thành công');
					else
						alert('Sai mật khẩu');
			else
							alert('Không có user này');
							
		}
	function xlTim2(gTri, e)
		{
				var chuoi ="thiên thanh,shop,thời trang,giầy dép,quần áo,mắt kính";
				var chuoitim  = gTri.trim().toLowerCase();
			if (e.keyCode==13)   //13 là phím enter	
				{
					if (chuoi.indexOf(chuoitim)>=0)
							alert('Tìm thấy');
					else
							alert('Không tìm thấy');
				}
		}
	function Openwindow()
		{
			window.open("DangKy.html","_blank");
		}

		function xlDangky()
			{
				var kq ="";

				var username = document.getElementById("dnhap");
				var pass = document.getElementById("mkhau");
				var ten = document.getElementById("hoten");
				var phai = document.getElementById("gtinh");
				var ngaysinh = document.getElementById("nsinh");
				var nghe = document.getElementById("nnghiep");
				var mail1 = document.getElementById("email");
				var tele = document.getElementById("dthoai");
				var note = document.getElementById("gchu");

				kq = "<b>Xác nhận lại thông tin</b><br />";
				kq += "<b>Tên đăng nhập:</b> " + username.value + "<br />";
				kq += "<b>Mật khẩu:</b> " + pass.value + "<br />";
				kq += "<b>Họ tên:</b> " + ten.value + "<br />";
				kq += "<b>Phái:</b> " + ((phai.checked)?"Nam":"Nữ" )+ "<br />";

				kq += "<b>Ngày sinh:</b> " + ngaysinh.value + "<br />";
				kq += "<b>Nghề nghiệp:</b> " + nghe.options[nghe.selectedIndex].innerText + "<br />";
				kq += "<b>Email:</b> " + mail1.value + "<br />";
				kq += "<b>Điện thoại:</b> " + tele.value + "<br />";
				kq += "<b>Ghi chú:</b> " + note.value + "<br />";

				
				return kq;
			}









