function filterMembers(category) {
  let members = document.querySelectorAll(".member");

  members.forEach((member) => {
    let memberCategory = member.getAttribute("data-category").trim();

    if (category === "all" || memberCategory === category) {
      member.classList.remove("hidden");
    } else {
      member.classList.add("hidden");
    }
  });
}
