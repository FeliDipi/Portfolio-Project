import { SetupNavBar,OnSelectionController } from "./navbar.js";
import SetupWorkItems from "./workItem.js";
import SetupForm from "./form.js";

window.onscroll = () =>
{
    OnSelectionController();
}

window.onload = () =>
{
    SetupNavBar();
    SetupWorkItems();
    SetupForm();
}