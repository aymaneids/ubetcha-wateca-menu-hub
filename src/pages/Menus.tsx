import Layout from "@/components/Layout";
import WeeklyMenu from "@/components/WeeklyMenu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UtensilsCrossed, Coffee, Sandwich, Soup } from "lucide-react";
import { Link } from "react-router-dom";

const Menus = () => {
  const regularMenuItems = [
    {
      category: "Breakfast & Brunch",
      icon: <Coffee className="h-5 w-5" />,
      items: [
        { name: "Signature Stuffed French Toast", price: "$12.99", description: "Our famous dish - thick-cut bread stuffed with cream cheese, served with fresh berries and syrup" },
        { name: "Hearty Breakfast Platter", price: "$10.99", description: "Two eggs your way, bacon or sausage, hash browns, and toast" },
        { name: "Indigenous Fry Bread", price: "$8.99", description: "Traditional fry bread served with honey butter and jam" },
        { name: "Western Scramble", price: "$9.99", description: "Three eggs scrambled with peppers, onions, cheese, and your choice of meat" },
      ]
    },
    {
      category: "Lunch Favorites",
      icon: <Sandwich className="h-5 w-5" />,
      items: [
        { name: "Buffalo Burger", price: "$13.99", description: "Locally sourced buffalo patty with lettuce, tomato, and onion on a brioche bun" },
        { name: "Club Sandwich", price: "$11.99", description: "Triple-decker with turkey, ham, bacon, lettuce, tomato, and mayo" },
        { name: "Philly Cheesesteak", price: "$12.99", description: "Sliced beef with peppers, onions, and melted cheese on a hoagie roll" },
        { name: "Grilled Chicken Wrap", price: "$10.99", description: "Seasoned chicken with mixed greens, tomatoes, and ranch in a tortilla wrap" },
      ]
    },
    {
      category: "Soups & Comfort",
      icon: <Soup className="h-5 w-5" />,
      items: [
        { name: "Homemade Chili", price: "$7.99", description: "Hearty beef and bean chili topped with cheese and served with cornbread" },
        { name: "Chicken Noodle Soup", price: "$6.99", description: "Classic comfort soup made from scratch with tender chicken and vegetables" },
        { name: "Bison Stew", price: "$9.99", description: "Traditional stew with tender bison meat, potatoes, and root vegetables" },
        { name: "Soup & Salad Combo", price: "$8.99", description: "Cup of soup of the day with fresh garden salad" },
      ]
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <UtensilsCrossed className="h-8 w-8 text-primary" />
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Our Menus
            </h1>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From our dynamic weekly specials to our beloved regular menu items, 
            discover the authentic flavors that make Ubetcha Wateca special.
          </p>
        </div>
      </section>

      {/* Weekly Menu */}
      <WeeklyMenu />

      {/* Regular Menu */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Our Regular Menu
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These beloved dishes are available whenever we're open. 
              Each item is prepared fresh daily with quality ingredients.
            </p>
          </div>

          <Tabs defaultValue="breakfast" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="breakfast" className="flex items-center gap-2">
                <Coffee className="h-4 w-4" />
                Breakfast & Brunch
              </TabsTrigger>
              <TabsTrigger value="lunch" className="flex items-center gap-2">
                <Sandwich className="h-4 w-4" />
                Lunch Favorites
              </TabsTrigger>
              <TabsTrigger value="comfort" className="flex items-center gap-2">
                <Soup className="h-4 w-4" />
                Soups & Comfort
              </TabsTrigger>
            </TabsList>

            {regularMenuItems.map((category, categoryIndex) => (
              <TabsContent 
                key={categoryIndex} 
                value={categoryIndex === 0 ? "breakfast" : categoryIndex === 1 ? "lunch" : "comfort"}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="flex justify-between items-start">
                          <span className="font-serif text-lg">{item.name}</span>
                          <span className="text-primary font-bold">{item.price}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Catering CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Planning an Event?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Let us cater your next gathering with our delicious, authentic dishes. 
            Perfect for meetings, celebrations, and special occasions.
          </p>
          <Button size="lg" variant="outline" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link to="/catering">View Catering Options</Link>
          </Button>
        </div>
      </section>

      {/* Menu Notes */}
      <section className="py-12 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground italic">
            Prices subject to change. Some items may not be available based on seasonal ingredients. 
            <br />
            Please call ahead to confirm availability: <a href="tel:+16059648238" className="text-primary hover:underline">(605) 964-8238</a>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Menus;