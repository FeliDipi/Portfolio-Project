import { Navbar, UpdateSection } from "./src/scripts/Navbar.js";

import { Work } from "./src/scripts/Work.js";
import { Contact } from "./src/scripts/Contact.js";

import { Reveal } from "./src/scripts/Reveal.js";

window.onscroll = () =>
{
    Reveal();
    UpdateSection();
}

window.onload = () =>
{
    Reveal();
    Navbar();
    Work();
    Contact();
}