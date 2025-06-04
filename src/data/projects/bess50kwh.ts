import { Battery, BatteryChargingIcon, FileText, FileSpreadsheet } from 'lucide-react';
import type { Project } from './types';

export const bess50kwh: Project = {
  id: 12,
  title: 'A high-performance, scalable 50kW commercial/industrial BESS solution',
  category: 'battery',  image: './images/BESS/50kWh v16.png',
  images: [
    '../images/BESS/50kWh v15.png',
    '../images/BESS/50kWh v14.png',
    '../images/BESS/50kWh v13.png',  
    '../images/BESS/50kWh v11.png',  
    '../images/BESS/50kWh (v11~recovered)2.png', 
  ],
  description: '高性能、可扩展的储能解决方案，专为商业/工业备用电源、可再生能源集成、削峰填谷和电网稳定而设计',
  fullDescription: 'We built a high-performance, modular solution designed to deliver reliable, safe, and efficient energy storage for a wide range of commercial and industrial applications. Engineered with advanced lithium-ion technology, intelligent battery management, and robust thermal control, this system ensures maximum uptime and performance under demanding conditions. Tailored for applications such as backup power, renewable energy integration, peak shaving, and grid stabilization, the BESS supports seamless operation in both on-grid and off-grid environments. Its scalable architecture allows easy capacity expansion to meet evolving energy needs—from hundreds of kilowatt-hours to multi-megawatt deployments.',
  tags: ['Battery Energy Storage System', 'Renewable Energy', ' IoT/Smart Home', 'Energy Management', 'Battery Pack Design', 'BMS', 'Smart Metering'],
  icon: Battery,
  startDate: 'June 2024',
  duration: '5 months',
  scope: 'Full System Design and Implementation of a 51.2kWh',
  role: 'commercial/industrial BESS Engineer',
  responsibilities: [
    'Conducted feasibility studies for power requirement and battery pack design',
    'Analyzed cell performance and lifespan',
    'Selected cell chemistry and design battery pack and management system',
    'System design and integration of battery pack with the PCS',
    'Designed and developed communication protocols for the (BMS), PCS, and the cooling system',
    'Developed power management algorithms',
    'Created user interface for system monitoring and remote monitoring and reporting',
    'Conducted efficiency and compliance with safety standards',
  ],
  outcomes: [
    'Implemented backup power for grid networks and critical loads',
    'Improved energy security by 60% and with peak shaving, and grid stabilization',
    'Optimized round-trip efficiency exceeding 90%',
    'Achieved 99.9% uptime with robust system design and testing',
    'Enabled real-time energy usage analytics',
    'Enhenced grid stability with frequency regulation and voltage stabilization',
    'Improved battery lifespan by 30% through advanced thermal management and BMS',
    'Enabled remote monitoring and control via mobile app',
    'Successfully achieved demand response wiht 90% thanks to Smart Integration of PV, wind, and other distributed energy resources (DERs)',
   
  ],
    links: [
  {
    title: 'Documentation',
    url: '../projects/BESS/bess_50kwh_documentation.html',
    icon: FileText
  },
  {
    title: 'CAD Files',
    url: '#',
    icon: FileSpreadsheet
  },
],

  technologies: ['Autodesk Fusion 360 / SolidWorks', 'CAD/technical-Drawing', 'Battery Management System (BMS)', 'Fiber laser welding', 'PCS integration', 'Battery Pack Design', 'IoT Sensors and Smart power metering system', 'Thermal Management Systems'],
};