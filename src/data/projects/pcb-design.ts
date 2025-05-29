import { Zap, FileText, FileSpreadsheet, Code } from 'lucide-react';
import type { Project } from './types';

export const pcbDesign: Project = {
  id: 1,
  title: 'Advanced PCB Design for ECU or VCU',
  category: 'electrical',
  image: './images/PCB design/ESP32-CAN.png',
  images: [
    '../images/PCB design/ESP32-CAN.png',
    '../images/PCB design/ESP32-CAN2.png',
    '../images/PCB design/ESP32-CAN3.png',
    '../images/PCB design/ECU.jpg',
  ],
  description: '多层PCB, 专为电动汽车ECU或VCU设计, 符合汽车行业标准, 集成了总线、串行和无线通信功能。',
  // description: 'Multi-layer PCB designed for low-power vehicle control unit (VCU) using an ESP32-WROOM-32D module. The design focuses on achieving ultra-low power consumption while maintaining reliable wireless communication capabilities.',
  fullDescription:'多层PCB设计, 专为低功耗车辆控制单元 (VCU) 采用ESP32-WROOM-32D模块。该设计重点在于实现超低功耗的同时, 确保可靠的无线通信功能。PCB集成了多种总线通信芯片, 包括用于CAN总线的MCP2515-TJA1050、用于I2C总线的MCP23017, 以及通过模块的HSPI和VSPI接口实现串行通信。',
  tags: ['PCB Design', 'ECU','Low Power','KiCAD','ESP32', 'RTOS', 'I2C', 'CAN Bus', 'SPI', 'ADC', 'UART', 'BLE', 'WiFi'],
  icon: Zap,
  startDate: 'March 2023',
  duration: '3 months',
  scope: '完整PCB设计, 原型制作及固件开发',
  technologies: ['KiCAD', 'Version Control', 'Embedded C', 'FreeRTOS', 'Interactive Html BOM'],
  role: 'Lead PCB Designer',
  responsibilities: [
  '使用KiCAD设计多层PCB',
  '集成ESP32-WROOM-32D模块以实现低功耗运行',
  '实现电源管理系统以延长电池寿命',
  '进行EMC/EMI分析与优化',
  '与制造商协调进行原型生产',
  '开发了用于通信协议 (I2C、SPI、CAN) 的固件',
  '创建了交互式HTML物料清单 (BOM) 以方便元器件采购',
  '进行了PCB设计的测试与验证',
  '记录了设计流程并编写了用户手册',
  '与跨职能团队协作进行系统集成'
  ],
  outcomes: [
    '实现60%的能耗降低',
    '成功生产并测试了10台原型机',
    '设计已获批量生产'
  ],
  links: [
    {
      title: '文件',
      url: '../projects/pcb-design/esp32_board_doc_html.html',
      icon: FileText
    },
    {
      title: '交互式物料清单',
      url: '../projects/pcb-design/ESP32_CAN ibom.html',
      icon: FileSpreadsheet
    },
    {
      title: '原理图',
      url: '../projects/pcb-design/ESP32-CAN-protected.pdf',
      icon: Code
    }
  ],
}
