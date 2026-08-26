---

number: "2.3"
title: "設定網路"
status: outline
---

# 2.3. 設定網路

## 本節目的

<!-- 說明本節要讓讀者完成的工作。 -->

引導使用者設定AcroCube的網路。

在本階段只要設定足夠建立AcroFlex超融合系統的網路即可。

完成建立AcroFlex系統後，可以針對網路做更詳盡的設定。

本節會先以AcroCube_IP_Setting_Chinese.png說明畫面上的資訊，然後再說明如何設定IP、啟用虛擬交換機等等作業。

## 前置條件

<!-- 列出網路規劃、IP 位址或權限需求。 -->

請準備一組IP位址，作為AcroCude管理的主要IP。其內容包括：

1. IP位址 (IP Address)
2. 網路遮罩 (Network Mask)
3. 網路閘道 (Gateway) (Optional)
4. 網路名稱伺服器 (DNS) (Optional)
5. 虛擬區域網路ID (VLAN ID) (Optional)

若需要建立2台以上的AcroFlex超融合系統，給予一組專門屬於AcroSAN的獨立網路是需要的(但非必要)。

所以必須給另一組IP位址，且這組IP位址不可以和第一組IP位址相同。

請AI給予一個例子說明。

## 操作綱要

<!-- 依序列出要說明的操作。 -->

1. 畫面左邊Assigned欄位中，實體網路埠不可是空白，這樣這個虛擬交換機才會啟用。若Assigned是空白，請從Free欄位移動一個網路埠到Assigned欄位。
2. 決定要用Active-Active還是Active-Standby，決定若虛擬交換機超過1條實體網路埠，要如何綁定運作。請AI說明bonding設定為Active-Active和Active-Standby的優劣。另外，AcroCube的Active-Active Bonding不是採用LACP模式，所以不需要交換機支援，請AI說明。
3. 輸入IP位址。
4. 輸入網路遮罩。
5. 輸入網路閘道。若需要對外服務或服務另一個網段，就必須輸入。
6. 輸入網路名稱伺服器。若要對外服務或要加入AD，請務必輸入。
7. 輸入VLANID。這個設定必須配合網路交換機的設定。
8. 設定Metric，Metric數字越小，該虛擬交換機的網路閘道的優先權越高。
9. 按確認後，將設定儲存到AcroCube上，AcroCube會重新開機，才能完成設定。

## 注意事項與限制

<!-- 列出網路中斷或設定錯誤的風險。 -->

1. 第一個虛擬交換機不可停用，Assigned欄位不能是空白
2. 設定網路後重新開機才會生效
3. 兩個虛擬交換機的IP網段不可一樣
4. Assigned欄位空白表示該虛擬交換機沒有被啟用
5. 重新開機後必須重新登入AcroCube Client
6. 這個小節比較複雜，請詳細解說

## 素材對照

- 圖片：`assets/images/`
- 螢幕快照：`assets/screenshots/`
