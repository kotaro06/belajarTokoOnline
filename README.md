# belajarTokoOnline
ganti terminal ke gitbash
cek ke firebase login
--> jika already logged langsung ke nmr 6
--> login firebase dulu
setting untuk upload web:
firebase init 
? Are you ready to proceed? (Y/n) y

? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. (Press <space> to select, <a> to toggle all, <i> to invert 
selection, and <enter> to proceed)
 ( ) Genkit: Setup a new Genkit project with Firebase
 ( ) Functions: Configure a Cloud Functions directory and its files
 ( ) App Hosting: Configure an apphosting.yaml file for App Hosting
>( ) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
 ( ) Storage: Configure a security rules file for Cloud Storage
 ( ) Emulators: Set up local emulators for Firebase products
 ( ) Remote Config: Configure a template file for Remote Config
(Move up and down to reveal more choices)

-->space 
-->enter

? Please select an option: (Use arrow keys)
> Use an existing project 

setup terakhir : 
firebase deploy

ini struktur ideal chatgpt
project/
│-- index.html             <- Halaman utama
│-- app.js                 <- File utama JavaScript
│-- koneksi.js             <- File konfigurasi Firebase biasnya bernama firebase-config.js
└-- firebase/              <- (Opsional) Direktori untuk modul database lain
    └-- database.js        <- Koneksi fungsi khusus untuk database

struktur gue :
project/
│-- koneksi.js             <- File konfigurasi Firebase biasnya bernama firebase-config.js
│-- index.html             <- Halaman utama
│                          <- File utama JavaScript
│                          <- Database Utama 
│



silahkan cek setiap file html ke npm terbaru. Terdeteksi file AjenisBarang.html gagal di sdk npm 11.1.0.
