const container = document.getElementById("membersContainer");
let instructorsData = [];

async function getData() {
  try {
    const response = await fetch("../data/data.json");
    const data = await response.json();
    instructorsData = data.instructors;
    displayInstructors(instructorsData);
  } catch (error) {
    console.error("Error loading instructor data:", error);
  }
}

function displayInstructors(filteredInstructors) {
  container.innerHTML = "";

  filteredInstructors.forEach((instructor) => {
    const instructorDiv = document.createElement("div");
    instructorDiv.classList.add("member");

    instructorDiv.innerHTML = `
            <img src="${instructor.image}" alt="${instructor.name}">
            <h3>${instructor.name}</h3>
            <h4>${instructor.title}</h4>
            <p>${instructor.description}</p>
        `;

    container.appendChild(instructorDiv);
  });
}

function filterMembers(category) {
  if (category === "all") {
    displayInstructors(instructorsData);
  } else {
    const filtered = instructorsData.filter(
      (instructor) => instructor.category === category
    );
    displayInstructors(filtered);
  }
}

window.onload = getData;
