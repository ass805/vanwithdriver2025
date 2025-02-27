import { useTranslation } from "@/utils/useTranslation";

export const AboutUs = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-[rgb(10,38,71)] dark:bg-[rgb(10,38,71)] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold">{t('about.title')}</h2>
          <p className="text-lg leading-relaxed">
            {t('about.description')}
          </p>
        </div>
      </div>
    </section>
  );
};