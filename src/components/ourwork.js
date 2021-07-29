// import { ourWorkData } from "../data/data.js";
import { SubSections } from "./ourwork-subsections.js";

export const OurWork=( ourWorkData )=>{
    let ourWork = document.createElement("div");
    ourWork.id = ourWorkData.id;
    ourWork.classList.add("section");

    let heading = document.createElement("h2");
    heading.innerText = ourWorkData.heading;
    ourWork.appendChild(heading);

    ourWork.appendChild(SubSections(ourWorkData.content))
    return ourWork;
    
}