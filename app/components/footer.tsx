import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Riyaa logo1.3 (C).png";

const footerNavs = [
  {
    href: "javascript:void()",
    name: "Terms",
  },
  {
    href: "javascript:void()",
    name: "License",
  },
  {
    href: "javascript:void()",
    name: "Privacy",
  },
  {
    href: "javascript:void()",
    name: "About us",
  },
];

const Footer = () => {
  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="justify-between gap-x-10 flex">
          <div className="space-y-6">
            <Image src={Logo} width={60} height={60} alt=" logo" />
            <p className="max-w-md text-xs font-thin">
              Images in the showcase are for illustration purposes and may not
              reflect exact product availability or appearances. Variations may
              occur due to updates and seasonal changes. For accurate details,
              refer to product descriptions. Riyaa.shop reserves the right to
              modify offerings without prior notice. Thank you for your
              understanding.
            </p>
          </div>
          <div className="mt-6">
            <p className="text-gray-700 text-xl font-thin">Contact Us</p>
            <div className="flex flex-col gap-5 mt-3 sm:block">
              <ul>
                <li>
                  <p className="text-xs font-thin">
                    HQ Address: No.119, Jalan Kendi, Kawasan Perniagaan Taman
                    Merak, 14100, Simpang Ampat, Pulau Pinang
                  </p>
                </li>

                <li>
                  <p className="text-xl font-thin mt-5">
                    Need help or have a question?
                  </p>
                </li>

                <li>
                  <Link
                    href={"https://www.wasap.my/60143208300"}
                    target="_blank"
                    className="text-xs  mt-5 font-thin"
                  >
                    Phone: (+60)143208300
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:admin@riyaa.shop"
                    target="_blank"
                    className="text-xs font-thin"
                  >
                    Email: admin@riyaa.shop
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-5 py-10 border-t text-xs md:text-center">
          <p>
            © 2024 Riyaa.shop . All rights reserved.{" "}
            <Link href={"https://www.heshmedia.co/"}>
              Powered by Heshmedia.co.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
