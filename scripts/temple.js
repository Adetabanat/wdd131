const currentYearElement = document.getElementById('currentyear');
if (currentYearElement) {
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
}

// Get the last modified date of the document and set it in the footer
const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
}
  
  // Hamburger menu functionality
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector("nav ul");
  
  hamburger.addEventListener("click", () => {
    // Toggle the visibility of the navigation menu
    navMenu.classList.toggle("active");
    
    // Change the hamburger icon to an 'X' when active
    if (navMenu.classList.contains("active")) {
      hamburger.textContent = "X"; // Change the symbol to 'X'
    } else {
      hamburger.textContent = "="; // Change back to the hamburger symbol
    }
  });
  