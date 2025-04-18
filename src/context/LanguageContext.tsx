
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
    winterOlympics: "2026-yil Milano-Kortina qishki Olimpiya o'yinlari"
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
    winterOlympics: "2026 Milano-Cortina Winter Olympics"
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
    winterOlympics: "Зимние Олимпийские игры 2026 Милано-Кортина"
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
