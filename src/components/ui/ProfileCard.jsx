import { Github, Linkedin, Instagram, Mail } from "lucide-react";
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
      className="relative max-w-sm mx-auto mt-6 p-6 rounded-2xl 
                 bg-white/10 dark:bg-gray-900/20 backdrop-blur-xl 
                 shadow-[0_6px_25px_rgba(0,0,0,0.25)] border border-white/20 dark:border-gray-700 
                 overflow-hidden group transform transition-all duration-700 
                 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_40px_rgba(99,102,241,0.6),0_0_50px_rgba(236,72,153,0.5)] 
                 cursor-pointer w-[90%] sm:w-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-15 blur-2xl group-hover:opacity-35 transition duration-500 pointer-events-none"></div>

      {/* Profile Image */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-5">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow opacity-60"></div>
        <img
          src={profileImage}
          alt="Profile"
          className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-900 shadow-lg transition-transform duration-500 group-hover:scale-110"
        />
        {/* Online Status Dot */}
        <span className="absolute bottom-1.5 right-1.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 shadow"></span>
      </div>

      {/* Name and Title */}
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-wide text-center">
        Jibachh Yadav
      </h2>
      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium text-center">
        Frontend Developer
      </p>

      {/* Bio */}
      <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-center px-2">
        Passionate about building interactive, user-friendly apps with{" "}
        <span className="font-semibold text-indigo-500">React</span>,{" "}
        <span className="font-semibold text-purple-500">JavaScript</span> & modern
        UI/UX principles.
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mt-6 relative z-20 flex-wrap">
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

 
         
     
         
      
      

