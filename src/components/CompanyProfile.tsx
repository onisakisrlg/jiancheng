import { motion } from 'motion/react';
import { MapPin, Phone, Mail, User, Briefcase, FileText } from 'lucide-react';

export default function CompanyProfile() {
  return (
    <section id="company" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">会社概要</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
        >
          <dl className="divide-y divide-slate-100">
            <div className="px-6 py-6 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-slate-50 transition-colors">
              <dt className="text-sm font-medium text-slate-500 flex items-center">
                <Briefcase className="w-4 h-4 mr-2 text-blue-500" />
                社名
              </dt>
              <dd className="mt-1 text-sm text-slate-900 sm:mt-0 sm:col-span-2 font-semibold">建誠株式会社</dd>
            </div>
            <div className="px-6 py-6 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-slate-50 transition-colors">
              <dt className="text-sm font-medium text-slate-500 flex items-center">
                <User className="w-4 h-4 mr-2 text-blue-500" />
                代表者
              </dt>
              <dd className="mt-1 text-sm text-slate-900 sm:mt-0 sm:col-span-2">
                代表取締役　李 圣（リ セイ）
              </dd>
            </div>
            <div className="px-6 py-6 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-slate-50 transition-colors">
              <dt className="text-sm font-medium text-slate-500 flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                所在地
              </dt>
              <dd className="mt-1 text-sm text-slate-900 sm:mt-0 sm:col-span-2">
                〒231-0052<br />
                神奈川県横浜市中区英町3-3
              </dd>
            </div>
            <div className="px-6 py-6 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-slate-50 transition-colors">
              <dt className="text-sm font-medium text-slate-500 flex items-center">
                <FileText className="w-4 h-4 mr-2 text-blue-500" />
                建設業許可
              </dt>
              <dd className="mt-1 text-sm text-slate-900 sm:mt-0 sm:col-span-2">
                神奈川県知事 許可（般－7）第93757号
              </dd>
            </div>
            <div className="px-6 py-6 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-slate-50 transition-colors">
              <dt className="text-sm font-medium text-slate-500 flex items-center">
                <Phone className="w-4 h-4 mr-2 text-blue-500" />
                連絡先
              </dt>
              <dd className="mt-1 text-sm text-slate-900 sm:mt-0 sm:col-span-2">
                070-3984-3428
              </dd>
            </div>
            <div className="px-6 py-6 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-slate-50 transition-colors">
              <dt className="text-sm font-medium text-slate-500 flex items-center">
                <Mail className="w-4 h-4 mr-2 text-blue-500" />
                E-mail
              </dt>
              <dd className="mt-1 text-sm text-slate-900 sm:mt-0 sm:col-span-2">
                jianchenglisheng@gmail.com
              </dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden h-96"
        >
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://maps.google.com/maps?q=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E4%B8%AD%E5%8C%BA%E8%8B%B1%E7%94%BA3-3&t=&z=15&ie=UTF8&iwloc=&output=embed"
            title="Google Map"
            aria-label="建誠株式会社の所在地"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
