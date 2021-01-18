// 1.开发者环境服务器地址
var baseURL = 'http://api-breakingnews-web.itheima.net';
// 2.测试环境服务器地址
// 3.生产环境服务器的值
// 拦截所有ajax请求:get/post/ajax
// 处理参数
$.ajaxPrefilter(function(options) {
    // 拼接对应的环境地址
    options.url = baseURL + options.url
        // 统一为有权限的接口，设置 headers 请求头
    if (options.url.indexOf('/my/') !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }
    //    3.拦截所有响应判断身份认证信息
    options.complete = function(res) {
        console.log(res.responseJSON);
        var obj = res.responseJSON;
        if (obj.status == 1 && obj.message == '身份认证失败! ') {
            //  1.清空本地token
            localStorage.removeItem("token");
            // 也秒跳转
            location.href = "/login.html";
        }
    }
})