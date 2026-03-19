'use client';

import { Footer, Header, Heading, Paragraph } from 'rk-designsystem';
import styles from './NyerodekorsnoPage2.module.css';

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
    <div data-figma-id="577:21655" data-figma-name="Desktop - 2" className={styles.Desktop27}>

      <style dangerouslySetInnerHTML={{ __html: `@keyframes figmaAnim_0 { from { transform: translateX(-40px) } to { transform: translateX(0) } }
[data-figma-id="316:21653"] { animation: figmaAnim_0 500ms ease-out 0ms 1 normal both; }` }} />
      <div className={styles.wrapper1}>
        <Header data-color="primary" extensionColor="tinted" showHeaderExtension showThemeToggle showModeToggle showLanguageSwitch showMenuButton showSearch={false} showLogin={false} showUser={false} showCta={false} showNavItems />
      </div>
      <div data-figma-id="577:21777" data-figma-name="Frame 3" className={styles.Frame33}>
        <div className={styles.dsWrapper2}>
          <Heading data-size="2xl" level={1} data-figma-id="577:21773" data-figma-name="Heading">About us</Heading>
        </div>
      </div>
      <div data-figma-id="577:21778" data-figma-name="Frame 3" className={styles.Frame35}>
        <div className={styles.dsWrapper4}>
          <Paragraph data-size="md" variant={false} data-figma-id="577:21775" data-figma-name="Body">The quick brown fox jumps over the lazy dog</Paragraph>
        </div>
        <div className={styles.dsWrapper4}>
          <Paragraph data-size="md" variant={false} data-figma-id="577:21779" data-figma-name="Body">The quick brown fox jumps over the lazy dog</Paragraph>
        </div>
      </div>
      <div className={styles.wrapper6}>
        <Footer variant="default" hideNewsletter data-color="neutral" showCrossCorners={false} shortcutsLinks={[{"label":"Tilbudene","href":"#"},{"label":"Bli frivillig","href":"#"},{"label":"Vårt arbeid","href":"#"},{"label":"Om Røde Kors","href":"#"},{"label":"Støtt arbeidet","href":"#"},{"label":"Kontakt oss","href":"#"}]} legalLinks={[{"label":"Personvern","href":"#"},{"label":"For presse","href":"#"},{"label":"Regler for innkjøp","href":"#"},{"label":"Varsling/Misconduct","href":"#"}]} linksLinks={[{"label":"Tilbudene","href":"#"},{"label":"Bli frivillig","href":"#"},{"label":"Vårt arbeid","href":"#"},{"label":"Om Røde Kors","href":"#"},{"label":"Støtt arbeidet","href":"#"},{"label":"Kontakt oss","href":"#"}]} visitingAddress={["Snarveier"]} organizationNumber="XXX XXX XXX" email="post@redcross.no" whiteSectionSlot="SLOT" showPrimaryLogo />
      </div>
    </div>
  );
}
