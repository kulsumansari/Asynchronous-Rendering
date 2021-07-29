//prop=workdata.content
export const SubSections=(prop)=>{
    let markUp = document.createElement("div");
    prop.forEach(item => {
        let subsec = document.createElement("div");
        subsec.classList.add("sub-section");

        let image = document.createElement("img")
        image.src = item.imageSrc;

        let subhead = document.createElement('h4')
        subhead.innerText = item.subheading;
        let para = document.createElement('p')
        para.innerText=item.para;

        let contentDiv=document.createElement("div");
        contentDiv.classList.add('content-div')
        contentDiv.appendChild(subhead);
        contentDiv.appendChild(para);
        
        subsec.appendChild(image);
        subsec.appendChild(contentDiv);
        markUp.appendChild(subsec);
    });
    return markUp;

} 