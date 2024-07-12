function handleGetFormData() {
  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;

  return {
    name,
    city,
    email,
    zipCode,
    status,
  };
}

function isNumber(str) {
  return !isNaN(str);
}

function checkboxIsChecked() {
  return document.getElementById("status").checked;
}

function validateFormData(formData) {
  return formData !== null && isNumber(formData.zipCode) && checkboxIsChecked();
}
function clearForm(form) {
  form.reset();
  form.classList.remove("was-validated");
}

function submit() {
  const formData = handleGetFormData();

  if (validateFormData(formData)) {
    console.log("for submmit.", formData);
    alert(`Formulir berhasil dikirim! Terimakasih ${formData.name}`);
    clearForm(document.getElementById("myForm"));
    document.getElementById("warning").textContent = "";
  } else {
    document.getElementById("warning").textContent = "Periksa form anda sekali lagi";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    submit();
  });
});
