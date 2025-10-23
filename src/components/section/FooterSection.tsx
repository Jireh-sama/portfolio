import { LuGithub, LuLinkedin } from "react-icons/lu";

interface FooterSectionProps {
  githubLink: string
  linkedInLink: string
  email: string
}

const FooterSection = ({ githubLink, linkedInLink, email }: FooterSectionProps) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <LuGithub className="w-5 h-5" />,
      label: "GitHub",
      href: githubLink,
    },
    {
      icon: <LuLinkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: linkedInLink,
    },
  ];

  return (
    <footer className="bg-neutral-50 dark:bg-[#0f0f12] border-t dark:border-gray-800/50 mt-32">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <section>
            <h3 className="text-2xl font-bold mb-3">
              Jireh<span className="text-gray-400">.</span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Web developer passionate about creating beautiful and
              functional web experiences.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    p-2.5 rounded-lg
                  bg-gray-100 border border-gray-200 text-gray-600
                    hover:text-blue-600 hover:border-blue-500
                    dark:bg-gray-800/50 dark:border-gray-700/50 dark:text-gray-400
                    dark:hover:text-white dark:hover:bg-gray-800 dark:hover:border-gray-600
                    transition-all
                  "
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </section>

          {/* Contact info section */}
          <section>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <p
                  className="text-sm text-gray-400"
                >
                  {email}
                </p>
              </li>
              <li className="text-sm text-gray-400">
                Philippines, Las Piñas
              </li>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=jirehtumbagahan@gmail.com&su=Let’s Work Together!&body=Hey%20Jireh,%0D%0A%0D%0AI'd%20love%20to%20talk%20about%20a%20project%20or%20opportunity."
                  target="_blank"
                  className="inline-block px-6 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white font-medium text-sm hover:bg-gray-700 transition-all"
                >
                  Send Email
                </a>
              </li>
            </ul>
          </section>
        </div>

        <section className="pt-8 border-t dark:border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} Jireh. All rights reserved.
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default FooterSection;
