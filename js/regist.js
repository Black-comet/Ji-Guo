window.addEventListener('load', function() {
    var button = document.querySelector("li>button")
    $("li button").click(function() {
        this.disabled = true;
        var num = 60;
        var timer = setInterval(function() {
            num--;
            $("li button").text(num + "秒后重新获取")
            if (num == 0) {
                clearInterval(timer);
                $("li button").text("获取验证码")
                button.disabled = false;
            }
        }, 1000)
    })

})