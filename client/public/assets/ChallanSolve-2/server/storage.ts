import { type Contact, type InsertContact, type Testimonial, type InsertTestimonial } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Testimonial methods
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  getTestimonials(): Promise<Testimonial[]>;
}

export class MemStorage implements IStorage {
  private contacts: Map<string, Contact>;
  private testimonials: Map<string, Testimonial>;

  constructor() {
    this.contacts = new Map();
    this.testimonials = new Map();
    
    // Add some initial testimonials for display
    this.seedTestimonials();
  }

  private seedTestimonials() {
    const initialTestimonials: Testimonial[] = [
      {
        id: randomUUID(),
        name: "Rajesh Kumar",
        location: "Mumbai, Maharashtra",
        rating: 5,
        content: "Excellent service! They handled my traffic challan without any hassle. I didn't have to visit the court even once. Highly recommended for busy professionals."
      },
      {
        id: randomUUID(),
        name: "Priya Sharma",
        location: "Delhi, NCR",
        rating: 5,
        content: "Professional and efficient service. They kept me updated throughout the process and settled my challan quickly. Great value for money."
      },
      {
        id: randomUUID(),
        name: "Amit Patel",
        location: "Pune, Maharashtra",
        rating: 5,
        content: "Saved me so much time and stress. The team was very professional and handled everything smoothly. I would definitely use their services again."
      }
    ];

    initialTestimonials.forEach(testimonial => {
      this.testimonials.set(testimonial.id, testimonial);
    });
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { ...insertContact, id };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).sort((a, b) => b.rating - a.rating);
  }
}

export const storage = new MemStorage();
