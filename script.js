document.addEventListener("DOMContentLoaded", () => {
 const searchToggle = document.getElementById('search-toggle');
 const searchBox = document.getElementById('search-box');
 const searchInput = document.getElementById('search-input');
 const desktopNav = document.getElementById('desktop-nav');

searchToggle.addEventListener('click', function (event) {
  event.stopPropagation();
  searchBox.classList.toggle('active');
  desktopNav.style.display = searchBox.classList.contains('active') ? 'none' : 'flex';

  if (searchBox.classList.contains('active')) {
    setTimeout(() => searchInput.focus(), 100);
  }
});

document.addEventListener('click', function (event) {
  const isClickInside = searchBox.contains(event.target) || searchToggle.contains(event.target);
  if (!isClickInside && searchBox.classList.contains('active')) {
    searchBox.classList.remove('active');
    desktopNav.style.display = 'flex';
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && searchBox.classList.contains('active')) {
    searchBox.classList.remove('active');
    desktopNav.style.display = 'flex';
  }
});
   const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
   const mobileNav = document.querySelector('.mobile-nav');
   
   mobileMenuToggle.addEventListener('click', function() {
       mobileNav.classList.toggle('active');

       const spans = this.querySelectorAll('span');
       spans.forEach(span => span.classList.toggle('active'));
       
       if (spans[0].classList.contains('active')) {
           spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
           spans[1].style.opacity = '0';
           spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
       } else {
           spans[0].style.transform = 'none';
           spans[1].style.opacity = '1';
           spans[2].style.transform = 'none';
       }
   });

  // Product Gallery
  const mainImage = document.getElementById("main-product-image");
  const thumbnails = document.querySelectorAll(".thumbnail");
  const galleryDots = document.querySelectorAll(".gallery-dots .dot");
  const prevArrow = document.querySelector(".gallery-controls .prev");
  const nextArrow = document.querySelector(".gallery-controls .next");

  let currentImageIndex = 0;
  const totalImages = thumbnails.length;

  function updateMainImage(index) {

    currentImageIndex = index;

    const imageUrl = thumbnails[index].getAttribute("data-image");
    mainImage.src = imageUrl;

    thumbnails.forEach((thumb) => thumb.classList.remove("active"));
    thumbnails[index].classList.add("active");

    galleryDots.forEach((dot) => dot.classList.remove("active"));
    galleryDots[index].classList.add("active");
  }

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      updateMainImage(index);
    });
  });


  galleryDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      updateMainImage(index);
    });
  });


  if (prevArrow && nextArrow) {
    prevArrow.addEventListener("click", () => {
      let newIndex = currentImageIndex - 1;
      if (newIndex < 0) newIndex = totalImages - 1;
      updateMainImage(newIndex);
    });

    nextArrow.addEventListener("click", () => {
      let newIndex = currentImageIndex + 1;
      if (newIndex >= totalImages) newIndex = 0;
      updateMainImage(newIndex);
    });
  }


  const flavorRadios = document.querySelectorAll('input[name="flavor"]');
  const purchaseRadios = document.querySelectorAll('input[name="purchase"]');
  const addToCartBtn = document.getElementById("add-to-cart");

  const productUrls = {
    original: {
      "one-time": "/cart/add?product=original-one-time",
      subscription: "/cart/add?product=original-subscription",
      bundle: "/cart/add?product=original-bundle",
    },
    cacao: {
      "one-time": "/cart/add?product=cacao-one-time",
      subscription: "/cart/add?product=cacao-subscription",
      bundle: "/cart/add?product=cacao-bundle",
    },
    matcha: {
      "one-time": "/cart/add?product=matcha-one-time",
      subscription: "/cart/add?product=matcha-subscription",
      bundle: "/cart/add?product=matcha-bundle",
    },
  };


  function updateAddToCartButton() {
    const selectedFlavor = document.querySelector('input[name="flavor"]:checked').value;
    const selectedPurchase = document.querySelector('input[name="purchase"]:checked').value;


    const cartUrl = productUrls[selectedFlavor][selectedPurchase];
    addToCartBtn.setAttribute("data-url", cartUrl);

    if (selectedPurchase === "subscription") {
      addToCartBtn.textContent = "Subscribe Now";
    } else if (selectedPurchase === "bundle") {
      addToCartBtn.textContent = "Add Bundle to Cart";
    } else {
      addToCartBtn.textContent = "Add to Cart";
    }
  }


  flavorRadios.forEach((radio) => {
    radio.addEventListener("change", updateAddToCartButton);
  });

  purchaseRadios.forEach((radio) => {
    radio.addEventListener("change", updateAddToCartButton);
  });


  if (addToCartBtn) {
    updateAddToCartButton();

    addToCartBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const url = this.getAttribute("data-url");
      console.log("Adding to cart with URL:", url);

      alert("Product added to cart!");
    });
  }


  const testimonialCards = document.querySelectorAll(".testimonial-card");
  const prevButton = document.querySelector(".nav-arrow.prev");
  const nextButton = document.querySelector(".nav-arrow.next");
  const dots = document.querySelectorAll(".dot");

  let currentTestimonialIndex = 0;
  const totalTestimonials = testimonialCards.length;


  function updateTestimonialSlider(index) {
    currentTestimonialIndex = index;


    const testimonialsTrack = document.querySelector(".testimonials-track");
    testimonialsTrack.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }


  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      updateTestimonialSlider(index);
    });
  });


  if (prevButton && nextButton) {
    prevButton.addEventListener("click", () => {
      let newIndex = currentTestimonialIndex - 1;
      if (newIndex < 0) newIndex = totalTestimonials - 1;
      updateTestimonialSlider(newIndex);
    });

    nextButton.addEventListener("click", () => {
      let newIndex = currentTestimonialIndex + 1;
      if (newIndex >= totalTestimonials) newIndex = 0;
      updateTestimonialSlider(newIndex);
    });
  }


