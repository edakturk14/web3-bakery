export default function Footer() {
    return (
        <footer className="w-full bg-white shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                <p className="text-gray-600">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                <nav>
                    <a href="/contact" className="text-gray-600 hover:text-gray-800 mx-2">Contact</a>
                </nav>
            </div>
        </footer>
    );
}