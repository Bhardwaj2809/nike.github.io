const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

let activeSlide = 0;

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(-${index * 100}vw)`;
        wrapper.style.transition = "transform 1s ease-in-out";
        activeSlide = index;
    });
});

let autoSlide = setInterval(() => {
    activeSlide = (activeSlide + 1) % menuItems.length;
    wrapper.style.transform = `translateX(-${activeSlide * 100}vw)`;
    wrapper.style.transition = "transform 1s ease-in-out";
}, 4000);

document.querySelector(".slider").addEventListener("mouseenter", () => {
    clearInterval(autoSlide);
});

document.querySelector(".slider").addEventListener("mouseleave", () => {
    autoSlide = setInterval(() => {
        activeSlide = (activeSlide + 1) % menuItems.length;
        wrapper.style.transform = `translateX(-${activeSlide * 100}vw)`;
        wrapper.style.transition = "transform 1s ease-in-out";
    }, 4000);
});
