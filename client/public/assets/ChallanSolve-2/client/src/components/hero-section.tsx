import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { Shield, Menu } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Logo className="h-14 w-auto" />
              <span className="text-2xl font-bold text-primary">ChallanSettle</span>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-neutral-700 hover:text-primary transition-colors" data-testid="nav-home">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-neutral-700 hover:text-primary transition-colors" data-testid="nav-services">
                Services
              </button>
              <button onClick={() => scrollToSection('process')} className="text-neutral-700 hover:text-primary transition-colors" data-testid="nav-process">
                Process
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-neutral-700 hover:text-primary transition-colors" data-testid="nav-testimonials">
                Testimonials
              </button>
              <Button onClick={() => scrollToSection('contact')} className="bg-primary text-white hover:bg-blue-800" data-testid="nav-contact">
                Contact Us
              </Button>
            </nav>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('home')} className="text-left px-4 py-2 text-neutral-700 hover:text-primary" data-testid="mobile-nav-home">
                  Home
                </button>
                <button onClick={() => scrollToSection('services')} className="text-left px-4 py-2 text-neutral-700 hover:text-primary" data-testid="mobile-nav-services">
                  Services
                </button>
                <button onClick={() => scrollToSection('process')} className="text-left px-4 py-2 text-neutral-700 hover:text-primary" data-testid="mobile-nav-process">
                  Process
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="text-left px-4 py-2 text-neutral-700 hover:text-primary" data-testid="mobile-nav-testimonials">
                  Testimonials
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left px-4 py-2 text-primary font-semibold" data-testid="mobile-nav-contact">
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-primary to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight" data-testid="text-hero-title">
                  Settle Your Traffic Challans 
                  <span className="text-secondary"> Without Court Appearance</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed" data-testid="text-hero-description">
                  Professional legal service for traffic challan settlement. We handle all court proceedings, document filing, and fine deposits - no personal appearance required.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  className="bg-secondary text-white hover:bg-green-600 px-8 py-4 text-lg"
                  data-testid="button-get-started"
                >
                  Get Started Today
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('process')} 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
                  data-testid="button-learn-process"
                >
                  Learn Our Process
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-8 border-t border-blue-700">
                <div className="text-center">
                  <div className="text-2xl font-bold" data-testid="text-cases-settled">500+</div>
                  <div className="text-blue-200 text-sm">Cases Settled</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold" data-testid="text-success-rate">98%</div>
                  <div className="text-blue-200 text-sm">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold" data-testid="text-experience">10+</div>
                  <div className="text-blue-200 text-sm">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Traffic challan fine document image */}
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Traffic challan document and gavel representing legal settlement services" 
                className="rounded-2xl shadow-2xl"
                data-testid="img-hero"
              />
              
              {/* Floating feature card */}
              <div className="absolute -bottom-6 -left-6 bg-white text-neutral-700 p-6 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="bg-secondary p-3 rounded-full">
                    <Shield className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold" data-testid="text-guarantee-title">100% Legal Guarantee</div>
                    <div className="text-sm text-neutral-600" data-testid="text-guarantee-subtitle">Authorized legal representatives</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
