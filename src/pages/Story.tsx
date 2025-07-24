import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Leaf, Award } from "lucide-react";
import familyImage from "@/assets/family-story-image.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";

const Story = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The heart and soul behind Ubetcha Wateca - where Indigenous heritage 
            meets modern comfort food in the heart of Eagle Butte.
          </p>
        </div>
      </section>

      {/* Main Story Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Rooted in Heritage, Serving with Love
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Since opening our doors in 2015, Ubetcha Wateca has been more than just a restaurant - 
                we're a gathering place for our community here in Eagle Butte, South Dakota, 
                on the beautiful Cheyenne River Sioux Tribe reservation.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our name, "Wateca," comes from the Lakota word for "food," and it represents 
                everything we believe in: nourishing our community with authentic, heartfelt meals 
                that bring people together. We are proudly Indigenous-owned and operated, 
                carrying forward the traditions of hospitality and sharing that have always 
                been central to our culture.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What started as a dream to serve our community has grown into a beloved local institution, 
                supported by our loyal customers who have become part of our extended family.
              </p>
            </div>
            <div className="relative">
              <img 
                src={familyImage} 
                alt="The Ubetcha Wateca family" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>

          {/* Philosophy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-4">Authentic & Genuine</h3>
                <p className="text-muted-foreground">
                  Every dish is prepared with traditional techniques and genuine care, 
                  honoring both our heritage and our commitment to quality.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-4">Simple & Comfort</h3>
                <p className="text-muted-foreground">
                  We believe in the power of simple, wholesome ingredients transformed 
                  into comfort food that feeds both body and soul.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-4">Hearty & Soulful</h3>
                <p className="text-muted-foreground">
                  Our meals are generous in portion and rich in flavor, designed to bring 
                  satisfaction and warmth to everyone who walks through our doors.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Community Impact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={cafeInterior} 
                alt="Inside Ubetcha Wateca cafe" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-3xl font-bold text-foreground">
                  A Community Cornerstone
                </h2>
              </div>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Over the years, we've had the privilege of serving not just meals, but memories. 
                From family celebrations to community gatherings, business meetings to casual 
                catch-ups with friends, Ubetcha Wateca has become a central part of Eagle Butte's social fabric.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our "little family" of dedicated staff works tirelessly to ensure every customer 
                feels welcomed and valued. With a 94% customer recommendation rate, we're proud 
                to have earned the trust and love of our community.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're more than a restaurant - we're neighbors, friends, and proud members 
                of the Cheyenne River Sioux Tribe community, committed to serving our people 
                with the respect, quality, and warmth they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Come Be Part of Our Story
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Whether you're a longtime neighbor or visiting Eagle Butte for the first time, 
            we invite you to experience the warmth and flavor that makes Ubetcha Wateca special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/menus" 
              className="inline-flex items-center justify-center px-6 py-3 bg-background text-foreground rounded-md font-semibold hover:bg-background/90 transition-colors"
            >
              View Our Menu
            </a>
            <a 
              href="tel:+16059648238" 
              className="inline-flex items-center justify-center px-6 py-3 border border-primary-foreground text-primary-foreground rounded-md font-semibold hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              Call to Order
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Story;