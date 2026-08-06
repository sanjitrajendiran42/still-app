import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "../legal-shell";

export const metadata: Metadata = {
  title: "Support & Safety",
  description: "Get help with Still, subscriptions, privacy and alcohol-safety resources.",
};

export default function SupportPage() {
  return (
    <LegalShell
      kicker="SUPPORT & SAFETY"
      title="Help for the app. Real resources for everything bigger."
      intro="Still can support the next decision, but it cannot provide medical or emergency care. Use the resources below when the situation needs more than an app."
    >
      <section className="shell support-grid" aria-label="Support topics">
        <article className="support-card"><span>?</span><h2>App support</h2><p>Purchases, restore access, notifications, local data or something not working.</p></article>
        <article className="support-card"><span>↺</span><h2>Billing</h2><p>Manage or cancel a subscription from Apple ID settings. Apple handles App Store refunds.</p></article>
        <article className="support-card"><span>⌾</span><h2>Privacy</h2><p>Recovery entries stay on device. Read the full policy or erase data from your profile.</p></article>
      </section>
      <div className="legal-content shell">
        <aside className="legal-aside"><strong>Emergency?</strong><span>Call 911 or your local emergency number. Still cannot monitor or dispatch help.</span><Link href="/privacy">Read privacy policy ↗</Link></aside>
        <article className="legal-copy">
          <section className="legal-callout">
            <h2>Alcohol withdrawal can be dangerous</h2>
            <p>Get medical guidance before stopping suddenly if you drink heavily most days, have had withdrawal symptoms, or may be physically dependent. Shaking, sweating and vomiting can require medical attention. Confusion, hallucinations or seizures are emergencies—call 911 in the United States.</p>
          </section>
          <section>
            <h2>United States resources</h2>
            <div className="resource-list">
              <a className="resource-link" href="tel:911"><span><strong>Emergency services</strong><span>Call 911 for immediate danger or severe withdrawal symptoms.</span></span><b>Call ↗</b></a>
              <a className="resource-link" href="tel:988"><span><strong>988 Suicide &amp; Crisis Lifeline</strong><span>Call or text 988 for immediate emotional or crisis support.</span></span><b>Call ↗</b></a>
              <a className="resource-link" href="tel:18006624357"><span><strong>SAMHSA National Helpline</strong><span>1-800-662-HELP (4357), free and confidential treatment referral.</span></span><b>Call ↗</b></a>
              <a className="resource-link" href="https://findtreatment.gov" target="_blank" rel="noreferrer"><span><strong>FindTreatment.gov</strong><span>Search for licensed substance-use and mental-health care.</span></span><b>Open ↗</b></a>
            </div>
          </section>
          <section>
            <h2>Common app questions</h2>
            <p><strong>Restore a purchase:</strong> Open Still, reach the plan screen and choose “Restore purchases.” Use the same Apple ID that made the purchase.</p>
            <p><strong>Cancel a subscription:</strong> Open iOS Settings, tap your name, choose Subscriptions, select Still and follow Apple’s cancellation options.</p>
            <p><strong>Erase recovery data:</strong> Open your profile in Still and choose “Erase all recovery data.” This permanently removes the local plan, check-ins, reflections and progress file from that device.</p>
            <p><strong>Change notifications:</strong> Open iOS Settings, choose Notifications, then Still.</p>
          </section>
          <section>
            <h2>Contact Still</h2>
            <p>A dedicated support email is being connected before the App Store release. Until then, no recovery or medical information should be sent through public channels. Still is operated by Sanjit Rajendiran, Founder &amp; CEO.</p>
          </section>
        </article>
      </div>
    </LegalShell>
  );
}
