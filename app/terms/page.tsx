import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "../legal-shell";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms that apply when using Still and its website.",
};

export default function TermsPage() {
  return (
    <LegalShell
      kicker="TERMS OF USE"
      title="Clear terms for a product built on trust."
      intro="These terms govern your use of the Still iOS app and website. By downloading, purchasing or using Still, you agree to them."
    >
      <div className="legal-content shell">
        <aside className="legal-aside"><strong>Effective August 4, 2026</strong><span>Still is operated by Sanjit Rajendiran in the United States.</span><Link href="/support">Need help? Visit support ↗</Link></aside>
        <article className="legal-copy">
          <section className="legal-callout">
            <h2>Important medical and withdrawal notice</h2>
            <p>Still is a wellness and behavior-change tool. It is not medical advice, diagnosis, detox, treatment or emergency care. Alcohol withdrawal can be life-threatening. If you drink heavily most days, have experienced withdrawal, or may be physically dependent, seek qualified medical guidance before stopping suddenly. Call emergency services for severe symptoms such as seizures, hallucinations or confusion.</p>
          </section>
          <section>
            <h2>1. Eligibility</h2>
            <p>You must be at least 18 years old and legally able to enter a contract to use Still. You may use the service only in compliance with applicable law and these terms.</p>
          </section>
          <section>
            <h2>2. The service</h2>
            <p>Still provides self-guided planning, education, progress estimates, journaling, check-ins, reminders and urge-support exercises. Results vary, and no outcome is promised. Estimates for money saved, drinks skipped or milestones are motivational calculations based on information you enter and may not reflect actual outcomes.</p>
          </section>
          <section>
            <h2>3. Emergencies and professional care</h2>
            <p>Do not rely on Still in an emergency or as a replacement for a clinician. If you are in immediate danger, call local emergency services. In the United States, call or text 988 for suicide or crisis support and use SAMHSA resources to locate treatment. Still cannot monitor you, contact emergency services for you or verify the accuracy of information you enter.</p>
          </section>
          <section>
            <h2>4. Purchases and subscriptions</h2>
            <p>Paid features may be offered through monthly or annual auto-renewing subscriptions and a one-time lifetime purchase. Prices and trial eligibility are displayed by Apple before confirmation. Payment is charged to your Apple ID. Subscriptions renew automatically unless canceled at least 24 hours before the end of the current period. You can manage or cancel subscriptions in your Apple ID settings.</p>
            <p>Apple handles billing, refunds and payment disputes under its policies. A “lifetime” purchase means access to the purchased version of Still for as long as Still commercially provides that product; it does not guarantee perpetual operation, every future feature or support for every future device.</p>
          </section>
          <section>
            <h2>5. Acceptable use</h2>
            <p>You may not interfere with the service, bypass purchase controls, reverse engineer the app except where law permits, introduce malicious code, use Still to violate law or misuse its content. Private reflection tools are for your own lawful use.</p>
          </section>
          <section>
            <h2>6. Ownership and license</h2>
            <p>Still’s software, brand, design, copy and original content are owned by Still or its licensors. Subject to these terms, you receive a limited, personal, non-transferable, non-exclusive and revocable license to use the app on Apple devices you own or control as permitted by the App Store rules.</p>
          </section>
          <section>
            <h2>7. Third-party services</h2>
            <p>Still may link to Apple, emergency, crisis or treatment resources. Those services are controlled by others and have their own terms and privacy practices. A link is provided for convenience and does not guarantee availability, quality or suitability.</p>
          </section>
          <section>
            <h2>8. Disclaimers</h2>
            <p>To the maximum extent permitted by law, Still is provided “as is” and “as available” without warranties of merchantability, fitness for a particular purpose, non-infringement or uninterrupted availability. Nothing in these terms limits rights that cannot legally be waived.</p>
          </section>
          <section>
            <h2>9. Limitation of liability</h2>
            <p>To the maximum extent permitted by law, Still and its operator will not be liable for indirect, incidental, special, consequential or punitive damages, lost profits, lost data or reliance on app content. Any aggregate liability will not exceed the amount you paid for Still in the twelve months before the claim. These limits do not apply where prohibited.</p>
          </section>
          <section>
            <h2>10. Changes and termination</h2>
            <p>We may update the service or these terms to reflect product, legal or safety changes. We may suspend access when reasonably necessary to protect users, the service or legal rights. You may stop using Still at any time and erase local recovery data from the app.</p>
          </section>
          <section>
            <h2>11. Apple terms</h2>
            <p>Apple is not responsible for Still or its support. Apple and its subsidiaries are third-party beneficiaries of these terms and may enforce the app-license provisions. Your use must also comply with the Apple Media Services Terms and applicable App Store rules.</p>
          </section>
          <section>
            <h2>12. Contact</h2>
            <p>Questions about these terms can be sent through the contact method on the <Link href="/support"><u>Still Support page</u></Link>.</p>
          </section>
        </article>
      </div>
    </LegalShell>
  );
}
