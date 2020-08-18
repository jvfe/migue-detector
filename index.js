let element = document.getElementsByClassName("article")[1];
let text = element.textContent;
// console.log(text)
if (text.includes('request')) {

    // console.log("hey!")
    tag = document.getElementsByClassName("content-title")[0].style.border = "2px solid red";
    // console.log(tag)
}
