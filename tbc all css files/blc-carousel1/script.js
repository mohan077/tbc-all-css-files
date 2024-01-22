document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabs = document.querySelectorAll(".tab");

    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const tabId = button.getAttribute("data-tab");
            tabs.forEach((tab) => {
                tab.style.display = "none";
            });
            document.getElementById(tabId).style.display = "block";

            tabButtons.forEach((btn) => {
                btn.classList.remove("active");
            });
            button.classList.add("active");
        });
    });

    // Set the initial active tab
    tabButtons[0].click();
});
