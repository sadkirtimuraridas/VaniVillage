import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <div className="flex justify-center gap-6 text-2xl mb-4">
          <Link href="https://facebook.com" target="_blank">
            <FaFacebook className="hover:scale-110 transition duration-200" />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <FaInstagram className="hover:scale-110 transition duration-200" />
          </Link>
          <Link href="https://youtube.com" target="_blank">
            <FaYoutube className="hover:scale-110 transition duration-200" />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <FaXTwitter className="hover:scale-110 transition duration-200" />
          </Link>
        </div>

        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} Vani Village. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
