

/**
 * 公共检测类
 * @param {Object} container　顶级容器,这里为表单的ID
 */
function formcheck(container) {

    //验证输入框长度
    //type = text  验证　纯字母　纯数字　字母数字
    //type = ntext 验证	纯中文
    //type = regex 验证　正则表达式

    //====================正则表达式规则==================

    //验证,纯中文且不限制字数,                ^[\u4e00-\u9fa5]+$
    //验证,纯中文且限制字数2-4,               ^[\u4e00-\u9fa5]{2,4})$
    //验证,手机号码,                          ^1[23456789]\d{9}$
    //验证,座机号码,                          \\d{3}-\\d{8}|\\d{4}-\\d{7}
    //验证,身份证                             ^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$
    //验证,邮箱							  	  ^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$
    //验证,ipv4								  ^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$
    //验证,车牌								  ^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$
    //验证,日期格式YYYY-MM-DD				  ^(\\d{1,4})(-|\/)(\\d{1,2})\\2(\\d{1,2})$
    //验证,日期时间格式YYYY-MM-DD hh:mm:ss    ^(\\d{1,4})(-|\/)(\\d{1,2})\\2(\\d{1,2}) (\\d{1,2}):(\\d{1,2}):(\\d{1,2})$
    //验证,时间格式hh:mm:ss   	        	  ^((20|21|22|23|[0-1]\\d)\\:[0-5][0-9])(\\:[0-5][0-9])?$
    //验证,密码（英文开头、6-21位）,          ^[a-zA-Z][a-zA-Z0-9_]{6,21}$
    //验证,密码（由6-21字母和数字组成）,      ^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$
    //验证n位的数字：						  ^\\d{n}$
    //验证至少n位数字：						  ^\\d{n,}$
    //验证m-n位的数字：						  ^\\d{m,n}$
    //验证是否含有 ^%&',;=?$\" 等字符：		  [^%&',;=?$\x22]+





    this.check = function(obj) {
        //获得对像
        var control = $("#" + container).find("#" + obj);
        //获得JSON的数据参数
        var param = control.attr("data-param");
        var myjson = JSON.parse(param);
        var run = myjson.run;
        var type = myjson.type;
        var data = myjson.data;
        var rule = data.rule;
        var msgobj = $("#" + obj + "_msg");
        var length;

        if(run == 0) return data.success.back;

        switch(type) {
            case "text":
                length = control.val().length;
                if(length >= rule.minlength && 　length <= rule.maxlength) {
                    return data.success.back;
                } else {
                    control.focus();
                    func.write(msgobj,data.err.msg);
                    return data.err.back;
                }
                break;
            case "regex":
                var regex = rule.val;
                length = control.val().length;
                regex = new RegExp(regex);
                if(regex.test(control.val())) {
                    //layer.msg(data.success.msg);
                    return data.success.back;
                }else{
                    control.focus();
                    func.write(msgobj,data.err.msg);
                    return data.err.back;
                }
                break;
            case "checkbox":
                if(control.val().length > 0 ){
                    //layer.msg(data.success.msg);
                    return data.success.back;
                }else{
                    $("[name='"+ rule+"']").select();
                    func.write(msgobj,data.err.msg);
                    return data.err.back;
                }

//				if($("[name='"+ rule+"']").is(':checked')) {
//  				layer.msg(data.success.msg);
//					return data.success.back;
//				}else{
//					$("[name='"+ rule+"']").select();
//					layer.msg(data.err.msg);
//					return data.err.back;
//				}
                break;
            case "selectbox":
                if(control.val() != "") {
                    //layer.msg(data.success.msg);
                    return data.success.back;
                }else{
                    control.focus();
                    func.write(msgobj,data.err.msg);
                    return data.err.back;
                }
                break;
        }

    }

}
function formcheck2(container) {

    this.check = function(obj) {
        //获得对像
        var control = $("#" + container).find("#" + obj);
        //获得JSON的数据参数
        var param = control.attr("data-param");
        var myjson = JSON.parse(param);
        var run = myjson.run;
        var type = myjson.type;
        var data = myjson.data;
        var rule = data.rule;
        var msgobj = $("#" + obj + "_msg");
        var length;

        if(run == 0) return data.success.back;

        switch(type) {
            case "text":
                length = control.val().length;
                if(length >= rule.minlength && 　length <= rule.maxlength) {
                    return data.success.back;
                } else {
                    control.focus();
                    layer.msg(data.err.msg);
                    return data.err.back;
                }
                break;
            case "regex":
                var regex = rule.val;
                length = control.val().length;
                regex = new RegExp(regex);
                if(regex.test(control.val())) {
                    return data.success.back;
                }else{
                    control.focus();
                    layer.msg(data.err.msg);
                    return data.err.back;
                }
                break;
            case "checkbox":
                if(control.val().length > 0 ){
                    return data.success.back;
                }else{
                    $("[name='"+ rule+"']").select();
                    layer.msg(data.err.msg);
                    return data.err.back;
                }

//				if($("[name='"+ rule+"']").is(':checked')) {
//  				layer.msg(data.success.msg);
//					return data.success.back;
//				}else{
//					$("[name='"+ rule+"']").select();
//					layer.msg(data.err.msg);
//					return data.err.back;
//				}
                break;
            case "selectbox":
                if(control.val() != "") {
                    return data.success.back;
                }else{
                    control.focus();
                    layer.msg(data.err.msg);
                    return data.err.back;
                }
                break;
        }

    }

}