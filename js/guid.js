var kuwan = document.querySelector(".kuwan_1 ul");
var zhuanquan = document.querySelector(".zhuanquan");
var gengduo = document.querySelector(".gengduo");

function ajax() {
    $.ajax({
        url: "http://localhost:3000/play/new",
        type: "GET",
        dataType: 'json',
        success: function(data) {
            console.log(data);
            for (var a = 1; a < 5; a++) {
                for (var b = 0; b < 4; b++) {
                    kuwan.innerHTML += ' <li>' + '<img src=' + data[1][b].img + '>' +
                        '<p>' + '2016，这8支钢笔够你装逼一整年' + '</p>' + '<div>' + '<span>' + '</span>' +
                        '<span>' + '<img src=' + '"../img/xin.png"' + '>' + 3 +
                        '<img src=' + '"../img/reply.png"' + '>' + 3 + '</span>' + '</div>' +
                        '<img src=' + '"../img/listbg.jpg"' + '>' + '</li>'
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