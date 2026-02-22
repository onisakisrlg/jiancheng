import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const services = [
  'LGS工事（軽量下地）',
  'ボード工事',
  'クロス工事',
  '置き床工事',
  '断熱材施工',
  '店舗内装工事',
  'マンション改修工事',
  'オフィスリノベーション',
  '原状回復工事',
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              商業施設・オフィス・住宅<br />
              <span className="text-blue-600">内装工事一式対応</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              私たちのビジョンは、美しい空間を創造し、お客様の生活やビジネスをより豊かにすることにあります。
              軽量鉄骨下地から仕上げ工事、リノベーションまで、内装に関わる全ての工程をトータルでサポートいたします。
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6 border-b pb-4">対応工事内容</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://picsum.photos/seed/office_renovation/600/800"
                alt="Office Renovation"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://picsum.photos/seed/home_interior/600/800"
                alt="Home Interior"
                className="rounded-2xl shadow-lg w-full h-64 object-cover mt-12"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-10 right-10 w-full h-full bg-blue-100 rounded-3xl transform rotate-3"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
