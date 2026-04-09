import { URL_FRONT } from "./env.js"

const form = document.getElementById("contactForm");
const responseMsg = document.getElementById("responseMsg");
const submitBtn = form.querySelector("button[type='submit']");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Loading state
  submitBtn.disabled = true;
  submitBtn.textContent = "Enviando...";
  responseMsg.className = "";
  responseMsg.textContent = "";

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  try {
    const res = await fetch(URL_FRONT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok) {
      responseMsg.textContent = "¡Consulta enviada correctamente!";
      responseMsg.className = "success";
      form.reset();
    } else {
      responseMsg.textContent = result.error || "Error al enviar la consulta";
      responseMsg.className = "error";
    }

  } catch (error) {
    responseMsg.textContent = "Error de conexión. Intenta de nuevo.";
    responseMsg.className = "error";
  } finally {
    // Reset button state
    submitBtn.disabled = false;
    submitBtn.textContent = "Enviar";
  }
});