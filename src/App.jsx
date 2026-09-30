import { useState, useEffect, useRef } from "react";
import principalImg from "./Images/sitarama/principal_desk.png";
import hero1 from "./Images/sitarama/hero1.jpg";
import hero2 from "./Images/sitarama/hero2.jpg";
import hero3 from "./Images/sitarama/hero3.jpg";
import hero4 from "./Images/sitarama/hero4.jpg";
import hero5 from "./Images/sitarama/hero5.jpg";
import achievementImg3062 from "./Images/achievements/IMG_3062.JPG";

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
import lab1 from "./Images/events/lab1.jpg";
import lab2 from "./Images/events/lab2.jpg";
import lab3 from "./Images/events/lab3.jpg";

const heroImages = [achievementImg3062, hero1, hero2, hero3, hero4, hero5]; 

/* ─── DATA ─── */
const navLinks = ["Home", "About Us", "Labs", "Courses", "Events", "Contact"];

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
    badgeBg: "bg-blue-50 text-[#0b2545] border border-blue-100",
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
    badgeBg: "bg-sky-50 text-[#0b2545] border border-sky-100",
    branches: [
      { id: "1", name: "HONOURS GENERAL", desc: "Accounting, Finance & Commerce Management" },
      { id: "2", name: "HONOURS COMPUTERS", desc: "E-Commerce & Computer Business Applications" },
    ],
  },
  {
    degree: "B.A",
    fullTitle: "Bachelor of Arts",
    icon: "📚",
    badgeBg: "bg-slate-50 text-[#0b2545] border border-slate-200",
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
      badgeBg: "bg-slate-100 text-[#0b2545] border border-slate-200",
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
      badgeBg: "bg-[#0b2545] text-white border border-[#0b2545]",
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
    badgeBg: "bg-[#eeb902] text-[#0b2545]",
  },
  {
    id: 2,
    title: "Community Health & Pulse Polio Drive",
    category: "Social Service",
    catId: "service",
    date: "July 2025",
    img: eventHealthCamp,
    desc: "Student volunteers actively participating in government health drives and serving society with dedication.",
    badgeBg: "bg-white text-[#0b2545]",
  },
  {
    id: 3,
    title: "Youth Safety & Legal Awareness Seminar",
    category: "Seminars & Workshops",
    catId: "seminars",
    date: "October 2025",
    img: eventAwarenessSeminar,
    desc: "Interactive workshop with senior police officials on student safety, discipline, law, and career guidance.",
    badgeBg: "bg-[#eeb902] text-[#0b2545]",
  },
  {
    id: 4,
    title: "Sankranti Sambaralu & Rangoli Gala",
    category: "Cultural & Festivals",
    catId: "cultural",
    date: "January 2026",
    img: eventSankrantiRangoli,
    desc: "Vibrant traditional celebrations featuring beautiful Rangoli arts, folk music, and festive cheer.",
    badgeBg: "bg-white text-[#0b2545]",
  },
  {
    id: 5,
    title: "Grand Farewell & Cultural Gala",
    category: "Co-Curricular & Fun",
    catId: "cocurricular",
    date: "March 2026",
    img: eventFarewellDay,
    desc: "Memorable stage performances, guest speeches, and celebration of student achievements on Farewell Day.",
    badgeBg: "bg-[#eeb902] text-[#0b2545]",
  },
  {
    id: 6,
    title: "Honorary Felicitation of Chief Guest",
    category: "Seminars & Workshops",
    catId: "seminars",
    date: "October 2025",
    img: eventPoliceFelicitation1,
    desc: "Management honoring senior police officials with traditional shawl felicitations during awareness seminar.",
    badgeBg: "bg-white text-[#0b2545]",
  },
  {
    id: 7,
    title: "Student Respect & Guest Felicitation",
    category: "Co-Curricular & Fun",
    catId: "cocurricular",
    date: "October 2025",
    img: eventGuestFelicitation2,
    desc: "Students presenting ceremonial shawls to honored guests in appreciation of guidance and mentorship.",
    badgeBg: "bg-[#eeb902] text-[#0b2545]",
  },
  {
    id: 8,
    title: "Distinguished Guest & Faculty Meet",
    category: "Seminars & Workshops",
    catId: "seminars",
    date: "November 2025",
    img: eventDignitariesGroup,
    desc: "College management, faculty, and visiting dignitaries gathered outside Sita Rama College premises.",
    badgeBg: "bg-white text-[#0b2545]",
  },
  {
    id: 9,
    title: "Student Discipline & Guidance Session",
    category: "Seminars & Workshops",
    catId: "seminars",
    date: "October 2025",
    img: eventStudentAssembly,
    desc: "Interactive orientation and awareness session with full student participation in college auditorium.",
    badgeBg: "bg-[#eeb902] text-[#0b2545]",
  },
  {
    id: 10,
    title: "Traditional Attire & Cultural Festival",
    category: "Cultural & Festivals",
    catId: "cultural",
    date: "January 2026",
    img: eventTraditionalFest,
    desc: "Students celebrating traditional heritage in vibrant ethnic attire during annual college festivity.",
    badgeBg: "bg-white text-[#0b2545]",
  },
];

