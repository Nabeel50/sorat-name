let element=document.getElementById('output');
  function suratname() {
    let name=[" ","Al-Fatihah  فاتحہ", "Al-Baqarah  بقرہ  ", "Aal-E-Imran عمران ", "An-Nisa  نساؑ", "Al-Maidah  مائدہ", "Al-An'am   انعام", "Al-A'rafاعراف", 
    "Al-Anfal   انفال", "At-Tawbah  توبہ", "Yunus یونس", "Hood ہود", "Yusuf  یوسف", "Ar-Ra'd رعد ", "Ibrahim ابراہیم", "Al-Hijr  حجر", "An-Nakhal نخل ", "Al-Isra  اسراء",
     "Al-Kahf کہف ", "Maryam   مریم", "Ta-Ha طہ", "Al-Anbiya انبیاء", "Al-Hajj حج ", "Al-Muminun مومنون", "An-Nur نور", "Al-Furqan فرقان", "Ash-Shu'ara شعراء", 
     "An-Naml  نمل ", "Al-Qasas  قصص", "Al-Ankabut  عنکبوت  ", "Ar-Room  روم", "Luqman لقمان", "As-Sajda سجدہ", "Al-Ahzab  احزاب", "Saba سباء", "Fatir فاطر",
      "Ya-Seen  یسں", "As-Saffaat   صافات", "Saad  ص", "Az-Zumar  زمر", "Ghafir غافر", "Fussilat فصلت", "Ash-Shura شوری", "Az-Zukhruf زحرف", "Ad-Dukhan دخان", 
      "Al-Jasia جاثیہ", "Al-Ahqaf  احقاف", "Muhammad محمد", "Al-Fatah   فتح", "Al-Hujurat  حجرات", "Qaaf   ق", "Az-Zariyat   زاریات", "At-Tuur   طور", "An-Najm  نجم",
       "Al-Qamar  قمر", "Ar-Rahman رحمان", "Al-Waqia واقعہ", "Al-Hadid  حدید", "Al-Mujadila مجادلہ", "Al-Hashr  حشر", "Al-Mumtahina ممتحنہ", "As-Saff صف ", "Al-Jumuah  جمعہ",
        "Al-Munafiqoon منافقون", "At-Taghabun  تغابن", "At-Talaq  طلاق", "At-Tahrim تحریم", "Al-Mulk ملک", "Al-Qalam قلم", "Al-Haqqah  حاقہ", "Al-Ma'arij معارج", "Nooh  نوح",
         "Al-Jinn جن", "Al-Muzzammil مزمل", "Al-Muddasir  مدثر", "Al-Qiyamah قیامہ", "Al-Insan  انسان", "Al-Mursalat  مرسلات", "An-Naba نباء", "An-Nazi'at  نازعات", "Abasa عبس",
          "At-Takwir تکویر", "Al-Infitar انفطار", "Al-Mutaffifin مطففین", "Al-Inshiqaq انشقاق", "Al-Buruj بروج", "At-Tariq طارق", "Al-Ala اعلی", "Al-Ghashiyah غاشیہ", 
          "Al-Fajr فجر", "Al-Balad بلد", "Ash-Shams شمس", "Al-Lail لیل", "Ad-Duha ضحی", "Ash-Sharh نشرح", "At-Tin تین", "Al-Alaq علق", "Al-Qadr قدر", "Al-Bayyinah بینہ",
           "Az-Zalzalah زلزال", "Al-Adiyat  عادیات", "Al-Qariah   قارعہ", "At-Takasur   تکاثر", "Al-Asr عصر", "Al-Humazah ہمزہ", "Al-Feel   فیل", "Quraish قریش",
            "Al-Maa'oon ماعون", "Al-Kawsar کوثر", "Al-Kafirun  کافرون", "An-Nasr  نصر", "Al-Lahab لہب", "Al-Ikhlas اخلاص", "Al-Falaq فلق", "An-Nas الناس"]
               let input=document.getElementById('name').value;
        for (let n = 0; n<=input; n++){
            element.innerHTML=name[input]
  }
}

          