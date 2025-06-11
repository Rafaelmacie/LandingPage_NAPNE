# Extensão TW: Ferramenta de Acessibilidade para Daltônicos

Este projeto é uma ferramenta de acessibilidade desenvolvida para auxiliar pessoas com daltonismo a visualizar conteúdo web de forma mais compreensível. Através da aplicação de **filtros em JavaScript**, a ferramenta simula e ajusta as cores de uma página, permitindo uma melhor percepção visual para diferentes tipos de deficiência de cor.

## Visão Geral

A "Extensão TW" visa ser uma demonstração prática de como a tecnologia pode ser usada para tornar o ambiente digital mais inclusivo. Ela aplica transformações visuais dinâmicas para compensar a percepção de cores afetada pelo daltonismo.

## Tecnologias Utilizadas

* **HTML5:** Para estruturar a página e os elementos da interface do usuário.
* **CSS3:** Responsável pela estilização e pelo design visual, garantindo uma interface limpa e funcional.
* **JavaScript:** O coração da ferramenta. Utilizado para implementar os algoritmos dos filtros de acessibilidade, manipular o DOM (Document Object Model) e aplicar as transformações visuais em tempo real.

## Estrutura do Projeto

O projeto é mantido simples e direto, com os arquivos essenciais para sua funcionalidade:
```
Extensao_TW/
├── imgs/              # Contém quaisquer imagens ou ícones usados na interface da ferramenta.
├── .gitattributes     # Arquivo de configuração do Git.
├── index.html         # A página principal: Onde a ferramenta é carregada e interage com o usuário.
├── script.js          # O motor da ferramenta: Contém toda a lógica JavaScript para aplicar os filtros de daltonismo.
└── style.css          # Define o estilo visual de todos os elementos na index.html.
```
## Como Funcionam os Filtros (Conceito)

O arquivo `script.js` é responsável por:
1.  **Detectar ou receber comandos do usuário:** Através de elementos da interface (botões, seletores).
2.  **Aplicar transformações:** Ao ser ativado, o script pode manipular as cores de elementos da página, seja através de:
    * **Filtros CSS dinâmicos:** Aplicando propriedades CSS como `filter: hue-rotate()`, `sepia()`, `grayscale()`, ou `contrast()` de forma seletiva.
    * **Manipulação de pixels (via Canvas API):** Para transformações mais complexas, o script pode renderizar partes da página ou imagens em um `<canvas>` e ajustar os valores de RGB de cada pixel para simular a percepção de cores para diferentes tipos de daltonismo (ex: Protanopia, Deuteranopia, Tritanopia).

## Como Utilizar a Ferramenta

Para experimentar a ferramenta:

1.  **Clone este repositório:**
    ```bash
    git clone [https://github.com/Samelafarias/Extensao_TW.git](https://github.com/Samelafarias/Extensao_TW.git)
    cd Extensao_TW
    ```
2.  **Abra o arquivo `index.html`:** Simplesmente abra o `index.html` em seu navegador web. A interface da ferramenta será carregada, permitindo que você ative e teste os filtros de acessibilidade.

## Próximos Passos e Melhorias Potenciais

* **Expansão de Filtros:** Adicionar mais tipos de filtros para daltonismo e outras deficiências visuais.
* **Controles de Usuário:** Implementar uma interface mais robusta para que o usuário possa selecionar os tipos de filtro, intensidade, e alternar facilmente.
* **Transformação em Extensão de Navegador:** Converter o projeto em uma extensão de navegador (Chrome, Firefox) para que os filtros possam ser aplicados em qualquer site visitado.
* **Otimização de Performance:** Garantir que a aplicação dos filtros seja fluida, mesmo em páginas complexas ou com muitas imagens.
* **Design Responsivo:** Adaptar a interface para que funcione bem em diferentes tamanhos de tela (desktops, tablets, celulares).
* **Persistência de Escolha:** Salvar a preferência do usuário para que o filtro selecionado seja aplicado automaticamente em futuras visitas.
