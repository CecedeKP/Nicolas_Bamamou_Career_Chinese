import { Battery } from 'lucide-react';
import type { Project } from './types';

export const batteryManagement: Project = {
  id: 2,
  title: 'Electric Vehicle Battery Management System',
  category: 'battery',  image: './images/BMS/BMS.jpg',
  images: [
    '../images/BMS/BMS.jpg',
    '../images/BMS/BMS2.jpg',
    '../images/BMS/BMS3.jpg',
    '../images/BMS/BMS1.jpg'
  ],
  description: '对电动汽车的40S（600A) 电池管理系统 (BMS) 进行测试与集成，重点关注实时监测、电池均衡、状态估计、通信协议、数据记录及高级保护功能。',
  fullDescription: '开发针对电动汽车的电池管理系统 (BMS) 全面测试流程，旨在最大化电池寿命的同时确保安全与可靠性。该系统包含实时监测、电池均衡、状态估计、通信协议、数据记录及高级保护功能。',
  tags: ['BMS', 'EV', 'PHEV', 'Battery', 'Safety', 'Testing', 'Integration', 'Electrical', 'Electronics', 'Electrochemical'],
  icon: Battery,
  startDate: 'January 2023',
  duration: '8 months',
  scope: 'Full BMS Development',
  role: 'Senior Battery Systems Engineer',
  responsibilities: [
    '实施了电池均衡算法',
    '开发了安全协议和保护功能',
    '进行了全面的测试和验证',
    '将BMS与车辆控制系统集成',
    '创建了数据记录和分析工具',
    '开发了通信协议 (CAN、RS485、UART)',
    '创建了系统监控用户界面',
    '进行了系统集成测试',
    '开发了线束和接口PCB设计',
    '创建了全面的文档'
  ],
  outcomes: [
   '电池续航时间延长25%',
   '系统可靠性达到99.9%',
   '充电时间缩短30%',
   '成功应用于5款电动汽车原型车'
  ],
  technologies: ['Altium Designer', 'Version Control', 'FreeRTOS-Embedded C/C++', 'BMS tester', 'Python', 'CAN-RS485-UART-I2C-SPI'],
};
