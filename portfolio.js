 document.addEventListener('DOMContentLoaded', function() {
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const menuButton = document.querySelector('.md\\:hidden');
            const mobileMenu = document.createElement('div');
            mobileMenu.className = 'fixed inset-0 bg-gray-900 bg-opacity-95 z-50 flex items-center justify-center transform translate-x-full transition-transform duration-300';
            mobileMenu.innerHTML = `
                <div class="w-full max-w-sm px-6">
                    <div class="flex justify-end mb-8">
                        <button class="text-white w-10 h-10 flex items-center justify-center">
                            <i class="ri-close-line ri-2x"></i>
                        </button>
                    </div>
                    <nav class="flex flex-col space-y-6 text-center">
                        <a href="#accueil" class="text-white text-xl py-2">Accueil</a>
                        <a href="#a-propos" class="text-white text-xl py-2">À Propos</a>
                        <a href="#projets" class="text-white text-xl py-2">Projets</a>
                        <a href="#competences" class="text-white text-xl py-2">Compétences</a>
                        <a href="#contact" class="text-white text-xl py-2">Contact</a>
                    </nav>
                </div>
            `;
            document.body.appendChild(mobileMenu);
            
            const closeButton = mobileMenu.querySelector('button');
            const mobileLinks = mobileMenu.querySelectorAll('a');
            
            menuButton.addEventListener('click', function() {
                mobileMenu.classList.remove('translate-x-full');
                document.body.classList.add('overflow-hidden');
            });
            
            closeButton.addEventListener('click', function() {
                mobileMenu.classList.add('translate-x-full');
                document.body.classList.remove('overflow-hidden');
            });
            
            mobileLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.add('translate-x-full');
                    document.body.classList.remove('overflow-hidden');
                });
            });
        });

       
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Récupération des champs
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    let isValid = true;

    // Validation des champs
    [name, email, subject, message].forEach(input => {
      input.classList.remove('border-red-500');
      if (!input.value.trim()) {
        input.classList.add('border-red-500');
        isValid = false;
      }
    });

    if (!isValidEmail(email.value)) {
      email.classList.add('border-red-500');
      isValid = false;
    }

    if (!isValid) {
      alert('Veuillez remplir tous les champs correctement.');
      return;
    }

    // Envoi des données au serveur
    try {
      const response = await fetch('contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name.value.trim(),
          email: email.value.trim(),
          subject: subject.value.trim(),
          message: message.value.trim()
        })
      });

      const result = await response.json();

      if (result.success) {
        alert('Message envoyé avec succès ! Merci 🙏');
        contactForm.reset();
      } else {
        alert('Une erreur est survenue. Réessayez plus tard.');
      }
    } catch (error) {
      console.error('Erreur lors de l’envoi du message :', error);
      alert('Erreur réseau. Vérifiez votre connexion.');
    }
  });

  // Fonction de validation d’email
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
});


