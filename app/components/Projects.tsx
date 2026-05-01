export default function Projects() {
  const projects = [
    {
      title: 'Isaac Sim ArduPilot Simulator (Ongoing)',
      description: 'A containerised system to simulate real-world drone scenarios. Simulation runs on Isaac Sim with ArduPilot SITL, bridged via Pegasus Simulator. Scalable to ROS integration.',
      link: 'https://github.com/ryseraResearch/drone-platform-isaacsim'
    },
    {
      title: 'libfreenect Python Wrapper',
      description: 'Python wrapper for libfreenect (Kinect). Published on PyPI.',
      link: 'https://pypi.org/project/freenect/'
    },
    {
      title: 'Intelligent Investment Advisor (Group Project)',
      description: 'AI-powered finance tool for budgeting, stock forecasting, and portfolio analysis. Built with Next.js and FastAPI.',
      link: 'https://github.com/Intelligent-Advisor-Sem-4/'
    },
    {
      title: 'Software Engineering Workbench',
      description: 'An AI-powered tool that takes project requirements via questionnaires or docs, asks clarifying questions, then generates a full architecture review with design decisions and recommendations.',
      link: 'https://github.com/dewminawijekoon/SoftwareEngineeringWorkbench'
    },
    {
      title: 'FS RAG',
      description: 'A Retrieval-Augmented Generation application trained on the FS-Quiz database for Team FalconE Racing, University of Moratuwa. The team was selected to FS Spain and FSG based on the results.',
      link: ''
    },
    {
      title: 'Jeewaka',
      description: 'Scalable healthcare app with doctor discovery, bookings, video consultations, and digital health records. Built with React Native, Node.js microservices.',
      link: 'https://github.com/dewminawijekoon/Jeewaka'
    },
    {
      title: 'RouteMate',
      description: 'Real-time public transport app using Flutter, Firebase, and Google Maps. Features live tracking, route planning, crowd-sourced alerts, and Material UI 3.',
      link: 'https://github.com/dewminawijekoon/RouteMate'
    },
    {
      title: 'Mobile Robot Controller',
      description: 'Controller software for mobile robots, developed as part of robotics research.',
      link: 'https://github.com/ryseraResearch/Mobile-Robot-Controller'
    },
    {
      title: 'Beyond the Sight',
      description: 'Official website for the Sri Lanka Eye Hospital. Responsible for the full infrastructure of the platform.',
      link: 'https://beyond-the-sight.vercel.app/'
    },
    {
      title: '4-bit NanoProcessor',
      description: 'VHDL implementation tested on Basys3 FPGA.',
      link: 'https://github.com/dewminawijekoon/4_bit_NanoProcessor'
    },
    {
      title: 'Human Resource Management System',
      description: 'HRMS web app built with React, FastAPI, and MySQL.',
      link: 'https://github.com/dewminawijekoon/HRMS_DataBase_Project/'
    }
  ];

  return (
    <section id="projects" className="mb-16 scroll-mt-24">
      <h2 className="section-title">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {projects.map((project, index) => (
          <div key={index} className="card group">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-secondary group-hover:text-primary transition-colors duration-200">{project.title}</h3>
            <p className="mb-4 text-sm md:text-base leading-relaxed text-foreground/90">{project.description}</p>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-secondary hover:underline transition-colors duration-200 text-sm md:text-base font-medium"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
