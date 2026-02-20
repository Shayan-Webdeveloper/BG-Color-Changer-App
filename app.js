const btn = document.querySelector("#btn");
const para = document.querySelector("#para").innerText;

function bgColor() {
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)
    let bgcolor = `rgb(${r},${g},${b})`
    document.body.style.backgroundColor = bgcolor
}
btn.addEventListener("mouseover", bgColor)
btn.addEventListener("click", bgColor)