'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { href: '/', label: "Nye rodekors.no" },
  { href: '/page-2', label: "Nye rodekors.no" },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem 2rem', borderBottom: '1px solid #e5e5e5' }}>
      {NAV_ITEMS.map(item => (
        <Link key={item.href} href={item.href}
          style={{ textDecoration: 'none', fontWeight: pathname === item.href ? 700 : 400,
                   color: pathname === item.href ? '#0070f3' : '#333' }}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
