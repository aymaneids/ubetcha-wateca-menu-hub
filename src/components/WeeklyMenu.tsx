import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, CalendarDays } from "lucide-react";

const WeeklyMenu = () => {
  const weeklySchedule = [
    { day: "Monday", hours: "Closed", items: [] },
    { 
      day: "Tuesday", 
      hours: "11am-6pm", 
      items: ["Regular Menu Available", "Hearty Soups", "Fresh Sandwiches"] 
    },
    { 
      day: "Wednesday", 
      hours: "11am-6pm", 
      items: ["Comfort Classics", "Daily Special", "Fresh Salads"] 
    },
    { 
      day: "Thursday", 
      hours: "11am-6pm", 
      items: ["Signature Dishes", "Homemade Soups", "Chef's Special"] 
    },
    { 
      day: "Friday", 
      hours: "11am-6pm", 
      items: ["Weekend Favorites", "Fresh Catch", "Family Platters"] 
    },
    { 
      day: "Saturday", 
      hours: "11am-6pm", 
      items: ["Brunch Specials", "Stuffed French Toast", "Weekend Treats"] 
    },
    { day: "Sunday", hours: "Closed", items: [] },
  ];

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CalendarDays className="h-6 w-6 text-primary" />
            <h2 className="font-serif text-3xl font-bold text-foreground">
              This Week's Menu
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our menu changes weekly to bring you the freshest ingredients and seasonal favorites. 
            Check back often for new delicious offerings!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {weeklySchedule.map((day) => (
            <Card 
              key={day.day} 
              className={`transition-all duration-300 hover:shadow-lg ${
                day.hours === "Closed" 
                  ? "opacity-60 bg-muted/30" 
                  : "hover:shadow-[var(--warm-glow)]"
              }`}
            >
              <CardHeader className="pb-3">
                <CardTitle className="font-serif text-xl text-primary">
                  {day.day}
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{day.hours}</span>
                </div>
              </CardHeader>
              
              {day.items.length > 0 && (
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {day.items.map((item, index) => (
                      <li 
                        key={index} 
                        className="text-sm text-foreground/80 flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground italic">
            Menu items subject to change based on availability and seasonal ingredients.
            <br />
            Call ahead to confirm specific dishes: <a href="tel:+16059648238" className="text-primary hover:underline">(605) 964-8238</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeeklyMenu;