
const link = document.querySelectorAll('#check');
//başlıklar
const menu1El = document.querySelector('.menu1');
const menu2El = document.querySelector('.menu2');
const menu3El = document.querySelector('.menu3');
const menu4El = document.querySelector('.menu4');
const menu5El = document.querySelector('.menu5');
const aboutTitleEl = document.querySelector('.aboutTitle');
const productTitleEl = document.querySelector('.productTitle');
const productTitle1El = document.querySelector('.productTitle1');
const productTitle2El = document.querySelector('.productTitle2');
const productTitle3El = document.querySelector('.productTitle3');
const productTitle4El = document.querySelector('.productTitle4');
const referenceTitleEl = document.querySelector('.referenceTitle');
const contactTitleEl = document.querySelector('.contactTitle');
const serviceTitleEl = document.querySelector('.serviceTitle');
const vissionTitleEl = document.querySelector('.vissionTitle');
const missionTitleEl = document.querySelector('.missionTitle');
//içerikler
const aboutDescEl = document.querySelector('.aboutDesc');
const productDesc1_1El = document.querySelector('.productDesc1-1');
const productDesc1_2El = document.querySelector('.productDesc1-2');
const productDesc1_3El = document.querySelector('.productDesc1-3');
const productDesc1_4El = document.querySelector('.productDesc1-4');
const productDesc2_1El = document.querySelector('.productDesc2-1');
const productDesc2_2El = document.querySelector('.productDesc2-2');
const productDesc2_3El = document.querySelector('.productDesc2-3');
const productDesc2_4El = document.querySelector('.productDesc2-4');
const productDesc3_1El = document.querySelector('.productDesc3-1');
const productDesc3_2El = document.querySelector('.productDesc3-2');
const productDesc3_3El = document.querySelector('.productDesc3-3');
const productDesc3_4El = document.querySelector('.productDesc3-4');
const productDesc4_1El = document.querySelector('.productDesc4-1');
const productDesc4_2El = document.querySelector('.productDesc4-2');
const productDesc4_3El = document.querySelector('.productDesc4-3');
const contactDesc1_1El = document.querySelector('.contactDesc1_1');
const contactDesc1_2El = document.querySelector('.contactDesc1_2');
const vissionDescEl = document.querySelector('.vissionDesc');
const missionDescEl = document.querySelector('.missionDesc');
const serviceInTitle_1El = document.querySelector('.serviceTitle1');
const serviceInTitle_2El = document.querySelector('.serviceTitle2');
const serviceInTitle_3El = document.querySelector('.serviceTitle3');
const serviceInTitle_4El = document.querySelector('.serviceTitle4');
const serviceInTitle_5El = document.querySelector('.serviceTitle5');
const serviceInTitle_6El = document.querySelector('.serviceTitle6');




