// Global list of success stories
// Used both by the list page as well as the story component itself

/*
{
  title: "",
  subtitle: "",
  image: "../../assets/res/images/iStock-1149878152.jpg",
  urlName: "",
  quote: "",
  quoteAttribution: "",
  sections: [
    {
      sectionHeading: "Problem and solution",
      paragraphs: [
        "",
      ],
    },
    {
      sectionHeading: "What we did",
      paragraphs: [
        ""
      ],
    },      
    {
      sectionHeading: "HUBCAP support and platform opportunity",
      paragraphs: [
        "",
        ],
    },
    {
      sectionHeading: "Forward look",
      paragraphs: [
        ""
      ],
    },
  ],
  info: {
    endUsers: [
      {
        name: "",
        website: "",
      }
    ],no
    techProviders: [
      {
        name: "",
        website: "",
      },
    ],
    dih: { name: "", website: "" },
    domains: [
      ""
    ],
    impact: [
      ""        
    ],
  },
  tryItNowUrl: "",
  videoUrl: ""
},
*/

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
   {
    title: "Building Envoronmental Digital Twins to Maximise Farming Potential",
    subtitle: "",
    image: "../../assets/res/images/fiss.png",
    urlName: "farming-intelligence-system-of-systems",
    quote: "The HUBCAP funding allowed out team to further develop the FISS prototype and to successfully demonstrate it within an operational environment, to promote to product towards relevant potential clients and to enable the future commercialisation of the FISS line of products and services.",
    quoteAttribution: "Pedro Branco, Xilbi Sistemas de Informacion SL",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "The Farming Intelligence System of Systems (FISS) took the interaction between farmers and their plantation fields to a new level. It delivered an Environmental Digital Twin and associated Artificial Intelligence (AI) based Decision Support System (DSS) which allows farmers to maximise the benefit of existing operational assets and know-how. This is achieved by connecting, exchanging and analysing the data, via the FISS Cyber-Physical (CPS) platform, from deployed technological existing sub-systems (e.g. Internet of Things(IoT) based sensors, meteorological data, Earth Observation (EO), Remotely Piloted Aircraft Systems (RPAS), photovoltaic powerplants, robotic, and non-robotic field machinery) and to recommend proper actions towards farmers via desktop and mobile interfaces, including via the usage of an Augmented Reality glasses display interface.",
          "The FISS system was designed in agreement with the requirements of the farmer's community and particularly medium to large scale almonds and pistachio's producers. This target user's community main requirements are focused in the need a decision support system that will enable the optimisation of irrigation, fertilization and pesticide application procedures in order to optimise resources usage (e.g. water, fertilizers, energy) and in consequence reduce costs and environmental impact. ",
          "FISS delivers the complete digitalisation of the farming operational environment. The system will enable a more streamlined crop management by means of optimisation of operational and management farming procedures. FISS' target customers are all farmers and farmer organisations"
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "The FISS experiment involved the creation of a Digital Twin simulation environment of an almond plantation field. This Digital Twin integrated data from field Internet of Things enviromental sensors, weather stations, irrigation actuators, satellite imager (Copernicus) and machinery position data. Machine Learning was used to deliver irrigation planning recommendations and to generated solar energy production forecasts.",
          "At the beginning of this HUCAP project the system was at TRL 5: technology validated in relevant environment. During the project activities, and by means of using a Model-Based Design approach, the prototype was further developed, in close collaboration with potential users towards achieving TRL 7: system prototype demonstration in operational environment."
        ],
      },      
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "The HUBCAP funding allow us to implement a very challenging experiment, while demonstrating the system within an operational environment, paving the way towards commercialisation. By means of using the HUBCAP platform we were able to further develop FISS' machine learning algorithms within a shared environment, and to promote our tools and potentially accessing new potential markets.",
          ],
      },
      {
        sectionHeading: "Forward look",
        paragraphs: [
          "We estimate the FISS' global Serviceable Available Market (SAM) to be of €300 million and the European SAM to reach €80 million in 2025. We expect to enter the commercial market in 2023. We expect Return on Investment will be achieved in 2025. Our growth forecast indicators are €1.1M turnover in 2025 with four new job positions, rising to €2.5M and six new job positions by 2027."
        ],
      },
    ],
    info: {
      endUsers: [
        {
          name: "Fotovoltaica Macotera SL",
          website: "https://www.fotovoltaicamacotera.com/",
        }
      ],
      techProviders: [
        {
          name: "Xilbi Sistemas de Informacion SL",
          website: "https://www.xilbi.com/",
        },
        {
          name: "Cyblix Unipessoal Lda.",
          website: "https://www.cyblix.com/",          
        }
      ],
      dih: { name: "HUBCAP Denmark", website: "https://digit.au.dk/" },
      domains: [
        "Smart Farming",
        "Renewable Energy", 
        "Machine Learning", 
        "Internet of Things", 
        "Satellite Imagery"
      ],
      impact: [
        "Creation of a new line of products and services",
        "Optimisation of farming operational procedures", 
        "Forecast and Optimisation of solar energy production"      
      ],
    },
    tryItNowUrl: "",
    videoUrl: "https://www.youtube.com/embed/_aXTQALshWM"
  },
  {
    title: "Advanced Virtual Reality Locomotion Platform Enhanced with AI-based Motion Capture",
    subtitle: "",
    image: "../../assets/res/images/iStock-1321187527.jpg",
    urlName: "locomotion-with-ai-based-motion-capture",
    quote: "HUBCAP’s financial and mentoring support enabled the exploitation of our AI-based motion capture technology for introducing new functionalities in an already innovative product for VR locomotion",
    quoteAttribution: "Anargyros Chatzitofis CEO, Codewheel",
    // "The support provided by HUBCAP enabled vital research on improving the user’s gait on VR locomotion devices by integrating an AI-based MoCap System into the Virtualizer.” – Holger Hager, CEO, Cyberinth "
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "LocoMoCap is a project related to the common vision of Cyberith, a leading provider of professional locomotion devices for virtual reality, and Codewheel, an AI-based motion capture (MoCap) start-up. Its ultimate goal has been the exploitation of Codewheel's AI-based technology for improving Cyberith's Virtualizer products. To overcome the challenges in integrating the sensor-based MoCap subsystem with the Virtualizer's motion platform, we developed LocSim, a simulation tool for rapid-test integration that is now available through the HUBCAP platform.",
          "To improve the physical walking experience on the Virtualizer and increase immersion in Virtual Reality (VR), the Virtualizer's motion platform has been enhanced with an additional information stream, the user's lower-body motion. The provided information enables the systematic analysis of different users' gaits and allows us to better understand the abilities and limitations of Cyberith's current system. Moreover, the data was exploited in a newly created prototype that uses the additionally provided information to improve the Virtualizer's active gait support and to improve the walking movement in VR. The newly gained know-how and the technology developed within the scope of the project, shall serve as a basis for future enhancements of Cyberith's current products and new product developments.",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "The integration of the MoCap technology in the new Virtualizer prototype was initially split in three phases; first we collaboratively developed the LocSim tool that is able to simulate the combination of the two systems and provide a rapid-test environment with natural physics rules and realistic human (avatar) movement on the Virtualizer’s digital twin. Second, using feedback from extensive collaborative sessions between the two companies for the familiarization with each other’s technology, each partner improved the corresponding existing technology towards the integration of the two systems.",
          "Finally, the integration phase followed, which involved the setup of two identical MoCap-enhanced Virtualizers - one per partner's premises. The integration phase lasted approximately 4 months, allowing for intense testing and iterative improvement for both sub-systems. The result of the integration has been evaluated in two parts; the first part focused on acquiring feedback from relevant users in terms of “interest for a new product”, while the second part focused on qualitative and quantitative feedback through user pilots for assessing the performance of the enhanced Virtualizer compared to the original model.", 
          "Based on internal evaluation of the new system, it seems that the motion information stream can be used to dynamically support the gait of the user and to apply dynamic smoothing for improving user experience in VR."
        ],
      },      
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "The support provided by HUBCAP boosted the cooperation in between Codewheel and Cyberith and enabled vital research on improving the user's gait on VR locomotion devices. It enabled the integration of an AI-based MoCap System into the Virtualizer.",
          "The prototype created proves the high potential of integrating such a MoCap system with VR Treadmills and shall serve as a basis for future product developments.",
          "The development of the prototype though required a model-based design logic to enable the remote collaboration for integrating motion capture to the Virtualizer. This would be impossible without the developed LocSim tool, a simulator in the form of a Unity3D asset now hosted by the HUBCAP platform. We hope that the HUBCAP ecosystem will be able to leverage this simulator as we did for creating realistic human avatar movement scenarios on various environments." 
        ],
      },
//      {
//        sectionHeading: "Forward look",
//        paragraphs: [
//          ""
//        ],
//      },
    ],
    info: {
      endUsers: [
        {
          name: "Cyberith ",
          website: "https://www.cyberith.com/",
        }
      ],
      techProviders: [
        {
          name: "Codewheel",
          website: "https://www.codewheel.eu/",
        },
      ],
      dih: { name: "HUBCAP Austria", website: "https://www.v2c2.at/" },
      domains: [
        "Virtual Reality Locomotion Systems", 
        "Motion Capture", 
        "Full-Body Tracking", 
        "Artificial Intelligence", 
        "Virtual Reality", 
        "Cyber-physical Systems"
      ],
      impact: [
        "Systematic analysis of different users gaits",
        "Implemented concrete improvements into a new Virtualizer prototype",
        "A simulation tool for for testing various marker setups prior to physical integration.",
        "A lower-body specific motion capture AI-based system.",
      ],
    },
    tryItNowUrl: "",
    videoUrl: "https://www.youtube.com/embed/4PWi7sQ1pWs"
  }, 
];

