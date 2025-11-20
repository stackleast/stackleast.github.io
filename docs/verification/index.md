---
title: Verifikasi Keamanan File
description: Pelajari cara memverifikasi checksum SHA256 file yang diunduh untuk memastikan keaslian dan keamanannya.
editLink: true
---

# 🔒 Verifikasi Checksum File

Verifikasi checksum adalah langkah **PENTING** untuk memastikan file yang Anda unduh adalah file asli yang kami sediakan dan tidak dirusak atau dimodifikasi oleh pihak lain selama proses download.

## Cara Memverifikasi di Windows (PowerShell)

1.  **Buka PowerShell** sebagai Administrator.
2.  Arahkan ke folder tempat file Anda disimpan. Contoh:
    ```powershell
    cd C:\Users\YourName\Downloads
    ```
3.  Jalankan perintah berikut untuk mendapatkan checksum file Anda (ganti `nama-file.zip` dengan nama file Anda):
    ```powershell
    Get-FileHash -Path .\nama-file.zip -Algorithm SHA256 | Format-List
    ```
4.  Bandingkan **hash** yang dihasilkan dengan checksum yang tercantum di panduan kami. Kedua rangkaian angka dan huruf harus **SAMA PERSIS**.

## Daftar Checksum Terkini

Berikut adalah daftar checksum untuk file-file yang disediakan:

| File | SHA256 Checksum |
| :--- | :--- |
| `kms-activator.zip` | `5f5347daff6a...` |
| `hwid-activator.zip` | `a1b2c3d4e5f6...` |

> **Jika checksum tidak cocok, HAPUS file tersebut dan unduh ulang. Jangan pernah menjalankan file yang checksum-nya tidak sesuai.**