(() => {
  const arr = Array.from({ length: 10 });

  const makeDiv = (index) => {
    const rootElement = document.querySelector("#rootDiv");

    const parentDiv = document.createElement("div");
    parentDiv.classList.add("parentClass");
    parentDiv.id = `parent${index + 1}`;

    const childDiv = document.createElement("div");
    childDiv.classList.add("childClass");
    childDiv.id = `child${index + 1}`;

    childDiv.textContent = index + 1;

    parentDiv.appendChild(childDiv);
    rootElement.appendChild(parentDiv);
  };

  arr.forEach((item, index) => {
    makeDiv(index);
  });
})();
