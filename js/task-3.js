const inputElem = document.querySelector("#name-input");
const outputElem = document.querySelector("#name-output");

inputElem.addEventListener("input", event => {
    const text = event.currentTarget.value.trim();
    outputElem.textContent = text ? text : 'Anonymous';
});
