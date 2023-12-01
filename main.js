import { DisableLoadScreen } from "./src/Js/loadScreen.js";
import { Reveal } from "./src/Js/reveal.js";

import { Navbar, UpdateSection } from "./src/Js/navbar.js";
import { Work } from "./src/Js/work.js";
import { Contact } from "./src/Js/contact.js";

window.onscroll = () =>
{
    Reveal();
    UpdateSection();
}

window.onload = () =>
{
    DisableLoadScreen();

    Reveal();
    Navbar();
    Work();
    Contact();
}