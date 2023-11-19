document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-button");
    const menuOverlay = document.querySelector("#menuOverlay");
    const closeMenu = document.querySelector("#closeMenu");

    // Überprüfen, ob die Elemente existieren
    if (!menuBtn || !menuOverlay || !closeMenu) {
        console.error("Eines der benötigten Elemente fehlt im DOM.");
        return; // Beenden Sie das Skript, weil ein kritisches Element fehlt
    }

    // Event-Listener für das Öffnen und Schließen des Menüs
    menuBtn.addEventListener("click", () => {
        menuOverlay.classList.toggle("active");
    });

    closeMenu.addEventListener("click", () => {
        menuOverlay.classList.remove("active");
    });

    // Stellen Sie sicher, dass alle Links im Menü das Menü schließen, wenn sie geklickt werden
    const menuLinks = menuOverlay.querySelectorAll("li a");
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuOverlay.classList.remove("active");
        });
    });
});
