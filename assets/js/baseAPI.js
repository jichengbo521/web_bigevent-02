// 1.开发者环境服务器地址
var baseURL = 'http://api-breakingnews-web.itheima.net';
// 2.测试环境服务器地址
// 3.生产环境服务器的值
// 拦截所有ajax请求:get/post/ajax
// 处理参数
$.ajaxPrefilter(function(options) {
    // 拼接对应的环境地址
    options.url = baseURL + options.url
})