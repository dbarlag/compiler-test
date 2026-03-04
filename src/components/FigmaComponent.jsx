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
    <div data-figma-id="316:21605" className="redcrossnohome" style={{ width: "100%", maxWidth: "1440px", margin: "0 auto", height: "auto", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "var(--ds-color-primary-color-red-background-tinted)", overflow: "hidden" }}>
      <div className="wrapper" style={{ width: "100%", alignSelf: "stretch" }}>
        <Header data-color="primary" extensionColor="tinted" showHeaderExtension showThemeToggle showModeToggle showLanguageSwitch showMenuButton showCta ctaLabel="Støtt oss" />
      </div>
      <section data-figma-id="646:22899" className="hero" style={{ width: "100%", height: "auto", alignSelf: "stretch", display: "flex", flexDirection: "row", gap: "var(--ds-size-26)", justifyContent: "center", alignItems: "center", flexWrap: "wrap", boxSizing: "border-box", paddingLeft: "var(--ds-size-10)", paddingRight: "var(--ds-size-10)", paddingTop: "var(--ds-size-15)", overflow: "hidden", backgroundImage: "url(\"https://s3-alpha-sig.figma.com/img/a26e/b3b0/b66b32ee0293cca8d5d7bf926060588d?Expires=1773619200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=p46YCvWc8H4qHs-2xMxx3qIspcxAOv~YJk3YCjQaJIgG68kRGap27549SHKpz-ImbYY7w0IB51gE3RN3xWlL1Y0jqmEjthehOwvSw67ylBXHhAJOMo2VrEOiBcECq6r7DehEYP3gb9qzDStrPlz7P29sUTXMbIP07y6CAaFZAw9GXTTd7mNFwvi1Mgr2E3Z8yR0LuxSYgrq-OeVsQMzuX5RaMAZ2uXrv3P5m-s3UuAOywQlFHQLzY5nbzT1V3bQTQLd29s~42BFtAmvbll-QPHDSBfhzgJlFEjcH9UcDQk0zMNTH0FetBn-LL2x9IXpf6KfH~miXAEC3PO5IJe54iw__\")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="wrapper" style={{ width: "auto" }}>
          <Donor amounts={[{"value":220,"label":"220 kr"},{"value":345,"label":"345 kr"},{"value":660,"label":"660 kr"}]} defaultAmount={345} oneTimeLabel="En gang" monthlyLabel="Hver måned" customAmountPlaceholder="Valgfritt beløp" amountLabel="Velg ønsket beløp:" impactMessage="En gave på {amount} bidrar til lorem ipsum dolor sit amet" vippsButtonLabel="Gi med" avtalegiroLabel="Gi med Kort" avtalegiroHref="#" currencySuffix="kr" data-color="primary" showVippsButton showAvtalegiroLink showImpactMessage />
        </div>
        <section data-figma-id="657:22053" className="girl-section" style={{ width: "353px", maxWidth: "100%", height: "auto", display: "flex", flexDirection: "row", position: "relative", gap: "-33px", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
          <img data-figma-id="646:22322" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c960370c-6be3-4f98-b9b9-3a3214c3cdb0" alt="Redcross-graphics-1" className="redcross-graphics-1" style={{ position: "absolute", left: "0px", top: "332px", width: "68px", height: "68px", objectFit: "cover", display: "block", aspectRatio: "1.0000", maxWidth: "100%", flexShrink: 1, overflow: "hidden" }} />
          <img data-figma-id="647:22901" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/891689f6-5613-4aa5-843f-f64e208bde1d" alt="girl" className="girl" style={{ width: "230px", maxWidth: "100%", height: "577px", objectFit: "cover", display: "block", aspectRatio: "0.3986", flexShrink: 1, overflow: "hidden" }} />
          <img data-figma-id="646:22327" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3651776a-f6e9-4330-a089-e7fad1029a1c" alt="Redcross-graphics-1" className="redcross-graphics-1" style={{ position: "absolute", left: "285px", top: "0px", width: "68px", height: "68px", objectFit: "cover", display: "block", aspectRatio: "1.0000", maxWidth: "100%", flexShrink: 1, overflow: "hidden" }} />
        </section>
      </section>
      <section data-figma-id="316:21652" className="section2-call-to-action" style={{ width: "100%", height: "auto", alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "var(--ds-size-12)", justifyContent: "center", alignItems: "center", boxSizing: "border-box", paddingLeft: "var(--ds-size-30)", paddingRight: "var(--ds-size-30)", paddingTop: "var(--ds-size-15)", paddingBottom: "var(--ds-size-15)", backgroundColor: "var(--ds-color-info-surface-tinted)" }}>
        <div className="dswrapper" style={{ width: "100%", minWidth: "350px" }}>
          <Heading data-size="xl" level={1} data-figma-id="316:21653">Du kan hjelpe lorem ipsum</Heading>
        </div>
        <div className="dswrapper" style={{ width: "100%", minWidth: "350px" }}>
          <Paragraph data-size="md" data-figma-id="316:21654">Støtt vanskeligstilte barn i Vestfold med en donasjon. Hjelp oss å gi dem en lysere fremtid, full av muligheter og glede. Din gave, uansett størrelse, utgjør en stor forskjell. Sammen kan vi skape varige positive endringer i deres liv og lokalsamfunn. Bli med oss i dag og gi håp til de som trenger det mest.</Paragraph>
        </div>
        <div data-figma-id="316:21655" className="buttons" style={{ width: "100%", height: "auto", alignSelf: "stretch", display: "flex", flexDirection: "row", gap: "var(--ds-size-4)", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
          <Button variant="primary" data-color="primary" data-figma-id="316:21656">Call to action</Button>
          <Button variant="secondary" data-color="primary" data-figma-id="316:21657">Secondary</Button>
        </div>
      </section>
      <section data-figma-id="316:21658" className="section3-sttte" style={{ width: "100%", height: "auto", alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "var(--ds-size-8)", boxSizing: "border-box", paddingLeft: "var(--ds-size-15)", paddingRight: "var(--ds-size-15)", paddingTop: "var(--ds-size-15)", paddingBottom: "var(--ds-size-15)", backgroundColor: "var(--ds-color-neutral-background-default)" }}>
        <div className="dswrapper" style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
          <CrossCorner position="top-right" data-size="lg" size="lg" data-figma-id="316:21659" />
        </div>
        <div className="dswrapper" style={{ width: "100%" }}>
          <Heading data-size="xl" level={1} data-figma-id="316:21663">Vi trenger din støtte</Heading>
        </div>
        <article data-figma-id="316:21664" className="feature-cards-1" style={{ width: "100%", height: "auto", alignSelf: "stretch", display: "flex", flexDirection: "row", gap: "var(--ds-size-8)", justifyContent: "center", alignItems: "center", flexWrap: "wrap", backgroundColor: "var(--ds-color-neutral-background-default)" }}>
          {items1.map((item, index) => (
            <div key={index} className="dswrapper" style={{ width: "365px", maxWidth: "100%", minWidth: "300px" }}>
              <Card data-color="neutral" className="dsstyle" style={{ border: "none", boxShadow: "none", outline: "none", "--ds-border-width-default": "0px", "--ds-color-border-default": "transparent", "--ds-color-border-subtle": "transparent", "--ds-color-border-strong": "transparent", padding: 0, overflow: "hidden", backgroundColor: "transparent", backgroundImage: "none", "--ds-color-surface-default": "transparent", "--ds-color-surface-neutral-default": "transparent", "--ds-color-surface-neutral-subtle": "transparent", borderRadius: "8px" }} data-figma-id="316:21665">
                <img data-figma-id="I316:21665;25374:15544" src={item.image1} alt=".Aspect Ratio Spacer" className="aspect-ratio-spacer" style={{ width: "100%", height: "auto", alignSelf: "stretch", display: "block", flexDirection: "column", borderRadius: "var(--ds-border-radius-xl)", objectFit: "fill", objectPosition: "54% 49%", aspectRatio: "0.8000", maxWidth: "100%", flexShrink: 1, overflow: "hidden" }} />
                <CardBlock>
                  <div className="dswrapper" style={{ width: "100%", height: "100%", flexGrow: 1, flexShrink: 0, flexBasis: 0 }}>
                    <Heading data-size="md" level={3} data-figma-id="I316:21665;24532:5015;25374:5944;25374:5907">{item.text1}</Heading>
                  </div>
                  <div className="dswrapper" style={{ width: "100%" }}>
                    <Paragraph data-size="md" data-figma-id="I316:21665;24532:5015;24384:25357;25374:9703">{item.text2}</Paragraph>
                  </div>
                </CardBlock>
              </Card>
            </div>
          ))}
        </article>
        <div className="dswrapper" style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}>
          <CrossCorner position="bottom-left" data-size="lg" size="lg" data-figma-id="316:21668" />
        </div>
      </section>
      <section data-figma-id="316:21672" className="section4-stats" style={{ width: "100%", height: "auto", alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "var(--ds-size-12)", justifyContent: "center", alignItems: "center", boxSizing: "border-box", paddingLeft: "var(--ds-size-30)", paddingRight: "var(--ds-size-30)", paddingTop: "var(--ds-size-22)", paddingBottom: "var(--ds-size-22)", backgroundColor: "var(--ds-color-neutral-background-tinted)" }}>
        <div data-figma-id="316:21691" className="stats-icon-number" style={{ width: "100%", height: "auto", alignSelf: "stretch", display: "flex", flexDirection: "row", gap: "var(--ds-size-30)", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
          {items2.map((item, index) => (
            <div key={index} data-figma-id="316:21692" style={{ width: "auto", height: "auto", display: "flex", flexDirection: "column", gap: "2px", justifyContent: "center", alignItems: "center" }}>
              <img data-figma-id="316:21693" src={item.image1} alt="SackKroner" className="sackkroner" style={{ width: "72px", maxWidth: "100%", height: "72px", alignSelf: "center", objectFit: "cover", display: "block", aspectRatio: "1.0000", flexShrink: 1, overflow: "hidden" }} />
              <h1 data-figma-id="316:21694" className="heading" style={{ whiteSpace: "pre-line", overflowWrap: "break-word", width: "auto", color: "var(--ds-color-primary-color-red-border-strong)", fontFamily: "'Source Sans Pro', sans-serif", fontSize: "48px", fontWeight: 700, lineHeight: "62.39999771118164px", letterSpacing: "-0.48px", textAlign: "center", margin: 0 }}>{item.text1}</h1>
              <h4 data-figma-id="316:21695" className="heading" style={{ whiteSpace: "pre-line", overflowWrap: "break-word", width: "auto", color: "var(--ds-color-primary-color-red-border-strong)", fontFamily: "'Source Sans Pro', sans-serif", fontSize: "18px", fontWeight: 400, lineHeight: "23.399999618530273px", letterSpacing: "0.09px", textAlign: "center", margin: 0 }}>{item.text2}</h4>
            </div>
          ))}
        </div>
        <div data-figma-id="316:21708" className="texts" style={{ width: "100%", height: "auto", alignSelf: "stretch", minWidth: "350px", display: "flex", flexDirection: "row", gap: "var(--ds-size-6)", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
          <h4 data-figma-id="316:21710" className="heading" style={{ whiteSpace: "pre-line", overflowWrap: "break-word", width: "auto", color: "var(--ds-color-primary-color-red-border-strong)", fontFamily: "'Source Sans Pro', sans-serif", fontSize: "20px", fontWeight: 600, lineHeight: "26px", letterSpacing: "-0.2px", textAlign: "center", margin: 0 }}>Vi avdekker og hindrer nød</h4>
          <img data-figma-id="316:21724" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ab45039-3620-4ac8-a194-daa1cc330d84" alt="Line" className="line-1" style={{ width: "0px", maxWidth: "100%", height: "84px", objectFit: "cover", display: "block", aspectRatio: "0.0000", flexShrink: 1, overflow: "hidden" }} />
          <h4 data-figma-id="316:21726" className="heading" style={{ whiteSpace: "pre-line", overflowWrap: "break-word", width: "auto", minWidth: "350px", color: "var(--ds-color-primary-color-red-border-strong)", fontFamily: "'Source Sans Pro', sans-serif", fontSize: "20px", fontWeight: 600, lineHeight: "26px", letterSpacing: "-0.2px", textAlign: "center", margin: 0 }}>Vi gir rask respons og lindrer når krisen oppstår</h4>
          <img data-figma-id="316:21740" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5b14e75-1947-4574-aeef-2e5817c79a24" alt="Line" className="line-2" style={{ width: "0px", maxWidth: "100%", height: "84px", objectFit: "cover", display: "block", aspectRatio: "0.0000", flexShrink: 1, overflow: "hidden" }} />
          <h4 data-figma-id="316:21742" className="heading" style={{ whiteSpace: "pre-line", overflowWrap: "break-word", width: "auto", color: "var(--ds-color-primary-color-red-border-strong)", fontFamily: "'Source Sans Pro', sans-serif", fontSize: "20px", fontWeight: 600, lineHeight: "26px", letterSpacing: "-0.2px", textAlign: "center", margin: 0 }}>Vi avdekker og hindrer nød</h4>
        </div>
      </section>
      <section data-figma-id="316:21756" className="section5-text-photo" style={{ width: "100%", height: "auto", alignSelf: "stretch", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "var(--ds-color-primary-color-red-background-tinted)", borderRadius: "var(--ds-border-radius-xl)" }}>
        <div data-figma-id="316:21757" className="row-1" style={{ width: "100%", height: "auto", alignSelf: "stretch", display: "flex", flexDirection: "row", gap: "64px", justifyContent: "center", alignItems: "center", flexWrap: "wrap", boxSizing: "border-box", paddingLeft: "var(--ds-size-15)", paddingRight: "var(--ds-size-15)", paddingTop: "var(--ds-size-30)", paddingBottom: "var(--ds-size-10)" }}>
          <div data-figma-id="316:21758" className="content" style={{ width: "100%", height: "auto", flexGrow: 1, flexShrink: 0, flexBasis: 0, minWidth: "350px", display: "flex", flexDirection: "column", gap: "var(--ds-size-12)", justifyContent: "center" }}>
            <div data-figma-id="316:21759" className="text" style={{ width: "100%", height: "auto", alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "var(--ds-size-6)", alignItems: "center" }}>
              <div className="dswrapper" style={{ width: "100%" }}>
                <Heading data-size="lg" level={2} data-figma-id="316:21760">A really compelling headline</Heading>
              </div>
              <div className="dswrapper" style={{ width: "100%" }}>
                <Paragraph data-size="md" variant="long" data-figma-id="316:21761">Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.</Paragraph>
              </div>
            </div>
            <Button variant="primary" data-color="primary" data-figma-id="316:21762">A button</Button>
          </div>
          <img data-figma-id="316:21763" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0127c989-d55f-435b-9776-d0e5b9b80d40" alt="" className="image" style={{ width: "628px", maxWidth: "100%", height: "504px", minWidth: "350px", display: "block", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: "var(--ds-border-radius-xl)", overflow: "hidden", objectFit: "cover", aspectRatio: "1.2460", flexShrink: 1 }} />
        </div>
        <div data-figma-id="316:21764" className="row-2" style={{ width: "100%", height: "auto", alignSelf: "stretch", display: "flex", flexDirection: "row", gap: "64px", justifyContent: "center", alignItems: "center", flexWrap: "wrap", boxSizing: "border-box", paddingLeft: "var(--ds-size-15)", paddingRight: "var(--ds-size-15)", paddingTop: "var(--ds-size-10)", paddingBottom: "var(--ds-size-30)" }}>
          <img data-figma-id="316:21765" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c162a067-c63e-46e3-a350-522d6b24d184" alt="" className="image" style={{ width: "628px", maxWidth: "100%", height: "auto", minWidth: "350px", display: "block", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: "var(--ds-border-radius-xl)", overflow: "hidden", objectFit: "cover", aspectRatio: "1.2500", flexShrink: 1 }} />
          <div data-figma-id="316:21766" className="content" style={{ width: "100%", height: "auto", flexGrow: 1, flexShrink: 0, flexBasis: 0, minWidth: "350px", display: "flex", flexDirection: "column", gap: "var(--ds-size-12)", justifyContent: "center" }}>
            <div data-figma-id="316:21767" className="text" style={{ width: "100%", height: "auto", alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "var(--ds-size-6)", alignItems: "center" }}>
              <div className="dswrapper" style={{ width: "100%" }}>
                <Heading data-size="lg" level={2} data-figma-id="316:21768">Another scroll-stopper</Heading>
              </div>
              <div className="dswrapper" style={{ width: "100%" }}>
                <Paragraph data-size="md" variant="long" data-figma-id="316:21769">When there’s one great thing, there’s usually another. What’s your second thing to showcase?</Paragraph>
              </div>
            </div>
            <Button variant="primary" data-color="primary" data-figma-id="316:21770">Another button</Button>
          </div>
        </div>
      </section>
      <div className="wrapper" style={{ width: "100%", alignSelf: "stretch" }}>
        <Footer variant="default" hideNewsletter data-color="neutral" shortcutsLinks={[{"label":"Tilbudene","href":"#"},{"label":"Bli frivillig","href":"#"},{"label":"Vårt arbeid","href":"#"},{"label":"Om Røde Kors","href":"#"},{"label":"Støtt arbeidet","href":"#"},{"label":"Kontakt oss","href":"#"}]} legalLinks={[{"label":"Personvern","href":"#"},{"label":"For presse","href":"#"},{"label":"Regler for innkjøp","href":"#"},{"label":"Varsling/Misconduct","href":"#"}]} linksLinks={[{"label":"Tilbudene","href":"#"},{"label":"Bli frivillig","href":"#"},{"label":"Vårt arbeid","href":"#"},{"label":"Om Røde Kors","href":"#"},{"label":"Støtt arbeidet","href":"#"},{"label":"Kontakt oss","href":"#"}]} visitingAddress={["Snarveier"]} organizationNumber="XXX XXX XXX" email="post@redcross.no" whiteSectionSlot="SLOT" showPrimaryLogo />
      </div>
    </div>
  );
}
