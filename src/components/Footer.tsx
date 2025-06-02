import { Github, Linkedin, Twitter, Youtube } from 'lucide-react';
import { FaWhatsapp, FaWeixin } from 'react-icons/fa';
import { WeChatModal } from '@/components/ui/wechatmodal';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isWeChatModalOpen, setIsWeChatModalOpen] = useState(false);

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Nicolas Bamamou</h3>
            <p className="mb-4 max-w-md">
              一位热衷于解决复杂问题并在多个学科领域创造创新解决方案的工程师。
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/bamamounicolas" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Bamamou" className="hover:text-accent transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://x.com/NicolasBamamou" className="hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.youtube.com/@nicolasbamamou94" target="_blank" className="hover:text-accent transition-colors" aria-label="YouTube">
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

          <div>
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-accent transition-colors">首页</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">关于</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">项目</a></li>
              <li><a href="#skills" className="hover:text-accent transition-colors">技能</a></li>
              <li><a href="#education" className="hover:text-accent transition-colors">教育</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">联系</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">联系信息</h4>
            <ul className="space-y-2">
              <li>北京, 中国 </li>
              <li>bamamounicolas@gmail.com</li>
              <li>+86 188-107-991-28</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p>© {currentYear} Nicolas Bamamou 尼克 | 工程师作品集. 版权所有。</p>
        </div>
      </div>
      <WeChatModal 
        isOpen={isWeChatModalOpen} 
        onClose={() => setIsWeChatModalOpen(false)} 
      />
    </footer>
  );
};

export default Footer;
