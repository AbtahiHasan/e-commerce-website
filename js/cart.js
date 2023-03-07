const tbody = document.getElementById("tbody");

tbody.onclick = (e) => {
    console.log(e.target)
    const target = e.target;
    const input = target.getAttribute("name");
    if(input === "qty") {
        const inputValue = target.value;
        console.log(inputValue);
    }
}
