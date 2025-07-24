import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Heart, Users, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-stuffed-french-toast.jpg";
import familyImage from "@/assets/family-story-image.jpg";
import foodSpread from "@/assets/food-spread.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      src: heroImage,
      alt: "Signature Stuffed French Toast",
      category: "food",
      title: "Signature Stuffed French Toast"
    },
    {
      src: foodSpread,
      alt: "Delicious food spread",
      category: "food",
      title: "Fresh Daily Specials"
    },
    {
      src: cafeInterior,
      alt: "Cozy cafe interior",
      category: "interior",
      title: "Warm & Welcoming Atmosphere"
    },
    {
      src: familyImage,
      alt: "The Ubetcha Wateca family",
      category: "family",
      title: "Our Dedicated Team"
    },
    // Placeholder items to showcase variety
    {
      src: heroImage,
      alt: "Hearty breakfast platter",
      category: "food",
      title: "Hearty Breakfast Favorites"
    },
    {
      src: foodSpread,
      alt: "Lunch selection",
      category: "food",
      title: "Satisfying Lunch Options"
    },
    {
      src: cafeInterior,
      alt: "Dining area",
      category: "interior",
      title: "Comfortable Dining Space"
    },
    {
      src: familyImage,
      alt: "Community gathering",
      category: "community",
      title: "Community Celebrations"
    }
  ];

  const categories = [
    { id: "all", name: "All Photos", icon: <Camera className="h-4 w-4" /> },
    { id: "food", name: "Our Food", icon: <UtensilsCrossed className="h-4 w-4" /> },
    { id: "interior", name: "Our Space", icon: <Heart className="h-4 w-4" /> },
    { id: "family", name: "Our Team", icon: <Users className="h-4 w-4" /> },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="h-8 w-8 text-primary" />
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Gallery
            </h1>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Take a visual journey through Ubetcha Wateca - from our mouth-watering dishes 
            to our warm, welcoming atmosphere and the faces that make it all possible.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button 
                key={category.id} 
                variant="outline" 
                className="flex items-center gap-2"
              >
                {category.icon}
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-serif font-semibold text-lg drop-shadow-lg">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Experience Ubetcha Wateca
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every photo tells a story of tradition, quality, and community. 
              Come visit us and become part of our story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src={heroImage} 
                  alt="Our signature dishes" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Signature Dishes</h3>
              <p className="text-muted-foreground">
                From our famous Stuffed French Toast to hearty comfort classics, 
                every dish is crafted with love and authentic flavors.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src={cafeInterior} 
                  alt="Welcoming atmosphere" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Welcoming Atmosphere</h3>
              <p className="text-muted-foreground">
                Our cozy interior reflects our values - warm, authentic, and designed 
                to make every guest feel like family.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src={familyImage} 
                  alt="Our dedicated team" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Our Family</h3>
              <p className="text-muted-foreground">
                Meet the dedicated team behind Ubetcha Wateca - Indigenous-owned, 
                family-operated, and committed to serving our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Ready to Experience It Yourself?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Pictures only tell part of the story. Come taste the authentic flavors 
            and feel the warm hospitality that make Ubetcha Wateca special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link to="/menus">View Our Menu</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="tel:+16059648238">Call to Order</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;