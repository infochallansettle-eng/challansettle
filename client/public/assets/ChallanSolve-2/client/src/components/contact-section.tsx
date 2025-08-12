import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Clock, Info } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      description: "",
      preferredMethod: "Phone Call",
    },
  });

  const createContactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      form.reset();
      toast({
        title: "Request Submitted!",
        description: "Our legal team will review your case within 24 hours and contact you with a detailed action plan.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    createContactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-700 mb-4" data-testid="text-contact-title">
                Get Your Challan Settled Today
              </h2>
              <p className="text-xl text-neutral-600 leading-relaxed" data-testid="text-contact-description">
                Contact us now to start the process. Our legal experts will handle everything from document compilation to court appearance.
              </p>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Professional legal consultation meeting between lawyer and client discussing traffic challan settlement" 
              className="w-full rounded-2xl shadow-lg"
              data-testid="img-consultation"
            />
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary p-3 rounded-full">
                  <Phone className="text-white h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold" data-testid="text-phone-label">Call Us</div>
                  <div className="text-neutral-600" data-testid="text-phone-number">+91 98765 43210</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-secondary p-3 rounded-full">
                  <Mail className="text-white h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold" data-testid="text-email-label">Email Us</div>
                  <div className="text-neutral-600" data-testid="text-email-address">info@challansettle.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-accent p-3 rounded-full">
                  <Clock className="text-white h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold" data-testid="text-hours-label">Working Hours</div>
                  <div className="text-neutral-600" data-testid="text-hours-value">Monday - Saturday: 9:00 AM - 6:00 PM</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-neutral-700 mb-6" data-testid="text-form-title">
              Contact Us for Challan Settlement
            </h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="Enter your full name"
                          data-testid="input-contact-name"
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
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="tel" 
                          placeholder="Enter your phone number"
                          data-testid="input-contact-phone"
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
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email" 
                          placeholder="Enter your email address"
                          data-testid="input-contact-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Challan Details & Problem Description *</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={5} 
                          placeholder="Please provide details about your traffic challan, violation type, challan number, and any specific concerns you have..."
                          data-testid="textarea-contact-description"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="preferredMethod"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Contact Method</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-contact-method">
                            <SelectValue placeholder="Select preferred contact method" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Phone Call" data-testid="option-phone">Phone Call</SelectItem>
                          <SelectItem value="WhatsApp" data-testid="option-whatsapp">WhatsApp</SelectItem>
                          <SelectItem value="Email" data-testid="option-email">Email</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Info className="text-primary mt-1 h-5 w-5" />
                    <div className="text-sm text-neutral-700">
                      <strong>What happens next?</strong> Our legal team will review your case within 24 hours and contact you with a detailed action plan and cost estimate.
                    </div>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-blue-800 text-white py-4"
                  disabled={createContactMutation.isPending}
                  data-testid="button-submit-contact"
                >
                  {createContactMutation.isPending ? "Submitting..." : "Submit Request"}
                </Button>
                
                <div className="text-center text-sm text-neutral-600" data-testid="text-terms">
                  By submitting this form, you agree to our terms of service and privacy policy.
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
