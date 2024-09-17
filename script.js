
 // Select all nav-link elements
 const navLinks = document.querySelectorAll('.nav-link');

 // Loop through each nav-link
 navLinks.forEach(link => {
   link.addEventListener('click', function() {
     // Remove active class from all nav-links
     navLinks.forEach(link => link.classList.remove('active'));
     
     // Add active class to the clicked nav-link
     this.classList.add('active');
   });
 });
 



// Function to open the side panel
document.querySelector('.profile-icon').addEventListener('click', function() {
    document.getElementById("sidePanel").style.right = "0";
});

// Function to close the side panel
function closePanel() {
    document.getElementById("sidePanel").style.right = "-300px";
}

// Function to handle file upload and preview
document.getElementById('profile-photo').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Update the profile picture in both the side panel and navbar
            document.getElementById('profile-picture').src = e.target.result;
            document.getElementById('navbar-profile-pic').src = e.target.result;

            // Reduce the height of the side panel
            document.getElementById('sidePanel').style.height = '75%';
        };
        reader.readAsDataURL(file);
    }
});




 
 // Select all buttons with class "btn"
 document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(event) {
      // Prevent default behavior if necessary
      event.preventDefault();

      // Remove focus (active visual style) after click
      this.blur();

      // Optionally, remove 'active' class if added by Bootstrap or custom behavior
      this.classList.remove('active');
    });
  });


  //Service section
  document.querySelectorAll('.btn-read-more').forEach(button => {
    button.addEventListener('click', function() {
        const text = this.previousElementSibling; // The <p> element before the button
        if (text.classList.contains('expanded')) {
            text.classList.remove('expanded'); // Collapse the text
            text.style.maxHeight = "3.2em"; // Set back to two lines
            this.textContent = "Read More"; // Change button text to 'Read More'
        } else {
            text.classList.add('expanded'); // Expand the text
            text.style.maxHeight = text.scrollHeight + "px"; // Expand to full height
            this.textContent = "Read Less"; // Change button text to 'Read Less'
        }
    });
});



//   Map API use
