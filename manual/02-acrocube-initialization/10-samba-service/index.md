---

number: "2.10"
title: "設定 SAMBA 服務"
status: outline
---

# 2.10. 設定 SAMBA 服務

## 本節目的

<!-- 說明本節要讓讀者完成的工作。 -->

本節要說明如何設定AcroCube超融合主機的SAMBA功能。該SAMBA功能主要是輔助AcroFlex超融合系統管理ISO檔案、匯入匯出雲主機(虛擬機器)、輸入實轉虛或虛轉虛的映像檔(image)檔案。

## 前置條件

<!-- 列出網路、共享資料夾或權限需求。 -->

AcroCube超融合主機網路必須先設定，SAMBA服務才可以正常運行。

本SAMBA服務只有單一帳號manager，預設密碼為acrored。

## 操作綱要

<!-- 依序列出要說明的操作。 -->

1. 先啟用SAMBA服務。
2. 修改密碼，請輸入兩次新密碼，兩次密碼必須一致。
3. 按“確認”按鈕後儲存新密碼。

## 注意事項與限制

<!-- 列出網路存取與資安注意事項。 -->

請先解釋AcroCube_Samba_Chinese.png的內容後，在開始操作。

圖片建議放在解釋之下。

本SAMBA服務不可以新增帳號，只有唯一帳號=manager。

SAMBA服務若被停用，AcroFlex超融合系統有一些作業會無法運行。

## 素材對照

- 圖片：`assets/images/`
- 螢幕快照：`assets/screenshots/`
