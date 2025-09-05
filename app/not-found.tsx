import Link from "next/link";

export default function NotFound() {
    return (
        <main className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white">
            <h1 className="text-7xl font-bold mb-4">404</h1>
            <p className="text-2xl mb-8">Page Not Found</p>
            <Link href="/" className="bg-secondary px-6 py-2 rounded-full font-bold k2d tracking-wider">Go Back Home</Link>
        </main>
    );
}
