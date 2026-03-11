'use client';

import { useState, useEffect } from 'react';
import { Button, Card, CardBlock, CrossCorner, Donor, Footer, Header, Heading, Paragraph } from 'rk-designsystem';
import styles from './FigmaComponent.module.css';
import repeatData from './FigmaComponent.data.json';

export default function FigmaComponent() {
  const repeatItems1 = repeatData.repeatItems1;
  const repeatItems2 = repeatData.repeatItems2;

  const [title21Data, setTitle21Data] = useState(null);

  useEffect(() => {
    fetch('https://urenlajedqewasikgnko.supabase.co/rest/v1/news', { method: 'GET', headers: {"apikey":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyZW5sYWplZHFld2FzaWtnbmtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyMjM0ODUsImV4cCI6MjA4ODc5OTQ4NX0.JCBGFyTtsIzuCQmsvzStM5Yympcn5_rbIFtNDRSBNeg"} })
      .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
      .then(data => setTitle21Data(data))
      .catch(() => {});
  }, []);

  function showHelloWorld() {
    alert('Hello World!');
  }

  const [titleData, setTitleData] = useState(null);

  return (
    <div data-figma-id="316:21605" data-figma-name="redcross.no/home" className={styles.redcrossnohome39}>
      <div className={styles.wrapper1}>
        <Header data-color="primary" extensionColor="tinted" showHeaderExtension showThemeToggle showModeToggle showLanguageSwitch showMenuButton showCta ctaLabel="Støtt oss" />
      </div>
      <section data-figma-id="646:22899" data-figma-name="Hero" className={styles.Hero7}>
        <div className={styles.wrapper2}>
          <Donor amounts={[{"value":220,"label":"220 kr"},{"value":345,"label":"345 kr"},{"value":660,"label":"660 kr"}]} defaultAmount={345} oneTimeLabel="En gang" monthlyLabel="Hver måned" customAmountPlaceholder="Valgfritt beløp" amountLabel="Velg ønsket beløp:" impactMessage="En gave på {amount} bidrar til lorem ipsum dolor sit amet" vippsButtonLabel="Gi med" avtalegiroLabel="Gi med Kort" avtalegiroHref="#" currencySuffix="kr" data-color="primary" showVippsButton showAvtalegiroLink showImpactMessage />
        </div>
        <section data-figma-id="657:22053" data-figma-name="Girl section" className={styles.GirlSection6}>
          <img data-figma-id="646:22322" data-figma-name="Redcross-graphics-1" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c21daf6-e183-408d-96f1-a801a7a90e57" alt="Redcross-graphics-1" className={styles.Redcrossgraphics13} />
          <img data-figma-id="647:22901" data-figma-name="girl" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d68b997-37ff-4ecd-9a01-20d2121a6857" alt="girl" className={styles.girl4} />
          <img data-figma-id="646:22327" data-figma-name="Redcross-graphics-1" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af45dece-419a-41de-9fd0-705c9275adee" alt="Redcross-graphics-1" className={styles.Redcrossgraphics15} />
        </section>
      </section>
      <section data-figma-id="316:21652" data-figma-name="Section2: Call to action" className={styles.Section2CallToAction11}>
        <div className={styles.dsWrapper8}>
          <Heading data-size="xl" level={1} data-figma-id="316:21653" data-figma-name="Heading">{title21Data?.[0]?.headline ?? ''}</Heading>
        </div>
        <div className={styles.dsWrapper9}>
          <Paragraph data-size="md" data-figma-id="316:21654" data-figma-name="Body">Støtt vanskeligstilte barn i Vestfold med en donasjon. Hjelp oss å gi dem en lysere fremtid, full av muligheter og glede. Din gave, uansett størrelse, utgjør en stor forskjell. Sammen kan vi skape varige positive endringer i deres liv og lokalsamfunn. Bli med oss i dag og gi håp til de som trenger det mest.</Paragraph>
        </div>
        <div data-figma-id="316:21655" data-figma-name="Buttons" className={styles.Buttons10}>
          <Button variant="secondary" data-color="primary" data-figma-id="316:21657" data-figma-name="Button">Secondary</Button>
          <Button variant="primary" data-color="primary" data-figma-id="316:21656" data-figma-name="Button" onClick={showHelloWorld}>Call to action</Button>
        </div>
      </section>
      <section data-figma-id="316:21658" data-figma-name="Section3: støtte" className={styles.Section3Sttte21}>
        <div className={styles.dsWrapper12}>
          <CrossCorner position="top-right" data-size="lg" size="lg" data-figma-id="316:21659" data-figma-name="arrow" />
        </div>
        <div className={styles.dsWrapper13}>
          <Heading data-size="xl" level={1} data-figma-id="316:21663" data-figma-name="Heading">Vi trenger din støtte</Heading>
        </div>
        <article data-figma-id="316:21664" data-figma-name="Feature cards 1" className={styles.FeatureCards119}>
          {repeatItems1.map((item, index) => (
            <div key={index} className={styles.dsWrapper18}>
              <Card data-color="neutral" className={styles.dsStyle17} data-figma-id="316:21665" data-figma-name="Card">
                <img data-figma-id="I316:21665;25374:15544" data-figma-name=".Aspect Ratio Spacer" src={item.image1} alt=".Aspect Ratio Spacer" className={styles.AspectRatioSpacer14} />
                <CardBlock>
                  <div className={styles.dsWrapper15}>
                    <Heading data-size="md" level={3} data-figma-id="I316:21665;24532:5015;25374:5944;25374:5907" data-figma-name="Heading">{item.text1}</Heading>
                  </div>
                  <div className={styles.dsWrapper16}>
                    <Paragraph data-size="md" data-figma-id="I316:21665;24532:5015;24384:25357;25374:9703" data-figma-name="Body">{item.text2}</Paragraph>
                  </div>
                </CardBlock>
              </Card>
            </div>
          ))}
        </article>
        <div className={styles.dsWrapper20}>
          <CrossCorner position="bottom-left" data-size="lg" size="lg" data-figma-id="316:21668" data-figma-name="Arrow" />
        </div>
      </section>
      <section data-figma-id="316:21672" data-figma-name="Section4: stats" className={styles.Section4Stats31}>
        <div data-figma-id="316:21691" data-figma-name="Stats icon + number" className={styles.StatsIconNumber26}>
          {repeatItems2.map((item, index) => (
            <div key={index} data-figma-id="316:21692" data-figma-name="1" className={styles.x25}>
              <img data-figma-id="316:21693" data-figma-name="SackKroner" src={item.image1} alt="SackKroner" className={styles.SackKroner22} />
              <h1 data-figma-id="316:21694" data-figma-name="Heading" className={styles.Heading23}>{item.text1}</h1>
              <h4 data-figma-id="316:21695" data-figma-name="Heading" className={styles.Heading24}>{item.text2}</h4>
            </div>
          ))}
        </div>
        <div data-figma-id="316:21708" data-figma-name="texts" className={styles.texts30}>
          <h4 data-figma-id="316:21710" data-figma-name="Heading" className={styles.Heading27}>Vi avdekker og hindrer nød</h4>
          <img data-figma-id="316:21724" data-figma-name="Line 1" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a50889b9-f7fa-4355-8f1b-41a00d4d9e64" alt="Line" className={styles.Line128} />
          <h4 data-figma-id="316:21726" data-figma-name="Heading" className={styles.Heading29}>Vi gir rask respons og lindrer når krisen oppstår</h4>
          <img data-figma-id="316:21740" data-figma-name="Line 2" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76f58b36-1b9f-4de2-b6fd-a34bcf760b73" alt="Line" className={styles.Line128} />
          <h4 data-figma-id="316:21742" data-figma-name="Heading" className={styles.Heading27}>Vi avdekker og hindrer nød</h4>
        </div>
      </section>
      <section data-figma-id="316:21756" data-figma-name="Section5: text-photo" className={styles.Section5Textphoto38}>
        <div data-figma-id="316:21757" data-figma-name="Row 1" className={styles.Row135}>
          <div data-figma-id="316:21758" data-figma-name="Content" className={styles.Content33}>
            <div data-figma-id="316:21759" data-figma-name="Text" className={styles.Text32}>
              <div className={styles.dsWrapper13}>
                <Heading data-size="lg" level={2} data-figma-id="316:21760" data-figma-name="Heading">A really compelling headline</Heading>
              </div>
              <div className={styles.dsWrapper13}>
                <Paragraph data-size="md" variant="long" data-figma-id="316:21761" data-figma-name="Body">Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.</Paragraph>
              </div>
            </div>
            <Button variant="primary" data-color="primary" data-figma-id="316:21762" data-figma-name="Button" onClick={showHelloWorld}>A button</Button>
          </div>
          <img data-figma-id="316:21763" data-figma-name="Image" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f52f579-4d68-40fe-93b9-66abc4c2fb64" alt="" className={styles.Image34} />
        </div>
        <div data-figma-id="316:21764" data-figma-name="Row 2" className={styles.Row237}>
          <img data-figma-id="316:21765" data-figma-name="Image" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1761a60a-641e-409b-9b8d-c6827bae33af" alt="" className={styles.Image36} />
          <div data-figma-id="316:21766" data-figma-name="Content" className={styles.Content33}>
            <div data-figma-id="316:21767" data-figma-name="Text" className={styles.Text32}>
              <div className={styles.dsWrapper13}>
                <Heading data-size="lg" level={2} data-figma-id="316:21768" data-figma-name="Heading">Another scroll-stopper</Heading>
              </div>
              <div className={styles.dsWrapper13}>
                <Paragraph data-size="md" variant="long" data-figma-id="316:21769" data-figma-name="Body">When there’s one great thing, there’s usually another. What’s your second thing to showcase?</Paragraph>
              </div>
            </div>
            <Button variant="primary" data-color="primary" data-figma-id="316:21770" data-figma-name="Button">Another button</Button>
          </div>
        </div>
      </section>
      <div className={styles.wrapper1}>
        <Footer variant="default" hideNewsletter data-color="neutral" shortcutsLinks={[{"label":"Tilbudene","href":"#"},{"label":"Bli frivillig","href":"#"},{"label":"Vårt arbeid","href":"#"},{"label":"Om Røde Kors","href":"#"},{"label":"Støtt arbeidet","href":"#"},{"label":"Kontakt oss","href":"#"}]} legalLinks={[{"label":"Personvern","href":"#"},{"label":"For presse","href":"#"},{"label":"Regler for innkjøp","href":"#"},{"label":"Varsling/Misconduct","href":"#"}]} linksLinks={[{"label":"Tilbudene","href":"#"},{"label":"Bli frivillig","href":"#"},{"label":"Vårt arbeid","href":"#"},{"label":"Om Røde Kors","href":"#"},{"label":"Støtt arbeidet","href":"#"},{"label":"Kontakt oss","href":"#"}]} visitingAddress={["Snarveier"]} organizationNumber="XXX XXX XXX" email="post@redcross.no" whiteSectionSlot="SLOT" showPrimaryLogo />
      </div>
    </div>
  );
}
