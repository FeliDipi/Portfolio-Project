const $navbarButtons = document.querySelectorAll(".Navbar-li-a");
const $sections = document.querySelectorAll(".Section");

//mobile
const $mobileSectionIndicator = document.querySelector(".Mobile-Section-Name");

const windowHeight = window.innerHeight;
var scrollTop = 0;

export const SetupNavBar = () =>
{
    $navbarButtons.forEach(btn => {
        btn.addEventListener("click",()=>
        {
            ResetNavBar();
            btn.classList.add("Selected");
        });
    });
}

export const OnSelectionController = () =>
{
    scrollTop = window.scrollY;
    
    $sections.forEach((section,i)=>
    {
        if(section.offsetTop<(scrollTop+windowHeight/2) && scrollTop<(section.offsetTop+windowHeight/2)) 
        {
            ResetNavBar();
            $navbarButtons[i].classList.add('Selected');

            //mobile section indicator update
            $mobileSectionIndicator.innerHTML = $navbarButtons[i].textContent;
        }
    });
}

const ResetNavBar = () =>
{
    $navbarButtons.forEach(btn => btn.classList.remove("Selected"));
}