# keremozben.com — Claude çalışma notları

Kerem Özben'in kişisel CV sitesi. Saf statik site: derleme adımı, paket yöneticisi, framework yok.

## Proje yapısı

- `index.html`: İngilizce CV (`/`)
- `tr/index.html`: Türkçe CV (`/tr/`). İçerik değişikliği her iki dilde de yapılır; iki dosya birbirini yansıtmalı.
- `css/style.css`: ekran stilleri, `css/print.css`: yazdırma / PDF stilleri
- `img/badges/`: mağaza rozetleri (App Store, Google Play; TR + EN)
- `CNAME`: özel alan adı (`keremozben.com`). Silme, değiştirme.
- Analytics: iki HTML'de de Google tag (gtag.js) var. Ölçüm kimliği herkese açıktır, gizli bilgi değildir; yine de kaldırma.
- Yeni paket / bağımlılık eklenmez (`package.json` yok, olmayacak).

## Yayın yolu

- Site **GitHub Pages** ile yayınlanır: repo `keremozben/keremozben.com`, kaynak `master` dalı, kök dizin (`/`), derleme yok (legacy / düz dosya yayını).
- `master`'a giden her push, kısa süre sonra canlı sitede (keremozben.com) görünür. Ayrı bir deploy komutu yoktur.
- Bu yüzden `master`'a yayınlanmaya hazır olmayan bir şey push'lanmaz. Kart dalları (`lpm/kart-N`) yayın tetiklemez.

## Test, build, lint

Bu projede **otomatik test, build, lint ya da type-check yoktur** (`package.json` / betik yok). Bu yüzden "hepsi başarılı" kapısı şu kontrollerden oluşur; her biri terminalden koşulur:

1. `git status` ve `git diff` ile değişikliği baştan sona oku (içerik, TR/EN tutarlılığı, bozuk etiket, kırık link).
2. `git diff --check` (gereksiz boşluk / çatışma işareti kontrolü).
3. Değişen sayfa(lar)ı gerekiyorsa tarayıcıda aç ve ekranda ve yazdırma önizlemesinde kontrol et (`index.html` ve `tr/index.html`).

Cihaz / simülatör testi bu projede yoktur. Projeye ileride test ya da build aracı eklenirse bu bölüm güncellenir.

## Kart iş akışı (25 Kasım 2026 kuralı)

1. Kodu / içeriği değiştir.
2. Projedeki **bütün terminal testlerini** koş. Bu projede otomatik test yok (yukarıya bak); varsa cihaz testi yalnız kartın "Test çalıştırılabilir" anahtarı açıkken koşulur.
3. Build, lint, type-check ve projede ne varsa sırayla çalıştır; bu projede bunların karşılığı yukarıdaki "Test, build, lint" kontrolleridir.
4. Hepsi başarılıysa **kullanıcıya sormadan push** yap, commit mesajı açıklayıcı olsun (ne değişti, neden; Türkçe, gerekiyorsa kart no ile).
   - Push öncesi gizli bilgi taraması yap. Projede bu iş için bir araç yok; staged diff'i elle oku (`git diff --cached`) ve anahtar / token / parola / `.env` benzeri bir şey olmadığını doğrula.
   - Force push yok. Remote ekleme / değiştirme yok.
   - Bir kontrol başarısızsa push yapma; önce düzelt.

## Kurallar

- Gizli dosyalar (`.env*`, anahtar / sertifika dosyaları vb.) okunmaz ve commit'lenmez.
- Yeni paket eklenmez.
- Dosyalar LF satır sonuyla tutulur (`.gitattributes`).
