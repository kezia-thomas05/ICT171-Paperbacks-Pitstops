const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

async function refreshStatus() {
  try {
    const res = await fetch('/status.json');
    const data = await res.json();

    document.getElementById("statusBox").innerText =
      `Uptime: ${data.uptime}
Memory: ${data.memory}
Disk: ${data.disk}`;

  } catch (err) {
    document.getElementById("statusBox").innerText =
      "Server data unavailable";
  }
}

window.addEventListener("DOMContentLoaded", refreshStatus);
