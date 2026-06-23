document.addEventListener("DOMContentLoaded", () => {
  // Grab all the individual artwork squares
  const gridItems = document.querySelectorAll('.grid-item');

  gridItems.forEach(item => {
    item.addEventListener('click', (e) => {
      // Find the specific title text of the image you just clicked
      const projectTitle = item.querySelector('h2').innerText;
      
      console.log(`Grid item clicked: ${projectTitle}`);
      
      // Future feature: 
      // This is exactly where you will call a function like:
      // openLightbox(imageSource, projectTitle);
    });
  });
});