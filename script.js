const $ = (id) => document.getElementById(id);

const imagePath = (key, type) => {
  const ext = type === "badge" ? "png" : "jpg";
  return `${key}-${type}.${ext}`;
};

const createImage = (src, alt, className) => {
  return `
    <img 
      src="${src}" 
      alt="${alt}" 
      class="${className}" 
      loading="lazy"
      onerror="this.closest('.image-block')?.remove(); this.remove();"
    />
  `;
};

$("totalDay").textContent = record.total.day;
$("totalNight").textContent = record.total.night;

const summary = $("summary");
const stageList = $("stageList");

record.stages.forEach((stage) => {
  const badge = imagePath(stage.key, "badge");
  const stageImg = imagePath(stage.key, "stage");
  const dayImg = imagePath(stage.key, "day");
  const nightImg = imagePath(stage.key, "night");

  summary.innerHTML += `
    <a class="summary-card" href="#${stage.key}">
      <div class="image-block">
        ${createImage(badge, stage.name, "badge")}
      </div>
      <div class="summary-name">
        <span>${stage.short}</span>
        <strong>${stage.name}</strong>
      </div>
      <div class="summary-score">
        <span class="day-text">☀️ ${stage.day}</span>
        <span class="night-text">🌙 ${stage.night}</span>
      </div>
    </a>
  `;

  stageList.innerHTML += `
    <article class="stage-card" id="${stage.key}">
      <header class="stage-header">
        <div class="stage-title">
          <div class="image-block">
            ${createImage(badge, stage.name, "mini-badge")}
          </div>
          <div>
            <p>${stage.short}</p>
            <h3>${stage.name}</h3>
          </div>
        </div>

        <div class="stage-score">
          <div class="score-pill day-pill">☀️ ${stage.day}</div>
          <div class="score-pill night-pill">🌙 ${stage.night}</div>
        </div>
      </header>

      <div class="image-block">
        ${createImage(stageImg, `${stage.name} ステージ画像`, "stage-image")}
      </div>

      <div class="results">
        <section class="result-card">
          <div class="result-label day-label">☀️ 昼リザルト</div>
          <div class="image-block">
            ${createImage(dayImg, `${stage.name} 昼リザルト`, "result-image")}
          </div>
        </section>

        <section class="result-card">
          <div class="result-label night-label">🌙 夜リザルト</div>
          <div class="image-block">
            ${createImage(nightImg, `${stage.name} 夜リザルト`, "result-image")}
          </div>
        </section>
      </div>
    </article>
  `;
});

const topBtn = $("topBtn");
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});