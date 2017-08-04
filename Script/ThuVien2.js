// JavaScript Document

$(function()
{
	//click nut login
	$("#login").click(function()
	{
		var ten = $("#txtTen").val(); 
    	var mkhau = $("#txtPass").val(); 
		if(ten.toLowerCase()== "thienthanh")
			if(mkhau=="abc")
			alert("Đăng nhập thành công");
				else
				alert("Sai mật khẩu");
		else
			alert("Không có user này");
	});
	//mo trang dang ky
	$("#Signup").click(function()
			{
				window.open("DangKy.html","_blank");
			});
			
	//onFocus
	$("#txtTim").focus(function()
	{
		var gt = $(this).val();
		if(gt == "Tên sản phẩm")
		{
			this.value = " ";
		}
	});
	//onBlur
	$("#txtTim").blur(function()
	{
		
		var gt = $(this).val();
		if(gt == " ")
		{
			this.value = "Tên sản phẩm";
		}
	});
	//click nut enter tim
	$("#txtTim").keypress(function()
	{
		var chuoi ="thiên thanh,shop,thời trang,giầy dép,quần áo,mắt kính";
		var gt = $(this).val(); 
    	var chuoitim  = gt.trim().toLowerCase(); 
		var e = window.event;
        if (e.keyCode==13) 
		{
			if (chuoi.indexOf(chuoitim)>=0) 
				alert("Tìm thấy");     
			else 
				alert("Không tìm thấy");
		}
	});
	//nut tim
    $("#btnTim").click(function()
	{
		var chuoi ="thiên thanh,shop,thời trang,giầy dép,quần áo,mắt kính";
		var gt = $("#txtTim").val(); 
    	var chuoitim  = gt.trim().toLowerCase(); 
   
        if (chuoi.indexOf(chuoitim)>=0) 
      	alert("Tìm thấy");     
   		else 
      	alert("Không tìm thấy");
	});
	
	//xu ly nut chap nhan de dang ky thong tin bang jquery
	$("#dongy").click(function()
			{
				var kq =""; 
				var phai = $("#gtinh:checked").val(); 
				kq = "<b>Xác nhận lại thông tin</b><br />"; 
				kq += "<b>Tên đăng nhập:</b> " + $("#dnhap").val() + "<br />";  
				kq += "<b>Mật khẩu:</b> " + $("#mkhau").val() + "<br />"; 
				kq += "<b>Họ tên:</b> " + $("#hoten").val() + "<br />"; 
				kq += "<b>Phái:</b> " + ((phai)?"Nam":"Nữ") + "<br />"; 
				kq += "<b>Ngày sinh:</b> " + $("#datepicker").val() + "<br />";
				kq += "<b>Nghề nghiệp:</b> " + $("#nnghiep option:selected").text()+"<br />"; 
				kq += "<b>Email:</b> " + $("#email").val() + "<br />"; 
				kq += "<b>Điện thoại:</b> " + $("#dthoai").val() + "<br />"; 
				kq += "<b>Ghi chú:</b> " + $("#gchu").val() + "<br />"; 
				//đổi màu của element và xuất ra element ketqua 
				$("#ketqua").css("color","black").html(kq); 
			});
});
//HÃ m xá»­ lÃ½ sá»‘
function Round(so,thap_phan)
{
	Num = so;
	Num *= Math.pow(10,thap_phan);
	Num = Math.round(Math.abs(Num));	//lÃ m trÃ²n sá»‘ vá»›i sá»‘ nguyÃªn gáº§n nháº¥t
	Num /= Math.pow(10,thap_phan);
	if (so <0)
		Num *=-1;
	return Num;
}	
function dinh_dang_so(nso, nthap_phan, bngoac_don,bdau_phay,sdon_vi)
/**********************************************************************
	Tham sá»‘:
		nso : Sá»‘ Ä‘Æ°á»£c Ä‘á»‹nh dáº¡ng 
		nthap_phan : Sá»‘ tháº­p phÃ¢n, Ä‘á»©ng sau dáº¥u tháº­p phÃ¢n
		bngoac_don - true / false : dÃ¹ng dáº¥u ngoáº·c Ä‘Æ¡n cho cÃ¡c sá»‘ Ã¢m?
		bdau_phay : dÃ¹ng dáº¥u pháº©y Ä‘á»ƒ phÃ¢n cÃ¡ch hÃ ng ngÃ n?
 		sdon_vi : ÄÆ¡n vá»‹ tiá»n tá»‡
	GiÃ¡ trá»‹ tráº£ vá»:
		LÃ  1 con sá»‘ Ä‘Ã£ Ä‘Æ°á»£c Ä‘á»‹nh dáº¡ng
 **********************************************************************/
{ 	
    if (isNaN(parseInt(nso))) return "NaN";

	var so_tam = nso;
	// LÃ m trÃ²n sá»‘
	so_tam = Round(so_tam, nthap_phan);	
	// Táº¡o 1 Ä‘á»‘i tÆ°á»£ng chuá»—i Ä‘á»ƒ Ä‘á»‹nh dáº¡ng
	var chuoi_so = new String(so_tam);
	// Äáº·t vá»‹ trÃ­ dáº¥u pháº©y
	if (bdau_phay && (nso >= 1000 || nso <= -1000))
	{
		var vt_cham = chuoi_so.indexOf(".");
		if (vt_cham < 0)
			vt_cham = chuoi_so.length;

		vt_cham -= 3;
		while (vt_cham >= 1)
		{
			chuoi_so = chuoi_so.substring(0,vt_cham) + "," + chuoi_so.substring(vt_cham,chuoi_so.length);
			vt_cham -= 3;
		}		
	}
	// Äáº·t dáº¥u ngoáº·c () cho cÃ¡c sá»‘ Ã¢m
	if (bngoac_don && nso < 0)
		chuoi_so = "(" + chuoi_so.substring(1,chuoi_so.length) + ")";
	// ThÃªm Ä‘Æ¡n vá»‹ tiá»n tá»‡
	if (sdon_vi != "")
		chuoi_so = chuoi_so + " " + sdon_vi;
	return chuoi_so;		// tráº£ vá» chuá»—i sá»‘ Ä‘Æ°á»£c Ä‘á»‹nh dáº¡ng
}	


