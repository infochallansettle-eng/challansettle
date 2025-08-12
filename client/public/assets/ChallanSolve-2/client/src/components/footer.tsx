import Logo from "@/components/logo";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <Logo className="h-12 w-auto" />
              <span className="text-2xl font-bold" data-testid="text-footer-logo">ChallanSettle</span>
            </div>
            <p className="text-blue-100 leading-relaxed max-w-md" data-testid="text-footer-description">
              Professional legal services for traffic challan settlement. We ensure no personal court appearance is required while providing complete legal support and documentation.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition-colors" data-testid="button-social-facebook">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition-colors" data-testid="button-social-twitter">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition-colors" data-testid="button-social-linkedin">
                <Linkedin className="h-5 w-5" />
              </button>
              <button className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition-colors" data-testid="button-social-instagram">
                <Instagram className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="text-quick-links-title">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-blue-100 hover:text-white transition-colors text-left"
                  data-testid="link-footer-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-blue-100 hover:text-white transition-colors text-left"
                  data-testid="link-footer-services"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('process')} 
                  className="text-blue-100 hover:text-white transition-colors text-left"
                  data-testid="link-footer-process"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')} 
                  className="text-blue-100 hover:text-white transition-colors text-left"
                  data-testid="link-footer-testimonials"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-blue-100 hover:text-white transition-colors text-left"
                  data-testid="link-footer-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Legal Info */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="text-legal-services-title">Legal Services</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-blue-100 hover:text-white transition-colors text-left" data-testid="link-traffic-settlement">
                  Traffic Challan Settlement
                </button>
              </li>
              <li>
                <button className="text-blue-100 hover:text-white transition-colors text-left" data-testid="link-court-representation">
                  Court Representation
                </button>
              </li>
              <li>
                <button className="text-blue-100 hover:text-white transition-colors text-left" data-testid="link-document-filing">
                  Document Filing
                </button>
              </li>
              <li>
                <button className="text-blue-100 hover:text-white transition-colors text-left" data-testid="link-legal-consultation">
                  Legal Consultation
                </button>
              </li>
              <li>
                <button className="text-blue-100 hover:text-white transition-colors text-left" data-testid="link-privacy-policy">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-12 pt-8 text-center">
          <p className="text-blue-100" data-testid="text-copyright">
            &copy; 2024 ChallanSettle. All rights reserved. | Professional Legal Services for Traffic Challan Settlement
          </p>
        </div>
      </div>
    </footer>
  );
}
