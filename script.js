function searchIllness() {
  const illness = document.getElementById("searchInput").value.toLowerCase();
  sessionStorage.setItem("illness", illness);
  window.location.href = "hospitals.html";
}
