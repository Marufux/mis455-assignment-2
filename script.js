function calculateDiscount() {
  const name = document.getElementById("name").value;
  const cgpa = parseFloat(document.getElementById("cgpa").value);
  const projects = parseInt(document.getElementById("projects").value);

  let discount = 0;
  let message = "";

  if (cgpa >= 4.0 && projects >= 7) {
    discount = 100;
  } else if (cgpa >= 3.9 && projects >= 6) {
    discount = 50;
  } else if (cgpa >= 3.8 && projects >= 5) {
    discount = 40;
  } else if (cgpa >= 3.6 && projects >= 4) {
    discount = 30;
  } else if (cgpa >= 3.4 && projects >= 3) {
    discount = 20;
  } else if (cgpa >= 3.2 && projects >= 2) {
    discount = 15;
  } else if (cgpa >= 3.0 && projects >= 1) {
    discount = 10;
  } else {
    message = "Sorry, you are not eligible for a discount.";
  }

  if (discount > 0) {
    message = `Congratulations ${name}! You have received a ${discount}% discount.`;
  }

  document.getElementById(
    "discount"
  ).innerHTML = `<p>Name: <span style="color: #ff5733">${name}</span></p>
      <p>CGPA: <span style="color: #ff5733">${cgpa}</span></p>
      <p>Completed Projects: <span style="color: #ff5733">${projects}</span></p>
      <p>Discount Rate: <span style="color: #ff5733">${discount}%</span></p>
      <p style="color: black; font-weight: bolder;">${message}</p>`;
}

// contact //
