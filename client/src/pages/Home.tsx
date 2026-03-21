import { useState, useEffect } from "react";
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
  Youtube,
  Instagram,
  Mail,
  Video,
  MessageSquare
} from "lucide-react";
import heroImage from "@/assets/images/online-tutoring.jpg";
import logoImage from "@/assets/images/logo.png";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Handle hash links when returning from other pages
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure the page is fully rendered
    }
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact Form Submission from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:skilledgecoaching@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client...",
      description: "Please send the email using your preferred email app.",
    });
    form.reset();
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
                  src="https://www.2civility.org/wp-content/uploads/2020/11/virtual-mentoring-2.jpg" 
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">SkillEdge vs other courses comparison</h2>
              <p className="text-lg text-slate-600">
                Side-by-side table showing what SkillEdge offers that YouTube, Udemy, and bootcamps don't. Directly answers "why pay for this?"
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                <div className="grid grid-cols-[1fr_120px_120px] md:grid-cols-[1fr_200px_200px] border-b border-slate-200 p-4 md:p-6 bg-slate-50">
                  <div className="font-medium text-slate-600">Feature</div>
                  <div className="font-bold text-[hsl(210,86%,30%)] text-center text-lg">SkillEdge</div>
                  <div className="font-medium text-slate-500 text-center">Others</div>
                </div>
                
                {[
                  { feature: "1-on-1 live sessions" },
                  { feature: "Deployment training" },
                  { feature: "Your pace, your schedule" },
                  { feature: "GitHub project on completion" }
                ].map((item, i) => (
                  <div key={i} className="grid grid-cols-[1fr_120px_120px] md:grid-cols-[1fr_200px_200px] border-b border-slate-100 last:border-0 p-4 md:p-6 hover:bg-slate-50/50 transition-colors">
                    <div className="text-slate-800 font-medium">{item.feature}</div>
                    <div className="flex justify-center text-[hsl(210,86%,30%)]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className="flex justify-center text-slate-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
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

        {/* Instructor Section */}
        <section id="instructor" className="py-24 bg-white border-y border-slate-200">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <p className="text-sm tracking-widest uppercase text-[hsl(210,86%,30%)] font-medium mb-2">Your instructor</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 leading-tight mb-4">
              Learn directly from a<br className="hidden md:block" />practising Data Scientist.
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mb-12">
              Not a scripted course. Not a recording. Just you and your instructor — every session, live.
            </p>

            <div className="grid md:grid-cols-[320px_1fr] gap-12 items-start">
              {/* Left Column - Photo & Stats */}
              <div>
                <div className="relative mb-6">
                  <div className="w-full aspect-[4/4.5] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
                    <div className="text-7xl font-serif text-white/10 select-none">AR</div>
                    <div className="absolute bottom-5 left-0 right-0 text-center text-sm text-white/40">Arivumathi R</div>
                  </div>
                  <div className="absolute -bottom-4 right-4 bg-slate-900 border-2 border-[hsl(210,86%,30%)] rounded-xl py-2 px-4 text-center">
                    <div className="text-2xl font-serif text-white leading-none mb-1">2+</div>
                    <div className="text-[11px] text-blue-200">Years experience</div>
                  </div>
                </div>

                <div className="space-y-2 mt-8">
                  <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="hsl(210,86%,30%)" strokeWidth="1.5" strokeLinejoin="round"/></svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">Data Scientist · GenAI</div>
                      <div className="text-xs text-slate-500">Current role</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="hsl(210,86%,30%)" strokeWidth="1.5"/><circle cx="9" cy="7" r="4" stroke="hsl(210,86%,30%)" strokeWidth="1.5"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="hsl(194,100%,42%)" strokeWidth="1.5"/></svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">1-on-1 only</div>
                      <div className="text-xs text-slate-500">Teaching format</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="hsl(210,86%,30%)" strokeWidth="1.5"/><polyline points="12 6 12 12 16 14" stroke="hsl(210,86%,30%)" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">Flexible schedule</div>
                      <div className="text-xs text-slate-500">Sessions at your pace</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="hsl(210,86%,30%)" strokeWidth="1.5"/><circle cx="12" cy="10" r="3" stroke="hsl(210,86%,30%)" strokeWidth="1.5"/></svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">Online · Tamil Nadu, India</div>
                      <div className="text-xs text-slate-500">Available worldwide</div>
                    </div>
                  </div>
                </div>

                <a href="https://www.linkedin.com/in/arivumathimr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full py-1.5 pr-4 pl-2 text-sm text-slate-600 hover:text-[hsl(210,86%,30%)] hover:border-[hsl(210,86%,30%)] transition-colors mt-4">
                  <div className="w-6 h-6 rounded bg-[#0A66C2] flex items-center justify-center">
                    <svg width="12" height="12" fill="#fff" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2" fill="#fff"/></svg>
                  </div>
                  View LinkedIn profile →
                </a>
              </div>

              {/* Right Column - Bio */}
              <div>
                <h3 className="text-3xl font-serif text-slate-900 mb-1">Arivumathi R</h3>
                <p className="text-[hsl(210,86%,30%)] font-medium mb-8">Data Scientist · Generative AI Specialist · Founder, SkillEdge Coaching</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                    <div className="text-2xl font-serif text-[hsl(210,86%,30%)] mb-1">Python</div>
                    <div className="text-xs text-slate-500">Primary language</div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                    <div className="text-2xl font-serif text-[hsl(210,86%,30%)] mb-1">ML + AI</div>
                    <div className="text-xs text-slate-500">Core expertise</div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                    <div className="text-2xl font-serif text-[hsl(210,86%,30%)] mb-1">1-on-1</div>
                    <div className="text-xs text-slate-500">Teaching style</div>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
                  <p>
                    I'm a <strong className="text-slate-900 font-medium">Data Scientist specialising in Generative AI</strong>, working hands-on with Python, Machine Learning, SQL, and modern AI tools every day. I started SkillEdge Coaching because I noticed a huge gap — most online courses teach theory but never show you how to <strong className="text-slate-900 font-medium">actually build and deploy something real.</strong>
                  </p>
                  <p>
                    In my sessions, I teach exactly what I use in my own work — <strong className="text-slate-900 font-medium">FastAPI, Docker, real ML pipelines, and GenAI integrations</strong>. Every session is live and 1-on-1, so we move at your pace, address your doubts instantly, and build things you can actually show to employers.
                  </p>
                </div>

                <div className="bg-slate-900 rounded-2xl p-6 relative overflow-hidden mb-8">
                  <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-[hsl(194,100%,42%)]/10 pointer-events-none"></div>
                  <div className="font-serif text-sm text-white/30 mb-2">Why I teach</div>
                  <p className="text-white/80 italic leading-relaxed text-sm md:text-base">
                    "I want to help students build exactly what the industry is looking for today. No fluff, just practical, modern tech stacks."
                  </p>
                </div>
                
                <div className="pt-8 border-t border-slate-200">
                  <p className="text-xs tracking-widest uppercase text-slate-500 font-medium mb-3">Core Skills</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-medium px-4 py-1.5 rounded-full border border-[#97C459] bg-[#EAF3DE] text-[#27500A]">Python</span>
                    <span className="text-sm font-medium px-4 py-1.5 rounded-full border border-[#85B7EB] bg-[#E6F1FB] text-[#0C447C]">Machine Learning</span>
                    <span className="text-sm font-medium px-4 py-1.5 rounded-full border border-[#C4B5FD] bg-[#EDE9FE] text-[#4C1D95]">Data Science</span>
                    <span className="text-sm font-medium px-4 py-1.5 rounded-full border border-[#EF9F27] bg-[#FAEEDA] text-[#633806]">Generative AI</span>
                    <span className="text-sm font-medium px-4 py-1.5 rounded-full border border-[#5DCAA5] bg-[#E1F5EE] text-[#085041]">SQL & DBs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 bg-slate-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "I’m proud to share that I’ve successfully completed the Master Python Course. The course provided a strong foundation in Python, covering everything from basic to advanced concepts, with a focus on hands-on practice, quizzes, assignments, and projects. A heartfelt thank you to SkillEdge Coaching and my trainer, Arivumathi Mam, for their complete guidance and support.",
                  author: "Balachandru",
                  role: "BCA final year"
                },
                {
                  quote: "Python coaching at skill edge academy exceeded my expectations, providing comprehensive guidance and hands-on experience that transformed me from a beginner to a proficient programmer. The expert instructors and structured curriculum made learning Python enjoyable, engaging, and incredibly effective.",
                  author: "Mohan",
                  role: "BCA final year"
                },
                {
                  quote: "I'm writing to express my sincere appreciation for the recent machine learning class. It was truly insightful. What stood out the most for me was the hands-on project. Getting to apply the concepts directly to a practical problem was incredibly valuable. Thank you again for your dedication and for making the learning experience so engaging and effective.",
                  author: "Srihari",
                  role: "Working professional"
                },
                {
                  quote: "First of all thank you so much Akka... Python class was very useful for me and you are teaching is very well and I am zero knowledge about the python but eppo python pathiii basic knowledge erruku this is useful for my career. Akka neega romma dedicated person.then enna doubt kettalum help pannuvigaa. Miss your class akka... Thank you so much..@SkillEdge Coaching ❤️",
                  author: "Pavithra",
                  role: "B.Sc., Final year"
                }
              ].slice(0, showAllTestimonials ? 4 : 3).map((testimonial, i) => (
                <div key={i} className="bg-slate-800 p-8 rounded-2xl flex flex-col h-full">
                  <div className="flex gap-1 text-yellow-400 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-[15px] leading-relaxed text-slate-300 mb-8 italic flex-grow">"{testimonial.quote}"</p>
                  <div className="mt-auto">
                    <p className="font-bold text-white">{testimonial.author}</p>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
              {!showAllTestimonials && (
                <div className="flex items-center justify-center md:col-span-3 mt-8">
                  <button 
                    onClick={() => setShowAllTestimonials(true)}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 text-white hover:bg-slate-700 hover:text-blue-400 transition-all border border-slate-700 shadow-lg group"
                    aria-label="Show more testimonials"
                  >
                    <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto bg-blue-600 rounded-3xl shadow-xl overflow-hidden border border-blue-500">
              <div className="p-10 md:p-16 text-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start?</h2>
                <p className="text-blue-100 mb-10 max-w-xl mx-auto text-lg">
                  Reach out to us today to schedule your free consultation and start your learning journey.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-12">
                  <div className="flex items-center gap-3">
                    <Mail className="h-6 w-6 text-blue-300" />
                    <span className="text-lg">skilledgecoaching@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-6 w-6 text-blue-300" />
                    <span className="text-lg">Usually replies within 24 hours</span>
                  </div>
                </div>
                
                <div className="pt-10 border-t border-blue-500/50">
                  <p className="text-sm text-blue-200 mb-6 uppercase tracking-widest font-semibold">Connect with us</p>
                  <div className="flex justify-center gap-4">
                    <a href="https://wa.me/918610815391" target="_blank" rel="noopener noreferrer" className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 hover:bg-green-400 text-white transition-all hover:-translate-y-1 shadow-lg" aria-label="WhatsApp">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.97 2.005c-5.508 0-9.972 4.463-9.972 9.973 0 1.75.454 3.435 1.312 4.939L2 22l5.244-1.309c1.464.793 3.12 1.21 4.819 1.21 5.508 0 9.972-4.463 9.972-9.973 0-5.51-4.464-9.973-9.972-9.973zm0 18.232c-1.464 0-2.894-.383-4.15-1.114l-.297-.174-3.09.771.815-3.003-.191-.303c-.802-1.272-1.226-2.738-1.226-4.257 0-4.542 3.69-8.233 8.23-8.233 4.54 0 8.23 3.691 8.23 8.233 0 4.542-3.69 8.233-8.23 8.233zm4.514-6.177c-.247-.124-1.462-.723-1.69-.806-.226-.083-.393-.124-.558.124-.165.247-.64 .806-.783.97-.144.165-.289.185-.536.062-.247-.124-1.045-.384-1.99-1.229-.735-.658-1.23-1.472-1.374-1.72-.144-.247-.015-.38.108-.504.11-.112.247-.289.371-.433.124-.144.165-.247.247-.412.083-.165.042-.31-.02-.433-.062-.124-.558-1.343-.764-1.838-.2-.482-.404-.417-.558-.424-.144-.007-.31-.008-.475-.008-.165 0-.433.062-.66.31-.227.247-.866.845-.866 2.062 0 1.217.887 2.392 1.01 2.557.124.165 1.745 2.657 4.228 3.727 2.483 1.07 2.483.702 2.937.66.454-.042 1.462-.598 1.668-1.176.206-.578.206-1.07.144-1.176-.062-.107-.226-.165-.473-.289z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/skilledge-coaching/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 hover:bg-blue-400 text-white transition-all hover:-translate-y-1 shadow-lg" aria-label="LinkedIn">
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a href="https://www.youtube.com/@SkillEdgeCoaching" target="_blank" rel="noopener noreferrer" className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 hover:bg-blue-400 text-white transition-all hover:-translate-y-1 shadow-lg" aria-label="YouTube">
                      <Youtube className="h-6 w-6" />
                    </a>
                    <a href="https://www.instagram.com/skilledge_coaching/?hl=en" target="_blank" rel="noopener noreferrer" className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 hover:bg-blue-400 text-white transition-all hover:-translate-y-1 shadow-lg" aria-label="Instagram">
                      <Instagram className="h-6 w-6" />
                    </a>
                  </div>
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