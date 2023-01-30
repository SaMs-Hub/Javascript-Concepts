// Event bubbling + event.target ...
const some0 = document.querySelector('.some0');
const some1 = document.querySelector('.some1');
const some2 = document.querySelector('.some2');

some0.addEventListener("click",
    handleClick
);

some1.addEventListener("click",
    handleClick
)

some2.addEventListener("click",
    handleClick
)

function handleClick(event) {
    alert(event.target.tagName + event.currentTarget.tagName + this.tagName);
}

// Event capturing
const some0 = document.querySelector('.some0');
const some1 = document.querySelector('.some1');
const some2 = document.querySelector('.some2');

some0.addEventListener("click", () => {
    alert("some 0 clicked");
}, {
    capture: true
});

some1.addEventListener("click", () => {
    alert("some 1 clicked");
}, {
    capture: true
})

some2.addEventListener("click", () => {
    alert("some 2 clicked");
}, {
    capture: true
})


// Event delegation
const some0 = document.querySelector('.some0');
const some1 = document.querySelector('.some1');
const some2 = document.querySelector('.some2');

some0.addEventListener("click", (e) => {

    console.log(e.target.tagName);

},);

