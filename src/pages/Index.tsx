
import { Navbar } from "@/components/ui/navbar";
import { NewsCard } from "@/components/NewsCard";

const Index = () => {
  const newsItems = [
    {
      date: "20 Mart 2025",
      title: "Kirsti Koventri — Xalqaro Olimpiya qo'mitasining yangi Prezidenti",
      image: "https://picsum.photos/800/400", // Placeholder image
      link: "/news/1"
    },
    {
      date: "27 Fevral 2025",
      title: "Diyora Keldiyorova dzyudo sport klubi faoliyatini boshlamoqda",
      image: "https://picsum.photos/800/401", // Placeholder image
      link: "/news/2"
    },
    {
      date: "17 Fevral 2025",
      title: "Uch federatsiyaga yangi rahbar saylandi",
      image: "https://picsum.photos/800/402", // Placeholder image
      link: "/news/3"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] bg-blue-900">
        <img 
          src="https://picsum.photos/1920/600" 
          alt="Hero" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">O'zbekiston Milliy Olimpiya Qo'mitasi</h1>
            <p className="text-xl">Sport orqali yuksalish sari</p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Yangiliklar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </section>

      {/* Media Gallery Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Media Galereya</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-square bg-gray-200">
                <img 
                  src={`https://picsum.photos/400/400?random=${item}`}
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
          <h2 className="text-3xl font-bold mb-8">O'zbekiston Osiyo O'yinlarida</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">So'nggi Yutuqlar</h3>
              <ul className="space-y-4">
                <li>• Oltin medallar: 15</li>
                <li>• Kumush medallar: 12</li>
                <li>• Bronza medallar: 18</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Keyingi O'yinlar</h3>
              <p>2026-yil Milano-Kortina qishki Olimpiya o'yinlari</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
