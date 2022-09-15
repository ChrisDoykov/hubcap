// Global list of success stories
// Used both by the list page as well as the story component itself

export const stories = [
  {
    title: "Networked Traffic Management",
    image: "../../assets/res/images/MicrosoftTeams-image.png",
    urlName: "success-story-sample",
    sections: [
      {
        sectionHeading: "Problem and solution",
        paragraphs: [
          "Many European countries have dense road networks and significant traffic problems. The flow of traffic on Europe’s roads is managed by a series of traffic management systems that are owned and controlled by various local and national authorities. A traffic management system (TMS) consists of a collection of digital control systems linked to physical devices installed along the roadside. These can be sensors that collect traffic data (such as cameras, radar detection systems, and induction loops) or actuators that are used as control measures by giving instructions to road users through signs and signals. Existing traffic management solutions are run centrally from regional control centres. While cooperation between various road authorities at a governance level has improved recently, technical barriers for collaborative and distributed traffic management systems over regional borders must still be removed.",
          "The TEMPO experiment aimed to tackle this problem by providing collaborative, distributed control architectures for traffic management systems that engage with each other in automated negotiation. The negotiations are targeted to find control measures that optimise traffic flow cross-border and for the traffic network as a whole. The  experiment  applied  an  existing  modelling  and  simulation  platform  called  Overture  for  TMSs.  Models  can  demonstrate the correctness and benefits of designs prior to costly implementation. Traffic simulations produce a large amount of numerical data that need to be interpreted and presented in an understandable way to non-IT experts. The existing Overture technology has been extended with 2D/3D visualisation to illustrate the effect of the automated negotiations on the traffic flow.",
        ],
      },
      {
        sectionHeading: "The role of the DIH",
        paragraphs: [
          "The DIH at Newcastle University brought together the partners and facilitated technology transfer of Overture from Aarhus University to West IT through training, guidance and support. Apart from upskilling West IT on Overture, the DIH helped West IT reach potential customers by engaging with road network stakeholders from across Europe from the outset and throughout the experiment.",
        ],
      },
      {
        sectionHeading: "Impact",
        paragraphs: [
          "West  IT  has  increased  its  competitive  capabilities  in  the  smart  mobility  area  and  expects  additional  revenue  of 200k€ in the first year, leading to an increase of 1.5M€ over five years. The digital skills obtained by West IT employees will benefit the company in current and future projects, both in traffic management and other domains. The results can also be of benefit to organisations such as stadiums, harbours and airports not commonly associated with traffic management, who increasingly take the initiative in guiding large volumes of traffic themselves.",
          "The results will have significant societal impact if adopted by national, urban and commercial road authorities, greatly improving road network performance and reducing pollution.",
        ],
      },
    ],
    info: {
      endUsers: [
        {
          name: "End User",
          website: "https://www.hubcap.eu",
        },
        {
          name: "End User",
          website: "https://www.hubcap.eu",
        },
      ],
      techProviders: [
        {
          name: "Technology Provider",
          website: "https://www.hubcap.eu",
        },
        {
          name: "Technology Provider",
          website: "https://www.hubcap.eu",
        },
      ],
      dih: { name: "Digital Innovation Hub", website: "https://www.hubcap.eu" },
    },
  },
];
