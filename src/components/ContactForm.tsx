import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { useTranslation } from "@/utils/useTranslation";
import { format } from "date-fns";
import { lt } from "date-fns/locale";

export const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const currentDate = format(new Date(), "yyyy-MM-dd HH:mm", { locale: lt });
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/info@galiupavezet.lt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: "Nauja žinutė iš galiupavezet.lt",
          Vardas: formData.name,
          "El. paštas": formData.email,
          "Telefono numeris": formData.phone,
          Žinutė: formData.message,
          "Išsiųsta": currentDate,
        }),
      });

      if (response.ok) {
        toast.success(t('contact.success'));
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error(t('contact.error'));
      }
    } catch (error) {
      toast.error(t('contact.error'));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          placeholder={t('contact.name')}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="dark:bg-primary-light dark:text-white dark:border-gray-700"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder={t('contact.email')}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="dark:bg-primary-light dark:text-white dark:border-gray-700"
        />
      </div>
      <div>
        <Input
          type="tel"
          placeholder={t('contact.phone')}
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          className="dark:bg-primary-light dark:text-white dark:border-gray-700"
        />
      </div>
      <div>
        <Textarea
          placeholder={t('contact.message')}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          className="min-h-[120px] dark:bg-primary-light dark:text-white dark:border-gray-700"
        />
      </div>
      <Button 
        type="submit" 
        className="w-full text-white transition-colors hover:brightness-90"
        style={{ 
          backgroundColor: 'rgb(44, 116, 179)'
        }}
      >
        {t('contact.send')}
      </Button>
    </form>
  );
};