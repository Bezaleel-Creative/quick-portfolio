document.addEventListener('DOMContentLoaded', function() {

    // --- Contact Form Handling ---
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            // Basic validation (HTML5 'required' attribute already helps)
            if (name && email && message) {
                console.log('Form Submitted:');
                console.log('Name:', name);
                console.log('Email:', email);
                console.log('Message:', message);

                // --- !!! IMPORTANT !!! ---
                // This is where you would typically send the data to a server
                // or use a service like EmailJS, Formspree, etc.
                // For this example, we'll just show a success message.
                // Example with Fetch API (replace with your actual endpoint):
                /*
                fetch('YOUR_SERVER_ENDPOINT', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, message }),
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    successMessage.style.display = 'block';
                    contactForm.reset(); // Clear the form
                    setTimeout(() => {
                        successMessage.style.display = 'none';
                    }, 3000); // Hide message after 3 seconds
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert('There was an error sending your message. Please try again.');
                });
                */

                // Simulate successful submission for now
                successMessage.style.display = 'block';
                contactForm.reset(); // Clear the form

                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 3000); // Hide message after 3 seconds

            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // --- Update Current Year in Footer ---
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Smooth Scrolling for Navigation Links ---
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Animate Skill Bars on Scroll (Optional Enhancement) ---
    // This is a bit more advanced but adds a nice touch.
    // For simplicity, the skill levels are hardcoded in HTML style attribute for now.
    // To make this dynamic with JS:
    // 1. Remove the inline `style="width: XX%"` from `.skill-level` in HTML.
    // 2. Define skill percentages in the `skillsData` array below.
    // 3. Uncomment and adapt the Intersection Observer code.

    
    /* const skillsData = [ // Example data, align with your HTML structure
        { selector: '.skills-container .skill:nth-child(1) .skill-level', level: '90%' },
        { selector: '.skills-container .skill:nth-child(2) .skill-level', level: '85%' },
        { selector: '.skills-container .skill:nth-child(3) .skill-level', level: '80%' },
        { selector: '.skills-container .skill:nth-child(4) .skill-level', level: '75%' },
        { selector: '.skills-container .skill:nth-child(5) .skill-level', level: '70%' },
        { selector: '.skills-container .skill:nth-child(6) .skill-level', level: '85%' },
        { selector: '.skills-container .skill:nth-child(7) .skill-level', level: '90%' },
    ];

    const skillSection = document.getElementById('skills');

    if (skillSection) {
        const observerOptions = {
            root: null, // relative to the viewport
            rootMargin: '0px',
            threshold: 0.3 // trigger when 30% of the element is visible
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillsData.forEach(skill => {
                        const skillElement = document.querySelector(skill.selector);
                        if (skillElement) {
                            skillElement.style.width = skill.level;
                        }
                    });
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        };

        const skillsObserver = new IntersectionObserver(observerCallback, observerOptions);
        skillsObserver.observe(skillSection);
    }*/
    

});