//code responsible for the smooth transition between the home section of the portfolio
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector(".nav");
    const navlist = nav ? nav.querySelectorAll("li") : [];
    const totalNavlist = navlist.length;
    const allSection = document.querySelectorAll(".section");
    const totalSection = allSection.length;
//makes sure certain section that are hidden, become visable due to the active class
    for(let i = 0; i < totalNavlist; i++){
        const a = navlist[i].querySelector("a");
        a.addEventListener("click", function(){
            for(let i = 0; i < totalSection; i++){
                allSection[i].classList.remove("back-section");
            }
            for(let j = 0; j < totalNavlist; j++){
                if(navlist[j].querySelector("a").classList.contains("active")){
                    allSection[j].classList.add("back-section");
                }
                navlist[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
            if(window.innerWidth < 1200){
                asideSectionToggleBtn();
            }
        });
    }

    function showSection(element){
        for(let i = 0; i < totalSection; i++){
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active");
    }
//make sure the navigation bar can open/close on smaller screen sizes
    const navTogglerBtn = document.querySelector(".toggle");
    const aside = document.querySelector("aside");
    const allSections = document.querySelectorAll(".section");
    const homeImgContainer = document.querySelector(".home-img-container");
    const totalSections = allSections.length;

    navTogglerBtn.addEventListener("click", () => {
        asideSectionToggleBtn();
        toggleHomeImage();
    });

    function asideSectionToggleBtn() {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for (let i = 0; i < totalSections; i++) {
            allSections[i].classList.toggle("open");
        }
    }

    function toggleHomeImage() {
        if (homeImgContainer) {
            homeImgContainer.classList.toggle("open");
        }
    }

    // Add event listeners for the special buttons
    const specialButtons = document.querySelectorAll(".btn.contact-me, .btn.contact-me2");
    specialButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            const target = this.getAttribute("href");
            showSection(this);
            window.location.hash = target; // Update the URL hash
        });
    });

    // Add event listener for the logo
    const logo = document.querySelector(".logo a");
    logo.addEventListener("click", function(event) {
        event.preventDefault();
        // Make only the home section active
        for(let i = 0; i < totalSection; i++){
            allSection[i].classList.remove("active");
        }
        document.querySelector("#home").classList.add("active");

        // Remove active class from all nav links
        for(let i = 0; i < totalNavlist; i++){
            navlist[i].querySelector("a").classList.remove("active");
        }

        // Make the home button active
        const homeNavLink = document.querySelector('.nav a[href="#home"]');
        if (homeNavLink) {
            homeNavLink.classList.add("active");
        }

        // Close the dropdown menu if it's open
        if(window.innerWidth < 1200){
            asideSectionToggleBtn();
        }

        // Update the URL hash to the home section
        window.location.hash = "#home";
    });

    // Ensure correct section is shown if hash is present in URL
    const hash = window.location.hash;
    if (hash) {
        const targetSection = document.querySelector(hash);
        if (targetSection) {
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            targetSection.classList.add('active');
            document.querySelectorAll('.nav a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(hash)) {
                    link.classList.add('active');
                }
            });
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var type = new Typed('.typing', {
        strings: ['Frontend Developer', 'ICT student', 'Web Designer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100,
        loop: true
    });
});
