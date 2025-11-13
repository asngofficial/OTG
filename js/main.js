document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Basic client-side validation
      if (!name || !email || !message) {
        formMessage.innerHTML = '<div class="alert alert-danger">Please fill in all fields.</div>';
        return;
      }

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message }),
        });

        const result = await response.json();

        if (response.ok) {
          formMessage.innerHTML = `<div class="alert alert-success">${result.message}</div>`;
          contactForm.reset();
        } else {
          formMessage.innerHTML = `<div class="alert alert-danger">${result.message}</div>`;
        }
      } catch (error) {
        console.error('Error submitting contact form:', error);
        formMessage.innerHTML = '<div class="alert alert-danger">An unexpected error occurred. Please try again later.</div>';
      }
    });
  }
});
