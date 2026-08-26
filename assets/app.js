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
    body: `<h2>主機外觀</h2><p>AHC-F3000 為機架式 AcroCube 超融合主機。依儲存組態不同，前面板提供 12-bay 或 24-bay 磁碟槽配置；請以採購規格與主機標籤確認實際型號。</p><div class="hardware-figures"><figure class="figure-card"><img src="manual/01-acrocube-overview/01-ahc-f3000/assets/images/AHC-F3000-12b-front.png" alt="AHC-F3000 12-bay 前面板"><figcaption>圖 1.1-1　AHC-F3000 12-bay 前面板</figcaption></figure><figure class="figure-card"><img src="manual/01-acrocube-overview/01-ahc-f3000/assets/images/AHC-F3000-24b-front.png" alt="AHC-F3000 24-bay 前面板"><figcaption>圖 1.1-2　AHC-F3000 24-bay 前面板</figcaption></figure><figure class="figure-card"><img src="manual/01-acrocube-overview/01-ahc-f3000/assets/images/AHC-F3000-Back.png" alt="AHC-F3000 後面板"><figcaption>圖 1.1-3　AHC-F3000 後面板</figcaption></figure></div><h2>主機規格</h2><table class="feature-table"><thead><tr><th scope="col">項目</th><th scope="col">規格</th></tr></thead><tbody><tr><td>機箱規格</td><td>2U 標準工業機箱。</td></tr><tr><td>電源供應器</td><td>1,100W 以上，1+1 熱備援，支援 110V～220V 電源輸入。</td></tr><tr><td>中央處理器</td><td>AMD EPYC 9004 系列中央處理器，共 2 顆。</td></tr><tr><td>記憶體</td><td>DDR5 ECC Registered，128GB 以上。</td></tr><tr><td>乙太網路</td><td>標準配置：1Gbps RJ45 乙太網路 2 埠、10Gbps 光纖乙太網路 2 埠。選購配置：25Gbps 光纖乙太網路、10Gbps RJ45 乙太網路。</td></tr><tr><td>儲存裝置</td><td>All Flash 組態採用 2.5 吋 SATA 介面資料中心級 SSD；SAS 組態採用 2.5 吋 SAS 介面企業級 10,000RPM 硬碟；快取採用高速資料中心級 SSD。</td></tr><tr><td>作業系統</td><td>AcroFlex dHCI 超融合作業系統。</td></tr></tbody></table><h2>前面板功能</h2><table class="feature-table"><thead><tr><th scope="col">區域</th><th scope="col">功能說明</th></tr></thead><tbody><tr><td>磁碟槽</td><td>安裝資料磁碟或快取磁碟。12-bay 與 24-bay 機型的槽位數不同；每個槽位的狀態燈可協助辨識磁碟活動與異常狀態。</td></tr><tr><td>系統控制與狀態區</td><td>提供電源控制、系統識別及狀態指示功能。維護人員可透過指示燈判斷主機電源或健康狀態；實際燈號定義請以機身標示與出貨文件為準。</td></tr><tr><td>前置服務介面</td><td>前面板配置 USB 與影像服務介面，供現場維護時連接鍵盤、滑鼠或螢幕使用。正常運作期間不建議插拔非必要設備。</td></tr><tr><td>機架把手</td><td>用於主機安裝、抽拉及固定。進行抽拉或搬運前，請確認滑軌已正確安裝並由足夠人力支撐設備重量。</td></tr></tbody></table><div class="callout"><strong>磁碟維護注意：</strong>僅可依 AcroFlex 系統的維護程序更換故障磁碟。請先在管理介面確認故障槽位，勿僅依前面板燈號直接拔除磁碟，以免影響叢集資料可用性。</div><h2>後面板功能</h2><table class="feature-table"><thead><tr><th scope="col">區域</th><th scope="col">功能說明</th></tr></thead><tbody><tr><td>備援電源供應器</td><td>後面板左右兩側配置可熱插拔的電源供應器，提供備援電力。建議分別連接至不同的電源迴路或 UPS，以維持單一路電力異常時的可用性。</td></tr><tr><td>散熱模組</td><td>後方散熱區負責主機排風與溫度控制。請保持進、出風口暢通，避免遮擋或在未關機狀態下任意拆卸散熱元件。</td></tr><tr><td>I/O 與管理連接埠</td><td>中央 I/O 區提供管理、網路與維護用連接埠。連接埠種類及數量會依網路卡與出貨組態而不同，接線前請依機身標籤、網路規劃與實際規格確認。</td></tr><tr><td>擴充卡插槽</td><td>可安裝網路介面或其他擴充卡。新增或更換擴充卡前，請確認相容性、韌體版本與 AcroFlex 叢集維護窗口。</td></tr></tbody></table><h2>操作與接線建議</h2><ol><li>將主機固定於合適的機架與滑軌後，再進行電源與網路接線。</li><li>兩組電源供應器應分接至獨立且具保護機制的電源來源。</li><li>依網路規劃標示管理與資料網路纜線，避免將不同用途的網路接錯。</li><li>初次開機前，確認所有磁碟槽、電源模組與網路線均已牢靠裝妥。</li></ol><div class="callout"><strong>重要：</strong>本節用於硬體辨識與基本接線。各連接埠的精確用途、速率與數量應以 AHC-F3000 實際出貨規格、機身標籤及系統管理員的網路設計為準。</div>`
  },
  { id: "1.2", number: "1.2.", title: "AHC-F2000 超融合主機", level: 2, keywords: "AHC F2000 主機 硬體", lead: "本節將說明 AHC-F2000 主機的硬體規格與外觀辨識方式。", body: `<div class="empty-state">內容準備中。請提供 AHC-F2000 的產品畫面、規格或操作描述，以建立本節內容。</div>` },
  { id: "2", number: "2.", title: "AcroCube 超融合主機初始化", level: 1, keywords: "初始化 設定 部署 AcroCube", lead: "本章將說明 AcroCube 主機的初始部署與必要設定。", body: `<div class="empty-state">內容準備中。提供初始化流程截圖與操作步驟後，即可在此建立完整說明。</div>` },
  {
    id: "2.1", number: "2.1.", title: "登入 AcroCube 管理頁面", level: 2,
    keywords: "登入 AcroCube Client 管理頁面 admin 密碼 IP 位址 https ping",
    lead: "完成硬體安裝並啟動主機後，透過管理網路登入 AcroCube Client，開始進行初始化與系統管理。",
    body: `<h2>前置條件</h2><ul><li>已完成 AcroCube 主機的電源、網路與磁碟安裝。</li><li>主機已開機完成，且管理電腦可連線至 AcroCube 的管理網路。</li><li>具備 AcroCube 管理帳號。出廠預設管理帳號為 <code>admin</code>，預設密碼為 <code>000000</code>。</li><li>若尚未變更網路設定，AcroCube 出廠預設 IP 位址為 <code>192.168.1.88</code>。</li></ul><div class="callout"><strong>安全性提醒：</strong>預設帳密只應用於首次設定。首次成功登入後，請立即變更 <code>admin</code> 密碼，並妥善保管新密碼。</div><h2>登入步驟</h2><ol><li>按下 AcroCube 主機的電源按鈕，等待主機完成開機。</li><li>確認管理電腦與 AcroCube 管理網路連通。可在管理電腦執行下列指令確認是否收到回應：<pre class="command-block"><code>ping 192.168.1.88</code></pre>若主機已改用其他 IP 位址，請將指令中的位址改為該主機目前的管理 IP。</li><li>開啟瀏覽器，在網址列輸入下列網址後按 Enter：<pre class="command-block"><code>https://192.168.1.88</code></pre>若 IP 位址已變更，請以 <code>https://&lt;AcroCube 管理 IP&gt;</code> 取代。</li><li>若瀏覽器顯示憑證或安全性警告，請先確認網址為預期的 AcroCube 管理 IP，且目前使用受信任的管理網路；再依組織的憑證管理政策繼續連線。</li><li>在 AcroCube Client 登入畫面中輸入帳號 <code>admin</code> 與密碼。</li><li>按一下<strong>登入</strong>。</li><li>成功登入後，即可看到 AcroCube Client 管理介面，並可繼續進行網路、磁碟陣列及叢集等初始化設定。</li></ol><h2>登入畫面</h2><figure class="figure-card login-screen"><img src="manual/02-acrocube-initialization/01-login/assets/screenshots/AcroCube_Login_Chinese.png" alt="AcroCube Client 登入畫面"><figcaption>圖 2.1-1　AcroCube Client 登入畫面。畫面中的 IP 位址僅為範例，實際登入時請使用目標主機的管理 IP。</figcaption></figure><h2>注意事項</h2><ul><li>請使用 <code>https://</code> 存取管理介面，避免在不受信任的網路傳送管理帳密。</li><li>若 <code>ping</code> 無回應，請先確認主機已完成開機、網路線已連接、管理電腦與主機位於可互通的網段，以及 IP 位址是否已被變更。</li><li>除非使用個人專屬且受管理的裝置，否則不建議勾選登入畫面的「記住我」。</li><li>請勿在公開或非受管控的電腦上儲存 AcroCube 管理帳號與密碼。</li></ul>`
  },
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
  const parentChapter = chapter.number.split(".")[0];
  content.innerHTML = `<p class="eyebrow">章節 ${chapter.number}</p><h1>${chapter.number} ${chapter.title}</h1><p class="lead">${chapter.lead}</p><div class="metadata"><span class="tag">AcroFlex 使用手冊</span>${chapter.level === 2 ? `<span class="tag">第 ${parentChapter} 章子章節</span>` : '<span class="tag">第一層章節</span>'}</div>${chapter.body}`;
  const sectionHeadings = [...content.querySelectorAll("h2")];
  const specificationsHeading = sectionHeadings.find((heading) => heading.textContent === "主機規格");
  const appearanceHeading = sectionHeadings.find((heading) => heading.textContent === "主機外觀");
  if (specificationsHeading && appearanceHeading) {
    const specificationsTable = specificationsHeading.nextElementSibling;
    content.insertBefore(specificationsHeading, appearanceHeading);
    content.insertBefore(specificationsTable, appearanceHeading);
    if (chapter.id === "1.1") {
      const powerPlanning = document.createElement("section");
      powerPlanning.innerHTML = `<h2>供電規劃</h2><p>AHC-F3000 配置 1,100W 以上、1+1 熱備援電源供應器。兩組電源供應器在正常情況下可共同分攤負載；但任一電源、PDU、UPS 或供電迴路異常時，另一組必須能獨立供應整台主機的完整負載。</p><table class="feature-table"><thead><tr><th scope="col">規劃項目</th><th scope="col">建議</th></tr></thead><tbody><tr><td>每迴路容量</td><td>每一條供電迴路應可獨立提供至少 1,100W；建議預留至少 20% 餘裕，以每台主機每迴路 1.32kW 進行容量規劃。</td></tr><tr><td>110V 供電參考</td><td>以 1,100W 計算的理論電流約為 10A；保留 20% 餘裕後約為 12A。若該迴路沒有其他負載，建議每迴路至少使用 15A 以上專用迴路。</td></tr><tr><td>220V 供電參考</td><td>以 1,100W 計算的理論電流約為 5A；保留 20% 餘裕後約為 6A。若該迴路沒有其他負載，建議每迴路至少使用 10A 以上專用迴路。</td></tr><tr><td>雙迴路接法</td><td>電源供應器 A 應接至迴路／UPS／PDU A；電源供應器 B 應接至獨立的迴路／UPS／PDU B。兩者不得共用同一斷路器、同一 UPS 或同一 PDU 的單一上游電源。</td></tr><tr><td>多主機估算</td><td>若有 N 台 AHC-F3000，每個迴路建議容量至少為 N × 1.32kW；並將網路設備、儲存設備及其他同迴路負載一併納入 UPS 與迴路容量計算。</td></tr></tbody></table><div class="callout"><strong>安裝前確認：</strong>1,100W 為電源供應器額定功率，實際輸入電流還會受電源效率、功率因數、磁碟與擴充卡組態影響。最終迴路、插座、UPS 與 PDU 規格應以電源供應器銘牌的輸入額定值、實際組態及合格電氣人員的評估為準。</div>`;
      content.insertBefore(powerPlanning, appearanceHeading);
    }
  }
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
