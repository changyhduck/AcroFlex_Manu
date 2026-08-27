---

number: "2.5"
title: "建立叢集"
status: outline
---

# 2.5. 建立叢集

## 本節目的

<!-- 說明本節要讓讀者完成的工作。 -->

完成AcroCube超融合主機的初始化後，開始建立AcroFlex超融合主機雲。AcroFlex超融合主機雲的管理系統稱為AcroVMS，以下簡稱VMS。

VMS必須有一個獨立的IP位址，該IP位址必須和AcroCube超融合主機的第一個虛擬交換機同一個網段。

## 前置條件

<!-- 列出主機、網路與磁碟陣列需求。 -->

1. 網路必須被設定完成。
2. 磁碟陣列必須被建立完成。
3. 準備AcroFlex超融合主機雲的管理IP位址。

   請準備一組IP位址，例如：

   IP位址：192.168.95.108

   網路遮罩：255.255.248.0

   注意：AcroFlex的管理IP的網段必須和AcroCube超融合主機上第一個虛擬交換機的網段一樣。

   請AI舉例。

## 操作綱要

<!-- 依序列出要說明的操作。 -->

1. 請按“建立叢集”按鈕。

   請用AcroCube_Create_Cluster_butten_Chinese.png來說明和解釋。

   圖片請放在說明和解釋之後。
2. 檢查“建立新的主機雲”對話框內的資訊，確定主機狀態正確，並且磁碟陣列是Ready狀態。

   請用AcroCube_Create_Cluster_VMSIP_Chinese.png來說明和解釋。圖片請放在說明和解釋之後。
3. 按”確認“案件按鍵後開始建立AcroFlex超融合主機雲。
4. 建立主機雲完成後請用新的AcroVMS IP來登入AcroFlex Client管理頁面。

## 注意事項與限制

<!-- 列出叢集建立對服務與資料的影響。 -->

1. VMS IP必須和AcroCube的第一個虛擬交換機同一網段。
2. 建立叢集前請先建立磁碟陣列。

## 素材對照

- 圖片：`assets/images/`
- 螢幕快照：`assets/screenshots/`
