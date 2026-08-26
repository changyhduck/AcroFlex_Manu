---

number: "2.4"
title: "建立磁碟陣列"
status: outline
---

# 2.4. 建立磁碟陣列

## 本節目的

<!-- 說明本節要讓讀者完成的工作。 -->

說明如何建立磁碟陣列。

## 前置條件

<!-- 列出磁碟、容量規劃或權限需求。 -->

1. 先將需要的硬碟插入AcroCube主機

## 操作綱要

<!-- 依序列出要說明的操作。 -->

1. 點選“儲存設定”，網頁會顯示磁碟管理頁面，該頁面會顯示現在AcroCube上可以使用的磁碟機。

   請用1_AcroCube_Storage_Disk_Manager_Chinese.png詳細說明，圖請放在說明之後。
2. 點選“RAID“管理，網頁會顯示磁碟陣列管理頁面，一開始應該沒有任何磁碟陣列。

   請用2_AcroCube_Storage_RAID_Empty_Chinese.png詳細說明，圖請放在說明之後。
3. 點選”建立“，網頁會跳出建立磁碟陣列的對話框。

   請用3_AcroCube_Storage_RAID_Create_1_Chinese.png詳細說明，圖請放在說明之後。
4. 選擇下拉選單，選擇磁碟陣列的級別。

   請用4_AcroCube_Storage_RAID_Select_RAID_Level_Chinese.png詳細說明，圖請放在說明之後。

   說明磁碟陣列等級的描述、限制、優劣。
5. 選擇要加入磁碟陣列的磁碟機，然後按"確認後開始建立"。

   請用5_AcroCube_Storage_RAID_Select_Disks_Chinese.png詳細說明，圖請放在說明之後。

   請選擇足夠數量的磁碟機才能建立。

   請以磁碟陣列5為例。

   說明沒有被選擇的磁碟機自動變成熱備援磁碟。

   在用6_AcroCube_Storage_RAID_Creating_Chinese.png詳細說明，磁碟陣列正在建立中，請用使用者等待。圖請放在說明之後。
6. 請檢查已經建立的磁碟陣列。

   請用7_AcroCube_Storage_RAID_Created_Chinese.png詳細說明，圖請放在說明之後。
7. 檢查磁碟管理頁面，確認建立結果。

   請用8_AcroCube_Storage_Disk_Manager_used_chinese.png詳細說明，圖請放在說明之後。

   請說明Ready是已經加入磁碟陣列的磁碟機，Unused是指尚未加入磁碟陣列的磁碟機。

   Unused磁碟機是熱備援磁碟機。

## 注意事項與限制

<!-- 列出資料清除、容量或服務影響。 -->

1. AcroCube主機若當成混合主機或儲存主機，建立或加入AcroFlex超融合系統前請先建立磁碟陣列。
2. 每一種磁碟陣列級別都有最小磁碟機數量的限制，沒有選擇足夠的磁碟機無法建立磁碟陣列。
3. 沒有加入磁碟陣列的磁碟機自動變成熱備援磁碟。
4. 熱備援磁碟容量必須大於或等於磁碟陣列中最小的磁碟機容量。

## 素材對照

- 圖片：`assets/images/`
- 螢幕快照：`assets/screenshots/`
