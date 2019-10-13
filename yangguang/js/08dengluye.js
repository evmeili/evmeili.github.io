(function () {
    // console.log(555);
    let loginName = document.getElementById('loginName'); //手机号
    let memberPwd = document.getElementById('memberPwd'); //密码
    let spn2 = document.getElementById('spn2'); //密码信息
    let autoLogin = document.getElementById('autoLogin'); //7天免登录
    let btnlu = document.getElementById('pwd-login'); //登录按钮
    let zhu1 = document.getElementById('zhu1'); //注册按钮

    //点击跳转注册页面
    zhu1.onclick = () => {
        location.href = '12zhuce.html?';
    }


    btnlu.onclick = () => {
        let name = loginName.value.trim();
        let password = memberPwd.value.trim();
        let usn = getcookie('username');
        if (usn) {
            //登陆
            let res = confirm('您已经登陆了');
            if (res) {
                cein()
            }
        } else {
            //未登录
            ajax({
                type: 'post',
                url: '../api/03login.php',
                data: {
                    name,
                    password,
                    type: 'login'
                },
                success: str => {
                    //存cookie
                    if (str == 'yes') {
                        alert('登陆成功');
                        setdata();
                        cein();
                    } else {
                        spn2.innerHTML = '用户名或密码错误';
                        spn2.style.color = 'red';
                    }
                }
            });
        }

    }

    function setdata() {
        setcookie('username', loginName.value.trim(), );
    }

    function cein() {
        let url = getcookie('url');
        if (url) {
            //查找，证明是有上一页，登陆成功一律回到上一页
            location.href = url;
        } else {
            //注册页、首页、登陆页跳到登陆页的，登陆成功一律回到首页
            location.href = '01main.html';
        }
    }



})();