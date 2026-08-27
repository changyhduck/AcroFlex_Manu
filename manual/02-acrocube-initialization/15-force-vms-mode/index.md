---

number: "2.15"
title: "將 AcroCube 主機強制設定成主要主機 (VMS)"
status: outline
---

# 2.15. 將 AcroCube 主機強制設定成主要主機 (VMS)

## 本節目的

<!-- 說明本節要讓讀者完成的工作。 -->

本節說明如何將一台非VMS主機，強制設定成VMS主機。

## 前置條件

<!-- 列出主機狀態、叢集與權限需求。 -->

當一套AcroFlex系統沒有任何執行中的VMS服務(損毀或遺失)，這個功能可以將一台AcroCube強制執行VMS容器，讓AcroFlex系統可以被管理。

VMS主機是AcroCube超融合主機，它執行了VMS服務。

VMS服務是管理整個AcroFlex超融合主機雲的軟體，相當於VMware的vCenter的角色。

不過VMS服務是執行再容器之上，不需要獨立的主機或虛擬機器。

## 操作綱要

<!-- 依序列出要說明的操作。 -->

只要按“強制成為主要”後就將這台AcroCube超融合主機成為VMS主機。

## 注意事項與限制

<!-- 列出角色切換、服務與資料風險。 -->

請先解釋AcroCube_force_vms_chinese.png後，再開始操作。

圖片放在解釋下。

## 素材對照

- 圖片：`assets/images/`
- 螢幕快照：`assets/screenshots/`
