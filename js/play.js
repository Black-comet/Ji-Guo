var kuwan = document.querySelector(".kuwan_1 ul");
var zhuanquans = document.querySelectorAll(".zhuanquan");
var gengduos = document.querySelectorAll(".gengduo");
var kuwan2 = document.querySelector(".kuwan_2 ul");

function ajax() {
    $.ajax({
        url: "http://localhost:3000/play/new",
        type: "GET",
        dataType: 'json',
        success: function(data) {
            for (var m = 1; m <= 2; m++) {
                for (var n = 0; n < 8; n++) {
                    kuwan.innerHTML += '<li>' + '<img src=' + data[m][n].img + '>' +
                        '<p>' + '可以测定食物成分及营养' + '</p>' + '<span>' + 'SCiO 微型光谱仪' + '</span>' +
                        '<div>' + '<span>' + data[m][n].price + '</span>' + '<span>' +
                        '<img src=' + '"../img/xin.png"' + '>' + data[m][n].like + '<img src=' + '"../img/reply.png"' +
                        '>' + data[m][n].like + '</span>' + '</div>' + '</li>'
                }
            }
        }
    })
}
ajax();
gengduos[0].onclick = function() {
    gengduos[0].style.display = "none";
    zhuanquans[0].style.display = "block";
    setTimeout(function() {
        ajax();
        gengduos[0].style.display = "block";
        zhuanquans[0].style.display = "none";
    }, 2000)
}
$(".fenlei li").click(function() {
    var index = $(this).index();
    $(this).addClass("active1").siblings().removeClass("active1");
    $(".kuwan").eq(index).css("display", "block").siblings(".kuwan").css("display", "none");
})

function ajax1() {
    $.ajax({
        url: "http://localhost:3000/play/new",
        type: "GET",
        dataType: 'json',
        success: function(data) {
            for (var m = 1; m <= 3; m++) {
                for (var n = 0; n < 4; n++) {
                    kuwan2.innerHTML += '<li>' + '<img src=' + data[m][n].img + '>' +
                        '<p>' + '可以测定食物成分及营养' + '</p>' + '<span>' + 'SCiO 微型光谱仪' + '</span>' +
                        '<div>' + '<span>' + data[m][n].price + '</span>' + '<span>' +
                        '<img src=' + '"../img/xin.png"' + '>' + data[m][n].like + '<img src=' + '"../img/reply.png"' +
                        '>' + data[m][n].like + '</span>' + '</div>' + '</li>'
                }
            }
        }
    })
}
ajax1();
gengduos[1].onclick = function() {
    gengduos[1].style.display = "none";
    zhuanquans[1].style.display = "block";
    setTimeout(function() {
        ajax1();
        gengduos[1].style.display = "block";
        zhuanquans[1].style.display = "none";
    }, 2000)
}