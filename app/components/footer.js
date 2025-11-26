// src/components/Footer.js
import Link from "next/link";
import Image from "next/image"; // ✅ Required import
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center gap-6 text-2xl mb-3">

          <Link
            href="https://www.facebook.com/groups/VanipediaGroup/"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebook className="hover:scale-110 transition duration-200" />
          </Link>

          <Link
            href="https://www.instagram.com/vanipediaquotes/"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram className="hover:scale-110 transition duration-200" />
          </Link>

          <Link
            href="https://www.youtube.com/user/VanimediaMayapur"
            target="_blank"
            aria-label="YouTube"
          >
            <FaYoutube className="hover:scale-110 transition duration-200" />
          </Link>

          <Link href="https://vanipedia.org/" target="_blank" aria-label="Vanipedia">
            <Image
              src="/icons/vp.png"
              width={28}
              height={28}
              alt="Vanipedia"
              className="hover:scale-110 transition duration-200"
            />
          </Link>

        </div>

        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Vani Village. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
