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
    ],
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
    quote: "With this project we break through the most difficult aspect of time-optimized radiation detector design," +
           " simulating particle tracks and detector dimensions till we find an optimized solution," +
           " reducing the cost of new detector development 10-fold timewise.",
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
    tryItNowUrl: "https://hubcap-portal.eng.it/group/guest/catalogue-detail?d_eid=HC582649-b9gc-4n16-0163-262631670163",
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
    tryItNowUrl: "https://hubcap-portal.eng.it/group/guest/catalogue-detail?d_eid=HC582649-b9np-4r16-0176-710271670176",
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
    tryItNowUrl: "https://hubcap-portal.eng.it/group/guest/catalogue-detail?d_eid=HC582649-b9gv-4r16-0164-916711670164",
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
          name: "EMDIP",
          website: "https://www.emdip.com",
        },
      ],
      techProviders: [
        {
          name: "Nissatech",
          website: "https://www.nissatech.com",
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
    tryItNowUrl: "https://hubcap-portal.eng.it/group/guest/catalogue-detail?d_eid=HC582649-b9ho-4016-0165-277121670165",
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
          name: "Metricon",
          website: "https://metricon.gr/ ",
        },
      ],
      techProviders: [
        {
          name: "Intellia ICT",
          website: "https://www.intellia.gr/",
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
    tryItNowUrl: "https://hubcap-portal.eng.it/group/guest/catalogue-detail?d_eid=HC582649-b3t9-4g16-9822-194521669822",
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
          " developed a total cost ownership report based on inputs." +
          " In conclusion, the transport agency received a powerful decision tool as a result of simulation of" +
          " its existing bus operation schedule operated by electric bus models. The aim was to validate their" +
          " operability, accurately predict real energy consumption, optimise the battery capacity, and plan the" +
          " charging infrastructure with a focus on minimizing the total cost of ownership and CO2 generation.",
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
          " involved in other pilot projects, e.g. GoWhippet from Cambridge and Tugsal in Barcelona.",
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
    tryItNowUrl: "https://hubcap-portal.eng.it/group/guest/catalogue-detail?d_eid=HC582649-b9jy-4c16-0169-769881670169",
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
        "High-Performance Computing",
      ],
      impact: [
        "Both companies have advanced their digital tools thanks to HUBCAP.",

        "The provider has extended their cloud computing technology to allow dedicated simulation" +
        " tools in MPflow® for hydrogen calculations.",

        "The adopter has upgraded their digitalisation level though the unique MSCC (Massive" +
        " Simultaneous Cloud Computing) of KaleidoSim OpenFoam®.",

        "The integration of machine-learning in MPflow® using the unique hydrogen data collected" +
        " has set the groundwork for more advances in the field of computer simulations in process" +
        " engineering.",
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
    quote: "MBD can substantially facilitate the functionality optimization of physical assets. We observed through HUBCAP that the steps followed to build MBD really give a thorough understanding of the asset, preparing it for rapid development and prototyping. Furthermore, the critical parameters allocation and their control can improve performance and decrease cost." +
      " Our advice as DELTA MPIS is for SMEs to get to know Model-Based Design and IoT in order to enter the rapidly growing sector of Cyber Physical Systems and also make their product and services up to speed with industry 4.0, smart manufacturing and Digital Twinning.",
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
    tryItNowUrl: "https://hubcap-portal.eng.it/group/guest/catalogue-detail?d_eid=HC582649-b9l5-4n16-0171-868791670171",
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
    tryItNowUrl: "https://hubcap-portal.eng.it/group/guest/catalogue-detail?d_eid=HC582649-b3ui-4g16-9824-799481669824",
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
    tryItNowUrl: "https://hubcap-portal.eng.it/group/guest/catalogue-detail?d_eid=HC582649-b9ly-4r16-0173-190631670173",
    videoUrl: "https://www.youtube.com/embed/gMKy90laEh0"
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
          name: "Mira Solutions",
          website: "https://mirabroker.ro/",
        },
      ],
      techProviders: [
        {
          name: "Evotech Services",
          website: "https://www.evotech.ro/#",
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
    title: "Digital Twin for Active Sprayer Boom Yaw Control (ASBC)",
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
          name: "Danfoil",
          website: "https://www.danfoil.dk",
        },
      ],
      techProviders: [
        {
          name: "Schmidt Innovation ApS",
          website: "https://www.sinno.dk",
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
 title: "Additive Manufacturing for Quality and Monitoring System (AM QTOOLS)",
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
       "Metal Additive Manufacturing (AM) is a complex operation that requires fine-tuning of hundreds of" +
       " parameters of processes to achieve repeatability and a good quality design at dimensional, geometric, and structural" +
       " levels. Among the major technological challenges, many recent reports mention the need to achieve smart metal" +
       " AM process control to ensure quality, consistency, and reproducibility across AM machines. In addition," +
       " most industrial AM systems are equipped with sensors providing log signals, images, and videos" +
       " that constitute a huge amount of data collected in metal AM processes, but there is no consolidated solution" +
       " in industrial practice capable of analyzing this data in real-time for quality control.",

       "To help manufacturing companies address these challenges, AM QTOOLS developed an innovative quality-oriented" +
       " decision support framework, composed of: (i) a model-based design (MBD) tool providing Design for Additive" +
       " Manufacturing (DfAM) features, and (ii) a cyber-physical system (CPS) created by integrating an Additive" +
       " Manufacturing (AM) asset with a real-time smart monitoring software application. The framework caters to" +
       " the needs of process engineers and quality managers in order to improve a set of quality and economic KPIs.",

       "AM QTOOLS results include validated quality-oriented predictive models that support the a-priori selection" +
       " of optimal process parameter combinations and in-process monitoring of the quality outcomes." +
       " The models, integrated into the CPS, enable the improvement of critical manufacturing KPIs, such as lead time" +
       " (e.g. by reducing the need for downstream quality inspections and reducing production times) and cost" +
       " of quality (e.g. by reducing inspection requirements).",
     ],
   },
   {
     sectionHeading: "What we did",
     paragraphs: [
       "The development and operational phases of the AM QTOOLS project were carried out in two overlapping steps." +
       " The first step created the quality-oriented framework. The quality-oriented MBD approach abstracts the" +
       " technical requirements and creates the project file containing all the necessary instructions" +
       " for the cyber-physical system to print the designed parts. The link between the MBD approach and the" +
       " cyber-physical system is provided by a catalogue of the features for aluminium parts that can be printed" +
       " with a Laser Powder Bed Fusion (LPBF) process, and of common defects, which captures available design" +
       " know-how regarding the limits of such technology. Crucially, such information is enhanced by the knowledge" +
       " generated by the CPS. The CPS augments the monitoring capabilities of advanced AM systems, and integrates" +
       " quality-oriented predictive models to enable smart process monitoring. Such models have been created by" +
       " defining and executing targeted process DOEs, persisting machine and process data, and collecting the" +
       " corresponding quality information obtained by CT-Scan, Optical Tomography (OT), and Metallography Cut-Up.",

       "The second step validated the AM QTOOLS framework in operation. To support the MBD phase, the" +
       " CPS supplied the information useful to improve the project file and print the part by maximizing the part" +
       " quality based on the design specifications. Decision support is enabled by the predictive models integrated" +
       " in Smart ProdACTIVE, tracking the process outputs and, through advanced data analytics, providing" +
       " information of the expected quality outcomes of a specific setup. Accordingly, AM production has been" +
       " carried out and Smart ProdACTIVE has been applied to monitor and validate the improved part design.",
     ],
   },
   {
     sectionHeading: "HUBCAP support and platform opportunity",
     paragraphs: [
       "HUBCAP provided invaluable support, especially for:",

       "• Guidance in order to improve AM QTOOLS project management and meet the tight project constraints and schedule.",

       "• Co-funding that has been very important in order to finance costly activities," +
       " such as metal AM production and inspection processes for various samples and parts.",

       "• A platform that allows publishing and dissemination of working project results to a wide variety of stakeholders."
       ],
   },
   {
     sectionHeading: "Forward look",
     paragraphs: [
       "Whilst it is early to estimate precisely the business impact of the AM QTOOLS project, HUBCAP funding" +
       " provided us with a unique opportunity to focus on an industrial challenge and to produce practical, working" +
       " results. AM QTOOLS opened communications with business stakeholders (i.e. AM manufacturers," +
       " inspection laboratories, and AM machines producers): the potential direct impact may be estimated at around" +
       " €100K of additional turnaround for 2023, as development and integration services of smart monitoring solutions."
     ],
   },
 ],
 info: {
   endUsers: [
     {
       name: "Kilometro Rosso",
       website: "https://www.kilometrorosso.com",
     },
     {
      name: "PRES-X",
      website: "https://www.pres-x.com",
    },
   ],
   techProviders: [
     {
       name: "EnginSoft",
       website: "https://www.enginsoft.com",
     },
   ],
   dih: { name: "HUBCAP Italy", website: "https://www.polimi.it/" },
   domains: [
     "Digital manufacturing",
     "In-process quality monitoring",
     "Metal additive manufacturing",
   ],
   impact: [
     "In-process quality monitoring for metal Additive Manufacturing.",
     "A method to increase process knowledge and support manufacturing decisions.",
     "Improvements in KPIs (e.g. lead time and COQ).",
   ],
 },
 tryItNowUrl: "https://hubcap-portal.eng.it/group/guest/catalogue-detail?d_eid=HC582649-bqgz-4q16-1192-094421671192",
 videoUrl: "https://www.youtube.com/embed/u4eVtTE6vjc"
},
   {
 title: "Autonomous Robotic UAV Platform for the ‘as-built’ Modeling of Building Assets",
 subtitle: "Autonomous Robotic UAV Platform for the ‘as-built’ Modelling of Building Assets",
 image: "../../assets/res/images/CPS4asBuild.png",
 urlName: "cps4as",
 quote: "The HUBCAP funding enabled the use of Model-Based Design techniques to assist VERTLINER to" +
   " evaluate the current performance of its aerial system in the given conditions, to help understand the" +
   " critical parameters that affect the system within its environment and mission profiles, while allowing" +
   " the design of a dedicated UAV optimized for the specific tasks prior to committing to a ‘next gen’" +
   " physical prototype.",
 quoteAttribution: "Michael Striligkas, CEO VERTLINER",
 sections: [
   {
     sectionHeading: "Problem and solution",
     paragraphs: [
       "The future of UAVs in commercial applications is no longer a far-off futuristic idea. Drones have quickly" +
       " become widely used by tech and retail giants like Amazon, Facebook, Wal-Mart, and Google," +
       " not to mention by various industries like real estate, police and fire departments, farming, cinema," +
       " construction, and photography that stand to benefit greatly from commercial drone use.",

       "However, drone engineering and development are still very lengthy phases, which use existing tools and use" +
       " processes inherited mainly from the aerospace industry. Also, the design of these systems usually" +
       " follows a very conservative approach to ensure that the developed product can be used in various" +
       " missions and reach a wide range of applications, and hence customers. Thus, the engineering" +
       " of commercial drones is separated from their actual missions and the specific needs of individual businesses." +
       " Most businesses adopting, or thinking of adopting, innovative business practices that use drones" +
       " retrofit a commercially available system, knowing and accepting that existing drones are not optimal" +
       " for their business plans.",

       "The response of the CPS4AsBuild project to this situation is to deliver a Drone/UAV designer toolset" +
       " based on the MBD philosophy and advanced algorithms. The developed toolset gives any business or" +
       " individual the power to design a custom UAV that is optimal for its purpose and has a tailored design" +
       " that starts from the business case and strategy."
     ],
   },
   {
     sectionHeading: "What we did",
     paragraphs: [
       "The growing trend of urbanization is pushing the construction industry to develop high-rise buildings," +
       " thereby increasing their precision requirements, which are hard to guarantee as the size and height" +
       " of buildings increase, especially for auxiliary building assets. For example, the measurement activity of new buildings" +
       " is considered a thorough, lengthy, and risky process, since contractors are required to" +
       " visit each floor physically, inspect the structural dimensions and orientation, and ensure the building's" +
       " compliance with its specifications. CPS4AsBuild is a novel inspection system, consisting of" +
       " a robotic UAV connected to a cloud platform, which digitizes hard-to-reach building assets by" +
       " traversing confined spaces, and collects, analyses, and delivers structural data quickly, safely, and accurately." +
       " VERTLINER has developed a prototype (TRL5) that is currently operated and tested in several" +
       " autonomous missions within construction sites, and is equipped with depth and visual-inertial odometry" +
       " cameras and LIDARs, as well as obstacle avoidance capability along the vertical direction not available" +
       " in most commercial UAVs.",

       "The prototype was built with various off-the-shelf components and following basic concepts and guidelines." +
       " The test missions revealed numerous functional limitations of the current quadcopter version" +
       " that need to be considered and optimized in the next steps of the product development" +
       " to allow dedicated designs for specific missions and operation in indoor confined spaces.",

       "The developed toolset was used to assist VERTLINER to evaluate the current performance of the" +
       " system in the given conditions, help understand the critical parameters that affect the system within" +
       " its environment and mission profiles, and allow the design of a dedicated UAV optimized for the" +
       " specific tasks prior to committing to a ‘next gen’ physical prototype."
     ],
   },
   {
     sectionHeading: "HUBCAP support and platform opportunity",
     paragraphs: [
       "HUBCAP provided the opportunity to both companies to engage with new digital technologies," +
       " experiment with MBD tools, and succeed on the main goals of the project, summarized below:",

       "1. Create a model-based digital replica of the system, to allow for optimized flight control and a" +
       " decrease in vehicle size by 25%, leading to an advanced dedicated design.",
       "2. Mechanically restructure the current UAV with a goal to decrease its total weight by 30% and" +
       " increase battery life to 25 minutes.",
       "3. Optimize the dynamics, stability, and controls to achieve accuracy below 15mm.",
       "4. Time to conduct a full indoor measurement and deliver the results within 60 seconds upon completion.",
       ],
   }, /*
   {
     sectionHeading: "Forward look",
     paragraphs: [
       ""
     ],
   }, */
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
     "Inspection",
     "Buildings",
     "Digital Twin",
     "Unmanned Aerial Systems"
   ],
   impact: [
     "Decrease the duration of generating the ‘as-built model’ of a newly developed building asset," +
     " reducing the need for multiple transfers to the project site.",

     "Diminishing the risks of procurement of equipment not compliant with the building’s actual specifications," +
     " allowing the accurate planning of installation directly on the generated models.",

     "Create a full digital twin that will optimize its performance from design to end-of-life," +
     " based on the business strategy, the unique mission profiles, and customer needs.",
   ],
 },
 tryItNowUrl: "https://hubcap-portal.eng.it/group/guest/catalogue-detail?d_eid=HC582649-bqmn-4y16-1202-062861671202",
 videoUrl: "https://www.youtube.com/embed/ICB6OieUZWc"
},
   {
  title: "Threat Management Platform for Citizens' Safety at Venues",
  subtitle: "",
  image: "../../assets/res/images/bie-t4s.png",
  urlName: "bie-t4s",
  quote: "The main benefits BEAM gained from participating in the INNOVATE call was to advance our own technology" +
         " by offering dynamic evacuation route calculation and complex event processing" +
         " for detection of incidents and venue evacuation, broadening the company portfolio" +
         " and also having completed the validation of our technology in real scenarios.",
  quoteAttribution: "- Romica Manolache, Chief Marketing Officer of Beam Innovation",
  sections: [
    {
      sectionHeading: "Problem and solution",
      paragraphs: [
        "The goal of the project was to employ model-based design to enhance the T4S platform, developed" +
        " by Thridium, with business intelligence introduced by the HUBCAP partner BEAM.",

        "The new integrated BIE-T4S (Business Intelligence Enhanced T4S) platform will support different IoT" +
        " sensors (e.g. WiFi access points and CCTV cameras) and process real-time data using business" +
        " intelligence tools to provide valuable input: indoor positioning, crowd distribution, dynamic" +
        " evacuation routing, and real-time visualizations. This input will then be used by the revamped BIE-T4S" +
        " platform (mature at TRL7) to offer security-oriented components (common operational picture," +
        " events management, task allocation, and security crew mobile app) that will be available to" +
        " the venue security officers for better crisis assessment and emergency response.",

        "The goal is to provide the integrated BIE-T4S platform as a venue-agnostic threat management" +
        " platform that enables increased preparedness against different types of threat (e.g. terrorism," +
        " natural disasters, and pandemics) and supports the complete lifecycle evacuation management in any" +
        " crowded place.",
      ],
    },
    {
      sectionHeading: "What we did",
      paragraphs: [
        "We validated the system under real operational conditions and found that the system" +
        " complied with over 90% of the threats.",

        "During the experiment, we analysed the alarms received and concluded that all incidents were successfully detected."
      ],
    },
    {
      sectionHeading: "HUBCAP support and platform opportunity",
      paragraphs: [
        "Use of the HUBCAP platform allowed the preparation of BEAM’s software to work with Thridium's" +
        " T4S system, and enabled further development and integration of the products of the two companies." +
        " The HUBCAP funding allowed both companies to develop further" +
        " their respective technologies and to develop a new solution that benefited from their combined know-how.",
        ],
    }, /*
    {
      sectionHeading: "Forward look",
      paragraphs: [
        ""
      ],
    }, */
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
      "Identification of events in real-time and handling of security incidents can be done using a single integrated platform.",
      "The BIE-T4S platform acts as a bonding agent between legacy systems and the operational" +
      " functionalities required by operators of complex venues from a security standpoint.",
    ],
  },
  tryItNowUrl: "https://hubcap-portal.eng.it/group/guest/catalogue-detail?d_eid=HC582649-bqjj-4316-1196-847791671196",
  videoUrl: "https://www.youtube.com/embed/vhl8gjxpKcc"
},
   {
  title: "Monitoring Environmental Conditions in Industrial Operations",
  subtitle: "",
  image: "../../assets/res/images/MENIoR-in-vivo.png",
  urlName: "menior",
  quote: "HUBCAP gave the consortium companies the opportunity to combine their expertise in environmental intelligence," +
         " IoT sensing, and occupational health to develop a solution that raises the awareness of industrial employees" +
         " about the impact of environmental conditions in their work environment and helps them protect their wellbeing.",
  quoteAttribution: "MENIoR Team",
  sections: [
    {
      sectionHeading: "Problem and solution",
      paragraphs: [
        "Monitoring environmental conditions in factories, such as air quality and temperature," +
        " can help employers and employees to plan their activities better and promptly take measures to" +
        " avoid environmental accidents and health issues.",

        "The purpose of the MENIoR project was to enable industrial operators understand and improve the environmental conditions" +
        " inside their units, and also to raise awareness of employees about the impact of environmental conditions," +
        " by leveraging the potential of the Internet of Things (IoT) with the application of augmented reality and digital twin techniques.",
      ],
    },
    {
      sectionHeading: "What we did",
      paragraphs: [
        "A low-cost environmental monitoring network was developed and" +
        " installed inside two Spanish factories: Fagesta S.L. and Lisanplast S.L. The network collected" +
        " air quality measurements in real-time, as well as data on other environmental parameters, such as" +
        " temperature, humidity, and concentrations of CO2. This information was then analysed on the cloud" +
        " and visualised on a web-based digital twin platform that was provided to factory administrators to assess scenarios" +
        " for environmental improvement inside the factories. In addition, factory employees were given access" +
        " to visualisations of the data via an augmented reality mobile application.",

        "During the pilot implementation phase of the project, the factories had the opportunity to test our" +
        " system and provided us with feedback. This enabled us to evaluate and improve the system" +
        " in order to address market needs better.",
      ],
    },
    {
      sectionHeading: "HUBCAP support and platform opportunity",
      paragraphs: [
        "HUBCAP enabled the consortium companies to accelerate their introduction to the market of industrial installations." +
        " HUBCAP funding was used to develop and set up a low-cost environmental monitoring network," +
        " deliver a web-based digital twin platform, and an augmented reality mobile application," +
        " and to evaluate and validate the MENIoR solution in order to provide to the market an" +
        " integrated environmental monitoring solution that raises the awareness of factory employees on environmental" +
        " conditions and results in more environmentally concerned behaviours.",

        "MENIoR did not use the HUBCAP platform nor the sandbox directly. However, for monitoring air quality inside" +
        " the pilot factories, the HOPU-manufactured IoT device Smart Spot was used, which is an asset on the HUBCAP platform.",
        ],
    },
    {
      sectionHeading: "Forward look",
      paragraphs: [
        "As the project has ended very recently, it is not easy to estimate how much HUBCAP has impacted the three" +
        " consortium companies. However, as the project resulted in an innovative integrated solution with key" +
        " benefits for industrial operations, with proper exploitation by the consortium," +
        " it is expected that HUBCAP has contributed significantly to the portfolios of the companies."
      ],
    },
  ],
  info: {
    endUsers: [
      {
        name: "The Predictive Company",
        website: "https://thepredictivecompany.com/",
      },
    ],
    techProviders: [
      {
        name: "DRAXIS Environmental",
        website: "https://draxis.gr/",
      },
      {
        name: "HOP Ubiquitous",
        website: "https://hopu.eu/",
      },
    ],
    dih: { name: "HUBCAP United Kingdom", website: "https://www.ncl.ac.uk/" },
    domains: [
      "Cyber-Physical Systems",
      "Internet of Things",
      "Digital Twins",
      "Augmented Reality",
      "Air Quality Monitoring",
      "Environmental Monitoring"
    ],
    impact: [
      "The project developed an innovative technological solution that addresses a clear market need:" +
      " the improvement of environmental conditions in industrial workplaces.",

      "The MENIoR system provides health and safety managers in industry" +
      " with a tool to promote the well-being of employees and thereby increase their productivity.",

      "The system contributes to an increase of employee awareness of environmental conditions" +
      " that should result in more environmentally aware behaviours.",

      "The MENIoR solution accelerated the introduction of the three consortium companies to a new market," +
      " namely, “industrial installations”.",
    ],
  },
  tryItNowUrl: "https://hubcap-portal.eng.it/group/guest/catalogue-detail?d_eid=HC582649-bqkd-4v16-1198-756671671198",
  videoUrl: "https://www.youtube.com/embed/jwOaEyEK1ho"
 },
  {
  title: "Data-Driven Digital Twin supporting Efficient and Environmental-Friendly Wood Processing (GreenWood)",
  subtitle: "",
  image: "../../assets/res/images/GreenWood.png",
  urlName: "GreenWood",
  quote: "HUBCAP enabled a risk-free innovation in a very important (energy reduction and environmental protection)" +
         " and business promising area.",
  quoteAttribution: "The GreenWood Team",
  sections: [
    {
      sectionHeading: "Problem and solution",
      paragraphs: [
        "The vision of this project was to pave the way for a new generation of wood processing monitoring services" +
        " that are focused not only on process performance (KPIs) but also on the eco-friendliness of the process," +
        " what we term eco-friendly process quality.",

        "From the technology point of view, GreenWood modelled the (near) real-time behaviour of the production" +
        " in the eco-friendly context. This means that GreenWood:",

        " a) Monitored all parameters related to eco-friendliness.",

        " b) Created models of the valid/proper behaviour.",

        " c) Reacted on any unusual real-time data before the situation escalated.",

        " The green digital twin system enabled monitoring of the dynamics of the production system and prediction of its behaviour.",

        "From the manufacturing (technology adoption) point of view, the main objective was to achieve eco-friendly production" +
        " through retrofitting of existing wood working machines using data-driven innovations powered by the Industry 4.0 approach." +
        " This is also a part of the orientation of the SME adopter Planeta toward a circular economy," +
        " where the existing process environment is extended with different sensors to collect quality data" +
        " and behavioral models are created (digital twin) to enable a better understanding" +
        " of how eco-friendly production can be realized.",
      ],
    },
    {
      sectionHeading: "What we did",
      paragraphs: [
        "The project activities are illustrated in the diagram."
      ],
    },
    {
      sectionHeading: "HUBCAP support and platform opportunity",
      paragraphs: [
        "Most importantly, HUBCUP supported an innovation that otherwise would have exposed the SMEs to some risks." +
        " HUBCAP enabled an environment where this innovation was boosted in a risk-free manner." +
        " Also, the collaborative work between relevant companies was supported. The HUBCAP platform offered an asset" +
        " that provides complex analyses of manufacturing data (D3Scan, Deep Data Diagnostics through Cognitive Scanning)," +
        " which was very important for the modelling process. Additionally, the mentoring process was organized" +
        " in a very efficient way: monitoring the focus of the work, keeping it on the defined KPIs," +
        " and ensuring continuous progress.",
        ],
    },
    {
      sectionHeading: "Forward look",
      paragraphs: [
        "Helin, the provider of the CPS integration services (Polaris platform)," +
        " will establish new services in the domain of affordable eco-quality monitoring infrastructure.",

        "Planeta, the furniture manufacturer, can improve competitiveness with eco-quality in the global market." +
        " This is important following the pandemic crisis, which caused many challenges for SMEs.",

        "There are two main business advantages:",

        "The developed system is a new service that can be applied in various domains (outside the furniture industry)." +
        " Therefore, the system opens new (promising) markets for the technology providers.",

        "The existing Polaris platform for edge computing will be extended with advanced energy-environment data analytics.",
      ],
    },
  ],
  info: {
    endUsers: [
      {
        name: "Planeta",
        website: "https://planetanamestaj.com/",
      },
    ],
    techProviders: [
      {
        name: "Helin",
        website: "https://www.helindata.com/",
      },
      {
        name: "Nissatech",
        website: "https://www.nissatech.com",
      },
    ],
    dih: { name: "HUBCAP Italy", website: "https://www.polimi.it" },
    domains: [
      "Eco-friendly production",
      "Furniture industry",
      "Edge processing",
    ],
    impact: [
      "New approach to monitoring quality for eco-friendly wood working processes.",
      "New methods for understanding the impact of energy consumption on the environment.",
      "Finding opportunities for improvement of the eco-friendliness of wood working processes.",
    ],
  },
  tryItNowUrl: "https://hubcap-portal.eng.it/group/guest/catalogue-detail?d_eid=HC582649-bql8-4216-1199-551301671199",
  videoUrl: "https://www.youtube.com/embed/8yUy0eiSdEo"
  },
   {
    title: "Blockchain in IoT sensors",
    subtitle: "",
    image: "../../assets/res/images/blockchain.png",
    urlName: "blockchain-in-iot-sensors",
    quote: "This public funding program has helped both companies to research and develop the necessary" +
          " infrastructure to certify measurements that come from any IoT device. The final development and" +
          " implementation is currently under the last testing phase and we are working to have the final version" +
          " of AirTrace in middle September, sending the measurements directly from the Bye Radon devices to" +
          " the platform and introducing these measurements into the selected blockchain. Without this funding" +
          " program, this important R&D project could not have been possible.",
    quoteAttribution: "Francesco di Martino, Future Sense",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "The aim of this project was to create and develop an infrastructure and network" +
          " that can integrate blockchain technology into any IoT measurement device.",

          "AirTrace allows the generation of a permissioned blockchain network in the cloud to store securely all" +
          " the data and measurements provided by any IoT sensor. The data is stored via two different options:" +
          " RestFUL API and MQTT, which are the two most widespread interfaces available for IoT in the world," +
          " allowing AirTrace clients to resort to these mature technologies for communicating IoT data to the blockchain." +
          " This makes AirTrace the perfect tool from the HUBCAP ecosystem to test and implement this new" +
          " technology for Bye Radon IoT devices.",

          "Future Sense has designed a printed circuit board assembly that can turn any sensor into an IoT measurement device." +
          " They already work with two air quality sensors called Bye Radon. The first focuses on the" +
          " measurements of radon (including temperature and humidity sensors). The second device has a wider" +
          " air quality scope, also including measurements of particulate matter (PM)," +
          " total volatile organic compounds (TVOCs), equivalent carbon dioxide (eCO2), and atmospheric pressure." +
          " Radon is a radioactive gas, it is the second leading cause of lung cancer according to the" +
          " WHO, and results in 84,000 deaths each year worldwide.",

          "Once both companies had developed the blockchain infrastructure, the idea was to use this technology" +
          " to expand to other sectors (e.g. chemicals and water analysis) and sensors (e.g. CO2, VOCs, and PMs), thus" +
          " stimulating and expanding the adoption of more cyber-physical systems (CPS).",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "During these last months we have been running several tests and analysis of the main platform" +
          " requirements for the most suitable implementation of the Bye Radon IoT devices with the AirTrace platform." +
          " As a result, we developed several proofs of concept to validate the entire process," +
          " with the outcome of an IoT device sending its data directly to two IoT platforms:" +
          " Cumulocity (for visualization purposes) and AirTrace (for the introduction of the measured data into" +
          " the blockchain). With the work done so far, the Bye Radon devices ensure the source, integrity, and" +
          " authenticity of the data that the devices send to the cloud, thus avoiding alteration and repudiation.",

          "We have also worked on the deployment of the first pilot project with around 30 devices measuring" +
          " temperature, humidity, and radon in Cieza (a municipality in Spain), University of Cantabria (radon" +
          " professionals), and a winery located in La Rioja. We will now focus on the deployment of the second" +
          " pilot project that will involve around 10 devices that also measure other air pollutants with the early" +
          " adopters, so that we can measure in some locations where we have experienced connectivity problems." +
          " As this second version is manufactured with an external antenna," +
          " we think this can solve the problems we have encountered.",
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "The funding supplied by HUBCAP has served both companies. From the AirTrace perspective, working" +
          " with a real IoT manufacturer has helped to analyse the requirements that had to be implemented in" +
          " the platform to ease the process of implementation for other possible clients" +
          " (e.g. correct implementation of the MQTT protocol).",

          "For Bye Radon, to research and implement blockchain technology in their devices was of fundamental importance" +
          " before applying to the programme, as radon is a societal and health problem worldwide where certified" +
          " measurements with the latest technologies drive a real opportunity and change for those who have" +
          " experienced lung cancer due to this dangerous gas. To engage with this new technology and start a" +
          " new relationship with a blockchain provider has served to open new resources for the company in" +
          " terms of new customers, new recurrent income stream, and cooperation opportunities.",

          "Both companies are now working to lower the cost of certification and analysing the number of" +
          " transactions that need to be done for each group of devices: 1 per client, 1 per device, each 10 minutes," +
          " twice a day, every 24 hours, and so on.",
          ],
      },
      {
        sectionHeading: "Forward look",
        paragraphs: [
          "It is too soon to calculate the impact that the HUBCAP programme has brought to both companies in terms" +
          " of sales, income, or market opportunities, as both companies are still working to make robust the solution" +
          " and release the final implementation of AirTrace in IoT devices." +
          " However, the impact and market opportunities that HUBCAP has brought for both companies has been," +
          " without a doubt, very positive." +
          " In September, after we have finalized the implementation and deployed the second pilot project to" +
          " validate the entire blockchain process, we will work on the definition of the commercial strategy" +
          " for future collaborations.",
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
        "30 new radon monitored environments and 10 new indoor air quality monitored environments.",

        "With the introduction of blockchain technology, the Bye Radon devices will ensure the source," +
        " integrity, and authenticity of the data that the devices send to the cloud, thus avoiding" +
        " alteration and repudiation.",

        "Created easy infrastructure to implement blockchain technology in other IoT sensors with the AirTrace application.",
      ],
    },
    tryItNowUrl: "https://hubcap-portal.eng.it/group/guest/catalogue-detail?d_eid=HC582649-bqmn-4y16-1202-062861671202",
    videoUrl: "https://www.youtube.com/embed/iTEqXMXI1rw"
  },
   {
  title: "Wheat Yield Prediction (WHY-PRED)",
  subtitle: "We investigated how to support the farmer with a decision support system to fertilize the right amount" +
    " at the right moment while minimizing environmental impact.",
  image: "../../assets/res/images/WHY-PRED2.png",
  urlName: "why-pred",
  quote: "The HUBCAP project enabled us to do the groundwork for developing a decision support" +
    " system for small and medium sized farming companies. Thanks to the funding we have been" +
    " enabled to look into this really interesting topic.",
  quoteAttribution: "David Lumpp, Agricultural Engineer DatenBerg",
  sections: [
    {
      sectionHeading: "Problem and solution",
      paragraphs: [
        "\"Should I fertilise today or not?\" The answer to this question on smaller farms is often based on the" +
        " subjective experience of the farmer. On the one hand, a wrong decision has monetary effects - unnecessarily" +
        " used fertiliser generates costs and requires working time. However, fertiliser that is not used also has" +
        " negative effects, such as a lower crop yield. With falling food prices, too low a profitability can pose" +
        " livelihood problems for the farmer. From a more holistic point of view, over fertilization also" +
        " unnecessarily pollutes the environment - with sodium or phosphorus. Increasingly dynamic weather" +
        " patterns due to climate change also present SMEs with the challenge that historical empirical values about" +
        " the weather can no longer be extrapolated. WHY-PRED investigated the extent to which these challenges" +
        " can be resolved, and the farmer supported through data-based approaches, while at the same time minimising" +
        " the environmental impact.",
      ],
    },
    {
      sectionHeading: "What we did",
      paragraphs: [
        "During the project, available process models for wheat cultivation were evaluated and adapted to a" +
        " specific application for the Hedwigshof farm. The models were calibrated to Karlsruhe and enriched" +
        " with historical data. The aim was to show the farmer the impact on crop yield of the decision" +
        " \"Should I fertilise today?\" This enables a cost-optimal fertilisation that simultaneously minimises the" +
        " environmental impact."
      ],
    },
    {
      sectionHeading: "HUBCAP support and platform opportunity",
      paragraphs: [
        "With the help of the funding, the SME could be accompanied on its way to becoming a digital farm." +
        " In addition, available academic models were examined for possible applications in the day-to-day operations" +
        " of a small farm and their limits were evaluated. With the experience gained, a decision support" +
        " system can be developed that makes Agriculture 4.0 also accessible for SMEs.",
        ],
    },
    {
      sectionHeading: "Additional Information",
      paragraphs: [
        "During the project the model WOFOST (WOrld FOod STudies) of Wageningen University was used.",
      ],
      //add hyperlink to linker so there isnt a long url
    },
  ],
  info: {
    endUsers: [
      {
        name: "Hedwigshof",
        website: "https://www.hedwigshof.de",
      }
    ],
    techProviders: [
      {
        name: "DatenBerg GmbH",
        website: "https://www.datenberg.eu",
      },
    ],
    dih: { name: "HUBCAP United Kingdom", website: "https://www.ncl.ac.uk/" },
    domains: [
      "Agriculture 4.0",
      "Decision support systems",
      "Wheat yield forecasting",
    ],
    impact: [
      "Agricultural models explored.",
      "Logbook needs identified."
    ],
  },
  tryItNowUrl: "https://hubcap-portal.eng.it/group/guest/catalogue-detail?d_eid=SdlpkH4B4ofP5ecug555",
  videoUrl: ""
},
   {
  title: "Safety First Development of Micro-mobility Sharing Platform (SAFE2GO)",
  subtitle: "The project consists of developing a real use case (SAFE2GO) to take advantage of the synergies" +
    " between two companies: on the one hand, the safety capabilities and optimization of an MBD platform, and on" +
    " the other hand, a real product with safety requirements.",
  image: "../../assets/res/images/safe2go.png",
  urlName: "sage2go",
  quote: "Hubcap has provided the framework to, from the most general to the most concrete contribution: know part" +
    " of the european MBD and CPS community, their products and challenges; allow to look for a complementary" +
    " partner and meet in depth its company and product, and last but not least, work in a real use case to help" +
    " both of us improving our tools and processes. Specifically, the implementation of new features in Developair" +
    " and the improvement of the tool in general, and the improvement of processes’ efficiency and the quality of the" +
    " product in the case of KMB.",
  quoteAttribution: "KMB Lab",
  sections: [
    {
      sectionHeading: "Problem and solution",
      paragraphs: [
        "The goal of the proposed SAFE2GO experiment was to incorporate novel MBD tools into the hardware and" +
        " software development practices of an e-scooter sharing platform (BOOST) to ensure safety requirements" +
        " are always strictly met under all conditions of e-scooter use. At the same time, Developair" +
        " (a HUBCAP SME asset) offers MDB tools for verification of requirements and automatic test generation," +
        " enabling optimization of the software development life cycle.",
      ],
    },
    {
      sectionHeading: "What we did",
      paragraphs: [
        "First, the architecture and safety requirements of the BOOST use case (of KMB) were specified" +
        " using Model-Based Design tools provided by Developair. New features were implemented that make the" +
        " tool more powerful and versatile. Specifically, support for state machines and enum data types were" +
        " introduced.",
        "Then, those requirements were verified to detect errors and inconsistencies between them. Moving from" +
        " informal requirements to fully formalized ones allows automatic detection of problems early on during the" +
        " requirement specification phase, avoiding those errors propagating to the implementation.",
        "After that, black-box functional tests were generated automatically from those requirements to test" +
        " the code was doing what the requirements specified. The generated tests are compatible with a popular" +
        " testing framework (i.e. Unity), which allows use of standard tools (e.g. to measure the code coverage" +
        " of those tests). Given that now the tests can be generated from the specification and are ready even before" +
        " the implementation, testing can start earlier in the development process (following TDD).",
        "Finally, a connector was developed to the platform where the tests were to be executed," +
        " in this case the Unity framework."
      ],
    },
    {
      sectionHeading: "HUBCAP support and platform opportunity",
      paragraphs: [
        "Participation in the HUBCAP platform had several benefits: to meet other participants of the ecosystem," +
        " and especially to work together on a project with one of them on a new use case.",
        "Participation also helped Developair to improve their tool in several ways, and for KMB, it" +
        " improved the quality of their product and the productivity of their development process."
        ],
    },
    // {
    //   sectionHeading: "Forward look",
    //   paragraphs: [
    //     ""
    //   ],
    // },
  ],
  info: {
    endUsers: [
      {
        name: "KMB Lab",
        website: "http://www.kissmy.bike/en/",
      }
    ],
    techProviders: [
      {
        name: "Developair",
        website: "https://www.developair.tech/",
      },
    ],
    dih: { name: "HUBCAP Italy", website: "https://www.fbk.eu/en/" },
    domains: [
      "Micro-mobility",
      "Safety",
      "Requirements",
      "Verification",
      "Testing",
    ],
    impact: [
      "Working with KMB helped Developair become aware of the importance of some functionality" +
      " and prioritize its implementation. The utility for the user of abstractions (models) used by engineers" +
      " as state machines is now very clear.",
      "Improved Developair platform supporting new features and evaluating its generality with its application in a new domain.",
      "For KMB, it has been seen that although the companies developing CPSs are small, it is convenient in" +
      " many ways to have a testing methodology and framework, and MBD tools help to automatate the process.",
      "It has been checked that if the introduced tools in their workflows are intuitive and easy to use" +
      " then the introduced small overhead is worthwhile, because the time and cost savings are bigger" +
      " and the code quality is better.",
    ],
  },
  tryItNowUrl: "https://hubcap-portal.eng.it/group/guest/catalogue-detail?d_eid=HC582649-6xdm-4f16-0726-877071660726",
  videoUrl: "https://www.youtube.com/embed/GKL63cmcVSc"
},
   {
    title: "Opticity - Energy Management Platform Based on AutoML and GA",
    subtitle: "Opticity - a comprehensive energy management tool that completely automates finding an" +
      " optimal pattern in energy consumption and production in facilities with RES and energy" +
      " storage capabilities",
    image: "../../assets/res/images/opticity.png",
    urlName: "opticity",
    quote: "Participation in this experiment boosted Vodéna’s R&D capacities related to Model Based Design of" +
      " Cyber Physical Systems. These newly acquired skills will enable Vodéna to expand its products and business" +
      " models in the energy sector, as well as to expand it to other related areas, and contribute to the" +
      " accelerated digitalization of SMEs in the region and Europe as a whole.",
    quoteAttribution: "Boban Stojanović, Founder and CTO Vodéna",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "The introduction of renewable energy sources (RES) in the grid has posed several challenges to energy" +
          " producers and consumers. Effects such as intermittency, \"duck curve\", the growing complexity of" +
          " stimuli regulations, and the calculation of energy consumption, require that these challenges be" +
          " approached in an intelligent way.",
          "Vodéna integrated into the HUBCAP platform a new tool asset, Opticity, a comprehensive energy management" +
          " tool that completely automates finding an optimal pattern in energy consumption and production in" +
          " facilities with RES and energy storage capabilities. Employing this tool, Noleko developed" +
          " digital twins of solar installations, and streamlined and optimized the electric energy production-consumption" +
          " process.",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "The goal of this experiment was to implement Opticity on the HUPCAP platform. To achieve this goal," +
          " the following objectives were achieved:",

          "1. Development and implementation of Opticity, which includes the integration of existing sub-components" +
          " (Blackfox, OSICE) into a single unit and the creation of a user interface.",

          "2. Development of a solar power plant digital twin using Opticity tools on the HUBCAP platform." +
          " The digital twin includes all the data relevant to the functioning of the system. As a prerequisite" +
          " for the optimization of the operation plans, Opticity generates machine learning models of the internal" +
          " energy production and loads, based on data acquired during the energy system exploitation. These models" +
          " can be further improved by using publicly available data on weather, working and non-working days," +
          " specifics related to RES incentives, etc. To create and maintain these models, Opticity employs Blackfox," +
          " Vodéna’s cloud service for automated generation of optimized machine learning models, based on deep" +
          " neural networks, random forest, and XGBoost. Generated predictive models are used for simulation of the" +
          " energy data chain and evaluation of a number of hypothetical operation plans under given conditions." +
          " The optimal operation plan is obtained on a daily basis through simulation-based optimization performed on" +
          " our portable cloud service OSICE - Optimization as a Service in the Cloud Environment.",

          "3. Employing the digital twin to optimize the production and consumption of electricity by the" +
          " end user, using Opticity."
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "Vodéna strives to exchange knowledge and experience within the HUBCAP ecosystem, and to reach a wide circle" +
          " of users who gravitate around the HUBCAP ecosystem through the expansion of the HUBCAP offer with its" +
          " asset. This asset is related to the use of renewable energy sources, and our desire is to be adopted by" +
          " as many European SMEs as possible to solve their problems, which will at the same time significantly" +
          " contribute to the improvement of the environment and the general quality of life of all European citizens."
        ],
      },
      // {
      //   sectionHeading: "Forward look",
      //   paragraphs: [
      //     ""
      //   ],
      // },
    ],
    info: {
      endUsers: [
        {
          name: "Noleko",
          website: "https://noleko.rs/",
        }
      ],
      techProviders: [
        {
          name: "Vodena",
          website: "https://vodena.rs/",
        },
      ],
      dih: { name: "HUBCAP Denmark", website: "https://international.au.dk/" },
      domains: [
        "Renewable Energy Sources",
        "Automated Machine Learning",
        "Machine Learning Operations",
        "Optimization",
      ],
      impact: [
        "The key impact of this experiment is to lower the barrier for European SMEs to use CPSs in energy optimization." +
        " Using a digital twin of a solar power plant, Noleko demonstrated that using optimal" +
        " patterns in electricity generation and consumption can improve profitability up to 15%.",
        "Opticity provides end users with a powerful optimization utility that does not require any knowledge" +
        " in the areas of predictive analytics, machine learning, or optimization procedures, and does not require" +
        " investment in computational infrastructure.",
        "Participation in this experiment enabled Noleko to improve its business by embracing the principles of" +
        " Industry 4.0, and thus become more competitive in the regional and European markets.",
      ],
    },
    tryItNowUrl: "https://hubcap-portal.eng.it/group/guest/catalogue-detail?d_eid=HC582649-779p-4j16-1324-070471661324",
    videoUrl: ""
  },
   {
    title: "Aircraft Collision Detection and Steering Angle Tracking (ACDSAT)",
    subtitle: "",
    image: "../../assets/res/images/acdsat.png",
    urlName: "acdsat",
    quote: "The HUBCAP project and subsequent funding gave us the opportunity to validate our simulation tool" +
      " that allows the evaluation of various LiDAR sensors in different situations. It opened the door for" +
      " further cooperation with our consortium partner to explore our technology in their tugs. Ultimately" +
      " we believe that this project will open the door to future economic development for both companies.",
    quoteAttribution: "Andrew Moakes, Co-Founder and CFO Evitado Technologies",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "Accidents occurring during ground handling of aircraft cause over $10 billion of damage every year." +
          " Collisions with tooling, vehicles, and other aircraft contribute to massive repair costs, downtime, and" +
          " flight scheduling delays. The handling of aircraft is performed with a towing vehicle (tug) that" +
          " manoeuvres the aircraft into hangars and at airport gate terminals.",

          "The goal of this experiment between Evitado Technologies and Mototok International" +
          " was to apply technologies from the self-driving car industry and recent advances in LiDAR" +
          " perception to the tug machine handling of aircraft. The experiment investigated solutions to prevent" +
          " damage caused by collisions and oversteering of the aircraft."
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "The experiment started with a simulation of various LiDAR types covering different scenarios" +
          " experienced when towing aircraft, to determine the best sensor for the solution. The amount of" +
          " coverage of a chosen aircraft and its surroundings was analyzed. The exploration of coverage was" +
          " important in order to determine the collision detection of the Evitado system" +
          " when a LiDAR is integrated into the Mototok tug. The analysis was conducted using Gazebo, and a" +
          " version of the simulator was uploaded to the HUBCAP sandbox.",

          "A LiDAR was chosen to integrate and test with a Mototok tug. The LiDAR was integrated into" +
          " Evitado’s proprietary tracking algorithm. The Evitado system was closely integrated with the tug’s" +
          " CAN bus system in order to communicate system status, driving speed, and detected steering angle" +
          " of the tug relative to the aircraft. Testing was conducted by moving the Mototok tug with a test" +
          " trailer in order to calculate the error between calculated and true steering angle as well as tracking" +
          " delay.",

          "The experiment resulted in over 100 GB of collected real world movement data." +
          " The testing detected mean error of steering angle tracking of less than 2° with a delay of less" +
          " than 0.5 seconds in more than 75% of the movements conducted, with a max mean error of less than" +
          " 3.5° and 0.605 seconds of delay.",
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "HUBCAP funding enabled Evitado and Mototok to work together to explore a new technology for" +
          " Mototok’s towing vehicles. The two companies were able to determine the best LiDAR sensor for use" +
          " in the tugs and to explore the steering angle tracking error when the Evitado system was" +
          " integrated with the Mototok tugs.",
        ],
      },
      // {
      //   sectionHeading: "Forward look",
      //   paragraphs: [
      //     ""
      //   ],
      // },
    ],
    info: {
      endUsers: [
        {
          name: "Mototok International",
          website: "https://www.mototok.com",
        }
      ],
      techProviders: [
        {
          name: "Evitado Technologies",
          website: "https://evitado.io",
        },
      ],
      dih: { name: "HUBCAP Austria", website: "https://www.v2c2.at/" },
      domains: [
        "Automation",
        "Airport ground support equipment",
        "LiDAR",
        "Collision avoidance",
      ],
      impact: [
        "Validated Evitado simulation tool with partner to evaluate LiDAR sensors in various" +
        " environments. Further developed and tested simulation tool for HUBCAP sandbox.",
        "Worked with a new partner to integrate our technology with their product. Ultimately, this" +
        " new technology will help innovate the way aircraft are towed safely on the ground.",
        "Validated a proprietary state of the art software for identifying and tracking aircraft and" +
        " other objects using LiDAR technology.",
      ],
    },
    tryItNowUrl: "https://hubcap-portal.eng.it/group/guest/catalogue-detail?d_eid=uzHpiIAB3U8OXW1I-zvD",
    videoUrl: "https://www.youtube.com/embed/TQ1yjhzuNLw"
  },
   {
    title: "Digitizing the Auscultation Process With Respiratory AI (MedaPlus)",
    subtitle: "Design and development of a low-cost electronic stethoscope, enabling contactless auscultation," +
              " digital transfer and storage of sound samples as well as AI driven analysis of the sound samples.",
    image: "../../assets/res/images/MedaPlus3.png",
    urlName: "meda-plus",
    quote: "HUBCAP created the opportunity for our two SMEs to build an end-to-end telehealth solution" +
           " that addresses the needs of hospitals, polyclinics, doctors and non-physician staff.",
    quoteAttribution: "MedaPlus Team",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "Respiratory conditions are a leading cause of death worldwide and generate a significant burden for" +
          " public health systems. An estimated 15% - 25% of the global population suffers from at least one" +
          " form of respiratory issue. Early diagnosis and routine monitoring of patients with respiratory" +
          " conditions are important for timely intervention.",

          "However, diagnosing respiratory conditions requires well-trained and experienced medical staff." +
          " Given time, availability, and economic constraints, professional staff is not available at all times and in" +
          " all geographies. To support doctors, nurses and remote patients, MedaPlus provides artificial" +
          " intelligence (AI)-assisted software to analyze auscultation results. MedaPlus allows health care" +
          " professionals to analyze, share, and compare auscultation results for a second opinion or for" +
          " treatment follow-up. Additionally, MedaPlus analyzes auscultation data for anomalies comparing" +
          " against one of the largest databases of reference patterns, individually and manually classified.",

          "One of the main obstacles for widespread adoption is that most stethoscopes in use today are analogue." +
          " A specialist listens to the sounds while the patient is present within arms-length." +
          " The primary challenge is getting the lung sounds into the MedaPlus system for analysis." +
          " Doctors and nurses currently are limited to experimental and home-grown settings" +
          " to digitize lung sounds and then upload them manually into the MedaPlus system.",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "We built a prototype of the ear-contactless digital stethoscope." +
          " Our device enables real-time capture of auscultation sounds with headphones instead of an earpiece," +
          " which transmits the sound signals automatically and in real-time to the MedaPlus system." +
          " The resulting prototype digitizes the sound samples taken by a legacy analogue stethoscope and sends them" +
          " to the MedaPlus system for automated AI-driven analysis.",

          "The digital stethoscope is a safety-critical embedded system." +
          " Sending patient data via communication lines like Wi-Fi and GSM over the Internet to a cloud-based system" +
          " requires particular measures to ensure availability," +
          " high signal quality, low latency, low energy consumption, data integrity, and low cost on top." +
          " Model-based system engineering is one way of ensuring these requirements are met early in the design process." +
          " We employed the AutoFOCUS3 tool to address these issues, which is available on the HUBCAP platform.",

          "The experiment was split into two iterations, with each iteration performing the following sub-tasks:",
          " (a) Building an IoT device that connects to a legacy stethoscope and records sounds; the IoT device cleans and amplifies the data.",
          " (b) The IoT device sends the recorded data on a secure line over long-haul channels to the MedaPlus analytics platform via WiFi and/or GSM.",
          " c) The MedaPlus app provides a security layer and secure APIs to provide secure endpoints to the IoT device.",
          " d) MedaPlus provides data analytics based on explainable AI" +
          " (sound files displayed via user interface, signal analysis, display of anomalous signals via user interface).",
          " e) Multiple IoT architectures were modelled and compared to identify the optimal hardware architecture" +
          " before running lengthy and resource intensive hardware development processes." +
          " Data transport as well as storage is GDPR compliant.",
        ],
      },
      {
      //   // can't find anything to put here from deliverable
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "Device development is highly resource intensive and cost sensitive." +
          " Having the wrong architecture, components, and specifications can slow development," +
          " increase development costs, and thus increase time to market significantly." +
          " Model-based engineering is one way to evaluate architectures and key KPIs upfront before investing in hardware development.",

          "The focus of this HUBCAP experiment was on optimizing the individual parameters for both hardware and software," +
          " as well as modelling additional IoT architectures with the AutoFOCUS3 tool" +
          " with particular focus on cost and latency (which directly relates to sound quality).",

          "Both SMEs were inexperienced in using model-based-development tools and have improved their capabilities in this domain." +
          " The HUBCAP platform offered a place to learn about model-based design (MBD) technology for cyber-physical systems (CPSs)" +
          " and to acquire hands-on experience with modelling software and existing models in the HUBCAP Sandbox Middleware." +
          " Additionally, we expect a speed-up in the certification process by using the modelling results and derived parameters.",
        ],
      },
      /*
      {
        sectionHeading: "Forward look",
        paragraphs: [
          "",
        ],
      },
      */
    ],
    info: {
      endUsers: [
        {
          name: "AvailabilityPlus",
          website: "http://www.availabilityplus.com/",
        }
      ],
      techProviders: [
        {
          name: "Slezák IoT Systems",
          website: "https://slezak-consulting.com/",
        },
      ],
      dih: { name: "HUBCAP Germany", website: "https://www.fortiss.org/" },
      domains: [
        "Digital stethoscope",
        "Ear-contactless auscultation",
        "Artificial intelligence (AI)",
        "Raspberry Pi",
        "Digital health",
        "Telehealth",
      ],
      impact: [
        "The outcome of the project will enable AvailabilityPlus to offer its services globally" +
        " and to address use cases not sufficiently addressed today, such as remote patient auscultation (telehealth).",

        "Co-development with AvailabilityPlus will enable Slezák IoT Systems to switch" +
        " from a customized, project-based business model (which is difficult to scale) to a scalable business model," +
        " by focusing on designing and manufacturing the digital device.",

        "Doctors, nurses, health care providers, and patients will benefit in several ways," +
        " including increase in the frequency of auscultation, progressively increasing to continuous monitoring," +
        " leading to an increase in the quality of the auscultation analysis.",

        "Also, increase in the number of patients that can be screened, leading to more patients that can be treated early;" +
        " early intervention is essential to mitigate potential health risks.",

        "Also, efficiency gains for physicians who can outsource the auscultation process to non-medical staff" +
        " and analyze the data at a chosen time at a remote place.",

        "Also, reduced risk for doctors, hospitals, and insurance companies," +
        " because auscultation results are automatically documented" +
        " and second opinions reduce the chance of misinterpretation (and thus of legal cases).",
      ],
    },
    tryItNowUrl: "https://hubcap-portal.eng.it/group/guest/catalogue-detail?d_eid=HC582649-779j-4z16-1324-256511661324",
    videoUrl: ""
  },
   {
    title: "SIMULAIR-COV19",
    subtitle: "Computational Fluid Dynamics (CFD) used to optimize the design and efficiency of innovative" +
      " sensor-based Ultraviolet-C Air disinfection system (I-ON AIR) for HVAC systems by simulating dynamic real" +
      " duct airflow behavior.",
    image: "../../assets/res/images/simulair.png",
    urlName: "simulair",
    quote: "HUBCAP has helped Alteria Automation (adopter) with two key facts:" +
      " We have improved our I-ON AIR range of UVC that disinfects the air by neutralizing virus, bacteria" +
      " and pathogens on HVAC systems. We have improved the efficiency 24% following the simulations" +
      " further gaining in viral inactivation ratio just by replacing the reflector material." +
      " We have validated the disinfection effectiveness of the system for in-duct dynamic conditions to be" +
      " over what was expected or better, from the certifications provided by the NBC INTA laboratory in" +
      " static conditions.",
    quoteAttribution: "Jose R. Vigil, CTO Alteria Automation",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "In 2020, ALTERIA AUTOMATION designed from scratch the first version of an innovative and highly" +
          " effective Ultraviolet-C disinfection system for HVAC (air conditioner and ventilation)." +
          " The system (I-ON AIR) is based on a highly efficient long-life UVC emitter lamp and a smart" +
          " disinfection process based on the data provided by different sensors: UVC radiometer, CO2 levels," +
          " Particulate Matter, and others (CPS platform) that is sent to a cloud server providing full traceability" +
          " of the disinfection process." +
          " I-ON AIR has already been certified in static conditions from a level 3 NBQ laboratory belonging" +
          " to INTA (Ministry of Defense, Spain), and SGS issued test and certifications.",

          "The problem is that the virus inactivation tests have been performed in static conditions" +
          " (a Petri dish exposed to the UVC light for period of time). The real viral inactivation tests in dynamic" +
          " conditions are unreachable for a private SME due to the cost and access needed to a level 4 - 5 bio-safety facility.",

          "Our goal was to create a design model of the virus inactivation in dynamic conditions, extrapolating" +
          " static results to a real airflow dynamic environment (taking into account air loss, turbulence," +
          " reflectivity, air speed, etc) of the HVAC ducts, minimizing power consumption," +
          " and maximizing radiation exposure levels by improving reflector gain at the UVC wavelength.",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "1. Simulated the air loss load / air turbulence created by the installation of UVC ION-AIR equipment" +
          " on in-duct installations using CFD (computational fluid dynamics) MBD tools.",

          "KPI: Air loss load & air turbulence design verified and tested valid.",

          "2. Measured irradiation pattern on real HVAC duct system and simulated (MBD) the irradiation with" +
          " different internal reflectivity scenarios (fiber foil clad, metal, clean and dirty ducts) on a duct length" +
          " of 3m (1.5m before and after the disinfection equipment in-duct location).",

          "KPI: 24% gain to the in-duct irradiation levels by replacing reflector material.",

          "3. Evaluated the viral inactivation rate in real dynamic conditions with MBD simulation." +
          " From the static viral inactivation data provided by INTA, MBD tools were used to extrapolate to a" +
          " dynamic environment such as the real airflow and the aerosols behavior on a HVAC duct under UVC" +
          " treatment for disinfection.",

          "KPI: Dynamic condition CFD model checked that irradiation levels predicted were equal or better" +
          " than in static conditions.",

          "4. Evaluated and simulated the influence of different in-duct air speeds in the HVAC system and its" +
          " relationship with viral inactivation rate using MBD tools." +
          " Average HVAC systems are rated at 3 m/sec air speed but can be as high as 10m/sec in many environments." +
          " The inactivation rate is highly dependent on exposure time of viral load to UVC irradiation.",

          "KPI: Simulations done included viral inactivation rates evaluated in dynamic conditions and cross-section" +
          " imaging of viral inactivation ratios."
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "HUBCAP funding allowed us to perform the experiments and simulations that led to verification of" +
          " the effectiveness of the ION HVAC Ultraviolet-C disinfection system in dynamic simulated conditions" +
          " and validation of the current design (loss load, turbulence) whilst improving the efficiency just by" +
          " replacing the reflector material.",
        ],
      },
      {
        sectionHeading: "Additional Information",
        paragraphs: [
          "Professional CFD software was used in the simulations by consultant (Alberto Acín, Ingeenious)." +
          " The specification was drafted by Alteria Automation." +
          " Tests were carried out at Alteria Automation facilities in Madrid, Spain."
        ],
      },
    ],
    info: {
      endUsers: [
        {
          name: "Alteria Automation",
          website: "http://alteriaautomation.com/",
        }
      ],
      techProviders: [
        {
          name: "Ingeenious",
          website: "https://ingeenious.com/en/",
        },
      ],
      dih: { name: "HUBCAP Sweden", website: "https://www.kth.se/en" },
      domains: [
        "COVID Disinfection",
        "Ultraviolet-C irradiation",
        "Air Quality sensors",
        "Computational Fluid Dynamics for HVAC",
        "Smart sensors",
      ],
      impact: [
        "CFD provides real airflow HVAC duct simulation, where system design is optimized.",

        "Radiating unit redesigned over the project with new reflector provides 24% gain.",

        "Simulation or radiation patterns were validated with in-duct measures using a calibrated UVC radiometer.",

        "In-duct viral inactivation simulated and validated with CFD over the HUBCAP project," +
        " following the inactivation rate figures provided by NBC (Nuclear, Bacteriological and" +
        " Chemical) of the INTA (Ministry of Defence, Spain) in the effectiveness report issued in Jan 2021.",
      ],
    },
    tryItNowUrl: "",
    videoUrl: "https://www.youtube.com/embed/kENdKosPnns"
  },
   {
    title: "SCUBA Design Integrated Verification Experiment (DIVE)",
    subtitle: "",
    image: "../../assets/res/images/scuba-dive.png",
    urlName: "scuba-dive",
    quote: "For D-RisQ, this experiment has enabled us to engage early in the development of a safety critical" +
      " medical device development gaining us insight into how Kapture and our other tools will be used," +
      " while also simultaneously identifying improvements in tools for our client base." +
      " For ScubaTx, this experiment has helped to clarify our software requirements while also improving" +
      " system and clinical requirements before we have committed to the full software development and" +
      " hence this will save us both time and money in that development and in the engagement with the regulator.",
    quoteAttribution: "The DIVE Team",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "The aim of the experiment was to use the D-RisQ Kapture® tool to express software high level" +
          " requirements (HLRs) for a medical device used in the preservation of organs for transplant." +
          " The software for the organ preservation device must be high integrity to meet regulations and will be" +
          " subject to independent scrutiny. As part of this process, ScubaTx became familiar with the way in" +
          " which software requirements needed to be expressed in order to use them as the basis for future" +
          " verification and for presentation to the medical device regulator. D-RisQ provided the tool and" +
          " relevant documentation and, where necessary, some consulting support. D-RisQ has experience of" +
          " DO-178C, the software standard for aerospace. It is intended that the Formal Methods Supplement" +
          " DO-333 will be used as the basis for certification. The ScubaTx team largely did the requirements" +
          " work themselves with D-RisQ providing problem solving and tool enhancements to cope with the" +
          " needs identified by ScubaTx. This process showed a number of improvements that were made as" +
          " the experiment progressed and some that could be made in future. It was further identified that" +
          " user documentation could be improved, which has already taken place. As a result, ScubaTx now" +
          " have a better set of requirements at all levels as clarifications at the clinical level have taken place." +
          " For D-RisQ, investment is already underway to improve the user experience and the link to" +
          " Modelworks, which is expected to be available Q1 2022.",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "The output of the first sprint was a set of manually updated system requirements for the ScubaTx" +
          " medical device and a set of software requirements developed from the system requirements using" +
          " the D-RisQ Kapture tool. ScubaTx were able to use Kapture easily with many positive comments on" +
          " usability and on the way in which the tool caused more thought on what the requirement should be," +
          " how it should be expressed, and how it \"helps especially when constructing large, complex expressions," +
          " as it enforces correct structure and reference consistency\".",

          "The aim of the second sprint was to explore how a software design could be developed and verified" +
          " using D-RisQ ModelWorks®. This highlighted various sources of potential error in requirements" +
          " when considering them for automatic verification. These were either incomplete information in the" +
          " requirements needed by the tools, which required more information to be added, or required some" +
          " enhancements to D-RisQ tools. Indeed, while most of the sample design undertaken passed checks," +
          " we all learned how to inform a user better on how to express requirements in a more verifiable manner." +
          " Therefore, D-RisQ have made plans to enhance their tools further. This work has already" +
          " commenced and is combined with user documentation upgrade. Beyond the scope of the" +
          " programme, D-RisQ demonstrated that it was possible to produce C code automatically from the design." +
          " This capability will be used in future for automatic formal verification by using another" +
          " D-RisQ tool expected to be completed end Q1 2022."
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "The funding provided through HUBCAP enabled the early engagement of ScubaTx with D-RisQ tools." +
          " The early chance to understand how to express requirements in a clear, verifiable format will" +
          " enable ScubaTx to avoid issues later in development of the device and to take it through" +
          " regulatory approval in due course, where hopefully the MBD work can be taken into account." +
          " As a case study for D-RisQ, this has been invaluable. We intend to improve the tools and to provide a" +
          " presentation at the forthcoming 2022 Embedded World Conference in Nuremberg. This aligns with" +
          " our strategy for the rapid assured development of control systems, safety-critical or otherwise."
        ],
      },
      {
        sectionHeading: "Forward look",
        paragraphs: [
          "Medical standards for software are different to those required for aerospace and do not mention formal methods." +
          " Despite stringent clinical trial controls over clinical outcomes, medical software is somewhat overlooked" +
          " (or under-estimated) in its complexity. In order to achieve approval in a cost-effective manner," +
          " there is a desire to use formal methods-based modelling tools and the associated formal verification." +
          " The intention, with the regulator involved as far as practicable, is to show a better way of gaining" +
          " confidence in medical device software. As such, it was decided to use RTCA DO-333," +
          " the Formal Methods Supplement to DO-178C, which is the de-facto software standard for aerospace." +
          " It remains a challenge to convince medical regulators that such approach is well beyond the required processes" +
          " within IEC62304, the medical software regulations standard."
        ],
      },
    ],
    info: {
      endUsers: [
        {
          name: "ScubaTx",
          website: "https://www.scubatx.com/",
        }
      ],
      techProviders: [
        {
          name: "D-RisQ",
          website: "https://www.drisq.com/",
        },
      ],
      dih: { name: "HUBCAP Germany", website: "https://www.fortiss.org/" },
      domains: [
        "Formal Methods",
        "Medical Devices",
        "Safety-Critical Software",
      ],
      impact: [
        "A far better understanding of not only software requirements, but as a result, system and" +
        " clinical requirements.",

        "By achieving the above, it will reduce the eventual cost of both the software development" +
        " and the regulatory processes, because all classes of requirements expression have improved.",

        "An insight into how D-RisQ Kapture®tool would be used by clients.",

        "Identification of improvements to the Kapture tool and associated documentation.",
      ],
    },
    tryItNowUrl: "https://hubcap-portal.eng.it/group/guest/catalogue-detail?d_eid=HC582649-77a4-4516-1325-722411661325",
    videoUrl: ""
  },
   {
    title: "ITwinBuild Experiment",
    subtitle: "Adoption and transfer of MBD CPS technologies for implementation of novel digital health" +
              " products and services to empower health care providers in Eastern Europe with remote" +
              " telemonitoring and assisting patients with health self-management.",
    image: "../../assets/res/images/ITwinBuild3.png",
    urlName: "it-win-build",
    quote: "The HUBCAP experiment and the support facilitated SMEs' time and efforts in implementation of the experiment" +
           " to focus the resources for further solution acceleration toward the customers and market.",
    quoteAttribution: "The ITwinBuild Team",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "The experiment introduced a novel and cost-effective digital health solution for monitoring and" +
          " predicting the personal heath of individuals living at homes alone or in isolation. It used multiple" +
          " wearable and home sensors and MBD CPS to run AI-driven calculations of holistic status of big system" +
          " \"Smart Person @ Smart Home\".",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "The partners implemented big MBD CPS" +
          " \"Smart Person @ Smart Home\" as a hierarchy of smart objects having own data sources and KPIs to run" +
          " AI-driven calculation of system status in real-time with predictions.",
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "HUBCAP funding enabled us to combine expertise and novel CPS/IoT/AI technology PharosN" +
          " to develop a practical health monitoring solution within five months.",
        ],
      },
      /*
      {
        sectionHeading: "Forward look",
        paragraphs: [
          "",
        ],
      },
      */
    ],
    info: {
      endUsers: [
        {
          name: "IMC - Industrial Management Consulting Slovakia",
          website: "https://www.bymetrix.net/",
        }
      ],
      techProviders: [
        {
          name: "GOLEM Integrated Microelectronics Solutions",
          website: "https://www.golem.at/",
        },
      ],
      dih: { name: "HUBCAP Austria", website: "https://www.v2c2.at/" },
      domains: [
        "AI-driven Technology",
        "Personal Health Self-management",
        "Wearables",
        "Home Environment Sensors",
      ],
      impact: [
        "Economic impact: minimizing unnecessary physical visits to medical centers, waiting time," +
        " lockdowns and isolation impacts, decreasing the cost of services for patients and demand for" +
        " caregiver resources, transportation, relevant environmental impacts. IMC will explore long" +
        " term opportunities and addresses health/social-care demand that is especially hindered in" +
        " Eastern Europe by economic factors.",

        "Social impact: massive improvement of self-care management at homes, connectivity with caregivers," +
        " social care organisations, new jobs for support, installations, and maintenance.",

        "Enabling intelligent Digital Twins to assist people in longevity and quality of life.",
      ],
    },
    tryItNowUrl: "https://hubcap-portal.eng.it/group/guest/catalogue-detail?d_eid=Iy1oqXoB9KyegeyczwVm",
    videoUrl: "https://www.youtube.com/embed/OZ83AAxBjS4"
  },
   {
    title: "Remote Solution for Industrial Automation Training (PRO-CPS)",
    subtitle: "PROSIM Cyber-Physical Platform for Application Development and Training in the Process Industries",
    image: "../../assets/res/images/PRO-CPS.png",
    urlName: "pro-cps",
    quote: "Energeia Technologies were very happy to be involved in this HUBCAP program, and as a development" +
      " partner with ASTI Automation, for the development of PRO-CPS experiment. The process of development" +
      " helped our engineers to learn the PROSIM solution. This will further enable us to employ PROSIM to" +
      " develop industry solutions and further train current and future automation engineers.",
    quoteAttribution: "Gerry Smith, Director Energeia Technologies",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "Enabling remote automation technology training for higher education and continuing professional" +
          " education requires suitable hardware–software platforms that leverage recent advances in cyber-physical" +
          " systems and industrial Internet of Things. An accelerated trend towards e-learning and virtual learning" +
          " solutions is observed, including for hands-on, resource-intensive fields such as industrial automation technology." +
          " This situation, overlapping an already-existing underlying trend for digitalization of Industry 4.0 education," +
          " has led to hybrid or fully virtual training courses where the student can" +
          " initially gain expertise on the automation of a process simulation followed by hands-on sessions in the laboratory.",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "The PRO-CPS experiment aimed to develop the PROSIM platform jointly, as a state-of-the-art modelling" +
          " and simulation environment for industrial automation application development and training. This involved" +
          " the development of a dedicated add-on pack of simulations for the process industries: pumping station," +
          " heat exchanger, measurement unit, smart metering, boiler control, and tank level control, based on" +
          " realistic end-user requirements, and a fully virtualised process simulation and training solution," +
          " running on the HUBCAP platform. The system integrates PLC-side development (B&R Automation Studio)," +
          " industrial communication (OPC-UA), and front-end development for rich and immersive process visualisations (C#).",
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "The DIH at \"Lucian Blaga\" University of Sibiu supported the implementation of the PRO-CPS experiment" +
          " throughout its six month duration. Periodic reporting meetings were organised and the DIH team provided" +
          " valuable knowledge and guidance to the SME partners.",
        ],
      },
      {
        sectionHeading: "Forward look",
        paragraphs: [
          "Validation of the system with end users in professional training courses is foreseen which will lead to continuous improvement." +
          " This can be best achieved in hybrid mode, where the trainees gather experience working on the virtual system under professional guidance," +
          " followed by hands-on laboratory sessions on the real equipment." +
          " The simulation can also be operated in parallel to the real equipment" +
          " for grasping modelling limitations and ideal behavior compared to potential faulty operation that is encountered in practice." +
          " Moreover, extending the number, type, and complexity of the existing simulation towards fully functional digital-twin models" +
          " with discretized continuous system dynamics will be carried out.",
        ],
      },
    ],
    info: {
      endUsers: [
        {
          name: "Energeia Technologies",
          website: "http://www.energeiatech.com/",
        }
      ],
      techProviders: [
        {
          name: "Asti Automation",
          website: "https://www.astiautomation.com/",
        },
      ],
      dih: { name: "HUBCAP Romania", website: "https://www.ulbsibiu.ro/en/" },
      domains: [
        "Industrial Automation",
      ],
      impact: [
        "Development of the PROSIM product in a competitive education and training market." +
        " The newly updated system is provided both as a stand-alone product" +
        " and through a collection of on-demand training services for industrial companies, automation technicians, and engineers.",

        "Ongoing collaboration and knowledge transfer between Asti Automation and Energeia Technology.",

        "A more detailed perspective of the experiment results and outlook on future developments," +
        " enabled by the HUBCAP funding, was published in the open access journal paper:" +
        " Rosioru, S., Mihai, V., Neghina, M., Craciunean, D. and Stamatescu, G., 2022." +
        " PROSIM in the Cloud: Remote Automation Training Platform with Virtualized Infrastructure. Applied Sciences, 12(6), p.3038.",
      ],
    },
    tryItNowUrl: "https://hubcap-portal.eng.it/group/guest/catalogue-detail?d_eid=HC582649-779w-4416-1324-354961661324",
    videoUrl: ""
  },
   {
    title: "Digital Twin for Active Sprayer Boom Roll Control (ARC)",
    subtitle: "",
    image: "../../assets/res/images/ARC.png",
    urlName: "digital-twin-for-active-sprayer-roll-control",
    quote: "Funding from the HUBCAP project enabled the consortium partners to hire additional personnel" +
           " to develop an active controller for sprayer boom roll control." +
           " The developed controller was tested and evaluated in a digital twin setting" +
           " in order to minimise development costs and physical testing.",
    quoteAttribution: "The ARC Team",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "The aim of the project was to develop and test a controller for active sprayer boom stabilization and control." +
          " In order to achieve this, we explored opportunities to reduce physical testing" +
          " and decided to utilise model-based engineering approaches. In collaboration with Danfoil," +
          " we modelled a sprayer boom and developed an active roll axis controller specifically for the sprayer boom." +
          " Whilst this model contains dynamics of movement in both heave and roll directions for multiple joints," +
          " the primary focus of the project was evaluation of the controller tracking in the roll direction.",
        ],
      },
      {
        sectionHeading: "What we did",
        paragraphs: [
          "The first step of the project was to create a model that depicted the roll and heave axis dynamics of the system." +
          " For validation of this model," +
          " multiple test datasets based on both manual step inputs with different actuation times were used," +
          " to make sure that the model was accurate for various actuation scenarios. In the second step," +
          " we developed a controller to keep the boom within the maximum allowed deviation when spraying." +
          " This would mean the sprayer would maintain the boom within a stable position with minimal variation." +
          " The controller performance was evaluated through the digital twin" +
          " utilizing data from actual driving tests that cover the normal operation range of the boom during field spraying.",

          "Using initial results from the evaluation," +
          " we were able to fine-tune the controller and adjust the underlying model to achieve the desired performance.",
        ],
      },
      {
        sectionHeading: "HUBCAP support and platform opportunity",
        paragraphs: [
          "Funding from HUBCAP enabled us to hire additional personnel" +
          " to develop an active controller for sprayer boom roll control.",
          ],
      },
      {
        sectionHeading: "Forward look",
        paragraphs: [
          "The progress made developing and testing an active controller for roll control using a digital twin with HUBCAP support," +
          " motivated the consortium partners to pursue a second project (ASBC) with HUBCAP that focused on active yaw control.",
        ],
      },
    ],
    info: {
      endUsers: [
        {
          name: "Danfoil",
          website: "https://www.danfoil.dk/",
        }
      ],
      techProviders: [
        {
          name: "Schmidt Innovation",
          website: "https://sinno.dk/",
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
      ],
    },
    tryItNowUrl: "https://hubcap-portal.eng.it/group/guest/catalogue-detail?d_eid=HC582649-7793-4o16-1323-875321661323",
    videoUrl: "https://www.youtube.com/embed/mEWPamjgVX0"
  },

];



