// Javascript for Portfolio section

document.addEventListener('DOMContentLoaded', () => {
    const worksPicker = document.querySelector('.works-picker');
    const ourWorks = document.querySelector('.our-works');
    
    const worksData = {
        'Video Editing': [
            {
                img: 'Images/short-fomat.jpg',
                alt: 'Short format video editing preview',
                span: 'Video editing',
                title: 'Short format Video editing',
                description: 'Great videos tell great stories, and we make sure yours stands out. From smooth cuts to seamless transitions, we bring your vision to life with precision.',
                link: ''
            },
            {
                img: 'Images/long-form.jpg',
                alt: 'Long format video editing timeline preview',
                span: 'Video editing',
                title: 'Long Format Video Editing',
                description: 'Quick, engaging, and impactful-short videos grab attention fast. Whether it\'s for social media or ads, we craft edits that keep viewers hooked.',
                link: ''
            },
            {
                img: 'Images/brand-ad.jpg',
                alt: 'Brand advertisement video editing sample',
                span: 'Video editing',
                title: 'Brand Ad Video Editing',
                description: 'For content that dives deep, we ensure every second counts. Our long-format edits keep things engaging while delivering your message with clarity.',
                link: ''
            }
        ],
        'Graphic Design': [
            {
                img: 'Images/cj2.jpg',
                alt: 'Custom logo design sample for branding',
                span: 'Graphic Design',
                title: 'Logo Design',
                description: 'Create memorable brand identities that speak volumes without saying a word. Our logo designs capture the essence of your brand.',
                link: ''
            },
            {
                img: 'Images/chicken noodles.jpg',
                alt: 'Social media graphic design for a chicken noodles promotion',
                span: 'Graphic Design',
                title: 'Social Media Graphics',
                description: 'Engaging visual content that stops scrollers in their tracks. We design graphics that make your social media stand out.',
                link: ''
            },
            {
                img: 'Images/sample 4.jpg',
                alt: 'Marketing collateral design sample including brochure and banner',
                span: 'Graphic Design',
                title: 'Marketing Collateral',
                description: 'From brochures to banners, we create professional design materials that communicate your brand\'s message effectively.',
                link: ''
            }
        ],
        'Brand Photoshoot': [
            {
                img: 'Images/4.jpg',
                alt: 'High-quality product photography on white background',
                span: 'Brand Photoshoot',
                title: 'Product Photography',
                description: 'High-quality product images that showcase your offerings in the best light. Professional, clean, and compelling visuals.',
                link: ''
            },
            {
                img: 'Images/6.jpg',
                alt: 'Brand story photoshoot showing lifestyle and storytelling visuals',
                span: 'Brand Photoshoot',
                title: 'Brand Story Photoshoot',
                description: 'Capture the essence of your brand through powerful imagery that tells your unique story and connects with your audience.',
                link: ''
            },
            {
                img: 'Images/14.jpg',
                alt: 'Corporate photoshoot with professional team portrait',
                span: 'Brand Photoshoot',
                title: 'Corporate Photoshoot',
                description: 'Professional corporate photography that reflects your brand\'s values, culture, and professionalism.',
                link: ''
            }
        ]
    };

    function createWorkItem(work) {
        return `
            <div class="work-item">
                <img src="${work.img}" alt="${work.alt}">
                <span>${work.span}</span>
                <h1>${work.title}</h1>
                <p>${work.description}</p>
                <a href="${work.link}">Check out the Project</a>
            </div>
        `;
    }

    function updateWorks(category) {
        // Remove active from all spans
        worksPicker.querySelectorAll('span').forEach(span => {
            span.classList.remove('active');
        });

        // Add active to clicked span
        const activeSpan = Array.from(worksPicker.querySelectorAll('span'))
            .find(span => span.textContent === category);
        if (activeSpan) {
            activeSpan.classList.add('active');
        }

        // Get works for the category
        const categoryWorks = worksData[category];

        // Add slide-out class
        ourWorks.classList.add('slide-out');

        // Wait for slide-out animation
        setTimeout(() => {
            // Clear existing works
            ourWorks.innerHTML = '';

            // Add new works
            categoryWorks.forEach(work => {
                ourWorks.innerHTML += createWorkItem(work);
            });

            // Remove slide-out, add slide-in
            ourWorks.classList.remove('slide-out');
            ourWorks.classList.add('slide-in');

            // Remove slide-in after animation
            setTimeout(() => {
                ourWorks.classList.remove('slide-in');
            }, 500);
        }, 300);
    }
    // Add change event for mobile select
    document.querySelector('.works-picker-select')
    .addEventListener('change', (e) => {
        updateWorks(e.target.value);
    });


    // Add click events to picker spans
    worksPicker.querySelectorAll('span').forEach(span => {
        span.addEventListener('click', () => {
            updateWorks(span.textContent);
        });
    });

    // Initialize with first category
    updateWorks('Video Editing');
});




document.addEventListener("DOMContentLoaded", () => {
  const navlinks = document.getElementById("navlinks");
  const openBtn = document.querySelector(".menu-toggle");
  const closeBtn = document.querySelector(".close-menu");

  openBtn.addEventListener("click", () => {
    navlinks.style.right = "0";
  });

  closeBtn.addEventListener("click", () => {
    navlinks.style.right = "-250px";
  });

  // Optional: close menu when a link is clicked
  navlinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navlinks.style.right = "-250px";
    });
  });
});


// faq section 
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggleIcon = item.querySelector('.toggle-icon');

        question.addEventListener('click', () => {
            // Close all other open answers
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.faq-answer').classList.remove('active');
                    otherItem.querySelector('.toggle-icon').textContent = '+';
                }
            });

            // Toggle current answer
            answer.classList.toggle('active');
            toggleIcon.textContent = answer.classList.contains('active') ? '-' : '+';
        });
    });
});


/* ==================== TESTIMONIES ==================== */

var TestimonialSlider = new Swiper('.testimonial-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    slideShadows: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 70,
        modifier: 2.5,
    },
    
});

//  <!-- JavaScript for Particles -->

particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffcc00' }, 
        shape: { 
            type: 'circle',
            stroke: { width: 0, color: '#000000' },
            polygon: { nb_sides: 5 }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 100,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'grab' },  // Particles interact on hover
            onclick: { enable: true, mode: 'push' },
            resize: true
        },
        modes: {
            grab: { distance: 150, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});

