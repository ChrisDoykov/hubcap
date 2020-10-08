import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tehcnologies",
  templateUrl: "./tehcnologies.component.html",
  styleUrls: ["./tehcnologies.component.scss"],
})
export class TehcnologiesComponent implements OnInit {
  constructor() {}

  width: number;
  elements_fade_in: any;
  elements_slide_in_left: any;
  elements_slide_in_right: any;
  windowHeight: any;

  letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  alphabet = {
    a: [],
    b: [],
    c: [],
    d: [],
    e: [],
    f: [],
    g: [],
    h: [],
    i: [],
    j: [],
    k: [],
    l: [],
    m: [],
    n: [],
    o: [],
    p: [],
    q: [],
    r: [],
    s: [],
    t: [],
    u: [],
    v: [],
    w: [],
    x: [],
    y: [],
    z: [],
  };

  technologies = [
    {
      type: "model",
      logo:
        "https://cyberarch.eu/wp-content/uploads/2020/06/Logo_cyberarch.png",
      asset_name: "RCADE",
      company_name: "Cyberarch Consulting",
      url: "https://cyberarch.eu",
      description:
        'In the Cyber Security market there are a lot of tools for various operations and the end-user needs to select two or more tools based on their requirements. Having this in mind Cyberarch Consulting came up with an idea of creating a single product that can serve as an all-purpose tool. RCADE which is being developed as an "All in one Security Solution". It integrates Vulnerability Assessment, Log Analysis, Malware Analysis, Security Monitoring, OSINT Gathering, Hybrid Pentest Request. as one product. Moreover, the tool is available in the cloud such as AWS, Azure, Alibaba and deployable on premises. The tool is built in such a way that even a novice user can easily use it efficiently without prior training/knowledge.',
      showMore: false, // Always leave at false
      domains: [
        "Energy",
        "Retail",
        "Banking/Financial",
        "Government",
        "Education",
        "Health",
        "Continuous Integration Testing",
      ],
      modelling_lang_tool: [
        "Python",
        "Golang",
        "YAML",
        "Node.js",
        "Django",
        "( Under development MVP will be ready in March 2021)",
      ],
      license_info_name: "Pay-as-you-go",
      email: "info@cyberarch.eu",
    },
    {
      type: "model",
      logo: "../../assets/res/images/prosim-sample.png",
      asset_name: "PROSIM T+",
      company_name: "Asti Automation",
      url: "https://www.astiautomation.ro",
      description:
        "PROSIM T+ is an industrial process simulator for digital manufacturing, which enables simulations of discrete and continuous industrial processes for PLC programming training with realistic signal interfaces.",
      showMore: false, // Always leave at false
      domains: ["Education and training"],
      modelling_lang_tool: ["C#"],
      license_info_name: "Pay-as-you-go",
      email: "office@astiautomation.ro",
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
      license_info_name: "INTO-CPS Association Public License",
      license_info_url:
        "https://github.com/INTO-CPS-Association/maestro/blob/development/LICENSE",
      download_link: "https://into-cps-association.github.io/download/",
      email: "into-cps@mail.com",
    },
    {
      type: "tool",
      logo:
        "https://xcelgo.com/wp-content/uploads/2018/02/experior6logo-e1519976751203.png",
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
      license_info_name:
        "Perpetual license, split into 4 sub-types (Test, Build, Commission, Develop)",
      license_info_url: "https://xcelgo.com/experior/",
      email: "info@xcelgo.com",
    },
    {
      type: "tool",
      logo: "../../assets/res/logos/developair_logo.jpg",
      asset_name: "Developair",
      company_name: "Developair Technologies",
      url: "https://www.developair.tech/",
      description:
        "Developair offers tools for verification of requirements and automatic test generation, enabling the optimization of the software development life cycle. This tools are provided in a SaaS (Software as a Service) format and oriented primarily towards companies developing intelligent systems in the transport, energy, aerospace, health or manufacturing sectors. There are 3 main functionalities available for the user: 1 - A smart editor that integrates user assistance functions and facilitates the definition of software architecture and software requirements. It is based on diagramming and restricted natural language (patterns). 2 - \nA requirements checker that identifies inconsistencies, redundancies, etc on a set of requirements. The early validation of software specification reduces the design issues and decreases the development costs, so this feature represents a significant improvement in development projects. Software robustness and quality is guaranteed through automated verification tasks. 3 -  A test generator for automatic test generation. The generator uses the specification of requirements and architecture as input, and generates black-box tests with requirements coverage. Additionally, these tests can be exported to some common testing/simulation frameworks with a single click.",
      showMore: false, // Always leave at false
      supported_platforms: ["Cloud based"],
      modelling_notations: ["Domain specific language", "ReqIf", "ATML"],
      domains: ["Transport", "Energy", "Aerospace", "Health", "Manufactoring"],
      license_info_name: "Subscription",
      email: "info@developair.es",
    },
    {
      type: "tool",
      logo:
        "https://www.logic2day.com/getattachment/24f9150a-3a63-4b28-b7a8-1debf37d9cfd/Productlogo-Dezyne.png.aspx",
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
      license_info_name: "Commercial",
      download_link: "https://verum.com/free-trial/",
      email: "info@verum.com",
    },
    {
      type: "tool",
      logo:
        "https://pbs.twimg.com/profile_images/1146383333133299717/wxM-sz9k.png",
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
      license_info_name: "SaaS, PaaS, on-premise",
      license_info_url: "https://simulstore.com/#/termsandconditions",
      download_link: "https://www.simulstore.com",
      email: "info@simularge.com",
    },
    {
      type: "tool",
      logo:
        "http://www.waveform.hr/wp-content/uploads/2020/09/Logo_IOT-Wallet2.png",
      asset_name: "IoT Wallet",
      company_name: "Waveform",
      url: "https://www.waveform.hr",
      description:
        'IoT wallet is the web/mobile app product which allows forming portfolio of different sensing devices for its customers, i.e. it\'s wallet. It allows users to remotely register, monitor and configure commercially available or custom low-power sensing devices integrating low-power state-of-the-art radios. Once configured, IoT wallet notifies its users about status of sensors via "push notifications". IoT wallet dashboard provides current/past information retrieved from the database which collects sensed data from various sensors, while the configuration of sensors such as how frequently sensors are sending its data or other communication properties are set upon the configuration. Specific advantage of IoT wallet is the possibility to integrate Machine Learning that can be used for different general based purposes such as future estimations or predictions. Typical scenario of IoT wallet usage is the smart environment. For example, it could be smart home that currently possess soil humidity sensor to sense if the garden needs to be irrigated and actuators to turn automatic irrigation; parking lots sensors for occupancy; or several LoRa water meters that measure specific points of water consumption. In the user dashboard, all of these devices are displayed with current status and given data analytics. The system is able to notify users if the garden has to be irrigated, turn on remote irrigation, or receive the notifications if the water consumption is not in accordance with the regular pattern.',
      showMore: false, // Always leave at false
      supported_platforms: ["Windows", "Linux", "macOS"],
      modelling_notations: ["Machine Learning", "Tensorflow"],
      domains: ["IoT", "Machine Learning", "Sensors", "Modelling", "CPS"],
      license_info_name: "Time-based: monthly/yearly based fees apply",
      email: "petar@waveform.hr",
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
      license_info_name:
        "Various (per user / per-machine / per-site,  one-off / recurring)",
      license_info_url: "https://simevo.com/process/pricing/",
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
      license_info_name: "SaaS, On-Premise",
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
      license_info_name:
        "The IDE and execution platform are copyright CLEARSY. Owners are entitled to freely use/develop/market resulting applications.",
      download_link:
        "https://www.clearsy.com/en/our-tools/clearsy-safety-platform/",
      email: "thierry.lecomte@clearsy.com",
    },
    {
      type: "tool",
      logo: "../../assets/res/logos/LogoAirChain.png",
      asset_name: "AirChain",
      company_name: "QARTECH Innovations",
      url: "https://www.qartech.io",
      description:
        "With AirChain you can generate a permissioned blockchain network in the cloud to securely store all the measurements of your air-quality sensors. Just with one mouse click. Select the organizations that will manage data, privacy policies, among other parameters, and the system will automatically generate the API endpoints that you need to start storing/getting data in/from the blockchain. ",
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
      domains: ["Air quality sensors", "Wireless sensors"],
      license_info_name: "Permissive, Apache style",
      email: "info@qartech.io",
    },
    {
      type: "tool",
      logo:
        "https://eu-nams.com/wp-content/uploads/2019/01/nams-logo-250x63.svg",
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
      license_info_name: "Proprietary",
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
      license_info_name: "Apache 2.0",
      license_info_url: "https://www.apache.org/licenses/LICENSE-2.0",
      download_link:
        "https://www.fortiss.org/en/publications/software/autofocus-3",
      email: "mbse@fortiss.org",
    },
    {
      type: "model",
      logo: "../../assets/res/logos/smm_inv_logo.png",
      asset_name: "Water and air systems models",
      company_name: "SMM INVEST",
      url: "https://imobiliarproiect.ro/",
      description:
        "Our customized models serve to identify the optimum performance of the system and can be used in order to plan the optimal solution for projects.",
      showMore: false, // Always leave at false
      modelling_lang_tool: ["Custom for each model"],
      domain: ["Fluid flow"],
      license_info_name: "Specific for each project",
      email: "iostoica@gmail.com",
    },
    {
      type: "model",
      dihAsset: true,
      logo: "../../assets/res/logos/fortissimo.png",
      asset_name: "fortissimo",
      company_name: "fortiss",
      url: "https://www.fortiss.org/",
      description:
        "The fortissimo rover shows how model-based systems engineering can be employed to design, validate and transfer software and system architectures for autonomous vehicles to an operational cyber-physical system. The fortissimo platooning model was implemented in the AutoFOCUS3 open source systems engineering tool developed by fortiss. It represents an autonomous driving function that permits automobiles or trucks to drive behind one another at extremely close distances, thus reducing fuel consumption. The model provides the logical architecture and the behaviour specification of platooning functions such as joining or leaving a platoon and car-to-car communication, as well as ADAS functions like adaptive cruise control systems and lane/emergency braking assistants. The developed functions can be implemented via code generators in the physical fortissimo Rover, a 1:10 scale model vehicle equipped with sensor technology such as cameras, ultrasound and laser-based distance meters. The virtual fortissimo platform is intended of the early validation of the models in a functional simulation environment. By means of the AutoFOCUS3 FMI interface, the vehicle behavior is co-simulated with the vehicle dynamics and the environment (modeled using other open source tools such as OpenModelica, ROS and Gazebo) and represented in a 3D simulation. At fortiss, the fortissimos are used to examine current research issues. These include a model-based method for deriving so-called assurance cases for validating the functional safety of the vehicles in line with ISO-26262, degradation and reconfiguration strategies for safeguarding critical driving functions (e.g., against hardware faults), analytical and simulation-based processes for dimensioning and validating the vehicle hardware and software architecture (i.e, design-space exploration such as HW/SW deployments).",
      showMore: false, // Always leave at false
      modelling_lang_tool: ["AutoFOCUS3"],
      domain: ["Automotive"],
      license_info_name:
        "© 2020 fortiss GmbH, released under a 2-Clause BSD License",
      license_info_url: "https://opensource.org/licenses/BSD-2-Clause",
      download_link:
        "https://www.fortiss.org/en/research/living-lab/detail/fortissimo",
      email: "mbse@fortiss.org",
    },
  ];