link.forEach(el=>{
    el.addEventListener('click',() =>{
        const attr = el.getAttribute('language');
        aboutTitleEl.textContent= data[attr].aboutTitle;
        menu1El.textContent=data[attr].menu1;
        menu2El.textContent=data[attr].menu2;
        menu3El.textContent=data[attr].menu3;
        menu4El.textContent=data[attr].menu4;
        menu5El.textContent=data[attr].menu5;
        productTitleEl.textContent= data[attr].productTitle;
        productTitle1El.textContent= data[attr].productTitle1;
        productTitle2El.textContent= data[attr].productTitle2;
        productTitle3El.textContent= data[attr].productTitle3;
        productTitle4El.textContent= data[attr].productTitle4;
        serviceTitleEl.textContent=data[attr].serviceTitle;
        aboutDescEl.textContent= data[attr].aboutDesc;
        vissionTitleEl.textContent= data[attr].vissionTitle;
        vissionDescEl.textContent = data[attr].vissionDesc;
        missionTitleEl.textContent= data[attr].missionTitle;
        missionDescEl.textContent = data[attr].missionDesc;
        serviceInTitle_1El.textContent = data [attr].serviceInTitle_1;
        serviceInTitle_2El.textContent = data [attr].serviceInTitle_2;
        serviceInTitle_3El.textContent = data [attr].serviceInTitle_3;
        serviceInTitle_4El.textContent = data [attr].serviceInTitle_4;
        serviceInTitle_5El.textContent = data [attr].serviceInTitle_5;
        serviceInTitle_6El.textContent = data [attr].serviceInTitle_6;
        productDesc1_1El.textContent= data[attr].productDesc1_1;
        productDesc1_2El.textContent= data[attr].productDesc1_2;
        productDesc1_3El.textContent= data[attr].productDesc1_3;
        productDesc1_4El.textContent= data[attr].productDesc1_4;
        productDesc2_1El.textContent= data[attr].productDesc2_1;
        productDesc2_2El.textContent= data[attr].productDesc2_2;
        productDesc2_3El.textContent= data[attr].productDesc2_3;
        productDesc2_4El.textContent= data[attr].productDesc2_4;
        productDesc3_1El.textContent= data[attr].productDesc3_1;
        productDesc3_2El.textContent= data[attr].productDesc3_2;
        productDesc3_3El.textContent= data[attr].productDesc3_3;
        productDesc3_4El.textContent= data[attr].productDesc3_4;
        productDesc4_1El.textContent= data[attr].productDesc4_1;
        productDesc4_2El.textContent= data[attr].productDesc4_2;
        productDesc4_3El.textContent= data[attr].productDesc4_3;
        referenceTitleEl.textContent=data[attr].referenceTitle;
        contactTitleEl.textContent=data[attr].contactTitle;
        contactDesc1_1El.textContent= data[attr].contactDesc1_1;
        contactDesc1_2El.textContent= data[attr].contactDesc1_2;
    });
});

