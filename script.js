document.getElementById("lastUpdated").textContent = record.lastUpdated;
document.getElementById("totalDay").textContent = record.total.day;
document.getElementById("totalNight").textContent = record.total.night;

const summary = document.getElementById("summary");
const stageList = document.getElementById("stageList");

record.stages.forEach((stage) => {
  summary.innerHTML += `
    <article class="summary-card">
      <img src="${stage.badge}" alt="${stage.name}" class="badge" />
      <h3>${stage.name}</h3>
      <p>
        <span class="day-text">☀️ ${stage.dayScore}</span>
        <span>/</span>
        <span class="night-text">🌙 ${stage.nightScore}</span>
      </p>
    </article>
  `;

  stageList.innerHTML += `
    <article class="stage-card">
      <div class="stage-info">
        <div class="stage-title">
          <img src="${stage.badge}" alt="${stage.name}" class="mini-badge" />
          <div>
            <h3>${stage.name}</h3>
            <p>
              <span class="day-text">昼 ☀️ ${stage.dayScore}</span>
              <span class="night-text">夜 🌙 ${stage.nightScore}</span>
            </p>
            <small>更新日：${record.lastUpdated}</small>
          </div>
        </div>
        <img src="${stage.stageImage}" alt="${stage.name}のステージ画像" class="stage-image" />
      </div>

      <div class="result-grid">
        <div class="result-card day-result">
          <div class="result-label">昼 ☀️ Day Result</div>
          <img src="${stage.dayResult}" alt="${stage.name} 昼リザルト" />
        </div>
        <div class="result-card night-result">
          <div class="result-label">夜 🌙 Night Result</div>
          <img src="${stage.nightResult}" alt="${stage.name} 夜リザルト" />
        </div>
      </div>
    </article>
  `;
});

document.getElementById("topBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});