document.getElementById("clickBtn").addEventListener("click", () => {
    const btnP = document.getElementById("btnP");
    btnP.textContent = "I was clicked";
    setTimeout(() => btnP.textContent = "Click Me!!", 5000);
})