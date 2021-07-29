
// import { bannerData  } from "../data/data.js";

export const Banner = (bannerData) => {
    const markUp = document.createElement("div");
    markUp.classList.add("banner");

    markUp.style.backgroundImage = `linear-gradient(
      to right,
      rgba(255, 255, 255, 0.438),
      rgba(0, 0, 0, 0.753)
    ),url(${bannerData.bannerImage})`;

    let heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.innerText = bannerData.companyName;
  
    let tagline = document.createElement("p");
    tagline.classList.add("tagline");
    tagline.innerText = bannerData.tagline;
  
    let cta = document.createElement("a");
    cta.href = bannerData.cta.href;
    cta.innerText = bannerData.cta.link;
    cta.classList.add("btn");
  
    markUp.appendChild(heading);
    markUp.appendChild(tagline);
    markUp.appendChild(cta);
    return markUp;
  };