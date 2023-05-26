let xValue = 0;
let yValue = 0;

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    document.querySelectorAll(".parallax").forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;

        // const forTest = document

        // let zValue = e.clientX - getComputedStyle(el).left;
        // console.log

        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
    });
});
