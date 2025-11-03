const users = [
  {
    name: "Ajay Sharma",
    pic: "https://cdn.pixabay.com/photo/2023/06/16/15/10/man-8068201_1280.jpg",
    bio: "A passionate student learning MERN stack, mobile app development, and advanced Java."
  },
  {
    name: "Priya Verma",
    pic: "https://pikaso.cdnpk.net/private/production/2305705389/upload.png?token=exp=1762387200~hmac=d59989d9fbc8f767b372e08440e84b12159842747fcd72bcbd1660f764e11a86&preview=1&w=450",
    bio: "Frontend developer who loves working with React and building beautiful user interfaces."
  },
  {
    name: "Rahul Mehta",
    pic: "https://pikaso.cdnpk.net/private/production/2507614845/render.jpeg?token=exp=1762387200~hmac=1c805a575e9154ba815129239d40f2cf17aa0d566b158f2759ceffbafdd567c7&preview=1&w=450",
    bio: "Backend engineer specializing in Node.js and MongoDB with a focus on scalable systems."
  },
  {
    name: "Sneha Kapoor",
    pic: "https://cdn.pixabay.com/photo/2024/05/06/03/26/ai-generated-8742334_1280.jpg",
    bio: "UI/UX designer creating modern and intuitive user experiences for mobile apps."
  },
  {
    name: "Rohit Singh",
    pic: "https://cdn.pixabay.com/photo/2021/07/11/17/51/man-6404478_1280.jpg",
    bio: "Full-stack developer interested in cloud computing and microservices architecture."
  },
  {
    name: "Neha Joshi",
    pic: "https://cdn.pixabay.com/photo/2024/04/24/21/36/ai-generated-8718610_1280.jpg",
    bio: "Mobile app developer skilled in React Native and Flutter with a love for innovation."
  },
  {
    name: "Ankit Kumar",
    pic: "https://cdn.pixabay.com/photo/2022/10/10/19/18/mad-scientist-7512538_1280.jpg",
    bio: "Java developer exploring Spring Boot and RESTful API development."
  },
  {
    name: "Ritika Sharma",
    pic: "https://cdn.pixabay.com/photo/2024/04/20/14/52/golden-floral-lady-8708772_1280.jpg",
    bio: "Data enthusiast learning machine learning and data visualization techniques."
  },
  {
    name: "Vikas Yadav",
    pic: "https://cdn.pixabay.com/photo/2023/03/13/11/19/elderly-man-7849620_1280.jpg",
    bio: "DevOps learner experimenting with CI/CD pipelines and Docker containers."
  },
  {
    name: "Kiran Patel",
    pic: "https://cdn.pixabay.com/photo/2023/07/10/15/56/ai-generated-8118606_1280.png",
    bio: "Software tester who enjoys ensuring software quality through automation and manual testing."
  }
];

// ===== Selectors =====
const cardsContainer = document.querySelector(".cards");
const input = document.querySelector("input");

// ===== Function to Create One Card =====
function createCardElement(user) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${user.pic}" alt="${user.name}" class="bg-img">
    <div class="blurred-layer" style="background-image: url(${user.pic});"></div>
    <div class="content">
      <h3>${user.name}</h3>
      <p>${user.bio}</p>
    </div>
  `;

  return card;
}

// ===== Function to Render All Cards =====
function renderCards(userArray) {
  cardsContainer.innerHTML = ""; // Clear previous cards
  const fragment = document.createDocumentFragment(); // Faster DOM updates

  userArray.forEach(user => {
    fragment.appendChild(createCardElement(user));
  });

  cardsContainer.appendChild(fragment);
}

// ===== Initial Render =====
renderCards(users);

// ===== Input Filter Logic =====
input.addEventListener("input", e => {
  const searchValue = e.target.value.trim().toLowerCase();

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchValue)
  );

  renderCards(filteredUsers);
});
