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
        'In Information Security there are a lot of tools for various operations and the end-user needs to select two or more tools based on his/her requirements. Having this in mind Cyberarch Consulting came up with an idea of creating a single product that can serve as an all-purpose tool.\n\n RCADE stands for Re-engineered Cyber Arch Defence Expert developed which is developed as an "All in one AI Security Solution". It integrates Vulnerability Assessment, Log Analysis, Malware Analysis, Security Monitoring, OSINT Gathering, Hybrid Pentest Request. etc as one product. Moreover based on the requirement lot more security-related modules will be added in future updates. Few modules even though they seem like a single module, they have two or more different toolset built within. for example, the Vulnerability Management module will have a Network/Infrastructure Scanner and Web Application Scanner builtin. Same way, Hybrid Pentest Request Contains Web App Pentest Request, Mobile App Pentest Request, Source Code Audit Request, etc. \n\nThis tool is available as a Virtual Machine to be used internally within the User\'s environment. Moreover, the tool is available in the cloud such as AWS, Azure, Alibaba, etc. The tool is built in such a way that even a novice user can easily use it efficiently without prior training/knowledge.',
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
      modelling_lang_tool: "Python",
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
      modelling_lang_tool: "C#",
      license_info_name: "Pay-as-you-go",
      email: "office@astiautomation.ro",
    },
    {
      type: "tool",
      logo: "../../assets/res/logos/into_cps_example_logo.png",
      asset_name: "INTO-CPS",
      company_name: "INTO-CPS",
      url: "https://into-cps.org/",
      description:
        'An integrated "tool chain" for comprehensive Model-Based Design (MBD) of Cyber-Physical Systems (CPSs). The tool chain supports the multidisciplinary, collaborative modelling of CPSs from requirements, through design, down to realisation in hardware and software. This enables traceability at all stages of the development. The IP from this project has been transferred to the INTO-CPS Association after the completion of the project.',
      showMore: false, // Always leave at false
      supported_platforms: ["Windows", "Linux", "MacOS"],
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
        "SimulStore is an Industrial AppStore platform developed by SIMULARGE. In Simulstore, you can buy and/or develop Digital Twins for your business leveraging Simularge's experience both in the Industry and Academia.",
      showMore: false, // Always leave at false
      supported_platforms: ["Windows", "Linux", "MacOS"],
      modelling_notations: ["Python", "Fortran"],
      license_info_name: "Proprietary",
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
      supported_platforms: ["Windows", "Linux", "MacOS"],
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
      supported_platforms: ["Windows", "Linux", "MacOS"],
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
      logo:
        "http://www.schlegel-simulation.de/logos/Logo_Schlegel-Simulation.png",
      asset_name: "WebModelica",
      company_name: "Schlegel Simulation",
      url: "http://www.schlegel-simulation.de",
      description:
        "WebModelica is a lightweight client - server tool for modelling and simulation of the dynamics of mechatronic systems.",
      showMore: false, // Always leave at false
      supported_platforms: ["Windows", "Linux", "MacOS"],
      modelling_notations: ["Modelica"],
      domains: ["Mechatronic systems"],
      license_info_name: "SaaS, On-Premise",
      email: "info@schlegel-simulation.de",
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
      supported_platforms: ["Windows", "Linux", "MacOS"],
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
  ];

  showingAll = true;
  rearranged = false;

  ngOnInit(): void {
    document.title = "Technologies | HUBCAP";
    document.getElementById("hero-title").textContent = "Technologies";

    // for (let tech of this.technologies) {
    //   this.alphabet[tech.asset_name.toLowerCase().charAt(0)].push(tech);
    // }

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

  scrollIntoView(id) {
    document.getElementById(id).scrollIntoView();
  }
}
