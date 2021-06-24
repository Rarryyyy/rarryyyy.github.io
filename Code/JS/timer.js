var count = document.getElementById('count');
var spans = count.getElementsByTagName('span');
var endTime = new Date('2021/07/15 00:00:00');
var timer = null;
timer = setInterval(countTime,1000);

function countTime() {
    var nowTime = new Date();
    var lastTime = parseInt((endTime - nowTime) / 1000) ;
    if (lastTime >= 0) {
        var d = parseInt(lastTime/60/60/24);
        var h = parseInt(lastTime/60/60%24);
        var m = parseInt(lastTime/60%60);
        var s = parseInt(lastTime%60);
        if (d<10) {
            d = "0" + d;
        }
        if (h<10) {
            h = "0" + h;
        }
        if (m<10) {
            m = "0" + m;
        }
        if (s<10) {
            s = "0" + s;
        }
        spans[0].innerHTML =  d;
        spans[1].innerHTML =  h;
        spans[2].innerHTML =  m;
        spans[3].innerHTML =  s;
    } else {
        clearInterval(timer);
    }
}
countTime();