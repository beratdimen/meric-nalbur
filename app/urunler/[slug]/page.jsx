import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react'

const details = {
  'yapi-malzemeleri': ['Yapı Malzemeleri', 'Temelden çatıya sağlam çözümler.', 'İnşaatınızın her aşaması için doğru ürünleri ve teknik yönlendirmeyi bir arada sunuyoruz.', ['Çimento, harç ve bağlayıcılar', 'İzolasyon ve tamamlayıcı ürünler', 'Duvar, çatı ve yapı elemanları']],
  'hirdavat-nalburiye': ['Hırdavat & Nalburiye', 'İşinize güç katan ekipmanlar.', 'Profesyoneller ve ev ustaları için güvenilir el aletleri, bağlantı elemanları ve yardımcı ürünler.', ['El aletleri ve elektrikli aletler', 'Vida, dübel ve bağlantı ürünleri', 'İş güvenliği ekipmanları']],
  'boya-dekorasyon': ['Boya & Dekorasyon', 'Renklerle yaşam alanınızı yenileyin.', 'Yüzeyinize ve kullanım alanınıza uygun boya, yardımcı malzeme ve dekorasyon çözümleri.', ['İç ve dış cephe boyaları', 'Boya yardımcıları ve astarlar', 'Duvar dekorasyon ürünleri']],
  'seramik-banyo': ['Seramik & Banyo', 'Estetik, işlevsel, zamansız.', 'Banyo ve yaşam alanlarınız için seçkin seramik, armatür ve tamamlayıcı ürünler.', ['Zemin ve duvar seramikleri', 'Armatür ve banyo çözümleri', 'Derz, yapıştırıcı ve aksesuarlar']],
}

export default async function ProductDetail({ params }) {
  const { slug } = await params
  const item = details[slug] || details['yapi-malzemeleri']
  return <main className="detail-page"><div className="detail-top"><Link href="/" className="detail-back"><ArrowLeft /> Ana sayfaya dön</Link><span className="detail-brand">MERİÇ NALBUR</span></div><div className="detail-wrap"><p className="eyebrow"><span /> Ürün grubu</p><h1>{item[0]}<br /><em>{item[1]}</em></h1><p className="detail-lead">{item[2]}</p><div className="detail-grid"><div><h2>Bu grupta neler var?</h2><ul>{item[3].map((point) => <li key={point}><CheckCircle2 /> {point}</li>)}</ul></div><div className="detail-card"><span>Merak ettiğiniz ürünü danışın</span><p>İhtiyacınıza en uygun ürünü birlikte seçelim.</p><a href="https://wa.me/905321234567" target="_blank" rel="noreferrer">WhatsApp&apos;tan ulaşın <MessageCircle /></a></div></div><Link href="/" className="detail-next">Diğer ürün gruplarını keşfet <ArrowRight /></Link></div></main>
}
