function func() {
	/**
	 * 公共打印函数
	 * @param {Object} obj 要显示的容器对象
	 * @param {Object} msg　要显示的消息
	 */
	this.write = function(obj, msg) {
		if(obj.length > 0) {
			obj.html(msg);
		} else {
			if(msg.length > 0) {
				alert(msg);
			}
		}
	};

	/**
	 * 删除Array里面不需要的字段
	 * @param {Object} data 要删除的原始数据
	 * @param {Object} arr　要删除的项,数组方式
	 */
	this.remove = function(data, removedata) {
		var tmp = {};
		var length = data.length;
		for(i = 0; i < length; i++) {
			if(removedata.indexOf(data[i]["name"]) < 0) {
				tmp[data[i]["name"]] = data[i]["value"];
			}

		}
		return tmp;
	};

	//复选框赋值
	this.checkbox = function(checkboxname, checkboxvalcontrol) {
		$(checkboxname).change(function() {
			var checkboxvalue = new Array();
			$(checkboxname + ":checked").each(function(index, element) {
				checkboxvalue[index] = $(this).val();
			});
			var val = checkboxvalue.join(",");
			$("#" + checkboxvalcontrol).val(val);
		});
	}

}