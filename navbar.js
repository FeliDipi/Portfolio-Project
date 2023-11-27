const $navbarButtons = document.querySelectorAll(".Navbar-li-a");

const SetupNavBar = () =>
{
    $navbarButtons.forEach(btn => {
        btn.addEventListener("click",()=>
        {
            ResetNavBar();
            btn.classList.add("Selected");
        });
    });
}

const ResetNavBar = () =>
{
    $navbarButtons.forEach(btn => btn.classList.remove("Selected"));
}

export default SetupNavBar;