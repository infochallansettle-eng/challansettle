import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertTestimonialSchema, type Testimonial, type InsertTestimonial } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Star } from "lucide-react";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function TestimonialsSection() {
  const { toast } = useToast();
  const [selectedRating, setSelectedRating] = useState(5);
  
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const form = useForm<InsertTestimonial>({
    resolver: zodResolver(insertTestimonialSchema),
    defaultValues: {
      name: "",
      location: "",
      rating: 5,
      content: "",
    },
  });

  const createTestimonialMutation = useMutation({
    mutationFn: async (data: InsertTestimonial) => {
      const response = await apiRequest("POST", "/api/testimonials", data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/testimonials"] });
      form.reset();
      setSelectedRating(5);
      toast({
        title: "Thank you!",
        description: "Your testimonial has been submitted successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit testimonial. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertTestimonial) => {
    createTestimonialMutation.mutate({ ...data, rating: selectedRating });
  };

  const handleStarClick = (rating: number) => {
    setSelectedRating(rating);
    form.setValue("rating", rating);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-700 mb-4" data-testid="text-testimonials-title">
            What Our Clients Say
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto" data-testid="text-testimonials-description">
            Read testimonials from satisfied clients who have used our traffic challan settlement services.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-neutral-50 p-8 rounded-2xl animate-pulse" data-testid={`skeleton-testimonial-${i}`}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-neutral-300 rounded-full mr-4"></div>
                  <div>
                    <div className="h-4 bg-neutral-300 rounded w-24 mb-2"></div>
                    <div className="h-3 bg-neutral-300 rounded w-32"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-neutral-300 rounded"></div>
                  <div className="h-3 bg-neutral-300 rounded"></div>
                  <div className="h-3 bg-neutral-300 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials?.map((testimonial) => (
              <div key={testimonial.id} className="bg-neutral-50 p-8 rounded-2xl hover:shadow-lg transition-shadow" data-testid={`card-testimonial-${testimonial.id}`}>
                <div className="flex items-center mb-6">
                  <img 
                    src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&seed=${testimonial.id}`}
                    alt={`${testimonial.name} testimonial`}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                    data-testid={`img-testimonial-${testimonial.id}`}
                  />
                  <div>
                    <div className="font-semibold text-neutral-700" data-testid={`text-name-${testimonial.id}`}>{testimonial.name}</div>
                    <div className="text-neutral-600 text-sm" data-testid={`text-location-${testimonial.id}`}>{testimonial.location}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      data-testid={`star-${testimonial.id}-${i + 1}`}
                    />
                  ))}
                </div>
                <p className="text-neutral-600 italic" data-testid={`text-content-${testimonial.id}`}>"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        )}
        
        {/* Add Testimonial Form */}
        <div className="bg-gradient-to-r from-primary to-blue-800 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4" data-testid="text-form-title">Share Your Experience</h3>
            <p className="text-blue-100" data-testid="text-form-description">Help others by sharing your experience with our services.</p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Your Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-white text-neutral-700" 
                          placeholder="Enter your name"
                          data-testid="input-testimonial-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Location</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="bg-white text-neutral-700" 
                          placeholder="City, State"
                          data-testid="input-testimonial-location"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Rating</label>
                <div className="flex space-x-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleStarClick(i + 1)}
                      className="text-2xl transition-colors"
                      data-testid={`button-rating-${i + 1}`}
                    >
                      <Star
                        className={`h-6 w-6 ${i < selectedRating ? "text-yellow-400 fill-current" : "text-gray-400"}`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Your Testimonial</FormLabel>
                    <FormControl>
                      <Textarea 
                        {...field} 
                        rows={4} 
                        className="bg-white text-neutral-700" 
                        placeholder="Share your experience with our services..."
                        data-testid="textarea-testimonial-content"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="text-center">
                <Button 
                  type="submit" 
                  className="bg-secondary hover:bg-green-600 text-white px-8 py-4"
                  disabled={createTestimonialMutation.isPending}
                  data-testid="button-submit-testimonial"
                >
                  {createTestimonialMutation.isPending ? "Submitting..." : "Submit Testimonial"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
