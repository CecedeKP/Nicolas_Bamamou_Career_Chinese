import { Battery, BatteryChargingIcon, FileText, FileSpreadsheet } from 'lucide-react';
import type { Project } from './types';

export const ress5kw: Project = {
  id: 10,
  title: 'Residential Battery Energy Storage (RBESS)',
  category: 'battery',  image: './images/BESS/Battery 5kW module.png',
  images: [
    '../images/BESS/Battery 5kW module.png',
    '../images/BESS/5kW module.png',
    '../images/BESS/5kW ESS .png',  
  ],
  description: '5kW residential battery system designed for optimal energy management with solar integration.',
  fullDescription: 'Developed an innovative residential energy storage solution that seamlessly integrates with solar power systems. The project focused on maximizing energy efficiency and providing reliable backup power while maintaining user-friendly operation.',
  tags: ['Battery Energy Storage System', 'Renewable Energy', ' IoT/Smart Home', 'Energy Management', 'Battery Pack Design', 'BMS', 'Smart Metering'],
  icon: Battery,
  startDate: 'May 2023',
  duration: '2 months',
  scope: 'Full System Design and Implementation of a 5.2kW',
  role: 'RBESS Engineer',
  responsibilities: [
    'Conducted feasibility studies for residential energy storage',
    'Analyzed energy consumption patterns',
    'Analyzed battery performance and lifespan',
    'Selected cell chemistry and design battery pack and management system',
    'Integrated with solar power systems and smart grid integration features',
    'Developed power management algorithms',
    'Created user interface for system monitoring and remote monitoring and reporting',
    'Conducted efficiency and compliance with safety standards'
  ],
  outcomes: [
    'Achieved 95% round-trip efficiency',
    'Reduced household grid dependency by 70%',
    'Implemented backup power for critical appliances',
    'Enhanced energy cost savings by 40%',
    'Improved energy security by 60%',
    'Implemented remote monitoring and reporting',
    'Ensured compliance with safety standards',
    'Enabled real-time energy usage analytics',
    'Successfully deployed in 15 residential installations'  
  ],
    links: [
  {
    title: 'Documentation',
    url: '../projects/BESS/ecomotech_5kw_doc.html',
    icon: FileText
  },
  {
    title: 'CAD Files',
    url: 'https://grabcad.com/library/14s2p-bess-1',
    icon: FileSpreadsheet
  },
],

  technologies: ['Autodesk Fusion 360 / SolidWorks', 'CAD/technical-Drawing', 'Battery Management System (BMS)', 'Fiber laser welding', 'Fast-Bidirectional Charging', 'Battery Pack Design', 'Energy Management System (EMS) / Smart Metering', 'IoT Sensors and Smart Home Integration', 'User Interface Design', 'Renewable Energy Integration and Grid Connection'],
};