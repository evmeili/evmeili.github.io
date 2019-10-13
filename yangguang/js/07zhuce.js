(function () {
    let mail = document.getElementById('mobile'); //用户名
    let mima = document.getElementById('mima'); //密码
    let fukuan = document.getElementById('mobileAgreeClause'); //复选框
    let btn = document.getElementById('inzhu'); //注册按钮
    let inf1 = document.getElementById('sp1'); //手机信息提示
    let inf2 = document.getElementById('sp2'); //密码信息提示
    let isok = false;
    let istrue2 = false;
    let aet = [];


    //验证密码
    mima.onblur = function (ev) {
        ev.stopPropagation()  //阻止冒泡
        let val = this.value.trim();
        let reg = /^\S{6,12}$/;
        if (val) {
            //非空验证->正则->正确性;
            let mimi = reg.test(val);
            if (mimi) {
                //正则验证通过
                inf2.innerHTML = '密码验证通过';
                inf2.style.color = '#58bc58';
                aet.push(1);
            } else {
                inf2.innerHTML = '密码验证不通过';
                inf2.style.color = 'red';
                istrue2 = false;
            }
        } else {
            inf2.innerHTML = '请输入密码';
            inf2.style.color = 'red';
        }
    }

    //判断复选框
    if (fukuan.checked) {
        aet.push(1);
    }

    //1.验证手机是否存在：查找数据库select
    mail.onblur = (ev) => {
        ev.stopPropagation()  //阻止冒泡
        //非空-正则-ajax验证
        let val = mail.value.trim();
        let reg = /^1[3-9]\d{9}$/;
        if (val) {
            let kai = reg.test(val)
            if (kai) {
                ajax({
                    type: 'post',
                    url: '../api/jiekou.php',
                    data: {
                        name: mail.value.trim(),
                        type: 'checkname'
                    },
                    success: str => {
                        console.log(str);
                        if (str == 'yes') {
                            inf1.innerHTML = '可以注册';
                            inf1.style.color = '#58bc58';
                            aet.push(1);
                        } else {
                            inf1.innerHTML = '手机号已存在';
                            inf1.style.color = 'red';

                        }
                    }
                });
            }

        } else {
            inf1.innerHTML = '输入手机号';
            inf1.style.color = 'red';
        }

    }
    //验证通过，准备注册
    btn.onclick = (ev) => {
        ev.stopPropagation()  //阻止冒泡
        if (aet.length == 3) {
            ajax({
                type: 'post',
                url: '../api/02reg.php',
                data: {
                    name: mail.value.trim(),
                    password: mima.value.trim(),
                    type: 'reg'
                },
                success: str => {
                    if (str == 'yes') {
                        // let usn = setcookie('username');
                        alert('注册成功');
                        location.href = '11denglu.html?name=' + mail.value.trim();
                    } else {
                        alert('注册失败');
                    }
                }
            });
        } else {
            alert('信息');
        }
    }

    //点击跳转登录页面
    let denglu = document.getElementById('register');
    denglu.onclick = () => {
        location.href = '11denglu.html?';
    }
})();