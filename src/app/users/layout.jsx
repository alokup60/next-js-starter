export default function UserLayout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1>User Layout</h1>

      {children}
    </div>
  );
}
