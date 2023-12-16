//alert("Hello from Dom Play")

//document.querySelector(".hamlet").style.backgroundColor = "orange";

function highlight(el) {
    if (el.style.backgroundColor == 'green') {
        el.style.backgroundColor = 'white';
    } else {
        el.style.backgroundColor = 'green';
    }
}

function highlightActor(actor) {
    const spans = document.querySelectorAll("div#play span");
    for (const mySpan of spans) {
        if (mySpan.dataset.actor == actor) {
            // Toggle the background color
            highlight(mySpan);
        } else {
            mySpan.style.backgroundColor = 'white';
        }
    }
}

const spans = document.querySelectorAll("div#play span");
console.log(spans);

for (const mySpan of spans) {
    mySpan.addEventListener("click", function (ev) {
        highlightActor(mySpan.dataset.actor);
    });
}
