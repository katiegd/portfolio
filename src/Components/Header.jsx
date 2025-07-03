import { useState } from 'react';

function Header({ currentSection, setCurrentSection }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleNavClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen gap-8 text-indigo-200/70 text-sm transition-all duration-300 font-bold">
        {/* Home */}
        <div
          className="relative flex items-center w-full justify-center"
          onMouseEnter={() => setHoveredItem('home')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <button
            onClick={() => handleNavClick('home')}
            className={`hover:text-indigo-400 transition-all duration-150 w-12 h-12 hover:rotate-12 ${currentSection === 'home' ? 'text-indigo-400' : ''}`}
          >
            <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.867 15.8321L18.873 10.0391L14.75 5.92908C13.5057 4.69031 11.4942 4.69031 10.25 5.92908L6.13599 10.0291V15.8291C6.1393 17.5833 7.56377 19.0028 9.31799 19.0001H15.685C17.438 19.0029 18.862 17.5851 18.867 15.8321Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 11.365C13.9846 12.1896 13.3064 12.8471 12.4817 12.8369C11.657 12.8267 10.9952 12.1526 11.0003 11.3279C11.0053 10.5031 11.6752 9.83718 12.5 9.83704C12.9015 9.84073 13.2852 10.0038 13.5665 10.2904C13.8478 10.5769 14.0037 10.9635 14 11.365V11.365Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M19.63 5.76314C19.6306 5.34892 19.2953 5.01267 18.8811 5.01209C18.4668 5.0115 18.1306 5.34682 18.13 5.76103L19.63 5.76314ZM18.874 10.0391L18.124 10.038C18.1237 10.2377 18.2031 10.4293 18.3445 10.5702L18.874 10.0391ZM19.9705 12.1912C20.2638 12.4837 20.7387 12.4829 21.0311 12.1896C21.3236 11.8963 21.3229 11.4214 21.0295 11.1289L19.9705 12.1912ZM6.66552 10.5602C6.95886 10.2678 6.95959 9.79291 6.66714 9.49957C6.3747 9.20623 5.89982 9.2055 5.60648 9.49794L6.66552 10.5602ZM3.97048 11.1289C3.67714 11.4214 3.67641 11.8963 3.96886 12.1896C4.2613 12.4829 4.73618 12.4837 5.02952 12.1912L3.97048 11.1289ZM10.5 15.1971C10.0858 15.1971 9.75 15.5329 9.75 15.9471C9.75 16.3613 10.0858 16.6971 10.5 16.6971V15.1971ZM14.5 16.6971C14.9142 16.6971 15.25 16.3613 15.25 15.9471C15.25 15.5329 14.9142 15.1971 14.5 15.1971V16.6971ZM18.13 5.76103L18.124 10.038L19.624 10.0401L19.63 5.76314L18.13 5.76103ZM18.3445 10.5702L19.9705 12.1912L21.0295 11.1289L19.4035 9.50794L18.3445 10.5702ZM5.60648 9.49794L3.97048 11.1289L5.02952 12.1912L6.66552 10.5602L5.60648 9.49794ZM10.5 16.6971H14.5V15.1971H10.5V16.6971Z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
          </button>
          <span
            className={`absolute left-16 text-lg text-indigo-400 transition-all duration-300 transform ${
              hoveredItem === 'home' ? 'translate-x-0 scale-100 opacity-100' : '-translate-x-4 scale-0 opacity-0'
            }`}
          >
            Home
          </span>
        </div>

        {/* Projects */}
        <div
          className="relative flex items-center w-full justify-center"
          onMouseEnter={() => setHoveredItem('projects')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <button
            onClick={() => handleNavClick('projects')}
            className={`hover:text-indigo-400 transition-all duration-300 w-12 h-12 hover:rotate-12 ${currentSection === 'projects' ? 'text-indigo-400' : ''}`}
          >
            <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.5 12L13 14.333V19L20 14.333V9.667L13 5V9.667L16.5 12Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M6.41598 9.04293C6.07132 8.81319 5.60568 8.90635 5.37593 9.25102C5.14619 9.59568 5.23935 10.0613 5.58402 10.2911L6.41598 9.04293ZM12.584 14.9571C12.9287 15.1868 13.3943 15.0936 13.6241 14.749C13.8538 14.4043 13.7606 13.9387 13.416 13.7089L12.584 14.9571ZM6.75 9.667C6.75 9.25279 6.41421 8.917 6 8.917C5.58579 8.917 5.25 9.25279 5.25 9.667H6.75ZM5.25 14.333C5.25 14.7472 5.58579 15.083 6 15.083C6.41421 15.083 6.75 14.7472 6.75 14.333H5.25ZM5.58395 9.04298C5.23932 9.27275 5.1462 9.73841 5.37598 10.083C5.60575 10.4277 6.07141 10.5208 6.41605 10.291L5.58395 9.04298ZM13.416 5.62402C13.7607 5.39425 13.8538 4.92859 13.624 4.58395C13.3942 4.23932 12.9286 4.1462 12.584 4.37598L13.416 5.62402ZM13.416 10.2911C13.7606 10.0613 13.8538 9.59568 13.6241 9.25102C13.3943 8.90635 12.9287 8.81319 12.584 9.04293L13.416 10.2911ZM5.58402 13.7089C5.23935 13.9387 5.14619 14.4043 5.37593 14.749C5.60568 15.0936 6.07132 15.1868 6.41598 14.9571L5.58402 13.7089ZM6.41605 13.709C6.07141 13.4792 5.60575 13.5723 5.37598 13.917C5.1462 14.2616 5.23932 14.7272 5.58395 14.957L6.41605 13.709ZM12.584 19.624C12.9286 19.8538 13.3942 19.7607 13.624 19.416C13.8538 19.0714 13.7607 18.6058 13.416 18.376L12.584 19.624ZM20.416 10.2911C20.7606 10.0613 20.8538 9.59568 20.6241 9.25102C20.3943 8.90635 19.9287 8.81319 19.584 9.04293L20.416 10.2911ZM16.5 12L16.084 11.3759C15.8753 11.515 15.75 11.7492 15.75 12C15.75 12.2508 15.8753 12.485 16.084 12.6241L16.5 12ZM19.584 14.9571C19.9287 15.1868 20.3943 15.0936 20.6241 14.749C20.8538 14.4043 20.7606 13.9387 20.416 13.7089L19.584 14.9571ZM5.58402 10.2911L12.584 14.9571L13.416 13.7089L6.41598 9.04293L5.58402 10.2911ZM5.25 9.667V14.333H6.75V9.667H5.25ZM6.41605 10.291L13.416 5.62402L12.584 4.37598L5.58395 9.04298L6.41605 10.291ZM12.584 9.04293L5.58402 13.7089L6.41598 14.9571L13.416 10.2911L12.584 9.04293ZM5.58395 14.957L12.584 19.624L13.416 18.376L6.41605 13.709L5.58395 14.957ZM19.584 9.04293L16.084 11.3759L16.916 12.6241L20.416 10.2911L19.584 9.04293ZM16.084 12.6241L19.584 14.9571L20.416 13.7089L16.916 11.3759L16.084 12.6241Z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
          </button>
          <span
            className={`absolute left-16 text-lg text-indigo-400 transition-all duration-300 transform ${
              hoveredItem === 'projects' ? 'translate-x-0 scale-100 opacity-100' : '-translate-x-4 scale-0 opacity-0'
            }`}
          >
            Projects
          </span>
        </div>

        {/* Tech */}
        <div
          className="relative flex items-center w-full justify-center"
          onMouseEnter={() => setHoveredItem('tech')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <button
            onClick={() => handleNavClick('tech')}
            className={`transition-all duration-300 w-12 h-12 hover:rotate-12 hover:text-indigo-400 ${currentSection === 'tech' ? 'text-indigo-400' : ''}`}
          >
            <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M14.2354 7.14709C14.3167 6.74092 14.0533 6.3458 13.6471 6.26456C13.2409 6.18333 12.8458 6.44674 12.7646 6.85291L14.2354 7.14709ZM10.7646 16.8529C10.6833 17.2591 10.9467 17.6542 11.3529 17.7354C11.7591 17.8167 12.1542 17.5533 12.2354 17.1471L10.7646 16.8529ZM7.97342 15.4921C8.26837 15.7829 8.74323 15.7795 9.03406 15.4846C9.32488 15.1896 9.32153 14.7148 9.02658 14.4239L7.97342 15.4921ZM5.5 12L4.97342 11.4659C4.83048 11.6069 4.75 11.7993 4.75 12C4.75 12.2007 4.83048 12.3931 4.97342 12.5341L5.5 12ZM9.02658 9.57606C9.32153 9.28523 9.32488 8.81037 9.03406 8.51542C8.74323 8.22047 8.26837 8.21712 7.97342 8.50794L9.02658 9.57606ZM15.9773 14.3782C15.6802 14.6669 15.6735 15.1417 15.9622 15.4387C16.2509 15.7358 16.7257 15.7425 17.0227 15.4538L15.9773 14.3782ZM19.5 12L20.0227 12.5378C20.1667 12.3979 20.2486 12.2061 20.25 12.0053C20.2514 11.8046 20.1723 11.6116 20.0303 11.4697L19.5 12ZM17.0303 8.46967C16.7374 8.17678 16.2626 8.17678 15.9697 8.46967C15.6768 8.76256 15.6768 9.23744 15.9697 9.53033L17.0303 8.46967ZM12.7646 6.85291L10.7646 16.8529L12.2354 17.1471L14.2354 7.14709L12.7646 6.85291ZM9.02658 14.4239L6.02658 11.4659L4.97342 12.5341L7.97342 15.4921L9.02658 14.4239ZM6.02658 12.5341L9.02658 9.57606L7.97342 8.50794L4.97342 11.4659L6.02658 12.5341ZM17.0227 15.4538L20.0227 12.5378L18.9773 11.4622L15.9773 14.3782L17.0227 15.4538ZM20.0303 11.4697L17.0303 8.46967L15.9697 9.53033L18.9697 12.5303L20.0303 11.4697Z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
          </button>
          <span
            className={`absolute left-16 text-lg text-indigo-400 transition-all duration-300 transform ${
              hoveredItem === 'tech' ? 'translate-x-0 scale-100 opacity-100' : '-translate-x-4 scale-0 opacity-0'
            }`}
          >
            Tech
          </span>
        </div>

        {/* About */}
        <div
          className="relative flex items-center w-full justify-center"
          onMouseEnter={() => setHoveredItem('about')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <button
            onClick={() => handleNavClick('about')}
            className={`hover:text-indigo-400 transition-all duration-300 w-12 h-12 hover:rotate-12 ${currentSection === 'about' ? 'text-indigo-400' : ''}`}
          >
            <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.5 11.5C14.5 12.6046 13.6046 13.5 12.5 13.5C11.3954 13.5 10.5 12.6046 10.5 11.5C10.5 10.3954 11.3954 9.5 12.5 9.5C13.6046 9.5 14.5 10.3954 14.5 11.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M14.5 5.25C14.0858 5.25 13.75 5.58579 13.75 6C13.75 6.41421 14.0858 6.75 14.5 6.75V5.25ZM10.5 6.75C10.9142 6.75 11.25 6.41421 11.25 6C11.25 5.58579 10.9142 5.25 10.5 5.25V6.75ZM15.25 6C15.25 5.58579 14.9142 5.25 14.5 5.25C14.0858 5.25 13.75 5.58579 13.75 6H15.25ZM13.75 7C13.75 7.41421 14.0858 7.75 14.5 7.75C14.9142 7.75 15.25 7.41421 15.25 7H13.75ZM13.75 6C13.75 6.41421 14.0858 6.75 14.5 6.75C14.9142 6.75 15.25 6.41421 15.25 6H13.75ZM15.25 4C15.25 3.58579 14.9142 3.25 14.5 3.25C14.0858 3.25 13.75 3.58579 13.75 4H15.25ZM14.5 6.75C14.9142 6.75 15.25 6.41421 15.25 6C15.25 5.58579 14.9142 5.25 14.5 5.25V6.75ZM10.5 5.25C10.0858 5.25 9.75 5.58579 9.75 6C9.75 6.41421 10.0858 6.75 10.5 6.75V5.25ZM11.25 6C11.25 5.58579 10.9142 5.25 10.5 5.25C10.0858 5.25 9.75 5.58579 9.75 6H11.25ZM9.75 7C9.75 7.41421 10.0858 7.75 10.5 7.75C10.9142 7.75 11.25 7.41421 11.25 7H9.75ZM9.75 6C9.75 6.41421 10.0858 6.75 10.5 6.75C10.9142 6.75 11.25 6.41421 11.25 6H9.75ZM11.25 4C11.25 3.58579 10.9142 3.25 10.5 3.25C10.0858 3.25 9.75 3.58579 9.75 4H11.25ZM6.05108 17.8992C5.71926 18.1471 5.65126 18.6171 5.89919 18.9489C6.14713 19.2807 6.61711 19.3487 6.94892 19.1008L6.05108 17.8992ZM18.0511 19.1008C18.3829 19.3487 18.8529 19.2807 19.1008 18.9489C19.3487 18.6171 19.2807 18.1471 18.9489 17.8992L18.0511 19.1008ZM14.5 6.75H15.5V5.25H14.5V6.75ZM15.5 6.75C17.2949 6.75 18.75 8.20507 18.75 10H20.25C20.25 7.37665 18.1234 5.25 15.5 5.25V6.75ZM18.75 10V16H20.25V10H18.75ZM18.75 16C18.75 17.7949 17.2949 19.25 15.5 19.25V20.75C18.1234 20.75 20.25 18.6234 20.25 16H18.75ZM15.5 19.25H9.5V20.75H15.5V19.25ZM9.5 19.25C7.70507 19.25 6.25 17.7949 6.25 16H4.75C4.75 18.6234 6.87665 20.75 9.5 20.75V19.25ZM6.25 16V10H4.75V16H6.25ZM6.25 10C6.25 8.20507 7.70507 6.75 9.5 6.75V5.25C6.87665 5.25 4.75 7.37665 4.75 10H6.25ZM9.5 6.75H10.5V5.25H9.5V6.75ZM13.75 6V7H15.25V6H13.75ZM15.25 6V4H13.75V6H15.25ZM14.5 5.25H10.5V6.75H14.5V5.25ZM9.75 6V7H11.25V6H9.75ZM11.25 6V4H9.75V6H11.25ZM6.94892 19.1008C10.2409 16.641 14.7591 16.641 18.0511 19.1008L18.9489 17.8992C15.1245 15.0416 9.87551 15.0416 6.05108 17.8992L6.94892 19.1008Z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
          </button>
          <span
            className={`absolute left-16 text-lg text-indigo-400 transition-all duration-300 transform ${
              hoveredItem === 'about' ? 'translate-x-0 scale-100 opacity-100' : '-translate-x-4 scale-0 opacity-0'
            }`}
          >
            About Me
          </span>
        </div>

        {/* Contact */}
        <div
          className="relative flex items-center w-full justify-center"
          onMouseEnter={() => setHoveredItem('contact')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <button
            onClick={() => handleNavClick('contact')}
            className={`hover:text-indigo-400 transition-all duration-300 w-12 h-12 hover:rotate-12 ${currentSection === 'contact' ? 'text-indigo-400' : ''}`}
          >
            <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.36343 6.36195C7.24343 5.43495 7.55443 5.17495 7.92943 5.05395C8.18895 4.98595 8.46112 4.98217 8.72243 5.04295C9.06643 5.14295 9.15743 5.21895 10.2854 6.34295C11.2764 7.32995 11.3754 7.43695 11.4704 7.62995C11.6521 7.96873 11.6805 8.36894 11.5484 8.72995C11.4484 9.00495 11.3064 9.18695 10.7054 9.78995L10.3134 10.183C10.2105 10.2876 10.1863 10.4464 10.2534 10.577C11.1244 12.0628 12.36 13.3019 13.8434 14.177C14.0142 14.2684 14.2245 14.2389 14.3634 14.104L14.7404 13.733C14.9734 13.4941 15.2202 13.2691 15.4794 13.059C15.8866 12.809 16.3939 12.7867 16.8214 13C17.0304 13.1 17.0994 13.162 18.1214 14.182C19.1754 15.233 19.2054 15.266 19.3214 15.507C19.5397 15.9059 19.5374 16.3891 19.3154 16.786C19.2024 17.01 19.1334 17.091 18.5404 17.697C18.1824 18.063 17.8454 18.397 17.7914 18.446C17.3022 18.851 16.6746 19.0497 16.0414 19C14.883 18.8944 13.7617 18.5363 12.7564 17.951C10.5296 16.7711 8.63383 15.0521 7.24243 12.951C6.93937 12.5112 6.66994 12.0492 6.43643 11.569C5.81001 10.4953 5.48653 9.27189 5.50043 8.02895C5.54825 7.37871 5.86008 6.77637 6.36343 6.36195Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </button>
          <span
            className={`absolute left-16 text-lg text-indigo-400 transition-all duration-300 transform ${
              hoveredItem === 'contact' ? 'translate-x-0 scale-100 opacity-100' : '-translate-x-4 scale-0 opacity-0'
            }`}
          >
            Contact Me
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
