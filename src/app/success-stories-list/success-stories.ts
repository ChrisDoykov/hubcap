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
    quote: "With this project we break through the most difficult aspect of time-optimized radiation detector design, simulating particle tracks and detector dimensions till we find an optimized solution, reducing the cost of new detector development 10-fold timewise.",
    quoteAttribution: "Georgios Konstantinou, Multiwave Metacrystal",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "Positron Emission Tomography (PET) is a crucial technique widely used for cancer diagnosis and treatment." +
          " At the heart of PET devices are radiation detectors that use scintillating crystals. The fundamental" +
          " physics is well-understood, and large-scale simulations based around Monte-Carlo methods are employed" +
          " for design by Multiwave Technologies SAS. The simulations use pseudo-random seeds and" +
          " perform experiments using physics modelling. Depending on the physics environment chosen, the simulations can be expensive" +
          " in terms of execution time and memory used, and capture only some of the physics directly. In this project," +
          " we used machine learning to reduce simulation and software engineering costs through the Quaisr platform" +
          " to vastly accelerate the design process and improve the quality of the simulation. In particular, precision of" +
          " performance prediction is improved through uncertainty quantification and supervised machine learning techniques," +
          " optimization through objective function applications allows direct addressing of questions" +
          " on system physical sensitivity and response time, and finally, a set of pre-chosen and interactive" +
          " visualization tools improves understanding of the design process and access to simulation results for" +
          " the cyber-physical system designer. The software developed in this project revolutionises" +
          " design and speeds up prototyping by Multiwave Metacrystal leading to new PET devices, expands the" +
          " simulation capabilities for Multiwave Technologies SAS, and will also be commercialized for Quaisr." +
          " Furthermore, the developed tools can be directly applicable to different detector designs, or even" +
          " expanded easily to include any type of Monte-Carlo simulation-based problem.",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "Combining multi-disciplinary expertise, from data and machine learning to computational and applied physics," +
          " within this project we developed Monte-Carlo (MC) simulators using variable physics and detector designs," +
          " towards time-optimized scintillation-based radiation detector application. The simulation starts by" +
          " generating pseudo-random seeds that address a stochastic pipeline of particle creation and interactions." +
          " The computational complexity of the process depends on the geometric model of the simulated system, but" +
          " most importantly on the physics used. For this type of detector, we require both nuclear physics and" +
          " optical photons. In total, every experiment includes tens of thousands of particles and close to a million" +
          " particle interactions, intensifying with the addition of optics. We probed how different machine learning (ML) approaches," +
          " from supervised ML to more complex uncertainty quantification approaches, fit in the different simulated problems," +
          " with the purpose of reducing the requirement for statistics when running MC, or even scrapping" +
          " the need for MC altogether. The pipeline was initially built using only nuclear physics and is being" +
          " benchmarked for the addition of optics, to also show its versatility. We have demonstrated reduction of" +
          " the computational load that is so significant, that for the first time we can use the MC-UQ pipeline" +
          " embedded in tools such as optimization loops. The system can run on the Cloud and users can design" +
          " geometries, choose physics, and run experiments online directly through the HUBCAP platform. In application," +
          " we designed a new material combination, replicating the behaviour of the golden-standard scintillator," +
          " at a third of the cost."
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "The consortium came into being in order to apply for this particular project, which offered an important incentive" +
          " to bring together specialists of significantly different fields in the cyber and physical domains." +
          " The requirements of submission of the programme helped us to develop and define the potential and capabilities" +
          " of the consortium, whilst enabling us to integrate more new concepts such as cyber-physical system (CPS)" +
          " and model-based design. Apart from the obvious use of HUBCAP funding, which allowed this consortium to exist," +
          " we were able to profit from the continuous guidance and interaction with business and academic specialists" +
          " who supported and interacted with the consortium, helping with issues ranging from simulation" +
          " specifications to resource and material allocation and time budgeting. Finally, the implementation" +
          " of an accessible web-based demonstrator through the sandbox environment of HUBCAP allowed easy user" +
          " testing and interactions within the consortium.",
          ],
      },
      {
        sectionHeading: "Forward look",
        paragraphs: [
          "Multiwave Metacrystal has now developed an optimized design based on the simulated dimensions to build" +
          " detectors that satisfy state of the art specifications at a fraction of the cost. As such," +
          " within this year the development process has accelerated two-fold, bringing the company closer to its" +
          " MVP design based on inexpensive scintillators to be commercialised in 2023. With the flexibility added" +
          " through this collaboration, Metacrystal has approached two of the key OEMs in the field with negotiations" +
          " towards landing their first high-end customer ongoing.",
          " Multiwave Technologies now has the know-how to expand its simulation capabilities through the application" +
          " of machine learning designed within the project. While this was performed for Monte-Carlo simulation," +
          " it can be directly applied to the significantly more complex and computationally heavy electromagnetic" +
          " simulations, and through optimization routines develop photonic designs at 10% of the computational" +
          " cost, allowing CPS design of photonics for visible and ultraviolet wavelengths.",
          " Quaisr has now applied their reusable Data Centric Engineering workflows (optimisation and UQ) to a" +
          " completely new domain adding significant value to its partner SME and demonstrating scalability of" +
          " its modular components. Quaisr has also developed a web app which is deployed through the HUBCAP platform." +
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
    title: "Building Environmental Digital Twins to Maximise Farming Potential",
    subtitle: "",
    image: "../../assets/res/images/fiss.png",
    urlName: "farming-intelligence-system-of-systems",
    quote: "The HUBCAP funding allowed our team to further develop the FISS prototype and to successfully demonstrate it within an operational environment, to promote to product towards relevant potential clients and to enable the future commercialisation of the FISS line of products and services.",
    quoteAttribution: "Pedro Branco, Xilbi Sistemas de Informacion SL",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "The Farming Intelligence System of Systems (FISS) project took the interaction between farmers and their plantation" +
          " fields to a new level. It delivered an Environmental Digital Twin and associated Artificial Intelligence" +
          " (AI)-based Decision Support System (DSS) that allow farmers to maximise the benefit of existing" +
          " operational assets and know-how. This is achieved by connecting, exchanging, and analysing data," +
          " via the FISS Cyber-Physical System (CPS) platform, from deployed existing sub-systems" +
          " (e.g. Internet of Things (IoT)-based sensors, meteorological data, Earth Observation (EO), Remotely Piloted" +
          " Aircraft Systems (RPAS), photovoltaic powerplants, and robotic and non-robotic field machinery) and" +
          " recommending proper actions to farmers via desktop and mobile interfaces," +
          " including Augmented Reality display glasses.",
          "The FISS system was designed to meet the requirements of farmers, particularly" +
          " medium to large-scale almond and pistachio producers. The main requirement of this target user community" +
          " is a decision support system that will enable the optimisation of irrigation," +
          " fertilization, and pesticide application procedures in order to optimise resources usage (e.g. water," +
          " fertilizers, and energy) and in consequence reduce costs and environmental impact. ",
          "FISS delivers the complete digitalisation of the farming operational environment. The system will enable" +
          " more streamlined crop management by means of optimisation of operational and management" +
          " farming procedures. The FISS target customers are all farmers and farmer organisations."
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "The FISS experiment involved the creation of a Digital Twin simulation environment of an almond plantation field." +
          " The Digital Twin integrated data from field IoT enviromental sensors, weather stations," +
          " irrigation actuators, satellite imager (Copernicus), and machinery position data." +
          " Machine learning was used to deliver irrigation planning recommendations and to generate solar energy" +
          " production forecasts.",
          "At the beginning of the project, the system was at TRL 5: technology validated in relevant environment." +
          " Using a model-based design approach and working in close collaboration with potential users," +
          " the prototype has been developed to" +
          " TRL 7: system prototype demonstration in operational environment."
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "HUBCAP funding allowed us to implement a very challenging experiment whilst demonstrating the system" +
          " within an operational environment, thereby paving the way towards commercialisation. Using the" +
          " HUBCAP platform, we were able to develop the FISS machine learning algorithms further, within a shared" +
          " environment, and to promote our tools, possibly accessing new potential markets.",
          ],
      },
      {
        sectionHeading: "Forward look",
        paragraphs: [
          "We estimate the FISS global Serviceable Available Market (SAM) to be around €300 million and the European" +
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
        "Creation of a new line of products and services.",
        "Optimisation of farming operational procedures.",
        "Forecast and optimisation of solar energy production."
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
    quoteAttribution: "Anargyros Chatzitofis, CEO Codewheel",

    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "LocoMoCap is a project related to the common vision of Cyberith, a leading provider of professional" +
          " locomotion devices for virtual reality, and Codewheel, an AI-based motion capture (MoCap) start-up." +
          " The ultimate goal of the project was the exploitation of Codewheel's AI-based technology to improve Cyberith's" +
          " Virtualizer products. To overcome the challenges in integrating the sensor-based MoCap subsystem with the" +
          " Virtualizer's motion platform, we developed LocSim, a simulation tool for rapid-test integration, which is" +
          " now available through the HUBCAP platform.",
          "To improve the physical walking experience on the Virtualizer and increase immersion in" +
          " Virtual Reality (VR), the Virtualizer's motion platform has been enhanced with an additional" +
          " information stream, the user's lower-body motion. The provided information enables the systematic" +
          " analysis of different user gaits and allows us to better understand the abilities and limitations" +
          " of Cyberith's current system. Moreover, the data was exploited in a newly created prototype that uses" +
          " the additionally provided information to improve the Virtualizer's active gait support and to improve" +
          " the walking movement in VR. The newly gained know-how and the technology developed within the project" +
          " will serve as a basis for future enhancements of Cyberith's current products and new" +
          " product developments.",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "The integration of the MoCap technology in the new Virtualizer prototype was split into three" +
          " phases: first, we collaboratively developed the LocSim tool that is able to simulate the combination" +
          " of the two systems and provide a rapid-test environment with natural physics rules and realistic human" +
          " (avatar) movement on the Virtualizer’s digital twin. Second, using feedback from extensive collaborative" +
          " sessions between the two companies for the familiarization with each other’s technology, each partner" +
          " improved the corresponding existing technology towards integration of the two systems.",
          "Finally, in the integration phase, two identical MoCap-enhanced Virtualizers were set up," +
          " one in each partner's premises. The integration phase lasted approximately four months," +
          " allowing for intense testing and iterative improvement of both sub-systems. The result of the" +
          " integration was evaluated in two parts: the first part focused on acquiring feedback from" +
          " users in terms of “interest for a new product”, whilst the second part focused on" +
          " qualitative and quantitative feedback through user pilot studies for assessing the performance of the" +
          " enhanced Virtualizer compared to the original model.",
          "Based on internal evaluation of the new system, it seems that the motion information stream can be" +
          " used to dynamically support the gait of the user and to apply dynamic smoothing for improving user experience in VR."
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "The support provided by HUBCAP boosted cooperation between Codewheel and Cyberith, enabled" +
          " vital research on improving user gait on VR locomotion devices, and enabled the integration of an" +
          " AI-based MoCap System into the Virtualizer.",
          "The prototype created proves the high potential of integrating such a MoCap system with VR Treadmills" +
          " and will serve as a basis for future product development.",
          "The development of the prototype required a model-based design to enable remote" +
          " collaboration for integrating motion capture to the Virtualizer. This would have been impossible without the" +
          " developed LocSim tool, a simulator in the form of a Unity3D asset now hosted by the HUBCAP platform." +
          " We hope that the HUBCAP ecosystem will be able to leverage this simulator as we did for creating" +
          " realistic human avatar movement scenarios on various environments."
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
        "Cyber-Physical Systems"
      ],
      impact: [
        "Systematic analysis of different users gaits.",
        "Implemented concrete improvements into a new Virtualizer prototype.",
        "A simulation tool for for testing various marker setups prior to physical integration.",
        "A lower-body specific motion capture AI-based system.",
      ],
    },
    tryItNowUrl: "",
    videoUrl: "https://www.youtube.com/embed/4PWi7sQ1pWs"
  },
   {
    title: "CPS-based and Data-driven Modeling, Monitoring and Improvement of the Eco-friendly Quality",
    subtitle: "Pave the way for a new generation of the quality monitoring services, which are focused not only on the processes performances (KPIs), but also on the eco-friendliness of the process, what we call eco-friendly process quality",
    image: "../../assets/res/images/CPS-based data-driven modeling.png",
    urlName: "cps-based-and-data-driven-modeling",
    quote: "Easy to deploy and affordable (software-hardware) solution for understanding the factors which impact the waste (energy, emission) based on a novel, AI-based analysis of past data.",
    quoteAttribution: "Nenad Stojanovic, Nissatech",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "Ensuring process quality and efficiency is of key importance for manufacturing SMEs that cannot ignore" +
          " the strategic implications of efficient process management and quality control for their competitive" +
          " position. However, it appears that manufacturing SMEs have been very slow to implement formal quality" +
          " models and process monitoring tools, due to the need for modelling and analysis expertise," +
          " which is typically expensive and time consuming.",
          "The main goal of this project was to develop (using HUBCUP support) a CPS-based infrastructure that enables comprehensive" +
          " monitoring, analysis, and improvement of the eco-friendly quality of the manufacturing process. This was achieved by" +
          " focusing on three main factors of environmental impact: energy, emission, and anomalies (waste)," +
          " measured using corresponding sensors and cameras. The developed system monitors the" +
          " eco-quality of these processes in the context of the given manufacturing process, and uses complex" +
          " behaviour understanding to react in situations when some of the environmental aspects will be changing" +
          " (using outlier analysis and stability rules).",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "The experiment was based on the assumption that non-invasive sensing of a machine/line can enable the" +
          " collection of very valuable data for understanding process behaviour in the context of waste reduction." +
          " Indeed, advancements in retrofitting/modernisation of machines in the context of Industry 4.0" +
          " are opening new opportunities for exploiting the value of data (independently of the machine vendors)." +
          " EMDIP (the end user) has installed such sensors, including on cutting machines, mainly for getting daily reports" +
          " of energy consumption. Moreover, the plasma cutting process can introduce lots of environmental issues.",
          "The developed system enables deeper analysis of the data. The challenge is that the datasets are big, complex," +
          " and multidimensional, and the relation between energy consumption and quality should be discovered from the data." +
          " The solution is based on the HUBCUP asset D3Scan - Deep Data Diagnostics through Cognitive Scanning.",
          "The system consists of two main elements:",
          "1) The collection of not only the production data, but also energy," +
          " emission, and waste related data.",
          "2) Complex modelling of their (cor)relations in order to understand" +
          " when some “small” variations in process data will indicate “big” problems in the environment-related" +
          " quality aspects. The goal is to enable proactive detection of problems and to avoid" +
          " environment-related effects from escalating."
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "There were several advantages to using HUBCAP support and platform. The most important is that HUBCUP" +
          " enabled this risky innovation activity. First, HUBCAP supported the collaborative work between three" +
          " parties with the complementary profiles (two more technical and one industry company) needed for the" +
          " development of this complex service. Second, the HUBCAP platform offered an asset that provides complex" +
          " analyses of manufacturing data (D3Scan - Deep Data Diagnostics through Cognitive Scanning), which was" +
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
          "SimTank is inspired by the oil industry's need for energy-efficient monitoring of their fuel tank" +
          " trucks. Current solutions are based on sensors deployed on the trucks that perform sub-optimally" +
          " in terms of energy consumption. The ordering of monitoring task execution is static, the configuration" +
          " of task parameters is performed only empirically, and whenever a sensor needs to change, the new" +
          " configuration is not trivial. As a result, the sensors deployed on the trucks have a limited lifetime," +
          " due to suboptimal battery usage that, in turn, results in a need for frequent maintenance" +
          " (e.g. change of battery). Maintenance stops are not time-aligned and require a lot of" +
          " time (usually a truck needs to stay inactive for days). These problems result in a huge loss of" +
          " time and money for the industry. SimTank solves these problems by building models and algorithmic solutions" +
          " that accurately monitor the total energy consumed by the on-board system and maximize the lifetime of the" +
          " deployment used for monitoring purposes.",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "SimTank built energy models for complex tank truck sensors and combinations of them in several truck" +
          " compartments. In particular, three types of sensor node were modeled:",
          "A) sensors put on the manhole covers (sensor_M).",
          "B) sensors put on the air tube controlling the foot valve (sensor_F).",
          "C) sensors placed on the fuel discharge pipe (sensor_S).",
          "Building on top of these new digital models, the project" +
          " developed an energy simulator to calculate the energy consumption of the deployment according to the" +
          " configuration of sensors and the system in general. Finally, a set of optimisation services were" +
          " developed to facilitate both (a) the configuration of parameters used for the execution of tasks," +
          " and (b) the ordering of task execution. In particular, a greedy algorithm was developed to produce" +
          " near-optimal solutions (in polynomial time), whilst a linear programming algorithm was used to recommend" +
          " exact configurations (in exponential time)."
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "HUBCAP support was essential in helping Intellia ICT and METRICON to reach the project objectives." +
          " First, the solutions built in SimTank were developed from scratch (digital models, simulator," +
          " and optimisation services). This fact made funding by own resources of the SMEs involved infeasible in" +
          " practice. HUBCAP provided the financial resources required to support the development of such a" +
          " time-demanding solution as the one envisaged by SimTank. Also, the regular monitoring offered by the" +
          " project Mentors (FBK and fortiss) proved to be effective and critical for the given complexity of the" +
          " project. Finally, HUBCAP provided a cloud platform to host the software built by the project and a" +
          " marketplace for commercial exploitation. The former helped the project avoid additional costs for" +
          " hosting the software, whilst the latter helped the project get in touch with an already established" +
          " ecosystem consisting of a wide range of stakeholders and potential customers.",
        ],
      },
      {
        sectionHeading: "Forward look",
        paragraphs: [
          "In SimTank, we plan to follow a fee-for-service pricing model. Currently, each real deployment is" +
          " charged per truck. Assuming a starting burn rate of €10K per month and a gradual" +
          " usage-based pricing policy, we will reach a positive balance in the second year with an estimated" +
          " gain of €450K the year after. We plan to have an estimated fleet of" +
          " 5000 trucks for SimTank deployments within the next five years. Considering a charging rate of 10%" +
          " in the total cost of each deployment, we will reach a revenue of €3M in five years." +
          " Our go to market strategy is built upon direct strategic partnerships with existing clients in the oil" +
          " industry and by approaching key market players with targeted campaigns. It is worth mentioning that we" +
          " have already reached an agreement with our first beta client in Greece."
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
        "Attract new clients in the oil industry.",
        "Scale-up by testing different configurations in other application domains (e.g. sealing of food delivery trucks)."
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
          "The scope of the project was to develop model-based software that simulates accurately e-bus operation" +
          " through the integration of real-world data. This approach allows shortening of the planning phase" +
          " and significantly reducing the costs upfront. The resulting e-bus simulator is a new MBD tool," +
          " which has been integrated into the HUBCAP platform.\n" +
          "We divided our scope into 2 sprints built around the following pillars:",
          "— Understanding the adopter’s operation, timetables, and actual state of the bus fleet.",
          "— Defining initial requirements for the new electric bus.",
          "— Understanding current and future goals defined by the local municipality.",
          "— Processing of GTFS data provided by the client.",
          "— Communication with the bus manufacturers and getting data sheets.",
          "— Parametrization of the selected electric bus models.",
          "— Visualisation of the bus operation based on provided data.",
          "— Data assignment of the route details based on the API calls.",
          "— Running up to 180 scenarios of 4 bus lines.",
          "— Analyzing the influence of all the parameters.",
          "— Ingesting economic parameters and prices (Capex/OPEX).",
          "— Presenting actionable steps for the electrification of SKAND operation.",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "In the first sprint, we visualised the bus schedule using the GTFS format. The schedule was based on real world-data from" +
          " third-party providers, which was assigned successfully to the operated routes. The next step was to build a" +
          " mathematical model of an electric bus. In the second sprint, we simulated more than 180" +
          " scenarios, built the heads up indication of an operation schedule adjusted for an electric bus, and" +
          " developed a total cost ownership report based on inputs.\n" +
          "In conclusion, the transport agency received a powerful decision tool as a result of simulation of" +
          " its existing bus operation schedule operated by electric bus models. The aim was to validate their" +
          " operability, accurately predict real energy consumption, optimise the battery capacity, and plan the" +
          " charging infrastructure with a focus on minimizing the total cost of ownership and CO2 generation.\n"
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "HUBCAP gave us the opportunity to perform and validate the experiment." +
          " Funding from HUBCAP enabled Tirn Technology to make multiple iterations of the product versions with" +
          " the adopter SKAND Skalica in order to improve the product and make it ready for market." +
          " As a result, SKAND Skalica received not only a powerful tool to ease the adoption of e-buses but also the" +
          " knowledge and capabilities of model-based design." +
          " The outcomes of the experiment will definitely give us momentum to access new markets and reach" +
          " out to new potential leads, hopefully clients.",
        ],
      },
      {
        sectionHeading: "Forward look",
        paragraphs: [
          "There are two improvements to business conditions:",
          "From a financial point of view, we have been able to maintain business operations and keep both the" +
          " sales and R & D activities quite active. HUBCAP enabled us to prepare for another round of investment, by" +
          " building traction in the product, understanding customer needs, and quantifying the added value of the solution.",
          "From a product point of view, we were able to improve the product to benefit customers.",
          "Both ingredients are necessary for proper business execution. We have gained the needed traction and are currently" +
          " involved in other pilot projects, e.g. GoWhippet from Cambridge and Tugsal in Barcelona.\n"
        ],
      },
    ],
    info: {
      endUsers: [
        {
          name: "SKAND",
          website: "http://www.skand.sk/",
        }
      ],
      techProviders: [
        {
          name: "Tirn Technology",
          website: "https://tirntechnology.com/",
        },
      ],
      dih: { name: "HUBCAP Austria", website: "https://www.v2c2.at/" },
      domains: [
        "Smart Transports/Mobility",
        "Simulation services",
      ],
      impact: [
        "Simulation tool of existing bus operation schedule with electric buses and preparation of an MBD-driven plan for electrifying the operation.",
        "Acceleration of the transition to sustainable public transportation.",
        "Elimination of the carbon footprint created, usually during physical testing.",
      ],
    },
    tryItNowUrl: "",
    videoUrl: "https://www.youtube.com/embed/wpCED05SWtw"
  },
   {
    title: "Exploiting Cloud Computing and Artificial Intelligence Technology" +
      " for Hydrogen Storage & Transportation Towards Net Zero by 2050",
    subtitle: " Next-generation hydrogen planning using AI and cloud computing",
    image: "../../assets/res/images/h2ai.png",
    urlName: "ai-hydrogen-storage-towards-net-zero",
    quote: "HUBCAP has funded the first project for improving design for hydrogen energy infrastructure using" +
      " HPC and machine-learning-accelerated digital tools.",
    quoteAttribution: "Kostas Lyras, MultiFluidX",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "The scope of this project was to develop a viable solution for simulating liquid hydrogen" +
          " transportation for hydrogen-based energy systems. Our solution was to combine" +
          " traditional methods of performing simulations, such as computational fluid dynamics (CFD), with" +
          " machine learning (ML), and thereby simulate hydrogen-based scenarios faster and more cheaply than current" +
          " solutions on the market. We aimed to be the first EU-based project to combine CFD and ML in" +
          " handling hydrogen and improve the competitiveness of EU industries by providing a fast and" +
          " accurate simulation tool.",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "Energy security and decarbonisation are top priorities for the EU, which supports numerous" +
          " changes across the energy sector with the use of hydrogen being one of the biggest." +
          " This project explored the deployment of" +
          " computational fluid dynamics (CFD) with machine learning (ML)" +
          " that could lead the design of next-generation hydrogen-based energy systems.",

          "Therefore, based on these two state-of-the-art technologies," +
          " we developed a workflow that uses computer simulations to perform \"virtual experiments\"." +
          " The outcomes of these simulations can be used for near-instant predictions and ultimately arrive" +
          " at the optimum product that will be both safe to use and perform optimally.",

          "Using the MPflow simulator, a large collection of hydrogen storage and transportation scenarios"+
          " was generated using the vast capabilities of the Kaleidosim platform.",

          "This is the very first software to combine CFD and ML for hydrogen predictions." +
          " The development and successful completion of the project ensures that SMEs across the" +
          " EU engaged in hydrogen storage and transportation will have access to a digital solution that is" +
          " easy to use and cheaper than its nearest competitors.",

          "Adoption of this software will enable a range of SMEs to model wide ranging hydrogen storage" +
          " and transportation scenarios in the cloud and ensure enhanced safety and improved efficiency" +
          " for these scenarios. Ultimately, this will provide an impetus to the adoption of hydrogen as" +
          " a sustainable source of energy, which will help to meet the temperature goals of the Paris Agreement."
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "HUBCAP has provided us with support and funding for utilising and testing a new cyber-physical" +
          " system for hydrogen, the first of its kind. Thanks to the constant engagement and support of the DIH" +
          " and the whole HUBCAP team, both companies in the project were able to advance the" +
          " technology of computational fluid dynamics simulations. It is a unique computational tool for" +
          " optimising hydrogen production and application in various industries.",

          "Through this combined effort, the experiment aimed to be the first EU project with the specific" +
          " goal of integrating AI with traditional physics-based Computer Aided Engineering in handling hydrogen" +
          " and improving the competitiveness of EU industries. Being part of the HUBCAP ecosystem" +
          " helped both partners to engage further with this new technology, connect with key players in the" +
          " EU market, and be part of the pioneering long-term sustainable plan of HUBCAP. The latter is of" +
          " extreme importance since it is expected to lead to synergies that will allow for more opportunities and" +
          " additional funding from similar calls. The dissemination of the outcomes of the project through" +
          " conference participation and future publications, generously supported by HUBCAP, is also a huge" +
          " boost for both companies involved, which will further increase the overall impact of the project."
        ],
      },
      {
        sectionHeading: "Forward look",
        paragraphs: [
          "Being part of HUBCAP has increased our companies’ visibility and marketing, providing us with" +
          " interesting opportunities for further development." +
          " Our participation in HUBCAP has helped us be part of interesting industrial EU consortia for hydrogen," +
          " allowing us to form collaborations for additional funding and to improve the computation tools our" +
          " companies develop. Although, the long timeline of these funding opportunities does not allow us to" +
          " provide exact estimations of sales or income, it is expected that these projects will lead us to" +
          " increase our sales next year by at least 50%. It is also anticipated that being part of new EU research" +
          " and innovation projects will allow us to increase market presence in the EU and increase our" +
          " manpower by 50%."
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
        "Simultaneous Cloud Computing) of KaleidoSim OpenFoam®.",

        "The integration of machine-learning in MPflow® using the unique hydrogen data collected \n" +
        "has set the groundwork for more advances in the field of computer simulations in process \n" +
        "engineering."
      ],
    },
    tryItNowUrl: "",
    videoUrl: ""
  },
   {
    title: "Enhancing a Gas Compressor's Performance Utilizing the MODELTA Platform",
    subtitle: "Accelerating the experiment process of a gas compressor’s prototype, called SARC, using MODELTA platform",
    image: "../../assets/res/images/SARCproject.png",
    urlName: "sarc-project",
    quote: "MBD can substantially facilitate the functionality optimization of physical assets. We observed through HUBCAP that the steps followed to build MBD really give a thorough understanding of the asset, preparing it for rapid development and prototyping. Furthermore, the critical parameters allocation and their control can improve performance and decrease cost.\n" +
      "Our advice as DELTA MPIS is for SMEs to get to know Model-Based Design and IoT in order to enter the rapidly growing sector of Cyber Physical Systems and also make their product and services up to speed with industry 4.0, smart manufacturing and Digital Twinning\n",
    quoteAttribution: "Dimitrios Dragatogiannis, DELTA-MPIS",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "The project aimed to develop a model-based design (MBD) method by DELTA-MPIS (Technology Provider)" +
          " to improve the design of a cyber-physical system — the novel SARC rotary compressor —" +
          " being developed by theSARMproject (Adopter)." +
          " The design method includes sensing of critical parameters" +
          " (temperature, pressure output, angular motion) for the operation and performance of the compressor," +
          " and utilization of these quantities for real-time monitoring and input for MBD." +
          " For efficient project implementation, the MODELTA web-platform was developed" +
          " that provides IoT monitoring of sensor measurements and prediction of the performance of the physical asset." +
          " The prediction is achieved using a combination of MBD with Simulink and" +
          " computational fluid dynamics and finite element analysis multiphysics calculations," +
          " to accurately describe the operation of the compressor. With the aid of MODELTA, the" +
          " prototyping process was enhanced (rapid prototyping) and an optimized prototype was manufactured.",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "During the experiment, a set of activities was scheduled for the successful implementation of the project." +
          " This included the following subtasks:",
          "SPRINT 1:",
          "— Design of experiment",
          "— First steps of experimental campaign",
          "— Computational fluid dynamics",
          "— Finite element analysis for structural optimization of the compressor",
          "— Development of the MODELTA web-based platform",
          "— Implementation of model-based design to describe the operation of SARC",
          "SPRINT 2:",
          "— Comparison of simulation and experimental results",
          "— Calibration of experimental setup",
          "— Prototype design improvements",
          "— Integration of MODELTA into the HUBCAP platform",
          "— Cost evaluation for the sustainability of MODELTA adoption in other applications",
          "— Dissemination activities",
          "— Integration of MODELTA to relevant marketplaces",
          "— Document preparation",
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "HUBCAP provided funding for the development of a tailor-made and easy-to-use CPS support web-platform" +
          " and for the rapid prototyping through MBD of SARC. In this way, the Adopter SME came to the realisation" +
          " of the benefits of creation of a CPS, not only for the development of the physical asset," +
          " but also to support its actual operation. The consortium, in close cooperation with the DIH" +
          " assigned to the project by HUBCAP (FDK), were able to structure the characteristics of their respective" +
          " services and products according to the needs of a state-of-the-art digital marketplace. The integration" +
          " of MODELTA into the HUBCAP platform gave insight on competition with other CPS solutions, in the spirit of" +
          " fostering collaboration with other participants as well. Furthermore, the opportunity to add a" +
          " try-it-now feature to the service was considered very important by DELTA-MPIS, in order to receive" +
          " constructive feedback for the MODELTA application.",
        ],
      },
      {
        sectionHeading: "Forward look",
        paragraphs: [
          "DELTA MPIS has developed MODELTA, a web platform that expands the services of the company." +
          " The platform supports IoT functionalities, a proven methodology for sensor connections with" +
          " embedded devices and for uploading measurements available to the user at any time." +
          " The major benefit for DELTA MPIS is the display of an established tool for prediction and" +
          " monitoring that can attract future clients for the company. This has been validated by the" +
          " initiation of two other projects, one commercial and one for research purposes, both utilizing" +
          " MODELTA functionalities." +
          " theSARMproject (Adopter SME) has received substantial input regarding possible improvements to" +
          " the SARC compressor. In fact, those improvements have led to an approximately 25% decrease of mass for" +
          " the finalized prototype, leading to a corresponding cost decrease. The efficiency improvement and" +
          " the manufacture of an updated prototype led to a TRL5 edition of the device. This created a very" +
          " strong asset for theSARMproject towards the next funding opportunity and eventually to market." +
          " The steps followed for the experimental campaign have proven critical for the development of other" +
          " prototypes for the company, namely, a rotary internal combustion engine (SARM), an expander (SARX)," +
          " and a pump (SARP) based on the novelty of the rotary working principle."
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
        "MODELTA PaaS (Platform-as-a-Service) was integrated into the DELTA-MPIS set of services." +
        " It can support CPS development for both real-time monitoring and prediction.",
        "DELTA—MPIS has already created a pitch deck for MODELTA, with successful results." +
        " Even before the ending of the project, two other projects (one commercial and one research) were initiated," +
        " utilizing the MODELTA web-platform.",
        "theSARMproject has reached TRL5 for the SARC prototype;" +
        " the prototype was manufactured and demonstrated in terms of effective sensing with optimized sensor selections.",
        "theSARMproject have an optimized version of SARC with better performance and reliability," +
        " and decreased costs for manufacturing and operation.",
      ],
    },
    tryItNowUrl: "",
    videoUrl: ""
  },
   {
    title: "SmarTexMod - a tool for design, development, and prototyping of smart clothing items",
    subtitle: "Enhancement of the efficiency in the design, development, and prototyping process for smart clothing items",
    image: "../../assets/res/images/SmarTexMod.png",
    urlName: "smartexmod",
    quote: "With HUBCAP, both companies received the opportunity to implement the project with model-based assets by supporting the upcoming new field of smart clothing.",
    quoteAttribution: "Vulpes Electronics GmbH",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "SMARTEXMOD is an efficiency tool providing pre-build assets for design, development, and " +
          "prototyping of smart clothing items.",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "The team prioritized and assessed items which are required to create smart clothing." +
          " We created 10 parametrized assets and provided the distribution option through the" +
          " website https://smartexmod.com/. The user has the option to choose between different assets," +
          " parameters, and data files, and downloads the parametrized models for integration into" +
          " clothing design software or for rapid prototyping. The model simulation is done with" +
          " the Clo3D design software as well as with Slicer Cura and Ultimaker machine / MakerBot rapid prototyping."
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "With HUBCAP, both companies had the opportunity to implement the project with model-based assets" +
          " in the upcoming new field of smart clothing. The smart textile work required a" +
          " multidisciplinary approach involving different expertise from garments, electronics," +
          " mechanics, and the IT field. With the HUBCAP platform, the consortium was able to create a suitable" +
          " tool for supporting the multidisciplinary design and development process, resulting in increased efficiency.",
        ],
      },
      {
        sectionHeading: "Forward look",
        paragraphs: [
          "HUBCAP enabled both companies to lay the groundwork for the parametrized models. So far, the models" +
          " are in the “alpha stage” and will be developed in the next steps to reach higher maturity." +
          " Further marketing activities will be required to promote SMARTEXMOD."
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
        "Increased clarity of instructions and enhanced efficiency of design, development, and pre-production workflows.",
        "Visualization of hardware components.",
        "Improved cross-function understanding of textile / garments, electronics, and mechanical components" +
        " to accelerate the design and development process.",
        "Decreased time of rapid prototyping hardware.",
      ],
    },
    tryItNowUrl: "",
    videoUrl: "https://www.youtube.com/embed/L3VeIj6xq0A"
  },
   {
    title: "Flood and Fire Risk Mitigation in Wetlands Using MicroWire Sensing (FF-RIWER)",
    subtitle: "The FF-RIWER experiment will enable the future DeltaEcoPro solution for increased preparedness" +
      " against environmental threats in wetlands. Thus, the FF-RIWER solution is built on MicroWire sensing" +
      " technology and addresses two of the most important threat mitigation needs in wetlands.",
    image: "../../assets/res/images/FF-RIWER.png",
    urlName: "ff-riwer",
    quote: "We envision the FF-RIWER platform will be the starting point of the larger DeltaEcoPro solution for" +
      " monitoring and performing ecological actions in the Romanian Delta, opening up a host of" +
      " opportunities for increasing our competitiveness on the local and European market.",
    quoteAttribution: "– Eduard-Cristian Popovici, CEO of Always Connected Consultants SRL",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "Wetlands are fragile ecosystems that are susceptible to harm from different environmental threats." +
          " Bush fires can destroy bird hides, trees, and boardwalks, and in general fragment the habitat and increase" +
          " pollution. Also, floods in wetlands cannot provide the same habitats and functions, resulting in" +
          " loss of wetland vegetation and hampering transport of the native human population within the area." +
          " Thus, fire and flood are two main threats to wetlands.",

          "The FF-RIWER experiment targeted the integration of a CPS technology, namely MicroWire Sensing technology," +
          " offered by RVM and available as a HUBCAP asset, into a new MBD-augmented modular" +
          " CPS solution (DeltaEcoPro) for flood and fire risk mitigation in wetlands, to be implemented by ACC.",

          "The DeltaEcoPro solution integrates RVM’s CPS technology and is validated by the FF-RIWER set" +
          " of experiments. DeltaEcoPro will support two novel fire and flood sensors based on MicroWire sensing technology," +
          " customized for wetlands, and will process real-time data using business intelligence tools, to provide" +
          " valuable input such as sudden increase in temperature and water level. This input will then be used by a" +
          " visual alerting module to provide output to monitoring components available to a wetland" +
          " administering authority for better crisis assessment and early response to wetland threats.",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "ACC developed and organised the software components of FF-RIWER in a dockerized software stack," +
          " allowing rapid automatic restoration of service in case of fault (e.g. power failure)." +
          " The stack consists of a gateway for sending messages from the MicroWire sensors, a server-side client for" +
          " reading measurements, tools for enabling a server, a database, and a visualisation component." +
          " The software stack has been developed in collaboration, using the GitHub platform.",

          "RVM designed, constructed, calibrated, and validated the MicroWire sensor," +
          " which provides accurate measurements of water level and temperature in real-time." +
          " The sensor is based on amorphous glass-coated magnetic MicroWires, uses a data acquisition" +
          " device designed and produced by RVM that contains a set of sensing and excitation coils, a PCB with" +
          " amplifiers and filters, and a Nucleo chip with operating software. The Nucleo chip communicates by the UART port" +
          " with a wireless transmitter that sends data to the server.",

          "Consortium members performed two types of experiment:",
          "1. In the first experiment, the water level was increased from 0cm to 23cm, then continuously" +
          " decreased from 23cm down to 0cm.",
          "2. Validation of the temperature sensor by heating the sensor with a hand-dryer, then cooling it down" +
          " to the ambient temperature.",
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "The HUBCAP platform allowed the preparation of ACC software and its interaction with RVM" +
          " hardware sensors, and enabled a smooth integration between the products of the two companies." +
          " The possibility of adding the FF-RIWER solution as a new tool in the HUBCAP catalogue brings further" +
          " visibility and opportunities for ACC and its products and services. The funding from HUBCAP" +
          " allowed both companies to develop their respective technologies further and also to develop a new CPS" +
          " solution that benefited from their collaboration.",
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
          website: "https://www.rvmagnetics.com/",
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
        "The use of the MicroWire sensing technology allows for precise fire and flood sensing with" +
        " little energy consumption and small, unobtrusive devices, making it ideal for delivering a" +
        " monitoring software solution for the fragile wetland ecosystem.",

        "The success of the FF-RIWER experiment is crucial for further developing the company" +
        " and enabling the DeltaEcoPro solution for the Romanian Delta.",

        "Development of a brand new type of environmentally-friendly sensor that is not yet available" +
        " on the market.",

        "Thanks to this project, RVmagnetics formed a partnership with a company that allows integration" +
        " of the sensor to a broader robust multi-installation platform allowing flood and fire" +
        " mitigation.",
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
    quote: "We kindly advise EU-based SMEs, especially applicants to EU-funded projects, to model their" +
      " business flows, their eventual experiments and their proposed projects using BPMN process modelling.",
    quoteAttribution: "Silviu Busu, Evotech Services",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "In Romania, the commodities market is illiquid and there is limited transparency regarding" +
          " transactions, causing farmers to often make incorrect estimations of market prices. The main scope" +
          " of this project is to help mid-range farmers sell their crops at the correct price compared to" +
          " international market prices like those in the EU, USA, and South Africa. In addition, we foresee considerable" +
          " profits for the upcoming year, as we gained many important partners by presenting this project." +
          " For example, AGRA Insurance (market leader in agro insurance in Romania)" +
          " and Ardealul S.A. (market leader in sunflower seed processing and sunflower oil production).",

          "The commercial MEMS CPE solution is a deployable application called ESPV/brcx.ro" +
          " (Romanian Grains Commodities Exchange). Farmers will be able to use it for free, to estimate the best time to" +
          " sell and buy crops using market analysis and weather prediction. We intend to give this to mid-range" +
          " farmers and large agro-crops buyers like sunflower oil processing mills (e.g. Ardealul S.A.)." +
          " Given the way we work, we already simulated a large trade of 1200 tons of oil, and we need to" +
          " insure in the future the buy-side, which is 3600 tons of sunflower. We created the solution by" +
          " integrating the SandBox MatchingEngine with the Commodities Price Estimator (CPE) and made" +
          " these two available in the Evotech Services - Mira Solutions platform."
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "We began with Mira Solutions analysing the business workflow in insurance and how mid-range" +
          " farmers need to be insured. Then, we defined an insurance workflow where we learned how to" +
          " interact with the farmers. Crops cannot be sold without insurance, so insurance is a prerequisite to" +
          " sell through our system. The experiment was conducted using insurance consultants on Mira" +
          " Solutions’ side, and it analysed two types of workflows: agro insurance and cargo insurance.",

          "On the Evotech side, we analysed the market price data models and market commodities price" +
          " variation models that are available on the market.",

          "In Romania, the market is illiquid and not transparent. The only transparent market was a trend" +
          " giver for sunflower (SAFEX), available using barchart.com interfaces.",

          "We then analysed wheat, corn, and rapeseed on Euronext MATIF, which resulted in more consolidated data models.",

          "We initially worked with simulated data models provided by Enterprise Accuweather APIs, and later" +
          " came up with weather models for the future. In July and August, we connected to the IBM Cloud" +
          " Infrastructure which is fed by real sensors (IBM Business – weather.com).",

          "Evotech acquired a weather sensor array for a farm and started experimenting with the real world." +
          " Mira Solutions did the same in September.",

          "We made an estimation forecasting model which is now available in the TradingView user interface." +
          " Evotech developed the SBME, which models the supply-and-demand process, and the CPE, which" +
          " estimates the commodities prices. One of the main tasks of the project was to integrate both and give" +
          " a consolidated API called MEMS CPE API, which is deployed in the HUBCAP Sandbox. The experiment" +
          " succeeded and we now have the results and the price forecasts. We gather data from the 4 markets" +
          " stated and we process 4 commodities price estimations (sunflower, corn, wheat, and rapeseed).",
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "HUBCAP funding enabled the hiring of additional specialists, and we now have 50% more human resources available" +
          " to develop the Camunda side, the Camunda Workflow and Decision Automation Platform, DevOps resources," +
          " server maintenance, and UI design. Both companies hired third-party specialists, including an insurance" +
          " modelling specialist, a web designer, a DevOps developer, a UI designer, and a UI prototyping specialist.",
          "Regarding the platform opportunity, we are now able to export and try our models, the Matching Engine," +
          " and the CPE in a server environment inside and outside the HUBCAP Sandbox. This allows us to deploy our project" +
          " correctly, similar to production level apps.",
        ],
      },
      {
        sectionHeading: "Utilisation of existing services and technologies",
        paragraphs: [
          "HUBCAP funding also enabled us to work with relevant technologies, including akkio.com (an AI prediction platform)," +
          " barchart.com (the corn, wheat, and rapeseed quotes API provider for Euronext MATIF)," +
          " and the sunflower quote provider for SAFEX.",

          "We managed to deploy tradingview.com live data feeds widgets, and hired a UI exchange developer" +
          " to work on integrating them in the ESPV/brcx.ro web UI.",

          "In addition, we managed to save $12K by gaining direct access to the IBM Cloud Infrastructure" +
          " instead of paying an expensive monthly enterprise subscription to other providers, just by acquiring" +
          " weather sensors hardware and integrating them into the weather.com/wunderground.com ecosystem.",
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
        /* "Mastered the Camunda Workflow and Decision Automation Platform and integrated it into the current work of both businesses.", */
        "Mid-range farmers will be able to plan their future crops and check local market estimated prices at any time for free.",
        "Mid-range farmers will also be able to check the variation of supply and demand, and choose the" +
        " best time to sell their crops.",
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
    quote: "The HUBCAP Project has changed the trajectory of the SteadySpray control system significantly." +
           " The funding has enabled the development of a Digital Twin, that both can and will be used" +
           " as a significant part of the controller design and maintenance protocol for the SteadySpray Kit for years to come.",
    quoteAttribution: "Thomas Schmidt, CEO of SteadySpray ApS",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "Sprayer booms are susceptible to oscillations when distributing fertilizer and pesticides in fields." +
          " The oscillations give an uneven distribution varying between too high concentration and too low treatment" +
          " across the field. The high concentration zones have an environmental impact as chemicals are washed out" +
          " to the ground water, and in low concentration zones the crop yield is reduced and weed is left untreated." +
          " In addition, the boom structure also needs to strengthen due to the high fatigue loads stemming from the" +
          " oscillations. The varying operating conditions of sprayers makes passive dampers suboptimal. An active" +
          " damping system can be designed to provide high performance under all operating conditions, but this" +
          " requires extensive testing to ensure stability and performance. Even small unhandled variations can" +
          " result in reduced performance and damage to equipment. SteadySpray seeks to develop a Digital Twin that" +
          " can be used to develop active controllers for boom stabilization, where performance during various" +
          " critical scenarios can be analyzed and controllers can be optimized, without needing to put the physical" +
          " sprayer system into critical scenarios and without having a thoroughly tested control system employed.",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "During the project, a digital twin of the Danfoil Concorde II field sprayer was developed, giving a" +
          " suitable digital representation of the sprayer boom. Verification was carried out by comparing dynamic" +
          " results from a test on the physical setup with results from an identical test conducted in the model." +
          " Using the digital twin, active control was designed to stabilize the sprayer boom when exposed to" +
          " vibrations and unexpected movements in the yaw direction. This reduces stresses applied to the boom" +
          " whilst increasing the effectiveness of the field spraying, which reduces the required amount of chemicals" +
          " used to obtain a satisfactory crop yield on the fields."
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "The funding granted through the HUBCAP project has accelerated the development of the combined active" +
          " control structure, which has given a promising outlook to finalize the project within the coming year." +
          " Hence, a complete steady spray control system should be available starting summer 2023. Furthermore," +
          " the development of the sprayer control system has been positively influenced by the assistance provided" +
          " to us by the HUBCAP network, particularly through communication with the contact person provided to us," +
          " who showed technical knowledge and provided assistance multiple times throughout the project.",
        ],
      },
      {
        sectionHeading: "Forward look",
        paragraphs: [
          "Given that the primary market advantage of the SteadySpray kit is that we are first" +
          " movers on development of a Digital Twin for controller design, the advancement of the digital twin seen" +
          " within the HUBCAP project is a large advantage to the market position of SteadySpray."
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

   {
 title: "Additive Manufacturing Quality Monitoring System - AM QTOOLS",
 subtitle: "",
 image: "../../assets/res/images/AMtools.png",
 urlName: "amqtools",
 quote: "AM QTOOLS developed, integrated and demonstrated quality-oriented decision support framework, including" +
   " an in-process smart monitoring system capable of predicting metal Additive Manufacturing quality KPIs." +
   " The potential impact on manufacturing KPIs is manifold: AM process lead time reduction, COQ reduction, energy" +
   " saving.",
 quoteAttribution: "Giovanni Paolo Borzi, EnginSoft",
 sections: [
   {
     sectionHeading: "Problem and solution",
     paragraphs: [
       "Metal Additive Manufacturing (AM) is a complex operation, which requires the fine-tuning of hundreds of" +
       " processes parameters to obtain repeatability and a good quality design at dimensional, geometric, structural" +
       " levels. Among major technology challenges, many recent reports mention the need to achieve smart metal" +
       " AM process control so to ensure quality, consistency, and reproducibility across AM machines. Additionally," +
       " while a huge amount of data can be collected in metal AM processes, as most industrial AM systems are" +
       " equipped with sensors providing log signals, images and videos, there are not consolidated solutions" +
       " in the industrial practise capable to analyse this data in real-time for quality control.",

       "To help manufacturing companies address these challenges, AM QTOOLS developed an innovative quality-oriented" +
       " decision support framework, composed by (i) a Model Base Design (MBD) tool providing Design for Additive" +
       " Manufacturing (DfAM) features, and (ii) a Cyber-Physical System (CPS) created by integrating an Additive" +
       " Manufacturing (AM) asset with a real-time smart monitoring software application. Such framework caters to" +
       " process engineers and quality managers needs in order to improve a set of quality and economic KPIs.",

       "AM QTOOLS results include validated quality-oriented predictive models that support the a-priori selection" +
       " of optimal process parameters combinations and the in-process monitoring of the quality outcomes." +
       " The models, integrated in the CPS, allow to improve critical manufacturing KPIs, such as lead time" +
       " (e.g. by reducing the need for downstream quality inspections and reducing production times) and cost " +
       "of quality (e.g. by reducing inspection requirements).",
     ],
   },
   {
     sectionHeading: "What we did",
     paragraphs: [
       "The develop and operate phase of the AM QTOOLS project has been carried out in two overlapping steps." +
       " The first step created the quality-oriented framework. The quality oriented MBD approach abstracts the" +
       " technical requirements and thus, it creates the project file containing all the necessary instructions" +
       " for the Cyber Physical System, so to print the designed parts. The link between the MBD approach and the" +
       " Cyber Physical System is provided by a catalogue of the features for aluminium parts that can be printed" +
       " with a Laser Powder bed Fusion (LBPF) process, and of common defects, that captures available design " +
       "know-how regarding the limits of such technology. Crucially, such information is enhanced by the knowledge" +
       " generated by the CPS. The CPS augments the monitoring capabilities of advanced AM systems, and integrates " +
       "quality-oriented predictive models to enable a smart process monitoring. Such models have been created by " +
       "defining and executing targeted process DOEs, persisting machine and process data and collecting the " +
       "corresponding quality information obtained by CT-Scan, Optical Tomography (OT) and Metallography Cut-Up.",

       "The second step validated the AM QTOOLS framework in operation. To support the MBD phase, the " +
       "CPS supplied the information useful to improve the project file and print the part by maximizing the part" +
       " quality based on the design specifications. Decision support is enabled by the predictive models integrated " +
       "in Smart ProdACTIVE, tracking the process outputs and, through advanced data analytics, providing " +
       "information of the expected quality outcomes of a specific setup. Accordingly, AM production has been" +
       " carried out and Smart ProdACTIVE has been applied to monitor and validate the improved part design.",
     ],
   },
   {
     sectionHeading: "HUBCAP support and platform opportunity",
     paragraphs: [
       "HUBCAP support provided invaluable, especially for:",

       "•\tGuidance in order to improve AM QTOOLS project management and meet the tight project" +
       " constraints and schedule",

       "•\tCo-funding that has been very important in order to finance costly activities, " +
       "such as metal AM production and inspection processes for various samples and parts.",

       "•\tA platform that allows to publish and disseminate working project results" +
       " towards an ample stakeholder basis"
       ],
   },
   {
     sectionHeading: "Forward look",
     paragraphs: [
       "While it is early to precisely estimate the business impacts of the AM QTOOLS project, the HUBCAP funding" +
       " provided a unique opportunity to clearly address an industrial challenge and produce practical, working" +
       " results. AM QTOOLS allowed to open communication paths with business stakeholders (i.e. AM manufacturers," +
       " Inspection laboratories, AM machines producers): the potential direct impact may be estimated at around" +
       " 100K€ of additional turnaround for 2023 as development and integration services of smart monitoring solutions."
     ],
   },
 ],
 info: {
   endUsers: [
     {
       name: "EnginSoft",
       website: "https://www.enginsoft.com",
     }
   ],
   techProviders: [
     {
       name: "Kilometro Rosso",
       website: "https://www.kilometrorosso.com",
     },
     {
       name: "PRES-X",
       website: "https://www.pres-x.com",
     },
   ],
   dih: { name: "HUBCAP Italy", website: "https://www.polimi.it/" },
   domains: [
     "Digital manufacturing",
     "In-process quality monitoring",
     "Metal additive manufacturing"
   ],
   impact: [
     "In-process quality monitoring for metal Additive Manufacturing",
     "A methodology to increase process knowledge and support manufacturing decisions",
     "KPIs improvements (e.g. lead time, COQ)"
   ],
 },
 tryItNowUrl: "",
 videoUrl: "https://www.youtube.com/embed/u4eVtTE6vjc"
},
   {
 title: "Autonomous Robotic UAV platform for the ‘as-built’ modeling of buildin assets",
 subtitle: "Autonomous Robotic UAV platform for the ‘as-built’ modelling of building assets",
 image: "../../assets/res/images/CPS4asBuild.png",
 urlName: "cps4as",
 quote: "The HUBCAP funding enabled the use of Model-Based Design techniques to assist VERTLINER to \n" +
   "evaluate the current performance of its aerial system in the given conditions, to help understand the \n" +
   "critical parameters that affect the system within its environment and mission profiles, while allowing\n" +
   "the design of a dedicated UAV optimized for the specific tasks prior to committing to a ‘next gen’\n" +
   "physical prototype. ",
 quoteAttribution: "Michail Striligkas, VERTLINER",
 sections: [
   {
     sectionHeading: "Problem and solution",
     paragraphs: [
       "The future of UAVsin commercial applications is no longer a far-off futuristic idea. Drones have quickly" +
       " become majorly invested in tools for tech and retail giants like Amazon, Facebook, Wal-Mart, and Google," +
       " not to mention the various industries like Real Estate, Police and Fire Departments, Farming, Cinema," +
       " Construction, and Photography that stand to benefit greatly from commercial drone use.",

       "However, the engineering and development phases are still very lengthy, using available tools and with" +
       " processes inherited mainly from the aerospace industry. Also, the design of these systems is usually" +
       " following a very conservative approach to ensure that the developed product can be used in various" +
       " missions and reach a wider range of applications, hence customers. That fact holds apart the engineering" +
       " of commercial drones from the actual missions and the specific needs of each different business model." +
       " As such, most businesses entering or thinking of entering into innovative business concepts with the use" +
       " of drones, reside in the solution of retrofitting a commercially available system, knowing and accepting" +
       " however that it is not optimal for their plans.",

       "Project CPS4AsBuild, comes as an answer to this observation, by delivering a Drone/UAV designer toolset" +
       " based on the MBD philosophy and advanced algorithms. The developed toolset, gives any business or" +
       " individual the power to design a custom UAV optimal and dedicated design starting from the business" +
       " case and strategy."
     ],
   },
   {
     sectionHeading: "What we did",
     paragraphs: [
       "The growing trend of urbanization is pushing the construction industry to develop high-rise buildings, \n" +
       "increasing the precision requirements, hard to guarantee as the size and height of the building \n" +
       "increase, especially for auxiliary building assets. The measurement activity of new buildings, for \n" +
       "instance, is considered a thorough, lengthy, and risky process, since contractors are required to \n" +
       "physically visit each floor, inspect the structural dimensions, orientation and ensure the system’s \n" +
       "compliance with the building’s specifications. CPS4asBuilD is a novel inspection system, consisting of \n" +
       "a robotic UAV connected to a Cloud Platform (CP) that digitizes hard-to-reach building assets by \n" +
       "traversing confined spaces that collects, analyses, and delivers structural data fast, safely, and \n" +
       "accurately. VERTLINER developed a prototype (TRL5), currently operated and tested in several \n" +
       "autonomous missions within construction sites, equipped with depth and visual-inertial odometry \n" +
       "cameras and LIDARs, as well as obstacle avoidance capability along the vertical direction not available \n" +
       "in most commercial UAVs.",

       "However, the prototype has been built with various off-the-shelf components and following basic \n" +
       "concepts and guidelines. The test missions reveal numerous functional limitations of the current \n" +
       "quadcopter version, that need to be considered and optimized in the next steps of the product \n" +
       "development, and, allow for a dedicated design for the specific missions and operation in indoor \n" +
       "confined spaces.\n",

       "The developed toolset was used to assist VERTLINER to evaluate the current performance of the \n" +
       "system in the given conditions, help understand the critical parameters that affect the system within \n" +
       "its environment and mission profiles, and allow to the design of a dedicated UAV optimized for the \n" +
       "specific tasks prior to committing to a ‘next gen’ physical prototype"
     ],
   },
   {
     sectionHeading: "HUBCAP support and platform opportunity",
     paragraphs: [
       "HUBCAP provided the opportunity to both companies to engage with new digital technologies, \n" +
       "experiment with MBD tools and succeed on the main goals of the project as are summarized below:\n",

       "1. Create a model-based digital replica of the system, to allow for optimized flight control and a \n" +
       "decrease in vehicle size by 25%, leading to an advanced dedicated design.",
       "2. Mechanically restructure the current UAV with a goal to decrease its total weight by 30%, and \n" +
       "increase battery life to 25 minutes.",
       "3. Optimize the dynamics, stability, and controls to achieve accuracy below 15mm.\n",
       "4. Time to conduct a full indoor measurement and deliver the results within 60 seconds upon \n" +
       "completion.\n"
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
       name: "Vertliner",
       website: "https://vertliner.com/",
     }
   ],
   techProviders: [
     {
       name: "Give",
       website: "https://www.give-engineering.com/",
     },
   ],
   dih: { name: "HUBCAP Denmark", website: "https://international.au.dk/" },
   domains: [
     "Cyber-Physical System",
     "Inspection, Buildings",
     "Digital Twin",
     "Unmanned Aerial Systems"
   ],
   impact: [
     "Decrease the duration of generating the ‘as-built model’ of a newly developed building asset," +
     "reducing the need for multiple transfers to the project site.",

     "Decrease the duration of generating the ‘as-built model’ of a newly developed building asset," +
     "reducing the need for multiple transfers to the project site.",

     " Create a full digital twin, that will optimize its performance from design to end-of-life, based " +
     "on the business strategy, the unique mission profiles and the customer needs."
   ],
 },
 tryItNowUrl: "",
 videoUrl: "https://www.youtube.com/embed/ICB6OieUZWc"
},
   {
  title: "Threat Management Platform for Citizens' Safety at Venues",
  subtitle: "",
  image: "../../assets/res/images/bie-t4s.png",
  urlName: "bie-t4s",
  quote: "Together with the T4S software solution BEAM is now also well positioned to provide its" +
    " sensor-based BI analytics to a larger market.",
  quoteAttribution: "– Alexandru Vulpe, CEO of Beam Innovation",
  sections: [
    {
      sectionHeading: "Problem and solution",
      paragraphs: [
        "The goal of the project was to employ Model-Based Design to enhance the T4S platform developed \n" +
        "by Thridium, with business intelligence introduced by HUBCAP partner, BEAM.\n",

        "The new integrated BIE-T4S (Business Intelligence Enhanced T4S) platform will support different IoT \n" +
        "sensors (WiFi access points, CCTV cameras etc.) and process real-time data using business \n" +
        "intelligence tools to provide valuable input (indoor positioning, crowd distribution, dynamic \n" +
        "evacuation routing, real-time visualizations), which will then be used by the revamped BIE-T4S \n" +
        "platform (mature at TRL-7) in order to offer security-oriented components (common operational \n" +
        "picture, events management, task allocation, security crew mobile app) which will be available to \n" +
        "the venue’s security officers for better crisis assessment and emergency response.",

        "The goal is to provide the integrated BIE-T4S platform as a venue-agnostic threat management \n" +
        "platform delivering increased preparedness against different types of threats (terrorism, natural " +
        "disasters, pandemics etc.) and support the complete lifecycle evacuation management in any \n" +
        "crowded place.",
      ],
    },
    {
      sectionHeading: "What we did",
      paragraphs: [
        "-We have validated the system in real operational conditions. We have found that the system \n" +
        "complied with over 90% of the threats",
        "-During the experiments we analysed the alarms received and conclude that all incidents \n" +
        "were successfully detected."
      ],
    },
    {
      sectionHeading: "HUBCAP support and platform opportunity",
      paragraphs: [
        "The use of the HUBCAP platform allowed the preparation of BEAM’s software to work with Telesto's \n" +
        "T4S system and enable a further development and integration between the products of the two \n" +
        "companies. The funding received from HUBCAP allowed both companies to further develop both \n" +
        "their own technology and develop a new solution benefitting from both companies’ know-how.\n",
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
        name: "Thridium",
        website: "http://thridium.com/",
      }
    ],
    techProviders: [
      {
        name: "Beam Innovation",
        website: "http://beaminnovation.ro/bie-/",
      },
    ],
    dih: { name: "HUBCAP Romania", website: "https://www.ulbsibiu.ro/en/" },
    domains: [
      "Model-Based Design",
      "Threat management",
    ],
    impact: [
      "Undertake real-time events identification and security incidents handling using a single" +
      "integrated platform.",
      "BIE-T4S platform acts as the bonding agent between the legacy systems and the operational" +
      "functionalities required by the operators of such complex venues from a security standpoint."
    ],
  },
  tryItNowUrl: "",
  videoUrl: "https://www.youtube.com/embed/a0bjaY-NTnc"
},
   {
  title: "Monitoring environmental conditions in industrial operations",
  subtitle: "",
  image: "../../assets/res/images/iStock-1149878152.jpg",
  urlName: "menior",
  quote: "",
  quoteAttribution: "",
  sections: [
    {
      sectionHeading: "Problem and solution",
      paragraphs: [
        "Monitoring the environmental conditions, such as air quality, temperature, etc., in factories can " +
        "help employers and employees to better plan their activities and promptly take measures to " +
        "avoid environmental accidents and health issues.",

        "MENIoR aims to enable industrial operators understand and improve the environmental conditions" +
        " inside their units. Rising the awareness of their employees about the impact of environmental" +
        " conditions by leveraging the potential of Internet of Things (IoT) with the application of" +
        " augmented reality (ΑR) and Digital Twin (DT) techniques.",

        "Environmental information is collected via a low-cost monitoring network developed and configured by " +
        "the consortium in industrial operations. Afterwards the measurements are analysed on the cloud. A web " +
        "based Digital Twin of the factory is developed to enable the factory admins visualise the collected data " +
        "and assess scenarios for environmental improvement inside the factory, while employees are provided with a " +
        "visualisation tool through a mobile application using an AR interface.",
      ],
    },
    {
      sectionHeading: "What we did",
      paragraphs: [
        "In the framework of the project, a low-cost environmental monitoring network was developed and" +
        " installed inside two Spanish factories: Fagesta S.L. and Lisanplast S.L. The network collected" +
        " real-time air quality measurements, as well as data of other environmental parameters such as" +
        " temperature, humidity and concentrations of CO2. This information was then analysed on the cloud" +
        " and visualised on a web Digital Twin platform that was provided to factory admins to assess scenarios" +
        " for environmental improvement inside the factories. In addition, factory employees were given access" +
        " to visualisations of the data via an augmented reality mobile application.",

        "During MENIoR’s pilot implementation phase, the factories had the opportunity to test the " +
        "MENIoR solution and provide their feedback to the consortium companies. Based on this feedback, " +
        "the project consortium was able to evaluate and improve the solution even further in order to better " +
        "address the market’s needs.",
      ],
    },
    {
      sectionHeading: "HUBCAP support and platform opportunity",
      paragraphs: [
        "HUBCAP enabled the consortium companies to accelerate their introduction to the market of industrial" +
        " installations. In the context of MENIoR, HUBCAP’s funding was used to develop and set up a low-cost" +
        " environmental monitoring network, deliver a web Digital Twin platform and an Augmented Reality mobile" +
        " application, and finally evaluate and validate the MENIoR solution in order to provide to the market an" +
        " integrated environmental monitoring solution that raises the awareness of factory employees on environmental" +
        " conditions and results in more environmentally concerned behaviours.",

        "MENIoR did not use directly the HUBCAP platform nor the sandbox. However, for air quality monitoring inside" +
        " the pilot factories, the HOPU-manufactured IoT device Smart Spot, which is an asset listed" +
        " in the HUBCAP platform, was used.",
        ],
    },
    {
      sectionHeading: "Forward look",
      paragraphs: [
        "As the project has just ended, it is still not easy to estimate how much HUBCAP has impacted the 3" +
        " consortium companies. However, as the project resulted in an innovative integrated solution with key" +
        " benefits for industrial operations, with the proper exploitation by the consortium it is expected for" +
        " HUBCAP to significantly contribute to the portfolio of the companies."
      ],
    },
  ],
  info: {
    endUsers: [
      {
        name: "DRAXIS Environmental",
        website: "https://draxis.gr/",
      }
    ],
    techProviders: [
      {
        name: "HOP Ubiquitous",
        website: "https://hopu.eu/",
      },
      {
        name: "The Predictive Company",
        website: "https://thepredictivecompany.com/",
      },
    ],
    dih: { name: "HUBCAP United Kingdom", website: "https://www.ncl.ac.uk/" },
    domains: [
      "Cyber-Physical Systems",
      "Internet of Things",
      "Digital Twins",
      "Augmented Reality",
      "Environmental Monitoring"
    ],
    impact: [
      "The solution of the project contributed to the increase of employees’ awareness on environmental " +
      "conditions and resulted in more environmentally aware behaviours, as well as provided a tool for " +
      "industries to promote the wellbeing of their employees and increase their productivity;",

      "MENIoR developed a new solution that addresses a clear market need, e.g. the need to improve environmental" +
      " conditions in industrial workplaces;",

      "The solution of the project contributed to the increase of employees’ awareness on environmental " +
      "conditions and resulted in more environmentally aware behaviours, as well as provided a tool for " +
      "industries to promote the wellbeing of their employees and increase their productivity.",

      "The MENIoR solution accelerated the introduction of the 3 consortium companies in a new market," +
      " named “industrial installations”.",


    ],
  },
  tryItNowUrl: "",
  videoUrl: "https://www.youtube.com/embed/jwOaEyEK1ho"
},
   {
    title: "Blockchain in IoT sensors",
    subtitle: "",
    image: "../../assets/res/images/blockchain.png",
    urlName: "blockchain-in-iot-sensors",
    quote: "This public funding program has helped both companies to research and develop the necessary \n" +
      "infrastructure to certify measurements that come from any IoT device. The final development and \n" +
      "implementation is currently under the last testing phase and we are working to have the final version \n" +
      "of AirTrace in middle September, sending the measurements directly from the Bye Radon devices to \n" +
      "the platform and introducing these measurements into the selected blockchain. Without this funding \n" +
      "program, this important R&D project could not have been possible.",
    quoteAttribution: "Francesco di Martino, Future Sense",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "To create and develop an infrastructure and network that can integrate blockchain technology into \n" +
          "any IoT measurement device is the aim of this project.",
          "AirTrace allows the generation of a permissioned blockchain network in the cloud to securely store all \n" +
          "the data and measurements provided by any IoT sensors. Data is stored via two different options: \n" +
          "RestFUL API and MQTT, which are the two most widespread interfaces available for IoT in the world, \n" +
          "allowing AirTrace clients to resort to these mature technologies for communicating IoT data to the \n" +
          "blockchain. This makes it the perfect tool from the HUBCAP ecosystem to test and implement this new \n" +
          "technology in the Bye Radon IoT devices.\n",
          "Future Sense has designed a PCBA that can turn any sensor into an IoT measurement device. They \n" +
          "already count with two air quality sensors called Bye Radon. The first one, focuses on the \n" +
          "measurements of radon (including temperature and humidity sensors); the second device has a wider \n" +
          "air quality scope, also including measurements of PM, TVOCs, eCO2 and atmospheric pressure. For \n" +
          "those who are not familiar with radon, it’s the second leading cause of lung cancer according to the \n" +
          "WHO and results in 84.000 deaths each year worldwide.",
          "Once both companies have developed the blockchain infrastructure, the idea is to use this technology \n" +
          "to expand to other sectors (chemicals, water analysis, etc.) and sensors (CO2, VOCs, PMs, etc.), thus \n" +
          "stimulating and expanding the adoption of more Cyber Physical Systems (CPS).\n",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "During these last months we have been running several tests and analysis of the main platform \n" +
          "requirements for the most suitable implementation of the Bye Radon IoT devices with AirTrace \n" +
          "platform. As a result, we developed several proofs of concepts to validate the entire process, detailed \n" +
          "in the document, with the outcome of an IoT device sending the data directly to two IoT platforms: \n" +
          "Cumulocity (for visualization purposes) and AirTrace (for the introduction of the measured data into \n" +
          "the blockchain). With the work done so far, the Bye Radon devices ensure the source, integrity and \n" +
          "authenticity of the data that the devices send to the cloud, thus avoiding alteration and repudiation.",

          "We have also worked on the deployment of the first pilot project with around 30 devices measuring \n" +
          "temperature, humidity and radon in Cieza (a municipality), University of Cantabria (radon \n" +
          "professionals) and a winery located in La Rioja. We will now focus on the deployment of the second \n" +
          "pilot project that will involve around 10 devices that also measure other air pollutants with the early \n" +
          "adopters, so that we can measure in some locations where we have experienced connectivity \n" +
          "problems. As this second version is manufactured with an external antenna, we think that this can \n" +
          "solve the problems we have encountered. All this will be detailed in the final demo video."
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "The funding supplied by HUBCAP has served both companies. From AirTrace's perspective, working \n" +
          "with a real IoT manufacturer has helped to analyse the requirements that had to be implemented in \n" +
          "the platform to ease the process of implementation for other possible clients (implementing correctly \n" +
          "MQTT protocol).\n",

          "For Bye Radon, to research and implement blockchain technology in their devices was fundamental \n" +
          "before applying to the program, as radon is a societal and health worldwide problem where certified \n" +
          "measurements with the latest technologies drive a real opportunity and change for those who have \n" +
          "experienced lung cancer due to this dangerous gas. To engage with this new technology and start a \n" +
          "new relationship with a blockchain provider has served to open new resources for the company in \n" +
          "terms of new customers, new recurrent income stream and cooperation opportunities.\n",

          "Both companies are now working to lower the cost of this certification and analysing the number of \n" +
          "transactions that need to be done for each group of devices: 1 per client, 1 per device, each 10 \n" +
          "minutes, twice a day, every 24 hours, etc. In the final report we will include our conclusions regarding \n" +
          "this topic. ",
          ],
      },
      {
        sectionHeading: "Forward look",
        paragraphs: [
          "It is too soon to calculate the impact that HUBCAP program has brought to both companies in terms \n" +
          "of sales, income or market opportunities, as both companies are still working to robust the solution \n" +
          "and release the final implementation of the AirTrace in IoT devices. ",

          "In September, after we have finalized this implementation and deployed the second pilot project to \n" +
          "validate the entire blockchain process, we will work on the definition of the commercial strategy for \n" +
          "future collaborations. This will be included in the final deliverable, where we will also include a section \n" +
          "regarding the impact and market opportunities that HUBCAP has brought for both entities, that \n" +
          "without a doubt has been very positive.\n",
        ],
      },
    ],
    info: {
      endUsers: [
        {
          name: "Future Sense",
          website: "https://byeradon.com/",
        }
      ],
      techProviders: [
        {
          name: "Cubic Fort",
          website: "https://airtrace.io/",
        },
      ],
      dih: { name: "HUBCAP Sweden", website: "https://www.kth.se/en" },
      domains: [
        "IoT",
        "Blockchain",
        "Radon",
        "Air quality",
        "Certified measurements",
      ],
      impact: [
        "30 new radon monitored environments + 10 new indoor air quality monitored environments.",
        "With the introduction of blockchain technology, the Bye Radon devices will ensure the source, \n" +
        "integrity and authenticity of the data that the devices send to the cloud, thus avoiding \n" +
        "alteration and repudiation.",
        "Created easy infrastructure to implement blockchain technology in other IoT sensors with " +
        "the 'AirTrace' application",
      ],
    },
    tryItNowUrl: "",
    videoUrl: ""
  },
   {
    title: "GreenWood - Digital Twin For Environmentally-friendly Wood Processing",
    subtitle: "",
    image: "../../assets/res/images/iStock-1149878152.jpg",
    urlName: "greenwood",
    quote: "HUBCAP enabled a risk-free innovation in a very important (energy reduction and environmental protection)" +
      " and business promising area.",
    quoteAttribution: "Data-drivenInnovation",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "The vision of this proposal is to pave the way for a new generation of the wood processing monitoring" +
          " services, which are focused not only on the processes performances (KPIs), but also on the" +
          " eco-friendliness of the process, what we call eco-friendly process quality.",

          "From the technology point of view, GreenWood will model the (near) real-time behaviour of the production" +
          " in the eco-friendly context. It means that GreenWood will be able to a) monitor all parameters related" +
          " to eco-friendliness b) create models of the valid/proper behaviour and c) react on any unusuality in" +
          " the real-time data (before the situation escalates). The green digital twin system then allows to" +
          " monitor the dynamics of production system and predict its behaviour.",

          "From the manufacturing (technology adoption) point of view, main objective is to achieve eco-friendly " +
          "production through RETROFITT existing woodworking machines using data-driven innovations powered by" +
          " Industry 4.0 approach. This is also a part of the orientation of SME adopter (Planeta) toward circular" +
          " economy: existing process environment will be extended with different sensors to collect quality data" +
          " and create behavioral models (aka Digital Twin) which will enable a better understanding of how" +
          " eco-friendly production can be realized.",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "The most important advantage is that HUBCUP supported an innovation that exposes some risks for SMEs." +
          " HUBCAP enabled an environment where this innovation can be boosted in a risk-free manner. Also," +
          " the collaborative work between relevant companies was supported. HUBCAP platform offered an asset" +
          " that provides complex analyses of the manufacturing data (D3Scan, Deep Data Diagnostics through" +
          " Cognitive Scanning). It was very important for the modelling process. Additionally, mentoring " +
          "process is organized in a very efficient way, monitoring the focus of the work and keeping it on" +
          " the defined KPIs and ensuring the continuous progress. "
        ],
      },
      {
        sectionHeading: "Forward look",
        paragraphs: [
          "CPS technology provider, Helin (coordinator) is a provider of the CPS integration services " +
          "(Polaris Platform), will establish new services in the domain of developing affordable eco-quality" +
          " monitoring infrastructure." +
          "Manufacturing user (MBD CPS user), Planeta can improve own competitiveness with eco-quality" +
          " in the global market, esp. after the pandemic crisis which provided a lot of challenges for SMEs.",

          "There are two main business advantages:\n" +
          "Developed system is a new service which can be applied in various domains. Therefore, it opens new" +
          " (promising) markets for the technology provider" +
          "In addition, existing Platform (Polaris) for edge computing will be extended with advanced" +
          " energy-environment data analytics.",
        ],
      },
    ],
    info: {
      endUsers: [
        {
          name: "PLANETA Technologies",
          website: "https://planetanamestaj.com/?page_id=4920",
        }
      ],
      techProviders: [
        {
          name: "HelinData",
          website: "https://www.helindata.com/",
        },
        {
          name: "Nissatech",
          website: "https://www.nissatech.com/",
        },
      ],
      dih: { name: "HUBCAP Italy", website: "https://www.polimi.it/" },
      domains: [
        "Eco-friendly Production",
        "Furniture Industry",
        "Edge Processing",
      ],
      impact: [
        "New quality monitoring approach for eco-friendliness wood making process.",
        "New methods for understanding the impact of the energy consumption on the environment.",
        "Finding the opportunities for the improvement of the eco-friendliness of the wood making process.",
      ],
    },
    tryItNowUrl: "",
    videoUrl: ""
  },

];



