import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative text-white">
      <Image
        width={1440}
        height={532}
        alt="footer-image"
        src="/footer-img.webp"
        className="w-full object-cover h-[532px]"
      />
      <div className="absolute top-0 left-0 right-0 px-10 py-8 flex flex-col gap-4">
        <div>
          <Image
            width={99}
            height={68.04}
            alt="white logo"
            src="/zet-logo-white.svg"
          />
        </div>
        <div className="h-px bg-white"></div>
        <div className="flex flex-wrap justify-between gap-4">
          <div className="flex flex-col">
            <p className="text-xs mb-2 md:text-lg">COMPANY</p>
            <p className="text-[10px] mb-1 md:text-base">About Us</p>
            <p className="text-[10px] mb-1 md:text-base">Partner with us</p>
            <p className="text-[10px] mb-1md:text-base">Blog</p>
          </div>
          <div className="flex flex-col">
            <p className="text-xs mb-2 md:text-lg">LEGAL</p>
            <p className="text-[10px] mb-1 md:text-base">Privacy Policy</p>
            <p className="text-[10px] mb-1 md:text-base">Terms of Use</p>
          </div>
          <div className="flex flex-col">
            <p className="text-xs mb-2 md:text-lg">CONTAT</p>
            <div className="mb-1 flex gap-1 items-center">
              <Image
                width={25}
                height={25}
                alt="white logo"
                src="/mail-icon.png"
              />
              <p className="text-[10px] md:text-base">hi@zetapp.in</p>
            </div>
            <div className="mb-1 flex gap-1 items-center">
              <Image
                width={25}
                height={25}
                alt="white logo"
                src="/phone-icon.png"
              />
              <p className="text-[10px] md:text-base">+91-7417274072</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-xs mb-2 md:text-lg">SOCIAL</p>
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/company/zetapp-in/" target="_blank">
                <Image
                  width={32}
                  height={32}
                  alt="linkedin logo"
                  src="/socials/linkedin-logo.svg"
                />
              </Link>
              <Link href="https://www.instagram.com/zetapp.in/" target="_blank">
                <Image
                  width={32}
                  height={32}
                  alt="instagram logo"
                  src="/socials/instagram-logo.svg"
                />
              </Link>
              <Link href="https://www.facebook.com/zetapp.in/" target="_blank">
                <Image
                  width={32}
                  height={32}
                  alt="facebook logo"
                  src="/socials/facebook-logo.svg"
                />
              </Link>
              <Link href="https://web.telegram.org/k/#@GetOneCode" target="_blank">
                <Image
                  width={32}
                  height={32}
                  alt="telegram logo"
                  src="/socials/telegram-logo.svg"
                />
              </Link>
              <Link href="https://chat.whatsapp.com/HRlwYwVYRuaBuH3bRBrgMj" target="_blank">
                <Image
                  width={32}
                  height={32}
                  alt="whatsapp logo"
                  src="/socials/whatsapp-logo.svg"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
