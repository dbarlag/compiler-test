'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button, Card, CardBlock, CrossCorner, Donor, Footer, Header, Heading, Paragraph } from 'rk-designsystem';
import styles from './RedcrossnohomePage.module.css';
import repeatData from './RedcrossnohomePage.data.json';

export default function FigmaComponent() {
  const repeatItems1 = repeatData.repeatItems1;
  const repeatItems2 = repeatData.repeatItems2;

  const [supabaseData, setSupabaseData] = useState(null);
  const [supabaseLoading, setSupabaseLoading] = useState(true);
  const [supabaseError, setSupabaseError] = useState(null);
  // Loading: supabaseLoading, Error: supabaseError — use these in your custom code

  useEffect(() => {
    setSupabaseLoading(true);
    setSupabaseError(null);
    fetch('https://urenlajedqewasikgnko.supabase.co/rest/v1/news', { method: 'GET', headers: {"apikey":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyZW5sYWplZHFld2FzaWtnbmtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyMjM0ODUsImV4cCI6MjA4ODc5OTQ4NX0.JCBGFyTtsIzuCQmsvzStM5Yympcn5_rbIFtNDRSBNeg"} })
      .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
      .then(data => { setSupabaseData(data); setSupabaseLoading(false); })
      .catch(err => { setSupabaseError(err.message); setSupabaseLoading(false); });
  }, []);

  function helloWorld() {
  alert('Hello, World!');
}

  return (
    <div data-figma-id="316:21605" data-figma-name="redcross.no/home" className={styles.redcrossnohome40}>

      <style dangerouslySetInnerHTML={{ __html: `@keyframes figmaAnim_0 { from { opacity: 0 } to { opacity: 1 } }
[data-figma-id="316:21653"] { animation: figmaAnim_0 400ms ease-out 900ms 1 normal both; }` }} />
      <div className={styles.wrapper1}>
        <Header data-color="primary" extensionColor="tinted" showHeaderExtension showThemeToggle showModeToggle showLanguageSwitch showMenuButton showSearch={false} showLogin={false} showUser={false} showCta ctaLabel="Støtt oss" ctaIcon={null} showNavItems={false} />
      </div>
      <section data-figma-id="646:22899" data-figma-name="Hero" className={styles.Hero7}>
        <div className={styles.wrapper2}>
          <Donor amounts={[{"value":220,"label":"220 kr"},{"value":345,"label":"345 kr"},{"value":660,"label":"660 kr"}]} defaultAmount={345} oneTimeLabel="En gang" monthlyLabel="Hver måned" customAmountPlaceholder="Valgfritt beløp" amountLabel="Velg ønsket beløp:" impactMessage="En gave på {amount} bidrar til lorem ipsum dolor sit amet" vippsButtonLabel="Gi med" avtalegiroLabel="Gi med Kort" avtalegiroHref="#" currencySuffix="kr" data-color="primary" showVippsButton showAvtalegiroLink showImpactMessage />
        </div>
        <section data-figma-id="657:22053" data-figma-name="Girl section" className={styles.GirlSection6}>
          <img data-figma-id="646:22322" data-figma-name="Redcross-graphics-1" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/398357fe-8477-4352-a3d0-b18340b95534" alt="Redcross-graphics-1" className={styles.Redcrossgraphics13} />
          <img data-figma-id="647:22901" data-figma-name="girl" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d90c7f1e-6543-4352-938a-ea2232cbc787" alt="girl" className={styles.girl4} />
          <img data-figma-id="646:22327" data-figma-name="Redcross-graphics-1" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1a778db-a045-4e9a-9264-95a056105202" alt="Redcross-graphics-1" className={styles.Redcrossgraphics15} />
        </section>
      </section>
      <section data-figma-id="316:21652" data-figma-name="Section2: Call to action" className={styles.Section2CallToAction12}>
        <div className={styles.dsWrapper8}>
          <Heading data-size="xl" level={1} data-figma-id="316:21653" data-figma-name="Heading">{supabaseData?.[1]?.headline ?? ''}</Heading>
        </div>
        <div className={styles.dsWrapper9}>
          <Paragraph data-size="md" variant={false} data-figma-id="316:21654" data-figma-name="Body">Støtt vanskeligstilte barn i Vestfold med en donasjon. Hjelp oss å gi dem en lysere fremtid, full av muligheter og glede. Din gave, uansett størrelse, utgjør en stor forskjell. Sammen kan vi skape varige positive endringer i deres liv og lokalsamfunn. Bli med oss i dag og gi håp til de som trenger det mest.</Paragraph>
        </div>
        <div data-figma-id="316:21655" data-figma-name="Buttons" className={styles.Buttons11}>
          <div className={styles.dsWrapper10}>
            <Button loading={false} showIconRight={false} showIconLeft={false} variant="secondary" data-color="primary" data-figma-id="316:21657" data-figma-name="Button" onClick={helloWorld}>Secondary</Button>
          </div>
          <div className={styles.dsWrapper10}>
            <Link href="/page-2" style={{ textDecoration: 'inherit', color: 'inherit' }}>
              <Button loading={false} showIconRight={false} showIconLeft={false} variant="primary" data-color="primary" data-figma-id="316:21656" data-figma-name="Button">Call to action</Button>
            </Link>
          </div>
        </div>
      </section>
      <section data-figma-id="316:21658" data-figma-name="Section3: støtte" className={styles.Section3Sttte22}>
        <div className={styles.dsWrapper13}>
          <CrossCorner position="top-right" data-size="lg" size="lg" data-figma-id="316:21659" data-figma-name="arrow" />
        </div>
        <div className={styles.dsWrapper14}>
          <Heading data-size="xl" level={1} data-figma-id="316:21663" data-figma-name="Heading">Vi trenger din støtte</Heading>
        </div>
        <article data-figma-id="316:21664" data-figma-name="Feature cards 1" className={styles.FeatureCards120}>
          {repeatItems1.map((item, index) => (
            <div key={index} className={styles.dsWrapper19}>
              <Card variant={false} data-color="neutral" className={styles.dsStyle18} data-figma-id="316:21665" data-figma-name="Card">
                <img data-figma-id="I316:21665;25374:15544" data-figma-name=".Aspect Ratio Spacer" src={item.image1} alt=".Aspect Ratio Spacer" className={styles.AspectRatioSpacer15} />
                <CardBlock>
                  <div className={styles.dsWrapper16}>
                    <Heading data-size="md" level={3} data-figma-id="I316:21665;24532:5015;25374:5944;25374:5907" data-figma-name="Heading">{item.text1}</Heading>
                  </div>
                  <div className={styles.dsWrapper17}>
                    <Paragraph data-size="md" variant={false} data-figma-id="I316:21665;24532:5015;24384:25357;25374:9703" data-figma-name="Body">{item.text2}</Paragraph>
                  </div>
                </CardBlock>
              </Card>
            </div>
          ))}
        </article>
        <div className={styles.dsWrapper21}>
          <CrossCorner position="bottom-left" data-size="lg" size="lg" data-figma-id="316:21668" data-figma-name="Arrow" />
        </div>
      </section>
      <section data-figma-id="316:21672" data-figma-name="Section4: stats" className={styles.Section4Stats32}>
        <div data-figma-id="316:21691" data-figma-name="Stats icon + number" className={styles.StatsIconNumber27}>
          {repeatItems2.map((item, index) => (
            <div key={index} data-figma-id="316:21692" data-figma-name="1" className={styles.x26}>
              <img data-figma-id="316:21693" data-figma-name="SackKroner" src={item.image1} alt="SackKroner" className={styles.SackKroner23} />
              <h1 data-figma-id="316:21694" data-figma-name="Heading" className={styles.Heading24}>{item.text1}</h1>
              <h4 data-figma-id="316:21695" data-figma-name="Heading" className={styles.Heading25}>{item.text2}</h4>
            </div>
          ))}
        </div>
        <div data-figma-id="316:21708" data-figma-name="texts" className={styles.texts31}>
          <h4 data-figma-id="316:21710" data-figma-name="Heading" className={styles.Heading28}>Vi avdekker og hindrer nød</h4>
          <div data-figma-id="316:21724" data-figma-name="Line 1" className={styles.Line129}>
            <svg width="1" height="84" viewBox="0 0 1 84" fill="none" xmlns="http://www.w3.org/2000/svg"> <line x1="0.5" y1="0.5" x2="0.499997" y2="83.5" stroke="#416178" strokeLinecap="round"/> </svg>
          </div>
          <h4 data-figma-id="316:21726" data-figma-name="Heading" className={styles.Heading30}>Vi gir rask respons og lindrer når krisen oppstår</h4>
          <div data-figma-id="316:21740" data-figma-name="Line 2" className={styles.Line129}>
            <svg width="1" height="84" viewBox="0 0 1 84" fill="none" xmlns="http://www.w3.org/2000/svg"> <line x1="0.5" y1="0.5" x2="0.499997" y2="83.5" stroke="#416178" strokeLinecap="round"/> </svg>
          </div>
          <h4 data-figma-id="316:21742" data-figma-name="Heading" className={styles.Heading28}>Vi avdekker og hindrer nød</h4>
        </div>
      </section>
      <section data-figma-id="316:21756" data-figma-name="Section5: text-photo" className={styles.Section5Textphoto39}>
        <div data-figma-id="316:21757" data-figma-name="Row 1" className={styles.Row136}>
          <div data-figma-id="316:21758" data-figma-name="Content" className={styles.Content35}>
            <img data-figma-id="316:21763" data-figma-name="Image" src={supabaseData?.[1]?.image} alt={supabaseData?.[0]?.image} className={styles.Image33} />
            <div data-figma-id="316:21759" data-figma-name="Text" className={styles.Text34}>
              <div className={styles.dsWrapper14}>
                <Heading data-size="lg" level={2} data-figma-id="316:21760" data-figma-name="Heading">A really compelling headline</Heading>
              </div>
              <div className={styles.dsWrapper14}>
                <Paragraph data-size="md" variant="long" data-figma-id="316:21761" data-figma-name="Body">Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.</Paragraph>
              </div>
            </div>
            <div className={styles.dsWrapper10}>
              <Button loading={false} showIconRight={false} showIconLeft={false} variant="primary" data-color="primary" data-figma-id="316:21762" data-figma-name="Button">A button</Button>
            </div>
          </div>
        </div>
        <div data-figma-id="316:21764" data-figma-name="Row 2" className={styles.Row238}>
          <div data-figma-id="316:21766" data-figma-name="Content" className={styles.Content35}>
            <div data-figma-id="316:21767" data-figma-name="Text" className={styles.Text34}>
              <div className={styles.dsWrapper14}>
                <Heading data-size="lg" level={2} data-figma-id="316:21768" data-figma-name="Heading">Another scroll-stopper</Heading>
              </div>
              <div className={styles.dsWrapper14}>
                <Paragraph data-size="md" variant="long" data-figma-id="316:21769" data-figma-name="Body">When there’s one great thing, there’s usually another. What’s your second thing to showcase?</Paragraph>
              </div>
            </div>
            <div className={styles.dsWrapper10}>
              <Button loading={false} showIconRight={false} showIconLeft={false} variant="primary" data-color="primary" data-figma-id="316:21770" data-figma-name="Button">Another button</Button>
            </div>
          </div>
          <img data-figma-id="316:21765" data-figma-name="Image" src={supabaseData?.[1]?.image} alt="" className={styles.Image37} />
        </div>
      </section>
      <div className={styles.wrapper1}>
        <Footer variant="default" hideNewsletter data-color="neutral" showCrossCorners={false} shortcutsLinks={[{"label":"Tilbudene","href":"#"},{"label":"Bli frivillig","href":"#"},{"label":"Vårt arbeid","href":"#"},{"label":"Om Røde Kors","href":"#"},{"label":"Støtt arbeidet","href":"#"},{"label":"Kontakt oss","href":"#"}]} legalLinks={[{"label":"Personvern","href":"#"},{"label":"For presse","href":"#"},{"label":"Regler for innkjøp","href":"#"},{"label":"Varsling/Misconduct","href":"#"}]} linksLinks={[{"label":"Tilbudene","href":"#"},{"label":"Bli frivillig","href":"#"},{"label":"Vårt arbeid","href":"#"},{"label":"Om Røde Kors","href":"#"},{"label":"Støtt arbeidet","href":"#"},{"label":"Kontakt oss","href":"#"}]} visitingAddress={["Snarveier"]} organizationNumber="XXX XXX XXX" email="post@redcross.no" whiteSectionSlot="SLOT" showPrimaryLogo />
      </div>
    </div>
  );
}
