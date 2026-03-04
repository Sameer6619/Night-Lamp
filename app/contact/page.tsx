export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white px-8 py-24">

      <div className="max-w-3xl mx-auto space-y-10">

        <h1 className="text-5xl font-bold">
          Contact
        </h1>

        <p className="text-gray-400">
          If you'd like to collaborate, discuss projects, or ask questions,
          feel free to reach out.
        </p>

        <div className="space-y-4 text-gray-300">

          <p>Email: your@email.com</p>
          <p>GitHub: github.com/yourprofile</p>
          <p>ArtStation: artstation.com/yourprofile</p>

        </div>

      </div>

    </main>
  );
}