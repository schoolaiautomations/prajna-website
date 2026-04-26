import { useState, useEffect, useRef } from "react";
import principalImg from "./Images/principal.jpeg";

/* ─── DATA ─── */
const navLinks = ["Home", "About Us", "Courses", "Contact"];

const courses = [
  { icon: "🌐", title: "Language", desc: "Master new languages with expert instructors" },
  { icon: "📈", title: "Business", desc: "Grow your business acumen and leadership skills" },
  { icon: "📚", title: "Literature", desc: "Explore world literature and creative writing" },
  { icon: "🔬", title: "Science", desc: "Dive deep into physics, chemistry & biology" },
  { icon: "🎨", title: "Arts", desc: "Express creativity through painting and design" },
  { icon: "💻", title: "Technology", desc: "Learn coding, AI and the future of tech" },
];

const toppers = [
  { name: "Aarav Sharma", marks: "99.8%", rank: "AIR 12", exam: "IIT JEE Advanced", img: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Priya Patel", marks: "715/720", rank: "AIR 18", exam: "NEET UG", img: "https://randomuser.me/api/portraits/women/32.jpg" },
  { name: "Rohan Gupta", marks: "99.5%", rank: "AIR 45", exam: "IIT JEE Mains", img: "https://randomuser.me/api/portraits/men/22.jpg" },
  { name: "Neha Singh", marks: "710/720", rank: "AIR 62", exam: "NEET UG", img: "https://randomuser.me/api/portraits/women/14.jpg" },
  { name: "Rahul Verma", marks: "99.1%", rank: "AIR 105", exam: "IIT JEE Advanced", img: "https://randomuser.me/api/portraits/men/53.jpg" },
  { name: "Ananya Reddy", marks: "980/1000", rank: "State 1st", exam: "State Board", img: "https://randomuser.me/api/portraits/women/64.jpg" },
];

const aims = [
  "To facilitate better learning processes",
  "To give better education with utmost discipline",
  "To strengthen inner abilities of the students",
  "To pave a right track for sounding academic career",
  "To inculcate good learning habits and values",
  "To create a supportive environment for holistic development",
];

const promises = [
  "Child centered learning program",
  "Well designed curriculum with national standards and latest trends",
  "Well trained faculty",
  "Standard content for concept oriented learning in all subjects",
  "Tests to develop competitive skills right from 3rd standard",
  "Safe and secure transport facilities",
  "Special courses like Vedic maths and abacus as part of mainstream curriculum",
  "Unwavering support throughout your educational journey",
];

const schoolRatios = [
  { grade: "Nursery to 2nd Class", ratio: "1 : 20", icon: "🧒" },
  { grade: "3rd Class to 4th Class", ratio: "1 : 25", icon: "📖" },
  { grade: "5th Class to 8th Class", ratio: "1 : 30", icon: "📝" },
  { grade: "9th Class to 10th Class", ratio: "1 : 40", icon: "🎓" },
];

const intermediateCourses = [
  { course: "IPE + EAPCET", ratio: "1 : 40", icon: "⚡" },
  { course: "IPE + JEE MAINS", ratio: "1 : 40", icon: "🚀" },
  { course: "IPE + NEET", ratio: "1 : 40", icon: "🩺" },
];

const contactInfo = [
  { icon: "📍", title: "Our Location", detail: "JVR Bhavan, Near SBI Bank, Jaggampeta, Kakinada Dist, Andhra Pradesh" },
  { icon: "📞", title: "Phone Number", detail: "+91 7674966739 / 9441791705" },
  { icon: "✉️", title: "Email Address", detail: "sripranjnagroup@gmail.com" },
];

/* ─── HOOKS ─── */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

/* ─── SECTION WRAPPER ─── */
function Section({ children, className = "", id }) {
  const [ref, isVisible] = useInView();
  return (
    <section
      id={id}
      ref={ref}
      className={`${className} ${isVisible ? "animate-fade-in" : "opacity-0"}`}
      style={{ transition: "opacity 0.6s ease" }}
    >
      {children}
    </section>
  );
}

/* ─── BADGE ─── */
function Badge({ children }) {
  return (
    <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-50 text-indigo-600 border border-indigo-100/80">
      {children}
    </span>
  );
}

/* ─── MAIN APP ─── */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="font-sans text-slate-600 overflow-x-hidden bg-white">

      {/* ════════════════════ HEADER ════════════════════ */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-sm" : "bg-white/60 backdrop-blur-md"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <img src="/logo.png" alt="Sri Prajna Logo" className="w-10 h-10 rounded-xl object-contain" />
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-slate-800 leading-tight">
                Sri Prajna Group
              </span>
              <span className="text-[10px] font-medium text-indigo-500 tracking-wide uppercase hidden sm:block">of Institutions</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-4 py-2 text-sm font-medium rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-indigo-50/70 transition-all"
              >
                {link}
              </a>
            ))}
            <a
              href="#apply"
              className="ml-3 px-5 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:from-indigo-600 hover:to-violet-600 transition-all shadow-md shadow-indigo-200 hover:shadow-lg hover:shadow-indigo-300"
            >
              Apply Now
            </a>
          </nav>

          {/* Hamburger */}
          <button
            id="hamburger-btn"
            className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors hover:bg-indigo-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="lg:hidden animate-slide-down bg-white/95 backdrop-blur-xl border-t border-indigo-50">
            <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                >
                  {link}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-2 pt-3 border-t border-slate-100">
                <a href="#apply" className="text-center px-5 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-md shadow-indigo-200">
                  Apply Now
                </a>
                <a
                  href="https://ouzeqnkvmspmpcevnumg.supabase.co/storage/v1/object/public/Parent%20App%20APK/app-debug.apk"
                  download
                  className="text-center px-5 py-2.5 text-sm font-semibold rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition"
                >
                  📱 Download Parent App
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ════════════════════ HERO ════════════════════ */}
      <section id="home" className="relative min-h-[100vh] flex items-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-50">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/60 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-100/60 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-purple-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-32 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="animate-fade-in-up mb-4">
              <Badge>Welcome</Badge>
            </div>

            <div className="flex items-center gap-5 animate-fade-in-up delay-100">
              <img src="/logo.png" alt="Sri Prajna Logo" className="w-20 h-20 sm:w-24 sm:h-24 object-contain flex-shrink-0 drop-shadow-md" />
              <h1>
                <span className="block text-3xl sm:text-4xl lg:text-5xl font-extrabold gradient-text leading-tight tracking-tight">
                  Sri Prajna
                </span>
                <span className="block text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 leading-tight tracking-tight">
                  Institutions
                </span>
              </h1>
            </div>

            <p className="mt-6 text-xl sm:text-2xl lg:text-3xl font-bold text-slate-600 leading-snug tracking-tight animate-fade-in-up delay-200">
              Education is the key that unlocks the{" "}
              <span className="gradient-text">golden door</span> to freedom
            </p>

            <p className="mt-6 text-base sm:text-lg text-slate-500 max-w-lg leading-relaxed animate-fade-in-up delay-200">
              A right choice for IITians and Medicos. We provide excellence in education to mould your children into the bright citizens of tomorrow.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <a
                href="#about-us"
                className="px-7 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:from-indigo-600 hover:to-violet-600 transition-all shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 hover:-translate-y-0.5"
              >
                Explore More
              </a>
              <a
                href="#courses"
                className="px-7 py-3 text-sm font-semibold rounded-xl border border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition-all hover:-translate-y-0.5"
              >
                View Courses
              </a>
            </div>

            {/* Quick Stats */}
            <div className="mt-14 flex gap-10 animate-fade-in-up delay-400">
              {[
                { val: "8,000+", label: "Students" },
                { val: "200+", label: "Teachers" },
                { val: "99%", label: "Success" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-800">{s.val}</p>
                  <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block animate-fade-in-up delay-300">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-violet-200 rounded-3xl rotate-3 scale-105 opacity-40" />
              <img
                src="/hero.png"
                alt="Students learning"
                className="relative rounded-3xl shadow-2xl shadow-indigo-100 object-cover w-full h-[440px] ring-1 ring-white/60"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-indigo-300/50 flex justify-center pt-2">
            <div className="w-1 h-2.5 bg-indigo-400/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* ════════════════════ TOPPERS ════════════════════ */}
      <Section className="py-20 sm:py-28 px-5 sm:px-8 bg-gradient-to-b from-violet-50/60 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Badge>Proud Achievers</Badge>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
              Our Toppers &amp; High Performers
            </h2>
            <p className="mt-3 text-slate-400 max-w-md mx-auto text-sm">
              Celebrating the outstanding success of our students in competitive and board examinations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {toppers.map((t, i) => (
              <div
                key={i}
                className="group p-5 rounded-2xl bg-white border border-slate-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 transition-all duration-300 hover-lift"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-indigo-100 group-hover:ring-indigo-300 transition-all shadow-sm"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-800 text-sm truncate">{t.name}</h3>
                    <p className="text-xs text-indigo-500 font-medium mt-0.5">{t.exam}</p>
                    <div className="flex gap-4 mt-2">
                      <span className="text-xs text-slate-400">
                        Marks: <span className="text-slate-700 font-medium">{t.marks}</span>
                      </span>
                      <span className="text-xs text-slate-400">
                        Rank: <span className="text-indigo-500 font-medium">{t.rank}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ════════════════════ ABOUT + PRINCIPAL ════════════════════ */}
      <Section id="about-us" className="py-20 sm:py-28 px-5 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

          {/* About */}
          <div>
            <Badge>About Us</Badge>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
              Welcome to{" "}
              <span className="gradient-text">Sri Prajna Group</span>
            </h2>
            <p className="mt-5 text-slate-500 leading-relaxed">
              Our intention is to provide better education to mould your children into good citizens of the future. We will make genuine efforts to make your dreams regarding your children's career come true.
            </p>
            <p className="mt-3 text-slate-500 leading-relaxed">
              Best service is our motto. We will make genuine efforts to make your dreams regarding your children's career come true.
            </p>

            <div className="mt-7 flex gap-3">
              <a href="#courses" className="px-6 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:from-indigo-600 hover:to-violet-600 transition-all shadow-md shadow-indigo-200">
                Learn More
              </a>
              <a href="#contact" className="px-6 py-2.5 text-sm font-semibold rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all">
                Contact Us
              </a>
            </div>

            {/* About Image */}
            <div className="mt-10 rounded-2xl overflow-hidden shadow-lg shadow-indigo-50 ring-1 ring-slate-100">
              <img src="/about.png" alt="Students studying" className="w-full h-52 sm:h-64 object-cover" />
            </div>
          </div>

          {/* Principal's Message */}
          <div>
            <Badge>From the Desk</Badge>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight mb-8">
              Principal's Message
            </h2>

            {/* Photo + Name */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative">
                <img
                  src={principalImg}
                  alt="Principal"
                  className="w-36 h-44 rounded-2xl object-cover shadow-lg shadow-indigo-50 ring-1 ring-slate-100"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-md">
                  <span className="text-white text-xs">✦</span>
                </div>
              </div>
              <h3 className="mt-5 font-bold text-slate-800">Sri. K. ABHI</h3>
              <p className="text-xs text-indigo-500 font-medium uppercase tracking-wider mt-1">Principal, Sri Prajna Group</p>
            </div>

            {/* Quote */}
            <div className="relative p-6 rounded-2xl bg-indigo-50/50 border border-indigo-100/60">
              <span className="absolute -top-3 left-6 text-4xl text-indigo-300 font-serif select-none leading-none">"</span>
              <p className="text-slate-500 italic leading-relaxed text-sm mt-2">
                Education is not the filling of a pail, but the lighting of a fire. At Sri Prajna, we strive to ignite the flame of curiosity, discipline, and excellence in every child. Together, let us build a future where our children shine as the brightest stars.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-indigo-100" />
                <span className="text-slate-700 font-semibold text-xs italic">— Sri. Ramesh Babu</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ════════════════════ MISSION & PROMISE ════════════════════ */}
      <Section className="py-20 sm:py-28 px-5 sm:px-8 bg-gradient-to-b from-white to-indigo-50/40">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">

          {/* We Aim */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100/60 hover-lift">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-lg shadow-md shadow-indigo-200">🎯</div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">We Aim</h2>
            </div>
            <ul className="space-y-4">
              {aims.map((aim, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-500 text-sm leading-relaxed">{aim}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* We Promise */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-100 shadow-sm hover-lift">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center text-lg border border-indigo-100/60">🤝</div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">We Promise to Provide</h2>
            </div>
            <ul className="space-y-4">
              {promises.map((promise, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                  <span className="text-slate-500 text-sm leading-relaxed">{promise}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ════════════════════ TEACHER-STUDENT RATIO ════════════════════ */}
      <Section id="courses" className="py-20 sm:py-28 px-5 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Badge>Personalized Attention</Badge>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
              Teacher – Student Ratio
            </h2>
            <p className="mt-3 text-slate-400 max-w-md mx-auto text-sm">
              We maintain optimal class sizes to ensure every student receives individual attention
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* School Ratio */}
            <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover-lift">
              <div className="px-6 py-4 bg-gradient-to-r from-indigo-50 to-violet-50 border-b border-indigo-100/50 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-sm shadow-sm shadow-indigo-200">🏫</span>
                <h3 className="text-slate-800 font-semibold text-sm">School Classes</h3>
              </div>
              <div className="divide-y divide-slate-50 bg-white">
                {schoolRatios.map((item, i) => (
                  <div key={i} className="flex items-center justify-between px-6 py-4 hover:bg-indigo-50/40 transition-colors group">
                    <div className="flex items-center gap-3">
                      <span className="text-lg group-hover:scale-110 transition-transform">{item.icon}</span>
                      <span className="font-medium text-slate-600 text-sm">{item.grade}</span>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100/80">
                      {item.ratio}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Intermediate Courses */}
            <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover-lift">
              <div className="px-6 py-4 bg-gradient-to-r from-violet-50 to-purple-50 border-b border-violet-100/50 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-sm shadow-sm shadow-violet-200">🎯</span>
                <h3 className="text-slate-800 font-semibold text-sm">Our Intermediate Courses</h3>
              </div>
              <div className="divide-y divide-slate-50 bg-white">
                {intermediateCourses.map((item, i) => (
                  <div key={i} className="flex items-center justify-between px-6 py-4 hover:bg-violet-50/40 transition-colors group">
                    <div className="flex items-center gap-3">
                      <span className="text-lg group-hover:scale-110 transition-transform">{item.icon}</span>
                      <span className="font-medium text-slate-600 text-sm">{item.course}</span>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-sm">
                      {item.ratio}
                    </span>
                  </div>
                ))}
              </div>
              <div className="px-6 py-3.5 bg-slate-50/50 border-t border-slate-100">
                <p className="text-xs text-slate-400 text-center">
                  All intermediate courses include comprehensive IPE preparation alongside competitive exam coaching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ════════════════════ APPLY CTA ════════════════════ */}
      <Section id="apply" className="py-20 sm:py-28 px-5 sm:px-8 bg-gradient-to-b from-indigo-50/50 to-violet-50/50">
        <div className="max-w-xl mx-auto text-center">
          <Badge>Join Us Today</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Admissions Are Open for 2026–27
          </h2>
          <p className="mt-3 text-slate-500 text-sm">
            Secure your spot at one of the best educational institutions. Limited seats available — apply now.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <input
              id="apply-name"
              type="text"
              placeholder="Your full name"
              className="px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400/30 focus:border-indigo-300 transition-all flex-1 max-w-xs shadow-sm"
            />
            <input
              id="apply-email"
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400/30 focus:border-indigo-300 transition-all flex-1 max-w-xs shadow-sm"
            />
            <button
              id="apply-submit"
              type="submit"
              className="px-7 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:from-indigo-600 hover:to-violet-600 transition-all shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 hover:-translate-y-0.5"
            >
              Apply Now
            </button>
          </form>
        </div>
      </Section>

      {/* ════════════════════ CONTACT ════════════════════ */}
      <Section id="contact" className="py-20 sm:py-28 px-5 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge>Get in Touch</Badge>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
              Contact Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {contactInfo.map((item, i) => (
              <div
                key={i}
                className="group text-center p-7 rounded-2xl bg-white border border-slate-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 transition-all duration-300 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-2xl mx-auto mb-4 group-hover:bg-indigo-100 transition-colors">{item.icon}</div>
                <h3 className="font-semibold text-slate-800 text-sm">{item.title}</h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ════════════════════ FOOTER ════════════════════ */}
      <footer className="bg-gradient-to-b from-indigo-50/60 to-violet-50/60 border-t border-indigo-100/40 pt-16 pb-8 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/logo.png" alt="Sri Prajna Logo" className="w-9 h-9 rounded-xl object-contain" />
              <span className="font-bold text-base tracking-tight text-slate-800">Sri Prajna Group of Institutions</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering minds, building futures. Join thousands of students on their journey to excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest text-slate-500 mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {["About Us", "Courses", "Apply", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(" ", "-")}`} className="text-sm text-slate-400 hover:text-indigo-500 transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest text-slate-500 mb-4">Our Courses</h4>
            <ul className="space-y-2.5">
              {courses.slice(0, 5).map((c) => (
                <li key={c.title}>
                  <a href="#courses" className="text-sm text-slate-400 hover:text-indigo-500 transition-colors">
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest text-slate-500 mb-4">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Subscribe to get updates on new courses and events.</p>
            <div className="flex gap-2">
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email"
                className="flex-1 px-3.5 py-2.5 text-sm rounded-xl bg-white border border-slate-200 text-slate-700 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/30 focus:border-indigo-300 transition-all shadow-sm"
              />
              <button
                id="newsletter-submit"
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-semibold hover:from-indigo-600 hover:to-violet-600 transition-all shadow-md shadow-indigo-200"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-indigo-100/60 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-400">
          <span>© 2026 Sri Prajna Group of Institutions. All rights reserved.</span>
          <span>Designed with care for education</span>
        </div>
      </footer>

    </div>
  );
}