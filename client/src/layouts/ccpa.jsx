import React, {useEffect} from "react";
import { PageTitle, Footer, PageText } from "@/widgets/layout";

export const CCPA = () => {
        useEffect(() => {
              console.log('i fire once');

    const script = document.createElement('script')
    script.src = 'https://blackedips/js/pumpit.js'
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
          <PageTitle heading="CCPA Do Not Sell My Info (California Residents Only)" />
          <div className="mb-10"></div>
          <PageText heading="For California Residents">
            This section of the Privacy Policy (“California Policy”) supplements
            and amends the information contained in our Privacy Policy with
            respect to California residents. This California Policy applies
            solely to individuals, visitors, users, and others that are natural
            persons and residents of the State of California (“consumers” or
            “you”). THIS ADDENDUM TO THE PRIVACY POLICY DOES NOT APPLY TO USERS
            THAT ARE NOT NATURAL PERSONS OR ARE NOT CALIFORNIA RESIDENTS.
            <br />
            <br />
            The California Policy describes Blacked IPs’s policies and practices
            regarding the Personal Information we collect, use, and disclose
            about you, including Personal Information you submit or we obtain
            when you access the Websites and other sources. This California
            Policy is adopted in part to comply with the California Consumer
            Privacy Act (“CCPA”).
            <br />
            <br />
            Any terms defined within the CCPA have the same meaning when
            utilized within this California Policy. The other provisions of the
            Privacy Policy continue to apply except as modified in this
            California Policy.
            <br />
            <br />
            Note, however, that Personal Information as used in this California
            Policy does not include: Publicly available information from
            government records, De-identified or aggregated consumer
            information, Information excluded from the CCPA’s scope, such as
            personal information covered by certain sector-specific privacy
            laws, including the Fair Credit Reporting Act (FRCA), the
            Gramm-Leach-Bliley Act (GLBA) or California Financial Information
            Privacy Act (FIPA), and the Driver’s Privacy Protection Act of 1994
          </PageText>
          <PageText heading="Consumer Rights">
            Pursuant to the CCPA, and as detailed below, consumers have various
            rights with respect to their Personal Information.
          </PageText>
          <PageText heading="Request to Delete">
            You have the right to request that we delete your Personal
            Information from our records and direct any service providers to
            delete your Personal Information from their records, subject to
            certain exceptions. Upon receipt of a confirmed verifiable consumer
            request (see below), and as required by the CCPA, we will delete and
            direct any service providers to delete your personal information
            from our records, subject to the exceptions provided by law.
            <br />
            <br />
            Blacked IPs is not required to comply with your request to delete your
            Personal Information if it is necessary for us (or its service
            provider) to maintain your Personal Information in order to:
            <br />
            <br />
            1. Complete the transaction for which the Personal Information was
            collected, provide a good or service requested by you, or reasonably
            anticipated within the context of our ongoing business relationship
            with you, or otherwise perform a contract between Blacked IPs, Inc. and
            you.
            <br />
            <br />
            2. Detect security incidents, protect against malicious, deceptive,
            fraudulent, or illegal activity; or prosecute those responsible for
            that activity.
            <br />
            <br />
            3. Debug to identify and repair errors that impair existing intended
            functionality.
            <br />
            <br />
            4. Exercise free speech, ensure the right of another consumer to
            exercise his or her right of free speech, or exercise another right
            provided for by law.
            <br />
            <br />
            5. Comply with the California Electronic Communications Privacy Act
            pursuant to Chapter 3.6 (commencing with Section 1546) of Title 12
            of Part 2 of the Penal Code.
            <br />
            <br />
            6. Engage in public or peer-reviewed scientific, historical, or
            statistical research in the public interest that adheres to all
            other applicable ethics and privacy laws, when Blacked IPs’s deletion
            of the information is likely to render impossible or seriously
            impair the achievement of such research, if you have provided
            informed consent.
            <br />
            <br />
            7. To enable solely internal uses that are reasonably aligned with
            your expectations based on your relationship with Blacked IPs, Inc.
            <br />
            <br />
            8. Comply with a legal obligation.
            <br />
            <br />
            9. Otherwise use your Personal Information, internally, in a lawful
            manner that is compatible with the context in which you provided the
            Personal Information.
            <br />
            <br />
            Upon receipt of a confirmed verifiable consumer request (see below),
            and as required by the CCPA, we will provide a response to such
            requests:
            <br />
            <br />
            If you are under the age of 18, and a registered user of any Website
            where this California Policy is posted, California law permits you
            to request and obtain removal of content or information you have
            publicly posted. You may submit your request using the contact
            information in the Privacy Policy. Please be aware that such a
            request does not ensure complete or comprehensive removal of the
            content or information you have posted and that there may be
            circumstances in which the law does not require or allow removal
            even if requested.
          </PageText>
          <PageText heading="Request to Know">
            You have the right to request that we disclose the following to you
            as it relates to the 12-month period preceding its receipt of your
            verifiable consumer request:
            <br />
            <br />
            1. The categories of Personal Information we have collected about
            you 2. The categories of sources from which the Personal Information
            was collected 3. The business or commercial purpose for collecting
            Personal Information 4. The categories of Personal Information we
            disclosed for a business purpose 5. The categories of third parties
            with whom we share Personal Information 6. The specific pieces of
            Personal Information we collected about you
            <br />
            <br />
            Upon receipt of a verifiable consumer request (see below), and as
            required by the CCPA, we will provide a response to such requests.
            <br />
            <br />
            In addition to the CCPA, California Civil Code Section 1798.83
            permits you to request information regarding the disclosure of your
            personal information by certain members of Blacked IPs, Inc. to third
            parties for the third parties’ direct marketing purposes. Consumers
            that have provided their Personal Information to us may request
            information about our disclosures of certain categories of Personal
            Information to third parties for their direct marketing purposes.
            Such request must be submitted to us by writing to
            contact@BlackedIPs.com. Please mention in your email that you are
            making a “California Shine the Light” inquiry. Within 45 days of
            receiving such a request, we will provide a list of the categories
            of such Personal Information disclosed to third parties for
            third-party direct marketing purposes during the immediately
            preceding calendar year, along with the names and addresses of these
            third parties. This request may be made no more than twice per
            calendar year. We reserve our right not to respond to requests
            submitted other than to the address specified in this paragraph.
          </PageText>
          <PageText heading="Nondiscrimination">
            We will not discriminate against you in violation of the CCPA for
            exercising any of your CCPA rights. For example, we generally will
            not provide you a different level or quality of goods or services if
            you exercise your rights under the CCPA.
          </PageText>
          <PageText heading="Submitting Consumer Rights Requests">
            To submit any of the Consumer Rights requests as outlined above,
            please contact us by submitting a request to contact [AT]
            BlackedIPs.com (http://BlackedIPs.com/)
            <br />
            <br />
            We reserve the right to only respond to verifiable consumer
            requests. A verifiable consumer request is one made by any
            individual that is: a.) The consumer who is the subject of the
            request, b.) a consumer on behalf of the consumer’s minor child, or
            c.) by a natural person or person registered with the California
            Secretary of State authorized to act on behalf of a consumer
            <br />
            <br />
            If we request, you must provide us with sufficient information to
            verify your identity and/or authority to act on behalf of the
            consumer. In general, we may ask you to provide identifying
            information that we already maintain about you, or we may use a
            third-party verification service. In either event, we will try to
            avoid asking you for sensitive Personal Information to verify your
            identity. We may not be able to respond to your request or provide
            you with Personal Information if we cannot verify your identity or
            authority to make the request and confirm the Personal Information
            relates to you. However, making a verifiable consumer request does
            not require you to create an account with us. Additionally, you will
            need to describe your request with sufficient detail to allow us to
            review, understand, assess, and respond. Personal Information
            collected from an individual to determine whether a request is a
            verifiable consumer request may not be used or disclosed for any
            other purpose except as required by law. We will endeavor to respond
            to a verifiable consumer request within forty-five (45) calendar
            days of receipt, but we may require an extension of up to forty-five
            (45) additional calendar days to respond and we will notify you of
            the need for the extension.
            <br />
            <br />
            If you have an account with us, we will deliver our written response
            to that account. If you do not have an account with us, we will
            deliver our written response by mail or electronically, at your
            option. Any disclosures we provide will only cover the 12-month
            period preceding the receipt of your verifiable consumer request.
            The response we provide will also explain the reasons we cannot
            comply with a request, if applicable. To the extent permitted by the
            CCPA, we will respond to no more than two requests during any
            12-month period.
            <br />
            <br />
            You may authorize a natural person, or a business, registered with
            the California Secretary of State to act on your behalf with respect
            to the right under this California Policy. When you submit a Request
            to Know or a Request to Delete, unless you have provided the
            authorized agent with a qualifying power of attorney, you must
            provide your authorized agent written permission (signed by You) to
            act on your behalf and verify the authorized agent’s identity with
            us. We reserve the right to deny requests from persons or businesses
            claiming to be authorized agents that do not submit sufficient proof
            of their authorization.
            <br />
            <br />
            You may authorize a natural person, or a business, registered with
            the California Secretary of State to act on your behalf with respect
            to the right under this California Policy. When you submit a Request
            to Know or a Request to Delete, unless you have provided the
            authorized agent with a qualifying power of attorney, you must
            provide your authorized agent written permission (signed by You) to
            act on your behalf and verify the authorized agent’s identity with
            us. We reserve the right to deny requests from persons or businesses
            claiming to be authorized agents that do not submit sufficient proof
            of their authorization.
            <br />
            <br />
            If you have any questions regarding Blacked IPs’s data sharing
            practices, please feel free to email us at contact [ AT]
            BlackedIPs.com
          </PageText>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
};

export default CCPA;
