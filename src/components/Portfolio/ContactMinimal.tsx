import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";

const TikTokIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ContactMinimal = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-transparent relative z-10">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center font-science"
        >
          <span className="text-white">{portfolioData.contact.title.split(" ")[0]}</span>{" "}
          <span className="text-[#37ff25]">{portfolioData.contact.title.split(" ").slice(1).join(" ")}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16"
        >
          {portfolioData.contact.description}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* WhatsApp Direct Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="w-full max-w-[400px] bg-white/[0.03] backdrop-blur-md border border-[#37ff25] rounded-2xl p-8 shadow-[0_0_30px_rgba(55,255,37,0.15)] flex flex-col items-center text-center group hover:shadow-[0_0_50px_rgba(55,255,37,0.3)] transition-all duration-500 relative overflow-hidden">
               <div className="mb-6 p-4 bg-[#25D366]/20 rounded-full text-[#37ff25] relative">
                  <WhatsAppIcon size={64} />
                  <motion.div
                     className="absolute inset-0 rounded-full border-2 border-[#37ff25]"
                     animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
               </div>

               <h3 className="text-3xl font-bold text-white mb-3 font-science">Let's Chat!</h3>
               <p className="text-muted-foreground mb-8 text-lg">
                 Available for freelance projects and data analysis consulting.
               </p>

               <a
                href="https://wa.me/201017906167" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full"
               >
                 <Button className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-6 text-xl font-bold rounded-xl shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-[1.02] transition-all duration-300 group flex items-center justify-center gap-3">
                    <WhatsAppIcon size={28} className="fill-white" />
                    Chat on WhatsApp
                 </Button>
               </a>
            </div>
          </motion.div>

          {/* Connect & Follow */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 flex flex-col justify-center"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-science">
                {portfolioData.contact.connectTitle}
              </h3>
              <p className="text-muted-foreground mb-6">
                {portfolioData.contact.connectDescription}
              </p>

              <div className="space-y-4">
                {portfolioData.contact.contactInfo.map((info, index) => {
                  const IconComponent =
                    (Icons as any)[info.icon] || Icons.Mail;
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 text-muted-foreground hover:text-[#37ff25] transition-colors group"
                    >
                      <div className="p-3 rounded-lg bg-white/[0.03] border border-white/10 group-hover:border-[#37ff25]/50 group-hover:shadow-[0_0_15px_rgba(55,255,37,0.2)] transition-all duration-300">
                        <IconComponent size={24} className="text-[#37ff25]" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground/80">{info.title}</p>
                        <p className="font-medium text-white group-hover:text-[#37ff25] transition-colors text-lg">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-science">
                {portfolioData.contact.followMeTitle}
              </h3>
              <div className="flex gap-4">
                {portfolioData.contact.socialLinks.map((social, index) => {
                  let IconComponent;
                  if (social.icon === "Tiktok") {
                    IconComponent = TikTokIcon;
                  } else {
                    IconComponent = (Icons as any)[social.icon] || Icons.Globe;
                  }
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="p-4 bg-white/[0.03] border border-white/10 text-muted-foreground rounded-xl hover:border-[#37ff25] hover:text-[#37ff25] hover:bg-[#37ff25]/10 hover:shadow-[0_0_20px_rgba(55,255,37,0.2)] transition-all duration-300"
                      title={social.platform}
                    >
                      <IconComponent size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMinimal;
