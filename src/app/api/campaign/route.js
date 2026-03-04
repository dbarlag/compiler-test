import { NextResponse } from 'next/server';

export async function GET() {
  // Mock API — returns an active campaign banner
  const campaign = {
    active: true,
    title: "Vinteraksjonen 2026",
    message: "Hjelp oss å gi varme til de som trenger det mest denne vinteren. Hver krone teller!",
    ctaLabel: "Doner nå",
    ctaHref: "#donate",
    backgroundColor: "#D32F2F",
    textColor: "#FFFFFF",
  };

  return NextResponse.json({ campaign });
}
