const teachers = [
  {
    name: "Ravi Sharma",
    subject: "Mathematics Teacher",
    degree: "M.Sc, B.Ed",
    experience: "5+ Years",
    phone: "9876543210",
    image: "demodp2.jpg",
    medium: "english",
    classGroup: "11-12th"
  },
  {
    name: "Neha Gupta",
    subject: "Physics Teacher",
    degree: "M.Sc Physics, B.Ed",
    experience: "6+ Years",
    phone: "9123456780",
    image: "demodp2.jpg",
    medium: "english",
    classGroup: "11-12th"
  },
  {
    name: "Amit Verma",
    subject: "Chemistry Teacher",
    degree: "M.Sc Chemistry",
    experience: "4+ Years",
    phone: "9012345678",
    image: "demodp2.jpg",
    medium: "english",
    classGroup: "11-12th"
  },
  {
    name: "Pooja Singh",
    subject: "Biology Teacher",
    degree: "M.Sc Biology",
    experience: "3+ Years",
    phone: "9988776655",
    image: "demodp2.jpg",
    medium: "english",
    classGroup: "11-12th"
  },

  {
    name: "Suresh Kumar",
    subject: "Hindi Teacher",
    degree: "M.A Hindi, B.Ed",
    experience: "8+ Years",
    phone: "8899776655",
    image: "demodp2.jpg",
    medium: "hindi",
    classGroup: "11-12th"
  },
  {
    name: "Kavita Mishra",
    subject: "History Teacher",
    degree: "M.A History",
    experience: "5+ Years",
    phone: "8765432109",
    image: "demodp2.jpg",
    medium: "hindi",
    classGroup: "11-12th"
  },

  {
    name: "Rahul Yadav",
    subject: "Mathematics Teacher",
    degree: "B.Sc, B.Ed",
    experience: "4+ Years",
    phone: "7894561230",
    image: "demodp2.jpg",
    medium: "english",
    classGroup: "8-9-10th"
  },
  {
    name: "Sneha Kapoor",
    subject: "English Teacher",
    degree: "M.A English",
    experience: "3+ Years",
    phone: "9988112233",
    image: "demodp2.jpg",
    medium: "english",
    classGroup: "8-9-10th"
  },
  {
    name: "Deepak Joshi",
    subject: "Science Teacher",
    degree: "B.Sc",
    experience: "2+ Years",
    phone: "9090909090",
    image: "demodp2.jpg",
    medium: "english",
    classGroup: "8-9-10th"
  },

  {
    name: "Ramesh Meena",
    subject: "Maths Teacher",
    degree: "B.Sc, B.Ed",
    experience: "6+ Years",
    phone: "8877665544",
    image: "demodp2.jpg",
    medium: "hindi",
    classGroup: "8-9-10th"
  },
  {
    name: "Sunita Devi",
    subject: "Social Science Teacher",
    degree: "M.A",
    experience: "7+ Years",
    phone: "7766554433",
    image: "demodp2.jpg",
    medium: "hindi",
    classGroup: "8-9-10th"
  },

  {
    name: "Anjali Sharma",
    subject: "Primary Teacher",
    degree: "D.El.Ed",
    experience: "5+ Years",
    phone: "6655443322",
    image: "demodp2.jpg",
    medium: "english",
    classGroup: "play-7th"
  },
  {
    name: "Vikas Jain",
    subject: "Computer Teacher",
    degree: "BCA",
    experience: "2+ Years",
    phone: "5544332211",
    image: "demodp2.jpg",
    medium: "english",
    classGroup: "play-7th"
  },

  {
    name: "Geeta Sharma",
    subject: "Primary Teacher",
    degree: "B.Ed",
    experience: "6+ Years",
    phone: "4433221100",
    image: "demodp2.jpg",
    medium: "hindi",
    classGroup: "play-7th"
  },
  {
    name: "Mohan Lal",
    subject: "Drawing Teacher",
    degree: "Fine Arts Diploma",
    experience: "4+ Years",
    phone: "3322110099",
    image: "demodp2.jpg",
    medium: "hindi",
    classGroup: "play-7th"
  }
]


teachers.forEach((teacher) => {
  // create correct container id
  const containerId = 
    (teacher.medium === "english" ? "e-" : "h-") + teacher.classGroup;

  const container = document.getElementById(containerId);

  if (!container) return; // safety check

  const card = document.createElement("div");
  card.classList.add("teacher-card");

  card.innerHTML = `
    <img src="${teacher.image}" alt="${teacher.name}">
    <h3>${teacher.name}</h3>
    <p class="subject">${teacher.subject}</p>
    <div class="info">
      <p>🎓 ${teacher.degree}</p>
      <p>🧑‍🏫 ${teacher.experience}</p>
    </div>
  `;

  container.appendChild(card);
});