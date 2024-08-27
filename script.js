document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector(".search-bar");
    const companyBoxes = document.querySelectorAll(".company-box");

    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.toLowerCase();

        companyBoxes.forEach(function(box) {
            const companyName = box.querySelector("h2").textContent.toLowerCase();

            if (companyName.includes(searchTerm)) {
                box.style.display = "flex"; // Show the box
            } else {
                box.style.display = "none"; // Hide the box
            }
        });
    });
});
