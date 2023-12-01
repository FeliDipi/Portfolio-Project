import { Navbar, UpdateSection } from "./src/Scripts/navbar.js";

import { Work } from "./src/Scripts/work.js";
import { Contact } from "./src/Scripts/contact.js";

import { Reveal } from "./src/Scripts/reveal.js";

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