//Script para a mudança de cor por meio de filtro
//ainda precisa de alguns ajustes
document.querySelector("select[name='select-color']").addEventListener("change", function() {
    const body = document.body;
    console.log("Cor selecionada:", this.value); // Verifica o valor selecionado
    body.className = ""; // Reseta a classe do body
    body.classList.add(this.value); // Adiciona a classe correspondente à visão selecionada
});
