import { motion } from 'motion/react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">お問い合わせ</h2>
          <p className="text-slate-400 mb-12 leading-relaxed text-lg">
            お見積もり依頼、工事のご相談など、お気軽にお問い合わせください。<br />
            急な案件や工期のご相談も承っております。<br />
            お客様のベストパートナーとして、最適なプランをご提案いたします。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">お電話</h3>
              </div>
              <p className="text-slate-400 mb-4">お急ぎの方はお電話にてご連絡ください。</p>
              
              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-xs text-slate-500 mb-1">TEL（代表）</p>
                  <a href="tel:045-568-5232" className="text-2xl font-bold hover:text-blue-400 transition-colors block">
                    045-568-5232
                  </a>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">携帯（担当者）</p>
                  <a href="tel:070-3984-3428" className="text-2xl font-bold hover:text-blue-400 transition-colors block">
                    070-3984-3428
                  </a>
                </div>
              </div>

              <div className="flex items-start text-slate-500 text-sm border-t border-slate-700 pt-4">
                <Clock className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>
                  月〜金: 9:00 AM – 5:00 PM<br />
                  土日: 11:00 AM – 3:00 PM
                </span>
              </div>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">メール</h3>
              </div>
              <p className="text-slate-400 mb-2">24時間受付中。順次ご返信いたします。</p>
              <a href="mailto:jianchenglisheng@gmail.com" className="text-xl font-medium hover:text-blue-400 transition-colors break-all block">
                jianchenglisheng@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-12 bg-slate-800/30 p-8 rounded-2xl border border-slate-700 inline-block w-full">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center text-slate-300">
                <MapPin className="w-5 h-5 mr-3 text-blue-500" />
                <span>〒231-0052 神奈川県横浜市中区英町3-3</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-slate-700"></div>
              <div className="text-slate-400 text-sm">
                対応エリア：神奈川県・東京都・千葉県・埼玉県（一都三県）
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
