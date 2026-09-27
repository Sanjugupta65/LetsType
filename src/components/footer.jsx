import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

const footer = () => {
  return (
    <div className="w-full py-12 px-6 ">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2 text-glow text-(--accent)">
              LetsType
            </h2>

            <p style={{ color: "var(--textMuted)" }}>
              Master Your Typing Skills
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left ">
            <h3 className="text-lg font-semibold mb-4 text-(--accent)">
              Connect With Us
            </h3>

            <div className="flex space-x-4 ">
              {/* Facebook */}
              <a
                href="https://x.com/sanju3139"
                className="p-2 rounded-full  transition-all duration-200 hover:scale-110 border-2  hover:bg-amber-500"
              >
                <FaTwitter />
              </a>

              {/* Twitter */}
              <a
                href="https://www.linkedin.com/in/sanju-gupta-509147296 "
                className="p-2 rounded-full transition-all duration-200 hover:scale-110 border-2  hover:bg-amber-500"
              >
                <FaLinkedin />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Sanjugupta65"
                className="p-2 rounded-full transition-all duration-200 hover:scale-110 border-2  hover:bg-amber-500"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Contributors */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h3
              className="text-lg font-semibold mb-4 text-orange-500"
            >
            Developed by <span className="text-white">Sanju</span>
            </h3>

            <div className="flex gap-4">
              <div className="relative">
                {/* Contributor Image */}
                <a
                  href="https://github.com/Sanjugupta65"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-14 h-14 rounded-full overflow-hidden border-2 transition-all duration-300"
                >
                  <img
                    src="https://assets.leetcode.com/users/sanjugupta65/avatar_1744986560.png"
                    alt="Sanju"
                    className="w-full h-full object-cover"
                  />
                </a>
                
              </div>
  
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="pt-8  border-t-amber-300"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <p >
              © 2026 LetsType. All rights reserved.
            </p>

            <p >
              Designed and Developed with
              <span className="text-red-400">❤</span> by{" "}
              <a
                href="https://github.com"
                className=" hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sanju
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
