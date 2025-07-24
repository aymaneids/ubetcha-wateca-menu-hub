import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Car, UtensilsCrossed } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We'd love to hear from you! Whether you have questions about our menu, 
            want to place an order, or are interested in catering, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <MapPin className="h-6 w-6" />
                    Visit Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold mb-2">412 South Main Street, Suite A</p>
                  <p className="text-muted-foreground mb-4">Eagle Butte, SD 57625</p>
                  <p className="text-sm text-muted-foreground">
                    Located in the heart of Eagle Butte on the Cheyenne River Sioux Tribe reservation. 
                    Easy parking available on Main Street.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <Phone className="h-6 w-6" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="lg" asChild className="w-full">
                    <a href="tel:+16059648238" className="text-lg">
                      (605) 964-8238
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground mt-3">
                    Call to place orders, ask about daily specials, or inquire about catering services.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <Mail className="h-6 w-6" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="lg" asChild className="w-full">
                    <a href="mailto:ubetchawateca@gmail.com" className="text-lg">
                      ubetchawateca@gmail.com
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground mt-3">
                    For catering inquiries, special requests, or general questions.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <Facebook className="h-6 w-6" />
                    Follow Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="lg" asChild className="w-full">
                    <a href="https://facebook.com/ubetchawateca" target="_blank" rel="noopener noreferrer">
                      Facebook
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground mt-3">
                    Stay updated with our daily specials, events, and community news.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-6">
              {/* Embedded Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="bg-muted h-80 rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="h-12 w-12 mx-auto mb-4" />
                      <p className="text-lg font-semibold">Interactive Map</p>
                      <p className="text-sm">
                        412 South Main Street, Suite A<br />
                        Eagle Butte, SD 57625
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <Clock className="h-6 w-6" />
                    Hours of Operation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-semibold">Monday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-semibold">Tuesday</span>
                      <span>11:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-semibold">Wednesday</span>
                      <span>11:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-semibold">Thursday</span>
                      <span>11:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-semibold">Friday</span>
                      <span>11:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-semibold">Saturday</span>
                      <span>11:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-semibold">Sunday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 italic">
                    Hours may vary on holidays. Please call ahead to confirm.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">How We Serve You</h2>
            <p className="text-xl text-primary-foreground/90">
              Multiple convenient ways to enjoy Ubetcha Wateca
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <UtensilsCrossed className="h-12 w-12 mx-auto mb-4" />
              <h3 className="font-serif text-lg font-semibold mb-2">Dine-In</h3>
              <p className="text-sm text-primary-foreground/80">
                Enjoy our cozy atmosphere and full-service dining experience
              </p>
            </div>
            <div className="text-center">
              <Phone className="h-12 w-12 mx-auto mb-4" />
              <h3 className="font-serif text-lg font-semibold mb-2">Takeout</h3>
              <p className="text-sm text-primary-foreground/80">
                Call ahead and pick up your order when it's ready
              </p>
            </div>
            <div className="text-center">
              <Car className="h-12 w-12 mx-auto mb-4" />
              <h3 className="font-serif text-lg font-semibold mb-2">Curbside</h3>
              <p className="text-sm text-primary-foreground/80">
                Stay in your car - we'll bring your order right to you
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 mx-auto mb-4 bg-primary-foreground rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xl">🎉</span>
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Catering</h3>
              <p className="text-sm text-primary-foreground/80">
                Let us cater your next event with our delicious menu
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Here */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
            Getting Here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="font-serif text-xl font-semibold mb-4 text-primary">
                From Pierre, SD (North)
              </h3>
              <p className="text-muted-foreground">
                Take US-83 S for approximately 60 miles to Eagle Butte. 
                Turn right on Main Street. We're located at 412 South Main Street, Suite A.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold mb-4 text-primary">
                From Rapid City, SD (West)
              </h3>
              <p className="text-muted-foreground">
                Take I-90 E to US-83 N (Exit 192). Follow US-83 N for about 85 miles to Eagle Butte. 
                Turn left on Main Street to reach our location.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-muted-foreground">
              <strong>Parking:</strong> Free street parking available on Main Street and surrounding areas.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;