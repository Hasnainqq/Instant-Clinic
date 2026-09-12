export default function Floating({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-green-600 px-4 py-3 text-white shadow-lg shadow-green-600/30 transition hover:bg-green-700"
    >
      <span className="text-xl">💬</span>
      <span className="font-semibold">Consult Now</span>
    </a>
  );
}
