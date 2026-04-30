// Responsive Menu
const menu_icon = document.querySelector("#mobile-menu-icon");
const menu = document.querySelector("#mobile-menu-nav");
        
menu_icon.addEventListener("click", () => {
    menu_icon.classList.toggle("fa-bars");
    menu_icon.classList.toggle("fa-times");
    
    menu.classList.toggle("hide-menu");
});
