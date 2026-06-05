document.addEventListener('DOMContentLoaded', () => {
    document.querySelector(".btn").onclick = () => {
        if (document.body.style.backgroundColor === "lightblue") {
            document.body.style.backgroundColor ="#f7f7f7";
        }
        else {
            document.body.style.backgroundColor = "lightblue";
        }
    };
});
