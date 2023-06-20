"use client";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();
  return (
    <nav className="border border-b border-[rgb(208, 215, 224)] py-2 px-4 md:px-[10%]">
      <div className="flex justify-between items-center">
        <div className="">
          <Image
            width={90}
            height={47.93}
            alt="zet-logo"
            src="/zet-logo-blue.svg"
          />
        </div>
        <div className="md:hidden">
          <MenuModal />
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/">
            <p className={pathName === "/" ? "text-primary" : ""}>Home</p>
          </Link>
          <Link href="/about">
            <p className={pathName === "/about" ? "text-primary" : ""}>
              About Us
            </p>
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=in.onecode.app"
            target="_blank"
          >
            <button className="p-2 bg-primary text-white rounded-lg">
              Download ZET
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

function MenuModal() {
  const pathName = usePathname();

  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button>
            {open ? (
              <Image width={36} height={36} alt="burger" src="/x.svg" />
            ) : (
              <Image width={36} height={36} alt="burger" src="/burger.svg" />
            )}
          </Menu.Button>
          <Menu.Items className="absolute z-50 right-0 top-[66px] left-0 bottom-0 flex flex-col gap-16 pt-8 items-center bg-white focus:outline-none">
            <Menu.Item>
              <Link href="/">
                <p className={pathName === "/" ? "text-primary" : ""}>Home</p>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/about">
                <p className={pathName === "/about" ? "text-primary" : ""}>
                  About Us
                </p>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                href="https://play.google.com/store/apps/details?id=in.onecode.app"
                target="_blank"
              >
                <Image
                  width={162}
                  height={48}
                  alt="zet-logo"
                  src="/get-play-store.svg"
                />
              </Link>
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}

export default NavBar;
