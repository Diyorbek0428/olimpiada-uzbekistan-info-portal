
import React from "react";
import { Navbar } from "@/components/ui/navbar";
import { useLanguage } from "@/context/LanguageContext";

const PhysicalEducation = () => {
  const { t } = useLanguage();

  const exercises = [
    {
      id: 1,
      title: {
        uz: "Umumiy jismoniy tayyorgarlik",
        en: "General Physical Training",
        ru: "Общая физическая подготовка"
      },
      description: {
        uz: "Kuch, tezlik va chidamlilikni rivojlantirish mashqlari",
        en: "Exercises for developing strength, speed, and endurance",
        ru: "Упражнения для развития силы, скорости и выносливости"
      }
    },
    {
      id: 2,
      title: {
        uz: "Gimnastika mashqlari",
        en: "Gymnastics Exercises",
        ru: "Гимнастические упражнения"
      },
      description: {
        uz: "Muvozanat va egiluvchanlikni rivojlantiruvchi mashqlar",
        en: "Exercises developing balance and flexibility",
        ru: "Упражнения для развития равновесия и гибкости"
      }
    },
    {
      id: 3,
      title: {
        uz: "Sport o'yinlari",
        en: "Sports Games",
        ru: "Спортивные игры"
      },
      description: {
        uz: "Jamoaviy sport o'yinlari orqali jismoniy tayyorgarlik",
        en: "Physical training through team sports games",
        ru: "Физическая подготовка через командные спортивные игры"
      }
    },
    {
      id: 4,
      title: {
        uz: "Yengil atletika",
        en: "Athletics",
        ru: "Легкая атлетика"
      },
      description: {
        uz: "Yugurish, sakrash va uloqtirish mashqlari",
        en: "Running, jumping, and throwing exercises",
        ru: "Беговые, прыжковые и метательные упражнения"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">{t('physicalEducation')}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {exercises.map((exercise) => (
            <div 
              key={exercise.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-3">
                {exercise.title[t('language') as keyof typeof exercise.title]}
              </h2>
              <p className="text-gray-600">
                {exercise.description[t('language') as keyof typeof exercise.description]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhysicalEducation;
