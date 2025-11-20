---
title: Aktivasi Windows Server
description: Panduan mengaktifkan Windows Server 2016, 2019, atau 2022 menggunakan KMS.
editLink: true
---

# 🖥️ Aktivasi Windows Server

Panduan ini menjelaskan cara mengaktifkan Windows Server menggunakan metode KMS.

## Prasyarat
- Windows Server 2016, 2019, atau 2022 yang telah terinstall.
- Akses Administrator.
- Koneksi internet.

## Langkah 1: Set KMS Server dan Product Key

Jalankan Command Prompt sebagai **Administrator**, lalu jalankan perintah berikut (ganti `<product-key>` dengan key yang sesuai versi Server Anda):

```cmd
slmgr /ipk <product-key>
slmgr /skms kms8.msguides.com
slmgr /ato
```

## KMS Client Keys untuk Windows Server

|OS	KMS     |Client Key|
|:----------|:---------|
|Windows    |Server 2022|	|WX4NM-KYWYW-QJJR4-XV3QB-6VM33|
|Windows    |Server 2019|	|WMDGN-G9PQG-XVVXX-R3X43-63DFG|
|Windows    |Server 2016|	|CB7KF-BWN84-R7R2Y-793K2-8XDDG|

## Langkah 2: Verifikasi Aktivasi

```cmd
slmgr /xpr
```

Anda akan melihat pesan bahwa aktivasi berlaku untuk 180 hari. Ini normal untuk aktivasi KMS.
