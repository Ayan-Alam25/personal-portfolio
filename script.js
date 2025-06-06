// Navigation
const pages = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const navLink = document.querySelector(
        `.navigation a[href*=${entry.target.id}]`
      );

      navLink.classList.remove("active");
      entry.isIntersecting && navLink.classList.add("active");
    });
  },
  {
    threshold: 0.5,
  }
);

pages.forEach((page) => {
  observer.observe(page);
});
// End of Navigation

// Landing heading text change
const heading = document.querySelector(".profession span");
const headingTextArr = ["a Frontend", "a Backend", "a Full-Stack", "a UI/UX"];
let i = 0;

setInterval(() => {
  heading.classList.add("change");
  setTimeout(() => {
    heading.textContent = headingTextArr[i];
    heading.classList.remove("change");
  }, 300);
  i++;
  i === 4 && (i = 0);
}, 4000);
// end of Landing heading text change

// My story text show & hide
const landingBtn = document.querySelector(".landing-btn");
const myStory = document.querySelector(".my-story");
const landingImg = document.querySelector(".landing-img");

landingBtn.addEventListener("click", () => {
  landingBtn.lastElementChild.classList.toggle("bx-book-open");
  landingBtn.lastElementChild.classList.toggle("bx-book-alt");

  myStory.classList.toggle("change");
  landingImg.classList.toggle("active");
});
// End of My story text show & hide

// Theme change
const themeIcon = document.querySelector(".logo i");

themeIcon.addEventListener("click", (e) => {
  document.body.classList.toggle("light");

  e.target.classList.toggle("bx-sun");
  e.target.classList.toggle("bx-moon");
});
// End of Theme change

// Loader
// const loader = document.querySelector(".loader");

// window.addEventListener("load", () => {
//   loader.style.animation = "loaderAnim 2s linear forwards";
// });
// End of Loader

document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(e.target.action, {
    method: "POST",
    body: new FormData(e.target),
    headers: { Accept: "application/json" },
  })
    .then(() => {
      alert("Message sent successfully!");
      e.target.reset();
    })
    .catch(() => {
      alert("Error sending message. Please try again.");
    });
});