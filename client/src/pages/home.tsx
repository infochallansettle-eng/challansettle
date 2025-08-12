import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Phone,
  Mail,
  Clock,
  Shield,
  CheckCircle,
  FileText,
  Upload,
  Gavel,
  DollarSign,
  Menu,
  Star,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
  Info,
  PlaneTakeoff,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      problemDescription: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message || "Your message has been sent successfully.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Header Navigation */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center space-x-3">
                <img 
                  src="/assets/challan-settle-logo.jpeg" 
                  alt="ChallanSettle Logo" 
                  className="h-12 w-auto"
                />
                <div>
                  <h1 className="text-xl font-bold text-navy">Challan Settle</h1>
                  <p className="text-xs text-gray-600">Legal Services</p>
                </div>
              </div>
            </div>
            
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-900 hover:text-navy px-3 py-2 text-sm font-medium transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("process")}
                  className="text-gray-900 hover:text-navy px-3 py-2 text-sm font-medium transition-colors"
                >
                  Process
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-900 hover:text-navy px-3 py-2 text-sm font-medium transition-colors"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-navy text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-deep-blue transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </nav>
            
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-900 hover:text-navy block px-3 py-2 text-base font-medium w-full text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("process")}
                  className="text-gray-900 hover:text-navy block px-3 py-2 text-base font-medium w-full text-left"
                >
                  Process
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-900 hover:text-navy block px-3 py-2 text-base font-medium w-full text-left"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-navy text-white block px-3 py-2 rounded-lg text-base font-medium w-full text-left mt-4"
                >
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-deep-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="mr-2 h-4 w-4" />
                Professional Legal Representation
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Settle Your Legal Challans{" "}
                <span className="text-gold">Without Court Appearance</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Professional legal services for challan settlements. We handle everything from document compilation to court representation, so you don't have to appear in person.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gold hover:bg-light-gold text-navy font-semibold px-8 py-4 text-lg h-auto"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Consultation
                </Button>
                <Button
                  onClick={() => scrollToSection("process")}
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-4 text-lg h-auto"
                >
                  <Info className="mr-2 h-5 w-5" />
                  Learn Our Process
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                  alt="Professional legal consultation"
                  className="rounded-xl shadow-2xl w-full object-cover"
                />
              </div>
              <Card className="absolute -bottom-6 -left-6 bg-white text-navy shadow-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <CheckCircle className="text-green-600 h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">No Personal Appearance</p>
                      <p className="text-gray-600">Required in Court</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Challan Settle?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Professional legal expertise with a focus on convenience and results</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <div className="bg-navy p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Shield className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">No Personal Appearance</h3>
                <p className="text-gray-600">We represent you in court so you don't need to take time off work or appear in person.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <div className="bg-gold p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Clock className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Resolution</h3>
                <p className="text-gray-600">Streamlined process to settle your challans efficiently with minimal delays.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <CheckCircle className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Legal Team</h3>
                <p className="text-gray-600">Experienced lawyers specializing in challan settlements and court procedures.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our 4-Step Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Simple, transparent, and effective legal representation</p>
          </div>
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <Card className="bg-white p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow h-full">
                <CardContent className="pt-0">
                  <div className="bg-navy text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mb-6">1</div>
                  <div className="mb-4">
                    <FileText className="text-gold h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Document Compilation</h3>
                  <p className="text-gray-600 mb-6">We gather and prepare all necessary legal documents, ensuring everything is properly formatted and complete.</p>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2 h-4 w-4" />Challan documentation</li>
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2 h-4 w-4" />Legal paperwork</li>
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2 h-4 w-4" />Supporting evidence</li>
                  </ul>
                </CardContent>
              </Card>
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight className="text-gold h-8 w-8" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <Card className="bg-white p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow h-full">
                <CardContent className="pt-0">
                  <div className="bg-navy text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mb-6">2</div>
                  <div className="mb-4">
                    <Upload className="text-gold h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Filing</h3>
                  <p className="text-gray-600 mb-6">Professional filing of all documents with the appropriate court authorities and legal departments.</p>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2 h-4 w-4" />Court submissions</li>
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2 h-4 w-4" />Official filings</li>
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2 h-4 w-4" />Case registration</li>
                  </ul>
                </CardContent>
              </Card>
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight className="text-gold h-8 w-8" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <Card className="bg-white p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow h-full">
                <CardContent className="pt-0">
                  <div className="bg-navy text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mb-6">3</div>
                  <div className="mb-4">
                    <Gavel className="text-gold h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Court Appearance</h3>
                  <p className="text-gray-600 mb-6">Our experienced lawyers represent you in court, handling all proceedings on your behalf.</p>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2 h-4 w-4" />Legal representation</li>
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2 h-4 w-4" />Court advocacy</li>
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2 h-4 w-4" />Professional argument</li>
                  </ul>
                </CardContent>
              </Card>
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight className="text-gold h-8 w-8" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <Card className="bg-white p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow h-full">
                <CardContent className="pt-0">
                  <div className="bg-navy text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mb-6">4</div>
                  <div className="mb-4">
                    <DollarSign className="text-gold h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Fine Deposit</h3>
                  <p className="text-gray-600 mb-6">We handle the final settlement and fine deposit process, ensuring complete case closure.</p>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2 h-4 w-4" />Settlement processing</li>
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2 h-4 w-4" />Payment handling</li>
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2 h-4 w-4" />Case closure</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Hear from satisfied clients who trusted us with their legal matters</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border border-blue-100">
              <CardContent className="pt-0">
                <div className="flex items-center mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
                    alt="Client testimonial"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Rajesh Kumar</h4>
                    <p className="text-sm text-gray-600">Business Owner</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Excellent service! They handled my challan case professionally and I didn't have to miss a single day of work. Highly recommended for anyone needing legal representation."
                </p>
                <p className="text-sm text-gray-500">Traffic Challan Settlement - ₹15,000 saved in penalties</p>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 border border-amber-100">
              <CardContent className="pt-0">
                <div className="flex items-center mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
                    alt="Client testimonial"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Priya Sharma</h4>
                    <p className="text-sm text-gray-600">Software Engineer</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Professional and efficient service. The team kept me updated throughout the process and resolved my case quickly. Great value for money."
                </p>
                <p className="text-sm text-gray-500">Legal Documentation - Case resolved in 2 weeks</p>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 border border-green-100">
              <CardContent className="pt-0">
                <div className="flex items-center mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
                    alt="Client testimonial"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Amit Patel</h4>
                    <p className="text-sm text-gray-600">Consultant</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Outstanding legal support! They made a complex challan case seem effortless. I'm grateful for their expertise and dedication."
                </p>
                <p className="text-sm text-gray-500">Complex Legal Matter - Successfully resolved</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-navy to-deep-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Get Your Free Legal Consultation</h2>
              <p className="text-xl text-blue-100 mb-8">Contact our expert legal team today for professional challan settlement services.</p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-gold p-3 rounded-lg mr-4">
                    <Phone className="text-navy h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone Consultation</p>
                    <p className="text-blue-100">+91-9876543210</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gold p-3 rounded-lg mr-4">
                    <Mail className="text-navy h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Email Support</p>
                    <p className="text-blue-100">info@settlechallan.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gold p-3 rounded-lg mr-4">
                    <Clock className="text-navy h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Business Hours</p>
                    <p className="text-blue-100">Mon-Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white rounded-2xl shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Form</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">Full Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your full name" 
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">Phone Number *</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel"
                              placeholder="+91-9876543210" 
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="your.email@example.com" 
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent" 
                              {...field}
                              value={field.value || ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="problemDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">Problem Description *</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={4}
                              placeholder="Please describe your legal issue or challan details..." 
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex items-start space-x-3">
                      <Checkbox id="terms" required className="mt-1" />
                      <label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to the{" "}
                        <a href="#" className="text-navy hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-navy hover:underline">
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={contactMutation.isPending}
                      className="w-full bg-navy hover:bg-deep-blue text-white font-semibold py-4 rounded-lg transition-colors h-auto"
                    >
                      {contactMutation.isPending ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <PlaneTakeoff className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Settle Challan</h3>
              <p className="text-gray-300 mb-6 max-w-md">Professional legal services specializing in challan settlements and court representation. Your trusted partner for legal matters.</p>
              <div className="flex space-x-4">
                <a href="#" className="bg-navy p-3 rounded-lg hover:bg-deep-blue transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-navy p-3 rounded-lg hover:bg-deep-blue transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-navy p-3 rounded-lg hover:bg-deep-blue transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("process")} className="hover:text-white transition-colors">
                    Our Process
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("testimonials")} className="hover:text-white transition-colors">
                    Testimonials
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal Info</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal Disclaimer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bar Registration</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Settle Challan. All rights reserved. | Professional Legal Services</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
