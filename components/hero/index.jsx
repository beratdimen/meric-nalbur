'use client'

import { ArrowDown, ArrowRight, Check, Play } from 'lucide-react'

export default function Hero() {
  return <section className="hero" id="anasayfa">
    <div className="hero-image" aria-hidden="true" />
    <div className="hero-overlay" />
    <div className="hero-content container">
      <p className="eyebrow light"><span /> 1998&apos;den beri güvenle</p>
      <h1>Yapının her<br /><em>ihtiyacında</em> yanınızdayız.</h1>
      <p className="hero-text">Sağlam yapılar, doğru malzeme ve usta çözümler. Hayalinizdeki yaşam alanları için ihtiyacınız olan her şey Meriç Nalbur&apos;da.</p>
      <div className="hero-actions"><a className="button button-accent" href="#urunler">Ürünleri keşfet <ArrowRight size={17} /></a><a className="play-link" href="#hakkimizda"><span className="play-icon"><Play size={14} fill="currentColor" /></span> Bizi tanıyın</a></div>
      <div className="hero-proof"><div><strong>25+</strong><span>Yıllık tecrübe</span></div><div><strong>4.8</strong><span>Müşteri memnuniyeti</span></div><div><strong>360°</strong><span>Yapı çözümleri</span></div></div>
    </div>
    <a className="hero-scroll" href="#hakkimizda" aria-label="Aşağı kaydır"><span>Keşfetmeye başla</span><ArrowDown size={18} /></a>
  </section>
}
