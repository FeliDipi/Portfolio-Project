import { Navbar,UpdateSection } from "./src/scripts/navbar.js";

import { Work } from "./src/Scripts/Work.js";
import { Contact } from "./src/Scripts/contact.js";

window.onscroll = () =>
{
    UpdateSection();
}

window.onload = () =>
{
    Navbar();
    Work();
    Contact();
}