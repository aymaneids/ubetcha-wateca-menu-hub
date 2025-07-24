import { Facebook, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="font-serif font-bold text-2xl mb-4">Ubetcha Wateca</h3>
            <p className="text-accent-foreground/80 mb-4 max-w-md">
              An Indigenous, family-owned cafe serving authentic comfort food 
              in the heart of Eagle Butte, South Dakota, on the Cheyenne River Sioux Tribe reservation.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://facebook.com/ubetchawateca" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Facebook className="h-4 w-4" />
                  Follow Us
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">412 South Main Street, Suite A</p>
                  <p className="text-sm">Eagle Butte, SD 57625</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+16059648238" className="text-sm hover:text-primary transition-colors">
                  (605) 964-8238
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:ubetchawateca@gmail.com" className="text-sm hover:text-primary transition-colors">
                  ubetchawateca@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Hours</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Monday:</span>
                <span>Closed</span>
              </div>
              <div className="flex justify-between">
                <span>Tue-Fri:</span>
                <span>11am-6pm</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>11am-6pm</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-accent-foreground/70">
            © 2024 Ubetcha Wateca. Indigenous & Family-Owned Since 2015.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;