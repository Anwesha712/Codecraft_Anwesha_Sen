function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");

    const left = Math.random() * window.innerWidth;
    const top = Math.random() * window.innerHeight;

    star.style.left = `${left}px`;
    star.style.top = `${top}px`;

    document.querySelector(".stars").appendChild(star);

    setTimeout(() => {
        star.remove();
        createStar();
    }, Math.random() * 10000); // Change the value to control the appearance rate of stars
}

// Create initial stars
for (let i = 0; i < 50; i++) {
    createStar();
}

//Switch on-off//

sun=document.getElementById('icon-1');
moon=document.getElementById('icon-2');
function go(){
    if(sun.style.opacity=='0' && document.body.style.background =='black'){
        sun.style.opacity='100';
        moon.style.opacity='0';
        document.body.style.background='rgba(154, 224, 247, 0.94)';
    }
    else{
        sun.style.opacity='0';
        moon.style.opacity='100';
        document.body.style.background='black';
    }
}

