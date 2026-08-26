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
  {
    id: "2.2", number: "2.2.", title: "管理頁面和系統資訊說明", level: 2,
    keywords: "系統資訊 CPU 記憶體 網路 eth Online Offline 效能 AcroCube Client",
    lead: "登入後可由系統資訊頁面快速確認主機硬體、記憶體與網路介面狀態，再進行初始化設定。",
    body: `<h2>開啟系統資訊頁面</h2><ol><li>登入 AcroCube Client 後，系統預設顯示<strong>系統資訊</strong>頁面。</li><li>若已切換至其他功能，按一下頂端的<strong>系統資訊</strong>，即可回到此頁面。</li></ol><div class="callout"><strong>適用範圍：</strong>本節以圖 2.2-1 說明欄位用途。畫面中的硬體型號、容量、介面數量與數值為範例；實際顯示內容會依 AcroCube 機型與安裝組態而異。</div><h2>頁面功能導覽</h2><table class="feature-table"><thead><tr><th scope="col">項目</th><th scope="col">說明</th></tr></thead><tbody><tr><td>系統資訊</td><td>顯示硬體、記憶體與網路介面狀態。</td></tr><tr><td>系統設定</td><td>進入網路、時間、管理介面與服務等主機設定。</td></tr><tr><td>儲存設定</td><td>進入磁碟、磁碟陣列、快取及磁碟監控等儲存設定。</td></tr><tr><td>建立叢集</td><td>用於建立或設定 AcroFlex 主機雲／叢集。</td></tr><tr><td>例外處理</td><td>用於執行例外或維護情境所需的主機處理作業；執行前應確認影響範圍。</td></tr><tr><td>登出</td><td>結束目前登入工作階段。</td></tr></tbody></table><p>右上角另有狀態指示與快速操作圖示。圖示顏色可協助快速辨識目前狀態；實際圖示功能、燈號意義及可否操作仍應以介面提示、系統版本與相關章節說明為準。</p><h2>資訊與效能頁籤</h2><ul><li><strong>資訊：</strong>顯示 CPU、記憶體與網路介面即時辨識資訊。</li><li><strong>效能：</strong>用於檢視主機效能相關資訊。本截圖未顯示該頁籤內容，因此實際圖表與欄位應以系統畫面為準。</li></ul><p>初始化時應先在「資訊」頁籤核對硬體與網路連線是否符合規劃；完成後再依需要至各設定頁面進行後續操作。</p><h2>CPU 資訊</h2><table class="feature-table"><thead><tr><th scope="col">欄位</th><th scope="col">畫面範例</th><th scope="col">說明</th></tr></thead><tbody><tr><td>CPU 型號</td><td><code>Intel(R) Xeon(R) Gold 6226R CPU ×2</code></td><td>顯示偵測到的處理器型號與安裝數量。實際型號應與採購或出貨規格相符。</td></tr><tr><td>CPU 時脈</td><td><code>2.9 GHz</code></td><td>顯示處理器時脈資訊。時脈會受處理器型號、電源管理與工作負載影響，不能單獨作為效能判斷依據。</td></tr><tr><td>CPU 核數</td><td><code>16C/32T</code></td><td><code>C</code> 代表實體核心，<code>T</code> 代表執行緒。此數值通常是單顆處理器的規格；總可用資源仍應以系統實際辨識結果為準。</td></tr></tbody></table><div class="callout"><strong>核對建議：</strong>若 CPU 型號、數量或核心資訊與設備規格不一致，請先停止後續部署，確認硬體安裝、BIOS 設定及出貨組態。</div><h2>記憶體資訊</h2><table class="feature-table"><thead><tr><th scope="col">欄位</th><th scope="col">畫面範例</th><th scope="col">說明</th></tr></thead><tbody><tr><td>總記憶體容量</td><td><code>263,747,576 KB</code></td><td>顯示作業系統可辨識的總記憶體容量。範例約為 251.5 GiB；與模組標示容量略有差異時，可能與單位換算或系統保留記憶體有關。</td></tr><tr><td>記憶體 1～8</td><td><code>2,934 MHz</code></td><td>顯示各已辨識記憶體模組的時脈。若部分插槽未顯示、時脈不同或容量不足，應檢查模組安裝位置、相容性與 BIOS 設定。</td></tr></tbody></table><p>建立叢集前，請確認總容量符合規劃，且沒有未預期的模組遺失或降速情況。</p><h2>網路資訊</h2><table class="feature-table"><thead><tr><th scope="col">欄位</th><th scope="col">說明</th></tr></thead><tbody><tr><td>介面名稱</td><td>作業系統辨識的網路介面名稱，例如 <code>eth1</code>。實際用途應依網路規劃標示為管理、儲存、叢集或其他網路。</td></tr><tr><td>狀態</td><td><code>Online</code> 表示介面目前偵測到連線；<code>Offline</code> 表示未偵測到連線。</td></tr><tr><td>速度</td><td>顯示目前偵測或協商的連線速率，例如 <code>1,000Mb/s</code>。<code>Unknown!</code> 表示系統無法取得有效速度資訊。</td></tr><tr><td>模式</td><td>顯示介面模式，例如 <code>10,000Base-T/Full</code>。<code>Full</code> 表示全雙工模式，應與網路卡、交換器埠與纜線規格共同判讀。</td></tr></tbody></table><p>圖中 <code>eth1</code> 顯示為 <code>Online</code>，速度為 <code>1,000Mb/s</code>；<code>eth2</code>、<code>eth3</code> 與 <code>eth4</code> 顯示為 <code>Offline</code>，速度為 <code>Unknown!</code>。若規劃中應使用這些介面，請確認纜線、交換器埠、VLAN 與介面設定。</p><div class="callout"><strong>重要：</strong>圖中 <code>eth1</code> 的速度為 <code>1,000Mb/s</code>，但模式欄位顯示 <code>10,000Base-T/Full</code>。兩者應進一步核對，不能直接假設連線已符合 10GbE 規劃。請檢查網路卡規格、纜線類型、交換器埠速率與自動協商設定。</div><h2>初始化前檢查清單</h2><ul><li>CPU 型號、處理器數量與記憶體總容量符合主機規格。</li><li>所有已安裝的記憶體模組皆被辨識，且時脈沒有異常差異。</li><li>規劃使用的網路介面為 <code>Online</code>，且速度與網路設計相符。</li><li>未使用的介面已在網路規劃文件中標示，避免後續接線混淆。</li></ul><h2>系統資訊畫面</h2><figure class="figure-card system-info-screen"><img src="manual/02-acrocube-initialization/02-management-system-info/assets/screenshots/AcroCube_Client_System_info_chinese.png" alt="AcroCube Client 系統資訊頁面"><figcaption>圖 2.2-1　AcroCube Client「系統資訊」頁面範例。</figcaption></figure>`
  },
  {
    id: "2.3", number: "2.3.", title: "設定網路", level: 2,
    keywords: "網路 IP Mask Gateway DNS VLAN Metric Active Active Standby LACP AcroSAN 虛擬交換機",
    lead: "設定建立 AcroFlex 超融合系統所需的管理與儲存網路，並將實體網路埠指派至對應的虛擬交換機。",
    body: `<div class="callout"><strong>重要：</strong>儲存網路設定後，AcroCube 會重新開機才會套用新設定。請在維護時段進行，並在確認新的管理 IP、交換器設定及登入方式後才按下<strong>確認</strong>。</div><h2>前置條件</h2><ul><li>準備管理網路的 IP 位址、遮罩、閘道與 DNS。</li><li>確認每個虛擬交換機要使用的實體網路埠及其交換器埠。</li><li>若使用 VLAN，準備 VLAN ID 並確認交換器埠已完成相同 VLAN 設定。</li><li>兩台以上 AcroCube 組成主機雲時，建議另建與管理網路不同網段的 AcroSAN 專用網路。</li></ul><h2>網路規劃範例</h2><table class="feature-table"><thead><tr><th scope="col">用途</th><th scope="col">虛擬交換機</th><th scope="col">範例 IP／遮罩</th><th scope="col">閘道與 DNS</th><th scope="col">實體埠</th><th scope="col">Metric</th></tr></thead><tbody><tr><td>AcroCube 管理網路</td><td>虛擬交換機 0</td><td><code>192.168.95.107</code>／<code>255.255.248.0</code></td><td>閘道 <code>192.168.88.1</code>；DNS <code>8.8.8.8</code></td><td><code>eth1</code>、<code>eth2</code></td><td><code>100</code></td></tr><tr><td>AcroSAN 專用網路</td><td>虛擬交換機 1</td><td><code>192.168.200.107</code>／<code>255.255.255.0</code></td><td>可留白</td><td><code>eth3</code>、<code>eth4</code></td><td><code>200</code></td></tr></tbody></table><p>管理網路通常需要預設閘道，才能從其他網段連線。AcroSAN 專用網路若只在同一儲存網段內交換資料，通常不設定預設閘道與 DNS。兩個已啟用虛擬交換機的 IP 網段不得相同。</p><h2>畫面欄位說明</h2><table class="feature-table"><thead><tr><th scope="col">欄位</th><th scope="col">說明</th></tr></thead><tbody><tr><td>類型</td><td>選擇 <code>Active-Standby</code> 或 <code>Active-Active</code> 實體埠綁定方式。</td></tr><tr><td>IP／Mask</td><td>虛擬交換機的 IPv4 位址及所屬網段範圍。</td></tr><tr><td>Gateway／DNS</td><td>需要存取其他網段、外部服務、名稱解析或加入 AD 時設定。</td></tr><tr><td>VLAN</td><td>勾選啟用後輸入 VLAN ID；交換器連接埠必須同時可傳遞該 VLAN。</td></tr><tr><td>Metric</td><td>預設閘道路由優先順序；數值越小，優先權越高。</td></tr><tr><td>Assigned</td><td>已指派給此虛擬交換機的實體埠。至少要有一個埠，虛擬交換機才會啟用。</td></tr><tr><td>Free</td><td>尚未指派的可用實體網路埠；使用箭頭按鈕移至或移出 Assigned。</td></tr></tbody></table><h2>指派實體網路埠</h2><ol><li>在 <strong>Free</strong> 清單選取要使用的實體埠。</li><li>按指向 <strong>Assigned</strong> 的箭頭，將該埠加入虛擬交換機。</li><li>確認所需埠已出現在 <strong>Assigned</strong> 清單。</li></ol><div class="callout"><strong>重要：</strong>虛擬交換機 0 不可停用，<code>Assigned</code> 欄位不得為空白；移除所有埠可能使管理網路失效，導致無法登入 AcroCube Client。</div><h2>選擇綁定類型</h2><table class="feature-table"><thead><tr><th scope="col">類型</th><th scope="col">運作方式</th><th scope="col">優點</th><th scope="col">注意事項</th></tr></thead><tbody><tr><td>Active-Standby</td><td>一個埠主要連線，另一個待命；主要埠失效時切換。</td><td>行為單純、故障切換路徑明確，適合管理網路。</td><td>正常運作時通常只使用主要埠的頻寬。</td></tr><tr><td>Active-Active</td><td>多個已指派埠可同時承擔流量。</td><td>可分散流量並提高整體可用頻寬。</td><td>單一連線不一定能取得所有埠合計頻寬，應依實際流量驗證。</td></tr></tbody></table><p>AcroCube 的 <strong>Active-Active</strong> 不採用 LACP，因此交換器端不需要建立 LACP 或 Link Aggregation 群組。每個實體埠仍必須連接至預期網路，且 VLAN、速率、雙工與交換器埠設定應保持一致；請勿因為使用 Active-Active 而自行在交換器上設定 LACP。</p><h2>設定與套用步驟</h2><ol><li>確認 Assigned 至少包含一個實體埠，並選擇綁定類型。</li><li>輸入 IP 與 Mask。</li><li>依需要輸入 Gateway、DNS、VLAN ID 與 Metric。</li><li>再次核對 IP 網段、實體埠、VLAN 與 Metric。</li><li>按一下<strong>確認</strong>；系統會儲存設定並重新開機。</li><li>等待主機完成開機後，使用新的管理 IP 重新登入。</li><li>回到系統資訊頁面，確認規劃使用的介面為 <code>Online</code>，且速度符合設計。</li></ol><h2>注意事項</h2><ul><li>網路設定錯誤可能使目前工作階段中斷。變更前請記錄原始設定與新的 IP 規劃。</li><li>VLAN ID 必須與交換器埠設定一致；僅在主機端啟用 VLAN 不會自動設定交換器。</li><li><code>Assigned</code> 欄位空白表示該虛擬交換機未啟用，惟虛擬交換機 0 必須保留至少一個指派埠。</li><li>不要將截圖中的 IP、DNS、Metric 或埠指派直接套用至正式環境。</li></ul><h2>IP 設定畫面</h2><figure class="figure-card network-settings-screen"><img src="manual/02-acrocube-initialization/03-network-settings/assets/screenshots/AcroCube_IP_Setting_Chinese.png" alt="AcroCube Client IP 設定畫面"><figcaption>圖 2.3-1　AcroCube Client「IP 設定」頁面範例。</figcaption></figure>`
  },
  {
    id: "2.4", number: "2.4.", title: "建立磁碟陣列", level: 2,
    keywords: "儲存設定 磁碟管理 RAID RAID 1 RAID 5 RAID 6 RAID 7 JBOD 熱備援 Ready Unused",
    lead: "確認可用硬碟、建立 RAID 磁碟陣列，並驗證成員碟與熱備援磁碟的狀態。",
    body: `<div class="callout"><strong>注意：</strong>建立或重新規劃磁碟陣列可能影響所選硬碟上的既有資料。請只選取確認可初始化的未使用硬碟；若硬碟已有資料，請先完成備份並依維運程序處理。</div><h2>前置條件</h2><ul><li>已以具管理權限的帳號登入 AcroCube 管理介面。</li><li>已將規劃使用的硬碟正確安裝至 AcroCube 主機，且可在「磁碟管理」頁面中辨識。</li><li>已確認磁碟的容量、型號與介面符合部署規劃；建議同一陣列使用容量與效能特性相近的磁碟。</li><li>已決定 RAID 等級、資料磁碟數量及熱備援磁碟配置。</li></ul><h2>1. 確認可用磁碟</h2><p>點選「<strong>儲存設定</strong>」後，系統會開啟「磁碟管理」頁面，列出由主機偵測到、可供規劃使用的磁碟。請先核對插槽、狀態、容量、製造商、介面速度、型號與韌體版本；「定位」可協助現場人員確認對應的實體插槽。</p><p>右上角的「<strong>重新整理</strong>」可重新讀取磁碟狀態。NVMe 區域會另外列出所偵測到的 NVMe 磁碟；若顯示 <code>NO NVMe Data</code>，代表該範例環境未偵測到可列出的 NVMe 磁碟。</p><figure class="figure-card storage-screen"><img src="manual/02-acrocube-initialization/04-storage-array/assets/screenshots/1_AcroCube_Storage_Disk_Manager_Chinese.png" alt="AcroCube 磁碟管理頁面"><figcaption>圖 2.4-1　磁碟管理頁面。</figcaption></figure><h2>2. 開啟 RAID 管理頁面</h2><p>在「儲存設定」中點選「<strong>RAID 管理</strong>」。第一次建立時，陣列清單會顯示 <code>Empty</code>，代表尚未建立可用的 RAID 陣列。此時可使用「建立」新增陣列；「擴充」、「定位」、「硬碟資訊」與「刪除」則要在有可操作陣列後才會啟用。</p><figure class="figure-card storage-screen"><img src="manual/02-acrocube-initialization/04-storage-array/assets/screenshots/2_AcroCube_Storage_RAID_Empty_Chinese.png" alt="尚未建立陣列的 RAID 管理頁面"><figcaption>圖 2.4-2　尚未建立陣列的 RAID 管理頁面。</figcaption></figure><h2>3. 開啟建立磁碟陣列對話框</h2><p>點選「<strong>建立</strong>」後，系統會開啟建立磁碟陣列對話框。請先選擇 RAID 級別，再勾選要加入陣列的實體磁碟。系統會依 RAID 級別提示最低磁碟數量；在尚未符合條件前，「確認後開始建立」無法使用。</p><figure class="figure-card storage-screen"><img src="manual/02-acrocube-initialization/04-storage-array/assets/screenshots/3_AcroCube_Storage_RAID_Create_1_Chinese.png" alt="建立磁碟陣列對話框"><figcaption>圖 2.4-3　建立磁碟陣列對話框。</figcaption></figure><h2>4. 選擇 RAID 級別</h2><p>開啟「RAID 級別」下拉選單，可選擇 <code>Single Disk / JBOD</code>、<code>RAID 1</code>、<code>RAID 5</code>、<code>RAID 6</code> 或 <code>RAID 7</code>。請依資料保護需求、可接受的容量利用率與可用硬碟數量選擇。</p><figure class="figure-card storage-screen"><img src="manual/02-acrocube-initialization/04-storage-array/assets/screenshots/4_AcroCube_Storage_RAID_Select_RAID_Level_Chinese.png" alt="RAID 級別下拉選單"><figcaption>圖 2.4-4　RAID 級別下拉選單。</figcaption></figure><table class="feature-table"><thead><tr><th scope="col">RAID 級別</th><th scope="col">一般最低磁碟數</th><th scope="col">特性與限制</th></tr></thead><tbody><tr><td>Single Disk / JBOD</td><td>1</td><td>保留單碟容量，但不提供 RAID 層級容錯保護。</td></tr><tr><td>RAID 1</td><td>2</td><td>以鏡像提供資料冗餘；可用容量受單一成員碟容量限制。</td></tr><tr><td>RAID 5</td><td>3</td><td>兼顧容量利用率與單一磁碟故障保護；可承受 1 顆成員碟故障。</td></tr><tr><td>RAID 6</td><td>4</td><td>使用雙重同位元校驗；容量利用率較 RAID 5 低，但可提供較高故障容忍度。</td></tr><tr><td>RAID 7</td><td>5</td><td>ZFS 專屬 RAID 7，具三容錯能力，適合高密度、大容量硬碟陣列的多碟重建情境。</td></tr></tbody></table><div class="callout"><strong>建議：</strong>請避免混用容量明顯不同的磁碟。陣列通常以最小成員碟容量為基準；實際可選項目、最低磁碟數與可用容量仍以管理介面與核准的產品部署規格為準。</div><h2>5. 選取磁碟並建立 RAID 5</h2><p>以下以 RAID 5 為例。選擇「<strong>RAID 5</strong>」後，介面會提示至少需選擇三顆磁碟。範例中勾選插槽 1 至 7 的七顆磁碟，插槽 8 保留未選取；核對插槽、容量與狀態均符合規劃後，按下「<strong>確認後開始建立</strong>」。</p><figure class="figure-card storage-screen"><img src="manual/02-acrocube-initialization/04-storage-array/assets/screenshots/5_AcroCube_Storage_RAID_Select_Disks_Chinese.png" alt="選擇 RAID 5 與成員磁碟"><figcaption>圖 2.4-5　選擇 RAID 5 與成員磁碟。</figcaption></figure><p>未被選擇的磁碟會自動成為<strong>熱備援磁碟</strong>。若要保留某顆磁碟作熱備援，請不要勾選它，並確認其容量大於或等於陣列中最小成員碟容量。</p><p>送出建立要求後，系統會顯示「資料處理中，請稍候」。建立期間請等待作業完成，不要關閉管理頁面、重新啟動主機、拔除磁碟或變更儲存設定。</p><figure class="figure-card storage-screen"><img src="manual/02-acrocube-initialization/04-storage-array/assets/screenshots/6_AcroCube_Storage_RAID_Creating_Chinese.png" alt="正在建立磁碟陣列"><figcaption>圖 2.4-6　正在建立磁碟陣列。</figcaption></figure><h2>6. 確認磁碟陣列已建立</h2><p>建立完成後，返回或重新整理「RAID 管理」頁面。當清單顯示 RAID 級別、總容量與狀態 <code>Ready</code>，表示陣列已建立完成。範例顯示 RAID ID <code>1</code>、RAID 5、已使用空間 <code>0.00 GB</code>、總容量 <code>2,649.13 GB</code>；實際容量會依成員碟數量、最小容量、RAID 等級與系統換算方式而不同。</p><figure class="figure-card storage-screen"><img src="manual/02-acrocube-initialization/04-storage-array/assets/screenshots/7_AcroCube_Storage_RAID_Created_Chinese.png" alt="已建立完成的 RAID 5 磁碟陣列"><figcaption>圖 2.4-7　已建立完成的 RAID 5 磁碟陣列。</figcaption></figure><h2>7. 確認成員碟與熱備援碟</h2><p>切換回「<strong>磁碟管理</strong>」頁面，確認各實體磁碟的狀態。範例中，插槽 1 至 7 顯示 <code>Ready</code>，表示已加入並可供磁碟陣列使用；插槽 8 顯示 <code>Unused</code>，表示未加入 RAID 5 陣列，並依本流程作為熱備援磁碟。</p><p>請確認保留為 <code>Unused</code> 的磁碟容量符合熱備援需求。下方 NVMe 清單會另外列出偵測到的 NVMe 裝置與狀態，應依實際硬體規劃判讀。</p><figure class="figure-card storage-screen"><img src="manual/02-acrocube-initialization/04-storage-array/assets/screenshots/8_AcroCube_Storage_Disk_Manager_used_chinese.png" alt="建立陣列後的磁碟管理狀態"><figcaption>圖 2.4-8　建立陣列後的磁碟管理狀態。</figcaption></figure><h2>注意事項</h2><ul><li>每種 RAID 級別都有最小磁碟數量限制；未選取足夠磁碟時無法建立陣列。</li><li>未加入陣列的磁碟會自動成為熱備援磁碟。</li><li>熱備援磁碟容量必須大於或等於陣列中最小成員碟容量。</li><li>若主機用於混合或儲存角色，請在加入 AcroFlex 系統前完成 RAID 建立與確認。</li></ul>`
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
const chapterGroups = new Map();

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
  if (chapter.id === "2.4") {
    const storageFigures = content.querySelectorAll(".storage-screen");
    const firstStorageFigure = storageFigures[0];
    firstStorageFigure.insertAdjacentHTML("afterend", `<h3>磁碟列表欄位說明</h3><table class="feature-table"><thead><tr><th scope="col">欄位</th><th scope="col">說明</th></tr></thead><tbody><tr><td>項次</td><td>磁碟在目前列表中的序號。</td></tr><tr><td>插槽</td><td>對應主機的實體硬碟插槽編號，可用來核對磁碟安裝位置。</td></tr><tr><td>磁碟狀態</td><td>顯示磁碟目前狀態，例如 <code>Unused</code> 表示尚未加入磁碟陣列。</td></tr><tr><td>容量</td><td>顯示該實體磁碟的容量；規劃陣列與熱備援時應一併確認。</td></tr><tr><td>製造商</td><td>顯示硬碟製造商資訊，用於核對硬體配置。</td></tr><tr><td>介面速度</td><td>顯示磁碟介面連線資訊，例如 SATA 連線速度。</td></tr><tr><td>型號</td><td>顯示硬碟型號，可用於確認是否符合採購與部署規格。</td></tr><tr><td>韌體版本</td><td>顯示硬碟目前韌體版本；若需維護或排錯，應記錄此資訊。</td></tr><tr><td>動作</td><td>提供「定位」功能，協助現場人員以定位燈號辨識實體磁碟。</td></tr></tbody></table>`);
    const createdRaidFigure = storageFigures[6];
    createdRaidFigure.insertAdjacentHTML("afterend", `<h3>磁碟陣列列表欄位說明</h3><table class="feature-table"><thead><tr><th scope="col">欄位</th><th scope="col">說明</th></tr></thead><tbody><tr><td>RAID ID</td><td>磁碟陣列的識別編號；後續查看、定位、擴充或維護時，可用此編號辨識目標陣列。</td></tr><tr><td>RAID 級別</td><td>顯示陣列所使用的 RAID 保護方式，例如 <code>RAID 5</code>；應與建置規劃相符。</td></tr><tr><td>已使用空間</td><td>顯示目前已由陣列使用的容量。新建立、尚未投入使用的陣列通常顯示為 <code>0.00 GB</code>。</td></tr><tr><td>總容量</td><td>顯示建立後可供使用的陣列容量，會受成員碟容量、RAID 級別與系統容量換算方式影響。</td></tr><tr><td>狀態</td><td>顯示磁碟陣列目前狀態；<code>Ready</code> 表示陣列已建立完成並可供後續部署流程使用。</td></tr></tbody></table>`);
  }
  document.querySelectorAll(".chapter-button").forEach((button) => button.classList.toggle("is-active", button.dataset.id === chapter.id));
  history.replaceState(null, "", `#${chapter.id}`);
}

