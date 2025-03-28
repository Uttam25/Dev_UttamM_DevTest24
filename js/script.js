document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".form-control");

    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            input.parentElement.querySelector(".label").classList.add("active");
        });

        input.addEventListener("blur", () => {
            if (input.value === "") {
                input.parentElement.querySelector(".label").classList.remove("active");
            }
        });
    });
});
