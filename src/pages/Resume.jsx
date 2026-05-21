import { FaDownload } from "react-icons/fa";

const Resume = () => {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="flex justify-center bg-gray-200 p-4">

      <div id="resume" className="w-full max-w-5xl flex shadow-lg bg-white">

        {/* LEFT PANEL */}
        <div className="w-[35%] bg-[#0f4c3a] text-white p-6">

          {/* PROFILE */}
          <div className="text-center">
            <img
              src="/profile.png"
              className="w-24 h-24 mx-auto rounded-full border-4 border-white object-cover"
            />
            <h2 className="mt-4 text-xl font-semibold">Akshay Satpute</h2>
            <p className="text-xs tracking-widest mt-1">STUDENT</p>
          </div>

          {/* DETAILS */}
          <div className="mt-8 text-sm">
            <h3 className="font-semibold mb-2">Details</h3>
            <p>At Kolapa Ta, Jintur Dist.</p>
            <p>Parbhani</p>
            <p>Parbhani, Maharashtra</p>
            <p>India</p>
            <p className="mt-2">8262871647</p>
            <p>aksatpute7@gmail.com</p>
          </div>

          {/* NATIONALITY */}
          <div className="mt-6 text-sm">
            <h3 className="uppercase text-xs tracking-widest text-gray-300">
              Nationality
            </h3>
            <p>Indian</p>
          </div>

          {/* DOB */}
          <div className="mt-6 text-sm">
            <h3 className="uppercase text-xs tracking-widest text-gray-300">
              Date / Place of Birth
            </h3>
            <p>27-05-2003</p>
            <p>Lonar</p>
          </div>

          {/* SKILLS */}
          <div className="mt-8 text-sm">
            <h3 className="font-semibold mb-2">Skills</h3>

            <Skill name="HTML & CSS" width="100%" />
            <Skill name="React.js" width="70%" />
            <Skill name="Java" width="85%" />
            <Skill name="MySQL / Database Management" width="70%" />
          </div>

          {/* LANGUAGES */}
          <div className="mt-8 text-sm">
            <h3 className="font-semibold mb-2">Languages</h3>

            <Skill name="English" width="40%" />
            <Skill name="Hindi" width="70%" />
            <Skill name="Marathi" width="100%" />
          </div>

          {/* HOBBIES */}
          <div className="mt-8 text-sm">
            <h3 className="font-semibold mb-2">Hobbies</h3>
            <p>Coding and building web applications</p>
            <p>Exploring new technologies</p>
            <p>Problem solving and logical thinking</p>
          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="w-[65%] p-8">

          {/* PROFILE */}
          <h2 className="text-2xl font-semibold mb-3">Profile</h2>
          <p className="text-gray-700 mb-6 text-sm leading-relaxed">
<div className="text-gray-700 text-sm leading-relaxed space-y-3">
  <p>
    Detail-oriented BCA student with strong skills in web development and a solid foundation in software engineering concepts.
  </p>

  <p>
    Completed a 150-hour Web Development Internship at Dotcom Company, gaining hands-on experience in building and optimizing real-world applications.
  </p>

  <p>
    Proficient in HTML, CSS, JavaScript, React, and Java, with a focus on creating responsive, user-friendly, and performance-driven web solutions.
  </p>

  <p>
    Passionate about continuous learning and seeking an opportunity to contribute technical skills and grow as a software developer in a professional environment.
  </p>
</div></p>

          {/* EMPLOYMENT */}
          <h2 className="text-2xl font-semibold mb-2">Employment History</h2>

          <p className="font-semibold">
            Web Development Intern, Dotcom Company, Amravati, Maharashtra
          </p>
          <p className="text-xs text-gray-500 mb-3">
            SEP 2025 — NOV 2025
          </p>

          <ul className="list-disc ml-5 text-sm text-gray-700 mb-6 space-y-1">
            <li>Completed a 150-hour Web Development Internship at Dotcom Company</li>
            <li>Developed and maintained responsive web applications using HTML, CSS, JavaScript and React</li>
            <li>Collaborated in team based projects to build user friendly interfaces</li>
            <li>Improved website performance by identifying and fixing bugs</li>
          </ul>

          {/* EDUCATION */}
          <h2 className="text-2xl font-semibold mb-2">Education</h2>

          <p className="font-semibold">
            Smt Kesharbai Lahoti College Amravati, Under Sant Gadage Baba Amravati University          </p>
          <p className="text-xs text-gray-500 mb-3">
            JUN 2023 — NOV 2026
          </p>

          <ul className="list-disc ml-5 text-sm text-gray-700 mb-6 space-y-1">
            <li>Pursuing Bachelor of Computer Applications (BCA) with a focus on software development and web technologies</li>
            <li>Gained knowledge in Data Structures, Java, DBMS and Networking</li>
            <li>Completed multiple projects including College Event Management System and Stayora platform</li>
            <li>Actively improving coding and problem solving skills</li>
          </ul>

          {/* COURSES */}
          <h2 className="text-2xl font-semibold mb-2">Courses</h2>

          <p className="font-semibold">Web Development Internship – Dotcom Company</p>

          <ul className="text-sm text-gray-700 mb-6 space-y-1">
            <li>Completed 150 hours of practical training in web development</li>
            <li>Worked on real world projects using HTML, CSS, JavaScript and React</li>
          </ul>
        </div>
      </div>

      {/* BUTTON */}
      <button
        onClick={handleDownload}
        className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-xl shadow-lg print:hidden"
      >
        <FaDownload /> Download PDF
      </button>

      {/* PRINT FIX */}
      <style>
        {`
        @media print {
          body {
            margin: 0;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          #resume {
            page-break-inside: avoid;
          }
        }
        `}
      </style>

    </div>
  );
};

const Skill = ({ name, width }) => (
  <div className="mb-3">
    <p className="text-xs">{name}</p>
    <div className="w-full bg-white/30 h-1 rounded">
      <div className="bg-white h-1 rounded" style={{ width }}></div>
    </div>
  </div>
);

export default Resume;