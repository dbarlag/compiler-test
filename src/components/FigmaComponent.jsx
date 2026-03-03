'use client';

import React from 'react';
import { Button, Card, CardBlock, CrossCorner, Donor, Footer, Header, Heading, Paragraph } from 'rk-designsystem';
import styles from './FigmaComponent.module.css';

export default function FigmaComponent() {
  const items1 = [
    {"text1":"Gi tid","text2":"Call out a feature, benefit, or value of your site that can stand on its own.","image1":"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf5147b7-2dbb-4c7e-8ce4-c7c8ebb94a2e"},
    {"text1":"Gi penger","text2":"Call out a feature, benefit, or value of your site that can stand on its own.","image1":"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/93b3d081-5105-488c-aa28-97d508975b99"},
    {"text1":"Gi stemmen din","text2":"Call out a feature, benefit, or value of your site that can stand on its own.","image1":"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1508f9bf-2759-4ace-b44b-5a30abf4fae3"}
  ];
  const items2 = [
    {"text1":"2.7M+","text2":"I donasjer","image1":"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07ed8aca-95b8-45f4-97c6-550edfbc9456"},
    {"text1":"40 000+","text2":"Frivillige","image1":"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d5c61d9-f7b1-4b96-b6d9-4cfcfd6579bd"},
    {"text1":"18 ","text2":"Distrikter","image1":"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09360fab-6f86-4d21-ac93-3bb81a1b97c5"},
    {"text1":"100","text2":"Lokalforeninger","image1":"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26cd9860-2274-4d42-9405-7799ce440add"}
  ];

  return (
    <div className={styles.redcrossnohome36}>
      <div className={styles.wrapper1}>
        <Header data-color="primary" extensionColor="tinted" showHeaderExtension showThemeToggle showModeToggle showLanguageSwitch showMenuButton showCta ctaLabel="Støtt oss" />
      </div>
      <section className={styles.Hero7}>
        <div className={styles.wrapper2}>
          <Donor amounts={[{"value":220,"label":"220 kr"},{"value":345,"label":"345 kr"},{"value":660,"label":"660 kr"}]} defaultAmount={345} oneTimeLabel="En gang" monthlyLabel="Hver måned" customAmountPlaceholder="Valgfritt beløp" amountLabel="Velg ønsket beløp:" impactMessage="En gave på {amount} bidrar til lorem ipsum dolor sit amet" vippsButtonLabel="Gi med" avtalegiroLabel="Gi med Kort" avtalegiroHref="#" currencySuffix="kr" data-color="primary" showVippsButton showAvtalegiroLink showImpactMessage />
        </div>
        <section className={styles.GirlSection6}>
          <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4dac5edb-da73-4036-8cd1-e9286363b893" alt="Redcross-graphics-1" className={styles.Redcrossgraphics13} />
          <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/340368f0-53a9-45fa-860a-64bee443305f" alt="girl" className={styles.girl4} />
          <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7645bfb-0979-4813-94cd-27e7d1f626b6" alt="Redcross-graphics-1" className={styles.Redcrossgraphics15} />
        </section>
      </section>
      <section className={styles.Section2CallToAction10}>
        <div className={styles.dsWrapper8}>
          <Heading data-size="xl" level={1}>Du kan hjelpe lorem ipsum</Heading>
        </div>
        <div className={styles.dsWrapper8}>
          <Paragraph data-size="md">Støtt vanskeligstilte barn i Vestfold med en donasjon. Hjelp oss å gi dem en lysere fremtid, full av muligheter og glede. Din gave, uansett størrelse, utgjør en stor forskjell. Sammen kan vi skape varige positive endringer i deres liv og lokalsamfunn. Bli med oss i dag og gi håp til de som trenger det mest.</Paragraph>
        </div>
        <div className={styles.Buttons9}>
          <Button variant="primary" data-color="primary">Call to action</Button>
          <Button variant="secondary" data-color="primary">Secondary</Button>
        </div>
      </section>
      <section className={styles.Section3Sttte18}>
        <div className={styles.dsWrapper11}>
          <CrossCorner position="top-right" data-size="lg" size="lg" />
        </div>
        <Heading data-size="xl" level={1}>Vi trenger din støtte</Heading>
        <article className={styles.FeatureCards116}>
          {items1.map((item, index) => (
            <div key={index} className={styles.dsWrapper15}>
              <Card data-color="neutral" className={styles.dsStyle14}>
                <img src={item.image1} alt=".Aspect Ratio Spacer" className={styles.AspectRatioSpacer12} />
                <CardBlock>
                  <div className={styles.dsWrapper13}>
                    <Heading data-size="md" level={3}>{item.text1}</Heading>
                  </div>
                  <Paragraph data-size="md">{item.text2}</Paragraph>
                </CardBlock>
              </Card>
            </div>
          ))}
        </article>
        <div className={styles.dsWrapper17}>
          <CrossCorner position="bottom-left" data-size="lg" size="lg" />
        </div>
      </section>
      <section className={styles.Section4Stats28}>
        <div className={styles.StatsIconNumber23}>
          {items2.map((item, index) => (
            <div key={index} className={styles.x22}>
              <img src={item.image1} alt="SackKroner" className={styles.SackKroner19} />
              <h1 className={styles.Heading20}>{item.text1}</h1>
              <h4 className={styles.Heading21}>{item.text2}</h4>
            </div>
          ))}
        </div>
        <div className={styles.texts27}>
          <h4 className={styles.Heading24}>Vi avdekker og hindrer nød</h4>
          <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7f25da4-ed6c-48b8-8163-2240c831eba9" alt="Line" className={styles.Line125} />
          <h4 className={styles.Heading26}>Vi gir rask respons og lindrer når krisen oppstår</h4>
          <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/357453d5-0638-4d3a-8e67-c0a2513c205b" alt="Line" className={styles.Line125} />
          <h4 className={styles.Heading24}>Vi avdekker og hindrer nød</h4>
        </div>
      </section>
      <section className={styles.Section5Textphoto35}>
        <div className={styles.Row132}>
          <div className={styles.Content30}>
            <div className={styles.Text29}>
              <Heading data-size="lg" level={2}>A really compelling headline</Heading>
              <Paragraph data-size="md" variant="long">Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.</Paragraph>
            </div>
            <Button variant="primary" data-color="primary">A button</Button>
          </div>
          <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8a45b63-2056-4ee6-9e8a-0e540819c4d8" alt="" className={styles.Image31} />
        </div>
        <div className={styles.Row234}>
          <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5916d956-c19a-4041-91e1-7b68992e11b3" alt="" className={styles.Image33} />
          <div className={styles.Content30}>
            <div className={styles.Text29}>
              <Heading data-size="lg" level={2}>Another scroll-stopper</Heading>
              <Paragraph data-size="md" variant="long">When there’s one great thing, there’s usually another. What’s your second thing to showcase?</Paragraph>
            </div>
            <Button variant="primary" data-color="primary">Another button</Button>
          </div>
        </div>
      </section>
      <div className={styles.wrapper1}>
        <Footer variant="default" hideNewsletter data-color="neutral" shortcutsLinks={[{"label":"Tilbudene","href":"#"},{"label":"Bli frivillig","href":"#"},{"label":"Vårt arbeid","href":"#"},{"label":"Om Røde Kors","href":"#"},{"label":"Støtt arbeidet","href":"#"},{"label":"Kontakt oss","href":"#"}]} legalLinks={[{"label":"Personvern","href":"#"},{"label":"For presse","href":"#"},{"label":"Regler for innkjøp","href":"#"},{"label":"Varsling/Misconduct","href":"#"}]} linksLinks={[{"label":"Tilbudene","href":"#"},{"label":"Bli frivillig","href":"#"},{"label":"Vårt arbeid","href":"#"},{"label":"Om Røde Kors","href":"#"},{"label":"Støtt arbeidet","href":"#"},{"label":"Kontakt oss","href":"#"}]} visitingAddress={["Snarveier"]} organizationNumber="XXX XXX XXX" email="post@redcross.no" whiteSectionSlot="SLOT" showPrimaryLogo />
      </div>
    </div>
  );
}
