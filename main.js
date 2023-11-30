import { Navbar,UpdateSection } from "./src/scripts/Navbar.js";

import { Work } from "./src/Scripts/Work.js";
import { Contact } from "./src/Scripts/Contact.js";

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