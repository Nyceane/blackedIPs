import React, {useEffect} from "react";
import { PageTitle, Footer, PageText } from "@/widgets/layout";

export const Privacy = () => {
        useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://blackedips.com/js/pumpit.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return (
    <>
      <section className="relative bg-blue-gray-50/50 py-24 ">
        <div className="container mx-auto ">
          <PageTitle heading="Privacy Policy" />
          <div className="mb-10"></div>
          <PageText heading="What exact information is being collected and/or tracked by Blacked IPs’s AI technology?">
            <ol className="list-decimal pl-8">
              <li>
                We collect on-site navigation behavior on your website where you
                place our code or pixel
              </li>
              <li>Full Name of the website visitor(s)</li>
              <li>Geographic location of the visitor at time of visit</li>
              <li>Personal email address of the website visitor(s)</li>
              <li> Home address + Postal/ZIP of the website visitor(s)</li>
              <li>Cell phone of the website visitor(s)</li>
              <li>Company of the website visitor(s)</li>
              <li>Gender of the website visitor(s)</li>
              <li>Past purchase activity of the website visitor(s)</li>
            </ol>
          </PageText>
          <PageText heading="How do we provide this data to the Customer?">
            <p>
              {" "}
              We can provide the information to Customers in the following ways
            </p>
            <ol className="list-decimal pl-8">
              <li>Inside our user dashboard - daily CSV file export.</li>
              <li>Through our API graph.</li>
              <li>Through our direct 3rd-party integrations.</li>
            </ol>
          </PageText>
          <PageText heading="Does the privacy policy cover solely the BlackedIPs.com website and/or the Product or Service?">
            <p>
              The Blacked IPs privacy policy only covers visitors to the
              BlackedIPs.com domain and does not cover their products or services
              rendered to Customer for use on other domains. Our Privacy Policy
              was written by our legal counsel with and strictly for use on
              BlackedIPs.com and should not be used as a model, an example or be
              construed as legal advice or recommendation. Every company must
              confer with their own legal counsel to determine the proper
              privacy policy. **
            </p>
          </PageText>
          <PageText heading="How is the Customer data that BlackedIPs.com collects protected?">
            <p>
              All data collected by BlackedIPs.com is encrypted both in transit
              and at rest. We have strict access control policies to prevent
              unauthorized users (including unauthorized Blacked IPs, Inc.
              employees and contractors) from being able to access your data. We
              take privacy and confidentiality very seriously in all respects.
            </p>
          </PageText>
          <PageText heading="Does Blacked IPs share or use Customer data with anyone outside of the Customer?">
            <p>
              Blacked IPs does NOT use, re-use, or share Customer data with anyone
              outside of the Customer or who that Customer designates in
              writing.
            </p>
          </PageText>
          <PageText heading="How does Blacked IPs encrypt the data?">
            <p>
              All data transfer occurs using industry standard TLS-encrypted
              connections. This means storage (encryption at rest) using
              up-to-date modern public key encryption standards. Encryption keys
              are securely stored using AWS KMS and bound by such terms.
            </p>
          </PageText>
          <PageText heading="Does Blacked IPs store Personally Identifiable Information (“PII”)?">
            <p>
              Your data is encrypted to prevent unauthorized access in transit
              and at rest. It is hosted using various services through AWS
              including Amazon S3, RDS and further secured against unauthorized
              access with IAM policies.
            </p>
          </PageText>
          <PageText heading="When a Customer terminates the service agreement, what is Blacked IPs’s data retention period?">
            <p>
              We encrypt and store your data for 180 days, then destroy it.
              While it’s being stored we have strict access control policies to
              prevent unauthorized users (including unauthorized Blacked IPs, Inc.
              employees and contractors) from being able to access your data.
            </p>
          </PageText>
          <PageText heading="How does this work with the California Consumer Privacy Act (“CCPA”) ?">
            <p>
              Every company or vendor, whether or not they do business with
              Blacked IPs, MUST become CCPA compliant. CCPA is a consumer law. This
              means every company must give the consumer(s) who visit their
              website the explicit ability to opt out.
            </p>
          </PageText>
          <PageText heading="How does this work with General Data Protection Regulation (“GDPR”)?">
            <p>
              We only resolve US identities & analytics so *GDPR* does not apply
              to Blacked IPs and its Product or Service.
            </p>
          </PageText>
          <PageText heading="Consumer Privacy & Third-Party Cookies">
            <p>
              Notwithstanding anything else in this policy, we and/or our
              partners may place or read use IP and/or cookies to enable you to
              receive personalized ads or content. These cookies contain zero
              personally identifiable information. The cookies may reflect
              de-identified demographic or other data linked to data you
              voluntarily have submitted to us on our network, e.g., your email
              address, which we may share with a data provider solely in hashed,
              non-human readable form. Users may also express their choices for
              display advertising, through the following platforms: Digital
              Advertising Alliance opt-out platform or the Network Advertising
              Initiative opt-out platform. We and/or our partners use IP and/or
              cookies and web beacon technology to associate certain
              Internet-related information about you, such as your Internet
              Protocol address and certain online behaviors, such as opening
              emails or browsing websites or interacting with apps. Such
              information is used to personalize ads or content and may be
              shared with our network partners.
              <br />
              <br/>
              We and/or our network partners may also use IP and/or cookies for
              delivering personalized advertising emails. These IPs and/or
              cookies are used to identify the visitors of our advertisers'
              websites and for the advertiser to send personalized emails based
              on the visitors' browsing experience on the advertiser's site/app.
              To opt out, go to https://blackedips.com/optout
            </p>
          </PageText>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
};

export default Privacy;
