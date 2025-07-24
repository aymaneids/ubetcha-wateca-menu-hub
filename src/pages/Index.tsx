import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UtensilsCrossed, Clock, Car, Phone, Star, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import WeeklyMenu from "@/components/WeeklyMenu";
import heroImage from "@/assets/hero-stuffed-french-toast.jpg";
import familyImage from "@/assets/family-story-image.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Ubetcha Wateca
          </h1>
          <p className="font-serif text-xl md:text-2xl mb-4 italic">
            Food for the Soul
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            An Indigenous, Family-Owned Cafe in the Heart of Eagle Butte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="font-semibold">
              <Link to="/menus">See This Week's Menu</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 backdrop-blur border-white text-white hover:bg-white hover:text-accent">
              <Link to="/catering">Catering Inquiries</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Weekly Menu Section */}
      <WeeklyMenu />

      {/* Services Bar */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <UtensilsCrossed className="h-12 w-12 mb-4" />
              <h3 className="font-serif text-lg font-semibold mb-2">Dine-In</h3>
              <p className="text-sm text-primary-foreground/80">Enjoy our cozy atmosphere</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-12 w-12 mb-4" />
              <h3 className="font-serif text-lg font-semibold mb-2">Takeout</h3>
              <p className="text-sm text-primary-foreground/80">Quick and convenient</p>
            </div>
            <div className="flex flex-col items-center">
              <Car className="h-12 w-12 mb-4" />
              <h3 className="font-serif text-lg font-semibold mb-2">Curbside Pickup</h3>
              <p className="text-sm text-primary-foreground/80">Stay in your car</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 mb-4" />
              <h3 className="font-serif text-lg font-semibold mb-2">Catering</h3>
              <p className="text-sm text-primary-foreground/80">Events & gatherings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Brief */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-3xl font-bold text-foreground">Our Story</h2>
              </div>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Since 2015, Ubetcha Wateca has been serving the Eagle Butte community with 
                authentic comfort food that feeds both body and soul. As an Indigenous, 
                family-owned restaurant on the Cheyenne River Sioux Tribe reservation, 
                we take pride in our heritage and our "little family" of dedicated staff.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "Wateca" means "food" in Lakota, and our philosophy is simple: 
                Authentic. Genuine. Simple. Comfort. Hearty. Soulful.
              </p>
              <Button asChild>
                <Link to="/story">Read Our Full Story</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={familyImage} 
                alt="The family behind Ubetcha Wateca" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="h-6 w-6 text-primary fill-primary" />
              <h2 className="font-serif text-3xl font-bold text-foreground">
                What Our Community Says
              </h2>
            </div>
            <p className="text-xl text-primary font-semibold">94% of customers recommend us!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "The best comfort food in Eagle Butte! Their stuffed French toast is absolutely incredible. 
                  You can taste the love in every bite."
                </p>
                <p className="font-semibold">- Sarah M.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "A true gem in our community. The family atmosphere and authentic flavors 
                  make this place special. Highly recommend their catering services!"
                </p>
                <p className="font-semibold">- Michael T.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Ubetcha Wateca feels like home. The hearty meals and warm hospitality 
                  keep us coming back week after week. A true community treasure."
                </p>
                <p className="font-semibold">- Jennifer L.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <a href="tel:+16059648238" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call to Place Your Order
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
