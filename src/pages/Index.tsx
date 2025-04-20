
import { Navbar } from "@/components/ui/navbar";
import { NewsCard } from "@/components/NewsCard";
import { useLanguage } from "@/context/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { Calendar, Flag, Medal, Users, ChevronRight } from "lucide-react";

const Index = () => {
  const { t } = useLanguage();

  const newsItems = [
    {
      date: "20 Mart 2025",
      title: "Kirsti Koventri — Xalqaro Olimpiya qo'mitasining yangi Prezidenti",
      image: "https://picsum.photos/800/400", 
      link: "/news/1"
    },
    {
      date: "27 Fevral 2025",
      title: "Diyora Keldiyorova dzyudo sport klubi faoliyatini boshlamoqda",
      image: "https://picsum.photos/800/401", 
      link: "/news/2"
    },
    {
      date: "17 Fevral 2025",
      title: "Uch federatsiyaga yangi rahbar saylandi",
      image: "https://picsum.photos/800/402", 
      link: "/news/3"
    },
  ];

  const carouselItems = [
    {
      title: "Paris 2024 Olimpiya o'yinlari",
      image: "https://picsum.photos/1920/600?random=1",
      link: "/games/paris-2024"
    },
    {
      title: "Los Angeles 2028 Olimpiya o'yinlari",
      image: "https://picsum.photos/1920/600?random=2",
      link: "/games/los-angeles-2028"
    },
    {
      title: "Milano-Kortina 2026 Qishki Olimpiya o'yinlari",
      image: "https://picsum.photos/1920/600?random=3",
      link: "/games/milano-cortina-2026"
    }
  ];

  const quickLinks = [
    { icon: <Calendar className="w-6 h-6" />, text: t('olympicGames'), link: "/games" },
    { icon: <Medal className="w-6 h-6" />, text: t('medicalCenter'), link: "/medical" },
    { icon: <Users className="w-6 h-6" />, text: t('federations'), link: "/federations" },
    { icon: <Flag className="w-6 h-6" />, text: t('physicalEducation'), link: "/physical-education" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Carousel Section */}
      <section className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {carouselItems.map((item, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[550px]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="container mx-auto px-4 pb-16">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{item.title}</h2>
                      <Link 
                        to={item.link} 
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
                      >
                        {t('readMore')} <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Quick Links Section */}
      <section className="bg-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <Link 
                key={index} 
                to={link.link} 
                className="flex flex-col items-center justify-center p-4 hover:bg-blue-50 transition-colors rounded-lg"
              >
                <div className="bg-blue-100 p-3 rounded-full mb-3 text-blue-600">
                  {link.icon}
                </div>
                <span className="text-center font-medium">{link.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">{t('news')}</h2>
          <Link to="/news" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
            {t('readMore')} <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </section>

      {/* Media Gallery Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">{t('mediaGallery')}</h2>
            <Link to="/media" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
              {t('readMore')} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-square bg-gray-200 hover:opacity-90 transition-opacity cursor-pointer">
                <img 
                  src={`https://picsum.photos/400/400?random=${item+10}`}
                  alt={`Gallery item ${item}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Asian Games Section */}
      <section className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{t('asianGames')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t('latestAchievements')}</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-yellow-400"></div> 
                  {t('goldMedals')}: 15
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                  {t('silverMedals')}: 12
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-amber-700"></div>
                  {t('bronzeMedals')}: 18
                </li>
              </ul>
            </div>
            <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t('nextGames')}</h3>
              <p className="mb-4">{t('winterOlympics')}</p>
              <Link 
                to="/games/winter-olympics" 
                className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-gray-100 py-2 px-4 rounded-md transition-colors"
              >
                {t('readMore')} <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">{t('committee')}</h3>
              <p className="text-gray-300 mb-4">{t('subtitle')}</p>
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-blue-400">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{t('about')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/committee" className="text-gray-300 hover:text-white transition-colors">
                    {t('committee')}
                  </Link>
                </li>
                <li>
                  <Link to="/management" className="text-gray-300 hover:text-white transition-colors">
                    {t('management')}
                  </Link>
                </li>
                <li>
                  <Link to="/medical" className="text-gray-300 hover:text-white transition-colors">
                    {t('medicalCenter')}
                  </Link>
                </li>
                <li>
                  <Link to="/federations" className="text-gray-300 hover:text-white transition-colors">
                    {t('federations')}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{t('internationalRelations')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/international" className="text-gray-300 hover:text-white transition-colors">
                    IOC
                  </Link>
                </li>
                <li>
                  <Link to="/asian-games" className="text-gray-300 hover:text-white transition-colors">
                    {t('asianGames')}
                  </Link>
                </li>
                <li>
                  <Link to="/olympic-games" className="text-gray-300 hover:text-white transition-colors">
                    {t('olympicGames')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 {t('committee')}. {t('subtitle')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
