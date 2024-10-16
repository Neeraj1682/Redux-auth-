const image = document.getElementById('draggable-image');
const dropArea = document.getElementById('drop-area');

// Handle drag start
image.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', null); // Required for Firefox
    e.dataTransfer.effectAllowed = 'move';
});

// Handle drag over
dropArea.addEventListener('dragover', (e) => {
    e.preventDefault(); // Prevent default to allow drop
});

// Handle drop
dropArea.addEventListener('drop', (e) => {
    e.preventDefault(); // Prevent default action (e.g., opening as a link)

    const rect = dropArea.getBoundingClientRect();
    const x = e.clientX - rect.left; // X position within the drop area
    const y = e.clientY - rect.top; // Y position within the drop area

    // Append the image to the drop area
    const imgClone = image.cloneNode(true);
    imgClone.style.position = 'absolute';
    imgClone.style.left = `${x - imgClone.width / 2}px`; // Center the image
    imgClone.style.top = `${y - imgClone.height / 2}px`;

    dropArea.appendChild(imgClone);
});
