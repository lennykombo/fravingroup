/*import { 
  Shield, Video, Bell, Users, Search, MapPin, 
  Dog, Lock, Eye, ClipboardCheck, Plane, Handshake, 
  UserCheck, Truck, AlertTriangle, Hammer,
  Timer, Navigation, ShieldAlert, Map as MapIcon, Radio, AlertCircle,
  Cpu, Smartphone, Layers, Globe, Activity, Monitor, Target
} from 'lucide-react';

export const securityServices = [
  {
    id: "premise-guarding",
    title: "Manned Guarding & Premise Security",
    icon: <Shield />,
    tagline: "Vigilance Beyond Boundaries",
    description: "Our manned guarding solutions integrate elite personnel with tactical training to provide a proactive shield for your assets and people.",
    pillars: [
      { title: "Static Guarding", desc: "Permanent post security for gates and reception.", icon: <Lock size={20}/> },
      { title: "Tactical Patrolling", desc: "Randomized, high-visibility perimeter patrols.", icon: <Activity size={20}/> }
    ],
    sectors: [
      { name: "Retail & Malls", detail: "Loss prevention and crowd management." },
      { name: "Corporate Hubs", detail: "Professional access and visitor management." }
    ]
  },
  {
    id: "security-equipment",
    title: "Security Technology & Systems",
    icon: <Video />,
    tagline: "Intelligence in Every Pixel",
    description: "We build integrated surveillance ecosystems from AI-driven license plate recognition to thermal intrusion detection.",
    techFeatures: [
      { title: "AI Analytics", desc: "Face and behavior recognition.", icon: <Cpu size={20}/> },
      { title: "Remote Access", desc: "Monitor via mobile device.", icon: <Smartphone size={20}/> }
    ],
    sections: [
      { header: "CCTV SYSTEMS", items: ["Thermal/Infrared Cameras", "Dark Fighter Tech", "PTZ Zoom Cameras", "ANPR/LPR Cameras", "HD Dome Cameras"] },
      { header: "ACCESS CONTROL", items: ["Biometric Systems", "X-Ray Baggage Scanners", "Automated Boom Gates", "Video Intercoms"] }
    ]
  },
  {
    id: "alarm-response",
    title: "Alarm Response & QRF Unit",
    icon: <Bell />,
    tagline: "Response Measured in Seconds",
    isEmergency: true,
    description: "Fravin's QRF is your first line of tactical defense, fully compliant with the Private Security Act.",
    responseMetrics: [
      { label: "Dispatch", value: "< 45s", detail: "Trigger to unit movement." },
      { label: "Patrol Density", value: "24/7", detail: "Constant urban presence." }
    ],
    qrfFeatures: [
      { title: "Police Liaison", desc: "Direct links to law enforcement.", icon: <Radio size={24}/> },
      { title: "Universal Response", desc: "We respond even to non-clients.", icon: <MapIcon size={24}/> }
    ],
    sections: [
      { header: "TACTICAL CAPABILITIES", items: ["Armed/Unarmed Backup", "GPS Tracked Vehicles", "Incident Reporting", "Public Order Support"] }
    ]
  },
  {
    id: "k9-services",
    title: "K9 Patrol & Detection Units",
    icon: <Dog />,
    tagline: "Unmatched Instincts, Absolute Control",
    description: "Our specially trained dogs and handlers provide a biological advantage and psychological deterrent technology cannot replicate.",
    k9Highlights: [
      { title: "Explosive Detection", desc: "EDD units for scent verification.", icon: <ShieldAlert size={20}/> },
      { title: "Narcotics Search", desc: "NDD units for warehouse sweeps.", icon: <Search size={20}/> },
      { title: "Elite Handlers", desc: "Tactical K9 management certified.", icon: <UserCheck size={20}/> }
    ],
    sections: [
      { header: "UNIT CAPABILITIES", items: ["Night-Watch Patrolling", "Crowd Control for Events", "Explosive Sweeps", "Cargo Verification"] }
    ]
  }
];*/











