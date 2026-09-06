document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Menu Toggle Logic
    const menuBtn = document.getElementById("menuToggle");
    const desktopNav = document.querySelector(".desktop-nav");
    
    if(menuBtn && desktopNav) {
        menuBtn.addEventListener("click", () => {
            // Simple toggle for mobile view (requires additional CSS for the expanded state)
            desktopNav.style.display = desktopNav.style.display === "flex" ? "none" : "flex";
            desktopNav.style.flexDirection = "column";
            desktopNav.style.position = "absolute";
            desktopNav.style.top = "60px";
            desktopNav.style.left = "0";
            desktopNav.style.width = "100%";
            desktopNav.style.background = "#fff";
            desktopNav.style.padding = "20px";
            desktopNav.style.boxShadow = "0 8px 16px rgba(0,0,0,0.1)";
        });
    }

    // 2. Fallback Intersection Observer for Images (if native loading="lazy" is unsupported)
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('.lazy-img');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    // Optional: You can add an 'opacity: 1' transition class here for a fade-in effect
                    img.classList.add('fade-in');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }
});