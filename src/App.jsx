import { useState, useEffect, useRef } from "react";
import principalImg from "./Images/principal.jpeg";
import hero1 from "./Images/sitarama/hero1.jpg";
import hero2 from "./Images/sitarama/hero2.jpg";
import hero3 from "./Images/sitarama/hero3.jpg";
import hero4 from "./Images/sitarama/hero4.jpg";
import hero5 from "./Images/sitarama/hero5.jpg";

import eventFlagRally from "./Images/events/event_flag_rally.jpg";
import eventHealthCamp from "./Images/events/event_health_camp.jpg";
import eventAwarenessSeminar from "./Images/events/event_awareness_seminar.jpg";
import eventSankrantiRangoli from "./Images/events/event_sankranti_rangoli.jpg";
import eventFarewellDay from "./Images/events/event_farewell_day.jpg";
import eventPoliceFelicitation1 from "./Images/events/event_police_felicitation1.jpg";
import eventGuestFelicitation2 from "./Images/events/event_guest_felicitation2.jpg";
import eventDignitariesGroup from "./Images/events/event_dignitaries_group.jpg";
import eventStudentAssembly from "./Images/events/event_student_assembly.jpg";
import eventTraditionalFest from "./Images/events/event_traditional_fest.jpg";

const heroImages = [hero1, hero2, hero3, hero4, hero5];

/* ─── DATA ─── */
const navLinks = ["Home", "About Us", "Courses", "Events", "Contact"];

