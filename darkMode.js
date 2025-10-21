// Check for saved theme preference
document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem("preferredMode");
    const textChange = document.getElementById("textOfDarkModeActivator");
    
    if (currentTheme === "dark-mode") {
        document.body.classList.add("dark-mode");
        if (textChange) textChange.textContent = "Light Mode";
    }
});

function triggerDarkMode() {
    const element = document.body;
    const textChange = document.getElementById("textOfDarkModeActivator");
    
    element.classList.toggle("dark-mode");
    
    if (element.classList.contains("dark-mode")) {
        if (textChange) textChange.textContent = "Light Mode";
        localStorage.setItem("preferredMode", "dark-mode");
    } else {
        if (textChange) textChange.textContent = "Dark Mode";
        localStorage.setItem("preferredMode", "light-mode");
    }
}