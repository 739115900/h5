function _$(id){
	return document.getElementById(id);
}
function get_time(){
	return new Date().getTime().toString();
}
/**
 * 登录场景表单提交方法
 */
function formSubmit(){
	//判断密码长度
	// if(passGuard1.getLength()==0){
	// 	alert("原密码不能为空！");
	// 	return false;
	// }
	// if(passGuard2.getLength()==0){
	// 	alert("新密码不能为空！");
	// 	return false;
	// }
	// if(passGuard3.getLength()==0){
	// 	alert("确认密码不能为空！");
	// 	return false;
	// }
	// //判断密码是否匹配正则
	// if(passGuard2.getValid()==1){
	// 	alert("新密码不符合要求！");
	// 	return false;
	// }
	// if(passGuard3.getValid()==1){
	// 	alert("确认密码不符合要求！");
	// 	return false;
	// }
	// //比对新密码和确认密码
	// if(passGuard2.getHash() != passGuard3.getHash()){
	// 	alert("新密码和确认密码不一致！");
	// 	return false;
	// }
	//设置32位随机因子,此处为了demo方便演示，写死了，正常应用后台随机下发。
	passGuard1.setRandKey(randomData.random_value);
	passGuard2.setRandKey(randomData.random_value);
	passGuard3.setRandKey(randomData.random_value);
	//获取密文 调用getOutput()后 如果要再次获取密文，需要重新指定下 passGuard.ib这个属性 passGuard.ib = randomData.mapArr;
	var miwen1 = passGuard1.getOutput();
	var miwen2 = passGuard2.getOutput();
	passGuard.ib = randomData.mapArr;
	_$("kb1").value = "";
	_$("kb2").value = "";
	_$("kb3").value = "";
	for(var i=1;i<=3;i++){//PH.arrPlace-->H5输入框的placeholder数组；PH.arrId-->H5输入框的id数组
		$("#"+PH.arrId[i-1]).attr('placeholder',PH.arrPlace[i-1]);
	}
	$("#password").val(miwen1);
	$("#repassword").val(miwen2);
	$("#random_key").val(randomData.random_key);
	$("#random_value").val(randomData.random_value);
	print();
}

function getRandom(){
	var res;
	// var param = {flag_chnl:"H5"};
	$.ajax({
        url : "https://demo.52mutou.com/api/wallet/getRandomKey",
        async: false,
        type : "GET",
		// dataType : "json",
		// headers: {
		// 	'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZGVtby41Mm11dG91LmNvbVwvYXBpXC9hdXRoXC9jaGVjayIsImlhdCI6MTU3MjI0NDAzNiwiZXhwIjoxNTcyNTAzMjM2LCJuYmYiOjE1NzIyNDQwMzYsImp0aSI6InJveEVpcjVRMDNMb3Y2cm8iLCJzdWIiOjIxNDcsInBydiI6Ijg2NjVhZTk3NzVjZjI2ZjZiOGU0OTZmODZmYTUzNmQ2OGRkNzE4MTgifQ.KYToEQW0DXNsIMI2YJmbmvCY7BTbkWc7vBDz-CRKzIs'
		// },
		beforeSend: function (XMLHttpRequest) {
			XMLHttpRequest.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZGVtby41Mm11dG91LmNvbVwvYXBpXC9hdXRoXC9jaGVjayIsImlhdCI6MTU3MjI0NDAzNiwiZXhwIjoxNTcyNTAzMjM2LCJuYmYiOjE1NzIyNDQwMzYsImp0aSI6InJveEVpcjVRMDNMb3Y2cm8iLCJzdWIiOjIxNDcsInBydiI6Ijg2NjVhZTk3NzVjZjI2ZjZiOGU0OTZmODZmYTUzNmQ2OGRkNzE4MTgifQ.KYToEQW0DXNsIMI2YJmbmvCY7BTbkWc7vBDz-CRKzIs");
		 },
        // data:param,
        success:function(data){
			
        	if(data.code){
        		if(data.code == '000'){
        			$("#random_key").val(data.random_key);
        			$("#random_value").val(data.random_value);
        			res = data;
    				return data;
        		}else{
        			alert("获取随机因子失败");
        			return false;
        		}
        	}else{
        		alert("获取随机因子失败");
        		return false;
        	}
        }
	});
	console.log
	return res;
}

function print(){
	var d = {};
    var t = $('#form').serializeArray();
    $.each(t, function() {
      d[this.name] = this.value;
    });
    console.log("提交信息:" + JSON.stringify(d));
    alert(JSON.stringify(d));
}
