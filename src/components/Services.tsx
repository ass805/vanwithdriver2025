import { Bus, Users, Plane } from "lucide-react";
import { useTranslation } from "@/utils/useTranslation";

export const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Plane,
      title: t('services.airport'),
      description: t('services.airportDesc'),
    },
    {
      icon: Bus,
      title: t('services.minibus'),
      description: t('services.minibusDesc'),
    },
    {
      icon: Users,
      title: t('services.private'),
      description: t('services.privateDesc'),
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[rgb(34,31,38)]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white text-center mb-12">
          {t('services.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-primary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <service.icon className="w-12 h-12 text-accent dark:text-white mb-4" />
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};