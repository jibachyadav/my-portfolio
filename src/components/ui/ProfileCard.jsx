import { Github, Linkedin, Instagram, Mail, Camera, Sparkles } from "lucide-react";
import { useState, useRef } from "react";

const ProfileCard = () => {
  const [profileImage, setProfileImage] = useState("/Profile.jpg");
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div 
      className="relative max-w-sm ml-12 mt-8 p-6 rounded-2xl bg-white/10 dark:bg-gray-900/20 backdrop-blur-xl shadow-[0_6px_25px_rgba(0,0,0,0.25)] border border-white/20 dark:border-gray-700 overflow-hidden group transform transition-all duration-700 hover:-translate-y-3 hover:scale-110 hover:shadow-[0_0_60px_rgba(99,102,241,0.6),0_0_80px_rgba(236,72,153,0.5)] hover:rotate1 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-15 blur-2xl group-hover:opacity-35 transition duration-500 pointer-events-none"></div>

      {/* Profile Image */}
      <div className="relative w-30 h-30 mx-auto mb-5">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow opacity-60 pointer-events-cursor"></div>
        <img
          src="/Profile.jpg"
          alt="Profile"
          className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-900 shadow-lg transition-transform duration-500 group-hover:scale-125"
        />
        {/* Online Status Dot */}
        <span className="absolute bottom-1.5 right-1.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 shadow pointer-events-cursor"></span>
      </div>

      {/* Name and Title */}
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-wide">
        Jibachh Yadav
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
        Frontend Developer
      </p>

      {/* Bio */}
      <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        Passionate about building interactive, user-friendly apps with{" "}
        <span className="font-semibold text-indigo-500">React</span>,{" "}
        <span className="font-semibold text-purple-500">JavaScript</span> & modern
        UI/UX principles.
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-5 mt-6 relative z-20">
        <a
          href="https://github.com/jibachyadav"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 transition-all duration-500 shadow-md"
        >
          <Github
            size={20}
            className="text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/jibachh-yadav-np/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 transition-all duration-500 shadow-md"
        >
          <Linkedin
            size={20}
            className="text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300"
          />
        </a>

        <a
          href="https://www.instagram.com/jibach.yadav.1848"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 transition-all duration-500 shadow-md"
        >
          <Instagram
            size={20}
            className="text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300"
          />
        </a>

        <a
          href="mailto:jibachh201@gmail.com"
          className="group relative p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 transition-all duration-500 shadow-md"
        >
          <Mail
            size={20}
            className="text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300"
          />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
