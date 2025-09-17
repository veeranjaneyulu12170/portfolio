import { Calendar, MapPin, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "UI/UX Design Intern",
      company: "Zummit Infolabs",
      period: "6 months",
      location: "Remote",
      description: "A design and development studio specializing in digital solutions. Led the UI/UX design for QuantumZyme blog website and designed AI Aiden chatbot interface.",
      achievements: [
        "Led the UI/UX design for QuantumZyme, a blog website, ensuring an intuitive and engaging interface",
        "Designed the logo and chatbot user interface for AI Aiden, an AI-powered chatbot, enhancing its usability and brand identity",
        "Collaborated with developers to ensure seamless implementation of design concepts",
        "Published a research paper",
        "Developed a user-friendly to-do list application to help users manage tasks efficiently"
      ],
      skills: ["UI/UX Design", "Figma", "Logo Design", "Chatbot Design", "Research"]
    },
    {
      title: "Banking Bot Developer",
      company: "Personal Project",
      period: "Project",
      location: "Self-directed",
      description: "A banking bot designed to improve customer interaction and support using advanced AI technologies.",
      achievements: [
        "Developed a sophisticated banking bot using Botpress.com, designed to enhance customer service in the banking sector",
        "The bot efficiently handles various customer inquiries, such as account balance checks, transaction history, and account number queries",
        "Implemented natural language processing for better customer interaction"
      ],
      skills: ["Botpress", "AI Development", "Customer Service", "Banking Systems", "NLP"]
    },
    {
      title: "HR Intern",
      company: "Cook & Klean",
      period: "1 month",
      location: "On-site",
      description: "A service provider specializing in hygiene and sanitation solutions. Managed various HR functions and facilitated workplace culture.",
      achievements: [
        "Managed recruitment, employee onboarding, and performance evaluations, ensuring a smooth HR process",
        "Coordinated training sessions and facilitated a positive workplace culture",
        "Streamlined HR processes and improved efficiency"
      ],
      skills: ["HR Management", "Recruitment", "Training", "Performance Evaluation", "Workplace Culture"]
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: "☁️"
    },
    {
      title: "Google UX Design Certificate",
      issuer: "Google",
      year: "2022",
      icon: "🎨"
    },
    {
      title: "Meta Frontend Developer Certificate",
      issuer: "Meta",
      year: "2022",
      icon: "⚛️"
    },
    {
      title: "Adobe Certified Expert",
      issuer: "Adobe",
      year: "2021",
      icon: "🏆"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rich-brown mb-4">
            Experience & Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A track record of delivering exceptional results across development, design, and creative projects
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.title}
                className="group hover:scale-105 transition-all duration-300 animate-fade-in shadow-soft hover:shadow-medium"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl text-rich-brown mb-1">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-primary font-semibold text-base">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-muted-foreground text-sm mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-rich-brown mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-background border border-border rounded-xl p-8 shadow-soft">
          <h3 className="text-2xl font-bold text-rich-brown text-center mb-8">
            Certifications & Achievements
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert.title}
                className="text-center group hover:scale-105 transition-all duration-300 p-4 bg-card border border-border rounded-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-3">{cert.icon}</div>
                <h4 className="font-semibold text-rich-brown mb-2 text-sm leading-tight">{cert.title}</h4>
                <p className="text-xs text-muted-foreground mb-1">{cert.issuer}</p>
                <p className="text-xs text-primary font-medium">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 p-6 bg-background border border-border rounded-xl shadow-soft">
            <div className="text-2xl">📈</div>
            <div>
              <div className="text-lg font-semibold text-rich-brown">Continuous Growth</div>
              <div className="text-muted-foreground">Always learning and adapting to new technologies and trends</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;