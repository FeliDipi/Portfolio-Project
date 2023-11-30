//navbar
const $navbar = document.querySelector(".Navbar");
const $navbarButtons = document.querySelectorAll(".Navbar-li-a");
const $sections = document.querySelectorAll(".Section");

//mobile navbar
const $mobileSectionIndicator = document.querySelector(".Mobile-Section-Name");
const $mobileOpenMenuBtn = document.querySelector(".Mobile-Menu-Button");

//mobile menu
const $mobileMenu = document.querySelector(".Mobile-Menu");
const $mobileMenuButtons = document.querySelectorAll(".Mobile-Menu-Li-A");
const $mobileCloseMenuBtn = document.querySelector(".Mobile-Menu-Close-Button");

const windowHeight = window.innerHeight;
var scrollTop = 0;

const CloseMenu = () =>
{
    $navbar.classList.remove("OpacityOff");
    $mobileMenu.classList.remove("OpacityOn");
}

const OpenMenu = () =>
{
    $navbar.classList.add("OpacityOff");
    $mobileMenu.classList.add("OpacityOn");
}

export const Navbar = () =>
{
    $mobileMenuButtons.forEach(btn => btn.addEventListener("click",CloseMenu));

    $mobileOpenMenuBtn.addEventListener("click", OpenMenu);
    $mobileCloseMenuBtn.addEventListener("click", CloseMenu);
}

export const UpdateSection = () =>
{
    scrollTop = window.scrollY;
    
    $sections.forEach((section,i)=>
    {
        if(section.offsetTop<(scrollTop+windowHeight/2) && scrollTop<(section.offsetTop+windowHeight/2)) 
        {
            ResetNavBar();

            //desktop section indicator update
            $navbarButtons[i].classList.add('Selected');

            //mobile menu section indicator update
            $mobileMenuButtons[i].classList.add('Selected');

            //mobile section indicator update
            $mobileSectionIndicator.innerHTML = $navbarButtons[i].textContent;
        }
    });
}

const ResetNavBar = () =>
{
    $navbarButtons.forEach(btn => btn.classList.remove("Selected"));
    $mobileMenuButtons.forEach(btn => btn.classList.remove("Selected"));
}