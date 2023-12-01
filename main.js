import { Navbar, UpdateSection } from "./src/scripts/Navbar.js";

import { Work } from "./src/Scripts/Work.js";
import { Contact } from "./src/Scripts/Contact.js";

import { Reveal } from "./src/scripts/Reveal.js";

Reveal();

window.onscroll = () =>
{
    Reveal();
    UpdateSection();
}

window.onload = () =>
{
    Navbar();
    Work();
    Contact();
}