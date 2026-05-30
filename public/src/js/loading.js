const startButton = document.querySelector("#startButton");

const loading = document.querySelector("#loading");

startButton.addEventListener("click", () => {

    loading.classList.add("active");

    setTimeout(() => {

        window.location.assign("public/src/page/casal.html");

    }, 2500);

});