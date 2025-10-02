//Pegando as cotações das moedas
const USD = 4.86;
const EUR = 5.27;
const GBP = 6.13;

//Escrevendo as variáveis de acordo com os IDs do HTML, obtendo os elementos

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result"); // Adicione esta linha

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => { 

    // Regex para verificar se há caracteres que não sejam números
    const hasCaractersRegex = /\D+/g; 

    amount.value = amount.value.replace(hasCaractersRegex, "");
});

//Capturando o evento de submit do formulário
form.onsubmit = (event) => {
    event.preventDefault();

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "$");
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€");
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£");
            break;
    }
}

//Função para fazer a conversão de moedas
function convertCurrency(amount, price, symbol) {
    try {
        //Exibindo a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;
        let total = amount * price;
        result.textContent = `${formatCurrencyBRL(total)} Reais`; // Exibe o resultado

        //Aplica a classe que exibe o footer como resultado
        footer.classList.add("show-result");
    } catch (error) {
        console.log(error);
        alert ("Ocorreu um erro, tente novamente mais tarde.");
    }
}

//Função para formatar o valor em BRL
function formatCurrencyBRL(value) {
    //Converte para numero para utilizar o toLocaleString para formatar no padrão BR
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}
