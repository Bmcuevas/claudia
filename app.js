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


// TEXT CHANGER

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };