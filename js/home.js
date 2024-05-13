function accordion() {
    document.querySelectorAll(".accordion-item h2").forEach((accordionToggle) => {
        accordionToggle.addEventListener("click", () => {
            const accordionItem = accordionToggle.parentNode;
            const accordionContent = accordionToggle.nextElementSibling;


            if (accordionContent.style.maxHeight) {
                accordionContent.style.maxHeight = null;
                accordionItem.classList.remove("active");
            } else {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
                accordionItem.classList.add("active");
            }
        });
    });
}
accordion();

function onClickMenu() {
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("change");
}