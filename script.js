
const translations = {
  en: {
    about: "About Us",
    services: "Services",
    contact: "Contact Us",
    aboutText: "CleanSpace provides professional cleaning services in Tbilisi...",
    service1: "Home Cleaning",
    service2: "Office Cleaning",
    service3: "Post-Renovation Cleanup",
    contactButton: "Send"
  },
  ka: {}
};

document.getElementById("languageSwitcher").addEventListener("change", function() {
  const lang = this.value;
  if (lang === "ka") return location.reload();

  document.querySelector("nav a[href='#about']").innerText = translations[lang].about;
  document.querySelector("nav a[href='#services']").innerText = translations[lang].services;
  document.querySelector("nav a[href='#contact']").innerText = translations[lang].contact;
  document.querySelector("#about h2").innerText = translations[lang].about;
  document.querySelector("#about p").innerText = translations[lang].aboutText;
  document.querySelectorAll(".service-box h3")[0].innerText = translations[lang].service1;
  document.querySelectorAll(".service-box h3")[1].innerText = translations[lang].service2;
  document.querySelectorAll(".service-box h3")[2].innerText = translations[lang].service3;
  document.querySelector("form button").innerText = translations[lang].contactButton;
});
