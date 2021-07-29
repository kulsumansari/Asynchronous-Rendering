
import { navigationBar } from "./components/navigationBar.js";
import { Banner } from "./components/banner.js";
import { Footer } from "./components/footer.js";
import { OurWork } from "./components/ourwork.js";

let rootDiv = document.getElementById("root");
let url = 'https://kulsumansari.github.io/webpage-data/webpage.json';

fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((response)=>{
        // console.log(response.navData);
        rootDiv.appendChild(navigationBar(response.navData));
        rootDiv.appendChild(Banner(response.bannerData));
        rootDiv.appendChild(OurWork(response.ourWorkData));
        rootDiv.appendChild(Footer(response.footerData));

    })
    .catch((err)=>{
        console.log(err)
    });

// rootDiv.appendChild(navigationBar());
// rootDiv.appendChild(Banner());
// rootDiv.appendChild(OurWork());
// rootDiv.appendChild(Footer());

