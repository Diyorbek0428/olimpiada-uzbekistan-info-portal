
import React from "react";
import Navbar from "@/components/ui/navbar";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

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
      },
      image: "https://picsum.photos/800/500?random=5"
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
      },
      image: "https://picsum.photos/800/500?random=6"
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
      },
      image: "https://picsum.photos/800/500?random=7"
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
      },
      image: "https://picsum.photos/800/500?random=8"
    }
  ];

  const recommendedEquipment = [
    {
      name: {
        uz: "Gantellar",
        en: "Dumbbells",
        ru: "Гантели"
      },
      description: {
        uz: "Qo'l va yelka mushaklarini mashq qilish uchun",
        en: "For arm and shoulder muscle training",
        ru: "Для тренировки мышц рук и плеч"
      }
    },
    {
      name: {
        uz: "Sport to'shaklari",
        en: "Exercise Mats",
        ru: "Спортивные коврики"
      },
      description: {
        uz: "Gimnastika va cho'zilish mashqlari uchun",
        en: "For gymnastics and stretching exercises",
        ru: "Для гимнастики и упражнений на растяжку"
      }
    },
    {
      name: {
        uz: "Sakrash arqoni",
        en: "Jump Rope",
        ru: "Скакалка"
      },
      description: {
        uz: "Yurak-qon tomir faoliyatini yaxshilash uchun",
        en: "For improving cardiovascular activity",
        ru: "Для улучшения сердечно-сосудистой деятельности"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[300px] bg-blue-900">
        <img 
          src="https://picsum.photos/1920/600?random=9" 
          alt={t('physicalEducation')} 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-4">{t('physicalEducation')}</h1>
            <p className="text-xl text-white max-w-2xl">
              {t('language') === 'uz' ? 
                "Salomatlik va jismoniy rivojlanish uchun tavsiya etilgan mashg'ulotlar" : 
                t('language') === 'en' ? 
                "Recommended exercises for health and physical development" : 
                "Рекомендуемые упражнения для здоровья и физического развития"}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Exercise Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 pb-2 border-b border-gray-300">
            {t('language') === 'uz' ? 
              "Mashq turlari" : 
              t('language') === 'en' ? 
              "Exercise Categories" : 
              "Категории упражнений"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {exercises.map((exercise) => (
              <div 
                key={exercise.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img 
                  src={exercise.image} 
                  alt={exercise.title[t('language') as keyof typeof exercise.title]} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {exercise.title[t('language') as keyof typeof exercise.title]}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {exercise.description[t('language') as keyof typeof exercise.description]}
                  </p>
                  <Link 
                    to={`/physical-education/${exercise.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    {t('readMore')} <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Equipment */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">
            {t('language') === 'uz' ? 
              "Tavsiya etilgan jihozlar" : 
              t('language') === 'en' ? 
              "Recommended Equipment" : 
              "Рекомендуемое оборудование"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedEquipment.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold mb-2">
                  {item.name[t('language') as keyof typeof item.name]}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.description[t('language') as keyof typeof item.description]}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Instructor Contact */}
        <div className="mt-12 bg-blue-900 text-white p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">
                {t('language') === 'uz' ? 
                  "Murabbiy bilan bog'laning" : 
                  t('language') === 'en' ? 
                  "Contact an Instructor" : 
                  "Свяжитесь с инструктором"}
              </h2>
              <p>
                {t('language') === 'uz' ? 
                  "Shaxsiy mashg'ulotlar uchun mutaxassislarimiz bilan bog'laning" : 
                  t('language') === 'en' ? 
                  "Contact our specialists for personalized training" : 
                  "Свяжитесь с нашими специалистами для индивидуальных тренировок"}
              </p>
            </div>
            <Link 
              to="/contact" 
              className="bg-white text-blue-900 hover:bg-gray-100 py-3 px-6 rounded-md font-medium transition-colors"
            >
              {t('language') === 'uz' ? 
                "Bog'lanish" : 
                t('language') === 'en' ? 
                "Contact" : 
                "Связаться"}
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 {t('committee')}. {t('subtitle')}</p>
        </div>
      </footer>
    </div>
  );
};

export default PhysicalEducation;
