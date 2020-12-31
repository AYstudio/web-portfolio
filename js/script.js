// Script for sticky navbar
const nav   = document.getElementById('my-nav');
window.addEventListener('scroll', function() {
    nav.classList.toggle('fixed', scrollY > 0);
});
// End sticky navbar script

// Script for unique scrollbar
let progress    = document.getElementById('progressBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function() {
    let progressHeignt = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeignt + "%";
}
// End unique scrollbar script

// Script for loader
const body = document.body;
window.addEventListener('beforeunload', () => {
    body.classList.add('loader');
});
// End loader script