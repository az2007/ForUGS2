let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function start (max) {
    return Math.floor(Math.random() * max)+1;
}
function GetInRange() {
    let wow = start(number.length);
    document.querySelector("#field").innerText = wow;
}

