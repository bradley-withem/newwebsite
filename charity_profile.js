document.addEventListener("DOMContentLoaded", function() {
  const volunteerButton = document.getElementById("volunteerButton");

  volunteerButton.addEventListener("click", function() {
    const formHTML = `
      <form id="volunteerForm">
        <label for="name">Your Name:</label>
        <input type="text" id="name" name="name" required>
        <label for="email">Your Email:</label>
        <input type="email" id="email" name="email" required>
        <button type="submit">Submit</button>
      </form>
    `;

   
    const formContainer = document.getElementById("formContainer");
    formContainer.innerHTML = formHTML;
  });

  const charityDetailsButton = document.getElementById("charityDetailsButton");

  charityDetailsButton.addEventListener("mouseover", function() {
    const details = document.createElement("p");
    details.textContent = "St. Jude's Children's Hospital has been helping children and families for over 50 years, providing world-class treatment for cancer and other life-threatening diseases.";
    
    charityDetailsButton.appendChild(details);
  });

  charityDetailsButton.addEventListener("mouseout", function() {
    const details = charityDetailsButton.querySelector("p");
    if (details) {
      charityDetailsButton.removeChild(details);
    }
  });
});
