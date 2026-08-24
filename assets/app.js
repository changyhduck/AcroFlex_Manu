const chapters = [
  {
    id: "1", number: "1.", title: "AcroCube 超融合主機說明", level: 1,
    keywords: "AcroCube 硬體 伺服器 超融合主機",
    lead: "認識 AcroCube 超融合主機的定位、型號與硬體組成。",
    body: `<p>AcroCube 是 AcroRed 公司超融合主機硬體（伺服器）的英文名稱。AcroFlex 系統可由一台或多台 AcroCube 主機建立。</p><div class="callout"><strong>名詞提示：</strong>描述單一實體伺服器時使用「AcroCube」；描述由主機組成的超融合環境時使用「AcroFlex」。</div>`
  },
  {
    id: "1.1", number: "1.1.", title: "AHC-F3000 超融合主機", level: 2,
    keywords: "AHC F3000 主機 前面板 背面 硬體",
    lead: "AHC-F3000 是 AcroCube 超融合主機系列之一。本節收錄主機外觀與硬體辨識資訊。",
    body: `<h2>主機外觀</h2><p>下列圖片用於辨識 AHC-F3000 主機的前、後側外觀。後續可依實際硬體規格補充連接埠、磁碟槽與指示燈的說明。</p><div class="image-grid"><figure class="figure-card"><img src="screenshots/01-acrocube-overview/01-ahc-f3000/AHC-F3000-12b-front.png" alt="AHC-F3000 12-bay 前視圖"><figcaption>AHC-F3000 12-bay 前視圖</figcaption></figure><figure class="figure-card"><img src="screenshots/01-acrocube-overview/01-ahc-f3000/AHC-F3000-24b-front.png" alt="AHC-F3000 24-bay 前視圖"><figcaption>AHC-F3000 24-bay 前視圖</figcaption></figure><figure class="figure-card"><img src="screenshots/01-acrocube-overview/01-ahc-f3000/AHC-F3000-Back.png" alt="AHC-F3000 後視圖"><figcaption>AHC-F3000 後視圖</figcaption></figure></div>`
  },
  { id: "1.2", number: "1.2.", title: "AHC-F2000 超融合主機", level: 2, keywords: "AHC F2000 主機 硬體", lead: "本節將說明 AHC-F2000 主機的硬體規格與外觀辨識方式。", body: `<div class="empty-state">內容準備中。請提供 AHC-F2000 的產品畫面、規格或操作描述，以建立本節內容。</div>` },
  { id: "2", number: "2.", title: "AcroCube 超融合主機初始化", level: 1, keywords: "初始化 設定 部署 AcroCube", lead: "本章將說明 AcroCube 主機的初始部署與必要設定。", body: `<div class="empty-state">內容準備中。提供初始化流程截圖與操作步驟後，即可在此建立完整說明。</div>` },
  { id: "3", number: "3.", title: "AcroFlex 超融合系統管理", level: 1, keywords: "AcroFlex 管理 叢集 節點 系統", lead: "本章說明 AcroFlex 超融合系統的日常管理功能。", body: `<div class="empty-state">內容準備中。</div>` },
  { id: "4", number: "4.", title: "帳號管理", level: 1, keywords: "帳號 使用者 權限 角色", lead: "本章說明使用者帳號、角色與權限的管理方式。", body: `<div class="empty-state">內容準備中。</div>` },
  { id: "5", number: "5.", title: "雲主機和雲桌面管理", level: 1, keywords: "雲主機 雲桌面 VM VDI 虛擬機", lead: "本章說明雲主機與雲桌面的建立、管理及操作。", body: `<div class="empty-state">內容準備中。</div>` },
  { id: "6", number: "6.", title: "雲主機和雲桌面備份", level: 1, keywords: "備份 還原 雲主機 雲桌面 VM VDI", lead: "本章說明雲主機與雲桌面的備份及還原流程。", body: `<div class="empty-state">內容準備中。</div>` },
  { id: "7", number: "7.", title: "停電防護系統", level: 1, keywords: "停電 防護 UPS 電源", lead: "本章說明停電防護系統的設定與運作方式。", body: `<div class="empty-state">內容準備中。</div>` },
  { id: "8", number: "8.", title: "其他設定", level: 1, keywords: "其他 設定 系統", lead: "本章收錄未歸類於其他章節的系統設定。", body: `<div class="empty-state">內容準備中。</div>` },
  { id: "9", number: "9.", title: "附錄", level: 1, keywords: "附錄 名詞 常見問題", lead: "本章收錄名詞解釋、參考資訊與補充資料。", body: `<div class="empty-state">內容準備中。</div>` }
];

const nav = document.querySelector("#chapter-nav");
const content = document.querySelector("#manual-content");
const search = document.querySelector("#chapter-search");
const searchStatus = document.querySelector("#search-status");

function renderContent(chapter) {
  document.title = `${chapter.number} ${chapter.title}｜AcroFlex 使用手冊`;
  content.innerHTML = `<p class="eyebrow">章節 ${chapter.number}</p><h1>${chapter.number} ${chapter.title}</h1><p class="lead">${chapter.lead}</p><div class="metadata"><span class="tag">AcroFlex 使用手冊</span>${chapter.level === 2 ? '<span class="tag">第 1 章子章節</span>' : '<span class="tag">第一層章節</span>'}</div>${chapter.body}`;
  document.querySelectorAll(".chapter-button").forEach((button) => button.classList.toggle("is-active", button.dataset.id === chapter.id));
  history.replaceState(null, "", `#${chapter.id}`);
}

function selectChapter(id) {
  const chapter = chapters.find((item) => item.id === id) || chapters[1];
  renderContent(chapter);
  content.focus({ preventScroll: true });
}

chapters.forEach((chapter) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `chapter-button level-${chapter.level}`;
  button.dataset.id = chapter.id;
  button.textContent = `${chapter.number} ${chapter.title}`;
  button.addEventListener("click", () => selectChapter(chapter.id));
  nav.append(button);
});

search.addEventListener("input", () => {
  const query = search.value.trim().toLowerCase();
  let results = 0;
  document.querySelectorAll(".chapter-button").forEach((button) => {
    const chapter = chapters.find((item) => item.id === button.dataset.id);
    const matches = !query || `${chapter.number} ${chapter.title} ${chapter.keywords} ${chapter.lead}`.toLowerCase().includes(query);
    button.hidden = !matches;
    if (matches) results += 1;
  });
  searchStatus.textContent = query ? `找到 ${results} 個相關章節` : "";
});

selectChapter(decodeURIComponent(location.hash.slice(1)) || "1.1");
