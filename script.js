let btn = document.getElementById("ok");
btn.onclick = function(e) {
    e.preventDefault();
    fetch("https://httpbin.org/post", {
        method: 'POST',
        body: new FormData(catForm)
    })
    .then(response => response.json())
    .then(user => {
        console.log(user);
    })
    .catch(error => console.log(error));
}