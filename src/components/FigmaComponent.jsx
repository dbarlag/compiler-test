'use client';

import React from 'react';
import { Button, Card, CardBlock, CrossCorner, Donor, Footer, Header, Heading, Paragraph } from 'rk-designsystem';
import styles from './FigmaComponent.module.css';

export default function FigmaComponent() {
  const items1 = [
    {"text1":"Gi tid","text2":"Call out a feature, benefit, or value of your site that can stand on its own.","image1":"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7dea83cb-16fb-469a-abe8-7cb7abba99cb"},
    {"text1":"Gi penger","text2":"Call out a feature, benefit, or value of your site that can stand on its own.","image1":"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce164b3a-6e14-4f45-859f-9fb5d7762831"},
    {"text1":"Gi stemmen din","text2":"Call out a feature, benefit, or value of your site that can stand on its own.","image1":"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7789304d-faa9-42ee-bde1-6c3b4e5b9e52"}
  ];
  const items2 = [
    {"text1":"2.7M+","text2":"I donasjer","image1":"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7d95d19-57f7-4006-a981-7cd9c7058b0f"},
    {"text1":"40 000+","text2":"Frivillige","image1":"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d6c7972-dc09-4cae-b623-666f5ef1090f"},
    {"text1":"18 ","text2":"Distrikter","image1":"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d56a65d-ef4c-48ee-ae07-4b1a571e5451"},
    {"text1":"100","text2":"Lokalforeninger","image1":"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40fb6298-0369-4905-ae43-85a003bea2d3"}
  ];

  return (
    <div data-figma-id="316:21605" className={styles.redcrossnohome37}>
      <div className={styles.wrapper1}>
        <Header data-color="primary" extensionColor="tinted" showHeaderExtension showThemeToggle showModeToggle showLanguageSwitch showMenuButton showCta ctaLabel="Støtt oss" />
      </div>
      <section data-figma-id="646:22899" className={styles.Hero7}>
        <div className={styles.wrapper2}>
          <Donor amounts={[{"value":220,"label":"220 kr"},{"value":345,"label":"345 kr"},{"value":660,"label":"660 kr"}]} defaultAmount={345} oneTimeLabel="En gang" monthlyLabel="Hver måned" customAmountPlaceholder="Valgfritt beløp" amountLabel="Velg ønsket beløp:" impactMessage="En gave på {amount} bidrar til lorem ipsum dolor sit amet" vippsButtonLabel="Gi med" avtalegiroLabel="Gi med Kort" avtalegiroHref="#" currencySuffix="kr" data-color="primary" showVippsButton showAvtalegiroLink showImpactMessage />
        </div>
        <section data-figma-id="657:22053" className={styles.GirlSection6}>
          <img data-figma-id="646:22322" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c960370c-6be3-4f98-b9b9-3a3214c3cdb0" alt="Redcross-graphics-1" className={styles.Redcrossgraphics13} />
          <img data-figma-id="647:22901" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/891689f6-5613-4aa5-843f-f64e208bde1d" alt="girl" className={styles.girl4} />
          <img data-figma-id="646:22327" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3651776a-f6e9-4330-a089-e7fad1029a1c" alt="Redcross-graphics-1" className={styles.Redcrossgraphics15} />
        </section>
      </section>
      <section data-figma-id="316:21652" className={styles.Section2CallToAction10}>
        <div className={styles.dsWrapper8}>
          <Heading data-size="xl" level={1} data-figma-id="316:21653">Du kan hjelpe lorem ipsum</Heading>
        </div>
        <div className={styles.dsWrapper8}>
          <Paragraph data-size="md" data-figma-id="316:21654">Støtt vanskeligstilte barn i Vestfold med en donasjon. Hjelp oss å gi dem en lysere fremtid, full av muligheter og glede. Din gave, uansett størrelse, utgjør en stor forskjell. Sammen kan vi skape varige positive endringer i deres liv og lokalsamfunn. Bli med oss i dag og gi håp til de som trenger det mest.</Paragraph>
        </div>
        <div data-figma-id="316:21655" className={styles.Buttons9}>
          <Button variant="primary" data-color="primary" data-figma-id="316:21656">Call to action</Button>
          <Button variant="secondary" data-color="primary" data-figma-id="316:21657">Secondary</Button>
        </div>
      </section>
      <section data-figma-id="316:21658" className={styles.Section3Sttte19}>
        <div className={styles.dsWrapper11}>
          <CrossCorner position="top-right" data-size="lg" size="lg" data-figma-id="316:21659" />
        </div>
        <div className={styles.dsWrapper12}>
          <Heading data-size="xl" level={1} data-figma-id="316:21663">Vi trenger din støtte</Heading>
        </div>
        <article data-figma-id="316:21664" className={styles.FeatureCards117}>
          {items1.map((item, index) => (
            <div key={index} className={styles.dsWrapper16}>
              <Card data-color="neutral" className={styles.dsStyle15} data-figma-id="316:21665">
                <img data-figma-id="I316:21665;25374:15544" src={item.image1} alt=".Aspect Ratio Spacer" className={styles.AspectRatioSpacer13} />
                <CardBlock>
                  <div className={styles.dsWrapper14}>
                    <Heading data-size="md" level={3} data-figma-id="I316:21665;24532:5015;25374:5944;25374:5907">{item.text1}</Heading>
                  </div>
                  <div className={styles.dsWrapper12}>
                    <Paragraph data-size="md" data-figma-id="I316:21665;24532:5015;24384:25357;25374:9703">{item.text2}</Paragraph>
                  </div>
                </CardBlock>
              </Card>
            </div>
          ))}
        </article>
        <div className={styles.dsWrapper18}>
          <CrossCorner position="bottom-left" data-size="lg" size="lg" data-figma-id="316:21668" />
        </div>
      </section>
      <section data-figma-id="316:21672" className={styles.Section4Stats29}>
        <div data-figma-id="316:21691" className={styles.StatsIconNumber24}>
          {items2.map((item, index) => (
            <div key={index} data-figma-id="316:21692" className={styles.x23}>
              <img data-figma-id="316:21693" src={item.image1} alt="SackKroner" className={styles.SackKroner20} />
              <h1 data-figma-id="316:21694" className={styles.Heading21}>{item.text1}</h1>
              <h4 data-figma-id="316:21695" className={styles.Heading22}>{item.text2}</h4>
            </div>
          ))}
        </div>
        <div data-figma-id="316:21708" className={styles.texts28}>
          <h4 data-figma-id="316:21710" className={styles.Heading25}>Vi avdekker og hindrer nød</h4>
          <img data-figma-id="316:21724" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ab45039-3620-4ac8-a194-daa1cc330d84" alt="Line" className={styles.Line126} />
          <h4 data-figma-id="316:21726" className={styles.Heading27}>Vi gir rask respons og lindrer når krisen oppstår</h4>
          <img data-figma-id="316:21740" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5b14e75-1947-4574-aeef-2e5817c79a24" alt="Line" className={styles.Line126} />
          <h4 data-figma-id="316:21742" className={styles.Heading25}>Vi avdekker og hindrer nød</h4>
        </div>
      </section>
      <section data-figma-id="316:21756" className={styles.Section5Textphoto36}>
        <div data-figma-id="316:21757" className={styles.Row133}>
          <div data-figma-id="316:21758" className={styles.Content31}>
            <div data-figma-id="316:21759" className={styles.Text30}>
              <div className={styles.dsWrapper12}>
                <Heading data-size="lg" level={2} data-figma-id="316:21760">A really compelling headline</Heading>
              </div>
              <div className={styles.dsWrapper12}>
                <Paragraph data-size="md" variant="long" data-figma-id="316:21761">Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.</Paragraph>
              </div>
            </div>
            <Button variant="primary" data-color="primary" data-figma-id="316:21762">A button</Button>
          </div>
          <img data-figma-id="316:21763" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0127c989-d55f-435b-9776-d0e5b9b80d40" alt="" className={styles.Image32} />
        </div>
        <div data-figma-id="316:21764" className={styles.Row235}>
          <img data-figma-id="316:21765" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c162a067-c63e-46e3-a350-522d6b24d184" alt="" className={styles.Image34} />
          <div data-figma-id="316:21766" className={styles.Content31}>
            <div data-figma-id="316:21767" className={styles.Text30}>
              <div className={styles.dsWrapper12}>
                <Heading data-size="lg" level={2} data-figma-id="316:21768">Another scroll-stopper</Heading>
              </div>
              <div className={styles.dsWrapper12}>
                <Paragraph data-size="md" variant="long" data-figma-id="316:21769">When there’s one great thing, there’s usually another. What’s your second thing to showcase?</Paragraph>
              </div>
            </div>
            <Button variant="primary" data-color="primary" data-figma-id="316:21770">Another button</Button>
          </div>
        </div>
      </section>
      <div className={styles.wrapper1}>
        <Footer variant="default" hideNewsletter data-color="neutral" shortcutsLinks={[{"label":"Tilbudene","href":"#"},{"label":"Bli frivillig","href":"#"},{"label":"Vårt arbeid","href":"#"},{"label":"Om Røde Kors","href":"#"},{"label":"Støtt arbeidet","href":"#"},{"label":"Kontakt oss","href":"#"}]} legalLinks={[{"label":"Personvern","href":"#"},{"label":"For presse","href":"#"},{"label":"Regler for innkjøp","href":"#"},{"label":"Varsling/Misconduct","href":"#"}]} linksLinks={[{"label":"Tilbudene","href":"#"},{"label":"Bli frivillig","href":"#"},{"label":"Vårt arbeid","href":"#"},{"label":"Om Røde Kors","href":"#"},{"label":"Støtt arbeidet","href":"#"},{"label":"Kontakt oss","href":"#"}]} visitingAddress={["Snarveier"]} organizationNumber="XXX XXX XXX" email="post@redcross.no" whiteSectionSlot="SLOT" showPrimaryLogo />
      </div>
    </div>
  );
}
