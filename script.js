/* eslint-disable */

// Mobile Menu appears on clicking the hamburger menu and dissapers on clicking the close button

const btnNavigationElement = document.querySelector(".btn-mobile-nav");
const headerElement = document.querySelector(".header");

btnNavigationElement.addEventListener("click", () => {
  headerElement.classList.toggle("nav-open");
});

// Mobile Menu dissapear on clicking any of the mobile options
const navLinks = document.querySelectorAll(".main-nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    headerElement.classList.remove("nav-open");
  });
});

// Works or Project and Pop up Data

const projectData = [
  {
    imageSrc: "img/vidmix.png",
    title: "VidMix",
    description:
      "A web-based YouTube-like application that provides users with the ability to browse, search and watch videos, as well as see video likes and subscriptions.",
    // desc: "The app provides users with the ability to browse, search and watch videos, as well as see video likes and subscriptions."
    badge1: "React",
    badge2: "JavaScript",
    badge3: "MUI",
    badge4: "YouTube API",
    id: "bg-1",
    demoLink: "https://vid-mix.netlify.app/",
    source: "https://github.com/Johnadibe/mix_video_app",
  },

  {
    imageSrc: "img/bookstore.png",
    title: "BookStore CMS",
    description:
      "A webapp that stores list of books in a redux store and performs post and deletes actions for posting and deleting data to and from a Bookstore API.",
    badge1: "React",
    badge2: "Redux",
    badge3: "JavaScript",
    badge4: "CSS",
    id: "bg-2",
    demoLink: "https://bookstore-app-oi4g.onrender.com/",
    source: "https://github.com/Johnadibe/bookstore-app",
  },

  {
    imageSrc: "img/country-metrics.png",
    title: "Country Metrics",
    description:
      "A Mobile web application offers information about european countries such as their population, area, flag, and other relevant details.",
    // desc: "Users can access a wide range of country-specific information, making it an invaluable resource for personal or professional research purposes."
    badge1: "React",
    badge2: "Redux",
    badge3: "Jest",
    badge4: "CSS",
    id: "bg-3",
    demoLink: "https://country-metrics-app.onrender.com/",
    source: "https://github.com/Johnadibe/country-metrics-app",
  },

  {
    imageSrc: "img/hoobank.png",
    title: "HooBank",
    description:
      "A landing page website that aim to provide visitors with a focused message, a CTA that encourages them to take a desired action.",
    badge1: "React",
    badge2: "JavaScript",
    badge3: "Tailwind CSS",
    badge4: "Aos",
    id: "bg-4",
    demoLink: "https://hoobank-x40v.onrender.com/",
    source: "https://github.com/Johnadibe/hoo_bank",
  },

  {
    imageSrc: "img/spacex.png",
    title: "Space Travellers' Hub",
    description:
      "A web application whose aim is to facilitate a company that provides commercial and scientific space travel services.",
    // desc: "The application gets real live data from the SpaceX API. It allows users to book rockets and join selected space missions."
    badge1: "React",
    badge2: "Redux",
    badge3: "CSS",
    badge4: "SpaceX API",
    id: "bg-5",
    demoLink: "https://space-travelers-hub-bbxn.onrender.com/",
    source: "https://github.com/Johnadibe/space-travelers-hub",
  },

  {
    imageSrc: "img/ecour.png",
    title: "Ecour IT",
    description:
      "This is a landing page website that trains people on IT related fields such as web development, graphic designs, digital marketing, etc",
    badge1: "HTML",
    badge2: "CSS",
    badge3: "JavaScript",
    badge4: "npm",
    id: "bg-6",
    demoLink: "https://johnadibe.github.io",
    source: "https://johnadibe.github.io/ecour-IT/",
  },
];

// Works Section

// const worksSection = document.querySelector(".works-section");

//

// const artPrintingContainer = document.createElement("div");
// artPrintingContainer.classList = "art-printing-container";
// worksSection.appendChild(artPrintingContainer);

const worksSection = document.querySelector(".works-section");
const artPrintingContainer = document.createElement("div");
artPrintingContainer.classList = "art-printing-container";

