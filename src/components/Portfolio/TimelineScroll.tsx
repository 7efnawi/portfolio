import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import { Award, BookOpen, ExternalLink, Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TimelineScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  const allItems = [
    ...portfolioData.education.educationList.map((edu) => ({
      type: "education" as const,
      data: edu,
    })),
    ...portfolioData.education.certifications.map((cert) => ({
      type: "certification" as const,
      data: cert,
    })),
  ].sort((a, b) => {
    const dateA = "period" in a.data ? a.data.period : a.data.date;
    const dateB = "period" in b.data ? b.data.period : b.data.date;
    return dateB.localeCompare(dateA);
  });

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-orange/5 to-background" />

      <div className="container mx-auto px-4 relative z-10 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange/10 border border-orange/20 rounded-full mb-6"
          >
            <BookOpen className="w-4 h-4 text-orange" />
            <span className="text-sm font-medium text-orange">Journey Timeline</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Education & Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Scroll horizontally to explore my academic journey and professional certifications
          </p>
        </motion.div>
      </div>

      <motion.div
        ref={containerRef}
        className="overflow-x-auto scrollbar-thin scrollbar-thumb-accent scrollbar-track-muted px-4 pb-8"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "hsl(var(--accent)) hsl(var(--muted))",
        }}
      >
        <div className="flex gap-8 min-w-max px-8 py-12">
          <motion.div
            className="h-1 absolute top-1/2 left-0 right-0 bg-gradient-to-r from-accent via-orange to-accent"
            style={{
              scaleX: useTransform(scrollXProgress, [0, 1], [0.1, 1]),
              transformOrigin: "left",
            }}
          />

          {allItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative"
            >
              <motion.div
                className="absolute -top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-accent to-orange shadow-lg"
                whileHover={{ scale: 1.5 }}
              />

              <Card className="w-80 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all hover:shadow-lg hover:shadow-accent/20 p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`p-3 rounded-xl ${
                      item.type === "education"
                        ? "bg-accent/10"
                        : "bg-orange/10"
                    }`}
                  >
                    {item.type === "education" ? (
                      <BookOpen
                        className={`w-6 h-6 ${
                          item.type === "education" ? "text-accent" : "text-orange"
                        }`}
                      />
                    ) : (
                      <Award
                        className={`w-6 h-6 ${
                          item.type === "education" ? "text-accent" : "text-orange"
                        }`}
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <Badge
                      variant="outline"
                      className={`mb-2 ${
                        item.type === "education"
                          ? "border-accent/30 text-accent"
                          : "border-orange/30 text-orange"
                      }`}
                    >
                      {item.type === "education" ? "Education" : "Certification"}
                    </Badge>
                  </div>
                </div>

                {item.type === "education" ? (
                  <>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">
                      {item.data.degree}
                    </h3>
                    <p className="text-sm text-accent font-medium mb-2">
                      {item.data.specialization}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.data.institution}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <MapPin className="w-3 h-3" />
                      {item.data.location}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Calendar className="w-3 h-3" />
                      {item.data.period}
                    </div>
                    {item.data.gpa && (
                      <div className="mt-3 p-3 bg-accent/5 rounded-lg">
                        <p className="text-sm font-semibold text-accent">{item.data.gpa}</p>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">
                      {item.data.title}
                    </h3>
                    <p className="text-sm text-orange font-medium mb-2">
                      {item.data.issuer}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Calendar className="w-3 h-3" />
                      {item.data.date}
                    </div>
                    {item.data.credential && (
                      <div className="mb-3 p-2 bg-muted/50 rounded font-mono text-xs">
                        {item.data.credential}
                      </div>
                    )}
                    {item.data.link && (
                      <motion.a
                        href={item.data.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-orange hover:text-orange-light font-medium"
                        whileHover={{ x: 5 }}
                      >
                        Verify Credential
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10 mt-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="text-center text-muted-foreground text-sm"
        >
          <p className="flex items-center justify-center gap-2">
            <span className="text-2xl">←</span>
            Scroll horizontally to view all items
            <span className="text-2xl">→</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineScroll;
