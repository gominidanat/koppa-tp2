document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  const alertBox = document.getElementById("formAlert");

  form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let ok = true;

    // Проверки
    if(name.length < 2){ ok = false; form.name.classList.add("is-invalid"); }
    else { form.name.classList.remove("is-invalid"); }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ ok = false; form.email.classList.add("is-invalid"); }
    else { form.email.classList.remove("is-invalid"); }

    if(message.length < 5){ ok = false; form.message.classList.add("is-invalid"); }
    else { form.message.classList.remove("is-invalid"); }

    if(!ok){
      alertBox.textContent = "Por favor completá correctamente los campos rojos.";
      alertBox.style.display = "block";
      return;
    }

    // Всё ок
    alertBox.style.display = "none";
    form.reset();
    const success = document.createElement("div");
    success.className = "alert alert-success";
    success.textContent = "Mensaje enviado (simulado)";
    form.parentNode.insertBefore(success, form);
    setTimeout(()=> success.remove(), 3000);
  });
});