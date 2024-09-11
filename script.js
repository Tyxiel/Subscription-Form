/* const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("mouseover", () => {
    const randomX = Math.random() * (window.innerWidth - submitButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - submitButton.offsetHeight);

    submitButton.style.position = "absolute";
    submitButton.style.left = randomX + "px";
    submitButton.style.top = randomY + "px";
});*/

function getInputValue() {
    const cep = document.querySelector("#cep").value;
    getData(cep);
}

async function getData(cep) {
    var data = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(x => x.json());
    changeInputData(data);
}

function changeInputData(data) {
    document.querySelector("#address").value = data.logradouro + ", " + data.localidade + ", " + data.uf;
    
    const label = document.querySelector("#address-label");
    const input = document.querySelector("#address");
    const br = document.querySelector("#address-br")

    label.style.display = "flex";
    label.style.visibility = "visible";
    input.style.display = "flex";
    input.style.visibility = "visible";
    br.style.display = "flex";
    br.style.visibility = "visible";
}