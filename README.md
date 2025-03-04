# Fit Diyet Frontend

## Hakkında
Fit Diyet, kullanıcıların kişisel bilgilerine göre **7 günlük kişiselleştirilmiş diyet planları** oluşturmasına olanak tanıyan bir uygulamadır. Uygulama, kullanıcı girdilerini değerlendirerek **Azure OpenAI API** aracılığıyla beslenme programı üretir ve bunu **PDF formatında dışa aktarma** imkanı sunar.

## Özellikler
- **Kullanıcı Bilgileri Girişi:** Yaş, kilo, boy, hedef gibi verilerle kişiselleştirilmiş diyet planı oluşturma
- **AI Destekli Diyet Planı:** Azure OpenAI API kullanarak önerilen yemek ve besin listelerini oluşturma
- **7 Günlük Plan Görüntüleme:** Haftalık programın detaylı olarak listelenmesi
- **PDF Dışa Aktarma:** Kullanıcılar oluşturdukları planı PDF olarak indirebilir
- **Şık ve Kullanıcı Dostu Arayüz:** React ile geliştirilmiş modern bir UI/UX deneyimi

## Kullanılan Teknolojiler
- **React.js** – Modern, hızlı ve modüler frontend geliştirme
- **Axios** – API isteklerini yönetmek için
- **React Router** – Sayfa yönlendirmeleri için
- **Azure OpenAI API** – Kişiselleştirilmiş diyet planları oluşturmak için
- **PDFKit veya jsPDF** – Diyet planlarını PDF olarak dışa aktarmak için

## Kurulum
1. Bu repoyu klonlayın:
   ```bash
   git clone https://github.com/mehmettfaik/fit-diyet-frontend.git
   ```
2. Proje dizinine gidin:
   ```bash
   cd fit-diyet-frontend
   ```
3. Gerekli bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
4. Uygulamayı çalıştırın:
   ```bash
   npm start
   ```
### Görsel