//Script de filtro para a mudança automática de cores
document.querySelector("select[name='select-color']").addEventListener("change", function() {
    const body = document.body;
    body.className = ""; // Reseta a classe do body
    body.classList.add(this.value); // Adiciona a classe correspondente à visão selecionada
});
