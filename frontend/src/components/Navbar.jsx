import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-sm sticky top-0 z-50">
      <div className="text-2xl font-bold text-blue-600">NexusInventory</div>
      <div className="space-x-8 font-medium">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link href="/items" className="hover:text-blue-600">
          Items
        </Link>
        <Link
          href="/login"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
