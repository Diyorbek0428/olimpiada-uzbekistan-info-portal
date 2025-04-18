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
              <img src="/lovable-uploads/43e2d64d-2861-45b7-96b4-583d5d28ab7b.png" alt="Logo" className="h-16" />
              <div>
                <h1 className="text-xl font-bold text-gray-800">O'zbekiston Milliy Olimpiya</h1>
                <h2 className="text-lg text-gray-600">Qo'mitasi</h2>
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
              <Input type="search" placeholder={language === 'uz' ? "Izlash..." : language === 'ru' ? "Поиск..." : "Search..."} className="w-40" />
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
              <NavigationMenuTrigger>O'zbekiston MOQ</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-48 p-2">
                  <li><NavigationMenuLink className="block p-2 hover:bg-gray-100">Qo'mita</NavigationMenuLink></li>
                  <li><NavigationMenuLink className="block p-2 hover:bg-gray-100">Tibbiyot markazi</NavigationMenuLink></li>
                  <li><NavigationMenuLink className="block p-2 hover:bg-gray-100">Rahbariyat va hodimlar</NavigationMenuLink></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Yangiliklar</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-48 p-2">
                  <li><NavigationMenuLink className="block p-2 hover:bg-gray-100">Sport tibbiyot</NavigationMenuLink></li>
                  <li><NavigationMenuLink className="block p-2 hover:bg-gray-100">Intervyu</NavigationMenuLink></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Federatsiyalar</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-48 p-2">
                  <li><NavigationMenuLink className="block p-2 hover:bg-gray-100">O'zbekiston sport federatsiyasi</NavigationMenuLink></li>
                  <li><NavigationMenuLink className="block p-2 hover:bg-gray-100">Xalqaro sport federatsiyasi</NavigationMenuLink></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>O'yinlar</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-48 p-2">
                  <li><NavigationMenuLink className="block p-2 hover:bg-gray-100">Olimpiya o'yinlari</NavigationMenuLink></li>
                  <li><NavigationMenuLink className="block p-2 hover:bg-gray-100">Osiyo o'yinlari</NavigationMenuLink></li>
                  <li><NavigationMenuLink className="block p-2 hover:bg-gray-100">Badan tarbiya mashg'ulotlari</NavigationMenuLink></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Xalqaro munosabatlar</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-48 p-2">
                  <li><NavigationMenuLink className="block p-2 hover:bg-gray-100">Media galereya</NavigationMenuLink></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
