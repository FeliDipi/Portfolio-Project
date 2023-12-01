import { Navbar, UpdateSection } from "./src/Js/navbar.js";

import { Work } from "./src/Js/work.js";
import { Contact } from "./src/Js/contact.js";

import { Reveal } from "./src/Js/reveal.js";

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