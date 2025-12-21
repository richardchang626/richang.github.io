// Function to open the modal
function openModal(element) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    
    // Get the image source and the hidden settings text
    const imgSrc = element.querySelector('img').src;
    const settings = element.querySelector('.settings-data').innerHTML;

    modal.style.display = "block";
    modalImg.src = imgSrc;
    captionText.innerHTML = `<strong>Camera Settings:</strong> ${settings}`;
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Close modal when clicking anywhere outside the image
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}