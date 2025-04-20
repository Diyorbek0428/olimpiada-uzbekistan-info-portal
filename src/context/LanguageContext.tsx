import React, { createContext, useContext, useState } from 'react';

type Language = 'uz' | 'en' | 'ru';

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  uz: {
    committee: "O'zbekiston Milliy Olimpiya Qo'mitasi",
    subtitle: "Sport orqali yuksalish sari",
    news: "Yangiliklar",
    readMore: "Batafsil",
    mediaGallery: "Media Galereya",
    asianGames: "O'zbekiston Osiyo O'yinlarida",
    latestAchievements: "So'nggi Yutuqlar",
    goldMedals: "Oltin medallar",
    silverMedals: "Kumush medallar",
    bronzeMedals: "Bronza medallar",
    nextGames: "Keyingi O'yinlar",
    winterOlympics: "2026-yil Milano-Kortina qishki Olimpiya o'yinlari",
    language: "uz",
    
    // Navigation translations
    about: "O'zbekiston MOQ",
    medicalCenter: "Tibbiyot markazi",
    management: "Rahbariyat va hodimlar",
    chairman: "Rais",
    generalSecretary: "Bosh kotib",
    viceChairman: "Rais o'rinbosari",
    sportsMedicine: "Sport tibbiyot",
    interview: "Intervyu",
    federations: "Federatsiyalar",
    uzSportsFederation: "O'zbekiston sport federatsiyasi",
    intSportsFederation: "Xalqaro sport federatsiyasi",
    games: "O'yinlar",
    olympicGames: "Olimpiya o'yinlari",
    physicalEducation: "Badan tarbiya mashg'ulotlari",
    internationalRelations: "Xalqaro munosabatlar",
    search: "Izlash..."
  },
  en: {
    committee: "National Olympic Committee of Uzbekistan",
    subtitle: "Rising through sports",
    news: "News",
    readMore: "Read More",
    mediaGallery: "Media Gallery",
    asianGames: "Uzbekistan in Asian Games",
    latestAchievements: "Latest Achievements",
    goldMedals: "Gold medals",
    silverMedals: "Silver medals",
    bronzeMedals: "Bronze medals",
    nextGames: "Next Games",
    winterOlympics: "2026 Milano-Cortina Winter Olympics",
    language: "en",
    
    // Navigation translations
    about: "Uzbekistan NOC",
    medicalCenter: "Medical Center",
    management: "Management and Staff",
    chairman: "Chairman",
    generalSecretary: "General Secretary",
    viceChairman: "Vice Chairman",
    sportsMedicine: "Sports Medicine",
    interview: "Interview",
    federations: "Federations",
    uzSportsFederation: "Uzbekistan Sports Federation",
    intSportsFederation: "International Sports Federation",
    games: "Games",
    olympicGames: "Olympic Games",
    physicalEducation: "Physical Education",
    internationalRelations: "International Relations",
    search: "Search..."
  },
  ru: {
    committee: "Национальный Олимпийский Комитет Узбекистана",
    subtitle: "Развитие через спорт",
    news: "Новости",
    readMore: "Подробнее",
    mediaGallery: "Медиа Галерея",
    asianGames: "Узбекистан на Азиатских играх",
    latestAchievements: "Последние достижения",
    goldMedals: "Золотые медали",
    silverMedals: "Серебряные медали",
    bronzeMedals: "Бронзовые медали",
    nextGames: "Следующие игры",
    winterOlympics: "Зимние Олимпийские игры 2026 Милано-Кортина",
    language: "ru",
    
    // Navigation translations
    about: "НОК Узбекистана",
    medicalCenter: "Медицинский центр",
    management: "Руководство и персонал",
    chairman: "Председатель",
    generalSecretary: "Генеральный секретарь",
    viceChairman: "Заместитель председателя",
    sportsMedicine: "Спортивная медицина",
    interview: "Интервью",
    federations: "Федерации",
    uzSportsFederation: "Спортивная федерация Узбекистана",
    intSportsFederation: "Международная спортивная федерация",
    games: "Игры",
    olympicGames: "Олимпийские игры",
    physicalEducation: "Физическое воспитание",
    internationalRelations: "Международные отношения",
    search: "Поиск..."
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('uz');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
