import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ====== Types ====== */
interface Show {
  Date: string;
  Venue: string;
  City: string;
  TicketLink: string;
  GalleryLink?: string;
}

/* ====== Page Transitions ====== */
const pageVariant = {
  initial: { opacity: 0, x: -40, filter: "blur(8px)" },
  animate: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8 } },
  exit: { opacity: 0, x: 40, filter: "blur(8px)", transition: { duration: 0.5 } },
};

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="min-h-[80vh] px-6 py-12"
      variants={pageVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

/* ====== Layout ====== */
function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      <style>{`
        .glitch-text {
          position: relative;
          display: inline-block;
          animation: glitch 2s infinite;
        }
        @keyframes glitch {
          0% { text-shadow: 2px 0 red, -2px 0 blue; }
          20% { text-shadow: -2px 0 red, 2px 0 blue; }
          40% { text-shadow: 2px 0 blue, -2px 0 red; }
          60% { text-shadow: -2px 0 blue, 2px 0 red; }
          100% { text-shadow: 2px 0 red, -2px 0 blue; }
        }
        @keyframes slide {
          0% { transform: translateX(0%); }
          50% { transform: translateX(95vw); }
          100% { transform: translateX(0%); }
        }
        .animate-slide {
          animation: slide 6s infinite linear;
        }
      `}</style>

      {/* Radio Tuner Overlay */}
      <div className="relative z-20 bg-black border-b border-red-600 overflow-hidden">
        <div className="relative h-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_95%,rgba(255,255,255,0.15)_100%)] bg-[length:20px_100%] opacity-30 animate-pulse"></div>
          <div className="absolute h-full w-[2px] bg-red-600 animate-slide"></div>
          <span className="relative z-10 text-xs tracking-widest text-gray-400 font-mono">
            RADIO WORLD • FREQUENCY 89.9 FM
          </span>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-30 bg-gray-950/90 backdrop-blur border-b border-red-600">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-yellow-100 tracking-wide text-xl sm:text-2xl font-bold glitch-text">
            Shadows Become Substance
          </Link>
          <nav className="hidden sm:flex items-center gap-6 text-sm uppercase font-semibold">
            <Link to="/" className="hover:text-red-400">Home</Link>
            <Link to="/shows" className="hover:text-red-400">Shows</Link>
            <Link to="/gallery" className="hover:text-red-400">Gallery</Link>
            <Link to="/about" className="hover:text-red-400">About</Link>
            <Link to="/contact" className="hover:text-red-400">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <PageWrapper key={location.pathname}>{children}</PageWrapper>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-black text-center py-6 text-gray-500 text-sm border-t border-gray-900">
        © {new Date().getFullYear()} Shadows Become Substance
      </footer>
    </div>
  );
}

/* ====== Pages ====== */

// Home
function Home() {
  const [shows, setShows] = useState<Show[]>([]);

  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/is31x8480hnqe")
      .then((res) => res.json())
      .then((data: Show[]) => setShows(Array.isArray(data) ? data : []))
      .catch(() => setShows([]));
  }, []);

  const nextShow = shows.length > 0 ? shows[0] : null;

  return (
    <section
      className="relative bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.85)), url('/band-hero.jpg')",
      }}
    >
      <div className="relative z-10 text-center px-6 py-28">
        <div className="bg-black/70 px-6 py-10 rounded-lg inline-block">
          <h1 className="text-5xl sm:text-6xl font-extrabold glitch-text">
            Radio World
          </h1>
          <p className="mt-4 max-w-xl text-lg sm:text-xl text-gray-200 mx-auto">
            Tune into our transmission of heavy riffs and atmospheric static.  
            Listen as shadows become substance and the airwaves crackle with energy.
          </p>
        </div>

        {/* Spotify + YouTube */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-6xl w-full mx-auto">
          <iframe
            className="w-full h-[380px] rounded-lg border border-gray-700 shadow-lg"
            src="https://open.spotify.com/embed/artist/7D2Dx35nAzENA8TqOTeVUm"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <iframe
            className="w-full h-[380px] rounded-lg border border-gray-700 shadow-lg"
            src="https://www.youtube.com/embed/zVr8Nr0oh3E"
            title="ACTIVE (Official Music Video)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Next Show */}
        {nextShow && (
          <div className="mt-12 bg-black/70 px-6 py-8 rounded-lg inline-block shadow-md">
            <h2 className="text-2xl font-bold text-yellow-100">Next Show</h2>
            <p className="mt-2 text-gray-200">
              {nextShow.Date} • {nextShow.City} — {nextShow.Venue}
            </p>
            {nextShow.TicketLink && (
              <a
                href={nextShow.TicketLink}
                target="_blank"
                className="mt-3 inline-block text-red-500 hover:text-red-600 underline font-semibold"
              >
                🎟 Get Tickets
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

/* ====== Other Pages ====== */

function Shows() {
  return (
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 text-yellow-100 glitch-text">Shows</h2>
      <p className="text-gray-300">Full interactive shows list coming soon.</p>
    </div>
  );
}

function Gallery() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-yellow-100 glitch-text">Gallery</h2>
      <p className="text-gray-300">Photos from Radio World and live shows will go here.</p>
    </div>
  );
}

function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-yellow-100 glitch-text">About</h2>
      <p className="text-gray-300 leading-relaxed">
        Shadows Become Substance is an independent alternative duo from New Jersey.  
        On our album “Radio World” we channel heavy riffs and cinematic atmosphere.  
        The crackle of static and the roar of amplifiers merge as we push from raw emotion into catharsis both on stage and in the studio.
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-yellow-100 glitch-text">Contact</h2>
      <p className="text-gray-300">
        Email:{" "}
        <a href="mailto:booking.sbs@gmail.com" className="text-red-500 hover:text-red-600 underline">
          booking.sbs@gmail.com
        </a>
      </p>
      <div className="mt-4 flex flex-col sm:flex-row gap-4">
        <a
          href="https://www.instagram.com/shadowsbecomesubstance/"
          target="_blank"
          className="text-red-500 hover:text-red-600 underline"
        >
          Instagram
        </a>
        <a
          href="https://open.spotify.com/artist/7D2Dx35nAzENA8TqOTeVUm"
          target="_blank"
          className="text-red-500 hover:text-red-600 underline"
        >
          Spotify
        </a>
        <a
          href="https://www.youtube.com/channel/UCEwqJHtv8JP-jFttrSTDK3A"
          target="_blank"
          className="text-red-500 hover:text-red-600 underline"
        >
          YouTube
        </a>
      </div>
    </div>
  );
}

/* ====== Main App ====== */
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