const contactInfo = [
  { icon: "📍", title: "Our Location", detail: "SITARAMA COLLEGE, Kathipudi, Sankhavaram Mandal, Kakinada District, Andhra Pradesh 533444" },
  { icon: "📞", title: "Phone Number", detail: "+91 9030768981\u00a0\u00a0\u00a0|\u00a0\u00a0\u00a0+91 9949847313" },


  { icon: "✉️", title: "Email Address", detail: "sitarama07139@gmail.com" },
];

/* ─── HOOKS ─── */
function useInView(threshold = 0.1) {
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
function Section({ children, className = "", id, animation = "animate-fade-in-up" }) {
  const [ref, isVisible] = useInView();
  return (
    <section
      id={id}
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${
        isVisible ? `${animation} opacity-100` : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </section>
  );
}

/* ─── BADGE ─── */
function Badge({ children }) {
  return (
    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#eeb902]/10 text-[#eeb902] border border-[#eeb902]/25 shadow-xs font-sans">
      {children}
    </span>
  );
}

/* ─── JUNIOR COLLEGE CARD WITH ACCORDIONS ─── */
function JuniorCollegeCard({ yearData }) {
  const [openGroupId, setOpenGroupId] = useState(null);

  const toggleGroup = (id) => {
    setOpenGroupId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="academic-card flex flex-col justify-between">
      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            {/* Replicating screenshot navy icon box */}
            <div className="navy-icon-box mb-0 text-[#eeb902]">
              {yearData.icon}
            </div>
            <div>
              <h3 className="text-2xl font-black text-[#0b2545] tracking-tight font-serif">
                {yearData.year}
              </h3>
              <p className="text-xs text-slate-400 font-medium font-sans">{yearData.title}</p>
            </div>
          </div>
          <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full ${yearData.badgeBg} font-sans`}>
            {yearData.badge}
          </span>
        </div>

        <div className="w-full h-px bg-slate-100 mb-8" />

        {/* Groups Accordion List */}
        <div className="space-y-4 font-sans">
          {yearData.groups.map((group) => {
            const isOpen = openGroupId === group.id;
            return (
              <div
                key={group.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#eeb902] bg-[#eeb902]/5 shadow-sm"
                    : "border-slate-100 bg-[#f4f6f9]/40 hover:border-[#0b2545]/20 hover:bg-[#f4f6f9]/80"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleGroup(group.id)}
                  className="w-full p-4.5 flex items-center justify-between text-left transition-colors group/btn cursor-pointer"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="font-extrabold text-xs text-[#0b2545] bg-[#0b2545]/5 px-3 py-1.5 rounded-xl group-hover/btn:bg-[#0b2545] group-hover/btn:text-white transition-all flex-shrink-0">
                      {group.code}
                    </span>
                    <div className="truncate">
                      <h4 className="text-sm font-bold text-[#0b2545] group-hover/btn:text-[#eeb902] transition-colors truncate">
                        {group.fullName}
                      </h4>
                      <p className="text-[10px] text-slate-400 mt-1">
                        {group.sections.length} {group.sections.length === 1 ? "Section" : "Subsections"} (Click to expand)
                      </p>
                    </div>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#0b2545] text-xs font-bold transition-all duration-300 flex-shrink-0 ml-2 shadow-xs ${isOpen ? "rotate-180 bg-[#eeb902] text-[#0b2545] border-[#eeb902]" : "group-hover/btn:border-[#0b2545]/30"}`}>
                    ▼
                  </div>
                </button>

                {/* Dropdown Section Content */}
                {isOpen && (
                  <div className="px-4.5 pb-4.5 pt-1 border-t border-slate-100 bg-white animate-slide-down">
                    <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-3">
                      Subsections Available:
                    </p>
                    <div className="grid grid-cols-2 gap-2.5">
                      {group.sections.map((sec, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 p-3 rounded-xl bg-[#f4f6f9]/50 border border-slate-100 hover:border-[#eeb902] hover:bg-white hover:shadow-xs transition-all cursor-pointer group/sec"
                        >
                          <span className="w-2.5 h-2.5 rounded-full bg-[#0b2545] group-hover/sec:scale-125 transition-transform" />
                          <span className="text-xs font-bold text-slate-700 group-hover/sec:text-[#0b2545] transition-colors">
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

      <div className="mt-8 pt-5 border-t border-slate-100 font-sans">
        <span className="text-xs text-slate-400">Junior College Stream</span>
      </div>
    </div>
  );
}

/* ─── INTERACTIVE EVENT GALLERY & LIGHTBOX MODAL ─── */
function EventGallerySection() {
  const [activeCat, setActiveCat] = useState("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

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

  // Responsive items-per-page calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset index when filter category changes
  useEffect(() => {
    setStartIndex(0);
  }, [activeCat]);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, filteredEvents.length - itemsPerPage));
  };

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
    <Section id="events" className="py-24 sm:py-32 px-5 sm:px-8 bg-[#0b2545] text-white relative overflow-hidden">
      {/* Decorative backdrop graphics */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#134074]/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#081b33]/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1190px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge>Life at Sitarama</Badge>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight font-serif">
            Events &amp; Co-Curricular Gallery
          </h2>
          <p className="mt-4 text-slate-350 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-sans">
            Glimpses of vibrant celebrations, patriotic rallies, social initiatives, and co-curricular achievements.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 max-w-3xl mx-auto font-sans">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`px-5 py-2.5 text-xs font-extrabold rounded-full transition-all duration-300 cursor-pointer ${
                  activeCat === cat.id
                    ? "bg-[#eeb902] text-[#0b2545] shadow-lg shadow-[#eeb902]/20 scale-105"
                    : "bg-[#134074]/40 text-slate-200 hover:bg-[#134074]/80 border border-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Carousel Container */}
        <div className="relative px-2 sm:px-4">
          {/* Left Arrow Button */}
          {filteredEvents.length > itemsPerPage && (
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="absolute left-[-16px] md:left-[-40px] lg:left-[-64px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-[#081b33]/90 text-white flex items-center justify-center hover:bg-[#eeb902] hover:text-[#0b2545] hover:border-[#eeb902] disabled:opacity-20 disabled:pointer-events-none transition-all cursor-pointer shadow-2xl"
              aria-label="Previous slide"
            >
              ‹
            </button>
          )}

          {/* Right Arrow Button */}
          {filteredEvents.length > itemsPerPage && (
            <button
              onClick={handleNext}
              disabled={startIndex >= filteredEvents.length - itemsPerPage}
              className="absolute right-[-16px] md:right-[-40px] lg:right-[-64px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-[#081b33]/90 text-white flex items-center justify-center hover:bg-[#eeb902] hover:text-[#0b2545] hover:border-[#eeb902] disabled:opacity-20 disabled:pointer-events-none transition-all cursor-pointer shadow-2xl"
              aria-label="Next slide"
            >
              ›
            </button>
          )}

          {/* Overflow wrapper */}
          <div className="overflow-hidden py-4 -my-4">
            <div
              className="flex gap-8 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(calc(-${startIndex} * (100% + 32px) / ${itemsPerPage}))`
              }}
            >
              {filteredEvents.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedImageIndex(idx)}
                  className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.33px)] shrink-0 group relative rounded-[2rem] overflow-hidden bg-[#081b33]/40 border border-white/5 shadow-xl cursor-pointer hover:border-[#eeb902]/40 transition-all duration-300 hover:-translate-y-2 flex flex-col hover-scale-img"
                >
                  {/* Image Container */}
                  <div className="relative h-64 w-full overflow-hidden bg-slate-950">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081b33] via-transparent to-transparent opacity-90" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 font-sans">
                      <span className={`text-[9px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg bg-[#eeb902] text-[#0b2545]`}>
                        {item.category}
                      </span>
                    </div>

                    {/* View Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0b2545]/30 backdrop-blur-xs">
                      <div className="w-12 h-12 rounded-full bg-[#eeb902] text-[#0b2545] flex items-center justify-center text-lg shadow-2xl font-bold group-hover:scale-110 transition-transform">
                        🔍
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between bg-[#081b33]/20 font-sans">
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#eeb902] font-bold mb-2">
                        <span>{item.date}</span>
                        <span>View ⤢</span>
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-[#eeb902] transition-colors leading-snug font-serif">
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
        </div>
      </div>

      {/* ─── FULL-SCREEN LIGHTBOX MODAL ─── */}
      {selectedImageIndex !== null && filteredEvents[selectedImageIndex] && (
        <div className="fixed inset-0 z-50 bg-[#081b33]/98 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fade-in">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/5 hover:bg-[#eeb902] hover:text-[#0b2545] text-white flex items-center justify-center text-xl transition-all cursor-pointer border border-white/10 shadow-lg"
            aria-label="Close image modal"
          >
            ✕
          </button>

          {/* Navigation Controls */}
          <button
            onClick={() => setSelectedImageIndex((prev) => (prev - 1 + filteredEvents.length) % filteredEvents.length)}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-white/5 hover:bg-[#eeb902] hover:text-[#0b2545] text-white flex items-center justify-center text-2xl transition-all cursor-pointer border border-white/10 shadow-lg"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            onClick={() => setSelectedImageIndex((prev) => (prev + 1) % filteredEvents.length)}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-white/5 hover:bg-[#eeb902] hover:text-[#0b2545] text-white flex items-center justify-center text-2xl transition-all cursor-pointer border border-white/10 shadow-lg"
            aria-label="Next image"
          >
            ›
          </button>

          {/* Modal Container */}
          <div className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <div className="relative max-h-[70vh] w-full flex items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl bg-black">
              <img
                src={filteredEvents[selectedImageIndex].img}
                alt={filteredEvents[selectedImageIndex].title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Modal Info Footer */}
            <div className="mt-6 text-center max-w-2xl px-4 animate-fade-in-up font-sans">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-[9px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#eeb902] text-[#0b2545] shadow-xs">
                  {filteredEvents[selectedImageIndex].category}
                </span>
                <span className="text-xs text-slate-400 font-semibold bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  {selectedImageIndex + 1} of {filteredEvents.length}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-serif">
                {filteredEvents[selectedImageIndex].title}
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
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
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Decorative glows */}
      <div className="absolute inset-0 bg-[#eeb902] rounded-[2.5rem] rotate-2 scale-[1.02] opacity-10 blur-xs" />
      <div className="absolute -inset-1 bg-[#eeb902]/20 rounded-[2.5rem] opacity-5 blur-xl" />

      {/* Carousel container */}
      <div className="relative rounded-[2.5rem] shadow-2xl overflow-hidden ring-1 ring-white/10 w-full h-[320px] sm:h-[400px] lg:h-[460px] bg-[#081b33]">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Sitarama Degree College Event ${index + 1}`}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === 0 ? "object-contain" : "object-cover"
            } ${
              index === currentIndex ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
            }`}
          />
        ))}

        {/* Ambient Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent z-10 pointer-events-none" />

        {/* Indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2 px-4 py-2 rounded-full bg-slate-950/40 backdrop-blur-md border border-white/5 font-sans">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                index === currentIndex ? "w-6 bg-[#eeb902]" : "w-1.5 bg-white/40 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-950/40 hover:bg-[#eeb902] hover:text-[#0b2545] text-white text-xl flex items-center justify-center backdrop-blur-md opacity-70 hover:opacity-100 transition-all border border-white/5 cursor-pointer shadow-lg"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % heroImages.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-950/40 hover:bg-[#eeb902] hover:text-[#0b2545] text-white text-xl flex items-center justify-center backdrop-blur-md opacity-70 hover:opacity-100 transition-all border border-white/5 cursor-pointer shadow-lg"
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
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  const scrollToTop = () => {
    setIsLaunching(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setIsLaunching(false);
    }, 1000);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="font-sans text-[#5c6b73] overflow-x-hidden bg-white">

      {/* ════════════════════ HEADER ════════════════════ */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-[#0b2545] shadow-lg py-3" 
            : "bg-[#0b2545] py-5"
        }`}
      >
        <div className="max-w-[1190px] mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo and Brand Name */}
          <a href="#home" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 bg-white rounded-xl shadow-md border border-slate-100 flex items-center justify-center p-0.5 overflow-hidden transition-transform duration-300 group-hover:scale-105 logo-flip-hover">
              <img src="/logo.png" alt="SITARAMA DEGREE COLLEGE Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-tight text-white leading-tight font-serif">
                Sitarama Institutions
              </span>
              <span className="text-[9px] font-extrabold text-[#eeb902] tracking-widest uppercase mt-0.5 font-sans">
                Est. 2006 — Excellence in Education

              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 font-sans">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-4.5 py-2 text-sm font-extrabold rounded-full text-white hover:text-[#eeb902] hover:bg-[#134074]/30 transition-all"
              >
                {link}
              </a>
            ))}
          </nav>



          {/* Hamburger */}
          <button
            id="hamburger-btn"
            className="lg:hidden w-11 h-11 rounded-full flex items-center justify-center transition-all bg-[#134074]/40 border border-white/10 hover:border-[#eeb902] hover:bg-[#134074]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="lg:hidden animate-slide-down bg-[#0b2545] border-t border-white/5 shadow-2xl font-sans">
            <div className="max-w-[1190px] mx-auto px-5 py-5 flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setMenuOpen(false)}
                  className="px-4.5 py-3 text-sm font-bold text-slate-200 hover:text-[#eeb902] hover:bg-[#134074]/30 rounded-xl transition-all"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

        )}
      </header>

      {/* ════════════════════ HERO ════════════════════ */}
      <section id="home" className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#0b2545] text-white">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#134074]/20 rounded-full blur-[140px] -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#eeb902]/5 rounded-full blur-[140px] translate-y-1/4 -translate-x-1/4" />

        <div className="relative z-10 max-w-[1190px] mx-auto px-5 sm:px-8 py-36 grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="text-left">
            <div className="animate-fade-in-up mb-5">
              <Badge>Sitarama Institutions</Badge>
            </div>

            <div className="flex items-center gap-5 sm:gap-6 animate-fade-in-up delay-100">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white p-1 rounded-2xl flex items-center justify-center shadow-lg shrink-0">
                <img src="/logo.png" alt="SITARAMA DEGREE COLLEGE Logo" className="w-full h-full object-contain" />
              </div>
              <h1>
                <span className="block text-4xl sm:text-5xl lg:text-5xl font-black text-white leading-tight tracking-tight font-serif">
                  Sitarama College
                </span>
                <span className="block text-xs sm:text-sm font-black text-[#eeb902] tracking-widest uppercase mt-2 font-sans">
                  Kathipudi, Andhra Pradesh
                </span>
              </h1>
            </div>

            <p className="mt-8 text-xl sm:text-2xl lg:text-3xl font-bold text-slate-100 leading-snug tracking-tight font-serif animate-fade-in-up delay-200">
              Education is the key that unlocks the{" "}
              <span className="text-[#eeb902]">golden door</span> to freedom.
            </p>

            <p className="mt-6 text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed font-sans animate-fade-in-up delay-200">
              Providing top-tier undergraduate and intermediate programs. We focus on concept-oriented learning, academic integrity, and character discipline to shape the leaders of tomorrow.
            </p>

            <div className="mt-9 flex flex-wrap gap-4.5 font-sans animate-fade-in-up delay-300">
              <a
                href="#about-us"
                className="px-8 py-3 text-sm font-extrabold rounded-full btn-gold"
              >
                Explore More
              </a>
              <a
                href="#courses"
                className="px-8 py-3 text-sm font-extrabold rounded-full border border-white/20 text-white hover:bg-white/5 transition-all"
              >
                View Courses
              </a>
            </div>

            {/* Quick Stats */}
            <div className="mt-16 pt-8 border-t border-white/10 flex gap-12 sm:gap-16 font-sans animate-fade-in-up delay-400">
              {[
                { val: "800+", label: "Students" },
                { val: "30+", label: "Teachers" },

                { val: "99%", label: "Success" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl sm:text-4xl font-black text-[#eeb902]">{s.val}</p>
                  <p className="text-[10px] text-slate-300 mt-1 uppercase tracking-widest font-black">{s.label}</p>
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
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about-us" className="w-7 h-11 rounded-full border-2 border-white/20 flex justify-center pt-2.5 cursor-pointer">
            <div className="w-1.5 h-3.5 bg-[#eeb902] rounded-full" />
          </a>
        </div>
      </section>

      {/* ════════════════════ ABOUT US SECTION ════════════════════ */}
      <Section id="about-us" className="py-24 sm:py-32 px-5 sm:px-8 bg-[#f4f6f9] text-[#0b2545] relative">
        <div className="max-w-[1190px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <Badge>About Our Institution</Badge>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b2545] tracking-tight leading-tight font-serif">
              Pioneering Academic Excellence
            </h2>
            <p className="mt-4 text-[#5c6b73] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-sans">
              Founded on the values of discipline, knowledge, and integrity, Sitarama Institution stands as a beacon of quality education.
            </p>
          </div>

          {/* About Split Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual Column */}
            <div className="relative">
              {/* Gold Glow Background */}
              <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#eeb902]/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
              
              {/* Main Image Frame with 3D Flip */}
              <div className="relative rounded-[2.5rem] border border-slate-100 bg-white p-4.5 shadow-xl shadow-[#0b2545]/5">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    {/* Front Side (Campus Image) */}
                    <div className="flip-card-front">
                      <img 
                        src={principalImg} 
                        alt="Sitarama Campus" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Back Side (Core Values / Book Page) */}
                    <div className="flip-card-back font-sans flex flex-col justify-center p-6 bg-[#0b2545] border border-[#eeb902]/20 text-white select-none">
                      <h4 className="font-serif text-[#eeb902] text-xl font-bold mb-4">Our Core Pillars</h4>
                      <div className="space-y-3 text-left w-full">
                        <div className="flex items-start gap-2.5">
                          <span className="text-[#eeb902] text-xs">✨</span>
                          <div>
                            <h5 className="font-bold text-xs text-white">Discipline</h5>
                            <p className="text-[10px] text-slate-300 mt-0.5">Cultivating focused study habits and moral character.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <span className="text-[#eeb902] text-xs">✨</span>
                          <div>
                            <h5 className="font-bold text-xs text-white">Knowledge</h5>
                            <p className="text-[10px] text-slate-300 mt-0.5">Enabling conceptual grounding across sciences &amp; arts.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <span className="text-[#eeb902] text-xs">✨</span>
                          <div>
                            <h5 className="font-bold text-xs text-white">Integrity</h5>
                            <p className="text-[10px] text-slate-300 mt-0.5">Nurturing honest, patriotic, and responsible leaders.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-[#0b2545] text-white rounded-2xl p-5 border border-white/5 shadow-2xl flex items-center gap-4 font-sans pointer-events-none">
                  <div className="w-10 h-10 rounded-xl bg-[#eeb902] text-[#0b2545] flex items-center justify-center text-xl font-bold">
                    🎓
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm tracking-tight">Established</h4>
                    <p className="text-[10px] text-[#eeb902] uppercase tracking-widest font-black">20+ Years Legacy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0b2545] tracking-tight leading-snug font-serif">
                Nurturing Potential, Shaping Bright Citizens
              </h3>
              <p className="mt-5 text-[#5c6b73] text-sm sm:text-base leading-relaxed font-sans">
                At Sitarama Degree &amp; Junior College, we believe that education is not merely about accumulating information, but rather about intellectual transformation and character development. Our curriculum is tailored to ensure students obtain a firm conceptual grounding across all disciplines.
              </p>
              <p className="mt-4 text-[#5c6b73] text-sm leading-relaxed font-sans">
                We foster a highly disciplined learning atmosphere where competitive skills are cultivated starting from early stages. We ensure that students receive the tools, facilities, and mentorship required to secure a bright academic career.
              </p>

              {/* Highlights grid */}
              <div className="mt-8 grid grid-cols-2 gap-4 font-sans">
                {[
                  { title: "Top Faculty", desc: "Highly experienced educators" },
                  { title: "Advanced Labs", desc: "Fully-equipped study labs" },
                ].map((hl, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <span className="text-[#eeb902] text-sm font-black">✓</span>
                    <div>
                      <h5 className="font-extrabold text-xs text-[#0b2545]">{hl.title}</h5>
                      <p className="text-[10px] text-[#5c6b73] mt-0.5">{hl.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ════════════════════ LABS FACILITY SECTION ════════════════════ */}
      <Section id="labs" className="py-24 sm:py-32 px-5 sm:px-8 bg-white text-[#0b2545]">
        <div className="max-w-[1190px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <Badge>State-of-the-Art Infrastructure</Badge>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b2545] tracking-tight leading-tight font-serif">
              Our Practical Labs &amp; Facilities
            </h2>
            <p className="mt-4 text-[#5c6b73] max-w-3xl mx-auto text-sm sm:text-base leading-relaxed font-sans">
              Our campus features fully-equipped, modern laboratories for Computer Science, Chemistry, and Zoology. These state-of-the-art practical spaces are designed to provide students with hands-on learning experiences, enabling them to verify scientific concepts and build solid analytical skills under expert faculty guidance.
            </p>
          </div>

          {/* Grid Layout of 3 Labs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Lab 1 */}
            <div className="academic-card flex flex-col justify-between group !p-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
                <img 
                  src={lab1} 
                  alt="Computer Lab" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            {/* Lab 2 */}
            <div className="academic-card flex flex-col justify-between group !p-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
                <img 
                  src={lab2} 
                  alt="Chemistry Lab" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            {/* Lab 3 */}
            <div className="academic-card flex flex-col justify-between group !p-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
                <img 
                  src={lab3} 
                  alt="Zoology Lab" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ════════════════════ EVENTS GALLERY ════════════════════ */}
      <EventGallerySection />

      {/* ════════════════════ COURSES OFFERED ════════════════════ */}
      <Section id="courses" className="py-24 sm:py-32 px-5 sm:px-8 bg-[#f4f6f9]">
        <div className="max-w-[1190px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge>Academic Programs</Badge>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b2545] tracking-tight leading-tight font-serif">
              Programs for Every Stage of Learning
            </h2>
            <p className="mt-4 text-[#5c6b73] max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-sans">
              A well-structured curriculum designed to nurture curiosity, discipline, and confidence at every level.
            </p>

            {/* Filter Tabs */}
            <div className="mt-10 flex flex-wrap justify-center gap-2.5 p-2 bg-white rounded-full max-w-md mx-auto border border-slate-200 shadow-md font-sans">
              {[
                { id: "all", label: "🌟 All Programs" },
                { id: "degree", label: "🎓 Degree" },
                { id: "junior", label: "🏫 Junior College" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCourseTab(tab.id)}
                  className={`px-5 py-2.5 text-xs font-extrabold rounded-full transition-all duration-300 cursor-pointer ${
                    activeCourseTab === tab.id
                      ? "bg-[#0b2545] text-white shadow-md"
                      : "text-slate-500 hover:text-[#0b2545] hover:bg-slate-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 🎓 SECTION 1: SITARAMA DEGREE COLLEGE */}
          {(activeCourseTab === "all" || activeCourseTab === "degree") && (
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-10 p-5 rounded-2xl bg-white border border-slate-100 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-[#0b2545] text-[#eeb902] flex items-center justify-center text-2xl shadow-md">
                  🎓
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0b2545] tracking-tight leading-none font-serif">
                    SITARAMA DEGREE COLLEGE
                  </h3>
                  <p className="text-xs text-[#eeb902] font-extrabold mt-1.5 font-sans">Undergraduate Degree Programs (B.Sc, B.Com, B.A)</p>
                </div>
              </div>

              {/* Redesigned to replicate screenshot card styling */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {degreeCourses.map((cat, i) => (
                  <div key={i} className="academic-card flex flex-col justify-between">
                    <div>
                      {/* Top-Left navy icon box with gold icon */}
                      <div className="navy-icon-box text-[#eeb902]">
                        {cat.icon}
                      </div>

                      <h3 className="text-2xl font-black text-[#0b2545] tracking-tight font-serif mb-2">
                        {cat.degree}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium font-sans mb-6">{cat.fullTitle}</p>

                      <div className="w-full h-px bg-slate-100 mb-6" />

                      {/* Branches List */}
                      <div className="space-y-4 font-sans">
                        {cat.branches.map((b) => (
                          <div
                            key={b.id}
                            className="group/item p-4.5 rounded-2xl bg-[#f4f6f9]/40 border border-slate-100 hover:bg-white hover:border-[#eeb902] hover:shadow-xs transition-all duration-300 cursor-pointer"
                          >
                            <div className="flex items-center gap-3.5">
                              <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-[#0b2545] font-extrabold text-xs flex items-center justify-center group-hover/item:bg-[#0b2545] group-hover/item:text-white group-hover/item:border-transparent transition-all duration-300">
                                {b.id}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-bold text-[#0b2545] group-hover/item:text-[#eeb902] transition-colors">
                                  {b.name}
                                </h4>
                                <p className="text-[10px] text-slate-500 mt-1 truncate">{b.desc}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="mt-8 pt-5 border-t border-slate-100 font-sans">
                      <span className="text-xs text-slate-450">3-Year Course</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 🏫 SECTION 2: SITARAMA (CO-OP) JUNIOR COLLEGE */}
          {(activeCourseTab === "all" || activeCourseTab === "junior") && (
            <div>
              <div className="flex items-center gap-4 mb-10 p-5 rounded-2xl bg-white border border-slate-100 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-[#0b2545] text-[#eeb902] flex items-center justify-center text-2xl shadow-md">
                  🏫
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0b2545] tracking-tight leading-none font-serif">
                    SITARAMA (CO-OP) JUNIOR COLLEGE
                  </h3>
                  <p className="text-xs text-[#eeb902] font-extrabold mt-1.5 font-sans">Intermediate Streams &amp; Subsections (1st &amp; 2nd Year)</p>
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
      {/* ════════════════════ FOOTER ════════════════════ */}
      <footer id="contact" className="bg-[#081b33] text-slate-450 border-t border-white/5 pt-20 pb-10 px-5 sm:px-8">
        <div className="max-w-[1190px] mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 font-sans">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-white p-0.5 rounded-lg flex items-center justify-center shadow-md">
                <img src="/logo.png" alt="SITARAMA DEGREE COLLEGE Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-black text-base tracking-tight text-white leading-tight font-serif">Sitarama Institutions</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Empowering minds, building futures. Join thousands of successful graduates who realized their dreams through our academic pathways.
            </p>
            <div className="mt-8 space-y-4 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <span className="text-[#eeb902] mt-0.5">📍</span>
                <span className="leading-relaxed">SITARAMA COLLEGE, Kathipudi, Sankhavaram Mandal, Kakinada District, Andhra Pradesh 533444</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#eeb902]">📞</span>
                <span>+91 9030768981&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;+91 9949847313</span>


              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#eeb902]">✉️</span>
                <a href="mailto:sitarama07139@gmail.com" className="hover:text-[#eeb902] transition-colors">sitarama07139@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-xs uppercase tracking-widest text-[#eeb902] mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Labs", "Courses", "Events", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(" ", "-")}`} className="text-xs font-bold text-slate-300 hover:text-[#eeb902] transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-black text-xs uppercase tracking-widest text-[#eeb902] mb-6">Our Courses</h4>
            <ul className="space-y-3">
              {footerCourses.slice(0, 5).map((c) => (
                <li key={c}>
                  <a href="#courses" className="text-xs font-bold text-slate-300 hover:text-[#eeb902] transition-colors">
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
        </div>


        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3.5 text-[10px] text-slate-400 font-sans">
          <span>© 2006 SITARAMA DEGREE COLLEGE ,KATHIPUDI. All rights reserved.</span>

          <span className="font-bold uppercase tracking-wider text-[#eeb902]">Designed with care for education</span>
        </div>
      </footer>

      {/* Lift to Home Floating Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#eeb902] text-[#0b2545] flex items-center justify-center text-xl shadow-2xl border border-white/10 hover:bg-[#0b2545] hover:text-white hover:border-[#eeb902] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer ${
            isLaunching ? "animate-rocket-launch" : ""
          }`}
          title="Lift to Home"
          aria-label="Lift to Home"
        >
          🚀
        </button>
      )}
    </div>
  );
}