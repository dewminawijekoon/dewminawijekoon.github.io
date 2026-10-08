export default function Skills() {
  const skills = [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "FastAPI",
    "MySQL",
    "MongoDB",
    "PyTorch",
    "Pandas",
    "OpenCV",
    "LangFlow",
    "Docker",
    "Git",
    "Isaac Sim",
    "ArduPilot",
    "Flutter",
    "React Native",
    "Firebase",
    "VHDL"
  ];

  const leadershipRoles = [
    {
      title: 'Current President of CSESS',
      description: 'Serving as President of the Computer Science Engineering Society, University of Moratuwa, overseeing student activities and ensuring smooth departmental engagement across the CSE community.'
    },
    {
      title: 'Chairperson, IESL RoboGames 2024',
      description: 'Led the organizing committee for IESL RoboGames 2024, overseeing planning, sponsorship acquisition, technical coordination, and event execution. Successfully raised funding through corporate partnerships and introduced the first-ever robot battle event in the history of the University of Moratuwa, significantly boosting student engagement and robotics visibility on campus.'
    },
    {
      title: 'Moraspirit / Global Nexus',
      description: 'Worked in the Global Nexus cultural exchange program, collaborating with participants from Pakistan, Ukraine, Nigeria, the USA, Sri Lanka, Japan, and Turkey. This strengthened my cross-cultural communication, teamwork, and international collaboration skills in a diverse environment.'
    },
    {
      title: 'Mora Wrestling Team',
      description: 'Joined the 2025 Mora Wrestling team without prior combat sports experience, learned the sport from the ground up, and eventually served as the reserve player in the 63kg category in SLUG 2025. '
    }
  ];

  return (
    <>
      <section id="skills" className="mb-16 scroll-mt-24">
        <h2 className="section-title">Technical_Skills</h2>
        <div className="card">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {skills.map((skill, index) => (
              <li key={index} className="bg-primary bg-opacity-20 px-3 py-2 md:px-4 md:py-2 rounded text-center shadow-sm hover:bg-primary hover:text-white transition duration-200 text-sm md:text-base">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="non-technical-skills" className="mb-16 scroll-mt-24">
        <h2 className="section-title">Non_Technical_Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {leadershipRoles.map((role, index) => (
            <div key={index} className="card group">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-secondary group-hover:text-primary transition-colors duration-200">{role.title}</h3>
              <p className="text-sm md:text-base leading-relaxed text-foreground/90">{role.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
