
 // 过滤特殊字符
 
export function stripscript(str) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;—|{ }【】‘；：”“'。，、？]")
    var rs = "";
    for (var i = 0; i < str.length; i++) {
        rs = rs + str.substr(i, 1).replace(pattern, '');
    }
    return rs;
}
//验证用户名
export function validateUsers(value) {
    let reg = /^[a-zA-Z]{1}[A-Z|a-z|0-9]{4,16}/
    return !reg.test(value) ? true : false;
}

 // 验证密码 6至20位的字母+数字 

export function validatePass(value){
    let reg = /^[A-Z|a-z|0-9]\w{5,17}$/;
    return !reg.test(value) ? true : false;
}

// 验证验证码

export function validateVCode(value){
    let reg = /^[a-zA-Z0-9]{4}$/;
    return !reg.test(value) ? true : false;
}