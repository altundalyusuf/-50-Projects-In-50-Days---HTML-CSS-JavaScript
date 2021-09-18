// Selects all panel classes
const panels = document.querySelectorAll('.panel');
// Adds an event listener to panels for tracking clikcs and makes panels active
panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
    })
})

// Removes active tag from all of the panels
function removeActiveClasses() {
    panels.forEach((panel => {
        panel.classList.remove("active");
    }))
}