const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', function() {

      const faqItem = this.parentElement;
      

      faqItem.classList.toggle('active');
      

      const toggleBtn = this.querySelector('.toggle-btn');
      toggleBtn.classList.toggle('active');
  });
});


  const statNumbers = document.querySelectorAll(".stats-row .stat-number");
  let countersStarted = false;

  function startCounters() {
    if (countersStarted) return;

    statNumbers.forEach((statNumber) => {
      const target = Number.parseInt(statNumber.getAttribute("data-target"));
      let count = 0;
      const duration = 2000; 
      const interval = duration / target;

      const counter = setInterval(() => {
        count++;
        statNumber.textContent = count + "%";

        if (count >= target) {
          clearInterval(counter);
        }
      }, interval);
    });

    countersStarted = true;
  }

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }


  const statsSection = document.getElementById("stats-section");

  function checkStatsVisibility() {
    if (isInViewport(statsSection)) {
      startCounters();
      window.removeEventListener("scroll", checkStatsVisibility);
    }
  }

  window.addEventListener("scroll", checkStatsVisibility);
  window.addEventListener("load", checkStatsVisibility);


  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: "smooth",
        });

 
        if (mobileNav.classList.contains("active")) {
          mobileNav.classList.remove("active");
        }
      }
    });
  });


  const newsletterForm = document.querySelector(".newsletter-form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      if (!email || !isValidEmail(email)) {
        emailInput.style.borderColor = "red";
        return;
      }

      emailInput.style.borderColor = "green";
      emailInput.value = "";

      const successMessage = document.createElement("div");
      successMessage.textContent = "Thank you for subscribing!";
      successMessage.style.color = "white";
      successMessage.style.marginTop = "10px";

      this.appendChild(successMessage);

      setTimeout(() => {
        successMessage.remove();
      }, 3000);
    });
  }

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