  showingAll = true;
  rearranged = false;
  scrolled = false;

  whitespace: RegExp = /\s/g;

  scrollIntoView(id) {
    document.getElementById(id).scrollIntoView({ block: "center" });
  }

  ngOnInit(): void {
    document.title = "Technologies | HUBCAP";
    document.getElementById("hero-title").textContent = "Technologies";

    this.rearrangeTechnologies(this.technologies);

    this.onResize();
    this.checkPosition();
  }

  rearrangeTechnologies(technologies) {
    this.letters.forEach((letter) => {
      this.alphabet[letter] = [];
    });
    for (let tech of technologies) {
      this.alphabet[tech.asset_name.toLowerCase().charAt(0)].push(tech);
    }

    this.rearranged = true;
  }

  filterAndInsert(event) {
    let technologies = [];

    if (event.target.name === "technologiesRadio") {
      if (event.target.id === "modelsR") {
        technologies = this.technologies.filter(
          (tech) => tech.type === "model"
        );

        this.rearrangeTechnologies(technologies);
      } else if (event.target.id === "toolsR") {
        technologies = this.technologies.filter((tech) => tech.type === "tool");

        this.rearrangeTechnologies(technologies);
      } else if (event.target.id === "smeR") {
        technologies = this.technologies.filter((tech) => !tech.dihAsset);

        this.rearrangeTechnologies(technologies);
      }
    } else if (event.target.name === "all") {
      if (event.target.checked === true) {
        this.rearrangeTechnologies(this.technologies);
      } else {
        const toolsRadio = document.getElementById(
          "toolsR"
        ) as HTMLInputElement;

        toolsRadio.checked = true;

        const event = {
          target: {
            name: "technologiesRadio",
            id: "toolsR",
          },
        };

        this.filterAndInsert(event);
      }
    }
  }

