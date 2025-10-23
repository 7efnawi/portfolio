import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import * as Icons from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const ContactRevolutionary = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_owj7hum",
        "template_5hmjw1i",
        formRef.current!,
        "eM0JjZ9wlwKL7TG1R"
      );

      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });

      formRef.current?.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-orange/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange/10 border border-orange/20 rounded-full mb-6"
          >
            <Icons.MessageSquare className="w-4 h-4 text-orange" />
            <span className="text-sm font-medium text-orange">Get In Touch</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">{portfolioData.contact.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {portfolioData.contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icons.Send className="w-6 h-6 text-accent" />
                {portfolioData.contact.formTitle}
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    name="from_name"
                    placeholder="Your name"
                    required
                    className="bg-background/50 border-accent/20 focus:border-accent"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    name="user_email"
                    placeholder="your.email@example.com"
                    required
                    className="bg-background/50 border-accent/20 focus:border-accent"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Your message here..."
                    rows={5}
                    required
                    className="bg-background/50 border-accent/20 focus:border-accent resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.4 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent-light"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Icons.Loader2 className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <>
                        <Icons.Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-accent/5 to-orange/5 backdrop-blur-sm border-accent/20">
              <h3 className="text-2xl font-bold mb-6">{portfolioData.contact.connectTitle}</h3>
              <p className="text-muted-foreground mb-6">
                {portfolioData.contact.connectDescription}
              </p>

              <div className="space-y-4">
                {portfolioData.contact.contactInfo.map((info, index) => {
                  const IconComponent =
                    Icons[info.icon as keyof typeof Icons] || Icons.Mail;
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-accent/10 border border-accent/20 hover:border-accent/40 transition-all"
                    >
                      <div className="p-3 bg-accent/10 rounded-xl">
                        <IconComponent className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.title}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icons.Share2 className="w-6 h-6 text-orange" />
                {portfolioData.contact.followMeTitle}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {portfolioData.contact.socialLinks.map((social, index) => {
                  const IconComponent =
                    Icons[social.icon as keyof typeof Icons] || Icons.Globe;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      onMouseEnter={() => setHoveredSocial(social.platform)}
                      onMouseLeave={() => setHoveredSocial(null)}
                      className="relative p-6 rounded-2xl bg-gradient-to-br from-background/80 to-accent/5 hover:from-accent/10 hover:to-orange/10 border border-accent/20 hover:border-accent/40 transition-all text-center group"
                    >
                      <motion.div
                        animate={
                          hoveredSocial === social.platform
                            ? { rotate: [0, -10, 10, -10, 0] }
                            : {}
                        }
                        transition={{ duration: 0.5 }}
                        className="inline-block p-4 bg-accent/10 rounded-2xl mb-3 group-hover:bg-accent/20 transition-colors"
                      >
                        <IconComponent className="w-8 h-8 text-accent" />
                      </motion.div>
                      <p className="font-bold mb-1">{social.platform}</p>
                      <p className="text-sm text-muted-foreground">{social.username}</p>
                    </motion.a>
                  );
                })}
              </div>
            </Card>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
              className="relative h-64 rounded-2xl overflow-hidden border-2 border-accent/20"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/20 via-orange/20 to-accent/20"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Icons.Rocket className="w-16 h-16 text-accent mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2 gradient-text">
                    Ready to Collaborate?
                  </h3>
                  <p className="text-muted-foreground">
                    Let's build something amazing together
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactRevolutionary;
