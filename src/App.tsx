import { useState, useEffect } from "react";

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    // Replace this URL with your SheetDB endpoint
    fetch("https://sheetdb.io/api/v1/is31x8480hnqe")
      .then((res) => res.json())
      .then((data) => setShows(data));
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur border-b border-red-600">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a
            href="#"
            className="text-yellow-100 tracking-wide text-xl sm:text-2xl font-bold"
          >
            Shadows Become Substance
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#music" className="hover:text-red-400">
              Music
            </a>
            <a href="#shows" className="hover:text-red-400">
              Shows
            </a>
            <a href="#about" className="hover:text-red-400">
              About
            </a>
            <a href="#contact" className="hover:text-red-400">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 z-0"></div>

        {/* Scattered images */}
        <img
          src="/img1.png"
          alt="Band Art"
          className="absolute top-5 left-10 w-32 opacity-70 rotate-[-6deg] animate-[float_6s_ease-in-out_infinite]"
        />
        <img
          src="/img2.png"
          alt="Band Art"
          className="absolute top-20 right-16 w-40 opacity-70 rotate-[8deg] animate-[float_7s_ease-in-out_infinite]"
        />
        <img
          src="/img3.png"
          alt="Band Art"
          className="absolute bottom-20 left-24 w-36 opacity-70 rotate-[4deg] animate-[float_8s_ease-in-out_infinite]"
        />
        <img
          src="/img4.png"
          alt="Band Art"
          className="absolute bottom-10 right-20 w-28 opacity-70 rotate-[-10deg] animate-[float_9s_ease-in-out_infinite]"
        />

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            When <span className="text-yellow-100">Shadows</span> Become{" "}
            <span className="text-yellow-100">Substance</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Alternative duo from NJ. Heavy energy. Atmospheric weight.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="https://open.spotify.com/artist/7D2Dx35nAzENA8TqOTeVUm"
              target="_blank"
              className="inline-block bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              Listen on Spotify
            </a>
            <a
              href="https://www.instagram.com/shadowsbecomesubstance/"
              target="_blank"
              className="inline-block border border-red-600/70 hover:border-red-600 px-6 py-3 rounded-lg font-semibold transition"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Music */}
      <section id="music" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-yellow-100">Music</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="https://open.spotify.com/track/2mJ80O1WvfindVlo0IT4cM"
            target="_blank"
            className="group rounded-lg border border-gray-800 p-5 hover:border-red-600 transition"
          >
            <div className="text-sm text-gray-400">Single • 2025</div>
            <div className="mt-1 text-xl font-semibold group-hover:text-red-400">
              SUBSTANCE
            </div>
            <div className="mt-3 text-gray-400">Stream on Spotify →</div>
          </a>
          <a
            href="https://open.spotify.com/track/4lquTy8XhVLRvs4miAyyeH"
            target="_blank"
            className="group rounded-lg border border-gray-800 p-5 hover:border-red-600 transition"
          >
            <div className="text-sm text-gray-400">Single • 2025</div>
            <div className="mt-1 text-xl font-semibold group-hover:text-red-400">
              NEXT SEPTEMBER
            </div>
            <div className="mt-3 text-gray-400">Stream on Spotify →</div>
          </a>
          <a
            href="https://music.apple.com/us/song/active/1777561606"
            target="_blank"
            className="group rounded-lg border border-gray-800 p-5 hover:border-red-600 transition"
          >
            <div className="text-sm text-gray-400">Single • 2024</div>
            <div className="mt-1 text-xl font-semibold group-hover:text-red-400">
              ACTIVE
            </div>
            <div className="mt-3 text-gray-400">Stream on Apple Music →</div>
          </a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <iframe
            className="w-full h-[380px] rounded-lg border border-gray-800"
            src="https://open.spotify.com/embed/artist/7D2Dx35nAzENA8TqOTeVUm"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <iframe
            className="w-full h-[380px] rounded-lg border border-gray-800"
            src="https://www.youtube.com/embed/zVr8Nr0oh3E"
            title="ACTIVE (Official Music Video)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      {/* Shows (dynamic from Google Sheet) */}
      <section id="shows" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-yellow-100">Shows</h2>
        <ul className="grid md:grid-cols-2 gap-6">
          {shows.map((show, idx) => (
            <li
              key={idx}
              className="rounded-lg border border-gray-800 p-5 hover:border-red-600 transition"
            >
              <div className="text-sm text-gray-400">
                {show.Date} • {show.City}
              </div>
              <div className="text-xl font-semibold mt-1">{show.Venue}</div>
              <div className="mt-2 flex gap-4">
                <a
                  href={show.TicketLink}
                  target="_blank"
                  className="text-red-400 hover:underline"
                >
                  🎟 Tickets
                </a>
                {show.GalleryLink && (
                  <a
                    href={show.GalleryLink}
                    target="_blank"
                    className="text-yellow-400 hover:underline"
                  >
                    📸 Gallery
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-yellow-100">About</h2>
        <p className="text-gray-300 leading-relaxed">
          Shadows Become Substance is an independent alternative duo from New
          Jersey, channeling heavy riffs and cinematic atmosphere. We push from
          raw emotion into catharsis on stage and in the studio.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-950 border-t border-red-500">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-3xl font-bold mb-4 text-yellow-100">Contact</h2>
          <p className="text-gray-300">
            Email:{" "}
            <a
              className="text-red-400 hover:underline"
              href="mailto:booking.sbs@gmail.com"
            >
              booking.sbs@gmail.com
            </a>
          </p>
          <div className="mt-4 flex items-center gap-4">
            <a
              className="text-red-400 hover:underline"
              target="_blank"
              href="https://www.instagram.com/shadowsbecomesubstance/"
            >
              Instagram
            </a>
            <a
              className="text-red-400 hover:underline"
              target="_blank"
              href="https://open.spotify.com/artist/7D2Dx35nAzENA8TqOTeVUm"
            >
              Spotify
            </a>
            <a
              className="text-red-400 hover:underline"
              target="_blank"
              href="https://www.youtube.com/channel/UCEwqJHtv8JP-jFttrSTDK3A"
            >
              YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-center py-6 text-gray-500 text-sm border-t border-gray-900">
        © {new Date().getFullYear()} Shadows Become Substance
      </footer>
    </div>
  );
}

export default App;

