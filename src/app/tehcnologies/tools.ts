export const tools = [
  {
    type: "tool",
    logo: "../../assets/res/logos/logo_pharos.png",
    asset_name: "Pharos Navigator",
    company_name: "GOLEM",
    url: "https://golem.at/",
    description:
      "Pharos Navigator® technology platform supports rapid Model-Based Design and development of complex cyber-physical system models of intelligent digital twins with high-level tools, and its linking to multiple heterogeneous digital data sources including IoT, automated systems and mobile devices over existing IP networks. The applications can run in cloud transforming multiple big data streams into the statuses of the applied CPS infrastructure objects and various custom indicators assisting users in AI-driven holistic CPS monitoring and control of the ongoing and predicted operational sustainability and performance.",
    showMore: false, // Always leave at false
    supported_platforms: [
      "Server – Ubuntu dockers; Client 1: Webclient (any browser); Client 2: Power Client with Model builder tools under Ubuntu desktop and MS Windows 10",
    ],
    modelling_notations: [
      "Requirements modelling",
      "Hierarchical and system modelling",
      "Data modelling",
      "Flow-oriented modelling",
    ],
    domains: [
      "Digital Health",
      "Manufacturing",
      "Agriculture",
      "Smart Cities",
      "Circular Economy",
      "Environment",
    ],
    license_text:
      "Proprietary end-user license along with many Open Source licenses like MIT, APACHE, etc. for the system components",
    license_url:
      "https://enterprise.pharosnavigator.com/static/content/en/162/License-Agreement-for-Pharos-Navigator-Engine-Software--.html",
    licenses: [
      {
        text: "Server software",
        url: "https://enterprise.pharosnavigator.com/static/content/en/162/License-Agreement-for-Pharos-Navigator-Engine-Software--.html",
      },
      {
        text: "Light client software",
        url: "https://enterprise.pharosnavigator.com/static/content/en/500/EndUser-License-for-Light-Client-.html",
      },
      {
        text: "Power client software",
        url: "https://enterprise.pharosnavigator.com/static/content/en/499/EndUser-License-for-Power-Client.html",
      },
      {
        text: "Pharos Navigator object models",
        url: "https://enterprise.pharosnavigator.com/static/content/en/502/License-Agreement-for-Pharos-Navigator-Object-Models.html",
      },
    ],
    download_link: "",
    email: "info@golem.at",
  },
  {
    type: "tool",
    logo: "../../assets/res/logos/logo_opticity.png",
    asset_name: "Opticity",
    company_name: "Vodena",
    url: "http://vodena.rs/",
    description:
      "Opticity is a comprehensive energy management tool that completely automates finding ofoptimal pattern in energy consumption and production in case of facilities with RES and energy storage capabilities. It enables end users to develop digital twins of solar installations, and streamline and optimize electric energy production and consumption. Based on the data acquired during the solar installation exploitation, Opticity automatically creates the most adequate predictive models of the internal energy production and loads, which will enable simulation of the data chain for any hypothetic operation plan. The results obtained from the simulations, along with all other micro-grid features and external factors, are subjected to an optimization process in order to find the energy management pattern that will result with the most economical usage of electricity under the given conditions.",
    showMore: false, // Always leave at false
    supported_platforms: ["Cloud based"],
    modelling_notations: ["Deep Neural Networks", "Random Forest", "XGBoost"],
    domains: [
      "Renewable energy",
      "Compounding",
      "Automated machine learning",
      "Genetic algorithm optimization",
    ],
    license_text: "Commercial License",
    license_url: "",
    download_link: "",
    email: "office@vodena.rs",
  },
  {
    type: "tool",
    logo: "../../assets/res/logos/sigla_beia_300dpi.png",
    asset_name: "BEIA SMART ENERGY TOOL",
    company_name: "BEIA Consult International",
    url: "https://www.beiaro.eu/",
    description:
      "Smart energy monitoring and simulation platform for real-time energy production and consumption monitoring, analysis of smart meter data, simulation of energy production potential and assessment of the economic viability of various investments in the field of energy.",
    showMore: false, // Always leave at false
    supported_platforms: ["Ubuntu", "Linux v18.04"],
    modelling_notations: ["Contract-Based Design"],
    domains: ["IoT", "Smart Energy"],
    license_text: "Free",
    license_url: "",
    download_link: "",
    email: "george@beia.eu",
  },
  {
    type: "tool",
    logo: "../../assets/res/logos/logo_smartPLAZA.jpg",
    asset_name: "smartPLAZA",
    company_name: "DatenBerg",
    url: "https://datenberg.eu/",
    description:
      "With smartPLAZA we generate added-value out of manufacturing data. The tool consolidates different data sources, visualizes all available data and automatically deploys prediction pipeleines.",
    showMore: false, // Always leave at false
    supported_platforms: ["Windows", "Linux"],
    modelling_notations: [
      "Binary classification",
      "Regression modelling",
      "Algorithms from white- towards blackbox approaches",
    ],
    domains: [
      "Manufacturing",
      "Compounding",
      "Textiles",
      "Agriculture",
      "Automotive",
      "Industry 4.0",
    ],
    license_text: "Commercial SaaS License",
    license_url:
      "https://www.ai4eu.eu/_flysystem/s3/licenses/EULA%20DatenBerg.pdf",
    download_link: "",
    email: "maximilian.backenstos@datenberg.eu",
  },
  {
    type: "tool",
    dihAsset: true,
    logo: "../../assets/res/logos/into_cps_example_logo.png",
    asset_name: "INTO-CPS",
    company_name: "INTO-CPS",
    url: "https://into-cps.org/",
    description:
      'An integrated "tool chain" for comprehensive Model-Based Design (MBD) of Cyber-Physical Systems (CPSs). The tool chain supports the multidisciplinary, collaborative modelling of CPSs from requirements, through design, down to realisation in hardware and software. This enables traceability at all stages of the development. The IP from this project has been transferred to the INTO-CPS Association after the completion of the project.',
    showMore: false, // Always leave at false
    supported_platforms: ["Windows", "Linux", "macOS"],
    modelling_notations: ["Functional Mock-up Interface (FMI)"],
    related_tools: [
      {
        name: "20-sim",
        url: "https://www.20sim.com/",
      },
      {
        name: "Overture",
        url: "http://overturetool.org/",
      },
      {
        name: "Open Modelica",
        url: "https://www.openmodelica.org/",
      },
    ],
    domains: ["Automotive", "Agriculture", "Smart Buildings", "Transport"],
    license_text: "INTO-CPS Association Public License",
    license_url:
      "https://github.com/INTO-CPS-Association/maestro/blob/development/LICENSE",
    download_link: "https://into-cps-association.github.io/download/",
    email: "into-cps@mail.com",
  },
  {
    type: "tool",
    dihAsset: true,
    logo: "../../assets/res/logos/logo_chess.png",
    asset_name: "CHESS",
    company_name: "FBK",
    url: "https://www.fbk.eu/",
    description:
      "CHESS is a cross-domain model-based engineering environment with support for various analysis for dependable complex systems. Extended from UML/SysML and MARTE,the CHESSML modeling language supports the modeling of real-time dependable systems including safety and security aspects. In CHESS the user can perform different model-based analyses to ensure system dependability at various stages of the development, with the support of different backend tools such as nuXmv, OCRA, and xSAP.",
    showMore: false, // Always leave at false
    supported_platforms: ["Windows", "Linux"],
    modelling_notations: [
      "Model-based design",
      "Model checking",
      "Model-Based Safety Analysis (MBSA)",
      "Contract-based design",
    ],
    domains: [
      "Aviation",
      "Smart transport/mobility",
      "Sensors",
      "Smart energy",
      "Smart healthcare",
    ],
    license_text: "Free to use",
    license_url: "https://www.eclipse.org/legal/epl-2.0/",
    download_link: "https://www.eclipse.org/chess/download.html",
    email: "tonettas@fbk.eu",
  },
  {
    type: "tool",
    dihAsset: true,
    logo: "../../assets/res/logos/logo-ocra.png",
    asset_name: "OCRA",
    company_name: "FBK",
    url: "https://www.fbk.eu/",
    description:
      "A command-line tool for the verification of logic-based contract refinement for embedded systems. It supports the specification and analysis of component-based specifications of system architectures.",
    showMore: false, // Always leave at false
    supported_platforms: ["Windows", "Linux", "macOS"],
    modelling_notations: ["Contract-based design"],
    domains: [
      "Aviation",
      "Smart transport/mobility",
      "Sensors",
      "Smart energy",
      "Smart healthcare",
    ],
    license_text: "Dual",
    license_url: "https://es-static.fbk.eu/tools/ocra/LICENSE.txt",
    download_link: "https://ocra.fbk.eu/pmwiki.php?n=Main.Download",
    email: "tonettas@fbk.eu",
  },
  {
    type: "tool",
    dihAsset: true,
    logo: "../../assets/res/logos/logo_nuxmv.png",
    asset_name: "NUXMV",
    company_name: "FBK",
    url: "https://www.fbk.eu/",
    description:
      "nuXmv is a symbolic model checker for the analysis of synchronous finite-state and infinite-state systems. nuXmv extends NuSMV along two main directions: - For the finite-state case, nuXmv features a strong verification engine based on state-of-the-art SAT-based algorithms. - For the infinite-state case, nuXmv features SMT-based verification techniques, implemented through a tight integration with MathSAT5.",
    showMore: false, // Always leave at false
    supported_platforms: ["Windows", "Linux"],
    modelling_notations: ["Model checking"],
    domains: [
      "Aviation",
      "Smart transport/mobility",
      "Sensors",
      "Smart energy",
      "Smart healthcare",
    ],
    license_text: "Dual",
    license_url: "https://nuxmv.fbk.eu/pmwiki.php?n=Main.License",
    download_link: "https://nuxmv.fbk.eu/pmwiki.php?n=Download.Download",
    email: "tonettas@fbk.eu",
  },
  {
    type: "tool",
    dihAsset: true,
    logo: "../../assets/res/logos/logo_xsap.png",
    asset_name: "XSAP",
    company_name: "FBK",
    url: "https://www.fbk.eu/",
    description:
      "xSAP is a tool for safety assessment of synchronous finite-state and infinite-state systems. It is based on symbolic model checking techniques.",
    showMore: false, // Always leave at false
    supported_platforms: ["Windows", "Linux"],
    modelling_notations: [
      "Model-Based Safety Analysis (MBSA)",
      "Fault Detection, Identification and Recovery (FDIR)",
      "Timed Failure Propagation Graphs (TFPG)",
    ],
    domains: [
      "Aviation",
      "Smart transport/mobility",
      "Sensors",
      "Smart energy",
      "Smart healthcare",
    ],
    license_text: "Dual",
    license_url: "https://xsap.fbk.eu/pmwiki.php?n=Main.License",
    download_link: "https://xsap.fbk.eu/pmwiki.php?n=Download.Download",
    email: "bozzano@fbk.eu",
  },
  {
    type: "tool",
    logo: "https://xcelgo.com/wp-content/uploads/2018/02/experior6logo-e1519976751203.png",
    asset_name: "Experior",
    company_name: "Xcelgo",
    url: "https://xcelgo.com/",
    description:
      "Experior is a market proven software platform for 3D emulation, modeling and digital twins for material handling systems. An Experior 3D model imitates (Emulates) the exact behavior of a physical system, making it possible to test control software (PLC and/or IT/MES) against the model. When the physical system is up and running the 3D model evolves into a Digital Twin. Experior enables fast and secure design, delivery and operations of any size material handling system.",
    showMore: false, // Always leave at false
    supported_platforms: [
      "Windows",
      "Azure",
      "VR/AR remote viewer available on web",
    ],
    modelling_notations: ["C#", " FMU/FMI (under development)"],
    domains: ["Any discrete material handling system"],
    license_text:
      "Perpetual license, split into 4 sub-types (Test, Build, Commission, Develop)",
    license_url: "https://xcelgo.com/experior/",
    email: "info@xcelgo.com",
  },
  {
    type: "tool",
    logo: "../../assets/res/logos/logo_mathbrowse.svg",
    asset_name: "MathBrowse",
    company_name: "CAE Tech",
    url: "https://cae.tech",
    description:
      "MathBrowse provides a browser-based, collaborative, editable document containing equations, plots, and interactive inputs. It is designed specifically for sizing calculations at the concept stage of engineering projects. A library of pre-defined calculations is being developed for typical mechanical, electrical or hydraulic components, so engineers can build a complete document by simply including the component types needed.",
    showMore: false, // Always leave at false
    supported_platforms: [
      "Windows",
      "Linux",
      "macOS",
      "Android",
      "iOS",
      "ChromeOS",
    ],
    modelling_notations: [
      "Equation-based quasi-static modelling",
      "Drag-and-drop for most, but power-users can create their own equations using MATLAB-like syntax",
    ],
    domains: ["Automotive", "Machine design"],
    license_text: "SaaS",
    email: "peter.harman@cae.tech",
  },
  {
    type: "tool",
    logo: "../../assets/res/logos/developair_logo.jpg",
    asset_name: "Developair",
    company_name: "Developair Technologies",
    url: "https://www.developair.tech/",
    description:
      "Developair offers tools for verification of requirements and automatic test generation, enabling the optimization of the software development life cycle. These tools are provided in a SaaS (Software as a Service) format and oriented primarily towards companies developing intelligent systems in the transport, energy, aerospace, health or manufacturing sectors.",
    showMore: false, // Always leave at false
    supported_platforms: ["Cloud based"],
    modelling_notations: [
      "Domain specific language",
      "Restricted natural language requirements",
    ],
    domains: ["Transport", "Energy", "Aerospace", "Health", "Manufacturing"],
    license_text: "Subscription",
    email: "info@developair.es",
  },
  {
    type: "tool",
    logo: "../../assets/res/logos/GreenAQ_logo.JPG",
    asset_name: "GreenAQ",
    company_name: "GreenRIS Developments",
    url: "https://greenris.wordpress.com/",
    description:
      "The tool represent a platform for management of diffuse dust emissions from industrial activities.",
    showMore: false, // Always leave at false
    supported_platforms: ["Windows", "Linux", "macOS"],
    modelling_notations: ["Grafana"],
    domains: ["IoT", "PM monitoring", "Industrial activities"],
    license_text: "Subscription as SaaS",
    email: "greenris.office@gmail.com",
  },
  {
    type: "tool",
    logo: "https://www.logic2day.com/getattachment/24f9150a-3a63-4b28-b7a8-1debf37d9cfd/Productlogo-Dezyne.png.aspx",
    asset_name: "Dezyne",
    company_name: "Verum Software Tools B.V.",
    url: "https://verum.com/",
    description:
      "Dezyne is a software engineering toolset that enables engineers to specify, design, validate and formally verify software components for cyberphysical systems.",
    showMore: false, // Always leave at false
    supported_platforms: ["Windows", "Linux"],
    modelling_notations: [
      "System view",
      "State chart",
      "Sequence view",
      "State diagram",
    ],
    domains: [
      "Medical devices",
      "Semiconductors",
      "Infrastructure (tunnels)",
      "Train / Railway",
      "Automotive",
      "Robotics",
      "Defense",
      "Aerospace",
    ],
    license_text: "Commercial",
    download_link: "https://verum.com/free-trial/",
    email: "info@verum.com",
  },
  {
    type: "tool",
    logo: "https://pbs.twimg.com/profile_images/1146383333133299717/wxM-sz9k.png",
    asset_name: "Simulstore",
    company_name: "Simularge",
    url: "https://www.simularge.com",
    description:
      "SIMULSTORE is an industrial platform developed by Simularge. In SIMULSTORE, you can use APIs to develop Digital Twin Apps for your industrial needs or use ready-to-go Apps for quick implementation. APIs in the platform serves for easy use of high-end technologies such as mechanical engineering simulation codes, machine learning, optimization, IoT connectivity and calibration. SIMULSTORE gives freedom to large enterprises and SMEs to create their own Industry 4.0 solutions by themselves, at the same time providing opportunity to develop Digital Skillset.",
    showMore: false, // Always leave at false
    supported_platforms: ["Windows", "Linux", "macOS"],
    modelling_notations: ["Python", "Fortran", "C++", "Javascript", "HDF"],
    domains: [
      "Mechanical Engineering",
      "Industry 4.0",
      "Simulation",
      "IoT",
      "Machine Learning",
      "Data Analytics",
      "Predictive Maintenance",
      "Digital Twins",
    ],
    license_text: "SaaS, PaaS, on-premise",
    license_url: "https://simulstore.com/#/termsandconditions",
    download_link: "https://www.simulstore.com",
    email: "info@simularge.com",
  },
  {
    type: "tool",
    logo: "../../assets/res/logos/agranimo_logo.png",
    asset_name: "FDR soil moisture sensor",
    company_name: "Agranimo",
    url: "https://agranimo.com/",
    description:
      "Cost effective, wireless frequency domain reflectometry (FDR) soil moisture probe with multiple depth levels.",
    showMore: false, // Always leave at false
    supported_platforms: ["Windows", "Linux", "macOS"],
    modelling_notations: ["Python", "C"],
    license_text: "Rental license",
    email: "contact@agranimo.com",
  },
  {
    type: "tool",
    logo: "../../assets/res/logos/smartspot.PNG",
    asset_name: "SmartSpot",
    company_name: "HOP Ubiquitous",
    url: "https://hopu.eu/",
    description:
      "Smart Spot offers a reliable and robust solution to assure compliance with occupational therapy regulations and recommendations, at the same time that supporting environmental emissions monitoring, and preventive detection of anomalies.Data quality and data reliability are a critical benefit and differentiation aspect with respect to other solutions. Smart Spot offers certified data quality following key standards as IEEE P2510, validations by external institutions as Environmental Centre CETENMA, demonstrating an excellent correlation with respect to reference data sources, and a guarantee and certification of calibration for every individual sold system by an accredited calibration laboratory (ISO 17025) by ENAC accreditation body. Thereby, offering all the guarantees and trust available in the market. In addition, the Smart Spot environment monitors are maintained with and AI-empowered cloud platform called Homard (FIWARE-compatible) for the preventive maintenance, fatigue compensation, and a set of Function as a Service (FaaS) Artificial Intelligence algorithms for optimizing the data quality and calibration evolution with respect to seasons temperature/humidity conditions, geo-location (latitude/longitude) and context (industry, rural areas, or cities). Smart Spot is providing a modular and cost-effective solution adaptable for the specific needs of the end-users, supporting reliable and high data quality for environmental monitoring, gases, and toxic substances identification. This is extensible with other contextual parameters as noise, affluence of people and the relevant data sources for monitoring that supports the understanding of the status to enable a data-driven and evidence-based decision-making.Smart Spot benefits to help to measure environmental impact via monitoring the different critical parameters in real-time, enabling also historical analysis, identification of anomalies, and trends. The parameters to be monitored are adaptable to every industrial sector, but also for other businesses and even for outdoor areas in cities and rural zones.Beyond the environmental impact, Smart Spot also brings a relevant data source for supporting digital twins with relevant data sources, that allow to optimize/improve processes by providing reliable/accurate data about the evolution of the different parameters, efficiency/impact of the different changes to bring operational intelligence that enable the opportunity for sustainable improvements and economic benefits.Finally, Smart Spot is empowered with Open Source Cloud-based data visualization and data exploitation platform (https://opendata.hopu.eu/grafana/). Enabling the configuration of alerts, data analysis, dashboards creation, multi-parameters monitoring/correlation, and integration/communication with other systems via MQTT, OPC-UA/Modbus, Open APIs and a direct support of existing DIHs platforms as MIDIH and FIWARE.",
    showMore: false, // Always leave at false
    supported_platforms: ["FreeRTOS"],
    domains: ["Industry"],
    modelling_notations: ["R", "TensorFlow", "FIWARE", "RNN"],
    related_tools: [
      {
        name: "Homard",
        url: "http://homard.hopu.eu/",
      },
    ],
    license_text: "Open Source",
    download_link: "https://hopu.eu/download/3058/",
    email: "jara@hopu.eu",
  },
  {
    type: "tool",
    logo: "https://www.waveform.hr/wp-content/uploads/2020/09/Logo_IOT-Wallet2.png",
    asset_name: "IoT Wallet",
    company_name: "Waveform",
    url: "https://www.waveform.hr",
    description:
      'IoT wallet is the web/mobile app product which allows forming portfolio of different sensing devices for its customers, i.e. it\'s wallet. It allows users to remotely register, monitor and configure commercially available or custom low-power sensing devices integrating low-power state-of-the-art radios. Once configured, IoT wallet notifies its users about status of sensors via "push notifications". IoT wallet dashboard provides current/past information retrieved from the database which collects sensed data from various sensors, while the configuration of sensors such as how frequently sensors are sending its data or other communication properties are set upon the configuration. Specific advantage of IoT wallet is the possibility to integrate Machine Learning that can be used for different general based purposes such as future estimations or predictions. Typical scenario of IoT wallet usage is the smart environment. For example, it could be smart home that currently possess soil humidity sensor to sense if the garden needs to be irrigated and actuators to turn automatic irrigation; parking lots sensors for occupancy; or several LoRa water meters that measure specific points of water consumption. In the user dashboard, all of these devices are displayed with current status and given data analytics. The system is able to notify users if the garden has to be irrigated, turn on remote irrigation, or receive the notifications if the water consumption is not in accordance with the regular pattern.',
    showMore: false, // Always leave at false
    supported_platforms: ["Windows", "Linux", "macOS"],
    modelling_notations: ["Machine Learning", "Tensorflow"],
    domains: ["IoT", "Machine Learning", "Sensors", "Modelling", "CPS"],
    license_text: "Time-based: monthly/yearly based fees apply",
    email: "petar@waveform.hr",
  },
  {
    type: "tool",
    logo: "https://simreka.com/wp-content/uploads/2019/04/simrekalogo-e1558361786117.png",
    asset_name: "Simreka",
    company_name: "Simreka",
    url: "https://simreka.com/",
    description:
      "Simreka tool enables customers to simulate manufacturing products and processes and rapidly find alternatives to reduce costs, improve sustainability performance.",
    showMore: false, // Always leave at false
    supported_platforms: ["Linux", "2 secure deployment options"],
    modelling_notations: ["LAMP stack", "C", "Python"],
    domains: [
      "Machine Learning",
      "Manufacturing processes",
      "Materials",
      "Chemicals",
      "Sustainability",
      "Safety",
      "Regulatory compliance",
    ],
    license_text:
      "Annual license and Pay as you go license, Data service is billed separately",
    email: "hello@simreka.com",
  },
  {
    type: "tool",
    logo: "../../assets/res/logos/beam_logo.png",
    asset_name: "Smart sensor-based Business Intelligence",
    company_name: "Beam Innovation",
    url: "https://beaminnovation.ro",
    description:
      "We offer a revolutionary mobile communication channel between retailers and clients aimed primarily at the Real Estate and Retail Industry, aiming to solve some of their most stringent problems: Poor yield of assets in the operational life cycle; Low number of visitors; Low period of visit; Low conversion rate from visitors to shoppers; Low average receipt value; Low visitor engagement; Low penetration rate; Weak conversation with visitors/customers; High marketing costs; Low analytics accuracy. However, business intelligence models can be applied in many other application domains. For example in smart health (for contact tracing during a pandemic or other important localization-related scenarios). The platform uses signals from BLE beacons, geofences or Wi-Fi networks to notify potential customers via a mobile application about the marketing campaigns of merchants in the areas visited. The same platform stores specific data on the behavior of visitors / buyers relative to the marketing campaigns of merchants.",
    showMore: false, // Always leave at false
    supported_platforms: ["Windows", "Linux", "macOS"],
    modelling_notations: [
      "iOS",
      "Android",
      "Cloud computing",
      "ASP.NET Core",
      ".NET Core",
      "SQL",
      "Java",
      "Kotlin",
      "RxJava",
      "RxKotlin",
      "RxSwift",
    ],
    related_tools: [
      {
        name: "Microsoft Azure App Service",
        url: "https://azure.microsoft.com/en-us/services/app-service/",
      },
      {
        name: "Azure Storage Account",
        url: "https://docs.microsoft.com/en-us/azure/storage/",
      },
      {
        name: "Redis Cache",
        url: "https://redis.io/",
      },
      {
        name: "SendGrid",
        url: "https://app.sendgrid.com/",
      },
    ],
    domains: ["Retail", "PropTech", "Real Estate", "Tourism", "eHealth"],
    license_text:
      "The user is allowed to freely install the mobile applications that communicate with the platform. Access to the data analytics within the platform is permitted via API (to be developed)",
    email: "office@beaminnovation.ro",
  },
  {
    type: "tool",
    logo: "https://libpf.com/img/logo.png",
    asset_name: "LIBPF",
    company_name: "simevo",
    url: "https://simevo.com",
    description:
      "LIBrary for Process Flowsheeting -  a C++ library providing the building blocks to simulate continuous industrial processes at steady state with first-principle, concentrated-parameter models.",
    showMore: false, // Always leave at false
    supported_platforms: ["Windows", "Linux", "macOS"],
    modelling_notations: ["C++", "OOP", "DAG", "Flowsheeting"],
    domains: [
      "Polymers",
      "Chemical specialties",
      "Metallurgy",
      "Pulp & Paper",
      "Food processing",
      "Pharmaceuticals",
      "Biofuels",
      "Power & Energy",
    ],
    license_text:
      "Various (per user / per-machine / per-site,  one-off / recurring)",
    license_url: "https://simevo.com/process/pricing/",
    email: "info@simevo.com",
  },
  {
    type: "tool",
    logo: "../../assets/res/logos/Logo_Schlegel-Simulation.png",
    asset_name: "WebModelica",
    company_name: "Schlegel Simulation",
    url: "http://www.schlegel-simulation.de",
    description:
      "WebModelica is a lightweight client - server tool for modelling and simulation of the dynamics of mechatronic systems.",
    showMore: false, // Always leave at false
    supported_platforms: ["Windows", "Linux", "macOS"],
    modelling_notations: ["Modelica"],
    domains: ["Mechatronic systems"],
    license_text: "SaaS, On-Premise",
    email: "info@schlegel-simulation.de",
  },
  {
    type: "tool",
    logo: "../../assets/res/logos/logo-clearsy-2020-small.png",
    asset_name: "CLEARSY Safety Platform",
    company_name: "CLEARSY",
    url: "https://www.clearsy.com/en/",
    description:
      "The CLEARSY Safety Platform is aimed at easing the development and the deployment of safety critical applications, up to SIL4. It relies on the smart integration of formal methods (including mathematical proof), redundant code generation and compilation, and a hardware platform that ensures a safe execution of the software. The CSSP is made of an integrated software development environment (IDE) and a hardware platform that natively integrates safety principles.",
    showMore: false, // Always leave at false
    supported_platforms: ["Windows"],
    modelling_notations: ["B method"],
    domains: [
      "Education",
      "Railways",
      "Energy",
      "Automotive",
      "Robotics",
      "Industry",
    ],
    license_text:
      "The IDE and execution platform are copyright CLEARSY. Owners are entitled to freely use/develop/market resulting applications.",
    download_link:
      "https://www.clearsy.com/en/our-tools/clearsy-safety-platform/",
    email: "thierry.lecomte@clearsy.com",
  },
  {
    type: "tool",
    logo: "../../assets/res/logos/LogoAirChain.png",
    asset_name: "AirChain",
    company_name: "Cubic Fort Consultores SL",
    url: "https://cubicfort.com",
    description:
      "With AirChain you can generate a permissioned blockchain network in the cloud to securely store all the measurements of your IoT sensors. Just with one mouse click. Select the organizations that will manage data, privacy policies, among other parameters, and the system will automatically generate the API endpoints that you need to start storing/getting data in/from the blockchain.",
    showMore: false, // Always leave at false
    supported_platforms: ["Windows", "Linux", "macOS"],
    modelling_notations: ["Bash", "Python", "YAML", "JSON", "Javascript"],
    related_tools: [
      {
        name: "Hyperledger Fabric",
        url: "https://www.hyperledger.org/use/fabric",
      },
      {
        name: "AWS",
        url: "https://aws.amazon.com/",
      },
      {
        name: "Docker",
        url: "https://www.docker.com/",
      },
      {
        name: "Kubernetes",
        url: "https://kubernetes.io/",
      },
    ],
    domains: ["IoT"],
    license_text: "Permissive, Apache style",
    email: "juanba.tomas@cubicfort.com",
  },
  {
    type: "tool",
    logo: "https://eu-nams.com/wp-content/uploads/2019/01/nams-logo-250x63.svg",
    asset_name: "NAMS AM Platform",
    company_name: "NAMS",
    url: "https://www.nams-3d.com/index.php/en/home_en/",
    description: "Online Platform Tool.",
    showMore: false, // Always leave at false
    supported_platforms: ["Windows", "Linux"],
    modelling_notations: ["Java", "ZK Framework", "MySQL"],
    domains: [
      "Additive Manufacturing",
      "Advanced Manufacturing",
      "Conventional Manufacturing",
    ],
    license_text: "Proprietary",
    email: "d.cortolezzis@eu-nams.com",
  },
  {
    type: "tool",
    dihAsset: true,
    logo: "../../assets/res/logos/af3_logo.jpeg",
    asset_name: "AutoFOCUS3",
    company_name: "fortiss",
    url: "https://www.fortiss.org/",
    description:
      "AutoFOCUS3 is a model-based tool and research platform for safety-critical embedded systems. It builds on a generic Eclipse-based tooling framework and is open source (Apache 2.0 license). It supports the design, development and validation of safety-critical embedded systems in many development phases, including architecture design, implementation, hardware/software integration, and safety argumentation based on formal models from the following viewpoints: requirements, logical architecture and behavior, technical (hardware and software) architecture, deployment (software/hardware mapping, scheduling, safety argumentation. In HUBCAP, the use of AutoFOCUS3 focuses on a design-space exploration (DSE) service that allows to explore architecture alternatives for the system under design. In particular, this includes different mappings of software tasks to the platform architectures and the use of safety patterns (e.g., based on partition/compartment architectures). The DSE services uses a model of the system (logical architecture, hardware platform architecture, parameters such as, WCETs, memory sizes, etc.) and the design goals as input. Design goals are defined in terms of 1) constraints on the DSE problems, which define the space of valid solutions, and 2) optimization objectives, which define optimality properties of a solution (e.g., cost, estimated energy consumption, etc.). In case multiple objectives are defined, the solutions to a DSE problem are presented as a Pareto-Front. Thereby, contradicting design objectives can be evaluated. The DSE service relies on formal methods to perform the exploration. In the first step, it transforms the system model and the design constraints and objectives into an appropriate formal language. Then, one of the supported solver backend (e.g., Microsoft(R) Z3) is executed in order to determine the solution alternatives. In the last step, the output of the solver is transformed back into the AutoFOCUS3 modeling language.",
    showMore: false, // Always leave at false
    supported_platforms: ["Windows", "Linux", "macOS"],
    modelling_notations: ["Component-Based Design (based on FOCUS)"],
    related_tools: [
      {
        name: "FMI interface",
        url: "https://fmi-standard.org/",
      },
    ],
    domains: ["Aviation", "Automotive", "Industrial automation"],
    license_text: "Apache 2.0",
    license_url: "https://www.apache.org/licenses/LICENSE-2.0",
    download_link:
      "https://www.fortiss.org/en/publications/software/autofocus-3",
    email: "mbse@fortiss.org",
  },
  {
    type: "tool",
    logo: "../../assets/res/logos/asvin.png",
    asset_name: "asvin Secure OTA Update Distribution for IoT",
    company_name: "asvin",
    url: "https://www.asvin.io",
    description:
      "IoT vendors, operators and insurance in can organize and monitor the software lifecycles of IoT devices during operatin via asvin.io cloud solution. Track Software from certification, deploying, distribution towards operation on devices. Secure and resilient update distribution as a service for IoT Devices at the Edge (e.g. industrial Sensors, Nodes, Gateways). Providing intelligence thread landscape reports for IoT Device vendors and operators during device lifecycles: e.g. risk of unpatched and unsecure devices deployed.",
    showMore: false, // Always leave at false
    supported_platforms: ["Windows", "Linux", "macOS"],
    modelling_notations: ["C++", "REST", "JSON", "HTTPS"],
    related_tools: [
      {
        name: "Etherium Blockchain (Private Blockchain Alastria Network B)",
        url: "https://alastria.io/en/eres-desarrollador/",
      },
    ],
    domains: ["Automotive", "Space", "Machinery", "Smart Cities"],
    license_text: "Apache 2.0",
    license_url: "https://www.apache.org/licenses/LICENSE-2.0",
    email: "contact@asvin.io",
  },
  {
    type: "tool",
    logo: "../../assets/res/logos/logo_ghost.png",
    asset_name: "Ghost Suite (Studio & Creator)",
    company_name: "GHOST - feel it.",
    url: "https://www.ghost-feel.it",
    description:
      "Using meaningful vibration(tactile) feedback can be more intuitive and efficient than visual or acoustic feedback in many scenarios. The GHOST -feel it. Software allows for quick and easy implementation of meaningful vibration feedback for your application without the need of special know how and experience in the development team. The development is further accelerated by using a development kit that can be used in a Plug and Play manner with the Software tool and by a library of validated vibration patterns that can be used right away. It has never been easier to create intelligent vibration feedback! Don't only focus on the Input; focus on the users and how to provide the best possible communication to them.",
    showMore: false, // Always leave at false
    supported_platforms: ["Windows", "Linux", "macOS"],
    modelling_notations: ["Javascript"],
    domains: [
      "Automotive",
      "IoT",
      "Conusmer electronics",
      "Medical",
      "Gaming",
      "VR",
      "Human-Machine-Interaction",
    ],
    license_text: "Purchasable(1 to 12 months)",
    email: "hello@ghost-feel.it",
  },
  {
    type: "tool",
    logo: "../../assets/res/logos/logo_been.png",
    asset_name: "Beeno",
    company_name: "API FORGE",
    url: "https://apiforge.it",
    description:
      "The monitoring and analysis platform collects, classifies and represents the data offered by the hardware solution used in the monitoring project, making the necessary extractions for further investigations and analytical overlays such as anomaly detection or predictive maintenance.",
    showMore: false, // Always leave at false
    supported_platforms: ["Web Based (Platform independent)"],
    modelling_notations: ["Fleets", "Measurement types", "Measurement units"],
    domains: ["IoT"],
    license_text: "SaaS",
    email: "r.manolea@apiforge.it",
  },
  {
    type: "tool",
    logo: "../../assets/res/logos/logo_embneusys.png",
    asset_name: "Cube",
    company_name: "Embneusys PC",
    url: "http://embneusys.com",
    description:
      "Our tool provides health data for any kind of equipment, regarding its location and working conditions that could lead assistive maintenance checks and failure predictions.",
    showMore: false, // Always leave at false
    supported_platforms: ["Windows", "Linux", "macOS"],
    modelling_notations: [
      "Tool identification;",
      "Fall detection",
      "Vibration profiling",
      "Temperature Monitoring",
      "Working time measurements",
    ],
    domains: ["IoT", "Construction", "Mining", "Mobile Equipment"],
    license_text: "Subscription for customers, REST API for system integrators",
    email: "info@embneusys.com",
  },
  {
    type: "tool",
    logo: "../../assets/res/logos/logo_drisq.png",
    asset_name: "Kapture & Modelworks",
    company_name: "D-RisQ",
    url: "https://www.drisq.com",
    description:
      "Kapture: Engineers charged with writing software requirements for embedded systems are likely to benefit from the use of Kapture.  The right requirements assist developers to develop correct designs, coders to develop correct code, test engineers to develop valid test cases and hence achieve working software with fewer iterations. This cuts costs and hence also helps project managers as well as enabling regulators understand what the software is supposed to do. Modelworks: Design engineers using Simulink/Stateflow for embedded control systems are likely to benefit from the use of Modelworks. The exploration of design to ensure that it correctly represents the intent of the requirements can be automated.  It gives the designer the option to explore different designs, enabling the selection of the most maintainable, most easily understood design while also optimising efficiency for future coding.  It means that where there is uncertainty of the required behaviour, this can be explored, changes incorporated and checked.  As a result it will mean the achievement of working software with fewer iterations of the later more expensive stages of software development.",
    showMore: false, // Always leave at false
    supported_platforms: ["Windows"],
    modelling_notations: ["English", "Simulink"],
    related_tools: [
      {
        name: "Simulink",
        url: "https://www.mathworks.com/products/simulink.html",
      },
      {
        name: "Stateflow",
        url: "https://www.mathworks.com/products/stateflow.html",
      },
    ],
    domains: [
      "Aerospace",
      "Autonomous systems",
      "Automotive",
      "Railways",
      "Nuclear",
      "Space",
    ],
    license_text: "Seat based, per project, per year",
    email: "njt@drisq.com",
  },
  {
    type: "tool",
    logo: "../../assets/res/logos/logo_ekkono.jpg",
    asset_name: "Ekkono Edge Software Library",
    company_name: "Ekkono Solutions",
    url: "https://ekkono.ai",
    description:
      "Our Software Library and accompanying SDK allwos developers to quickly and easily add machine learning capabilities to their devices. We provide easy-to-learn APIs that allow you to hook our native C++ software library into your development framework - whether that is in native-C, C# or Python.",
    showMore: false, // Always leave at false
    supported_platforms: [
      "Windows",
      "Linux",
      "macOS",
      "Embedded Systems and OSs, such as Mbed, etc.",
    ],
    modelling_notations: [
      "Neural Networks",
      "Random Forest",
      "Decision Tree",
      "Linear Regression",
      "Multi-Layered Perceptrons",
      "Incremental Learning",
    ],
    domains: [
      "IoT",
      "Energy",
      "Automotive",
      "Industry",
      "Machine Learning",
      "Product Development",
      "Medtech",
      "Sustainability",
      "Smart Products",
    ],
    license_text: "License per unit/device that runs our software library",
    email: "info@ekkono.ai",
  },
  {
    type: "tool",
    logo: "../../assets/res/logos/logo_nissatech.png",
    asset_name: "D3Scan - Deep Data Diagnostics through Cognitive Scanning",
    company_name: "Nissatech",
    url: "https://www.nissatech.com/",
    description:
      "D3Scan is a novel approach for analysing the behaviour of a manufacturing physical asset (machine, tool) through the creation and analysis of its digital replica from past data  (so called Digital Twin), with the goal to find its weak (unstability) points and understand their root causes that can be used for the real-time monitoring and off-line exploration of the process, including quality control, OEE and tool-life improvement.",
    showMore: false, // Always leave at false
    supported_platforms: ["Windows", "Linux"],
    modelling_notations: ["Digital Twin model", "ML models"],
    domains: ["Manufacturing", "Process industry", "Oil&Gas"],
    related_tools: [
      {
        name: "D2Lab",
        url: "https://d2lab.nissatech.com/what-is-the-d2lab/",
      },
      {
        name: "D2Twin",
        url: "https://d2lab.nissatech.com/d2twin/",
      },
    ],
    license_text: "Proprietary",
    email: "info@nissatech.com",
  },
  {
    type: "tool",
    logo: "../../assets/res/logos/logo_rvmagnetics.png",
    asset_name: "MicroWire sensing technology",
    company_name: "RVmagnetics",
    url: "https://www.rvmagnetics.com",
    description:
      "MicroWire sensors by RVmagnetics are miniaturized (diameter ca. 3–70 µm) magnetic contactless sensors of physical quantities (temperature, pressure, pull, mechanical stress, torsion, magnetic field, position, etc.). MicroWires are made of metallic alloy core (diameter ca. 1–50 µm) and glass coating (thickness 2–20 µm). Their size, high added value, robustness, simple production process and also their symmetry, glass-coating, possibility of contactless sensing leads to their utilization as a miniaturized sensor with a wide range of applications in different industries: IoT, Industry 4.0, Structural Health Monitoring, Automotive, Aerospace, Smart materials, Healthcare, Anticounterfeiting area, etc.",
    showMore: false, // Always leave at false
    supported_platforms: ["Windows", "Linux", "macOS"],
    modelling_notations: [
      "Generator",
      "MicroWire",
      "Sensing Head",
      "Filter",
      "Amplifier",
      "CPU",
      "Data transfer",
      "Server",
      "Real-time data ingestion",
    ],
    domains: [
      "SHM",
      "IoT",
      "Automotive",
      "MedTech",
      "Composites",
      "Robotics",
      "Battery management",
      "AntiCounterfeit",
    ],
    license_text: "Exclusive license, sole license, non-exclusive license, JV",
    email: "marhefka@rvmagnetics.com",
  },
  {
    type: "tool",
    logo: "../../assets/res/logos/logo_skill.png",
    asset_name: "PropertyDoc",
    company_name: "Skill Software",
    url: "https://skillsoftware.de",
    description:
      "PropertyDoc is now available as a unique application suite from planning up to building and running of properties, always mobile on-site at the working areas, with technical service, alarm based energy management, including sensors up to guiding/routing in business areas, shopping malls, universities, etc.PropertyDoc bases on our BauDoc, which was honored with the Telekom Innovation Award; the alert based, mobile energy managing EnergyDoc was partly funded by the federate state of Hessen and EU (ERDF).• PropertyDoc uses the revolutionary SKILL BauDoc-techniques, which significantly simplifies the administration and management of construction sites and buildings by documenting all plans, changes, deficiencies, performances and accomplishments in the blueprints, based on schematic construction plans and photos, manages the information in structured databases and, through our app, provides all information directly on site.* PropertyDoc now increases productivity of property management, by integrating more functionality and business processes. It substitutes paper forms, excel sheets, tons of emails, and is always on-site.• Solutions for commission managers, with incorporated project and time management.• Employee and resource localization (indoor and outdoor combined), e.g. to connect important customers at busy fairs with their contact person as quickly as possible, or to locate the urgently needed ECG in a hospital.• Ticketing, helpdesk and claims with learning knowledge base.• Technical service with hotline and service assistance, statements, dispatching, mobile stock, service report with performance times, material and replacement parts incl. customers signature on the tablet and interfaces to SAP, NAV, etc.* integrated communication within building teams as well as to the investor site, sub-contractors etc* working BIM: PropertyDoc interacts with CAD to import digital planning maps and takes service orders and delivers job reports real-time from/to CAFM Software.* 3D videos (Navvis) linked with object-information* PropertyDoc is the leading edge of property management – mobile, flexible and available!",
    showMore: false, // Always leave at false
    supported_platforms: ["Windows", "Linux", "macOS", "Android", "iOS"],
    modelling_notations: [
      "English",
      "German",
      "Other languages on demand in some days",
    ],
    related_tools: [
      {
        name: "BauDoc",
        url: "https://skillsoftware.de/software/baudoc/",
      },
      {
        name: "EnergyDoc",
        url: "https://skillsoftware.de/software/energydoc/",
      },
      {
        name: "TechDoc",
        url: "https://skillsoftware.de/software/techdoc/",
      },
    ],
    domains: [
      "Property-management",
      "Construction",
      "Facility management",
      "Energy management",
      "IoT",
      "Technical supply",
      "Mobile documentation",
    ],
    license_text: "SaaS",
    email: "reh@skillsoftware.de",
  },
  {
    type: "tool",
    logo: "../../assets/res/logos/logo_conductiv.png",
    asset_name: "Conductiv.ai Process Control",
    company_name: "Conductiv.ai",
    url: "https://conductiv.ai",
    description:
      "Conductiv.ai Process Control uses AutoML and Hybrid Modeling to create Self-Perfecting Digital Twins for hardware equipments, chemical processes and even entire production lines, enabling effortless cost & material optimization and reduction in product time-to-market.",
    showMore: false, // Always leave at false
    supported_platforms: ["Windows", "Linux", "macOS"],
    modelling_notations: ["Python", "MATLAB"],
    domains: [
      "Semiconductors",
      "3D Printing",
      "Industrial Automation",
      "Automotive",
    ],
    license_text: "Subscription",
    email: "contact@conductiv.ai",
  },
  {
    type: "tool",
    logo: "../../assets/res/logos/logo_evitado.png",
    asset_name: "Evitado System Simulator",
    company_name: "Evitado Technologies",
    url: "https://evitado.io/",
    description:
      "This tool allows for a simulation of the Evitado system. The tool details the capabilities of using Evitado's portable LiDAR-based system in providing collision warning and location tracking of any large moving asset.",
    showMore: false, // Always leave at false
    supported_platforms: ["Linux"],
    modelling_notations: ["C++", "CAD"],
    related_tools: [
      {
        name: "Gazebo",
        url: "http://gazebosim.org/",
      },
      {
        name: "ROS",
        url: "https://www.ros.org/",
      },
    ],
    domains: ["IoT", "Logistics", "Automotive", "Robotics"],
    license_text: "TBD",
    email: "info@evitado.io",
  },
  {
    type: "tool",
    logo: "../../assets/res/logos/logo_tvarit_2.png",
    asset_name: "TiA",
    company_name: "Tvarit",
    url: "https://tvarit.com/de/",
    description:
      "Tvarit Industrial Artificial Intelligence (TiA) is a ready to use, state of the art Smart Factory and Digital Twin software. It offers a user-friendly software environment for prescriptive and predictive analytics.",
    showMore: false, // Always leave at false
    supported_platforms: ["Windows", "Linux", "macOS"],
    modelling_notations: ["English"],
    related_tools: [
      {
        name: "TOM",
        url: "https://tvarit.com/de/achieve-more",
      },
      {
        name: "TIM",
        url: "https://tvarit.com/de/achieve-more",
      },
    ],
    domains: ["Manufacturing Industry"],
    license_text: "Copyright Tvarit GmbH",
    license_url: "https://tvarit.com/de/achieve-more",
    email: "info@tvarit.com",
  },
];
