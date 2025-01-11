// Get the current year and dynamically set it in the footer
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