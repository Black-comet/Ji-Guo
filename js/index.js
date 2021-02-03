var kuwan = document.querySelector(".kuwan ul");
var zhuanquan = document.querySelector(".zhuanquan");
var gengduo = document.querySelector(".gengduo");

function ajax() {
    $.ajax({
        url: "http://localhost:3000/play/new",
        type: "GET",
        dataType: 'json',
        success: function(data) {
            console.log(data);
            for (var m = 1; m < 2; m++) {
                for (var n = 0; n < 8; n++) {
                    kuwan.innerHTML += '<li>' + '<img src=' + data[m][n].img + '>' +
                        '<p>' + '可以测定食物成分及营养' + '</p>' + '<span>' + 'SCiO 微型光谱仪' + '</span>' +
                        '<div>' + '<span>' + data[m][n].price + '</span>' + '<span>' +
                        '<img src=' + '"./img/xin.png"' + '>' + data[m][n].like + '<img src=' + '"./img/reply.png"' +
                        '>' + data[m][n].like + '</span>' + '</div>' + '</li>'
                }
            }
        }
    })
}
ajax();
gengduo.onclick = function() {
    gengduo.style.display = "none";
    zhuanquan.style.display = "block";
    setTimeout(function() {
        ajax();
        gengduo.style.display = "block";
        zhuanquan.style.display = "none";
    }, 2000)
}

function timer() {
    var date = new Date();
    var date1 = new Date("2022-01-01 00:00:00")
    var time = (date1 - date) / 1000;
    var days = parseInt(time / 86400);
    var hours = parseInt(time / 3600 % 24);
    var minutes = parseInt(time / 60 % 60);
    var seconds = parseInt(time % 60);
    document.querySelector(".time").innerHTML = "申请剩余时间 :" + days + "天" + "&nbsp" + hours + "小时" + "&nbsp" + minutes + "分" + "&nbsp" + seconds + "秒";
}
timer();
setInterval(timer, 1000);