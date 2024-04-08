export default function Wrapper({ children }) {
  return (
    <div className="rounded-lg flex flex-col border p-4 shadow-xl border-gray-100">
      {children}
    </div>
  );
}