function selectChapter(id) {
  const chapter = chapters.find((item) => item.id === id) || chapters[1];
  const parentId = chapter.level === 1 ? chapter.id : chapter.id.split(".")[0];
  const parentGroup = chapterGroups.get(parentId);
  if (parentGroup) {
    parentGroup.content.hidden = false;
    parentGroup.toggle.setAttribute("aria-expanded", "true");
  }
  renderContent(chapter);
  content.focus({ preventScroll: true });
}

let activeGroup;
chapters.forEach((chapter) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `chapter-button level-${chapter.level}`;
  button.dataset.id = chapter.id;
  button.textContent = `${chapter.number} ${chapter.title}`;
  button.addEventListener("click", () => selectChapter(chapter.id));

  if (chapter.level === 1) {
    const group = document.createElement("section");
    group.className = "chapter-group";
    const header = document.createElement("div");
    header.className = "chapter-group-header";
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "chapter-toggle";
    toggle.setAttribute("aria-label", `展開或收合 ${chapter.title}`);
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "›";
    const children = document.createElement("div");
    children.className = "chapter-children";
    children.hidden = true;
    toggle.addEventListener("click", () => {
      children.hidden = !children.hidden;
      toggle.setAttribute("aria-expanded", String(!children.hidden));
    });
    header.append(toggle, button);
    group.append(header, children);
    nav.append(group);
    activeGroup = { content: children, toggle, group };
    chapterGroups.set(chapter.id, activeGroup);
    return;
  }

  if (activeGroup) activeGroup.content.append(button);
  else nav.append(button);
});

chapterGroups.forEach(({ content, toggle }) => {
  if (!content.childElementCount) {
    toggle.disabled = true;
    toggle.setAttribute("aria-hidden", "true");
  }
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
  chapterGroups.forEach(({ content, toggle, group }) => {
    const hasVisibleChapter = [...group.querySelectorAll(".chapter-button")].some((button) => !button.hidden);
    group.hidden = !hasVisibleChapter;
    if (query && hasVisibleChapter) {
      content.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
    }
  });
  searchStatus.textContent = query ? `找到 ${results} 個相關章節` : "";
});

selectChapter(decodeURIComponent(location.hash.slice(1)) || "1.1");
