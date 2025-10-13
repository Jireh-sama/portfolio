import TileButton from "./TileButton";
import { LuFileDown, LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

const CTAButtons = () => {
  const socialButtons = [
    { icon: <LuGithub className="size-5" /> },
    { icon: <LuLinkedin className="size-5" /> },
    { icon: <LuMail className="size-5" /> },
    {
      icon: (
        <>
          <LuFileDown className="size-5" />
          &nbsp;
          <p>Download CV</p>
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-wrap space-x-4 space-y-4">
      {socialButtons.map((social) => (
        <TileButton icon={social.icon} />
      ))}
    </div>
  );
};

export default CTAButtons;
