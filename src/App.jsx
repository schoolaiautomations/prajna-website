import { useState } from "react";
import principalImg from "./Images/principal.jpeg";

const navLinks = ["Home", "About Us", "Courses", "Contact"];

const courses = [
  { icon: "🌐", title: "Language", color: "bg-blue-500", desc: "Master new languages with expert instructors" },
  { icon: "📈", title: "Business", color: "bg-green-500", desc: "Grow your business acumen and leadership skills" },
  { icon: "📚", title: "Literature", color: "bg-red-500", desc: "Explore world literature and creative writing" },
  { icon: "🔬", title: "Science", color: "bg-purple-500", desc: "Dive deep into physics, chemistry & biology" },
  { icon: "🎨", title: "Arts", color: "bg-yellow-500", desc: "Express creativity through painting and design" },
  { icon: "💻", title: "Technology", color: "bg-cyan-500", desc: "Learn coding, AI and the future of tech" },
];

const events = [
  { date: "3 December 2026", title: "Campus Clean Workshop", time: "10:00 AM – 3:00 PM", location: "Auditorium" },
  { date: "7 December 2026", title: "Tech Summit", time: "10:00 AM – 3:00 PM", location: "Auditorium" },
  { date: "12 December 2026", title: "Environment Conference", time: "10:00 AM – 3:00 PM", location: "Auditorium" },
  { date: "20 December 2026", title: "Annual Science Fair", time: "09:00 AM – 5:00 PM", location: "Main Hall" },
];

