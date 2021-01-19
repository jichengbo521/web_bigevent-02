$(function() {
    // 1.定义校验规则
    var form = layui.form
    form.verify({
            // 密码
            pwd: [/^[\S]{6,12}$/, '密码必须是6~12为,且不能出现空格'],

            // 2.新旧密码不重复
            samePwd: function(value) {
                // value是新密码 旧密码是需要获取的
                if (value == $('[name=oldPwd]').val()) {
                    return '旧密码和新密码不能相同！'
                }
            },
            // 3.两次新密码必须相同
            rePwd: function(value) {
                // value 是两次输入的新密码 新密码需要重新获取
                if (value !== $('[name=newPwd]').val()) {
                    return "两次新密码输入的不一致"
                }
            }
        })
        // 表单提交
    $('.layui-form').on('submit', function(e) {
        e.preventDefault()
        $.ajax({
            method: 'POST',
            url: '/my/updatepwd',
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                    return layui.layer.msg(res.message)
                }
                layui.layer.msg('修改密码成功！')
                $('.layui-form')[0].reset()
            }
        })
    })
})