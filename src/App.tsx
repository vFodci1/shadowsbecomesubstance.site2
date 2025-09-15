function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur border-b border-red-600">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-yellow-100 tracking-wide text-xl sm:text-2xl font-bold">
            Shadows Become Substance
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#music" className="hover:text-red-400">Music</a>
            <a href="#shows" className="hover:text-red-400">Shows</a>
            <a href="#about" className="hover:text-red-400">About</a>
            <a href="#contact" className="hover:text-red-400">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-black overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 z-0"></div>

{/* Scattered images with glow */}
<div className="absolute top-10 left-10 hidden md:block">
  <div className="absolute inset-0 bg-red-600/30 blur-3xl rounded-full"></div>
  <img
    src="/img1.png"
    alt="Band Art"
    className="relative w-32 opacity-80 rotate-[-6deg] animate-[float_6s_ease-in-out_infinite]"
  />
</div>

<div className="absolute top-20 right-16 hidden md:block">
  <div className="absolute inset-0 bg-red-600/30 blur-3xl rounded-full"></div>
  <img
    src="/img2.png"
    alt="Band Art"
    className="relative w-40 opacity-80 rotate-[8deg] animate-[float_7s_ease-in-out_infinite]"
  />
</div>

{/* Show fewer/smaller images on mobile */}
<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:hidden">
  <div className="absolute inset-0 bg-red-600/30 blur-2xl rounded-full"></div>
  <img
    src="/img3.png"
    alt="Band Art"
    className="relative w-24 opacity-80 animate-[float_8s_ease-in-out_infinite]"
  />
</div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            When <span className="text-yellow-100">Shadows</span> Become <span className="text-yellow-100">Substance</span>
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

        {/* Highlighted Singles */}
        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="https://open.spotify.com/track/2mJ80O1WvfindVlo0IT4cM"
            target="_blank"
            className="group rounded-lg border border-gray-800 p-5 hover:border-red-600 transition"
          >
            <div className="text-sm text-gray-400">Single • 2025</div>
            <div className="mt-1 text-xl font-semibold group-hover:text-red-400">SUBSTANCE</div>
            <div className="mt-3 text-gray-400">Stream on Spotify →</div>
          </a>

          <a
            href="https://open.spotify.com/track/4lquTy8XhVLRvs4miAyyeH"
            target="_blank"
            className="group rounded-lg border border-gray-800 p-5 hover:border-red-600 transition"
          >
            <div className="text-sm text-gray-400">Single • 2025</div>
            <div className="mt-1 text-xl font-semibold group-hover:text-red-400">NEXT SEPTEMBER</div>
            <div className="mt-3 text-gray-400">Stream on Spotify →</div>
          </a>

          <a
            href="https://music.apple.com/us/song/active/1777561606"
            target="_blank"
            className="group rounded-lg border border-gray-800 p-5 hover:border-red-600 transition"
          >
            <div className="text-sm text-gray-400">Single • 2024</div>
            <div className="mt-1 text-xl font-semibold group-hover:text-red-400">ACTIVE</div>
            <div className="mt-3 text-gray-400">Stream on Apple Music →</div>
          </a>
        </div>

        {/* Embedded players */}
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

      {/* Shows */}
      <section id="shows" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-yellow-100">Shows</h2>
        <ul className="grid md:grid-cols-2 gap-6">
          <li className="rounded-lg border border-gray-800 p-5">
            <div className="text-sm text-gray-400">Aug 15, 2025 • Teaneck, NJ</div>
            <div className="text-xl font-semibold mt-1">Debonair Music Hall</div>
            <a
              href="https://www.bandsintown.com/e/106998113-shadows-become-substance-at-debonair-music-hall"
              target="_blank"
              className="text-red-400 hover:underline mt-2 inline-block"
            >
              Details / Tickets
            </a>
          </li>
          <li className="rounded-lg border border-gray-800 p-5">
            <div className="text-sm text-gray-400">Aug 8, 2025 • Boonton, NJ</div>
            <div className="text-xl font-semibold mt-1">The Sanctuary</div>
            <a
              href="https://www.bandsintown.com/e/107150697-shadows-become-substance-at-the-sanctuary?came_from=286&utm_campaign=ticket_rsvp&utm_medium=web&utm_source=home"
              target="_blank"
              className="text-red-400 hover:underline mt-2 inline-block"
            >
              Details / Tickets
            </a>
          </li>
        </ul>

        <p className="text-sm text-gray-400 mt-4">
          Want your date listed here? DM us on Instagram.
        </p>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-yellow-100">About</h2>
        <p className="text-gray-300 leading-relaxed">
          Shadows Become Substance is an independent alternative duo from New Jersey, channeling heavy
          riffs and cinematic atmosphere. We push from raw emotion into catharsis on stage and in the studio.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-950 border-t border-red-500">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-3xl font-bold mb-4 text-yellow-100">Contact</h2>
          <p className="text-gray-300">
            Email: <a className="text-red-400 hover:underline" href="mailto:booking.sbs@gmail.com">booking.sbs@gmail.com</a>
          </p>
          <div className="mt-4 flex items-center gap-4">
            <a className="text-red-400 hover:underline" target="_blank" href="https://www.instagram.com/shadowsbecomesubstance/">Instagram</a>
            <a className="text-red-400 hover:underline" target="_blank" href="https://open.spotify.com/artist/7D2Dx35nAzENA8TqOTeVUm">Spotify</a>
            <a className="text-red-400 hover:underline" target="_blank" href="https://www.youtube.com/channel/UCEwqJHtv8JP-jFttrSTDK3A">YouTube</a>
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
