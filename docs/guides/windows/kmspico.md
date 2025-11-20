---
title: Aktivasi Windows dengan KMS
description: Panduan langkah demi langkah untuk mengaktifkan Windows 10/11 menggunakan metode KMS.
editLink: true
---

# Aktivasi Windows dengan KMS

<details>
<summary><b>⚠️ Disclaimer dan Peringatan Keamanan</b></summary>

[!WARNING]
**Harap baca sebelum melanjutkan:**
- Metode ini menggunakan teknologi Volume Licensing yang disediakan Microsoft untuk organisasi besar.
- Aktivasi ini **tidak permanen** dan perlu diperbarui setiap 180 hari (6 bulan).
- Script yang digunakan seringkali terdeteksi sebagai virus (false positive) oleh antivirus karena tingkah lakunya.
- **Selalu verifikasi checksum** file yang diunduh untuk memastikan keamanannya.
- Website ini atau penulis tidak bertanggung jawab atas kerusakan sistem yang mungkin terjadi.
</details>

## Langkah 1: Unduh Script Aktivasi KMS

Gunakan link di bawah untuk mengunduh script activator terkini dan terverifikasi.

[📦 Download KMS Activator](/assets/downloads/tools/kms-activator.zip){ .md-button .md-button--primary }

**SHA256 Checksum:** `5f5347daff6a...` *(Selalu periksa halaman [Verification](../../verification/) untuk checksum terbaru)*

## Langkah 2: Nonaktifkan Antivirus Sementara

1.  Buka **Windows Security**.
2.  Pergi ke **Virus & threat protection**.
3.  Klik **Manage settings**.
4.  Matikan toggle **Real-time protection**.

> Ini diperlukan untuk mencegah antivirus menghapus file script yang sah.

## Langkah 3: Ekstrak dan Jalankan

1.  **Ekstrak** file ZIP yang telah diunduh.
2.  Klik kanan pada file ` activator.bat `.
3.  Pilih **Run as administrator**.
4.  Tekan tombol **1** pada keyboard Anda untuk memilih opsi "Activate Windows".
5.  Tunggu proses hingga selesai dan restart komputer Anda.

## 🧹 Pemecahan Masalah (Troubleshooting)

### Error: 0x8007007B
**Solusi:** Jalankan perintah berikut di Command Prompt (Admin) secara berurutan:
```cmd
slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX
slmgr /skms kms8.msguides.com
slmgr /ato
```

## Aktivasi Berlaku hingga 180 Hari
Ini normal. Script akan secara otomatis memperbarui status aktivasi Anda di latar belakang jika komputer terhubung ke internet. Anda juga dapat menjalankan script ini lagi setelah 180 hari.