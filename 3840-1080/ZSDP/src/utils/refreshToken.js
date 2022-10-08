import axios from "axios"
import request from './request';
export function refreshToken() {
    //获取新的刷新token
    const refreshToken = sessionStorage.getItem('refreshtoken');
    //token过期后请求，token请求
    axios({
        url: request.adornUrl(`/authorization/oauth/token?grant_type=refresh_token&refresh_token=${refreshToken}`),
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            'Authorization': 'Basic dGVzdF9jbGllbnQ6dGVzdF9zZWNyZXQ='
        }
    }).then(res => {
        //设置新的token
        console.log(res,"token 刷新");
        sessionStorage.setItem("token", res2.data.access_token);
        //设置新的刷新token
        sessionStorage.setItem('refreshtoken', res.data.refresh_token);
    })
}

/*
    重新刷新token；
*/ 