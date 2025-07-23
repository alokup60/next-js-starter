export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold">404 - Page Not Found (ALok)</h1>
      <p className="mt-4">The page you are looking for does not exist.</p>
      <a href="/" className="mt-6 text-blue-500 hover:underline">
        Go back to Home 
      </a>
    </div>
  );
}