var data = {
    "turkish":{
        "menu1":"Anasayfa",
        "menu2":"Hakkımızda",
        "menu3":"Ürünlerimiz",
        "menu4":"Servislerimiz",
        "menu5":"İletişim",
        "aboutTitle":"Hakkımızda",
        "productTitle":"Ürünlerimiz",
        "productTitle1":"Duygu Analizi",
        "productTitle2":"CHATBOT (Dijital Ansistan)",
        "productTitle3":"CHATBOT (Canlı Destek)",
        "productTitle4":"Yapay Zeka Tabanlı Tahmine Dayalı Sürdürülebilir Kurumsal Varlık Yönetim",
        "serviceTitle":"Servislerimiz",
        "aboutDesc": "Genç ve dinamik ekibimizle birlikte geliştirdiğimiz yapay zeka ve makine öğrenmesi teknolojilerimizle sektörlerin problemlerine yönelik çözümler üretiyoruz.",
        "vissionTitle":"Vizyonumuz",
        "vissionDesc":"Müşterilerimiz için benzersiz çözümler keşfetmek ve hayata geçirmek. En iyi veri ve en iyi ekiple çalışarak tüm topluluğa yeni bir teknoloji sağlamak. Müşterilerimizin deneyimlerini iyileştirmek.",
        "missionTitle":"Misyonumuz",
        "missionDesc":"Müşterilerimiz için en son teknolojik gelişmeleri takip ediyor, yenilikçi çözümler geliştirip müşterilerimize sunuyoruz.",
        "serviceInTitle_1":"Doğal Dil İşleme",
        "serviceInTitle_2":"Görüntü İşleme",
        "serviceInTitle_3":"Yapay Zeka Çözümü",
        "serviceInTitle_4":"Web Uygulaması",
        "serviceInTitle_5":"Mobil Uygulama",
        "serviceInTitle_6":"Kullanıcı Arayüzü / Kullanıcı Deneyimi",
        "productDesc1_1":"Anlamlı tüketici çıkarımlarının sağlanması.",
        "productDesc1_2":"Duyguların karar vermede etkisi.",
        "productDesc1_3":"Birimlere otomatik uyarı mesajı gönderilmesi.",
        "productDesc1_4":"Dinamik duygu analizi dashboardu.",
        "productDesc2_1":"Doğal Dil İşleme.",
        "productDesc2_2":"Raporlama ve Analiz.",
        "productDesc2_3":"Platformlara entegrasyon.",
        "productDesc2_4":"Müşteri hizmetleri maliyetlerinde azalma.",
        "productDesc3_1":"Canlı mesajlaşma platformu.",
        "productDesc3_2":"Gerçek zamanlı izleme.",
        "productDesc3_3":"Analiz ve dinamik veri görselleştirme.",
        "productDesc3_4":"Platformlara kolay entegrasyon.",
        "productDesc4_1":"Varlıkların durumlarının gerçek zamanlı izlenebilmesi.",
        "productDesc4_2":"Makineleri olası hatalardan korumak ve kullanım ömürlerinin uzatılması.",
        "productDesc4_3":"Varlıkların bakım maliyetlerinin azaltılması.",
        "referenceTitle":"Referanslar",
        "contactTitle":"İletişim",
        "contactDesc1_1":"Telefon:",
        "contactDesc1_2":"Adres:"
    },
    "english":{
        "menu1":"Home",
        "menu2":"About",
        "menu3":"Products",
        "menu4":"Services",
        "menu5":"Contact",
        "aboutTitle": "About",
        "productTitle":"Products",
        "productTitle1":"Sentiment Analysis",
        "productTitle2":"CHATBOT (DIGITAL ASSISTANT)",
        "productTitle3":"CHATBOT (LIVE SUPPORT)",
        "productTitle4":"AI Based Predictive Enterprise Asset Maintenance Platform",
        "serviceTitle":"Services",
        "aboutDesc":"Solving business and custom problems with advanced AI and machine learning solutions for all sectors with our young and dynamic teams.",
        "vissionTitle":"Our Vision",
        "vissionDesc":"Our vision is to discover and create a unique solution. Working with the best data, and the best people to provide a new technology to the whole community. We aim to fundamentally transform the on-boarding processes and improve the customer experience.",
        "missionTitle":"Our Mission",
        "missionDesc":"We develop technological solutions for our customers and offer them developed products from existing tools. We are at the frontiers of scientific advancement to leverage the latest developments for business. ",
        "serviceInTitle_1":"Natural Language Processing",
        "serviceInTitle_2":"Computer Vision",
        "serviceInTitle_3":"Custum AI Solution",
        "serviceInTitle_4":"Web App",
        "serviceInTitle_5":"Mobil App",
        "serviceInTitle_6":"UI / UX Design",
        "productDesc1_1":"Providing unique and meaningful consumer insights.",
        "productDesc1_2":"Emotions influence decision-making.",
        "productDesc1_3":"Auto-transferring to humans.",
        "productDesc1_4":"Providing  interactive sentiment analysis dashboard.",
        "productDesc2_1":"NLP agnostic.",
        "productDesc2_2":"Detailed reporting & analytics.",
        "productDesc2_3":"Available across multiple platforms.",
        "productDesc2_4":"Reduce the customer service costs.",
        "productDesc3_1":"Live  messaging platform.",
        "productDesc3_2":"Real time monitoring.",
        "productDesc3_3":"Analysis and interactive data visualisation.",
        "productDesc3_4":"Easy integration to your platform .",
        "productDesc4_1":"Providing proactive and forward thinking structure.",
        "productDesc4_2":"To measure the satisfaction of customers or citizens about services.",
        "productDesc4_3":"Improved service planning for the future.",
        "referenceTitle":"References",
        "contactTitle":"Contact",
        "contactDesc1_1":"Phone:",
        "contactDesc1_2":"Address:"

    }
}