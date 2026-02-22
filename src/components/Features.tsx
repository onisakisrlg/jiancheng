import { motion } from 'motion/react';
import { Users, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: <Award className="w-12 h-12 text-blue-600" />,
    title: '豊富な実績と経験',
    description: '6年以上の経験と多数の施工実績を持ち、商業施設から住宅まで幅広いニーズに対応します。',
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: '充実した人員体制',
    description: '多数の人員を擁しており、大規模な案件や複数の現場もスムーズに進行させることが可能です。',
  },
  {
    icon: <Clock className="w-12 h-12 text-blue-600" />,
    title: '迅速・柔軟な対応',
    description: '急なご依頼や厳しい工期のご相談にも、柔軟かつ迅速に対応できる体制を整えています。',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">建誠株式会社の強み</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            お客様の信頼に応えるため、私たちは技術とサービスの向上に努めています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-slate-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow border border-slate-100"
            >
              <div className="flex justify-center mb-6 bg-blue-50 w-20 h-20 mx-auto rounded-full items-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
