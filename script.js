// Mobile Menu appears on clicking the hamburger menu and dissapers on clicking the close button

const btnNavigationElement = document.querySelector('.btn-mobile-nav');
const headerElement = document.querySelector('.header');

btnNavigationElement.addEventListener('click', () => {
  headerElement.classList.toggle('nav-open');
});

// Mobile Menu dissapear on clicking any of the mobile options
const navLinks = document.querySelectorAll('.main-nav-link');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    headerElement.classList.remove('nav-open');
  });
});

// Works or Project and Pop up Data

const projectData = [{
  imageSrc: 'img/post-stories.svg',
  title: 'Multi-Post Stories',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
  badge1: 'css',
  badge2: 'Html',
  badge3: 'bootstrap',
  badge4: 'Ruby',
},
{
  title: 'Profesional Art Printing Data',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
  badge1: 'html',
  badge2: 'bootstrap',
  badge3: 'Ruby',
  id: 'bg-1',
},

{
  title: 'Profesional Art Printing Data',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
  badge1: 'html',
  badge2: 'bootstrap',
  badge3: 'Ruby',
  id: 'bg-2',
},

{
  title: 'Profesional Art Printing Data',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
  badge1: 'html',
  badge2: 'bootstrap',
  badge3: 'Ruby',
  id: 'bg-3',
},

{
  title: 'Profesional Art Printing Data',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
  badge1: 'html',
  badge2: 'bootstrap',
  badge3: 'Ruby',
  id: 'bg-4',
},

{
  title: 'Profesional Art Printing Data',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
  badge1: 'html',
  badge2: 'bootstrap',
  badge3: 'Ruby',
  id: 'bg-5',
},

{
  title: 'Profesional Art Printing Data',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
  badge1: 'html',
  badge2: 'bootstrap',
  badge3: 'Ruby',
  id: 'bg-6',
},
{
  imageSrc: 'img/snapshoot-portfolio.svg',
  title: 'Multi Post Stories',
  badge1: 'Html',
  badge2: 'Bootstrap',
  badge3: 'Ruby on Rails',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ",
  demoLink: 'https://johnadibe.github.io',
  source: 'https://github.com/Johnadibe/Johnadibe.github.io',

},
];

// Works Section

const worksSection = document.querySelector('.works-section');
const postStories = document.createElement('div');
postStories.classList = 'post-stories';
worksSection.appendChild(postStories);

const image = document.createElement('img');
image.src = projectData[0].imageSrc;
postStories.appendChild(image);

const postTextBox = document.createElement('div');
postTextBox.classList = 'post-text-box';
postStories.appendChild(postTextBox);

const postStoriesHeading = document.createElement('h3');
postStoriesHeading.classList = 'post-stories-heading';
postStoriesHeading.innerText = projectData[0].title;
postTextBox.appendChild(postStoriesHeading);

const postStoriesDescription = document.createElement('p');
postStoriesDescription.classList = 'post-stories-description';
postStoriesDescription.innerText = projectData[0].description;
postTextBox.appendChild(postStoriesDescription);

const worksList = document.createElement('ul');
worksList.classList = 'works-list';
postTextBox.appendChild(worksList);

let li = document.createElement('li');
li.innerText = projectData[0].badge1;
worksList.appendChild(li);
li = document.createElement('li');
li.innerText = projectData[0].badge2;
worksList.appendChild(li);
li = document.createElement('li');
li.innerText = projectData[0].badge3;
worksList.appendChild(li);
li = document.createElement('li');
li.innerText = projectData[0].badge4;
worksList.appendChild(li);

let btnSmall = document.createElement('button');
btnSmall.classList = 'btn-sm show-pop-up';
btnSmall.innerHTML = 'See Project';
postTextBox.appendChild(btnSmall);

//

const artPrintingContainer = document.createElement('div');
artPrintingContainer.classList = 'art-printing-container';
worksSection.appendChild(artPrintingContainer);

