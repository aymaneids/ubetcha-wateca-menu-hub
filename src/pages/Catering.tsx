import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Calendar, Star, Phone, Mail, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import foodSpread from "@/assets/food-spread.jpg";

const Catering = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Catering Inquiry Submitted!",
      description: "We'll get back to you within 24 hours to discuss your event details.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      guestCount: "",
      budget: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const cateringPackages = [
    {
      name: "Office Lunch Package",
      price: "Starting at $15/person",
      description: "Perfect for business meetings and corporate events",
      includes: ["Assorted sandwiches", "Fresh salads", "Chips and sides", "Beverages", "Setup and cleanup"]
    },
    {
      name: "Family Celebration",
      price: "Starting at $20/person",
      description: "Ideal for family gatherings and milestone celebrations",
      includes: ["Choice of 2 main dishes", "2 side dishes", "Dinner rolls", "Dessert option", "Full service available"]
    },
    {
      name: "Community Event",
      price: "Starting at $18/person",
      description: "Great for community gatherings and fundraisers",
      includes: ["Buffet-style service", "Traditional favorites", "Vegetarian options", "Beverages", "Disposable plates/utensils"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      event: "Wedding Reception",
      quote: "Ubetcha Wateca catered our wedding reception and exceeded all expectations. The food was absolutely delicious and the service was impeccable. Our guests are still talking about the meal!"
    },
    {
      name: "Mark Thompson",
      event: "Corporate Meeting",
      quote: "We've used their catering services for several company events. They're always professional, on time, and the food is consistently excellent. Highly recommend for any business function."
    },
    {
      name: "Linda Bear Shield",
      event: "Family Reunion",
      quote: "The perfect choice for our large family reunion. They understood exactly what we needed and delivered amazing traditional and modern dishes that pleased everyone from kids to elders."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${foodSpread})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="h-8 w-8" />
            <h1 className="font-serif text-4xl md:text-5xl font-bold">
              Catering Services
            </h1>
          </div>
          <p className="text-xl leading-relaxed mb-8">
            Let us bring the warmth and flavor of Ubetcha Wateca to your next event. 
            From intimate gatherings to large celebrations, we'll make it memorable.
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
            <a href="#inquiry-form">Get Your Quote</a>
          </Button>
        </div>
      </section>

      {/* Catering Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Catering Packages
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our popular packages or let us create a custom menu 
              perfectly tailored to your event and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cateringPackages.map((pkg, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-primary">{pkg.name}</CardTitle>
                  <p className="text-2xl font-bold text-foreground">{pkg.price}</p>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              What We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-lg font-semibold mb-2">Events of All Sizes</h3>
              <p className="text-sm text-muted-foreground">From intimate gatherings of 10 to large events of 200+</p>
            </div>
            <div className="text-center">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-lg font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-sm text-muted-foreground">Available for breakfast, lunch, dinner, and special events</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-lg font-semibold mb-2">Full Service Options</h3>
              <p className="text-sm text-muted-foreground">Setup, service, and cleanup available</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-lg font-semibold mb-2">Custom Menus</h3>
              <p className="text-sm text-muted-foreground">Tailored to your preferences and dietary needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Happy Clients
            </h2>
            <p className="text-muted-foreground">See what our catering clients have to say</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Request a Quote
            </h2>
            <p className="text-muted-foreground">
              Tell us about your event and we'll create a custom proposal just for you.
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name" 
                      required 
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="eventType">Event Type</Label>
                    <Select value={formData.eventType} onValueChange={(value) => handleInputChange("eventType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="family">Family Gathering</SelectItem>
                        <SelectItem value="community">Community Event</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="eventDate">Event Date</Label>
                    <Input 
                      id="eventDate" 
                      type="date" 
                      value={formData.eventDate}
                      onChange={(e) => handleInputChange("eventDate", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="guestCount">Number of Guests</Label>
                    <Input 
                      id="guestCount" 
                      type="number" 
                      placeholder="Approximate number"
                      value={formData.guestCount}
                      onChange={(e) => handleInputChange("guestCount", e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-500">Under $500</SelectItem>
                      <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                      <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                      <SelectItem value="2000-plus">$2,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Event Details & Special Requests</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your event, any dietary restrictions, special requests, or other details that would help us serve you better..."
                    className="min-h-[120px]"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Catering Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Prefer to call? We'd love to discuss your event over the phone!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <a href="tel:+16059648238" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  (605) 964-8238
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:ubetchawateca@gmail.com" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  ubetchawateca@gmail.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Catering;