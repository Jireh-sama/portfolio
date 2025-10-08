import { FileDown, Github, Linkedin, Mail } from "lucide-react";
import TileButton from "../TileButton";

const CTAButtonsSection = () => {
  const socialButtons = [
    { icon: <Github className="size-5" /> },
    { icon: <Linkedin className="size-5" /> },
    { icon: <Mail className="size-5" /> },
    { icon: <FileDown className="size-5" /> },
    { icon: <span>Explore More</span> },
  ];

  return (
    <section>
      <div className="flex flex-wrap space-x-4 space-y-4">
        {socialButtons.map((social) => (
          <TileButton icon={social.icon} shadowColor="#1D4ED8"/>
        ))}

      </div>
    </section>
  );
};

export default CTAButtonsSection;