const teachers = [
  { name: "Dr. Sarah Johnson", subject: "Mathematics", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Prof. Mark Williams", subject: "Physics", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Ms. Emily Chen", subject: "Literature", img: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Mr. David Kumar", subject: "Computer Science", img: "https://randomuser.me/api/portraits/men/75.jpg" },
];

const toppers = [
  { name: "Aarav Sharma", marks: "99.8%", rank: "AIR 12", exam: "IIT JEE Advanced", img: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Priya Patel", marks: "715/720", rank: "AIR 18", exam: "NEET UG", img: "https://randomuser.me/api/portraits/women/32.jpg" },
  { name: "Rohan Gupta", marks: "99.5%", rank: "AIR 45", exam: "IIT JEE Mains", img: "https://randomuser.me/api/portraits/men/22.jpg" },
  { name: "Neha Singh", marks: "710/720", rank: "AIR 62", exam: "NEET UG", img: "https://randomuser.me/api/portraits/women/14.jpg" },
  { name: "Rahul Verma", marks: "99.1%", rank: "AIR 105", exam: "IIT JEE Advanced", img: "https://randomuser.me/api/portraits/men/53.jpg" },
  { name: "Ananya Reddy", marks: "980/1000", rank: "State 1st", exam: "State Board", img: "https://randomuser.me/api/portraits/women/64.jpg" },
];

const stats = [
  { value: "8,000+", label: "Students Enrolled" },
  { value: "200+", label: "Expert Teachers" },
  { value: "150+", label: "Courses Offered" },
  { value: "99%", label: "Success Rate" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Alumni – Class of 2024",
    text: "Edubin transformed my life. The teachers are incredible and the environment pushes you to be your best every single day.",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Arjun Mehta",
    role: "Current Student",
    text: "The courses are world-class. I gained practical skills and confidence that I couldn't have gotten anywhere else.",
    img: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    name: "Sneha Rao",
    role: "Alumni – Class of 2023",
    text: "From language to technology, the diversity of programs here is unmatched. Highly recommend Edubin to everyone!",
    img: "https://randomuser.me/api/portraits/women/25.jpg",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">

      {/* ── TOP INFO BAR ── */}
      {/* <div className="bg-[#0d1b4b] text-white text-xs sm:text-sm px-4 sm:px-8 py-2 flex flex-col sm:flex-row justify-between items-center gap-1">
        <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
          <span className="flex items-center gap-1">📍 127/5 Mark Street, New York</span>
          <span className="flex items-center gap-1">✉️ info@yourmail.com</span>
        </div>
        <span className="flex items-center gap-1">🕐 Opening Hours: Monday to Saturday · 8 Am to 5 Pm</span>
      </div> */}

      {/* ── HEADER ── */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#0d1b4b] rounded flex items-center justify-center text-white font-bold text-lg">E</div>
            <span className="text-xl font-extrabold text-[#0d1b4b] tracking-wide">SRI PRAJNA GROUP OF INSTITUTIONS</span>
          </div>

          {/* Phone + CTA (desktop) */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-[#0d1b4b]">📞</span>
              <div>
                <p className="text-xs text-gray-400">Need Help? Call us Free</p>
                <p className="font-bold text-[#0d1b4b]">7674966739 / 9441791705</p>
              </div>
            </div>
            <a href="#apply" className="bg-yellow-400 hover:bg-yellow-300 transition text-[#0d1b4b] font-bold px-5 py-2 rounded-md text-sm shadow">
              Apply Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            id="hamburger-btn"
            className="lg:hidden text-2xl text-[#0d1b4b] focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Navigation */}
        <nav className="border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-block px-3 py-3 text-sm font-semibold text-gray-700 hover:text-yellow-500 transition border-b-2 border-transparent hover:border-yellow-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Nav */}
            {menuOpen && (
              <ul id="mobile-menu" className="lg:hidden flex flex-col py-2 border-t border-gray-100">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={() => setMenuOpen(false)}
                      className="block px-2 py-2 text-sm font-semibold text-gray-700 hover:text-yellow-500 hover:bg-gray-50 rounded transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
                <li className="mt-2 px-2">
                  <a href="#apply" className="block bg-yellow-400 text-center text-[#0d1b4b] font-bold py-2 rounded-md text-sm">
                    Apply Now
                  </a>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section id="home" className="relative h-[420px] sm:h-[520px] lg:h-[600px] overflow-hidden">
        <img
          src="/hero.png"
          alt="Students learning"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex flex-col justify-center px-6 sm:px-12 lg:px-20">
          <p className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-3">Welcome to SRI PRAJNA GROUP OF INSTITUTIONS</p>
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-white max-w-xl leading-tight">
            SRI PRAJNA IS THE KEY THAT UNLOCKS<br className="hidden sm:block" />
            <span className="text-yellow-400">GOLDEN DOOR</span> TO FREEDOM
          </h1>
          <p className="mt-4 text-gray-200 max-w-lg text-sm sm:text-base leading-relaxed">
            A Right choice for IITIANS and MEDICOS . We are very happy to announce that we have completed one year sucessfully with your great support . Our intension is to provide better education to mould your children into good citizens of the future .
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#about-us" className="bg-yellow-400 hover:bg-yellow-300 text-[#0d1b4b] font-bold px-6 py-2.5 rounded-md text-sm transition shadow-md">
              Read More
            </a>
            <a href="#courses" className="bg-white/20 hover:bg-white/30 border border-white text-white font-bold px-6 py-2.5 rounded-md text-sm transition backdrop-blur-sm">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* ── TOPPERS & HIGH PERFORMERS ── */}
      <section className="bg-[#0d1b4b] py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-yellow-400 font-semibold text-sm uppercase tracking-widest">Proud Achievers</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">Our Toppers & High Performers</h2>
            <p className="text-gray-300 mt-2 max-w-xl mx-auto text-sm">
              Celebrating the outstanding success of our students in competitive and board examinations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {toppers.map((t, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex items-center gap-5 hover:bg-white/20 transition duration-300 shadow-xl"
              >
                <img src={t.img} alt={t.name} className="w-20 h-20 rounded-full border-4 border-yellow-400 object-cover shadow-md" />
                <div>
                  <h3 className="font-bold text-white text-lg">{t.name}</h3>
                  <p className="text-xs text-yellow-400 font-semibold uppercase tracking-wide mt-1">{t.exam}</p>
                  <div className="mt-2 text-sm text-gray-200">
                    <span className="font-semibold block">Marks: <span className="text-white">{t.marks}</span></span>
                    <span className="font-semibold block">Rank: <span className="text-yellow-300 text-base">{t.rank}</span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT + PRINCIPAL'S MESSAGE ── */}
      <section id="about-us" className="py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-stretch">

          {/* About */}
          <div className="flex flex-col">
            <p className="text-yellow-500 font-semibold text-sm uppercase tracking-widest mb-1">About Us</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1b4b] leading-snug">
              Welcome to <span className="text-yellow-400">SRI PRAJNA GROUP</span>
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Our intension is to provide better education to mould your children into good citizens of the future. We will make genuine efforts to make your dreams regarding your children career come true. Best service is our motto.
            </p>
            <p className="mt-3 text-gray-500 leading-relaxed">
              We will make genuine efforts to make your dreams regarding your children career come true. Best service is our motto.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#courses" className="bg-yellow-400 hover:bg-yellow-300 text-[#0d1b4b] font-bold px-6 py-2.5 rounded-md text-sm transition shadow">
                Learn More
              </a>
              <a href="#contact" className="border border-[#0d1b4b] text-[#0d1b4b] hover:bg-[#0d1b4b] hover:text-white font-bold px-6 py-2.5 rounded-md text-sm transition">
                Contact Us
              </a>
            </div>

            {/* About image */}
            <div className="mt-auto pt-8 rounded-xl overflow-hidden shadow-lg">
              <img src="/about.png" alt="Students studying" className="w-full object-cover h-48 sm:h-64 rounded-xl" />
            </div>
          </div>

          {/* Principal's Message */}
          <div className="flex flex-col">
            <p className="text-yellow-500 font-semibold text-sm uppercase tracking-widest mb-1">From the Desk</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1b4b] mb-6">Principal's Message</h2>

            <div className="flex-1 flex flex-col justify-center">
              {/* Photo + Name */}
              <div className="flex flex-col items-center mb-6">
                <img
                  src={principalImg}
                  alt="Principal"
                  className="w-44 h-56 rounded-2xl object-cover border-4 border-yellow-400 shadow-xl"
                />
                <h3 className="mt-4 font-bold text-[#0d1b4b] text-lg text-center">Sri. K. ABHI </h3>
                <p className="text-xs text-yellow-500 font-semibold uppercase tracking-wide text-center">Principal, Sri Prajna Group</p>
              </div>

              {/* Quotation */}
              <div className="relative border-l-4 border-yellow-400 pl-5 py-3 bg-yellow-50/40 rounded-r-xl">
                <span className="absolute -top-3 left-1 text-yellow-400 text-5xl leading-none font-serif select-none">"</span>
                <p className="text-gray-600 italic leading-relaxed text-sm sm:text-base mt-3">
                  Education is not the filling of a pail, but the lighting of a fire. At Sri Prajna, we strive to ignite the flame of curiosity, discipline, and excellence in every child. Together, let us build a future where our children shine as the brightest stars.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-3 justify-end">
                <div className="h-px flex-1 bg-gray-200"></div>
                <span className="text-[#0d1b4b] font-bold text-sm italic">— Sri. Ramesh Babu</span>
                <span className="text-yellow-500 text-lg">✍️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BANNER ── */}
      {/* <section className="bg-yellow-400 py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#0d1b4b]">{s.value}</span>
              <span className="text-sm font-semibold text-[#0d1b4b]/80 mt-1">{s.label}</span>
            </div>
          ))}
        </div>
      </section> */}

      {/* ── MISSION & PROMISE SECTION ── */}
      <section className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-stretch">
          {/* We Aim */}
          <div className="bg-[#0d1b4b] border border-white/10 rounded-2xl p-8 sm:p-10 shadow-xl text-white hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 flex items-center gap-3">
              <span className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-[#0d1b4b] text-2xl shadow-md">🎯</span>
              We Aim:
            </h2>
            <ul className="space-y-5">
              {[
                "To facilitate better learning processes",
                "To give better education with utmost discipilne",
                "To strengthen inner abilities of the students",
                "To pave a right track for siunding academic career",
                "To inculcate good learning habits and values",
                "To create a supportive environment for holistic development."
              ].map((aim, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-yellow-400 mt-1 flex-shrink-0 text-lg">✔</span>
                  <span className="text-gray-200 leading-relaxed font-medium">{aim}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* We Promise */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 sm:p-10 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 text-[#0d1b4b]">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 flex items-center gap-3">
              <span className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-[#0d1b4b] text-2xl shadow-md">🤝</span>
              We Promise to Provide:
            </h2>
            <ul className="space-y-4">
              {[
                "Child centered learning program",
                "Well design curriculum with national standards and latest trends",
                "well trained faculty",
                "Standard content for concept oriented learning in all subjects",
                "Tests to develop competitive skills right from 3rd standard",
                "Safe and secure transport facilities",
                "Special courses like Vedic maths and abacus as part of mainstream curriculum",
                "Unwavering support throughout your educational journey."
              ].map((promise, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-yellow-500 mt-1 flex-shrink-0 text-lg">✦</span>
                  <span className="text-gray-600 leading-relaxed font-medium">{promise}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── TEACHER–STUDENT RATIO ── */}
      <section id="courses" className="py-16 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Personalized Attention</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1b4b] mt-1">Teacher – Student Ratio</h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
              We maintain optimal class sizes to ensure every student receives the individual attention they deserve.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* School Ratio */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#0d1b4b] px-6 py-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-xl">🏫</span>
                <h3 className="text-white font-bold text-lg">School Classes</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { grade: "Nursery to 2nd Class", ratio: "1 : 20", icon: "🧒" },
                  { grade: "3rd Class to 4th Class", ratio: "1 : 25", icon: "📖" },
                  { grade: "5th Class to 8th Class", ratio: "1 : 30", icon: "📝" },
                  { grade: "9th Class to 10th Class", ratio: "1 : 40", icon: "🎓" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between px-6 py-5 hover:bg-yellow-50/60 transition group">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
                      <span className="font-semibold text-[#0d1b4b] text-sm sm:text-base">{item.grade}</span>
                    </div>
                    <span className="bg-[#0d1b4b] text-yellow-400 font-extrabold text-sm sm:text-base px-4 py-1.5 rounded-full shadow-sm">{item.ratio}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Intermediate Courses */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-yellow-400 px-6 py-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-[#0d1b4b] flex items-center justify-center text-xl text-yellow-400">🎯</span>
                <h3 className="text-[#0d1b4b] font-bold text-lg">Our Intermediate Courses</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { course: "IPE + EAPCET", ratio: "1 : 40", icon: "⚡" },
                  { course: "IPE + JEE MAINS", ratio: "1 : 40", icon: "🚀" },
                  { course: "IPE + NEET", ratio: "1 : 40", icon: "🩺" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between px-6 py-5 hover:bg-yellow-50/60 transition group">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
                      <span className="font-semibold text-[#0d1b4b] text-sm sm:text-base">{item.course}</span>
                    </div>
                    <span className="bg-yellow-400 text-[#0d1b4b] font-extrabold text-sm sm:text-base px-4 py-1.5 rounded-full shadow-sm">{item.ratio}</span>
                  </div>
                ))}
              </div>
              {/* Extra info */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center italic">All intermediate courses include comprehensive IPE preparation alongside competitive exam coaching.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── APPLY CTA ── */}
      <section id="apply" className="py-16 px-4 sm:px-8 bg-yellow-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Join Us Today</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1b4b] mt-2 mb-4">
            Admissions Are Open for 2026–27
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-xl mx-auto">
            Secure your spot at one of the best educational institutions. Limited seats available — apply now before the deadline.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              id="apply-name"
              type="text"
              placeholder="Your full name"
              className="border border-gray-300 rounded-md px-4 py-2.5 text-sm flex-1 max-w-xs focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              id="apply-email"
              type="email"
              placeholder="Your email address"
              className="border border-gray-300 rounded-md px-4 py-2.5 text-sm flex-1 max-w-xs focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              id="apply-submit"
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-300 text-[#0d1b4b] font-bold px-6 py-2.5 rounded-md text-sm transition shadow-md"
            >
              Apply Now
            </button>
          </form>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-16 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: "📍", title: "Our Location", detail: "JVR Bhavan , Near SBI Bank ,Jaggampeta,kakinada Dist,Andhra Pradesh" },
            { icon: "📞", title: "Phone Number", detail: "+91 7674966739 / 9441791705" },
            { icon: "✉️", title: "Email Address", detail: "sripranjnagroup@gmail.com" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:border-yellow-400 hover:shadow-md transition-all duration-200">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-[#0d1b4b] text-base">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0d1b4b] text-white pt-14 pb-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center text-[#0d1b4b] font-bold">E</div>
              <span className="font-extrabold text-lg tracking-wide">SRI PRAJNA GROUP</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering minds, building futures. Join thousands of students on their journey to excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-yellow-400 mb-3 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["About Us", "Courses", "Events", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase().replace(" ", "-")}`} className="hover:text-yellow-400 transition">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold text-yellow-400 mb-3 text-sm uppercase tracking-widest">Our Courses</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {courses.slice(0, 5).map((c) => (
                <li key={c.title}><a href="#courses" className="hover:text-yellow-400 transition">{c.title}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-yellow-400 mb-3 text-sm uppercase tracking-widest">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-3">Subscribe to get updates on new courses and events.</p>
            <div className="flex gap-2">
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email"
                className="bg-white/10 border border-white/20 rounded-md px-3 py-2 text-sm flex-1 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                id="newsletter-submit"
                className="bg-yellow-400 hover:bg-yellow-300 text-[#0d1b4b] font-bold px-3 py-2 rounded-md text-sm transition"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-gray-400 text-xs">
          <span>© 2026 Edubin. All rights reserved.</span>
          <span>Designed with ❤️ for Education</span>
        </div>
      </footer>

    </div>
  );
}