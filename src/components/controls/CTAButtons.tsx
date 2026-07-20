import TileButton from "./TileButton";
import { LuFileDown, LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { socialContacts } from "@/lib/constants";
import LongArrowRightIcon from "../icon/LongArrowRightIcon";

const composeMailLink = `https://mail.google.com/mail/?view=cm&to=${socialContacts.gmail}&su=${encodeURIComponent(
  "Let's Work Together!"
)}&body=${encodeURIComponent(
  "Hey Jireh,\n\nI'd love to talk about a project or opportunity."
)}`;

const CTAButtons = () => {
  const socialButtons = [
    {
      icon: (
        <a href={socialContacts.github} target="_blank" rel="noopener noreferrer">
          <LuGithub className="size-5" />
        </a>
      ),
    },
    {
      icon: (
        <a href={socialContacts.linkedIn} target="_blank" rel="noopener noreferrer">
          <LuLinkedin className="size-5" />
        </a>
      ),
    },
    {
      icon: (
        <a href="/JirehTumbagahanCV.pdf" download="Jireh_Tumbagahan_Resume.pdf">
          <LuFileDown className="size-5" />
        </a>
      ),
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-4">
      <TileButton
        href={composeMailLink}
        icon={<LuMail className="size-5" />}
        label={
          <>
            Send Email
            {/* justify-between pushes this to the right edge of the label
                window, whose width is set by the longer hover label */}
            <LongArrowRightIcon className="h-4 w-10 shrink-0" />
          </>
        }
        hoverLabel="Let's build something!"
        className="min-w-[16rem] px-7"
      />

      {socialButtons.map((social, index) => (
        <TileButton key={index} icon={social.icon} />
      ))}
    </div>
  );
};

export default CTAButtons;
