document.addEventListener("DOMContentLoaded", function(){
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectItems = document.querySelectorAll(".project-item");
    filterButtons.forEach(button => {
        button.addEventListener("click", function(){
            const filter = this.dataset.filter;
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            projectItems.forEach(item => {
                if(filter === "all" || item.classList.contains(filter)){
                    item.style.display = "";
                    setTimeout(() => item.style.opacity = "1", 10);
                }else{
                    item.style.opacity = "0";
                    setTimeout(() => item.style.display = "none", 250);
                }
            });
        });
    });
    const navLinks = document.querySelectorAll(".nav-link");
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if(linkPath === currentPath){
            link.classList.add("active");
        }
    });
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, {threshold:.12});
    const animatedElements = document.querySelectorAll(".service-card,.skill-card,.project-card,.contact-form-card,.about-content");
    animatedElements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition = "opacity .6s ease,transform .6s ease";
        observer.observe(element);
    });
    const navbar = document.querySelector(".site-header");
    let lastScroll = 0;
    window.addEventListener("scroll", function(){
        const currentScroll = window.scrollY;
        if(currentScroll > 80){
            navbar.style.boxShadow = "0 10px 35px rgba(70,75,150,.08)";
        }else{
            navbar.style.boxShadow = "none";
        }
        lastScroll = currentScroll;
    });
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", function(){
            const submitButton = form.querySelector("button[type='submit']");
            if(submitButton){
                submitButton.disabled = true;
                submitButton.style.opacity = ".7";
            }
        });
    });
});