for (let i = 1; i < projectData.length - 1; i += 1) {
  const artPrinting = document.createElement('div');
  artPrinting.classList = 'art-printing';
  artPrinting.id = `${projectData[i].id}`;
  artPrintingContainer.appendChild(artPrinting);

  const artPrintingInner = document.createElement('div');
  artPrintingInner.classList = 'art-printing-inner inner-remove';
  artPrinting.appendChild(artPrintingInner);

  const artPrintingHeading = document.createElement('h3');
  artPrintingHeading.classList = 'art-printing-heading';
  artPrintingHeading.innerText = projectData[i].title;
  artPrintingInner.appendChild(artPrintingHeading);

  const artPrintingDescription = document.createElement('p');
  artPrintingDescription.classList = 'art-printing-description';
  artPrintingDescription.innerText = projectData[i].description;
  artPrintingInner.appendChild(artPrintingDescription);

  const artPrintingList = document.createElement('ul');
  artPrintingList.classList = 'art-printing-list';
  artPrintingInner.appendChild(artPrintingList);

  li = document.createElement('li');
  li.innerText = projectData[i].badge1;
  artPrintingList.appendChild(li);
  li = document.createElement('li');
  li.innerText = projectData[i].badge2;
  artPrintingList.appendChild(li);
  li = document.createElement('li');
  li.innerText = projectData[i].badge3;
  artPrintingList.appendChild(li);

  const btnLarge = document.createElement('button');
  btnLarge.classList = 'btn-lg show-pop-up';
  btnLarge.innerHTML = 'See Project';
  artPrinting.appendChild(btnLarge);
}

// pop up section

let popUp = document.createElement('div');
popUp.classList = 'pop-up hidden';
worksSection.after(popUp);

const headingBox = document.createElement('div');
headingBox.classList = 'heading-box';
popUp.appendChild(headingBox);

const popUpHeading = document.createElement('h2');
popUpHeading.classList = 'pop-up-heading';
popUpHeading.innerText = projectData[7].title;
headingBox.appendChild(popUpHeading);

const closeBtn = document.createElement('button');
closeBtn.classList = 'close-pop-up';
headingBox.appendChild(closeBtn);

const closeIcon = document.createElement('img');
closeIcon.classList = 'close-icon';
closeIcon.src = 'img/icon-cancel.svg';
closeIcon.alt = 'Close Pop up Window';
closeBtn.appendChild(closeIcon);

const languageList = document.createElement('ul');
languageList.classList = 'language-list';
popUp.appendChild(languageList);
li = document.createElement('li');
li.innerText = projectData[7].badge1;
languageList.appendChild(li);
li = document.createElement('li');
li.innerText = projectData[7].badge2;
languageList.appendChild(li);
li = document.createElement('li');
li.innerText = projectData[7].badge3;
languageList.appendChild(li);

const cardWorks = document.createElement('div');
cardWorks.classList = 'card-works';
popUp.appendChild(cardWorks);

const img = document.createElement('img');
img.classList = 'card-work-img';
img.src = projectData[7].imageSrc;
img.alt = 'Image of project work';
cardWorks.appendChild(img);

const cardWorkText = document.createElement('div');
cardWorkText.classList = 'card-works-text';
cardWorks.appendChild(cardWorkText);

const cardWorkDescription = document.createElement('p');
cardWorkDescription.classList = 'card-works-description';
cardWorkDescription.innerText = projectData[7].description;
cardWorkText.appendChild(cardWorkDescription);

const action = document.createElement('div');
action.classList = 'action';
cardWorkText.appendChild(action);

btnSmall = document.createElement('button');
btnSmall.classList = 'btn-sm';
btnSmall.innerHTML = `<a href="${projectData[7].demoLink}">See Live <img src="img/icon-see-live.svg" alt="See Live Icon Image"/></a>`;
action.appendChild(btnSmall);

btnSmall = document.createElement('button');
btnSmall.classList = 'btn-sm';
btnSmall.innerHTML = `<a href="${projectData[7].source}">See Source<img src="img/icon-github-see-source.svg" alt="Github Icon Image"/> </a>`;
action.appendChild(btnSmall);

let overlay = document.createElement('div');
overlay.classList = 'overlay hidden';
popUp.after(overlay);

// Handling pop up click events

popUp = document.querySelector('.pop-up');
overlay = document.querySelector('.overlay');
const btnClosePopUp = document.querySelector('.close-pop-up');
const btnShowPopUp = document.querySelectorAll('.show-pop-up');

const showPopUp = function open() {
  popUp.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.querySelector('.fixed').style.position = 'relative';
};

const closePopUp = function close() {
  popUp.classList.add('hidden');
  overlay.classList.add('hidden');
  document.querySelector('.fixed').style.position = 'fixed';
};

for (let i = 0; i < btnShowPopUp.length; i += 1) {
  btnShowPopUp[i].addEventListener('click', showPopUp);
  btnClosePopUp.addEventListener('click', closePopUp);
  overlay.addEventListener('click', closePopUp);
}