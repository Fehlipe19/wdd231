const myForm = document.querySelector("#joinForm");

myForm.addEventListener("click", function () {
  let currentDate = new Date();
  let formattedDate = currentDate.toLocaleString();
  document.getElementById("timestamp").value = formattedDate;
  console.log(formattedDate);
});
