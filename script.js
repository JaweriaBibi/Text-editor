document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("text-input");
    const output = document.getElementById("output");

    input.addEventListener("input", () => {
        output.textContent = input.value.trim();
    });
});
