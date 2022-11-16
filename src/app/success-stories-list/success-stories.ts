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
    ]
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
          "Positron Emission Tomography (PET) is a crucial technique widely used for cancer diagnosis and treatment;" +
          " at the heart of PET devices are radiation detectors that use scintillating crystals. The fundamental" +
          " physics is well-understood, and large-scale simulations based around Monte-Carlo methods are employed" +
          " for design by Multiwave Technologies SAS; these correspond to running pseudo-random seeds and perform" +
          " experiments using physics modelling. Depending on the physics environment chosen, they can be expensive" +
          " in terms of simulation time, memory cost and only capture some of the physics directly. With this project" +
          " we use machine learning to reduce simulation and software engineering costs through the Quaisr platform" +
          " to vastly accelerate design process and improve the quality of simulation. In particular, precision of" +
          " performance prediction is improved through uncertainty quantification and supervised machine learning" +
          " techniques; Optimization through objective function applications allows addressing directly questions" +
          " on system physical sensitivity and time response; and finally, a set of pre-chosen and interactive" +
          " visualization tools improves access to understanding of the process and results of simulations for" +
          " the cyber-physical system design engineer. The software developed in this project revolutionises" +
          " design and speeds up prototyping by Multiwave Metacrystal leading to new PET devices, expands the" +
          " simulation capabilities for Mulltiwave Technologies SAS and will also be commercialized for Quaisr." +
          " Furthermore, the developed tools can be directly applicable to different detector design, or even" +
          " expanded easily to include any type of Monte-Carlo simulation-based problems.",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "Combining multi-disciplinary expertise, from data and machine learning to computational and applied physics," +
          " within this project we developed Monte-Carlo (MC) simulators using variable physics and detector designs," +
          " towards the time-optimized scintillation-based radiation detector application. This simulation starts by" +
          " generating of pseudo-random seeds that address a stochastic pipeline of particle creation and interactions." +
          " The computational complexity of the process depends on the geometric model of the simulated system, but" +
          " most importantly on the used physics. For this type of detector, we require both nuclear physics and" +
          " optical photons. In total, every experiment includes 10s of thousands of particles and close to a million" +
          " particle interactions, intensifying with the addition of optics. We probed how different ML approaches," +
          " from supervised ML to more complex uncertainty quantification approaches fit in the different simulated" +
          " problems, with the purpose to reduce the requirement for statistics when running MC, or even scrapping" +
          " the need for MC use altogether. The pipeline was initially built using only nuclear physics and is being" +
          " benchmarked for the addition of optics, to also show its versatility. We have demonstrated reduction to" +
          " the computational load that is so significant, that for the first time we can use the MC-UQ pipeline" +
          " embedded in tools such as optimization loops. The system can run on the cloud and users can design " +
          "geometries, choose physics and run experiments directly online through the HUBCAP platform. In application," +
          " we designed a new material combination, replicating the behaviour of the golden-standard scintillator, " +
          "at a third of the cost."
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "This consortium came to be in order to apply for this particular project, offering an important incentive" +
          " to bring together specialists of significantly variable fields, in the cyber and physical domains. " +
          "The requirements of submission of the program helped us develop and define the potential and capabilities" +
          " of this consortium, while allowing us to further integrate new concepts such as Cyber-physical systems" +
          " and model based design. Apart from the obvious use of HUBCAP funding, which allowed this consortium to " +
          "exist, we were able to profit from the continuous guidance and interaction with business and academic" +
          " specialists, that supported and interacted with the consortium, helping with issues ranging from simulation" +
          " specifications to such as resource and material allocation and time budgeting. Finally, the implementation" +
          " of an accessible web based demonstrator through the sandbox environment of HUBCAP allowed easy user" +
          " testing and interactions within the consortium.",
          ],
      },
      {
        sectionHeading: "Forward look",
        paragraphs: [
          "Multiwave Metacrystal has now developed an optimized design based on the simulated dimensions to build" +
          " detectors that replicate the state of the art specifications for a fraction of the cost. As such," +
          " within this year the development process was accelerated two-fold, bringing the company closer to its" +
          " MVP design based on inexpensive scintillators to be commercialised in 2023. With the flexibility added" +
          " through this collaboration, Metacrystal has approached two of the key OEMs of the field with negotiations" +
          " towards landing their first high-end customer ongoing. ",
          "Multiwave Technologies has now the know-how to expand its simulation capabilities through the application" +
          " of machine learning designed within the project. While this was performed for Monte-Carlo simulation," +
          " it can be directly applied to the significantly more complex and computationally heavy electromagnetic" +
          " simulations and through optimization routines develop photonic designs at 1/10th of the computational" +
          " cost, allowing CPS design of photonics for visible and ultraviolet wavelengths.",
          "Quaisr has now applied their reusable Data Centric Engineering workflows (optimisation and UQ) to a" +
          " completely new domain adding significant value to its partner SME and demonstrating scalability of " +
          "its modular components. Quaisr has also developed a web app which is deployed through the Hubcap platform." +
          " This has opened up market opportunities and Quaisr has been in talks with photonics multinationals to" +
          " explore potential use cases. A multinational client in this domain will expand Quaisr's remit to three" +
          " verticals from its current engagements with two verticals (energy and fast moving consumer goods).",
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
          "The Farming Intelligence System of Systems (FISS) took the interaction between farmers and their plantation" +
          " fields to a new level. It delivered an Environmental Digital Twin and associated Artificial Intelligence" +
          " (AI) based Decision Support System (DSS) which allows farmers to maximise the benefit of existing" +
          " operational assets and know-how. This is achieved by connecting, exchanging and analysing the data," +
          " via the FISS Cyber-Physical (CPS) platform, from deployed technological existing sub-systems" +
          " (e.g. Internet of Things(IoT) based sensors, meteorological data, Earth Observation (EO), Remotely Piloted" +
          " Aircraft Systems (RPAS), photovoltaic powerplants, robotic, and non-robotic field machinery) and to" +
          " recommend proper actions towards farmers via desktop and mobile interfaces, including via the usage of an" +
          " Augmented Reality glasses display interface.",
          "The FISS system was designed in agreement with the requirements of the farmer's community and particularly" +
          " medium to large scale almonds and pistachio's producers. This target user's community main requirements" +
          " are focused in the need a decision support system that will enable the optimisation of irrigation," +
          " fertilization and pesticide application procedures in order to optimise resources usage (e.g. water," +
          " fertilizers, energy) and in consequence reduce costs and environmental impact. ",
          "FISS delivers the complete digitalisation of the farming operational environment. The system will enable" +
          " a more streamlined crop management by means of optimisation of operational and management" +
          " farming procedures. FISS' target customers are all farmers and farmer organisations."
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "The FISS experiment involved the creation of a Digital Twin simulation environment of an almond plantation" +
          " field. This Digital Twin integrated data from field Internet of Things enviromental sensors, weather" +
          " stations, irrigation actuators, satellite imager (Copernicus) and machinery position data. Machine" +
          " Learning was used to deliver irrigation planning recommendations and to generated solar energy " +
          "production forecasts.",
          "At the beginning of this HUCAP project the system was at TRL 5: technology validated in relevant " +
          "environment. During the project activities, and by means of using a Model-Based Design approach, " +
          "the prototype was further developed, in close collaboration with potential users towards achieving " +
          "TRL 7: system prototype demonstration in operational environment."
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "The HUBCAP funding allow us to implement a very challenging experiment, while demonstrating the system" +
          " within an operational environment, paving the way towards commercialisation. By means of using the" +
          " HUBCAP platform we were able to further develop FISS' machine learning algorithms within a shared" +
          " environment, and to promote our tools and potentially accessing new potential markets.",
          ],
      },
      {
        sectionHeading: "Forward look",
        paragraphs: [
          "We estimate the FISS' global Serviceable Available Market (SAM) to be of €300 million and the European" +
          " SAM to reach €80 million in 2025. We expect to enter the commercial market in 2023. We expect Return" +
          " on Investment will be achieved in 2025. Our growth forecast indicators are €1.1M turnover in 2025" +
          " with four new job positions, rising to €2.5M and six new job positions by 2027."
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
    image: "../../assets/res/images/Screenshot_LocoMoCap.jpg",
    urlName: "locomotion-with-ai-based-motion-capture",
    quote: "HUBCAP’s financial and mentoring support enabled the exploitation of our AI-based motion capture technology for introducing new functionalities in an already innovative product for VR locomotion",
    quoteAttribution: "Anargyros Chatzitofis CEO, Codewheel",

    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "LocoMoCap is a project related to the common vision of Cyberith, a leading provider of professional" +
          " locomotion devices for virtual reality, and Codewheel, an AI-based motion capture (MoCap) start-up." +
          " Its ultimate goal has been the exploitation of Codewheel's AI-based technology for improving Cyberith's" +
          " Virtualizer products. To overcome the challenges in integrating the sensor-based MoCap subsystem with the" +
          " Virtualizer's motion platform, we developed LocSim, a simulation tool for rapid-test integration that is" +
          " now available through the HUBCAP platform.",
          "To improve the physical walking experience on the Virtualizer and increase immersion in" +
          " Virtual Reality (VR), the Virtualizer's motion platform has been enhanced with an additional" +
          " information stream, the user's lower-body motion. The provided information enables the systematic " +
          "analysis of different users' gaits and allows us to better understand the abilities and limitations" +
          " of Cyberith's current system. Moreover, the data was exploited in a newly created prototype that uses" +
          " the additionally provided information to improve the Virtualizer's active gait support and to improve" +
          " the walking movement in VR. The newly gained know-how and the technology developed within the scope of" +
          " the project, shall serve as a basis for future enhancements of Cyberith's current products and new " +
          "product developments.",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "The integration of the MoCap technology in the new Virtualizer prototype was initially split in three" +
          " phases; first we collaboratively developed the LocSim tool that is able to simulate the combination" +
          " of the two systems and provide a rapid-test environment with natural physics rules and realistic human" +
          " (avatar) movement on the Virtualizer’s digital twin. Second, using feedback from extensive collaborative" +
          " sessions between the two companies for the familiarization with each other’s technology, each partner" +
          " improved the corresponding existing technology towards the integration of the two systems.",
          "Finally, the integration phase followed, which involved the setup of two identical MoCap-enhanced " +
          "Virtualizers - one per partner's premises. The integration phase lasted approximately 4 months, " +
          "allowing for intense testing and iterative improvement for both sub-systems. The result of the " +
          "integration has been evaluated in two parts; the first part focused on acquiring feedback from " +
          "relevant users in terms of “interest for a new product”, while the second part focused on " +
          "qualitative and quantitative feedback through user pilots for assessing the performance of the " +
          "enhanced Virtualizer compared to the original model.",
          "Based on internal evaluation of the new system, it seems that the motion information stream can be" +
          " used to dynamically support the gait of the user and to apply dynamic smoothing for improving user experience in VR."
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "The support provided by HUBCAP boosted the cooperation in between Codewheel and Cyberith and enabled " +
          "vital research on improving the user's gait on VR locomotion devices. It enabled the integration of an " +
          "AI-based MoCap System into the Virtualizer.",
          "The prototype created proves the high potential of integrating such a MoCap system with VR Treadmills " +
          "and shall serve as a basis for future product developments.",
          "The development of the prototype though required a model-based design logic to enable the remote " +
          "collaboration for integrating motion capture to the Virtualizer. This would be impossible without the " +
          "developed LocSim tool, a simulator in the form of a Unity3D asset now hosted by the HUBCAP platform. " +
          "We hope that the HUBCAP ecosystem will be able to leverage this simulator as we did for creating " +
          "realistic human avatar movement scenarios on various environments."
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
   {
    title: "CPS-based and Data-driven Modeling, Monitoring and Improvement of the Eco-friendly Quality",
    subtitle: "Pave the way for a new generation of the quality monitoring services, which are focused not only on the processes performances (KPIs), but also on the eco-friendliness of the process, what we call eco-friendly process quality.",
    image: "../../assets/res/images/CPS-based data-driven modeling.png",
    urlName: "cps-based-and-data-driven-modeling",
    quote: "Easy to deploy and affordable (software-hardware) solution for understanding the factors which impact the waste (energy, emission) based on a novel, AI-based analysis of past data.",
    quoteAttribution: "Nenad Stojanovic, Nissatech",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "Ensuring process quality and efficiency is especially critical for manufacturing SMEs that cannot ignore" +
          " the strategic implications of efficient process management and quality control for their competitive" +
          " position. However, it appears that manufacturing SMEs have been very slow in implementing formal quality" +
          " models and process monitoring tools, due to the need for expert modelling and analysis (expensive and time consuming).",
          "The main goal is to develop (based on HUBCUP support) a CPS-based infrastructure enabling comprehensive" +
          " monitoring, analysis and improvement of the eco-friendly quality of the manufacturing process, through" +
          " focusing on the three main factors of environmental impact: Energy, Emission and Anomalies (Waste)," +
          " measured using corresponding sensors and cameras. Meaning, that the developed system monitors the " +
          "eco-quality of these processes in the context of the given manufacturing process and use complex " +
          "behaviour understanding to react in situations when some of the environmental aspects will be changing (outliers, instability).",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "The experiment is based on the assumption that non-invasive sensing of a machine/line can enable the" +
          " collection of very valuable data for understanding the process behaviour in the context of waste" +
          " reduction. Indeed, advancements in retrofitting/modernisation of machines in the context of Industry 4.0" +
          " are opening new opportunities for exploiting the value of data (independently of the machine vendors)." +
          " EMDIP (the end user) has also installed such sensors, including cutting machines, mainly for getting daily reports" +
          " of energy consumption. Moreover, the plasma cutting process can introduce a lot of environmental issues.",
          "A developed system enables deeper analysis of the data. The challenge is that the data is big, complex," +
          " multidimensional and the relation between energy consumption and quality should be discovered from data." +
          " The solution is based on the HUBCUP asset D3Scan, Deep Data Diagnostics through Cognitive Scanning.",
          "The system consists of two main elements:",
          "1) The collection of not only the production data, but also energy, " +
          "emission and waste related data.",
          "2) Complex modelling of their (cor)relations in order to understand" +
          " when some “small” variations in process data will indicate “big” problems in the environment-related" +
          " quality aspects. The goal is to enable proactive detection of problems and to avoid" +
          " environment-related effects from escalating."
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "There are several advantages of using HUBCAP support and platform. The most important is that HUBCUP" +
          " enabled this risky innovation activity. Firstly, HUBCAP supported the collaborative work between three" +
          " parties with the complementary profiles (two more technical and one industry company), required for the" +
          " development of this complex service. Secondly, the HUBCAP platform offered an asset that provides complex " +
          "analyses of manufacturing data (D3Scan, Deep Data Diagnostics through Cognitive Scanning), which was" +
          " crucial for the development of the entire solution. Lastly, the mentoring process was organized in a very" +
          " efficient way, monitoring the focus of the work and keeping it on the defined KPIs and ensuring" +
          " continuous progress.",
        ],
      },

    ],
    info: {
      endUsers: [
        {
          name: "Nissatech",
          website: "https://www.nissatech.com",
        }
      ],
      techProviders: [
        {
          name: "EMDIP",
          website: "https://www.emdip.com",
        },
      ],
      dih: { name: "HUBCAP Denmark", website: "https://digit.au.dk/" },
      domains: [
        "Process improvement",
        "Quality Control",
        "Energy consumption",
        "Environment pollution"
      ],
      impact: [
        "Quality monitoring which combines the quality of the product and eco-friendliness of the process.",
        "Early discovery of the situations which can negatively impact the environment.",
        "Understanding the factors which influence energy consumption and environment pollution.",
        "Discovering the potential for improving eco-friendliness of a process.",
      ],
    },
    tryItNowUrl: "",
    videoUrl: "https://www.youtube.com/embed/02mTbFTl9SQ"
  },
   {
    title: "Improving Fuel Efficiency with Optimised Energy Models",
    subtitle: "Optimised Management of Fuel Tank Trucks",
    image: "../../assets/res/images/SimTank.png",
    urlName: "simtank",
    quote: "Thanks to the HUBCAP INNOVATE funding tool, our company was able to build novel energy models for commercial hardware used by the oil industries and validate a set of optimisation services that can further be exploited commercially as a product.",
    quoteAttribution: "Vassilis Papataxiarhis, Coordinator of the SimTank project",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "SimTank is inspired by the oil industry's need for energy-efficient monitoring of their fuel tank " +
          "trucks. Current solutions are based on sensors deployed on fuel tank trucks that perform sub-optimally " +
          "in terms of energy consumption. The ordering of monitoring task execution is static, the configuration " +
          "of task parameters is performed only empirically, and whenever a sensor needs to change the new " +
          "configuration is not trivial. As a result, the sensors deployed upon the trucks have a limited lifetime " +
          "due to suboptimal battery usage that, in turn, results in a need for frequent maintenance " +
          "(e.g., change of battery). Maintenance stops are not time-aligned and require a lot of " +
          "time (usually a truck needs to stay inactive for days). All those problems result in a huge loss of " +
          "time and money for the industry. SimTank fills those gaps by building models and algorithmic solutions " +
          "that accurately monitor the total energy spent by the on-board system and maximize the lifetime of the " +
          "deployment used for monitoring purposes.",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "SimTank built energy models for complex tank truck sensors and combinations of them in several truck " +
          "compartments. In particular, three types of sensor nodes were modeled:",
          "A) sensors put on the manhole covers (sensor_M).",
          "B) sensors put on the air tube controlling the foot valve (sensor_F).",
          "C) sensors placed on the fuel discharge pipe (sensor_S).",
          "Building on top of those new digital models, the project " +
          "developed an energy simulator to calculate the energy consumption of the deployment according to the " +
          "configuration of sensors and the system in general. Finally, a set of optimisation services were " +
          "developed to facilitate both (a) the configuration of parameters used for the execution of tasks, " +
          "and (b) the ordering of task execution. In particular, a greedy algorithm was developed to produce " +
          "near-optimal solutions (in polynomial time) while a linear programming algorithm was used to recommend " +
          "exact configurations (in exponential time)."
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "HUBCAP support was essential for helping Intellia ICT and METRICON to reach the project objectives. " +
          "First, the solutions that were built in SimTank were developed from scratch (digital models, simulator, " +
          "optimisation services). This fact made a potential funding by own resources of companies not feasible in " +
          "practice. HUBCAP provided the financial resources required to support the development of such a " +
          "time-demanding solution as the one envisaged by SimTank. Also, the regular monitoring offered by the " +
          "project Mentors (FBK and fortiss) proved to be effective and critical for the given complexity of the " +
          "project. Finally, HUBCAP provided a cloud platform to host the software built by the project and a " +
          "Marketplace for commercial exploitation. The former helped the project avoid additional costs for " +
          "hosting the software while the latter helped the project get in touch with an already established " +
          "ecosystem consisting of a wide range of stakeholders and potential customers.",
        ],
      },
      {
        sectionHeading: "Forward look",
        paragraphs: [
          "In SimTank, we plan to follow a fee for services pricing model. Currently, each real deployment is " +
          "charged per truck. Assuming a starting burn rate of ten thousand euros per month and a gradual " +
          "usage-based pricing policy we will reach a positive balance in the second year with an estimated " +
          "gain of four hundred fifty thousand euros in the year after. We plan to have an estimated fleet of " +
          "5000 trucks for SimTank deployments within the next five years. Considering a charging rate of 10% " +
          "in the total cost of each deployment we will reach a revenue of 3 million euros in five years from now. " +
          "Our go to market strategy is built upon direct strategic partnerships with existing clients in the oil " +
          "industry and by approaching key market players with targeted campaigns. It is worth mentioning that we " +
          "have already reached an agreement with our first beta client in Greece. "
        ],
      },
    ],
    info: {
      endUsers: [
        {
          name: "Intellia ICT",
          website: "https://www.intellia.gr/",
        }
      ],
      techProviders: [
        {
          name: "Metricon",
          website: "https://metricon.gr/ ",
        },
      ],
      dih: { name: "HUBCAP Italy", website: "https://www.polimi.it" },
      domains: [
        "Energy consumption",
        "Tank trucks monitoring",
        "Combinatorial optimisation",
        "Linear programming",
        "Near-optimal solutions"
      ],
      impact: [
        "Deliver optimal configuration of on-board deployments on existing tank truck fleets.",
        "Increase the quality of services in its existing clients in the oil industry.",
        "Attract new clients in the oil industry domain.",
        "Scale-up by testing different configurations in other application domains (e.g., sealing of food delivery trucks)."
      ],
    },
    tryItNowUrl: "",
    videoUrl: "https://www.youtube.com/embed/HqVvfhZUm5w"
  },
   {
    title: "Model-based Design of the Public Transport Operation Run by Zero-emissions Buses",
    subtitle: "",
    image: "../../assets/res/images/Zero_Emission_Public_Transport.png",
    urlName: "electrification-of-public-transport",
    quote: "Hubcap Funding enabled us to justify our place in the public transport value chain, which is much more than shooting blindly.",
    quoteAttribution: "Juraj Majera, Tirn Technology",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "Cooperation project of consortia has developed model-based software that precisely simulates e-bus operation thanks to the integration of real-world data. This approach allows shortening the planning phase and significantly reducing the costs upfront. E-bus simulator is a new MBD tool that has been integrated into the HUBCAP platform.\n" +
          "Our scope has been divided into 2 sprints. Mainly our scope was built around these pillars:",
          "— Understanding the adopter’s operation, timetables and actual state of the bus fleet.",
          "— Defining initial requirements for the new electric bus.",
          "— Understanding current and future goals defined by the local municipality.",
          "— Processing of GTFS data provided by the client.",
          "— Communication with the bus manufacturers and getting data sheets.",
          "— Parametrization of the selected electric bus models.",
          "— Visualisation of the bus operation based on provided data.",
          "— Data assignment of the route details based on the API calls.",
          "— Running up to 180 scenarios of 4 bus lines.",
          "— Analyzing the influence of all the parameters.",
          "— Ingesting economic parameters and prices(Capex/OPEX).",
          "— Presenting actionable steps for the electrification of the SKAND’s operation.",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "Within Sprint 1, we had visualised the bus schedule using the GTFS format. Based on real world-data from " +
          "third-party providers, which was assigned successfully to the operated routes. Next step was to build a " +
          "mathematical model of an electric bus. In the second sprint, we simulated more than 180 " +
          "scenarios, built the heads up indication of an operation schedule adjusted for an electric bus and " +
          "developed a total cost ownership report based on inputs.\n" +
          "In conclusion, the transport agency had received a powerful decision tool as a result of simulation of " +
          "its existing bus operation schedule operated by electric bus models. The aim was to validate their " +
          "operability, precisely predict real energy consumption, optimise the battery capacity and plan the " +
          "charging infrastructure with a focus to minimise the total cost of ownership and CO2 generation.\n"
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "Provided us the space to perform and validate the experiment." +
          "Funding from Hubcap enabled Tirn Technology to make multiple iterations of the product versions with " +
          "the adopter SKAND Skalica in order to improve the product and make it ready for the market." +
          "The SKAND Skalica has received not only a powerful tool to ease the adoption of e-buses but also the " +
          "knowledge and capabilities of model-based design. " +
          "The outcomes of the experiment will definitely provide us momentum to access new markets and reach " +
          "out to new potential leads, hopefully clients.",
        ],
      },
      {
        sectionHeading: "Forward look",
        paragraphs: [
          "Improvement of business conditions can be divided into two branches:",
          "From a financial point of view we have been able to maintain business operational and keep the " +
          "sales or R&D activities quite active. Hubcap enabled us to prepare for another investment round, by " +
          "building traction in product, understanding customer needs and quantifying the added value of the solution.",
          "From a product point of view we were able to further improve the product from a customer path. \n" +
          "These ingredients are necessary for a proper execution. We have gained the needed traction and currently are" +
          " involved in other pilots e.g. GoWhippet from Cambridge and Tugsal in Barcelona. \n"
        ],
      },
    ],
    info: {
      endUsers: [
        {
          name: "Tirn Technology",
          website: "https://tirntechnology.com/",
        }
      ],
      techProviders: [
        {
          name: "SKAND",
          website: "http://www.skand.sk/",
        },
      ],
      dih: { name: "HUBCAP Austria", website: "https://www.v2c2.at/" },
      domains: [
        "Smart Transports/Mobility",
        "Simulation services",
      ],
      impact: [
        "Simulation tool of existing bus operation schedule with electric buses and prepare a MBD-driven plan for electrifying the operation.",
        "Accelerate the transition to sustainable public transportation.",
        "Elimination of the carbon footprint created usually during physical testing.",
      ],
    },
    tryItNowUrl: "",
    videoUrl: "https://www.youtube.com/embed/wpCED05SWtw"
  },
   {
    title: "Exploiting Cloud Computing and Artificial Intelligence Technology \n" +
      "for Hydrogen Storage & Transportation Towards Net Zero by 2050",
    subtitle: " Next-generation hydrogen \n" +
      "planning using AI and cloud computing",
    image: "../../assets/res/images/h2ai.png",
    urlName: "ai-hydrogen-storage-towards-net-zero",
    quote: "HUBCAP has funded the first project for improving design for hydrogen energy infrastructure using \n" +
      "HPC and machine-learning-accelerated digital tools.",
    quoteAttribution: "Kostas Lyras, MultiFluidX",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "The scope of this project was to develop a viable solution for simulating liquid hydrogen \n" +
          "transportation for hydrogen based energy systems. The solution in this case was to combine \n" +
          "traditional methods of performing simulations such as computational fluid dynamics (CFD) with \n" +
          "machine learning (ML) and simulate hydrogen based scenarios faster and cheaper than the current \n" +
          "solutions on the market. H2AI aims to be the first EU based project that combines CFD and ML in \n" +
          "handling hydrogen and improve the competitiveness of the EU industries by providing a fast and \n" +
          "accurate simulation tool.",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "Energy security and decarbonisation are top priorities of the EU which supports numerous \n" +
          "changes across the energy sector with the use of hydrogen being one of the biggest ones. This \n" +
          "project explored the deployment of \n" +
          "computational fluid dynamics (CFD) with machine learning (ML) that could lead the next-generation designing of hydrogen-based energy systems.",

          "Therefore, with the use of these two state-of-the-art technologies the H2AI project has \n" +
          "developed a workflow for using computer simulations for performing \"virtual experiments\". \n" +
          "The outcomes of these simulations can be used for instant predictions and ultimately arrive \n" +
          "at the optimum product, which will be both safe and perform optimally.",

          "Using the simulator MPflow, a large collection of these scenarios was generated using the vast \n" +
          "capabilities of the Kaleidosim platform.",

          "This is the very first software to combine CFD and ML for hydrogen predictions. The \n" +
          "development and successful completion of the H2AI project will ensure that SMEs across the \n" +
          "EU engaged in hydrogen storage and transportation have access to a digital solution that is \n" +
          "easy to use at a cheaper cost than the nearest competitors.",

          "Adoption of this software will enable a range of SMEs to model wide ranging hydrogen storage \n" +
          "and transportation scenarios in the cloud and ensure enhanced safety and improved efficiency \n" +
          "for these scenarios. Ultimately, this will provide an impetus to the adoption of a hydrogen as \n" +
          "a sustainable source of energy thereby meeting the scope of the Paris Agreement's \n" +
          "temperature goals."
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "HUBCAP has provided us with the support and funding for utilising and testing and a new cyber physical \n" +
          "system for hydrogen, the first of its kind. Thanks to the constant engagement and support of the DIH \n" +
          "and the whole HUBCAP team, both companies in the H2AI project were able to advance the \n" +
          "technology of computational fluid dynamics simulations. It is a unique computational tool for \n" +
          "optimising hydrogen production and application in various industries.",

          "Through this combined effort, the H2AI experiment aims to be the first EU project with the specific \n" +
          "goal of integrating AI with traditional physics-based Computer Aided Engineering in handling hydrogen \n" +
          "and improve the competitiveness of the EU industries. Thus, being part of the HUBCAP ecosystem, will \n" +
          "help both participants to further engage with this new technology, connecting with key-players in the \n" +
          "EU market and being part of the pioneering long-term sustainable plan of HUBCAP. The latter is of \n" +
          "extreme importance since it is expected to lead to synergies that will allow for more opportunities and \n" +
          "additional funding from similar calls. The dissemination of the outcomes of the H2AI project through \n" +
          "conference participation and future publications, generously supported by HUBCAP, is also a huge \n" +
          "boost for both companies involved that will further increase the overall impact of the project."
        ],
      },
      {
        sectionHeading: "Forward look",
        paragraphs: [
          "Being part of HUBCAP has increased our companies’ visibility and marketing providing us with \n" +
          "interesting opportunities for further development. \n" +
          "Our participation in HUBCAP has helped us be part to interesting industrial EU consortia for hydrogen \n" +
          "allowing us to form allies for allocating additional funding and for improving the computation tools our \n" +
          "companies develop. Although, the long timeline of this funding opportunities does not allow us to \n" +
          "provide exact estimations of the sales or income, it is expected that these projects will lead us to \n" +
          "increase by at least 50% our sales for next year. It is also anticipated that being part to new EU research\n" +
          "and innovation projects will allow us to increase market presence in the EU and increase our \n" +
          "manpower by 50%."
        ],
      },
    ],
    info: {
      endUsers: [
        {
          name: "MultiFluidX",
          website: "https://multifluidx.com/",
        }
      ],
      techProviders: [
        {
          name: "Kaleidosim Technologies",
          website: "https://kaleidosim.com/",
        },
      ],
      dih: { name: "HUBCAP United Kingdom", website: "https://www.ncl.ac.uk/" },
      domains: [
        "Smart energy",
        "Engineering",
        "Hydrogen",
        "Low/zero carbon communities",
        "High-Performance Computing"
      ],
      impact: [
        "Both companies have advanced their digital tools thanks to HUBCAP.",

        "The provider has extended their cloud computing technology to allow dedicated simulation \n" +
        "tools in MPflow® for hydrogen calculations.",

        "The adopter has upgraded their digitalisation level though the unique MSCC (Massive \n" +
        "Simultaneous Cloud Computing) of KaleidoSim OpenFoam ®.",

        "The integration of machine-learning in MPflow® using the unique hydrogen data collected, \n" +
        "have set the groundwork for more advances in the field of computer simulations in process \n" +
        "engineering."
      ],
    },
    tryItNowUrl: "",
    videoUrl: ""
  },
   {
    title: "Enhancing a Gas Compressors Performance Utilizing the MODELTA Platform",
    subtitle: "Accelerating the experiment process of a gas compressor’s prototype, called SARC, using MODELTA platform.",
    image: "../../assets/res/images/SARCproject.png",
    urlName: "sarc-project",
    quote: "MBD can substantially facilitate the functionality optimization of physical assets. We observed through HUBCAP that the steps followed to build MBD really give a thorough understanding of the asset, preparing it for rapid development and prototyping. Furthermore, the critical parameters allocation and their control can improve performance and decrease cost.\n" +
      "Our advice as DELTA MPIS is for SMEs to get to know Model-Based Design and IoT in order to enter the rapidly growing sector of Cyber Physical Systems and also make their product and services up to speed with industry 4.0, smart manufacturing and Digital Twinning\n",
    quoteAttribution: "Dimitrios Dragatogiannis, DELTA-MPIS",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "The project aims at the development of a Model-Based Design enabled Cyber-Physical System for a novel" +
          " compressor prototype, by DELTA-MPIS (Technology Provider). It includes sensing of critical parameters" +
          " (temperature, pressure output, angular motion) for the operation and performance of a SARC compressor " +
          "(developed by theSARMproject) and utilization of those quanlities for real-time monitoring and input " +
          "for Model-Based Design. For the efficient project implementation a web-platform was developed, MODELTA, " +
          "that provides IoT monitoring of sensor measurements and prediction of the performance of the physical asset. " +
          "The prediction is achieved with a combination of MBD with Simulink and CFD and FEA multiphysics " +
          "calculations, to accurately describe the operation of the compressor. With the aid of MODELTA, the" +
          " prototyping process was enhanced (rapid prototyping) and an optimized prototype was manufactured. ",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "During the experiment, a set of activities was scheduled for the successful implementation of the project. This includes the following subtasks:\n",
          "SPRINT 1:\n",
          "— Design of experiment\n",
          "— First steps of experimental campaign\n",
          "— Computational Fluid Dynamics \n",
          "— Finite Element Analysis for structural optimization of the compressor\n",
          "— Development of web-based platform MODELTA\n",
          "— Implementation of Model-Based Design to describe the operation of SARC.\n",
          "SPRINT 2:\n",
          "— Comparison of simulation with experimental results \n",
          "— Calibration of experimental setup\n",
          "— Prototype design improvements \n",
          "— Integration of MODELTA in HUBCAP platform \n",
          "— Cost evaluation for the sustainability of MODELTA adoption in other applications \n",
          "— Dissemination activities \n",
          "— Integration of MODELTA to relevant marketplaces\n",
          "— Document preparation \n",
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "HUBCAP provided funding for the development of a tailor-made and easy-to-use CPS support web-platform" +
          " and for the rapid prototyping through MBD of SARC. In this way, the Adopter SME came to the realisation" +
          " of the benefits of the creation of a Cyber-Physical System, not only for the development of the physical" +
          " asset, but also to support its actual operation. The consortium, in close cooperation with the DIH" +
          " assigned to the project by HUBCAP (FDK), were able to structure the characteristics of their respective" +
          " services and products according to the needs of a state of the art digital Marketplace. The integration" +
          " of MODELTA to the HUBCAP platform gave insight on competition with other CPS solutions, in the spirit of " +
          "fostering collaboration with other participants as well. Furthermore, the opportunity to add a" +
          " try-it-now feature to the service was considered very important by DELTA-MPIS, in order to receive" +
          " creative feedback for the MODELTA application.",
        ],
      },
      {
        sectionHeading: "Forward look",
        paragraphs: [
          "DELTA MPIS has developed MODELTA, a web platform that expands the services of the company. " +
          "The platform supports IoT functionalities, a proven methodology for sensor connections with " +
          "embedded devices and the upload of measurements to be available for the user at any time. " +
          "The major benefit for DELTA MPIS is the display of an established tool for prediction and " +
          "monitoring that can attract future clients for the company. This has been validated by the " +
          "initiation of two other projects, one commercial and one for research purposes, both utilizing " +
          "MODELTA functionalities.\n" +
          "theSARMproject (Adopter SME) has received substantial input regarding possible improvements of " +
          "SARC compressor. In fact, those improvements have led to an approximate 25% decrease of mass for " +
          "the finalized prototype, leading to a corresponding cost decrease. The efficiency improvement and " +
          "the manufacturing of an updated prototype led to a TRL5 edition of the device. This created a very " +
          "strong asset for theSARMproject to go to the next funding opportunity and eventually to the market. " +
          "The steps followed for the experimental campaign have proven critical for the development of other " +
          "prototypes for the company, namely a rotary internal combustion engine (SARM), an expander (SARX) " +
          "and a pump (SARP) based on the novelty of the rotary working principle.\n"
        ],
      },
    ],
    info: {
      endUsers: [
        {
          name: "theSARMproject",
          website: "https://www.thesarmproject.com",
        }
      ],
      techProviders: [
        {
          name: "DELTA MPIS",
          website: "https://www.delta-ms.gr",
        },
      ],
      dih: { name: "HUBCAP Italy", website: "https://www.fbk.eu/en/" },
      domains: [
        "IoT",
        "Real-time monitoring",
        "MBD",
        "Multiphysics",
        "CAD",
        "Simulink",
      ],
      impact: [
        "MODELTA PaaS (Platform-as-a-Service) was integrated to DELTA-MPIS set of services. It can support CPS development for both real-time monitoring and prediction.",
        "DELTA—MPIS has already created a pitch deck for MODELTA, with successful results; Even before the ending of the HUBCAP sprint 2, two other projects (one commercial and one research) have initiated, utilizing MODELTA web-platform.",
        "theSARMproject has reached TRL5 for SARC prototype; the prototype was manufactured and demonstrated in terms of effective sensing with optimized sensor selections.",
        "theSARMproject have an optimized version of SARC with better performance and reliability, and decreased costs for manufacturing and operation.",
      ],
    },
    tryItNowUrl: "",
    videoUrl: ""
  },
   {
    title: "SmarTexMod - a tool for design, development and prototyping of smart clothing items.",
    subtitle: "Enhancement of the efficiency in the design, development and prototyping process for smart clothing items. ",
    image: "../../assets/res/images/iStock-1149878152.jpg",
    urlName: "smartexmod",
    quote: "With HUBCAP, both companies received the opportunity to implement the project with model-based assets by supporting the upcoming new field of smart clothing",
    quoteAttribution: "Vulpes Electronics GmbH",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "SMARTEXMOD is an efficiency tool providing pre-build assets for design, development and " +
          "prototyping of smart clothing items.",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "Within the project the team prioritized and assessed the items which are required to create smart " +
          "clothing. The team created 10 parametrized assets and provided the distribution option through the" +
          " website https://smartexmod.com/. The user has the option to choose between different assets," +
          " parameters and data files to download the parametrized models for integration into " +
          " clothing design software or for rapid prototyping. The model simulation has been done with " +
          "the Clo3D design software as well as with slicer cura and ultimaker machine / makerbot rapid prototyping. "
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "With HUBCAP, both companies received the opportunity to implement the project with model-based assets " +
          "by supporting the upcoming new field of smart clothing. The smart textile segment required a " +
          "multi-disciplinarian approach involving different expertise from garments, electronics, " +
          "mechanics and the IT field. With the HUBCAP platform the consortium was able to create a suitable " +
          "tool for supporting the multidisciplinary design and development process, resulting in increased efficiency.",
        ],
      },
      {
        sectionHeading: "Forward look",
        paragraphs: [
          "HUBCAP enabled both companies to make the groundwork for the parametrized models. So far, the models " +
          "are in the “alpha stage” and would be further developed in the next steps to reach higher maturity. " +
          "Further marketing activities would be required to promote SMARTEXMOD further. "
        ],
      },
    ],
    info: {
      endUsers: [
        {
          name: "Vulpes Electronics GmbH",
          website: "https://www.vulpes-electronics.net ",
        }
      ],
      techProviders: [
        {
          name: "Intelectronics",
          website: "https://www.dynaback-tshirt.com/",
        },
      ],
      dih: { name: "HUBCAP Sweden", website: "https://www.kth.se/en" },
      domains: [
        "Smart Clothing",
        "Prototyping",
        "Smart Clothing Design",
        "Smart Textiles",
      ],
      impact: [
        "Reduction of design time for clothing designers.",
        "Increased clarity of instructions and enhanced efficiency of design, development and pre-production workflows.",
        "Visualization of hardware components.",
        "Improved cross-function understanding of textile / garments, electronics and mechanical components to accelerate the design and development process.",
        "Decreased the rapid prototyping time of hardware.",
      ],
    },
    tryItNowUrl: "",
    videoUrl: "https://www.youtube.com/embed/L3VeIj6xq0A"
  },
   {
    title: "Flood and Fire Risk Mitigation in Wetlands Using micRowire Sensing (FF-RIWER)",
    subtitle: "The FF-RIWER experiment will enable the future DeltaEcoPro solution for increased preparedness \n" +
      "against environmental threats in wetlands. Thus, the FF-RIWER solution is built on MicroWire sensing \n" +
      "technology and addresses two of the most important threat mitigation needs in wetlands.",
    image: "../../assets/res/images/iStock-1149878152.jpg",
    urlName: "ff-riwer",
    quote: "We envision the FF-RIWER platform will be the starting point of the larger DeltaEcoPro solution for \n" +
      "monitoring and performing ecological actions in the Romanian Delta, opening up a host of \n" +
      "opportunities for increasing our competitiveness on the local and European market.",
    quoteAttribution: "– Eduard-Cristian \n" +
      "Popovici, CEO of Always Connected Consultants SRL",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "Wetlands are fragile ecosystems, which are susceptible to harm from different environmental threats. \n" +
          "Bush fires can destroy bird hides, trees, boardwalks and in general fragment the habitat and increase \n" +
          "pollution. Also, floods in the wetland cannot provide the same habitats and functions, can result in \n" +
          "the loss of wetland vegetation and hamper the transport of the native human population within the area. \n" +
          "As such, fire and flood are one of the two main threats to wetlands.",

          "The FF-RIWER experiment targeted the integration of a CPS technology, namely MicroWire Sensing \n" +
          "technology, available as a HUBCAP asset, and offered by RVM, into a new MBD-augmented modular \n" +
          "CPS solution (DeltaEcoPro) for Flood and Fire risk mitigation in wetlands to be implemented by ACC.",

          "The DeltaEcoPro solution which integrates RVM’s CPS technology and validated by the FF-RIWER set \n" +
          "of experiments will support two novel fire and flood sensors based on MicroWire sensing technology, \n" +
          "customized for wetlands and will process real-time data using business intelligence tools to provide \n" +
          "valuable input (such as sudden increase in temperature and water level), which will then be used by a \n" +
          "visual alerting module in order to offer monitoring components that are available for a wetland \n" +
          "administering authority for better crisis assessment and early response to wetland threats.",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "ACC developed and organised software components of FF-RIWER are in a dockerized software \n" +
          "stack, allowing a rapid automatic restoration of service in case of fault (in case of power failures). The \n" +
          "stack consists of a gateway for sending messages from the MicroWire sensors, a server-side client for \n" +
          "reading measurements, tools for enabling a server, a database, and a visualisation component. The \n" +
          "software stack has been developed in collaboration, using the GitHub platform",

          "Within RVM part of the work - design, construction, calibration and validation of the sensor was \n" +
          "achieved. The sensor provides accurate measurements of water level and temperature in real-time. \n" +
          "The sensor is based on an amorphous glass-coated magnetic MicroWires, using a data acquisition \n" +
          "device designed and produced by RVM that contains a set of sensing and excitation coils, a PCB with \n" +
          "amplifiers and filters, and a Nucleo chip with operating software. Nucleo communicates by the UART port \n" +
          "with a wireless transmitter that sends data to the server.",

          "Consortium members performed 2 types of experiments:\n",

          "1. In the first experiment the water level was increased from 0cm to 23cm and continuously \n" +
          "decreased from 23cm down to 0cm.",

          "2. Validation of the temperature sensor by heating the sensor with a hand-dryer, and cooling it down \n" +
          "to the ambient temperature.",

        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "The use of the HUBCAP platform allowed the preparation of ACC’s software to work with RVM’s \n" +
          "hardware sensors and enabled a smooth integration between the products of the two companies. The \n" +
          "possibility of adding the FF-RIWER solution as a new tool in the HUBCAP catalogue brings further \n" +
          "visibility and opportunities for ACC and its products and services. The funding received from HUBCAP \n" +
          "allowed both companies to further develop both their own technology but also develop a new CPS \n" +
          "solution benefitting from both companies’ know-how.",
        ],
      },
      /* {
        sectionHeading: "Forward look",
        paragraphs: [
          ""
        ],
      },
       */
    ],
    info: {
      endUsers: [
        {
          name: "Always Connected Consultants SRL",
          website: "https://acc.neuroaugmentare.ro/",
        }
      ],
      techProviders: [
        {
          name: "RVmagnetics",
          website: "https://acc.neuroaugmentare.ro/",
        },
      ],
      dih: { name: "HUBCAP Romania", website: "https://www.ulbsibiu.ro/en/" },
      domains: [
        "Flooding",
        "Fire",
        "Magnetic MicroWire Sensor",
        "Real-time Monitoring",
      ],
      impact: [
        "The use of the MicroWire sensing technology allows for precise fire and flood sensing with \n" +
        "little energy consumption and small, unobtrusive devices, making it ideal for delivering a \n" +
        "monitoring software solution for the fragile wetland ecosystem.",

        "The success of the FF-RIWER experiment is crucial for further developing the company \n" +
        "and enabling the DeltaEcoPro solution for the Romanian Delta.",

        "Development of a brand new type of environmentally-friendly sensor, that is not available \n" +
        "on the market yet.",

        "Thanks to this project RVM formed a partnership with a company that allows integration \n" +
        "of the sensor to a broader robust multi-installation platform allowing flood and fire \n" +
        "mitigation.",
      ],
    },
    tryItNowUrl: "",
    videoUrl: "https://www.youtube.com/embed/suh6DYvWnR0"
  },
   {
    title: "Crop Sales Optimization Application",
    subtitle: "",
    image: "../../assets/res/images/mems_cpe.png",
    urlName: "mems-cpe",
    quote: "We kindly advise EU-based SMEs, especially applicants to EU-funded projects, to model their \n" +
      "business flows, their eventual experiments and their proposed projects using BPMN process \n" +
      "modelling.",
    quoteAttribution: "Silviu Busu, Evotech Services",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "In Romania, the commodities market is illiquid and there is limited transparency regarding \n" +
          "transactions, causing farmers to often make incorrect estimations of market prices. The main scope \n" +
          "of this project is to help mid-range farmers sell their crops at the correct price compared to\n" +
          "international market prices like the EU, USA, and South Africa. In addition, we foresee considerable \n" +
          "profits for the upcoming year, as we gained many important partners by presenting this project. \n" +
          "e.g. AGRA Insurance – the market leader in Agro Insurance in Romania\n" +
          "Ardealul S.A. – market leader in Sunflower Seed processing and Sunflower Oil production.",

          "The commercial MEMS CPE solution is a deployable application called ESPV/brcx.ro (Romanian \n" +
          "Grains Commodities Exchange). Farmers will be able to use it for free, to estimate the best time to \n" +
          "sell and buy crops using market analysis and weather prediction. We intend to give this to mid-range " +
          "farmers and large Agro-crops buyers like Sunflower Oil processing mills, for example, Ardealul\n" +
          "S.A. Given the way we work, we already simulated a large trade of 1200 tons of oil, and we need to \n" +
          "insure in the future the buy-side which is 3600 tons of sunflower. We created the solution by \n" +
          "integrating the SandBox MatchingEngine with the Commodities Price Estimator (CPE) and made \n" +
          "these two available in the Evotech Services - Mira Solutions Platform."
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "We began with Mira Solutions analysing the business workflow in insurance and how mid-range \n" +
          "farmers need to be insured. Then, we defined an insurance workflow where we learned how to \n" +
          "interact with the farmers. Crops cannot be sold without insurance, so insurance is a prerequisite to\n" +
          "sell through our system. The experiment was conducted using insurance consultants on Mira \n" +
          "Solutions’ side, and it analysed two types of workflows: Agro Insurance and Cargo insurance. ",

          "On the Evotech side, we analysed the market price data models, and market commodities price \n" +
          "variation models that are available on the market. ",

          "In Romania, the market is illiquid and not transparent. The only transparent market that was a trend \n" +
          "giver for sunflower was SAFEX, available using barchart.com interfaces. ",

          "We then analysed wheat, corn, and rapeseed on Euronext MATIF, which resulted in more \n" +
          "consolidated data models.",

          "We initially worked with simulated data models provided by Enterprise Accuweather APIs, and later \n" +
          "came up with the weather models for the future. In July and August, we connected to the IBM Cloud \n" +
          "Infrastructure which is fed by real sensors (IBM Business – weather.com).",

          "Evotech acquired a weather sensor array for a farm and then we started experimenting with the real \n" +
          "world. Mira Solutions did the same in September.",

          "We made an estimation forecasting model which is now available in the TradingView user interface. \n" +
          "Evotech developed the SBME, which models the supply-and-demand process, and the CPE, which \n" +
          "estimates the commodities prices. One of the main tasks of the project is to integrate both and give \n" +
          "a consolidated API called MEMS CPE API, which is deployed in the HUBCAP Sandbox. The experiment \n" +
          "succeeded and we now have the results and the price forecasts. We gather data from the 4 markets \n" +
          "stated and we process 4 commodities price estimations (Sunflower, Corn, Wheat, and Rapeseed).",
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "The funding enabled the hiring of additional specialists, and we now have 50% more human resources available" +
          " to develop the Camunda side, the Camunda Workflow and Decision Automation Platform, DevOps resources, " +
          "server maintenance and UI design. Both companies hired third-party specialists, including an insurance " +
          "modelling specialist, a web designer, a DevOps developer, a UI designer, and a UI prototyping specialist.",
          "Regarding the platform opportunity, we are now able to export and try our models, the Matching Engine, " +
          "and the CPE in a server environment inside and outside the Sandbox. This allows us to deploy our project " +
          "correctly, similar to production level Apps.",
        ],
      },
      {
        sectionHeading: "Utilisation of existing services and technologies",
        paragraphs: [
          "Relevant technologies we worked with due to the funding include akkio.com, an AI prediction \n" +
          "platform, and barchart.com, which is the Corn, Wheat and Rapeseed quotes API provider for \n" +
          "Euronext MATIF, and the Sunflower quote provider for SAFEX.",

          "We managed to deploy tradingview.com live data feeds widgets, and hired a UI exchange developer \n" +
          "to work on integrating them in the ESPV/brcx.ro web UI.",

          "In addition, we managed to save $12k by gaining direct access to the IBM Cloud Infrastructure \n" +
          "instead of paying an expensive monthly enterprise subscription to other providers, just by acquiring \n" +
          "weather sensors hardware and integrating them into weather.com/wunderground.com ecosystem.\n",
        ],
      },
    ],
    info: {
      endUsers: [
        {
          name: "Evotech Services",
          website: "https://www.evotech.ro/#",
        }
      ],
      techProviders: [
        {
          name: "Mira Solutions",
          website: "https://mirabroker.ro/",
        },
      ],
      dih: { name: "HUBCAP Romania", website: "https://www.ulbsibiu.ro/en/" },
      domains: [
        "Commodities price estimation",
        "Physical commodities supply-and-demand matching",
        "Business model workflows",
      ],
      impact: [
        "The SandBox Matching Engine can be reused in other domains, like the Smart Energy market.",
        "Mastered the Camunda Workflow and Decision Automation Platform and integrated it into the current work of both businesses.",
        "Mid-range farmers will be able to plan their future crops and check local market estimated prices at \n" +
        "any time for free",
        "Mid-range farmers will also be able to check the variation of supply and demand, and choose the \n" +
        "best time to sell their crops.",
      ],
    },
    tryItNowUrl: "",
    videoUrl: ""
  },
   {
    title: "Digital Twin for Active Sprayer Boom Yaw Control",
    subtitle: "",
    image: "../../assets/res/images/ASBC.png",
    urlName: "digital-twin-for-active-sprayer",
    quote: "The HUBCAP Project has changed the trajectory of the SteadySpray control system significantly. The funding has enabled the development of a Digital Twin, that both can and will be used as a significant part of the controller design and maintenance protocol for the SteadySpray Kit for years to come",
    quoteAttribution: "Thomas Schmidt, CEO of SteadySpray ApS",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "Sprayer booms are susceptible to oscillations when distributing fertilizer and pesticides in fields. " +
          "The oscillations give an uneven distribution varying between too high concentration and too low treatment " +
          "across the field. The high concentration zones have an environmental impact as chemicals are washed out " +
          "to the ground water, and in low concentration zones the crop yield is reduced and weed is left untreated. " +
          "In addition, the boom structure also needs to strengthen due to the high fatigue loads stemming from the " +
          "oscillations. The varying operating conditions of sprayers makes passive dampers suboptimal. An active " +
          "damping system can be designed to provide high performance under all operating conditions, but this " +
          "requires extensive testing to ensure stability and performance. Even small unhandled variations can " +
          "result in reduced performance and damage to equipment. SteadySpray seeks to develop a Digital Twin, that " +
          "can be used to develop active controllers for boom stabilization, where performance during various " +
          "critical scenarios can be analyzed, and controllers can be optimized, without needing to put the physical " +
          "sprayer system into critical scenarios without having a thoroughly tested control system employed.",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "During the project a digital twin of the Danfoil Concorde II field sprayer was developed, giving a " +
          "suitable digital representation of the sprayer boom. Verification was carried out by comparing dynamic " +
          "results from a test on the physical setup with results from an identical test conducted in the model. " +
          "Using the digital twin, active control was designed to stabilize the sprayer boom when exposed to " +
          "vibrations and unexpected movements in the yaw direction. This reduces stresses applied to the boom " +
          "while increasing the effectiveness of the field spraying, which reduces the required amount of chemicals " +
          "used to obtain a satisfactory crop yield on the fields."
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "The funding granted through the HUBCAP project has accelerated the development of the combined active " +
          "control structure, which has given promising outlook to finalize the project within the coming year. " +
          "Hence, a complete steady spray control system should be available starting summer 2023. Furthermore, " +
          "the development of the sprayer control system has been positively influenced by the assistance provided " +
          "to us by the HUBCAP network, particularly through communication with the contact person provided to us, " +
          "who showed technical knowledge and has provided assistance multiple times throughout the process.",
        ],
      },
      {
        sectionHeading: "Forward look",
        paragraphs: [
          "Given that the primary market advantage of the SteadySpray kit, is that we are first " +
          "movers on development of a Digital Twin for controller design, the advancement of the digital twin seen " +
          "within the HUBCAP problem is a large advantage to market position of SteadySpray."
        ],
      },
    ],
    info: {
      endUsers: [
        {
          name: "Schmidt Innovation ApS",
          website: "https://www.sinno.dk",
        }
      ],
      techProviders: [
        {
          name: "Danfoil",
          website: "https://www.danfoil.dk",
        },
      ],
      dih: { name: "HUBCAP Denmark", website: "https://international.au.dk/" },
      domains: [
        "Agriculture",
        "Digital Twin",
        "Model-based controller design",
        "Cyber-Physical system",
      ],
      impact: [
        "Improved quality of digital controller testing.",
        "Significant reduction of testing costs.",
        "Boom stabilization reducing stresses on the boom.",
        "Spray effectiveness and environmental impact.",
      ],
    },
    tryItNowUrl: "",
    videoUrl: "https://www.youtube.com/embed/mEWPamjgVX0"
  },

];

