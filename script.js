const text = baffle('.text');
text.set({
    character:'',
    speed:120
});
text.start();
text.reveal(6000);



/******************FOR REVEAL EFFECTS****************/

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.1 // start animation when 30% visible
});

document.querySelectorAll('.second-section-wrapper').forEach((el) => observer.observe(el));
