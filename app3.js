let popped = 0;
let lives = 3;
const life = document.getElementById("lives")
life.innerText = lives - 1;
document.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('balloon')) {
        e.target.classList.remove("balloon")
        lives--
        e.target.style.backgroundColor = "#ededed";
        e.target.textContent = "POP!";
        gameOver();
        life.innerText = lives - 1;
        // popped++;
        // console.log(popped);
        // // removeEvent(e);
        // checkAllPopped();
    }
    else if (e.target.classList.contains('yellow')) {
        e.target.style.backgroundColor = "#ededed";
        e.target.textContent = "POP!";
        popped++;
        e.target.classList.remove("yellow")
        console.log(popped);
        // removeEvent(e);
        checkAllPopped();
    }
});
      
function removeEvent(e) {
    e.target.removeEventListener('mouseover', function () {

    })
};

function checkAllPopped() {
    if (popped === 7) {
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let opt = document.querySelector('#text-yellow');
        let message = document.querySelector('#yay-no-balloons');
        const lifeHeading = document.getElementById("lifeHeading");
        gallery.innerHTML = '';
        message.style.display = 'block';

        opt.style.display = 'none';
    }


};
const gameOver = () => {
    if (lives == 0) {
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#game-over');
        let opt = document.querySelector('#text-yellow');
        gallery.innerHTML = '';
        message.style.display = 'block';
        opt.style.display = 'none';
        lifeHeading.style.display = 'none';

    }

}
var colors = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0'];
var posts = document.getElementsByClassName('ani');
for (var i = 0; i < posts.length; i++) {
posts[i].style.background = '#' + colors[Math.floor(Math.random() * 7)];}