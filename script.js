// Change text content dynamically
document.getElementById("changeBtn").addEventListener("click", () => {
  const title = document.getElementById("main-title");
  title.textContent = "You clicked the button!";

  // Modify CSS styles
  title.style.color = "teal";
  title.style.fontSize = "2.5rem";
});

// Add/remove an element dynamically
const toggleBtn = document.getElementById("toggleBtn");
const container = document.getElementById("container");
let box;

toggleBtn.addEventListener("click", () => {
  if (!box) {
    box = document.createElement("div");
    box.textContent = "I'm a new box!";
    box.style.width = "200px";
    box.style.height = "100px";
    box.style.backgroundColor = "#f9c74f";
    box.style.display = "flex";
    box.style.alignItems = "center";
    box.style.justifyContent = "center";
    box.style.marginTop = "10px";
    container.appendChild(box);
  } else {
    container.removeChild(box);
    box = null;
  }
});
