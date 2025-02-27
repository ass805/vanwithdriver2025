import { Shield, Star, Clock } from "lucide-react";
import { useTranslation } from "@/utils/useTranslation";

export const WhyChooseUs = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: Shield,
      title: t('whyUs.drivers'),
      description: t('whyUs.driversDesc'),
    },
    {
      icon: Star,
      title: t('whyUs.quality'),
      description: t('whyUs.qualityDesc'),
    },
    {
      icon: Clock,
      title: t('whyUs.flexible'),
      description: t('whyUs.flexibleDesc'),
    },
  ];

  return (
    <section className="py-20 bg-[rgb(10,38,71)] dark:bg-[rgb(10,38,71)]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          {t('whyUs.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center space-y-4 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <reason.icon className="w-16 h-16 text-[rgb(10,38,71)] dark:text-[rgb(10,38,71)] bg-white rounded-full p-3 mx-auto" />
              <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
              <p className="text-gray-200">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};