import { useState, useEffect } from 'react';
import { Send, MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showScheduleDialog, setShowScheduleDialog] = useState(false);
  const [showScheduleSuccessDialog, setShowScheduleSuccessDialog] = useState(false);
  const [scheduleData, setScheduleData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    topic: '',
  });

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || 
          !import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 
          !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
        throw new Error('EmailJS configuration is missing');
      }

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'bamamounicolas@gmail.com',
        }
      );

      if (response.status !== 200) {
        throw new Error('Failed to send email');
      }

      setShowSuccessDialog(true); // Show the dialog instead of toast

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Email error:', error);
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "Please try again later or contact directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScheduleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScheduleData({ ...scheduleData, [e.target.name]: e.target.value });
  };

  const handleScheduleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: scheduleData.name,
          from_email: scheduleData.email,
          subject: 'Call Schedule Request',
          message: `
            Call Schedule Request:
            Name: ${scheduleData.name}
            Email: ${scheduleData.email}
            Date: ${scheduleData.date}
            Time: ${scheduleData.time}
            Topic: ${scheduleData.topic}
          `,
          to_email: 'bamamounicolas@gmail.com',
        }
      );

      if (response.status !== 200) {
        throw new Error('Failed to send schedule request');
      }

      setShowScheduleDialog(false);
      setShowScheduleSuccessDialog(true); // Show success dialog instead of toast

      setScheduleData({
        name: '',
        email: '',
        date: '',
        time: '',
        topic: '',
      });
    } catch (error) {
      console.error('Scheduling error:', error);
      toast({
        title: "Error scheduling call",
        description: "Please try again or contact directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">联系我</h2>
        <p className="section-subtitle">让我们讨论您的项目或职业发展机会</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-medium">
                    姓名
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Nicolas Bamamou"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="font-medium">
                    电子邮件
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="bamamounicolas@gmail.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="font-medium">
                  主题
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="How can I help you?"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="font-medium">
                  消息
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? '发送中...' : '发送信息'} <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-6">联系方式</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">地址/Location</h4>
                    <p className="text-muted-foreground">北京市大兴经济技术开发区亦庄经济技术开发区</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">邮箱l</h4>
                    <p className="text-muted-foreground">bamamounicolas@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">电话</h4>
                    <p className="text-muted-foreground">+86 (188) 107-991-28</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">工作时间</h4>
                    <p className="text-muted-foreground">周一 ~ 周五: 早上九点 - 晚上七点</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-accent/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">准备好一起合作了吗? ~ 🤝 Ready to Work Together?</h3>
              <p className="mb-4">让我们讨论一下我如何为您的下一个工程项目做出贡献吧.</p>
              <Button 
                className="bg-accent hover:bg-accent/90 w-full"
                onClick={() => setShowScheduleDialog(true)}
              >
                <Calendar className="mr-2 h-4 w-4" /> 预约电话
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <DialogTitle className="text-center text-xl font-semibold">
              信息已成功发送！
            </DialogTitle>
            <DialogDescription className="text-center">
              <p className="mt-2">
                感谢您伸出援手, {formData.name.split(' ')[0]}! 
              </p>
              <p className="mt-2">
                感谢您的关注，我会尽快给您回复。
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                您可以在 24-48 小时内收到回复。
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Schedule Dialog */}
      <Dialog open={showScheduleDialog} onOpenChange={setShowScheduleDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>预约电话</DialogTitle>
            <DialogDescription>
              请选择最适合您的日期和时间。
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="schedule-name" className="font-medium">姓名</label>
              <Input
                id="schedule-name"
                name="name"
                placeholder="Your name"
                value={scheduleData.name}
                onChange={handleScheduleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="schedule-email" className="font-medium">电子邮件</label>
              <Input
                id="schedule-email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={scheduleData.email}
                onChange={handleScheduleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="schedule-date" className="font-medium">首选日期</label>
              <Input
                id="schedule-date"
                name="date"
                type="date"
                min={new Date().toISOString().split('T')[0]}
                value={scheduleData.date}
                onChange={handleScheduleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="schedule-time" className="font-medium">首选时间</label>
              <Input
                id="schedule-time"
                name="time"
                type="time"
                value={scheduleData.time}
                onChange={handleScheduleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="schedule-topic" className="font-medium">讨论主题</label>
              <Input
                id="schedule-topic"
                name="topic"
                placeholder="Brief description of what you'd like to discuss"
                value={scheduleData.topic}
                onChange={handleScheduleChange}
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={() => setShowScheduleDialog(false)}
              variant="outline"
            >
              取消
            </Button>
            <Button
              onClick={handleScheduleSubmit}
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90"
            >
              {isSubmitting ? '日程安排中...' : '预约电话'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Schedule Success Dialog */}
      <Dialog 
        open={showScheduleSuccessDialog} 
        onOpenChange={setShowScheduleSuccessDialog}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
              <Calendar className="h-8 w-8 text-green-600" />
            </div>
            <DialogTitle className="text-center text-xl font-semibold">
              呼叫已成功安排
            </DialogTitle>
            <DialogDescription className="text-center mt-4">
              <p className="text-lg mb-4">
                感谢您有兴趣与我们联系, {scheduleData.name.split(' ')[0]}!
              </p>
              <div className="bg-secondary/50 p-4 rounded-lg mb-4">
                <p className="font-medium">您要求的时间:</p>
                <p className="text-primary">
                  {scheduleData.date}
                </p>
                <p className="text-primary">
                  {scheduleData.time}
                </p>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                我将在 24 小时内审核您的请求并发送日历邀请。
              </p>
              <p className="text-sm text-muted-foreground">
                如果您需要做任何更改，请随时通过电子邮件联系我们。
              </p>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4">
            <Button 
              onClick={() => setShowScheduleSuccessDialog(false)}
              className="w-full bg-primary hover:bg-primary/90"
            >
              关闭
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Contact;