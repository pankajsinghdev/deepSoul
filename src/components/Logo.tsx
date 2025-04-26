import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        className="h-9 w-9 rounded-full object-cover"
        alt="Deep soul logo"
        width={36}
        quality={100}
        height={36}
        src={"/deepsoul.png"}
      />
    </div>
  );
};

export default Logo;
