
const toppers = [
  {
    name: "sharad rajput",
    class: "Class 12",
    subject: "Science",
    marks: "90.4%",
    image: "demodp.jpg",
    year: "2025-26"
  },
    {
    name: "sharad rajput",
    class: "Class 12",
    subject: "Science",
    marks: "90.4%",
    image: "demodp.jpg",
    year: "2025-26"
  },
  {
    name: "Riya Verma",
    class: "Class 10",
    subject: "",
    marks: "96%",
    image: "demodp.jpg",
    year: "2024-25"
  },
  {
    name: "Sohan Kumar",
    class: "Class 12",
    subject: "Commerce",
    marks: "95%",
    image: "demodp.jpg",
    year: "2025-26"
  }
];

// Subject priority
const subjectOrder = ["Science", "Commerce", "Arts"];

// Sort by Year → Subject
toppers.sort((a, b) => {
  const yearCompare = b.year.localeCompare(a.year);
  if (yearCompare !== 0) return yearCompare;

  return subjectOrder.indexOf(a.subject) - subjectOrder.indexOf(b.subject);
});

// Class mapping
const classMap = {
  "Class 12": "class-12",
  "Class 10": "class-10"
};

// Generate cards
toppers.forEach(student => {
  const container = document.getElementById(classMap[student.class]);

  const card = document.createElement("div");
  card.classList.add("topper-card");

  card.innerHTML = `
    <p>${student.year}</p>
    <img src="${student.image}" alt="${student.name}">
    <h3>${student.name}</h3>
    <p class="class">
      ${student.class} ${student.subject ? "- " + student.subject : ""}
    </p>

    <div class="marks">
      <span>${student.marks}</span>
    </div>

  `;

  container.appendChild(card);
});

  const buttons = document.querySelectorAll(".toggle-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const container = btn.nextElementSibling;

      // close others
      document.querySelectorAll(".topper-cards").forEach(div => {
        if (div !== container) {
          div.classList.remove("active");
        }
      });

      // toggle current
      container.classList.toggle("active");
    });
  });