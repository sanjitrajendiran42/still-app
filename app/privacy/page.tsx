import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "../legal-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Still protects recovery information and handles data.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      kicker="PRIVACY POLICY"
      title="Your recovery is personal. Your data should be, too."
      intro="This policy explains how the iOS app and website operated by Still handle information. The launch version is deliberately local-first and does not use advertising trackers."
    >
      <div className="legal-content shell">
        <aside className="legal-aside"><strong>Effective August 4, 2026</strong><span>Applies to the Still iOS application and this website.</span><Link href="/support">Questions? Visit support ↗</Link></aside>
        <article className="legal-copy">
          <section>
            <h2>1. The short version</h2>
            <p>Your recovery profile, drinking baseline, reasons, triggers, check-ins, reflections and progress are stored on your device. Still does not receive those entries, use them for advertising or sell them. The launch version has no third-party advertising or analytics SDK.</p>
          </section>
          <section>
            <h2>2. Information stored on your device</h2>
            <p>Still lets you create a personalized recovery profile and record information such as your goal, estimated drinking frequency and spending, start date, check-ins, urge ratings, notes, completed lessons and private reflections. The app writes this information to its protected application storage on your iPhone.</p>
            <p>This information remains under your control. You can erase it inside the app. Removing the app may also remove local information, subject to Apple backup and device-restoration behavior.</p>
          </section>
          <section>
            <h2>3. Purchases</h2>
            <p>Subscriptions and lifetime purchases are processed by Apple through StoreKit. Apple may process your Apple ID, payment information, purchase history and related technical data under Apple’s own privacy terms. Still receives only the transaction and entitlement information needed to unlock purchased features; it does not receive your full payment-card details.</p>
          </section>
          <section>
            <h2>4. Notifications and device services</h2>
            <p>If you choose to enable reminders, Still asks iOS for notification permission and schedules reminders on your device. You can change that permission in iOS Settings. Still does not use precise location, contacts, microphone, camera or health-record access in the launch version.</p>
          </section>
          <section>
            <h2>5. Website and support information</h2>
            <p>This website does not set advertising cookies or build behavioral advertising profiles. Like most hosted services, infrastructure providers may process limited technical logs such as an IP address, browser type, requested page and timestamp to operate, secure and troubleshoot the service.</p>
            <p>If you contact support, we process the contact details and message you choose to send so we can respond. Do not include drinking history, medical information or other sensitive recovery details in a support request unless they are necessary.</p>
          </section>
          <section>
            <h2>6. Sharing</h2>
            <p>Still does not sell personal information. We may disclose limited information to service providers that operate the website or support channel, when required by law, to protect safety and legal rights, or as part of a corporate transaction. Service providers may use information only to perform services for Still.</p>
          </section>
          <section>
            <h2>7. Retention and deletion</h2>
            <p>Local recovery data remains on your device until you erase it or remove the app, subject to any backups you control. Support communications are kept only as long as reasonably needed to respond, maintain records, prevent abuse and meet legal obligations.</p>
          </section>
          <section>
            <h2>8. Age and location</h2>
            <p>Still is intended for adults age 18 and older. We do not knowingly collect personal information from children. The initial release is designed for users in the United States; availability elsewhere does not mean every feature or resource is appropriate in every jurisdiction.</p>
          </section>
          <section>
            <h2>9. Security</h2>
            <p>Still uses Apple platform protections and iOS complete file protection for its local data file. No security method is perfect. Keep your device passcode secure and use current iOS software.</p>
          </section>
          <section>
            <h2>10. Changes and contact</h2>
            <p>We may update this policy as Still changes. We will revise the effective date and provide additional notice when required. Questions or privacy requests can be sent through the contact method on our <Link href="/support"><u>Support page</u></Link>.</p>
          </section>
        </article>
      </div>
    </LegalShell>
  );
}
