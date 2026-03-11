'use client';

import { useState, useEffect } from 'react';
import { Button, Card, CardBlock, CrossCorner, Donor, Footer, Header, Heading, Paragraph } from 'rk-designsystem';
import repeatData from './FigmaComponent.data.json';

export default function FigmaComponent() {
  const repeatItems1 = repeatData.repeatItems1;
  const repeatItems2 = repeatData.repeatItems2;

  const [supabaseData, setSupabaseData] = useState(null);

  useEffect(() => {
    fetch('https://urenlajedqewasikgnko.supabase.co/rest/v1/news', { method: 'GET', headers: {"apikey":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyZW5sYWplZHFld2FzaWtnbmtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyMjM0ODUsImV4cCI6MjA4ODc5OTQ4NX0.JCBGFyTtsIzuCQmsvzStM5Yympcn5_rbIFtNDRSBNeg"} })
      .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
      .then(data => setSupabaseData(data))
      .catch(() => {});
  }, []);

  function showHelloWorld() {
    alert('Hello World!');
  }

  const [title21Data, setTitle21Data] = useState(null);

  const [titleData, setTitleData] = useState(null);

  return (
    <div data-figma-id="316:21605" data-figma-name="redcross.no/home" className="redcrossnohome" style={{ width: "100%", maxWidth: "1440px", margin: "0 auto", height: "auto", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "var(--ds-color-primary-color-red-background-tinted)", overflow: "hidden" }}>
      <div className="wrapper" style={{ width: "100%", alignSelf: "stretch" }}>
        <Header data-color="primary" extensionColor="tinted" showHeaderExtension showThemeToggle showModeToggle showLanguageSwitch showMenuButton showCta ctaLabel="Støtt oss" />
      </div>
      <section data-figma-id="646:22899" data-figma-name="Hero" className="hero" style={{ width: "100%", height: "auto", alignSelf: "stretch", display: "flex", flexDirection: "row", gap: "var(--ds-size-26)", justifyContent: "center", alignItems: "center", flexWrap: "wrap", boxSizing: "border-box", paddingLeft: "var(--ds-size-10)", paddingRight: "var(--ds-size-10)", paddingTop: "var(--ds-size-15)", overflow: "hidden", backgroundImage: "url(\"https://s3-alpha-sig.figma.com/img/a26e/b3b0/b66b32ee0293cca8d5d7bf926060588d?Expires=1774224000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rP4PKkfUd4XP43hKuK-9w01waMfGBbwlTgF93cHJclwCgViD3h7wVe0DXdrWua5Zeizcc6R1fV4YKWC-r4MOcbvPHSWP7qCnapXw7RxMt7oM3c63fj6pAA50iqP9yhodzsGqCOlY6YUC3sTmjI-Izg85dIs0QKt8dEKzQ1ikNcVSyCq6I1eKdsQdREYeyGr~vFej61pZXl-WkhLwV~QAs6ZFT4deeHZQuTLfqNyNd~5-Z8kzASdg1DFQKcgPg-NfXLRFL41uDSsk8xsVBIVZRCi2jamnqCL3p9xNXt-jVtpKvxSAtyPaGkuA9ggF8s6JTxaG9plV9QsQkmV1okPbpw__\")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="wrapper" style={{ width: "auto" }}>
          <Donor amounts={[{"value":220,"label":"220 kr"},{"value":345,"label":"345 kr"},{"value":660,"label":"660 kr"}]} defaultAmount={345} oneTimeLabel="En gang" monthlyLabel="Hver måned" customAmountPlaceholder="Valgfritt beløp" amountLabel="Velg ønsket beløp:" impactMessage="En gave på {amount} bidrar til lorem ipsum dolor sit amet" vippsButtonLabel="Gi med" avtalegiroLabel="Gi med Kort" avtalegiroHref="#" currencySuffix="kr" data-color="primary" showVippsButton showAvtalegiroLink showImpactMessage />
        </div>
        <section data-figma-id="657:22053" data-figma-name="Girl section" className="girl-section" style={{ width: "353px", maxWidth: "100%", height: "auto", display: "flex", flexDirection: "row", position: "relative", gap: "-33px", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
          <img data-figma-id="646:22322" data-figma-name="Redcross-graphics-1" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c7f6b03a-2675-4975-8fe9-979818d1bffc" alt="Redcross-graphics-1" className="redcross-graphics-1" style={{ position: "absolute", left: "0px", top: "332px", width: "68px", height: "68px", objectFit: "cover", display: "block", aspectRatio: "1.0000", maxWidth: "100%", flexShrink: 1, overflow: "hidden" }} />
          <img data-figma-id="647:22901" data-figma-name="girl" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98113cf9-faaf-44ed-a9d4-3f43d816e320" alt="girl" className="girl" style={{ width: "230px", maxWidth: "100%", height: "577px", objectFit: "cover", display: "block", aspectRatio: "0.3986", flexShrink: 1, overflow: "hidden" }} />
          <img data-figma-id="646:22327" data-figma-name="Redcross-graphics-1" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3ee69ff-8c39-4a06-b849-eb3cdf110adf" alt="Redcross-graphics-1" className="redcross-graphics-1" style={{ position: "absolute", left: "285px", top: "0px", width: "68px", height: "68px", objectFit: "cover", display: "block", aspectRatio: "1.0000", maxWidth: "100%", flexShrink: 1, overflow: "hidden" }} />
        </section>
      </section>
      <section data-figma-id="316:21652" data-figma-name="Section2: Call to action" className="section2-call-to-action" style={{ width: "100%", height: "auto", alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "var(--ds-size-12)", justifyContent: "center", alignItems: "center", boxSizing: "border-box", paddingLeft: "var(--ds-size-30)", paddingRight: "var(--ds-size-30)", paddingTop: "var(--ds-size-15)", paddingBottom: "var(--ds-size-15)", backgroundColor: "var(--ds-color-info-surface-tinted)" }}>
        <div className="dswrapper" style={{ width: "100%", minWidth: "350px", textAlign: "center" }}>
          <Heading data-size="xl" level={1} data-figma-id="316:21653" data-figma-name="Heading">{supabaseData?.[1]?.headline ?? ''}</Heading>
        </div>
        <div className="dswrapper" style={{ width: "100%", minWidth: "350px", textAlign: "left" }}>
          <Paragraph data-size="md" data-figma-id="316:21654" data-figma-name="Body">{supabaseData?.[1]?.summary ?? ''}</Paragraph>
        </div>
        <div data-figma-id="316:21655" data-figma-name="Buttons" className="buttons" style={{ width: "100%", height: "auto", alignSelf: "stretch", display: "flex", flexDirection: "row", gap: "var(--ds-size-4)", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
          <div className="dswrapper" style={{ height: "48px", width: "fit-content" }}>
            <Button variant="secondary" data-color="primary" data-figma-id="316:21657" data-figma-name="Button">Secondary</Button>
          </div>
          <div className="dswrapper" style={{ height: "48px", width: "fit-content" }}>
            <Button variant="primary" data-color="primary" data-figma-id="316:21656" data-figma-name="Button" onClick={showHelloWorld}>Call to action</Button>
          </div>
        </div>
      </section>
      <section data-figma-id="316:21658" data-figma-name="Section3: støtte" className="section3-sttte" style={{ width: "100%", height: "auto", alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "var(--ds-size-8)", boxSizing: "border-box", paddingLeft: "var(--ds-size-15)", paddingRight: "var(--ds-size-15)", paddingTop: "var(--ds-size-15)", paddingBottom: "var(--ds-size-15)", backgroundColor: "var(--ds-color-neutral-background-default)" }}>
        <div className="dswrapper" style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
          <CrossCorner position="top-right" data-size="lg" size="lg" data-figma-id="316:21659" data-figma-name="arrow" />
        </div>
        <div className="dswrapper" style={{ width: "100%", textAlign: "left" }}>
          <Heading data-size="xl" level={1} data-figma-id="316:21663" data-figma-name="Heading">Vi trenger din støtte</Heading>
        </div>
        <article data-figma-id="316:21664" data-figma-name="Feature cards 1" className="feature-cards-1" style={{ width: "100%", height: "auto", alignSelf: "stretch", display: "flex", flexDirection: "row", gap: "var(--ds-size-8)", justifyContent: "center", alignItems: "center", flexWrap: "wrap", backgroundColor: "var(--ds-color-neutral-background-default)" }}>
          {repeatItems1.map((item, index) => (
            <div key={index} className="dswrapper" style={{ width: "365px", maxWidth: "100%", minWidth: "300px" }}>
              <Card data-color="neutral" className="dsstyle" style={{ border: "none", boxShadow: "none", outline: "none", "--ds-border-width-default": "0px", "--ds-color-border-default": "transparent", "--ds-color-border-subtle": "transparent", "--ds-color-border-strong": "transparent", padding: 0, overflow: "hidden", backgroundColor: "transparent", backgroundImage: "none", "--ds-color-surface-default": "transparent", "--ds-color-surface-neutral-default": "transparent", "--ds-color-surface-neutral-subtle": "transparent", borderRadius: "8px" }} data-figma-id="316:21665" data-figma-name="Card">
                <img data-figma-id="I316:21665;25374:15544" data-figma-name=".Aspect Ratio Spacer" src={item.image1} alt=".Aspect Ratio Spacer" className="aspect-ratio-spacer" style={{ width: "100%", height: "auto", alignSelf: "stretch", display: "block", flexDirection: "column", borderRadius: "var(--ds-border-radius-xl)", objectFit: "fill", objectPosition: "54% 49%", aspectRatio: "0.8000", maxWidth: "100%", flexShrink: 1, overflow: "hidden" }} />
                <CardBlock>
                  <div className="dswrapper" style={{ width: "100%", height: "100%", flexGrow: 1, flexShrink: 0, flexBasis: 0, textAlign: "center" }}>
                    <Heading data-size="md" level={3} data-figma-id="I316:21665;24532:5015;25374:5944;25374:5907" data-figma-name="Heading">{item.text1}</Heading>
                  </div>
                  <div className="dswrapper" style={{ width: "100%", textAlign: "center" }}>
                    <Paragraph data-size="md" data-figma-id="I316:21665;24532:5015;24384:25357;25374:9703" data-figma-name="Body">{item.text2}</Paragraph>
                  </div>
                </CardBlock>
              </Card>
            </div>
          ))}
        </article>
        <div className="dswrapper" style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}>
          <CrossCorner position="bottom-left" data-size="lg" size="lg" data-figma-id="316:21668" data-figma-name="Arrow" />
        </div>
      </section>
      <section data-figma-id="316:21672" data-figma-name="Section4: stats" className="section4-stats" style={{ width: "100%", height: "auto", alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "var(--ds-size-12)", justifyContent: "center", alignItems: "center", boxSizing: "border-box", paddingLeft: "var(--ds-size-30)", paddingRight: "var(--ds-size-30)", paddingTop: "var(--ds-size-22)", paddingBottom: "var(--ds-size-22)", backgroundColor: "var(--ds-color-neutral-background-tinted)" }}>
        <div data-figma-id="316:21691" data-figma-name="Stats icon + number" className="stats-icon-number" style={{ width: "100%", height: "auto", alignSelf: "stretch", display: "flex", flexDirection: "row", gap: "var(--ds-size-30)", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
          {repeatItems2.map((item, index) => (
            <div key={index} data-figma-id="316:21692" data-figma-name="1" style={{ width: "auto", height: "auto", display: "flex", flexDirection: "column", gap: "2px", justifyContent: "center", alignItems: "center" }}>
              <img data-figma-id="316:21693" data-figma-name="SackKroner" src={item.image1} alt="SackKroner" className="sackkroner" style={{ width: "72px", maxWidth: "100%", height: "72px", alignSelf: "center", objectFit: "cover", display: "block", aspectRatio: "1.0000", flexShrink: 1, overflow: "hidden" }} />
              <h1 data-figma-id="316:21694" data-figma-name="Heading" className="heading" style={{ whiteSpace: "pre-line", overflowWrap: "break-word", width: "auto", color: "var(--ds-color-primary-color-red-border-strong)", fontFamily: "'Source Sans Pro', sans-serif", fontSize: "48px", fontWeight: 700, lineHeight: "62.39999771118164px", letterSpacing: "-0.48px", textAlign: "center", margin: 0 }}>{item.text1}</h1>
              <h4 data-figma-id="316:21695" data-figma-name="Heading" className="heading" style={{ whiteSpace: "pre-line", overflowWrap: "break-word", width: "auto", color: "var(--ds-color-primary-color-red-border-strong)", fontFamily: "'Source Sans Pro', sans-serif", fontSize: "18px", fontWeight: 400, lineHeight: "23.399999618530273px", letterSpacing: "0.09px", textAlign: "center", margin: 0 }}>{item.text2}</h4>
            </div>
          ))}
        </div>
        <div data-figma-id="316:21708" data-figma-name="texts" className="texts" style={{ width: "100%", height: "auto", alignSelf: "stretch", minWidth: "350px", display: "flex", flexDirection: "row", gap: "var(--ds-size-6)", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
          <h4 data-figma-id="316:21710" data-figma-name="Heading" className="heading" style={{ whiteSpace: "pre-line", overflowWrap: "break-word", width: "auto", color: "var(--ds-color-primary-color-red-border-strong)", fontFamily: "'Source Sans Pro', sans-serif", fontSize: "20px", fontWeight: 600, lineHeight: "26px", letterSpacing: "-0.2px", textAlign: "center", margin: 0 }}>Vi avdekker og hindrer nød</h4>
          <img data-figma-id="316:21724" data-figma-name="Line 1" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/faaa028c-3691-4795-b6a6-407865392e29" alt="Line" className="line-1" style={{ width: "0px", maxWidth: "100%", height: "84px", objectFit: "cover", display: "block", aspectRatio: "0.0000", flexShrink: 1, overflow: "hidden" }} />
          <h4 data-figma-id="316:21726" data-figma-name="Heading" className="heading" style={{ whiteSpace: "pre-line", overflowWrap: "break-word", width: "auto", minWidth: "350px", color: "var(--ds-color-primary-color-red-border-strong)", fontFamily: "'Source Sans Pro', sans-serif", fontSize: "20px", fontWeight: 600, lineHeight: "26px", letterSpacing: "-0.2px", textAlign: "center", margin: 0 }}>Vi gir rask respons og lindrer når krisen oppstår</h4>
          <img data-figma-id="316:21740" data-figma-name="Line 2" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0620f42c-4cc3-4a7f-958a-5bd016bd7a44" alt="Line" className="line-2" style={{ width: "0px", maxWidth: "100%", height: "84px", objectFit: "cover", display: "block", aspectRatio: "0.0000", flexShrink: 1, overflow: "hidden" }} />
          <h4 data-figma-id="316:21742" data-figma-name="Heading" className="heading" style={{ whiteSpace: "pre-line", overflowWrap: "break-word", width: "auto", color: "var(--ds-color-primary-color-red-border-strong)", fontFamily: "'Source Sans Pro', sans-serif", fontSize: "20px", fontWeight: 600, lineHeight: "26px", letterSpacing: "-0.2px", textAlign: "center", margin: 0 }}>Vi avdekker og hindrer nød</h4>
        </div>
      </section>
      <section data-figma-id="316:21756" data-figma-name="Section5: text-photo" className="section5-text-photo" style={{ width: "100%", height: "auto", alignSelf: "stretch", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "var(--ds-color-primary-color-red-background-tinted)", borderRadius: "var(--ds-border-radius-xl)" }}>
        <div data-figma-id="316:21757" data-figma-name="Row 1" className="row-1" style={{ width: "100%", height: "auto", alignSelf: "stretch", display: "flex", flexDirection: "row", gap: "64px", justifyContent: "center", alignItems: "center", flexWrap: "wrap", boxSizing: "border-box", paddingLeft: "var(--ds-size-15)", paddingRight: "var(--ds-size-15)", paddingTop: "var(--ds-size-30)", paddingBottom: "var(--ds-size-10)" }}>
          <img data-figma-id="316:21763" data-figma-name="Image" src={supabaseData?.[0]?.image} alt={supabaseData?.[0]?.image} className="image" style={{ width: "628px", maxWidth: "100%", height: "504px", minWidth: "350px", display: "block", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: "var(--ds-border-radius-xl)", overflow: "hidden", objectFit: "cover", aspectRatio: "1.2460", flexShrink: 1 }} />
          <div data-figma-id="316:21758" data-figma-name="Content" className="content" style={{ width: "100%", height: "auto", flexGrow: 1, flexShrink: 0, flexBasis: 0, minWidth: "350px", display: "flex", flexDirection: "column", gap: "var(--ds-size-12)", justifyContent: "center" }}>
            <div data-figma-id="316:21759" data-figma-name="Text" className="text" style={{ width: "100%", height: "auto", alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "var(--ds-size-6)", alignItems: "center" }}>
              <div className="dswrapper" style={{ width: "100%", textAlign: "left" }}>
                <Heading data-size="lg" level={2} data-figma-id="316:21760" data-figma-name="Heading">A really compelling headline</Heading>
              </div>
              <div className="dswrapper" style={{ width: "100%", textAlign: "left" }}>
                <Paragraph data-size="md" variant="long" data-figma-id="316:21761" data-figma-name="Body">Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.</Paragraph>
              </div>
            </div>
            <div className="dswrapper" style={{ height: "48px", width: "fit-content" }}>
              <Button variant="primary" data-color="primary" data-figma-id="316:21762" data-figma-name="Button" onClick={showHelloWorld}>A button</Button>
            </div>
          </div>
        </div>
        <div data-figma-id="316:21764" data-figma-name="Row 2" className="row-2" style={{ width: "100%", height: "auto", alignSelf: "stretch", display: "flex", flexDirection: "row", gap: "64px", justifyContent: "center", alignItems: "center", flexWrap: "wrap", boxSizing: "border-box", paddingLeft: "var(--ds-size-15)", paddingRight: "var(--ds-size-15)", paddingTop: "var(--ds-size-10)", paddingBottom: "var(--ds-size-30)" }}>
          <div data-figma-id="316:21766" data-figma-name="Content" className="content" style={{ width: "100%", height: "auto", flexGrow: 1, flexShrink: 0, flexBasis: 0, minWidth: "350px", display: "flex", flexDirection: "column", gap: "var(--ds-size-12)", justifyContent: "center" }}>
            <div data-figma-id="316:21767" data-figma-name="Text" className="text" style={{ width: "100%", height: "auto", alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "var(--ds-size-6)", alignItems: "center" }}>
              <div className="dswrapper" style={{ width: "100%", textAlign: "left" }}>
                <Heading data-size="lg" level={2} data-figma-id="316:21768" data-figma-name="Heading">Another scroll-stopper</Heading>
              </div>
              <div className="dswrapper" style={{ width: "100%", textAlign: "left" }}>
                <Paragraph data-size="md" variant="long" data-figma-id="316:21769" data-figma-name="Body">When there’s one great thing, there’s usually another. What’s your second thing to showcase?</Paragraph>
              </div>
            </div>
            <div className="dswrapper" style={{ height: "48px", width: "fit-content" }}>
              <Button variant="primary" data-color="primary" data-figma-id="316:21770" data-figma-name="Button">Another button</Button>
            </div>
          </div>
          <img data-figma-id="316:21765" data-figma-name="Image" src={supabaseData?.[1]?.image} alt="" className="image" style={{ width: "628px", maxWidth: "100%", height: "auto", minWidth: "350px", display: "block", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: "var(--ds-border-radius-xl)", overflow: "hidden", objectFit: "cover", aspectRatio: "1.2500", flexShrink: 1 }} />
        </div>
      </section>
      <div className="wrapper" style={{ width: "100%", alignSelf: "stretch" }}>
        <Footer variant="default" hideNewsletter data-color="neutral" shortcutsLinks={[{"label":"Tilbudene","href":"#"},{"label":"Bli frivillig","href":"#"},{"label":"Vårt arbeid","href":"#"},{"label":"Om Røde Kors","href":"#"},{"label":"Støtt arbeidet","href":"#"},{"label":"Kontakt oss","href":"#"}]} legalLinks={[{"label":"Personvern","href":"#"},{"label":"For presse","href":"#"},{"label":"Regler for innkjøp","href":"#"},{"label":"Varsling/Misconduct","href":"#"}]} linksLinks={[{"label":"Tilbudene","href":"#"},{"label":"Bli frivillig","href":"#"},{"label":"Vårt arbeid","href":"#"},{"label":"Om Røde Kors","href":"#"},{"label":"Støtt arbeidet","href":"#"},{"label":"Kontakt oss","href":"#"}]} visitingAddress={["Snarveier"]} organizationNumber="XXX XXX XXX" email="post@redcross.no" whiteSectionSlot="SLOT" showPrimaryLogo />
      </div>
    </div>
  );
}
