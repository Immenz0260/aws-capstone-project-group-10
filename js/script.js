// ===== CLOCK =====
function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent =
    "📍 Ghana Time: " + now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// ===== DARK MODE =====
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

// ===== MOBILE MENU =====
function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// ===== BACK TO TOP =====
const backToTop = document.getElementById("backToTop");

window.onscroll = () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
};

backToTop.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// ===== NEWS DATA =====
const newsData = [
  { title: "Parliament debates new budget", desc: "Key fiscal policies under review", date: "Today" },
  { title: "EC announces voter registration update", desc: "New guidelines released", date: "Yesterday" },
  { title: "President launches road project", desc: "Infrastructure expansion begins", date: "2 days ago" },
  { title: "Youth engagement in politics rises", desc: "New survey shows increased interest", date: "3 days ago" }
];

// Render news
function loadNews() {
  const grid = document.getElementById("newsGrid");
  grid.innerHTML = "";

  newsData.forEach(n => {
    grid.innerHTML += `
      <div class="card">
        <h3>${n.title}</h3>
        <p>${n.desc}</p>
        <small>${n.date}</small>
        <button>Read More</button>
      </div>
    `;
  });
}
loadNews();

// ===== SEARCH =====
function searchNews() {
  const value = document.getElementById("searchInput").value.toLowerCase();
  const filtered = newsData.filter(n =>
    n.title.toLowerCase().includes(value)
  );

  const grid = document.getElementById("newsGrid");
  grid.innerHTML = "";

  filtered.forEach(n => {
    grid.innerHTML += `
      <div class="card">
        <h3>${n.title}</h3>
        <p>${n.desc}</p>
        <small>${n.date}</small>
      </div>
    `;
  });
}

// ===== BREAKING TICKER =====
document.getElementById("tickerText").textContent =
  "Parliament sitting ongoing | Election preparations intensify | Economic policy review underway";

// ===== CHART.JS =====
const ctx = document.getElementById('electionChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['NPP', 'NDC', 'CPP', 'Others'],
    datasets: [{
      label: 'Polling Percentage',
      data: [48, 46, 3, 3],
    }]
  }
});