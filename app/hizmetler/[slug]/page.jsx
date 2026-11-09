import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, Phone } from 'lucide-react'

const details = {
  'boya-uygulamalari': ['Boya Uygulamaları', 'Renk seçin, farkı görün.', 'Doğru renk ve yüzey hazırlığıyla yaşam alanlarınıza temiz, uzun ömürlü ve profesyonel bir görünüm kazandırıyoruz.', ['Keşif ve renk danışmanlığı', 'Yüzey hazırlığı ve astar uygulaması', 'Temiz ve özenli teslim']],
  'seramik-doseme': ['Seramik Döşeme', 'Zeminlerde kusursuz işçilik.', 'Banyo, mutfak ve yaşam alanlarınız için ölçüden uygulamaya kadar planlı seramik çözümleri.', ['Alan ölçümü ve uygulama planı', 'Uygun seramik ve derz seçimi', 'Titiz, düzgün ve temiz işçilik']],
  'tadilat-yenileme': ['Tadilat & Yenileme', 'Mekânınızı yeniden düşünün.', 'İhtiyacınızı dinliyor, iş planını oluşturuyor ve yenileme sürecini baştan sona yönetiyoruz.', ['İhtiyaç analizi ve keşif', 'Planlı uygulama süreci', 'Uygulama sonrası kontrol']],
  'isi-yalitimi': ['Isı Yalıtımı', 'Konforlu yapı, verimli yaşam.', 'Yapınızın ihtiyacına uygun yalıtım çözümleriyle dört mevsim konfor ve enerji verimliliği sağlıyoruz.', ['Yapı ve yüzey analizi', 'Uygun sistem ve malzeme seçimi', 'Uzun ömürlü uygulama']],
}

export default async function ServiceDetail({ params }) {
  const { slug } = await params
  const item = details[slug] || details['boya-uygulamalari']
  return <main className="detail-page service-detail"><div className="detail-top"><Link href="/" className="detail-back"><ArrowLeft /> Ana sayfaya dön</Link><span className="detail-brand">MERİÇ NALBUR</span></div><div className="detail-wrap"><p className="eyebrow"><span /> Uygulama & hizmet</p><h1>{item[0]}<br /><em>{item[1]}</em></h1><p className="detail-lead">{item[2]}</p><div className="detail-grid"><div><h2>Nasıl yardımcı oluyoruz?</h2><ul>{item[3].map((point) => <li key={point}><CheckCircle2 /> {point}</li>)}</ul></div><div className="detail-card"><span>Projenizi konuşalım</span><p>İhtiyacınızı anlatın, size en doğru yolu birlikte bulalım.</p><a href="tel:+905321234567">Bizi arayın <Phone /></a></div></div><Link href="/#iletisim" className="detail-next">İletişim bilgilerine git <ArrowRight /></Link></div></main>
}
