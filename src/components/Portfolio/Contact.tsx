import { useState, useEffect, useRef } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { portfolioData } from "@/lib/portfolio-data";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_pi13toy";
const TEMPLATE_ID = "template_w2ty59l";
const PUBLIC_KEY = "QxfHjpYPr2CJGL0iZ";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [lastSubmission, setLastSubmission] = useState(0);
  const [honeypot, setHoneypot] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return false;
    }
    const now = Date.now();
    if (now - lastSubmission < 30000) {
      toast({
        title: "Please wait",
        description: "You can submit another message in a few seconds.",
        variant: "destructive",
      });
      return false;
    }
    if (honeypot) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    setLastSubmission(Date.now());
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      toast({
        title: "Message sent successfully!",
        description:
          "Thank you for your message. I'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const iconMap = {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Github,
    Twitter,
    Facebook,
    Instagram,
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {portfolioData.contact.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {portfolioData.contact.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div
              className={`space-y-8 ${
                isVisible ? "animate-fade-in-left" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  {portfolioData.contact.connectTitle}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {portfolioData.contact.connectDescription}
                </p>

                {/* Contact Details */}
                <div className="space-y-4 mb-8">
                  {portfolioData.contact.contactInfo.map((info) => {
                    const Icon = iconMap[info.icon as keyof typeof iconMap];
                    return (
                      <a
                        key={info.title}
                        href={info.link}
                        className="flex items-center space-x-4 p-4 bg-gradient-card rounded-lg border border-border/50 hover-lift group"
                      >
                        <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon size={20} className="text-accent-foreground" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">
                            {info.title}
                          </h4>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">
                    {portfolioData.contact.followMeTitle}
                  </h4>
                  <div className="flex space-x-4">
                    {portfolioData.contact.socialLinks.map((social) => {
                      const Icon = iconMap[social.icon as keyof typeof iconMap];
                      return (
                        <a
                          key={social.platform}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors hover-scale group"
                          title={`${social.platform} - ${social.username}`}
                        >
                          <Icon size={20} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`${isVisible ? "animate-fade-in-right" : "opacity-0"}`}
              style={{ animationDelay: "0.4s" }}
            >
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-foreground">
                    {portfolioData.contact.formTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field - hidden from real users */}
                    <input
                      type="text"
                      name="_gotcha"
                      style={{ display: "none" }}
                      tabIndex={-1}
                      autoComplete="off"
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="border-border/50 focus:border-accent"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="border-border/50 focus:border-accent"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What would you like to discuss?"
                        required
                        className="border-border/50 focus:border-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or question..."
                        rows={6}
                        required
                        className="border-border/50 focus:border-accent resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-primary text-primary-foreground hover:bg-primary-light hover-glow"
                      disabled={isSubmitting}
                    >
                      <Send className="mr-2" size={18} />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
