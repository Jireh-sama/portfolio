import TileButton from "./TileButton";
import { LuFileDown, LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

const CTAButtons = () => {
  const socialButtons = [
    { icon: <LuGithub className="size-5" /> },
    { icon: <LuLinkedin className="size-5" /> },
    { icon: <LuMail className="size-5" /> },
    {
      icon: (
        <a
          href="/JirehTumbagahanCV.pdf"
          download="Jireh_Tumbagahan_Resume.pdf"
          className="flex items-center justify-center"
        >
          <LuFileDown className="size-5" />
          &nbsp;
          <p>Download CV</p>
        </a>
      ),
      fn: () => {},
    },
  ];

  return (
    <div className="flex flex-wrap space-x-4 space-y-4">
      {socialButtons.map((social, index) => (
        <TileButton key={index} icon={social.icon} />
      ))}
    </div>
  );
};

export default CTAButtons;
