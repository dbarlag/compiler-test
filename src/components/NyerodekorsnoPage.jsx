'use client';

import { Footer, Header, Heading, Paragraph } from 'rk-designsystem';

export default function FigmaComponent() {
  function Navigate_to_page() {
  // TODO: change the path to your target page
const targetUrl = '/about';
window.location.href = targetUrl;
}

  function Open_external_link() {
  // TODO: replace with your external URL
const url = 'https://example.com';
window.open(url, '_blank', 'noopener');
}

  function testComplete() {
  console.log('hello');
}

  function testComplete2() {
  console.log('test complete');
}

  return (
    <div data-figma-id="577:21655" data-figma-name="Desktop - 2" className="desktop-2" style={{ width: "100%", maxWidth: "1506px", margin: "0 auto", height: "auto", display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", backgroundColor: "var(--ds-color-neutral-background-default)", overflow: "hidden" }}>

      <style dangerouslySetInnerHTML={{ __html: `@keyframes figmaAnim_0 { from { transform: translateX(-40px) } to { transform: translateX(0) } }
[data-figma-id="316:21653"] { animation: figmaAnim_0 500ms ease-out 0ms 1 normal both; }` }} />
      <div className="wrapper" style={{ width: "1506px", maxWidth: "100%" }}>
        <Header data-color="primary" extensionColor="tinted" showHeaderExtension showThemeToggle showModeToggle showLanguageSwitch showMenuButton showSearch={false} showLogin={false} showUser={false} showCta={false} showNavItems />
      </div>
      <div data-figma-id="577:21777" data-figma-name="Frame 3" className="frame-3" style={{ width: "100%", height: "auto", alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
        <div className="dswrapper" style={{ width: "474px", maxWidth: "100%", height: "78px", textAlign: "center" }}>
          <Heading data-size="2xl" level={1} data-figma-id="577:21773" data-figma-name="Heading">About us</Heading>
        </div>
      </div>
      <div data-figma-id="577:21778" data-figma-name="Frame 3" className="frame-3" style={{ width: "100%", height: "695px", alignSelf: "stretch", display: "flex", flexDirection: "row", gap: "var(--ds-size-13)", justifyContent: "center", alignItems: "center" }}>
        <div className="dswrapper" style={{ width: "231px", maxWidth: "100%", textAlign: "left" }}>
          <Paragraph data-size="md" variant={false} data-figma-id="577:21775" data-figma-name="Body">The quick brown fox jumps over the lazy dog</Paragraph>
        </div>
        <div className="dswrapper" style={{ width: "231px", maxWidth: "100%", textAlign: "left" }}>
          <Paragraph data-size="md" variant={false} data-figma-id="577:21779" data-figma-name="Body">The quick brown fox jumps over the lazy dog</Paragraph>
        </div>
      </div>
      <div className="wrapper" style={{ width: "100%", alignSelf: "stretch" }}>
        <Footer variant="default" hideNewsletter data-color="neutral" showCrossCorners={false} shortcutsLinks={[{"label":"Tilbudene","href":"#"},{"label":"Bli frivillig","href":"#"},{"label":"Vårt arbeid","href":"#"},{"label":"Om Røde Kors","href":"#"},{"label":"Støtt arbeidet","href":"#"},{"label":"Kontakt oss","href":"#"}]} legalLinks={[{"label":"Personvern","href":"#"},{"label":"For presse","href":"#"},{"label":"Regler for innkjøp","href":"#"},{"label":"Varsling/Misconduct","href":"#"}]} linksLinks={[{"label":"Tilbudene","href":"#"},{"label":"Bli frivillig","href":"#"},{"label":"Vårt arbeid","href":"#"},{"label":"Om Røde Kors","href":"#"},{"label":"Støtt arbeidet","href":"#"},{"label":"Kontakt oss","href":"#"}]} visitingAddress={["Snarveier"]} organizationNumber="XXX XXX XXX" email="post@redcross.no" whiteSectionSlot="SLOT" showPrimaryLogo />
      </div>
    </div>
  );
}
