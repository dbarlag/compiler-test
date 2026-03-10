'use client';

import { Button, Card, CardBlock, CrossCorner, Donor, Footer, Header, Heading, Paragraph } from 'rk-designsystem';
import styles from './FigmaComponent.module.css';
import repeatData from './FigmaComponent.data.json';

export default function FigmaComponent() {
  const repeatItems1 = repeatData.repeatItems1;
  const repeatItems2 = repeatData.repeatItems2;

  function showHelloWorld() {
    alert('Hello World!');
  }

  return (
    <div data-figma-id="316:21605" data-figma-name="redcross.no/home" className={styles.redcrossnohome37}>
      <div className={styles.wrapper1}>
        <Header data-color="primary" extensionColor="tinted" showHeaderExtension showThemeToggle showModeToggle showLanguageSwitch showMenuButton showCta ctaLabel="Støtt oss" />
      </div>
      <section data-figma-id="646:22899" data-figma-name="Hero" className={styles.Hero7}>
        <div className={styles.wrapper2}>
          <Donor amounts={[{"value":220,"label":"220 kr"},{"value":345,"label":"345 kr"},{"value":660,"label":"660 kr"}]} defaultAmount={345} oneTimeLabel="En gang" monthlyLabel="Hver måned" customAmountPlaceholder="Valgfritt beløp" amountLabel="Velg ønsket beløp:" impactMessage="En gave på {amount} bidrar til lorem ipsum dolor sit amet" vippsButtonLabel="Gi med" avtalegiroLabel="Gi med Kort" avtalegiroHref="#" currencySuffix="kr" data-color="primary" showVippsButton showAvtalegiroLink showImpactMessage />
        </div>
        <section data-figma-id="657:22053" data-figma-name="Girl section" className={styles.GirlSection6}>
          <img data-figma-id="646:22322" data-figma-name="Redcross-graphics-1" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44402074-4369-462c-b50b-e2f924b81e4a" alt="Redcross-graphics-1" className={styles.Redcrossgraphics13} />
          <img data-figma-id="647:22901" data-figma-name="girl" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68fcf523-44d1-4e05-8def-04eb08cdd68d" alt="girl" className={styles.girl4} />
          <img data-figma-id="646:22327" data-figma-name="Redcross-graphics-1" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3ce4369-7e71-412f-b81f-741562b237a0" alt="Redcross-graphics-1" className={styles.Redcrossgraphics15} />
        </section>
      </section>
      <section data-figma-id="316:21652" data-figma-name="Section2: Call to action" className={styles.Section2CallToAction10}>
        <div className={styles.dsWrapper8}>
          <Heading data-size="xl" level={1} data-figma-id="316:21653" data-figma-name="Heading">Du kan hjelpe lorem ipsum</Heading>
        </div>
        <div className={styles.dsWrapper8}>
          <Paragraph data-size="md" data-figma-id="316:21654" data-figma-name="Body">Støtt vanskeligstilte barn i Vestfold med en donasjon. Hjelp oss å gi dem en lysere fremtid, full av muligheter og glede. Din gave, uansett størrelse, utgjør en stor forskjell. Sammen kan vi skape varige positive endringer i deres liv og lokalsamfunn. Bli med oss i dag og gi håp til de som trenger det mest.</Paragraph>
        </div>
        <div data-figma-id="316:21655" data-figma-name="Buttons" className={styles.Buttons9}>
          <Button variant="primary" data-color="primary" data-figma-id="316:21656" data-figma-name="Button" onClick={showHelloWorld}>Call to action</Button>
          <Button variant="secondary" data-color="primary" data-figma-id="316:21657" data-figma-name="Button">Secondary</Button>
        </div>
      </section>
      <section data-figma-id="316:21658" data-figma-name="Section3: støtte" className={styles.Section3Sttte19}>
        <div className={styles.dsWrapper11}>
          <CrossCorner position="top-right" data-size="lg" size="lg" data-figma-id="316:21659" data-figma-name="arrow" />
        </div>
        <div className={styles.dsWrapper12}>
          <Heading data-size="xl" level={1} data-figma-id="316:21663" data-figma-name="Heading">Vi trenger din støtte</Heading>
        </div>
        <article data-figma-id="316:21664" data-figma-name="Feature cards 1" className={styles.FeatureCards117}>
          {repeatItems1.map((item, index) => (
            <div key={index} className={styles.dsWrapper16}>
              <Card data-color="neutral" className={styles.dsStyle15} data-figma-id="316:21665" data-figma-name="Card">
                <img data-figma-id="I316:21665;25374:15544" data-figma-name=".Aspect Ratio Spacer" src={item.image1} alt=".Aspect Ratio Spacer" className={styles.AspectRatioSpacer13} />
                <CardBlock>
                  <div className={styles.dsWrapper14}>
                    <Heading data-size="md" level={3} data-figma-id="I316:21665;24532:5015;25374:5944;25374:5907" data-figma-name="Heading">{item.text1}</Heading>
                  </div>
                  <div className={styles.dsWrapper12}>
                    <Paragraph data-size="md" data-figma-id="I316:21665;24532:5015;24384:25357;25374:9703" data-figma-name="Body">{item.text2}</Paragraph>
                  </div>
                </CardBlock>
              </Card>
            </div>
          ))}
        </article>
        <div className={styles.dsWrapper18}>
          <CrossCorner position="bottom-left" data-size="lg" size="lg" data-figma-id="316:21668" data-figma-name="Arrow" />
        </div>
      </section>
      <section data-figma-id="316:21672" data-figma-name="Section4: stats" className={styles.Section4Stats29}>
        <div data-figma-id="316:21691" data-figma-name="Stats icon + number" className={styles.StatsIconNumber24}>
          {repeatItems2.map((item, index) => (
            <div key={index} data-figma-id="316:21692" data-figma-name="1" className={styles.x23}>
              <img data-figma-id="316:21693" data-figma-name="SackKroner" src={item.image1} alt="SackKroner" className={styles.SackKroner20} />
              <h1 data-figma-id="316:21694" data-figma-name="Heading" className={styles.Heading21}>{item.text1}</h1>
              <h4 data-figma-id="316:21695" data-figma-name="Heading" className={styles.Heading22}>{item.text2}</h4>
            </div>
          ))}
        </div>
        <div data-figma-id="316:21708" data-figma-name="texts" className={styles.texts28}>
          <h4 data-figma-id="316:21710" data-figma-name="Heading" className={styles.Heading25}>Vi avdekker og hindrer nød</h4>
          <img data-figma-id="316:21724" data-figma-name="Line 1" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0377b03a-1d44-4311-aa4b-9a34cf7e6937" alt="Line" className={styles.Line126} />
          <h4 data-figma-id="316:21726" data-figma-name="Heading" className={styles.Heading27}>Vi gir rask respons og lindrer når krisen oppstår</h4>
          <img data-figma-id="316:21740" data-figma-name="Line 2" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7fb9d8e6-95c5-4a2a-a935-5746777d9135" alt="Line" className={styles.Line126} />
          <h4 data-figma-id="316:21742" data-figma-name="Heading" className={styles.Heading25}>Vi avdekker og hindrer nød</h4>
        </div>
      </section>
      <section data-figma-id="316:21756" data-figma-name="Section5: text-photo" className={styles.Section5Textphoto36}>
        <div data-figma-id="316:21757" data-figma-name="Row 1" className={styles.Row133}>
          <div data-figma-id="316:21758" data-figma-name="Content" className={styles.Content31}>
            <div data-figma-id="316:21759" data-figma-name="Text" className={styles.Text30}>
              <div className={styles.dsWrapper12}>
                <Heading data-size="lg" level={2} data-figma-id="316:21760" data-figma-name="Heading">A really compelling headline</Heading>
              </div>
              <div className={styles.dsWrapper12}>
                <Paragraph data-size="md" variant="long" data-figma-id="316:21761" data-figma-name="Body">Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.</Paragraph>
              </div>
            </div>
            <Button variant="primary" data-color="primary" data-figma-id="316:21762" data-figma-name="Button">A button</Button>
          </div>
          <img data-figma-id="316:21763" data-figma-name="Image" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0d4b550-99ac-436a-8a87-870e0c64643d" alt="" className={styles.Image32} />
        </div>
        <div data-figma-id="316:21764" data-figma-name="Row 2" className={styles.Row235}>
          <img data-figma-id="316:21765" data-figma-name="Image" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc9eb9e0-76b3-4ada-aa57-f4fd8a0e7035" alt="" className={styles.Image34} />
          <div data-figma-id="316:21766" data-figma-name="Content" className={styles.Content31}>
            <div data-figma-id="316:21767" data-figma-name="Text" className={styles.Text30}>
              <div className={styles.dsWrapper12}>
                <Heading data-size="lg" level={2} data-figma-id="316:21768" data-figma-name="Heading">Another scroll-stopper</Heading>
              </div>
              <div className={styles.dsWrapper12}>
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
