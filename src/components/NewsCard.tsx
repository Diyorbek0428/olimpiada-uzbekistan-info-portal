
import { Link } from "react-router-dom";
import { CalendarDays } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";

interface NewsCardProps {
  date: string;
  title: string;
  image: string;
  link: string;
}

export const NewsCard = ({ date, title, image, link }: NewsCardProps) => {
  return (
    <Card className="overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardContent className="p-4">
        <div className="flex items-center gap-2 text-gray-500 mb-2">
          <CalendarDays className="w-4 h-4" />
          <span className="text-sm">{date}</span>
        </div>
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
      </CardContent>
      <CardFooter>
        <Link to={link}>
          <Button variant="default">Batafsil</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
