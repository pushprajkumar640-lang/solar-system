// Sun follows mouse slightly

const sun = document.querySelector(".sun");

document.addEventListener("mousemove", (e) => {

    const x =
        (e.clientX - window.innerWidth / 2) * 0.02;

    const y =
        (e.clientY - window.innerHeight / 2) * 0.02;

    sun.style.transform =
        `translate(${x}px, ${y}px)`;
});

// Random twinkling stars

for(let i = 0; i < 100; i++){

    const star = document.createElement("div");

    star.style.position = "fixed";
    star.style.width = "2px";
    star.style.height = "2px";
    star.style.background = "white";
    star.style.borderRadius = "50%";

    star.style.left =
        Math.random() * window.innerWidth + "px";

    star.style.top =
        Math.random() * window.innerHeight + "px";

    star.style.opacity = Math.random();

    star.style.animation =
        `blink ${Math.random()*3+2}s infinite`;

    document.body.appendChild(star);
}

const style = document.createElement("style");

style.innerHTML = `
@keyframes blink{
0%,100%{opacity:0.2;}
50%{opacity:1;}
}
`;

document.head.appendChild(style);