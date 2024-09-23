// script.js
document.addEventListener("DOMContentLoaded", function () {
    const body = document.getElementById("body");
    const colorModeSelector = document.getElementById("colorMode");

    colorModeSelector.addEventListener("change", function () {
        const selectedMode = this.value;

        // Remover qualquer filtro existente
        body.style.filter = "";
        
        // Aplicar filtro baseado no modo selecionado
        switch (selectedMode) {
            case "protanopia":
                body.style.filter = "url('#protanopia')";
                break;
            case "deuteranopia":
                body.style.filter = "url('#deuteranopia')";
                break;
            case "tritanopia":
                body.style.filter = "url('#tritanopia')";
                break;
            case "high-contrast":
                body.style.filter = "contrast(200%) brightness(80%)";
                break;
            default:
                body.style.filter = ""; // Nenhum filtro
        }
    });
});
