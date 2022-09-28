// Global list of success stories
// Used both by the list page as well as the story component itself

export const stories = [
  {
    title: "Improving Simulations for Medical Detector Design with Machine Learning",
    subtitle: "Introducing machine learning techniques to reduce the computational cost of Monte Carlo-based simulations for medical imaging detector design",
    image: "../../assets/res/images/iStock-1149878152.jpg",
    urlName: "simulation-for-medical-detectors",
    quote: "With this project we break through the most difficult aspect of time-optimized radiation detector design, simulating particle tracks and detector dimensions till we find an optimized solution, reducing the cost of new detector development 10-fold timewise",
    quoteAttribution: "Georgios Konstantinou, Multiwave Metacrystal",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "Positron Emission Tomography (PET) is a crucial technique widely used for cancer diagnosis and treatment; at the heart of PET devices are radiation detectors that use scintillating crystals. The fundamental physics is well-understood, and large-scale simulations based around Monte-Carlo methods are employed for design by Multiwave Technologies SAS; these correspond to running pseudo-random seeds and perform experiments using physics modelling. Depending on the physics environment chosen, they can be expensive in terms of simulation time, memory cost and only capture some of the physics directly. With this project we use machine learning to reduce simulation and software engineering costs through the Quaisr platform to vastly accelerate design process and improve the quality of simulation. In particular, precision of performance prediction is improved through uncertainty quantification and supervised machine learning techniques; Optimization through objective function applications allows addressing directly questions on system physical sensitivity and time response; and finally, a set of pre-chosen and interactive visualization tools improves access to understanding of the process and results of simulations for the cyber-physical system design engineer. The software developed in this project revolutionises design and speeds up prototyping by Multiwave Metacrystal leading to new PET devices, expands the simulation capabilities for Mulltiwave Technologies SAS and will also be commercialized for Quaisr. Furthermore, the developed tools can be directly applicable to different detector design, or even expanded easily to include any type of Monte-Carlo simulation-based problems.",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "Combining multi-disciplinary expertise, from data and machine learning to computational and applied physics, within this project we developed Monte-Carlo (MC) simulators using variable physics and detector designs, towards the time-optimized scintillation-based radiation detector application. This simulation starts by generating of pseudo-random seeds that address a stochastic pipeline of particle creation and interactions. The computational complexity of the process depends on the geometric model of the simulated system, but most importantly on the used physics. For this type of detector, we require both nuclear physics and optical photons. In total, every experiment includes 10s of thousands of particles and close to a million particle interactions, intensifying with the addition of optics. We probed how different ML approaches, from supervised ML to more complex uncertainty quantification approaches fit in the different simulated problems, with the purpose to reduce the requirement for statistics when running MC, or even scrapping the need for MC use altogether. The pipeline was initially built using only nuclear physics and is being benchmarked for the addition of optics, to also show its versatility. We have demonstrated reduction to the computational load that is so significant, that for the first time we can use the MC-UQ pipeline embedded in tools such as optimization loops. The system can run on the cloud and users can design geometries, choose physics and run experiments directly online through the HUBCAP platform. In application, we designed a new material combination, replicating the behaviour of the golden-standard scintillator, at a third of the cost."
        ],
      },      
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "This consortium came to be in order to apply for this particular project, offering an important incentive to bring together specialists of significantly variable fields, in the cyber and physical domains. The requirements of submission of the program helped us develop and define the potential and capabilities of this consortium, while allowing us to further integrate new concepts such as Cyber-physical systems and model based design. Apart from the obvious use of HUBCAP funding, which allowed this consortium to exist, we were able to profit from the continuous guidance and interaction with business and academic specialists, that supported and interacted with the consortium, helping with issues ranging from simulation specifications to such as resource and material allocation and time budgeting. Finally, the implementation of an accessible web based demonstrator through the sandbox environment of HUBCAP allowed easy user testing and interactions within the consortium.",
          ],
      },
      {
        sectionHeading: "Forward look",
        paragraphs: [
          "Multiwave Metacrystal has now developed an optimized design based on the simulated dimensions to build detectors that replicate the state of the art specifications for a fraction of the cost. As such, within this year the development process was accelerated two-fold, bringing the company closer to its MVP design based on inexpensive scintillators to be commercialised in 2023. With the flexibility added through this collaboration, Metacrystal has approached two of the key OEMs of the field with negotiations towards landing their first high-end customer ongoing. ",
          "Multiwave Technologies has now the know-how to expand its simulation capabilities through the application of machine learning designed within the project. While this was performed for Monte-Carlo simulation, it can be directly applied to the significantly more complex and computationally heavy electromagnetic simulations and through optimization routines develop photonic designs at 1/10th of the computational cost, allowing CPS design of photonics for visible and ultraviolet wavelengths.",
          "Quaisr has now applied their reusable Data Centric Engineering workflows (optimisation and UQ) to a completely new domain adding significant value to its partner SME and demonstrating scalability of its modular components. Quaisr has also developed a web app which is deployed through the Hubcap platform. This has opened up market opportunities and Quaisr has been in talks with photonics multinationals to explore potential use cases. A multinational client in this domain will expand Quaisr's remit to three verticals from its current engagements with two verticals (energy and fast moving consumer goods).",
        ],
      },
    ],
    info: {
      endUsers: [
        {
          name: "Multiwave Metacrystal",
          website: "https://metacrystal.ch/",
        },
        {
          name: "Multiwave Technologies",
          website: "https://multiwave.ch/",
        },
      ],
      techProviders: [
        {
          name: "Quaisr",
          website: "https://www.quaisr.io/",
        },
      ],
      dih: { name: "HUBCAP UK", website: "https://ncl.ac.uk/" },
      domains: [
        "Positron Emission Tomography",
        "Physics simulation",
        "Detector design", 
        "Machine learning",
        "Cloud-based SaaS",
      ],
      impact: [
        "Development of a digital tool that improves productivity and precision for positron emission tomography detector design and development.",
        "Integration of Monte-Carlo with Uncertainty Quantification techniques to reduce the computational load, allowing integration with specialized tools such as optimization routines.",
        "Direct querying of performance-driven indicators that return physical characteristics and dimensions to be constructed.",
        "A physics-agnostic pipeline with potential application in any type of physical design Monte-Carlo simulator."        
      ],
    },
    tryItNowUrl: "https://hubcap-portal.eng.it/",
    videoUrl: "https://www.youtube.com/embed/a0bjaY-NTnc"
  },
];
