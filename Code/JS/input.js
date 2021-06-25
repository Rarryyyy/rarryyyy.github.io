let img = document.querySelectorAll(".img");
let input = document.querySelectorAll(".input")

function remove() {
    for (let i=0;i<img.length;) {
        img[i++].classList.remove('transform');
    }
    for (let i=0;i<input.length;) {
        input[i++].classList.remove('transform');
    }
}
function add() {
    for (let i=0;i<img.length;) {
        img[i++].classList.add('transform');
    }
    for (let i=0;i<input.length;) {
        input[i++].classList.add('transform');
    }
}

for (let i=0;i<input.length;i++) {
    input[i].addEventListener('focus',function(){
        if (input[i].classList.contains('transform')) {
            remove();
        } else {
            add();
        }
    })
    input[i].addEventListener('blur',function(){
        remove();

    })
}
