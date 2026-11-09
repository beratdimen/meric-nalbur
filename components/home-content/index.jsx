"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  Hammer,
  Layers3,
  Paintbrush,
  ShieldCheck,
  Sparkles,
  Thermometer,
  Wrench,
  MessageCircle,
  Mail,
  MapPin,
  Clock3,
} from "lucide-react";

const products = [
  {
    slug: "yapi-malzemeleri",
    number: "01",
    title: "Yapı Malzemeleri",
    text: "Temelden çatıya güvenilir ve dayanıklı yapı malzemeleri.",
    icon: Layers3,
    color: "terracotta",
  },
  {
    slug: "hirdavat-nalburiye",
    number: "02",
    title: "Hırdavat & Nalburiye",
    text: "İşinizi kolaylaştıran profesyonel el aletleri ve ekipmanlar.",
    icon: Hammer,
    color: "olive",
  },
  {
    slug: "boya-dekorasyon",
    number: "03",
    title: "Boya & Dekorasyon",
    text: "Yaşam alanlarınıza karakter katacak renk ve dokular.",
    icon: Paintbrush,
    color: "sand",
  },
  {
    slug: "seramik-banyo",
    number: "04",
    title: "Seramik & Banyo",
    text: "Zamansız tasarımlarla estetik ve işlevi buluşturun.",
    icon: Sparkles,
    color: "slate",
  },
];
const services = [
  {
    slug: "boya-uygulamalari",
    title: "Boya Uygulamaları",
    text: "Renk seçimi, yüzey hazırlığı ve profesyonel uygulama desteği.",
    icon: Paintbrush,
  },
  {
    slug: "seramik-doseme",
    title: "Seramik Döşeme",
    text: "Banyo, mutfak ve tüm yaşam alanlarınız için kusursuz işçilik.",
    icon: Layers3,
  },
  {
    slug: "tadilat-yenileme",
    title: "Tadilat & Yenileme",
    text: "Mekânınızı baştan sona dönüştüren planlı tadilat çözümleri.",
    icon: Wrench,
  },
  {
    slug: "isi-yalitimi",
    title: "Isı Yalıtımı",
    text: "Daha konforlu ve verimli yapılar için doğru yalıtım sistemleri.",
    icon: Thermometer,
  },
];

