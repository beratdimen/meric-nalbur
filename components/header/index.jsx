'use client'

import { useState } from 'react'
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'Ana Sayfa', href: '#anasayfa' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'Ürün Grupları', href: '#urunler' },
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'İletişim', href: '#iletisim' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <a className="brand" href="#anasayfa" aria-label="Meriç Nalbur ana sayfa">
        <span className="brand-mark">M</span>
        <span><strong>MERİÇ NALBUR</strong><small>Yapı & Nalburiye</small></span>
      </a>
      <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Ana navigasyon">
        {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
        <a className="nav-cta" href="tel:+905321234567"><Phone size={16} /> Bize Ulaşın</a>
      </nav>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      <a className="header-phone" href="tel:+905321234567"><Phone size={16} /> <span>0 (532) 123 45 67</span><ArrowUpRight size={16} /></a>
    </header>
  )
}
