import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  BookOpen, 
  Users, 
  Star, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X,
  Linkedin,
  Mail,
  Video,
  MessageSquare
} from "lucide-react";
import heroImage from "@/assets/images/online-tutoring.jpg";
import logoImage from "@/assets/images/logo.png";

import growth from "@assets/growth.jpg";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We will get back to you shortly.",
    });
    (e.target as HTMLFormElement).reset();
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Programs", id: "programs" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')} role="button">
            <img src={logoImage} alt="Skilledge Coaching" className="h-10 object-contain" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
            <Button onClick={() => scrollToSection('contact')} className="rounded-full px-6">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b shadow-lg animate-in slide-in-from-top-2">
            <nav className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <button 
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-sm font-medium text-slate-600 hover:text-primary p-2 rounded-md hover:bg-slate-50 transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <Button onClick={() => scrollToSection('contact')} className="w-full">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative pt-24 pb-32 md:pt-36 md:pb-40 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white -z-10"></div>
          <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Now accepting new students
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Master new skills with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">expert coaching.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
                Skilledge provides personalized online education and mentorship to help you accelerate your career and achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full text-base h-12 px-8 shadow-lg shadow-primary/25" onClick={() => scrollToSection('programs')}>
                  Explore Programs
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-base h-12 px-8" onClick={() => scrollToSection('about')}>
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-50 rounded-[2rem] transform rotate-3 -z-10"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] border bg-white">
                <img 
                  src={growth} 
                  alt="Professional coach smiling" 
                  className="w-full h-full object-cover"
                />
                
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl flex items-center gap-4">
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">1-on-1 Sessions</p>
                    <p className="text-xs text-slate-500">Available worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features/About Section */}
        <section id="about" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why choose Skilledge?</h2>
              <p className="text-lg text-slate-600">
                We believe in practical, actionable education that bridges the gap between where you are and where you want to be.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Personalized Mentorship",
                  description: "Get direct 1-on-1 feedback and guidance tailored to your specific career path and goals."
                },
                {
                  icon: <Star className="h-6 w-6" />,
                  title: "Proven Results",
                  description: "Join hundreds of students who have successfully transitioned into new roles and leveled up their careers."
                }
              ].map((feature, i) => (
                <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow bg-white">
                  <CardContent className="p-8 space-y-4">
                    <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-24 bg-slate-50/50">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our courses</h2>
              <p className="text-lg text-slate-600">
                Personalised 1-on-1 online training, built around your pace and goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Python Course */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 hover:border-slate-300 transition-colors shadow-sm flex flex-col h-full">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center mb-6">
                    <div className="w-6 h-6 text-green-700">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-5.5h4V11h-4v3.5zm2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-3 text-xs font-semibold tracking-wider text-green-700 uppercase">
                    <span>BEGINNER</span>
                    <span className="text-slate-400">→</span>
                    <span>ADVANCED</span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Master Python</h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed">
                    From syntax basics to OOP, APIs, and Streamlit apps. Build real programs at every step.
                  </p>
                </div>
                
                <ul className="space-y-3 mb-10 flex-1">
                  {[
                    "Python fundamentals & data structures",
                    "Functions, OOP & advanced concepts",
                    "File handling, APIs & Streamlit",
                    "8 modules + capstone project"
                  ].map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-[15px] text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full border border-green-200 bg-green-50 text-[13px] font-medium text-green-800">8 modules</span>
                    <span className="px-3 py-1 rounded-full border border-green-200 bg-green-50 text-[13px] font-medium text-green-800">1-on-1</span>
                    <span className="px-3 py-1 rounded-full border border-green-200 bg-green-50 text-[13px] font-medium text-green-800">Project-based</span>
                  </div>
                  <a href="/master-python.html" className="text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium flex items-center gap-1 shrink-0">
                    View course <span className="text-lg leading-none">→</span>
                  </a>
                </div>
              </div>

              {/* ML Course */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 hover:border-slate-300 transition-colors shadow-sm flex flex-col h-full relative">
                <div className="absolute top-8 right-8">
                  <span className="px-3 py-1 rounded-full border border-green-200 bg-green-50 text-[13px] font-medium text-green-800">
                    Enrolling now
                  </span>
                </div>
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                    <div className="w-6 h-6 text-blue-600">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        <polyline strokeLinecap="round" strokeLinejoin="round" points="3.27 6.96 12 12.01 20.73 6.96" />
                        <line x1="12" y1="22.08" x2="12" y2="12" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-3 text-xs font-semibold tracking-wider text-blue-700 uppercase">
                    <span>BEGINNER</span>
                    <span className="text-slate-400">→</span>
                    <span>PROFESSIONAL</span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Master Machine Learning</h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed">
                    Algorithms, deployment, Docker, FastAPI — you'll leave with a live ML project on GitHub.
                  </p>
                </div>
                
                <ul className="space-y-3 mb-10 flex-1">
                  {[
                    "Core ML algorithms & model evaluation",
                    "FastAPI, Streamlit & Docker deployment",
                    "Web scraping & Git for ML projects",
                    "15 modules + end-to-end capstone"
                  ].map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-[15px] text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-[13px] font-medium text-blue-800">15 modules</span>
                    <span className="px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-[13px] font-medium text-blue-800">1-on-1</span>
                    <span className="px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-[13px] font-medium text-blue-800">Deployment-ready</span>
                  </div>
                  <a href="/master-ml.html" className="text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium flex items-center gap-1 shrink-0">
                    View course <span className="text-lg leading-none">→</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-[15px] text-slate-500 italic">
              More courses coming soon — Data Science, Deep Learning & more.
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 bg-slate-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Skilledge completely transformed my approach to my career. The 1-on-1 coaching was invaluable.",
                  author: "Sarah J.",
                  role: "Product Designer"
                },
                {
                  quote: "The curriculum is perfectly paced and the feedback is incredible. Worth every penny.",
                  author: "Michael T.",
                  role: "Software Engineer"
                },
                {
                  quote: "I landed my dream job just 3 weeks after completing the Career Accelerator program!",
                  author: "Elena R.",
                  role: "Marketing Manager"
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-slate-800 p-8 rounded-2xl">
                  <div className="flex gap-1 text-yellow-400 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg text-slate-300 mb-8 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-white">{testimonial.author}</p>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border">
              <div className="grid md:grid-cols-2">
                <div className="bg-blue-600 p-10 text-white flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Ready to start?</h2>
                    <p className="text-blue-100 mb-8">
                      Send us a message and we'll get back to you to schedule your free consultation.
                    </p>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <Mail className="h-6 w-6 text-blue-300" />
                        <span>hello@skilledge.com</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <MessageSquare className="h-6 w-6 text-blue-300" />
                        <span>Usually replies within 24 hours</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12">
                    <p className="text-sm text-blue-200 mb-4">Connect with us</p>
                    <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 hover:bg-blue-400 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                <div className="p-10">
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                      <Input id="name" required placeholder="John Doe" className="bg-slate-50 border-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                      <Input id="email" type="email" required placeholder="john@example.com" className="bg-slate-50 border-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                      <Textarea 
                        id="message" 
                        required 
                        placeholder="Tell us about your goals..." 
                        className="min-h-[120px] bg-slate-50 border-slate-200" 
                      />
                    </div>
                    <Button type="submit" className="w-full h-12 text-base rounded-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <img src={logoImage} alt="Skilledge Coaching" className="h-8 object-contain brightness-0 invert" />
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
            
            <p className="text-sm">© {new Date().getFullYear()} Skilledge Coaching. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}