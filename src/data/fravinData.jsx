import { Shield, Monitor, Wind, Truck, Printer, ShoppingCart, Activity } from 'lucide-react';

export const fravinServices = [
  {
    id: "security",
    title: "Security Services",
    icon: <Shield />,
    slug: "security-services",
    subServices: ["Manned Guarding", "CCTV Installation", "Access Control", "Alarm Systems"],
    desc: "Comprehensive protection for assets and people."
  },
  {
    id: "it",
    title: "Information Technology",
    icon: <Monitor />,
    slug: "it-solutions",
    subServices: ["Software Development", "Networking", "Cybersecurity", "IT Support"],
    desc: "Innovative digital infrastructure and support."
  },
  { id: "cleaning", title: "Cleaning Services", icon: <Wind />, slug: "cleaning-services" },
  { id: "logistics", title: "Logistics", icon: <Truck />, slug: "logistics-solutions" },
  { id: "printing", title: "Printing Services", icon: <Printer />, slug: "printing-services" },
  { id: "procurement", title: "Procurement", icon: <ShoppingCart />, slug: "procurement" },
  { id: "supply-chain", title: "Supply Chain", icon: <Activity />, slug: "supply-chain-management" },
];

export const industries = [
  "Government", "Corporate", "Healthcare", "Education", "Hospitality", "NGOs", "Manufacturing"
];