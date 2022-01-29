const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar_menu");
const navLogo = document.querySelector("#navbar_logo");

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
 };
 menu.addEventListener("click", mobileMenu);


//  Show active menu when scrolling

const highlightMenu = () =>{
    const elem = document.querySelector(".highlight");
    const homeMenu = document.querySelector("#home-page");
    const aboutMenu = document.querySelector("#about-page");
    const servicesMenu = document.querySelector("#services-page");
    const derkisHaus = document.querySelector("#derkishaus-page");
    const passions = document.querySelector("#passions-page");
    const contact = document.querySelector("#contact-page");
    
    let scrollPos = window.scrollY;
    console.log(scrollPos);


// Adds "highlight" class to my menu items

    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add("highlight");
        aboutMenu.classList.remove("highlight");
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add("highlight");
        homeMenu.classList.remove("highlight");
        servicesMenu.classList.remove("highlight");
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        servicesMenu.classList.add("highlight");
        aboutMenu.classList.remove("highlight");
        derkisHaus.classList.remove("highlight");
        return;
    } else if (window.innerWidth > 960 && scrollPos < 3400) {
        servicesMenu.classList.remove("highlight");
        derkisHaus.classList.add("highlight");
        passions.classList.remove("highlight");
        return;  
    } else if (window.innerWidth > 960 && scrollPos < 4000) {
      derkisHaus.classList.remove("highlight");
      passions.classList.add("highlight");
      contact.classList.remove("highlight");
      return;  
    } else if (window.innerWidth > 960 && scrollPos < 5000) {
      passions.classList.remove("highlight");
      contact.classList.add("highlight");
      return;   
    }
    
    

    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) { 
        elem.classList.remove("highlight");
    }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

// Close Mobile Menu when clicking on a menu item 

const hideMobileMenu = () => { 
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth<=768 && menuBars){
        menu.classList.toggle("is-active");
        menuLinks.classList.remove("active");
    }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);


