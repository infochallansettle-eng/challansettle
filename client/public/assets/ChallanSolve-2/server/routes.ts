import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertTestimonialSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact routes
  app.post("/api/contacts", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json(contact);
    } catch (error) {
      res.status(400).json({ message: "Invalid contact data", error });
    }
  });

  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contacts", error });
    }
  });

  // Testimonial routes
  app.post("/api/testimonials", async (req, res) => {
    try {
      const testimonialData = insertTestimonialSchema.parse(req.body);
      const testimonial = await storage.createTestimonial(testimonialData);
      res.json(testimonial);
    } catch (error) {
      res.status(400).json({ message: "Invalid testimonial data", error });
    }
  });

  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch testimonials", error });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
