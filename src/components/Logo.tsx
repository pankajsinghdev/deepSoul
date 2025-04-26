import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        className="h-9 w-9 rounded-full object-cover"
        alt="Deep soul logo"
        src={"/deepsoul.png"}
      />
    </div>
  );
};

export default Logo;
