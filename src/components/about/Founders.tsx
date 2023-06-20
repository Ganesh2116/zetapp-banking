import founders from "@/lib/utils/founders";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const Founders = () => {
  return (
    <>
      <div
        className="flex flex-col"
        style={{
          background:
            "linear-gradient(168deg, rgb(233, 244, 255) 0%, rgb(255, 255, 255) 100%)",
        }}
      >
        <div className="text-center p-10">
          <p className="text-2xl font-bold p-5 md:text-[40px]">
            Meets our Founders
          </p>
          <p className="text-xl font-extralight md:text-2xl">
            Few words from founders desk
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 px-[30px] mx-auto sm:grid-cols-2 gap-[2vw] md:grid-cols-3 pb-24"
          transition={{
            duration: 1,
          }}
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          {founders.map((item, id) => (
            <FounderCard
              key={id}
              {...{
                ...item,
              }}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
};

function FounderCard({
  image,
  name,
  designation,
  linkedInUrl,
}: {
  name: string;
  designation: string;
  image: string;
  linkedInUrl: string;
}) {
  return (
    <div className="flex flex-col gap-4 max-w-[440px] mx-8">
      <Image alt="founder img" src={image} width={261.23} height={261.23} />
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="text-base md:text-2xl">{name}</p>
          <p className="text-sm md:text-xl">{designation}</p>
        </div>
        <Link href={linkedInUrl} target="_blank">
          <Image
            alt="linkedin logo"
            src="/socials/LinkedInblack.webp"
            width={40}
            height={40}
          />
        </Link>
      </div>
    </div>
  );
}

export default Founders;
