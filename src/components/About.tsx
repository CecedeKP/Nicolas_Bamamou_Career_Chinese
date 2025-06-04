import { Download, Calendar, MapPin, Mail, Linkedin, Github, Twitter, Youtube } from "lucide-react";
import { FaWhatsapp, FaWeixin } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import CV from '@/assets/documents/Niolas CV 012025 zh-Hans.pdf';
import { useState } from 'react';
import { WeChatModal } from '@/components/ui/wechatmodal';

const About = () => {
  const [isWeChatModalOpen, setIsWeChatModalOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'Niolas CV 012025 zh-Hans.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">关于我</h2>
        <p className="section-subtitle">我的职业旅程</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg">
              作为Evoke Motorcycles（北京）的高级电池工程师，我拥有扎根于高等学术培训的多学科专业知识——北京交通大学电气工程硕士和Gamal Abdel Nasser大学工业工程学士。专注于高压锂离子电池系统集成，我将研究与实际创新相结合，为电动汽车、电网存储和可再生能源开发解决方案。我的工作连接理论和可扩展性，确保固定和移动平台的可靠性。
            </p>
            <p className="text-lg">
              凭借4年以上的经验，我通过先进的电池设计（BMS算法、热管理、快速充电）、CAD工具（Fusion 360、Catia V5）、PCB开发（Altium、KiCad）和编程（C/C++、Python）解决硬件-软件-固件挑战。从工业工程开始，我通过MTBF/MTTR策略优化设备可靠性，然后转向电气工程，在那里我掌握了电路设计、微电网和能源存储（ESS/BESS）。我的专业知识现在涵盖嵌入式编程和网页开发，实现端到端能源解决方案。
            </p>
            
            <p className="text-lg">
              我在多元文化团队中茁壮成长，利用法语、英语、中文和西班牙语的流利程度，交付全球项目，如Tarform的10.5kW电池组、BYAHE的240kW电动巴士系统和ROAM的公共交通设计。我对创新、安全和可持续性的关注推动了对细节的一丝不苟——无论是设计高压电动汽车系统、物联网固件还是响应式网页界面。
            </p>
            
            <p className="text-lg">
              致力于可持续技术，我优先考虑持续学习以保持行业趋势的领先地位。探索我的作品集，了解推进清洁能源和协作工程的见解。
            </p>
            
            <div className="pt-4">
              <Button 
                className="bg-primary hover:bg-primary/90 flex items-center gap-2"
                onClick={handleDownload}
              >
                <Download size={18} /> 
                下载简历
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <h3 className="text-xl font-semibold mb-4">个人信息</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="text-primary min-w-5" size={20} />
                  <div>
                    <p className="font-medium">出生日期</p>
                    <p className="text-muted-foreground">1994年4月15日</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary min-w-5" size={20} />
                  <div>
                    <p className="font-medium">位置</p>
                    <p className="text-muted-foreground">北京大兴亦庄经济开发区</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="text-primary min-w-5" size={20} />
                  <div>
                    <p className="font-medium">电子邮件</p>
                    <p className="text-muted-foreground">bamamounicolas@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t flex items-center justify-between">
                <a href="https://linkedin.com/in/bamamounicolas" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a href="https://github.com/Bamamou" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a href="https://x.com/NicolasBamamou" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a href="https://www.youtube.com/@nicolasbamamou94" className="hover:text-accent transition-colors" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
                <a 
                href="https://wa.me/8618810799128" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="WhatsApp">
                  <FaWhatsapp size={20} />
                </a> 
                <a  href="#"  onClick={(e) => {e.preventDefault();setIsWeChatModalOpen(true);}} className="hover:text-accent transition-colors" aria-label="WeChat">
                  <FaWeixin size={20} />
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg shadow-md text-center card-hover">
                <h4 className="text-4xl font-bold text-primary mb-1">4+</h4>
                <p className="text-sm font-medium">年工作经验</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md text-center card-hover">
                <h4 className="text-4xl font-bold text-primary mb-1">50+</h4>
                <p className="text-sm font-medium">已完成项目</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md text-center card-hover">
                <h4 className="text-4xl font-bold text-primary mb-1">20+</h4>
                <p className="text-sm font-medium">满意客户</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md text-center card-hover">
                <h4 className="text-4xl font-bold text-primary mb-1">15+</h4>
                <p className="text-sm font-medium">获得奖项</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WeChatModal 
        isOpen={isWeChatModalOpen} 
        onClose={() => setIsWeChatModalOpen(false)} 
      />
    </section>
  );
};

export default About;