import { 
  Shield, Video, Bell, Users, Search, MapPin, 
  Dog, Lock, Eye, ClipboardCheck, Plane, Handshake, 
  UserCheck, Truck, AlertTriangle, Hammer,
  Timer, Navigation, ShieldAlert, Map as MapIcon, Radio, AlertCircle,
  Cpu, Smartphone, Layers, Globe, Activity, Monitor, Target
} from 'lucide-react';

export const securityServices = [
  {
    id: "premise-guarding",
    title: "Manned Guarding & Premise Security",
    icon: <Shield />,
    tagline: "Vigilance Beyond Boundaries",
    description: "Beyond simple presence, our manned guarding solutions integrate elite personnel with tactical training to provide a proactive shield for your assets, people, and reputation.",
    
    // Detailed pillars for the "Cool Design"
    pillars: [
      {
        title: "Static Guarding",
        desc: "Permanent post security for gates, reception desks, and high-value internal zones.",
        icon: <Lock size={20}/>
      },
      {
        title: "Tactical Patrolling",
        desc: "Randomized, high-visibility patrols designed to identify and neutralize vulnerabilities before they are exploited.",
        icon: <Activity size={20}/>
      },
      {
        title: "Concierge Security",
        desc: "A blend of professional front-of-house customer service and sharp-eyed security for corporate offices.",
        icon: <Users size={20}/>
      },
      {
        title: "Control Room Ops",
        desc: "Integrated manning of CCTV and alarm hubs for real-time intelligence and rapid response coordination.",
        icon: <Monitor size={20}/>
      }
    ],
    
    // Sector-specific logic
    sectors: [
      { name: "Retail & Malls", detail: "Loss prevention and crowd management in high-traffic environments." },
      { name: "Corporate Hubs", detail: "Professional access control and visitor management for business centers." },
      { name: "Industrial & Warehousing", detail: "Inventory protection and perimeter security for logistics hubs." },
      { name: "High-End Residential", detail: "Discreet yet firm security for apartments and gated communities." }
    ]
  },
  {
    id: "security-equipment",
    title: "Security Technology & Systems Integration",
    icon: <Video />,
    tagline: "Intelligence in Every Pixel",
    description: "We don't just install cameras; we build integrated surveillance ecosystems. From AI-driven license plate recognition to thermal intrusion detection, we provide total visual dominance.",
    
    // Technical Highlights
    techFeatures: [
      { title: "AI Analytics", desc: "Face recognition and behavior analysis.", icon: <Cpu size={20}/> },
      { title: "Remote Access", desc: "Monitor your premises from any mobile device.", icon: <Smartphone size={20}/> },
      { title: "Hybrid Systems", desc: "Seamlessly blending IP and Analog hardware.", icon: <Layers size={20}/> },
      { title: "Cloud Storage", desc: "Secure, off-site footage backup protocols.", icon: <Globe size={20}/> },
    ],

    // The Deep Portfolio Data
    sections: [
      {
        header: "SURVEILLANCE SYSTEMS (CCTV)",
        items: [
          "Thermal & Infrared (Heat Signature) Detection",
          "Dark Fighter Tech (Ultra Low-Light Performance)",
          "PTZ Pan-Tilt-Zoom (360° Control)",
          "ANPR / LPR (Automatic License Plate Recognition)",
          "4K High Definition Dome & Bullet Cameras",
          "Discreet & Network-Based IP Solutions",
          "Varifocal & C-Mount Specialist Optics"
        ]
      },
      {
        header: "INTRUSION ALARMS",
        items: [
          "Electric Current Perimeter Security",
          "Dual-Path Monitored Alarm Systems",
          "Wireless Smart Home Security Hubs",
          "Vibration & Glass-Break Sensors",
          "24/7 Rapid Response Integrated Units"
        ]
      },
      {
        header: "ACCESS & SCREENING",
        items: [
          "Biometric & RFID Card Entry Systems",
          "X-Ray Baggage & Metal Detection Scanners",
          "Automated Boom Gates & Parking Systems",
          "Walk-through Security Portals",
          "Video Intercoms & Remote Gate Control"
        ]
      },
      {
        header: "FIRE & HAZARD SAFETY",
        items: [
          "Intelligent Smoke & Heat Detectors",
          "Fire Extinguisher Supply & Maintenance",
          "Industrial Fire Blankets",
          "Automated Suppression Systems"
        ]
      }
    ]
  },
  {
    id: "alarm-response",
    title: "Alarm Response & Quick Reaction Force",
    icon: <Bell />,
    tagline: "Response Measured in Seconds",
    description: "When every second counts, Fravin's QRF is your first line of tactical defense. Fully compliant with the Private Security Act, we provide elite intervention for both clients and non-clients alike.",
    
    // Response Timeline/Metrics
    responseMetrics: [
      { label: "Dispatch Time", value: "< 45s", detail: "From trigger to unit movement." },
      { label: "Patrol Density", value: "24/7", detail: "Constant urban/suburban presence." },
      { label: "Personnel", value: "QRF", detail: "Police-coordinated tactical units." },
    ],

    // Tactical Features
    qrfFeatures: [
      { 
        title: "Private Security Act Compliant", 
        desc: "Operating strictly under the regulatory frameworks of Kenya's security laws for your legal protection.",
        icon: <ShieldAlert size={24}/> 
      },
      { 
        title: "Police Liaison Protocols", 
        desc: "Direct radio links to local law enforcement for coordinated halts on terror or crime-motivated threats.",
        icon: <Radio size={24}/> 
      },
      { 
        title: "Universal Protection", 
        desc: "A unique service model where we respond to emergencies even for individuals who are not yet active clients.",
        icon: <Map size={24}/> 
      }
    ],

    // The "Action" Loop
    sections: [
      {
        header: "TACTICAL CAPABILITIES",
        items: [
          "24-Hour Armed/Unarmed Backup Support",
          "GPS-Tracked Rapid Response Vehicles",
          "Advanced Intrusion Verification Technology",
          "Real-time Incident Reporting & Documentation",
          "Crowd & Public Order Management Support",
          "High-Risk Area Escort Services"
        ]
      }
    ]
  },
  {
    id: "guard-hire",
    title: "4. GUARD HIRE",
    icon: <Users />,
    description: "Security guards for short-term meetings and events.",
    fullContent: "We provide security guards for short meetings, burial services, sports events, seminars, and conferences. You are able to hire our security guards that are on standby for duty for a short time and charged on hourly rates as per the timing of your event."
  },
  {
    id: "crowd-management",
    title: "5. CROWD MANAGEMENT",
    icon: <Users />,
    description: "Specialized management for high-capacity events.",
    fullContent: "Ideal for Church events, Music concerts, Rallies, and Political Campaigns. Fravin Group provide portable walk-through detectors, sniffer dogs, and CCTV live feed monitoring of events done in open spaces. Our well-trained personnel handle the pressure of hyped crowds to ensure your event is successful and peaceful."
  },
  {
    id: "cctv-analysis",
    title: "6. CCTV FOOTAGE ANALYSIS",
    icon: <Eye />,
    description: "Expert analysis for crime-motivated footage.",
    fullContent: "Fravin Group security services is well equipped with trained CCTV footage experts who help you analyze crime-motivated footage or any feed. Our experts are well trained in areas of criminology and CCTV technology."
  },
  {
    id: "mobile-property-tracking",
    title: "7. MOBILE PROPERTY TRACKING SERVICES",
    icon: <MapPin />,
    description: "Safeguarding your mobile and non-mobile assets.",
    fullContent: "We go above and beyond to ensure your assets are easily tracked, enabling swift recovery in the event of theft. We track vehicles of all types, laptops, television screens, and a wide range of other valuable properties."
  },
  {
    id: "k9-services",
    title: "K9 Patrol & Detection Services",
    icon: <Dog />,
    tagline: "Unmatched Instincts, Absolute Control",
    description: "Fravin's K9 units provide a biological advantage that technology cannot replicate. Our specially trained dogs and handlers deliver superior scent detection and a psychological deterrent that secures high-risk environments.",
    
    // K9 Specific Highlights
    k9Highlights: [
      { title: "EDD Units", desc: "Explosive Detection Dogs trained to identify a wide range of commercial and military-grade explosives.", icon: <ShieldAlert size={20}/> },
      { title: "NDD Units", desc: "Narcotics Detection Dogs for search operations in warehouses, offices, and transport hubs.", icon: <Search size={20}/> },
      { title: "Guard & Patrol", desc: "Aggression-controlled patrol dogs for perimeter defense and night-watch security.", icon: <Dog size={20}/> },
      { title: "Elite Handlers", desc: "Highly disciplined handlers certified in tactical K9 management and public safety.", icon: <UserCheck size={20}/> },
    ],

    // Specialized Capabilities
    sections: [
      {
        header: "UNIT CAPABILITIES",
        items: [
          "Night-Watch Perimeter Patrolling",
          "Crowd Control for Public Events & Rallies",
          "Explosive & Narcotics Sweeps (EDD/NDD)",
          "Biological Intrusion Deterrence",
          "Cargo & Warehouse Scent Verification",
          "Certified Tactical Handler Deployment"
        ]
      }
    ]
  },
  {
    id: "construction-site-protection",
    title: "9. CONSTRUCTION SITE PROTECTION",
    icon: <Hammer />,
    description: "Dedicated coverage for construction infrastructure.",
    fullContent: "Dedicated security coverage for construction sites to safeguard equipment, materials, and personnel from theft, vandalism, and unauthorized access, minimizing project delays and losses."
  },
  {
    id: "strong-room-solutions",
    title: "10. STRONG ROOM SOLUTIONS",
    icon: <Lock />,
    description: "Complete strong room solutions from bunkers to panic rooms.",
    fullContent: "We supply and sell strong room products, including vaults of various classes and types. We design and implement complete solutions—from bunkers to panic rooms—for both residential and commercial properties. Our solutions are structured to protect high-value assets while remaining cost-effective."
  },
  {
    id: "private-investigations",
    title: "11. PRIVATE INVESTIGATIONS",
    icon: <Search />,
    description: "Discreet and professional inquiry services.",
    fullContent: "Services covering background checks, surveillance, fraud detection, and fact-finding for individuals and organizations, conducted with absolute confidentiality and integrity."
  },
  {
    id: "stock-checking",
    title: "12. STOCK CHECKING AND TAKING",
    icon: <ClipboardCheck />,
    description: "Accurate inventory audits and verification services.",
    fullContent: "We help businesses monitor stock levels, prevent losses, detect discrepancies, and maintain reliable records for an effective supply chain."
  },
  {
    id: "airport-seaport-security",
    title: "13. AIRPORT / SEAPORT SECURITY",
    icon: <Plane />,
    description: "Specialized personnel and protocols for aviation and maritime.",
    fullContent: "Ensuring cargo, passenger, and facility safety in compliance with relevant regulatory and international security standards."
  },
  {
    id: "police-support",
    title: "14. POLICE SUPPORT SERVICES",
    icon: <Handshake />,
    description: "Coordinated assistance that complements law enforcement.",
    fullContent: "Liaison services including crowd control, escort duties, and support during investigations or public order management."
  },
  {
    id: "close-protection",
    title: "15. CLOSE PROTECTION SERVICES",
    icon: <UserCheck />,
    description: "Well-trained and equipped Close Protection Officers (CPOs).",
    fullContent: "To be deployed with NGOs or any organization that works in difficult, terror-prone areas. Our team will be with you every step of the way, even becoming your personal interpreter at no fee."
  },
  {
    id: "cash-in-transit",
    title: "16. CASH IN TRANSIT",
    icon: <Truck />,
    description: "Trustable, private, and reliable transit for cash.",
    fullContent: "We transit cash for any individual or organization with armored vehicles and well-trained staff who value honesty, integrity, and the privacy of our esteemed clients."
  },
  {
    id: "risk-assessment",
    title: "17. RISK ASSESSMENT, MITIGATION AND MANAGEMENT",
    icon: <AlertTriangle />,
    description: "Identify potential threats before they become costly problems.",
    fullContent: "Our team conducts thorough evaluations of your premises, operations, and existing measures to pinpoint vulnerabilities across physical, operational, and environmental risk factors. We develop tailored mitigation strategies and practical action plans to strengthen your overall security posture."
  }
];