function createProjectCards(data) {
  data.forEach((project) => {
    const artPrinting = document.createElement("div");
    artPrinting.classList = "art-printing";
    artPrinting.id = `${project.id}`;
    artPrintingContainer.appendChild(artPrinting);

    const artPrintingInner = document.createElement("div");
    artPrintingInner.classList = "art-printing-inner inner-remove";
    artPrinting.appendChild(artPrintingInner);

    const artPrintingHeading = document.createElement("h3");
    artPrintingHeading.classList = "art-printing-heading";
    artPrintingHeading.innerText = project.title;
    artPrintingInner.appendChild(artPrintingHeading);

    const artPrintingDescription = document.createElement("p");
    artPrintingDescription.classList = "art-printing-description";
    artPrintingDescription.innerText = project.description;
    artPrintingInner.appendChild(artPrintingDescription);

    const artPrintingList = document.createElement("ul");
    artPrintingList.classList = "art-printing-list";
    artPrintingInner.appendChild(artPrintingList);

    li = document.createElement("li");
    li.innerText = project.badge1;
    artPrintingList.appendChild(li);
    li = document.createElement("li");
    li.innerText = project.badge2;
    artPrintingList.appendChild(li);
    li = document.createElement("li");
    li.innerText = project.badge3;
    artPrintingList.appendChild(li);
    li = document.createElement("li");
    li.innerText = project.badge4;
    artPrintingList.appendChild(li);

    const btnLarge = document.createElement("button");
    btnLarge.classList = "btn-lg show-pop-up";
    btnLarge.innerHTML = "See Project";
    artPrinting.appendChild(btnLarge);

    btnLarge.addEventListener("click", () => {
      showPopUp(project);
    });

    worksSection.appendChild(artPrintingContainer);
  });
}

function showPopUp(project) {
  const popUp = document.createElement("div");
  popUp.classList = "pop-up hidden";
  worksSection.after(popUp);

  const overlay = document.createElement("div");
  overlay.classList = "overlay hidden";
  popUp.after(overlay);

  const headingBox = document.createElement("div");
  headingBox.classList = "heading-box";
  popUp.appendChild(headingBox);

  const popUpHeading = document.createElement("h2");
  popUpHeading.classList = "pop-up-heading";
  popUpHeading.innerText = project.title;
  headingBox.appendChild(popUpHeading);

  const closeBtn = document.createElement("button");
  closeBtn.classList = "close-pop-up";
  headingBox.appendChild(closeBtn);

  closeBtn.addEventListener("click", () => {
    closePopUp(popUp, overlay);
  });

  document.body.style.overflow = "hidden";

  overlay.addEventListener("click", () => {
    closePopUp(popUp, overlay);
  });

  const closeIcon = document.createElement("img");
  closeIcon.classList = "close-icon";
  closeIcon.src = "img/icon-cancel.svg";
  closeIcon.alt = "Close Pop up Window";
  closeBtn.appendChild(closeIcon);

  const languageList = document.createElement("ul");
  languageList.classList = "language-list";
  popUp.appendChild(languageList);
  li = document.createElement("li");
  li.innerText = project.badge1;
  languageList.appendChild(li);
  li = document.createElement("li");
  li.innerText = project.badge2;
  languageList.appendChild(li);
  li = document.createElement("li");
  li.innerText = project.badge3;
  languageList.appendChild(li);
  li = document.createElement("li");
  li.innerText = project.badge4;
  languageList.appendChild(li);

  const cardWorks = document.createElement("div");
  cardWorks.classList = "card-works";
  popUp.appendChild(cardWorks);

  const img = document.createElement("img");
  img.classList = "card-work-img";
  img.src = project.imageSrc;
  img.alt = "Image of project work";
  cardWorks.appendChild(img);

  const cardWorkText = document.createElement("div");
  cardWorkText.classList = "card-works-text";
  cardWorks.appendChild(cardWorkText);

  const cardWorkDescription = document.createElement("p");
  cardWorkDescription.classList = "card-works-description";
  cardWorkDescription.innerText = project.description;
  cardWorkText.appendChild(cardWorkDescription);

  const action = document.createElement("div");
  action.classList = "action";
  cardWorkText.appendChild(action);

  btnSmall = document.createElement("button");
  btnSmall.classList = "btn-sm";
  btnSmall.innerHTML = `<a href="${project.demoLink}" target="_blank">See Live <img src="img/icon-see-live.svg" alt="See Live Icon Image"/></a>`;
  action.appendChild(btnSmall);

  btnSmall = document.createElement("button");
  btnSmall.classList = "btn-sm";
  btnSmall.innerHTML = `<a href="${project.source}" target="_blank">See Source<img src="img/icon-github-see-source.svg" alt="Github Icon Image"/> </a>`;
  action.appendChild(btnSmall);

  popUp.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.querySelector(".fixed").style.position = "relative";
}

function closePopUp(popUp, overlay) {
  popUp.classList.add("hidden");
  overlay.classList.add("hidden");
  document.querySelector(".fixed").style.position = "fixed";
  document.body.style.overflow = "auto";
}

createProjectCards(projectData);
