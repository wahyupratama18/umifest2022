import Alpine from 'alpinejs';
import AOS from 'aos';
// import Scrollbar from 'smooth-scrollbar';

window.Alpine = Alpine;
window.AOS = AOS;

Alpine.start();
AOS.init();
// Scrollbar.init(document.querySelector())

// document.querySelector("navbar a").addEventListener("click", () => {
//     location.pathname.replace(/^\//, "")
// })