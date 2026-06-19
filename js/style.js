document.addEventListener("DOMContentLoaded", () => {

    /* MOBILE MENU */

    const menuBtn =
    document.querySelector(".menu-btn");

    const navMenu =
    document.querySelector("nav ul");

    if(menuBtn){
        menuBtn.addEventListener("click",()=>{
            navMenu.classList.toggle("show-menu");
        });
    }

    /* ACTIVE PAGE */

    document
    .querySelectorAll("nav a")
    .forEach(link=>{
        if(link.href === window.location.href){
            link.classList.add("active");
        }
    });

    /* LIGHTBOX */

    document
    .querySelectorAll(".gallery-grid img")
    .forEach(img=>{
        img.addEventListener("click",()=>{
            const lightbox =
            document.createElement("div");
            lightbox.className="lightbox";
            lightbox.innerHTML=
            `<img src="${img.src}">`;
            document.body.appendChild(lightbox);
            lightbox.onclick=()=>{
                lightbox.remove();
            };
        });
    });

    /* FADE ANIMATIONS */

    const observer =
    new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    });

    document
    .querySelectorAll(".fade-up")
    .forEach(el=>observer.observe(el));

    /* BACK TO TOP */

    const topBtn =
    document.createElement("button");
    topBtn.id="topBtn";
    topBtn.innerHTML="⬆";
    document.body.appendChild(topBtn);

    window.addEventListener("scroll",()=>{
        if(window.scrollY > 300){
            topBtn.style.display="block";
        }else{
            topBtn.style.display="none";
        }
    });


    topBtn.addEventListener("click",()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });
});

document
.querySelectorAll(".accordion-btn")
.forEach(btn=>{

btn.addEventListener("click",()=>{

const content=
btn.nextElementSibling;

content.style.display=
content.style.display==="block"
? "none"
: "block";

});

});

const search =
document.getElementById("serviceSearch");

if(search){

search.addEventListener("keyup",()=>{

const value =
search.value.toLowerCase();

document
.querySelectorAll(".service-card")
.forEach(card=>{

card.style.display =
card.innerText.toLowerCase()
.includes(value)
? "block"
: "none";

});

});

}

ddocument
.querySelectorAll("form")
.forEach(form=>{

form.addEventListener("submit",(e)=>{

const email =
form.querySelector('input[type="email"]');

if(email){

const pattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!pattern.test(email.value)){

e.preventDefault();

alert(
"Please enter a valid email address."
);

}

}

});

});