const courses = [
  { icon: "🌐", title: "Language", desc: "Master new languages with expert instructors" },
  { icon: "📈", title: "Business", desc: "Grow your business acumen and leadership skills" },
  { icon: "📚", title: "Literature", desc: "Explore world literature and creative writing" },
  { icon: "🔬", title: "Science", desc: "Dive deep into physics, chemistry & biology" },
  { icon: "🎨", title: "Arts", desc: "Express creativity through painting and design" },
  { icon: "💻", title: "Technology", desc: "Learn coding, AI and the future of tech" },
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

const degreeCourses = [
  {
    degree: "B.SC",
    fullTitle: "Bachelor of Science",
    icon: "🔬",
    gradient: "from-blue-600 to-indigo-600",
    badgeBg: "bg-blue-50 text-blue-700 border border-blue-100",
    branches: [
      { id: "1", name: "HONOURS COMPUTERS", desc: "Software, Programming & Computer Applications" },
      { id: "2", name: "HONOURS CHEMISTRY", desc: "Chemical Sciences & Laboratory Analysis" },
      { id: "3", name: "HONOURS ZOOLOGY", desc: "Animal Biology & Ecological Sciences" },
    ],
  },
  {
    degree: "B.COM",
    fullTitle: "Bachelor of Commerce",
    icon: "📈",
    gradient: "from-indigo-600 to-violet-600",
    badgeBg: "bg-indigo-50 text-indigo-700 border border-indigo-100",
    branches: [
      { id: "1", name: "HONOURS GENERAL", desc: "Accounting, Finance & Commerce Management" },
      { id: "2", name: "HONOURS COMPUTERS", desc: "E-Commerce & Computer Business Applications" },
    ],
  },
  {
    degree: "B.A",
    fullTitle: "Bachelor of Arts",
    icon: "📚",
    gradient: "from-violet-600 to-purple-600",
    badgeBg: "bg-violet-50 text-violet-700 border border-violet-100",
    branches: [
      { id: "1", name: "HONOURS SPECIAL TELUGU", desc: "Advanced Telugu Literature & Cultural Arts" },
    ],
  },
];

const juniorCollegeData = {
  institution: "SITARAMA (CO-OP) JUNIOR COLLEGE ,KATHIPUDI",
  years: [
    {
      year: "I YEAR",
      title: "1st Year Intermediate",
      icon: "🌱",
      badge: "Junior Inter",
      badgeBg: "bg-blue-50 text-blue-700 border border-blue-100",
      gradient: "from-blue-600 to-indigo-600",
      groups: [
        {
          id: "I-MPC",
          code: "M.P.C",
          fullName: "Mathematics, Physics & Chemistry",
          sections: ["SECTION - A", "SECTION - B"],
        },
        {
          id: "I-BPC",
          code: "B.P.C",
          fullName: "Biology, Physics & Chemistry",
          sections: ["SECTION - A", "SECTION - B"],
        },
        {
          id: "I-CEC",
          code: "C.E.C",
          fullName: "Civics, Economics & Commerce",
          sections: ["SECTION - A", "SECTION - B"],
        },
        {
          id: "I-HEC",
          code: "H.E.C",
          fullName: "History, Economics & Civics",
          sections: ["GENERAL SECTION"],
        },
      ],
    },
    {
      year: "II YEAR",
      title: "2nd Year Intermediate",
      icon: "🎓",
      badge: "Senior Inter",
      badgeBg: "bg-indigo-50 text-indigo-700 border border-indigo-100",
      gradient: "from-indigo-600 to-violet-600",
      groups: [
        {
          id: "II-MPC",
          code: "M.P.C",
          fullName: "Mathematics, Physics & Chemistry",
          sections: ["SECTION - A", "SECTION - B"],
        },
        {
          id: "II-BPC",
          code: "B.P.C",
          fullName: "Biology, Physics & Chemistry",
          sections: ["SECTION - A", "SECTION - B"],
        },
        {
          id: "II-CEC",
          code: "C.E.C",
          fullName: "Civics, Economics & Commerce",
          sections: ["SECTION - A", "SECTION - B"],
        },
        {
          id: "II-HEC",
          code: "H.E.C",
          fullName: "History, Economics & Civics",
          sections: ["GENERAL SECTION"],
        },
      ],
    },
  ],
};

const footerCourses = [
  "B.Sc Honours Computers",
  "B.Sc Honours Chemistry",
  "B.Sc Honours Zoology",
  "B.Com Honours General",
  "B.Com Honours Computers",
  "B.A Honours Special Telugu",
  "Inter M.P.C (I & II Year)",
  "Inter B.P.C (I & II Year)",
  "Inter C.E.C (I & II Year)",
  "Inter H.E.C (I & II Year)",
];

const eventGallery = [
  {
    id: 1,
    title: "Patriotic Tiranga Youth Rally",
    category: "Parades & Rallies",
    catId: "rallies",
    date: "August 2025",
    img: eventFlagRally,
    desc: "Students and faculty uniting with pride in a grand patriotic rally carrying the national flag across Kathipudi.",
    badgeBg: "bg-amber-100 text-amber-900 border border-amber-300",
  },
  {
    id: 2,
    title: "Community Health & Pulse Polio Drive",
    category: "Social Service",
    catId: "service",
    date: "July 2025",
    img: eventHealthCamp,
    desc: "Student volunteers actively participating in government health drives and serving society with dedication.",
    badgeBg: "bg-emerald-100 text-emerald-900 border border-emerald-300",
  },
  {
    id: 3,
    title: "Youth Safety & Legal Awareness Seminar",
    category: "Seminars & Workshops",
    catId: "seminars",
    date: "October 2025",
    img: eventAwarenessSeminar,
    desc: "Interactive workshop with senior police officials on student safety, discipline, law, and career guidance.",
    badgeBg: "bg-sky-100 text-sky-900 border border-sky-300",
  },
  {
    id: 4,
    title: "Sankranti Sambaralu & Rangoli Gala",
    category: "Cultural & Festivals",
    catId: "cultural",
    date: "January 2026",
    img: eventSankrantiRangoli,
    desc: "Vibrant traditional celebrations featuring beautiful Rangoli arts, folk music, and festive cheer.",
    badgeBg: "bg-rose-100 text-rose-900 border border-rose-300",
  },
  {
    id: 5,
    title: "Grand Farewell & Cultural Gala",
    category: "Co-Curricular & Fun",
    catId: "cocurricular",
    date: "March 2026",
    img: eventFarewellDay,
    desc: "Memorable stage performances, guest speeches, and celebration of student achievements on Farewell Day.",
    badgeBg: "bg-purple-100 text-purple-900 border border-purple-300",
  },
  {
    id: 6,
    title: "Honorary Felicitation of Chief Guest",
    category: "Seminars & Workshops",
    catId: "seminars",
    date: "October 2025",
    img: eventPoliceFelicitation1,
    desc: "Management honoring senior police officials with traditional shawl felicitations during awareness seminar.",
    badgeBg: "bg-amber-100 text-amber-900 border border-amber-300",
  },
  {
    id: 7,
    title: "Student Respect & Guest Felicitation",
    category: "Co-Curricular & Fun",
    catId: "cocurricular",
    date: "October 2025",
    img: eventGuestFelicitation2,
    desc: "Students presenting ceremonial shawls to honored guests in appreciation of guidance and mentorship.",
    badgeBg: "bg-purple-100 text-purple-900 border border-purple-300",
  },
  {
    id: 8,
    title: "Distinguished Guest & Faculty Meet",
    category: "Seminars & Workshops",
    catId: "seminars",
    date: "November 2025",
    img: eventDignitariesGroup,
    desc: "College management, faculty, and visiting dignitaries gathered outside Sita Rama College premises.",
    badgeBg: "bg-sky-100 text-sky-900 border border-sky-300",
  },
  {
    id: 9,
    title: "Student Discipline & Guidance Session",
    category: "Seminars & Workshops",
    catId: "seminars",
    date: "October 2025",
    img: eventStudentAssembly,
    desc: "Interactive orientation and awareness session with full student participation in college auditorium.",
    badgeBg: "bg-blue-100 text-blue-900 border border-blue-300",
  },
  {
    id: 10,
    title: "Traditional Attire & Cultural Festival",
    category: "Cultural & Festivals",
    catId: "cultural",
    date: "January 2026",
    img: eventTraditionalFest,
    desc: "Students celebrating traditional heritage in vibrant ethnic attire during annual college festivity.",
    badgeBg: "bg-rose-100 text-rose-900 border border-rose-300",
  },
];

const contactInfo = [
  { icon: "📍", title: "Our Location", detail: "JVR Bhavan, Near SBI Bank, Jaggampeta, Kakinada Dist, Andhra Pradesh" },
  { icon: "📞", title: "Phone Number", detail: "+91 7674966739 / 9441791705" },
  { icon: "✉️", title: "Email Address", detail: "sriprajnaschooljpt@gmail.com" },
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

/* ─── JUNIOR COLLEGE CARD WITH EXPANDABLE DROPDOWNS ─── */
function JuniorCollegeCard({ yearData }) {
  const [openGroupId, setOpenGroupId] = useState(null);

  const toggleGroup = (id) => {
    setOpenGroupId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="rounded-3xl p-7 bg-white border border-slate-100 shadow-lg shadow-indigo-50/50 hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${yearData.gradient} text-white flex items-center justify-center text-xl shadow-md`}>
              {yearData.icon}
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-800 tracking-tight">
                {yearData.year}
              </h3>
              <p className="text-xs text-slate-400 font-medium">{yearData.title}</p>
            </div>
          </div>
          <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${yearData.badgeBg}`}>
            {yearData.badge}
          </span>
        </div>

        <div className="w-full h-px bg-slate-100 mb-6" />

        {/* Groups Accordion List */}
        <div className="space-y-3">
          {yearData.groups.map((group) => {
            const isOpen = openGroupId === group.id;
            return (
              <div
                key={group.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-indigo-300 bg-white shadow-md ring-2 ring-indigo-100"
                    : "border-slate-100 bg-slate-50/70 hover:border-indigo-200 hover:bg-slate-50"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleGroup(group.id)}
                  className="w-full p-4 flex items-center justify-between text-left transition-colors group/btn cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="font-extrabold text-xs text-indigo-600 bg-indigo-100/90 px-2.5 py-1 rounded-xl group-hover/btn:bg-indigo-600 group-hover/btn:text-white transition-all flex-shrink-0">
                      {group.code}
                    </span>
                    <div className="truncate">
                      <h4 className="text-sm font-bold text-slate-800 group-hover/btn:text-indigo-600 transition-colors truncate">
                        {group.fullName}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {group.sections.length} {group.sections.length === 1 ? "Section" : "Subsections"} (Click to expand)
                      </p>
                    </div>
                  </div>
                  <div className={`w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 text-xs font-bold transition-transform duration-300 flex-shrink-0 ml-2 ${isOpen ? "rotate-180 bg-indigo-50 text-indigo-600 border-indigo-200" : ""}`}>
                    ▼
                  </div>
                </button>

                {/* Dropdown Section Content */}
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 border-t border-slate-100 bg-gradient-to-b from-indigo-50/30 to-white animate-fade-in">
                    <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-wider mb-2.5">
                      Subsections Available:
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {group.sections.map((sec, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-indigo-100 hover:border-indigo-300 hover:shadow-sm transition-all cursor-pointer group/sec"
                        >
                          <span className="w-2 h-2 rounded-full bg-indigo-500 group-hover/sec:scale-125 transition-transform" />
                          <span className="text-xs font-bold text-slate-700 group-hover/sec:text-indigo-600">
                            {sec}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
        <span>Junior College Stream</span>
        <span className="font-semibold text-indigo-600">Admissions Open →</span>
      </div>
    </div>
  );
}

/* ─── INTERACTIVE EVENT GALLERY & LIGHTBOX MODAL ─── */
function EventGallerySection() {
  const [activeCat, setActiveCat] = useState("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const categories = [
    { id: "all", label: "✨ All Events" },
    { id: "cultural", label: "🎭 Cultural & Festivals" },
    { id: "rallies", label: "🚩 Parades & Rallies" },
    { id: "service", label: "🩺 Social Service" },
    { id: "seminars", label: "📚 Seminars & Workshops" },
    { id: "cocurricular", label: "🎉 Co-Curricular & Fun" },
  ];

  const filteredEvents = activeCat === "all"
    ? eventGallery
    : eventGallery.filter((e) => e.catId === activeCat);

  // Keyboard controls for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") setSelectedImageIndex(null);
      if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) => (prev + 1) % filteredEvents.length);
      }
      if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) => (prev - 1 + filteredEvents.length) % filteredEvents.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, filteredEvents.length]);

  return (
    <Section id="events" className="py-20 sm:py-28 px-5 sm:px-8 bg-slate-900 text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            Life at Sitarama
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Events &amp; Co-Curricular Gallery
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Glimpses of vibrant celebrations, patriotic rallies, social initiatives, and co-curricular achievements.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-300 cursor-pointer ${
                  activeCat === cat.id
                    ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/30 scale-105"
                    : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-slate-700/60"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(idx)}
              className="group relative rounded-3xl overflow-hidden bg-slate-800/90 border border-slate-700/60 shadow-xl cursor-pointer hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-950">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-md shadow-md ${item.badgeBg}`}>
                    {item.category}
                  </span>
                </div>

                {/* View Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-indigo-950/30 backdrop-blur-xs">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-slate-900 flex items-center justify-center text-lg shadow-xl font-bold group-hover:scale-110 transition-transform">
                    🔍
                  </div>
                </div>
              </div>

              {/* Card Footer Content */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-slate-800/90">
                <div>
                  <div className="flex items-center justify-between text-xs text-indigo-400 font-semibold mb-1">
                    <span>{item.date}</span>
                    <span>Click to expand ⤢</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-400 text-xs leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── FULL-SCREEN LIGHTBOX MODAL ─── */}
      {selectedImageIndex !== null && filteredEvents[selectedImageIndex] && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fade-in">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl transition-all cursor-pointer border border-white/20"
            aria-label="Close image modal"
          >
            ✕
          </button>

          {/* Navigation Controls */}
          <button
            onClick={() => setSelectedImageIndex((prev) => (prev - 1 + filteredEvents.length) % filteredEvents.length)}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-2xl transition-all cursor-pointer border border-white/20"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            onClick={() => setSelectedImageIndex((prev) => (prev + 1) % filteredEvents.length)}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-2xl transition-all cursor-pointer border border-white/20"
            aria-label="Next image"
          >
            ›
          </button>

          {/* Modal Container */}
          <div className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <div className="relative max-h-[70vh] w-full flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-black">
              <img
                src={filteredEvents[selectedImageIndex].img}
                alt={filteredEvents[selectedImageIndex].title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Modal Info Footer */}
            <div className="mt-4 text-center max-w-2xl px-4">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${filteredEvents[selectedImageIndex].badgeBg}`}>
                  {filteredEvents[selectedImageIndex].category}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {selectedImageIndex + 1} of {filteredEvents.length}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {filteredEvents[selectedImageIndex].title}
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {filteredEvents[selectedImageIndex].desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}

/* ─── HERO CAROUSEL ─── */
function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Decorative glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-300 to-violet-300 rounded-3xl rotate-2 scale-105 opacity-40 blur-xs" />

      {/* Carousel container with fixed aspect ratio / height */}
      <div className="relative rounded-3xl shadow-2xl shadow-indigo-100 overflow-hidden ring-1 ring-white/60 w-full h-[300px] sm:h-[380px] lg:h-[440px] bg-slate-900">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Sitarama Degree College Event ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
            }`}
          />
        ))}

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 px-3 py-1.5 rounded-full bg-slate-900/40 backdrop-blur-md">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-900/40 text-white text-lg flex items-center justify-center backdrop-blur-md opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % heroImages.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-900/40 text-white text-lg flex items-center justify-center backdrop-blur-md opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </div>
  );
}

