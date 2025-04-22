

import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "./navigation-menu";
import { Facebook, Instagram, Search, Twitter } from "lucide-react";
import { Send as Telegram } from "lucide-react";
import { Input } from "./input";
import { useLanguage } from "@/context/LanguageContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="w-full bg-white">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-4 border-b">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-3">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 100 100" 
                className="h-16 w-16"
                fill="none"
              >
                {/* Olympic Rings Inspired Background */}
                <rect x="0" y="0" width="100" height="100" rx="10" fill="#0081C8" />
                
                {/* Stylized Olympic Rings */}
                <circle cx="30" cy="40" r="15" stroke="#FFFFFF" strokeWidth="3" />
                <circle cx="55" cy="40" r="15" stroke="#FFFFFF" strokeWidth="3" />
                <circle cx="80" cy="40" r="15" stroke="#FFFFFF" strokeWidth="3" />
                <circle cx="42.5" cy="60" r="15" stroke="#FFFFFF" strokeWidth="3" />
                <circle cx="67.5" cy="60" r="15" stroke="#FFFFFF" strokeWidth="3" />
                
                {/* Uzbekistan Text */}
                <text 
                  x="50" 
                  y="90" 
                  textAnchor="middle" 
                  fill="#FFFFFF" 
                  fontSize="12" 
                  fontWeight="bold"
                >
                  O'ZBEKISTON
                </text>
              </svg>
              <div>
                <h1 className="text-xl font-bold text-gray-800">O'zbekiston Olimpiadasi</h1>
                <h2 className="text-lg text-gray-600">{t('subtitle')}</h2>
                <div className="flex gap-2 text-sm text-gray-500">
                  <span>CITIUS</span>
                  <span>ALTIUS</span>
                  <span>FORTIUS</span>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              <Input 
                type="search" 
                placeholder={t('search')} 
                className="w-40" 
              />
            </div>
            
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-400">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <Telegram className="w-5 h-5" />
              </a>
              <Select 
                value={language}
                onValueChange={(value) => setLanguage(value as 'uz' | 'en' | 'ru')}
              >
                <SelectTrigger className="w-[70px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="uz">O'z</SelectItem>
                  <SelectItem value="en">En</SelectItem>
                  <SelectItem value="ru">Ру</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <NavigationMenu className="py-2">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>{t('about')}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-48 p-2">
                  <li>
                    <a href="https://www.olympic.uz/oz/menu/komitet" className="block p-2 hover:bg-gray-100">
                      {t('committee')}
                    </a>
                  </li>
                  <li>
                    <a href="https://www.olympic.uz/oz/menu/meditsinskij-tsentr" className="block p-2 hover:bg-gray-100">
                      {t('medicalCenter')}
                    </a>
                  </li>
                  <li>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="w-full text-left">
                        {t('management')}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-48 p-2">
                          <li>
                            <a href="https://www.olympic.uz/oz/manage/predsedatel" className="block p-2 hover:bg-gray-100">
                              {t('chairman')}
                            </a>
                          </li>
                          <li>
                            <a href="https://www.olympic.uz/oz/manage/generalnyj-sekretar" className="block p-2 hover:bg-gray-100">
                              {t('generalSecretary')}
                            </a>
                          </li>
                          <li>
                            <a href="https://www.olympic.uz/oz/manage/zamestiteli-predsedatelja" className="block p-2 hover:bg-gray-100">
                              {t('viceChairman')}
                            </a>
                          </li>
                          <li>
                            <a href="https://www.olympic.uz/oz/manage/ispolnitelnyj-komitet" className="block p-2 hover:bg-gray-100">
                              Ijroiya qo'mitasi
                            </a>
                          </li>
                          <li>
                            <a href="https://www.olympic.uz/oz/manage/sotrudniki" className="block p-2 hover:bg-gray-100">
                              Ijroiya apparati
                            </a>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>{t('news')}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-48 p-2">
                  <li>
                    <a href="https://www.olympic.uz/oz/news/category/sport-i-meditsina" className="block p-2 hover:bg-gray-100">
                      {t('sportsMedicine')}
                    </a>
                  </li>
                  <li>
                    <a href="https://www.olympic.uz/oz/news/category/intervyu" className="block p-2 hover:bg-gray-100">
                      {t('interview')}
                    </a>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>{t('federations')}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-48 p-2">
                  <li>
                    <a href="https://www.olympic.uz/oz/federatsii/uzbekistonskij-sport-federatsiya" className="block p-2 hover:bg-gray-100">
                      {t('uzSportsFederation')}
                    </a>
                  </li>
                  <li>
                    <a href="https://www.olympic.uz/oz/federatsii/internationalnyj-sport-federatsiya" className="block p-2 hover:bg-gray-100">
                      {t('intSportsFederation')}
                    </a>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>{t('games')}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-48 p-2">
                  <li>
                    <a href="https://www.olympic.uz/oz/olympik-olympiad" className="block p-2 hover:bg-gray-100">
                      {t('olympicGames')}
                    </a>
                  </li>
                  <li>
                    <a href="https://www.olympic.uz/oz/asian-olympiad" className="block p-2 hover:bg-gray-100">
                      {t('asianGames')}
                    </a>
                  </li>
                  <li>
                    <Link to="/physical-education" className="block p-2 hover:bg-gray-100">
                      {t('physicalEducation')}
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>{t('internationalRelations')}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-48 p-2">
                  <li>
                    <a href="https://www.olympic.uz/oz/media-galereya" className="block p-2 hover:bg-gray-100">
                      {t('mediaGallery')}
                    </a>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

