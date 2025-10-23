import TileButton from "./TileButton";
import { LuFileDown, LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

const CTAButtons = () => {
  const socialButtons = [
    {
      icon: (
        <a href="https://github.com/jireh-sama/" target="_blank">
          {" "}
          <LuGithub className="size-5" />
        </a>
      ),
    },
    {
      icon: (
        <a href="https://www.linkedin.com/in/jireh-tumbagahan/" target="_blank">
          <LuLinkedin className="size-5" />
        </a>
      ),
    },
    {
      icon: (
        <a
          href="https://mail.google.com/mail/?view=cm&to=jirehtumbagahan@gmail.com.com&su=Let’s Work Together!&body=Hey%20Jireh,%0D%0A%0D%0AI'd%20love%20to%20talk%20about%20a%20project%20or%20opportunity."
          target="_blank"
        >
          <LuMail className="size-5" />
        </a>
      ),
    },
    {
      icon: (
        <a
          href="/JirehTumbagahanCV.pdf"
          download="Jireh_Tumbagahan_Resume.pdf"
        >
          <LuFileDown className="size-5" />
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