/* ─── MAIN APP ─── */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCourseTab, setActiveCourseTab] = useState("all");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="font-sans text-slate-600 overflow-x-hidden bg-white">

      {/* ════════════════════ HEADER ════════════════════ */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass shadow-sm" : "bg-white/60 backdrop-blur-md"
          }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <img src="/logo.png" alt="SITARAMA DEGREE COLLEGE Logo" className="w-10 h-10 rounded-xl object-contain" />
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-slate-800 leading-tight">
                SITARAMA DEGREE COLLEGE
              </span>
              <span className="text-[10px] font-medium text-indigo-500 tracking-wide uppercase hidden sm:block">KATHIPUDI</span>
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
              <img src="/logo.png" alt="SITARAMA DEGREE COLLEGE Logo" className="w-20 h-20 sm:w-24 sm:h-24 object-contain flex-shrink-0 drop-shadow-md" />
              <h1>
                <span className="block text-3xl sm:text-4xl lg:text-5xl font-extrabold gradient-text leading-tight tracking-tight">
                  SITARAMA DEGREE COLLEGE KATHIPUDI
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 leading-tight tracking-tight">

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
                { val: "800+", label: "Students" },
                { val: "20+", label: "Teachers" },
                { val: "99%", label: "Success" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-800">{s.val}</p>
                  <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image Carousel */}
          <div className="animate-fade-in-up delay-300 w-full">
            <HeroCarousel />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-indigo-300/50 flex justify-center pt-2">
            <div className="w-1 h-2.5 bg-indigo-400/60 rounded-full" />
          </div>
        </div>
      </section>



      {/* ════════════════════ ABOUT + PRINCIPAL ════════════════════ */}
      

      {/* ════════════════════ EVENTS GALLERY ════════════════════ */}
      <EventGallerySection />

      {/* ════════════════════ COURSES OFFERED ════════════════════ */}
      <Section id="courses" className="py-20 sm:py-28 px-5 sm:px-8 bg-gradient-to-b from-white via-indigo-50/20 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge>Academic Institutions</Badge>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight">
              COURSES & GROUPS OFFERED
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
              Comprehensive academic offerings across Degree College &amp; Junior College streams.
            </p>

            {/* Institution Filter Tabs */}
            <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 bg-slate-100/80 rounded-2xl max-w-md mx-auto border border-slate-200/60 shadow-inner">
              {[
                { id: "all", label: "🌟 All Programs" },
                { id: "degree", label: "🎓 Degree College" },
                { id: "junior", label: "🏫 Junior College" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCourseTab(tab.id)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer ${
                    activeCourseTab === tab.id
                      ? "bg-white text-indigo-600 shadow-md shadow-indigo-100"
                      : "text-slate-500 hover:text-slate-800 hover:bg-white/50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 🎓 SECTION 1: SITARAMA DEGREE COLLEGE */}
          {(activeCourseTab === "all" || activeCourseTab === "degree") && (
            <div className="mb-16">
              <div className="flex items-center gap-3.5 mb-8 p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100/80">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white flex items-center justify-center text-xl shadow-md">
                  🎓
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 tracking-tight">
                    SITARAMA DEGREE COLLEGE ,KATHIPUDI
                  </h3>
                  <p className="text-xs text-indigo-600 font-semibold">Undergraduate Degree Programs (B.Sc, B.Com, B.A)</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {degreeCourses.map((cat, i) => (
                  <div
                    key={i}
                    className="group relative rounded-3xl p-7 bg-white border border-slate-100 shadow-lg shadow-indigo-50/50 hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
                  >
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />

                    <div>
                      {/* Card Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.gradient} text-white flex items-center justify-center text-xl shadow-md`}>
                            {cat.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-black text-slate-800 tracking-tight">
                              {cat.degree}
                            </h3>
                            <p className="text-xs text-slate-400 font-medium">{cat.fullTitle}</p>
                          </div>
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${cat.badgeBg}`}>
                          Degree
                        </span>
                      </div>

                      <div className="w-full h-px bg-slate-100 mb-6" />

                      {/* Branches List */}
                      <div className="space-y-3">
                        {cat.branches.map((b) => (
                          <div
                            key={b.id}
                            className="group/item p-4 rounded-2xl bg-slate-50/70 border border-slate-100 hover:bg-gradient-to-r hover:from-indigo-50/80 hover:to-violet-50/80 hover:border-indigo-200 hover:shadow-md transition-all duration-200 cursor-pointer"
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-7 h-7 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center shadow-xs group-hover/item:bg-gradient-to-r ${cat.gradient} group-hover/item:text-white group-hover/item:border-transparent transition-all duration-200`}>
                                {b.id}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-bold text-slate-800 group-hover/item:text-indigo-600 transition-colors">
                                  {b.name}
                                </h4>
                                <p className="text-[11px] text-slate-400 mt-0.5 truncate">{b.desc}</p>
                              </div>
                              <span className="text-slate-300 group-hover/item:text-indigo-500 group-hover/item:translate-x-1 transition-all font-semibold text-sm">
                                →
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                      <span>3-Year Degree Program</span>
                      <span className="font-semibold text-indigo-600 group-hover:underline">Admissions Open →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 🏫 SECTION 2: SITARAMA (CO-OP) JUNIOR COLLEGE */}
          {(activeCourseTab === "all" || activeCourseTab === "junior") && (
            <div>
              <div className="flex items-center gap-3.5 mb-8 p-4 rounded-2xl bg-violet-50/60 border border-violet-100/80">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 text-white flex items-center justify-center text-xl shadow-md">
                  🏫
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 tracking-tight">
                    SITARAMA (CO-OP) JUNIOR COLLEGE ,KATHIPUDI
                  </h3>
                  <p className="text-xs text-violet-600 font-semibold">Intermediate Groups &amp; Subsections (1st &amp; 2nd Year M.P.C, B.P.C, C.E.C, H.E.C)</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {juniorCollegeData.years.map((y, idx) => (
                  <JuniorCollegeCard key={idx} yearData={y} />
                ))}
              </div>
            </div>
          )}
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
              <img src="/logo.png" alt="SITARAMA DEGREE COLLEGE Logo" className="w-9 h-9 rounded-xl object-contain" />
              <span className="font-bold text-base tracking-tight text-slate-800">SITARAMA DEGREE COLLEGE ,KATHIPUDI</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering minds, building futures. Join thousands of students on their journey to excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest text-slate-500 mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {["About Us", "Courses", "Events", "Apply", "Contact"].map((l) => (
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
              {footerCourses.map((c) => (
                <li key={c}>
                  <a href="#courses" className="text-sm text-slate-400 hover:text-indigo-500 transition-colors">
                    {c}
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
          <span>© 2026 SITARAMA DEGREE COLLEGE ,KATHIPUDI. All rights reserved.</span>
          <span>Designed with care for education</span>
        </div>
      </footer>

    </div>
  );
}