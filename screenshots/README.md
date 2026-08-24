# 操作畫面素材

請將撰寫使用手冊所需的操作畫面放在此目錄。我會依據畫面內容與你的操作描述，協助撰寫對應的手冊章節。

## 目錄管理原則

當截圖數量增加時，請依手冊章節在本目錄下建立子目錄。子目錄名稱建議使用「兩位數章節編號－英文短名」，以維持排序穩定並方便在文件中連結。

```text
screenshots/
├── 01-overview/
├── 02-initial-setup/
├── 03-cluster-management/
├── 04-storage/
├── 05-network/
├── 06-virtual-machines/
├── 07-monitoring/
├── 08-maintenance/
└── 99-unclassified/
```

- 章節尚未定案或暫時無法分類的截圖，先放入 `99-unclassified/`。
- 當手冊章節確定後，再將畫面移至對應章節目錄，並同步更新文件中的圖片連結。
- 同一操作流程的檔案請保留連續的步驟編號，方便依序撰寫與檢閱。

## 命名建議

請以「章節或功能－操作順序－簡短說明」命名，例如：

```text
cluster-01-create-cluster.png
cluster-02-configure-network.png
vm-01-create-virtual-machine.png
```

放在章節子目錄時，建議檔名以「功能－操作順序－簡短說明」命名，例如：

```text
03-cluster-management/create-cluster-01-open-page.png
03-cluster-management/create-cluster-02-enter-settings.png
03-cluster-management/create-cluster-03-confirm-result.png
```

## 上傳前檢查

- 移除或遮蔽帳號、密碼、Token、客戶名稱、IP 位址與其他敏感資料。
- 保留可辨識的介面標題、按鈕與操作結果；必要時使用箭頭或框線標示。
- 同一流程請依實際操作順序編號，方便建立對應的手冊步驟。
- 若畫面對應特定 AcroFlex 版本，請在提供描述時一併註明。
