function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById("name-con").value;
  const email = document.getElementById("email").value;
  const responseDiv = document.getElementById("response");
  responseDiv.innerHTML = `Thank you, ${name}. We will contact you soon at ${email}.`;
}