  onResize() {
    this.width = window.innerWidth;

    this.elements_fade_in = document.querySelectorAll(".hidden-fade-in");
    this.elements_slide_in_left = document.querySelectorAll(
      ".hidden-slide-in-left"
    );
    this.elements_slide_in_right = document.querySelectorAll(
      ".hidden-slide-in-right"
    );
    this.windowHeight = window.innerHeight;
  }

  checkPosition() {
    const url = document.location.href.toString().toLowerCase();

    this.technologies.forEach((tech) => {
      let name = tech.asset_name.toLowerCase().replace(this.whitespace, "-");
      if (url.includes(name) && !this.scrolled) {
        this.scrollIntoView(name);
        this.scrolled = true;
      }
    });

    if (this.elements_fade_in.length <= 0) {
      this.elements_fade_in = document.querySelectorAll(".hidden-fade-in");
    }
    for (let i = 0; i < this.elements_fade_in.length; i++) {
      let element = this.elements_fade_in[i];
      let positionFromTop = this.elements_fade_in[i].getBoundingClientRect()
        .top;

      if (positionFromTop - this.windowHeight <= 0) {
        element.classList.add("u-fade-in");
        element.classList.remove("hidden-fade-in");
      }
    }

    // Slide-in-Left
    for (let i = 0; i < this.elements_slide_in_left.length; i++) {
      let element = this.elements_slide_in_left[i];
      let positionFromTop = this.elements_slide_in_left[
        i
      ].getBoundingClientRect().top;

      if (positionFromTop - this.windowHeight <= 0) {
        element.classList.add("u-slide-in-left");
        element.classList.remove("hidden-slide-in-left");
      }
    }

    // Slide-in-Right
    for (let i = 0; i < this.elements_slide_in_right.length; i++) {
      let element = this.elements_slide_in_right[i];
      let positionFromTop = this.elements_slide_in_right[
        i
      ].getBoundingClientRect().top;

      if (positionFromTop - this.windowHeight <= 0) {
        element.classList.add("u-slide-in-right");
        element.classList.remove("hidden-slide-in-right");
      }
    }
  }
}
