const copyButton = document.querySelector("#copy-button");
const deleteButton = document.querySelector("#delete-button");

function copyText() {
    const text = document.getElementById("text");
    const place = document.getElementById("place");
    place.innerHTML = text.value;
}

copyButton.addEventListener("click", copyText);

function deleteText() {
    const text = document.getElementById("text");
    const place = document.getElementById("place");
    place.innerHTML = "";
}

deleteButton.addEventListener("click", deleteText);