export default function HomeContent() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const onScroll = () =>
      setProgress(
        Math.min(
          100,
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
            100,
        ),
      );
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      {loading && (
        <div className="welcome-screen">
          <div className="welcome-logo">
            <span>M</span>
            <p>MERİÇ NALBUR</p>
          </div>
          <div className="welcome-line">
            <span />
          </div>
          <p>Yapı & Nalburiye</p>
        </div>
      )}
      <a className="scroll-progress" href="#anasayfa" aria-label="Başa dön">
        <svg viewBox="0 0 44 44">
          <circle className="progress-track" cx="22" cy="22" r="19" />
          <circle
            className="progress-value"
            cx="22"
            cy="22"
            r="19"
            style={{ strokeDashoffset: 119 - (119 * progress) / 100 }}
          />
        </svg>
        <ArrowRight size={17} />
      </a>
      <main>
        <section className="intro section" id="hakkimizda">
          <div className="container split-grid">
            <div>
              <p className="eyebrow">
                <span /> Biz kimiz?
              </p>
              <h2>
                İşin ehli,
                <br />
                <em>yapının kalbi.</em>
              </h2>
            </div>
            <div className="intro-copy">
              <p className="lead">
                Meriç Nalbur, bir yapı marketten daha fazlası. 25 yılı aşkın
                deneyimimizle ev, iş yeri ve projeleriniz için doğru ürünü,
                doğru çözümü ve güvenilir hizmeti bir arada sunuyoruz.
              </p>
              <p>
                İhtiyacınızı dinliyor, işinize en uygun malzeme ve uygulama
                yöntemini birlikte planlıyoruz. Çünkü iyi bir iş, iyi bir
                malzemeyle başlar.
              </p>
              <a className="text-link" href="#iletisim">
                Bizi daha yakından tanıyın <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
        <section className="products section" id="urunler">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span /> Ürün grupları
                </p>
                <h2>
                  Projeniz için
                  <br />
                  <em>doğru seçim.</em>
                </h2>
              </div>
              <p className="heading-note">
                İhtiyacınız olan her şey, güvenilir markalar ve uzman
                yönlendirmesiyle.
              </p>
            </div>
            <div className="product-grid">
              {products.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    className={`product-card ${item.color}`}
                    key={item.number}
                  >
                    <div className="card-top">
                      <span>{item.number}</span>
                      <Icon />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <a
                      href={`/urunler/${item.slug}`}
                      aria-label={`${item.title} detaylarını incele`}
                    >
                      Detayları incele <ArrowRight size={16} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        <section className="services section">
          <div className="container">
            <div className="section-heading services-heading">
              <div>
                <p className="eyebrow">
                  <span /> Uygulama & hizmet
                </p>
                <h2>
                  Sadece malzeme değil,
                  <br />
                  <em>çözüm üretiyoruz.</em>
                </h2>
              </div>
              <p className="heading-note">
                Projenizin her aşamasında yanınızdayız. Danışın, birlikte hayata
                geçirelim.
              </p>
            </div>
            <div className="service-list">
              {services.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="service-row" key={item.title}>
                    <div className="service-icon">
                      <Icon />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                    <a
                      className="service-arrow-link"
                      href={`/hizmetler/${item.slug}`}
                      aria-label={`${item.title} detaylarını incele`}
                    >
                      <ArrowRight className="service-arrow" />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        <section className="cta-section">
          <div className="container cta-inner">
            <div>
              <p className="eyebrow light">
                <span /> Birlikte başlayalım
              </p>
              <h2>
                Projenizi
                <br />
                <em>konuşalım.</em>
              </h2>
            </div>
            <div className="cta-copy">
              <p>
                İhtiyacınızı anlatın, size en doğru çözümü birlikte bulalım.
              </p>
              <a className="button button-light" href="#iletisim">
                İletişime geçin <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>
        <section className="contact section" id="iletisim">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">
                <span /> İletişim
              </p>
              <h2>
                Bir telefon
                <br />
                <em>kadar yakınız.</em>
              </h2>
              <p className="contact-lead">
                Sorularınız, ürün danışmanlığı veya uygulama talepleriniz için
                bize ulaşın. Size yardımcı olmaktan memnuniyet duyarız.
              </p>
            </div>
            <div className="contact-details">
              <a className="contact-item" href="tel:+905321234567">
                <span>
                  <PhoneIcon />
                </span>
                <div>
                  <small>Telefon</small>
                  <strong>0 (532) 123 45 67</strong>
                </div>
                <ArrowRight />
              </a>
              <a
                className="contact-item"
                href="https://wa.me/905321234567"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <MessageCircle />
                </span>
                <div>
                  <small>WhatsApp</small>
                  <strong>WhatsApp&apos;tan yazın</strong>
                </div>
                <ArrowRight />
              </a>
              <a className="contact-item" href="mailto:merhaba@yapihan.com">
                <span>
                  <Mail />
                </span>
                <div>
                  <small>E-posta</small>
                  <strong>merhaba@yapihan.com</strong>
                </div>
                <ArrowRight />
              </a>
              <div className="contact-meta">
                <span>
                  <MapPin size={17} /> Ekinoba mah orhan veli sok westpark
                  evleri c1 blok 1/1A B.çekmece, 34500 Büyükçekmece/İstanbul
                </span>
                <span>
                  <Clock3 size={17} /> Hafta içi 08:00 — 19:00
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container footer-inner">
          <a className="brand" href="#anasayfa">
            <span className="brand-mark">M</span>
            <span>
              <strong>MERİÇ NALBUR</strong>
              <small>Yapı & Nalburiye</small>
            </span>
          </a>
          <p>Güvenle inşa edilen yarınlar.</p>
          <span>© 2026 Meriç Nalbur</span>
        </div>
      </footer>
    </>
  );
}
function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
