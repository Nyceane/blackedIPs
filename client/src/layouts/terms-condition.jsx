import React, {useEffect} from "react";
import { PageTitle, Footer, PageText } from "@/widgets/layout";

export const TermsCondition = () => {
        useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://client-blackedips.bunnyenv.com/js/pumpit.js'
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
          <PageTitle heading="Terms & Conditions (Blacked IPs Inc)" />
          <div className="mb-10"></div>
          <PageText heading="SOFTWARE & NETWORK SERVICES AGREEMENT">
            This Software & Network Services Agreement (“Agreement”) is entered
            into by and between Blacked IPs, Inc. (“Blacked IPs”) and the entity
            signing below (“Customer”) (each, a “Party” and collectively, the
            “Parties”).
            <br />
            <br />
            EFFECTIVE as of the subscription start date, “Effective Date”), for
            and in consideration of the mutual covenants herein contained, the
            receipt and sufficiency of which is hereby acknowledged, Blacked IPs
            agrees to provide, and Customer agrees to procure, the services set
            forth in this Agreement and incorporated herein:
            <br />
            <br />
            All of the terms relating to this Agreement for any subscription
            plan, without limitation, are subject to the Standard Terms and
            Conditions set out on the following pages (“Standard Terms and
            Conditions”) and will be supplemented and controlled by the Standard
            Terms and Conditions. This Agreement supersedes any prior written
            agreements or oral agreements between the Parties concerning the
            subject matter herein. Capitalized but undefined terms have the
            meanings set forth in the Standard Terms and Conditions.
          </PageText>
          <PageText heading="1. SERVICES AND AI PRODUCT">
            In connection with this Agreement, Blacked IPs will provide (a)
            identity and analytical resolution of anonymous visitors to
            Customer’s website designated in the questionnaire and on-site
            behavior provided by Blacked IPs (“Site Visitors”), and (b) after
            installing the pixel or script designated by Blacked IPs and uploading
            the applicable data to Blacked IPs (“Customer Data”), Blacked IPs will map
            Customer’s uploaded data to Blacked IPs’s MANA identity graph to track
            and monitor the identified contacts for response to ads and/or
            website visits, (a) and (b), collectively the (“Subscription
            Services''). The data resulting from the Subscription Services will
            be provided to Customer, as requested by Customer, on a daily basis
            inside the Blacked IPs portal which can also be downloaded in a CSV
            format or such other format as the Parties may agree to in writing
            (the “AI Product”).
          </PageText>
          <PageText heading="2. DELIVERABLES AND OWNERSHIP">
            Blacked IPs owns all right, title, and interest, including, without
            limitation, all intellectual property rights, to the AI Product,
            general advice, materials created or developed for, or otherwise
            provided to, Customer (whether developed solely by Blacked IPs and/or
            Blacked IPs personnel or created or developed jointly with Customer or
            its personnel or agents) in the course of performing Services for
            Customer under this Agreement, but excluding any Customer
            Confidential Information and Customer Data (the “Deliverable(s)”).
            Subject to Customer’s payment of all fees due to Blacked IPs and
            compliance with this Agreement, Blacked IPs hereby grants Customer a
            limited, nonexclusive, nontransferable, non-sublicensable,
            worldwide, revocable license to use such Deliverables during the
            Term solely for its own, internal business use (the “License”).
            During the Term and thereafter, Blacked IPs may terminate or suspend
            the License in the event Customer: (a) breaches any provision of
            this Agreement; or (b) misuses any Deliverable(s). Customer retains
            all ownership rights in its Confidential Information and any other
            information or data provided to Blacked IPs. Except as prohibited by
            Section 8, Blacked IPs retains all rights to use its skill, knowledge,
            experience, and know-how, including, without limitation, ideas,
            concepts, and techniques, whether developed prior to, independently
            of, or in the course of performing the Services hereunder. Nothing
            in this Agreement shall preclude Blacked IPs from using any general
            information, ideas, concepts, know-how, techniques, methodologies,
            processes, skills or expertise derived from performing the Services
            or providing any work product or deliverable.
          </PageText>
          <PageText heading="3. RESTRICTIONS OF USE">
            Customer must not do or attempt to do, or permit others to do, any
            of the following: (a) modify, port, adapt or create derivative works
            of the Services or any Deliverables; (b) reverse compile, reverse
            assemble, disassemble or print the any Deliverable’s source code or
            object code or other runtime objects or files or otherwise reverse
            engineer, modify or copy the look and feel, functionality or user
            interface of any portion of the Deliverables; (c) rent, lease,
            distribute (or redistribute), provide or otherwise make available
            the Deliverables, in any form, to any third party (including in any
            service bureau or similar environment); (d) defeat, disable or
            circumvent any protection mechanism related to the Deliverables; (e)
            use the Deliverables to process the data of clients of a third party
            (whether on an outsourcing, service bureau, or other basis); (f)
            using the Deliverables or otherwise procuring the Services to build
            competitive products or services; or (g) publish, distribute or
            redistribute (whether or not for a fee), or sell any Deliverable to
            any individual or entity outside of Customer's own entity. In
            addition, Customer shall not violate or attempt to violate the
            security of Blacked IPs’s networks or servers, including, without
            limitation, (x) accessing data not intended for Customer; (y)
            attempting to probe, scan or test the vulnerability of a system or
            network or to breach security or authentication measures without
            proper written request and authorization; or (z) attempting to
            interfere with service to any user, host or network, including by
            means of submitting a virus, overloading, spamming, mail bombing,
            crashing, or flooding.
          </PageText>
          <PageText heading="4. TERM AND TERMINATION">
            <p>
              4.1. Term. This Agreement will be effective as of the Effective
              Date and shall remain in effect for so long as there is an active
              subscription between the Parties (the “Term”). Each subscription
              shall renew in accordance with its terms unless terminated in
              accordance with this Agreement.
            </p>
            <br />
            <br />
            <p>
              4.2. Termination for Cause. This Agreement and/or any subscription
              may be terminated immediately upon written notice by the
              non-breaching Party if the breach is not capable of being cured
              or, if capable of being cured, is not cured within thirty (30)
              days after receipt of written notice.
            </p>
            <br />
            <br />
            <p>
              4.3. Effect of Termination Notice. Termination or expiration of
              the Agreement by Customer will also terminate (a) any then-current
              subscriptions unless otherwise agreed by the Parties, and (b) the
              License.
            </p>
            <br />
            <br />
            <p>
              4.4. Obligations on Termination. Upon any termination or
              expiration of this Agreement, each Party shall (i) immediately
              discontinue all use of the other Party’s Confidential Information;
              (ii) subject to the final sentence of this Section 4.4, within
              thirty (30) days of the termination or expiration of this
              Agreement, delete the other Party’s Confidential Information from
              its computer storage or any other media; (iii) return to the other
              Party or, at the other Party’s option, destroy, all tangible
              copies of such Party’s Confidential Information then in its
              possession; and (iv) promptly pay all amounts due and owing
              hereunder. Notwithstanding the foregoing, neither Party will be
              required to delete any Confidential Information of the other Party
              that may reside in any automated backup files or to the extent
              such Party is required to maintain any such Confidential
              Information for audit purposes or to comply with applicable law,
              provided that such Confidential Information will continue to be
              subject to the confidentiality obligations of this Agreement
              notwithstanding the termination or expiration of this Agreement.
            </p>
          </PageText>
          <PageText heading="5. PAYMENT AND INVOICING TERMS">
            <p>
              5.1. Services. The fees for the Services will be set forth by the
              pricing options listed on the Blacked IPs website. Unless otherwise
              set forth in a separate Agreement, fees for subscription services
              will be due upon the Effective Date and each thirty (30) days
              thereafter. All amounts due hereunder will be paid electronically
              and paid in US Dollars
            </p>
            <br />
            <br />
            <p>
              5.2. Taxes. Customer will be responsible for applicable excise,
              sales and use or other taxes as required by law on Services
              provided by Blacked IPs to Customer under this Agreement. Blacked IPs
              will pay all taxes collected from Customer to the appropriate tax
              authority. If Blacked IPs fails to properly invoice Customer for
              applicable taxes on the original invoice for goods and services,
              Customer will not be responsible for payment of such taxes to
              Blacked IPs, and instead, will remit all such taxes directly to the
              applicable tax authority.
            </p>
            <br />
            <br />
            <p>
              5.3. Refund Policy. Except as expressly provided herein, all
              payments under this Agreement will be irrevocable, non-refundable,
              and non-creditable.
            </p>
          </PageText>
          <PageText heading="6. REPRESENTATIONS AND WARRANTIES">
            <p>
              6.1. Blacked IPs Representations and Warranties; Disclaimer. Blacked IPs
              warrants and covenants that the Services will be performed in a
              professional and workmanlike manner. Blacked IPs DISCLAIMS ALL OTHER
              REPRESENTATIONS AND WARRANTIES OF ANY KIND, WHETHER EXPRESSED OR
              IMPLIED, INCLUDING WITHOUT LIMITATION, WARRANTIES OF
              MERCHANTABILITY, NON-INFRINGEMENT, TITLE, AND FITNESS FOR A
              PARTICULAR PURPOSE.
            </p>
            <br />
            <br />
            <p>
              6.2. Customer Representations and Warranties. Customer represents,
              warrants, and covenants that: (a) it is a validly organized entity
              under the laws of the jurisdiction of its incorporation and has
              the authority to enter into this Agreement; (b) it has all right,
              power, and authority necessary to enter into this Agreement,
              perform its obligations hereunder and grant the rights it grants
              to Blacked IPs hereunder, including, without limitation, that it has
              obtained all legally and contractually required right and/or
              permission to provide information and/or data to Blacked IPs as
              necessary for Blacked IPs to provide the Services; and (c) its
              performance of this Agreement, and Blacked IPs’s exercise of its
              rights under this Agreement, will not conflict with or result in a
              breach or violation of any of the terms or provisions or
              constitute a default under any agreement by which it is bound or
              any applicable law, rule, or regulation.
            </p>
          </PageText>
          <PageText heading="7. CONFIDENTIALITY">
            <p>
              7.1. Disclosure. The Parties acknowledge that, in the course of
              performance of this Agreement, one Party (“Disclosing Party”) may
              find it necessary to disclose or permit access to Confidential
              Information to the other Party (“Receiving Party”) and its
              personnel for the purposes agreed under this Agreement.
              “Confidential Information” means information and technical data
              derived from or disclosed to a Receiving Party by the Disclosing
              Party or its employees, vendors, customers, representatives,
              affiliates, agents and other independent contractors during the
              performance of obligations under this Agreement and which is not
              generally known to the public, including the Disclosing Party’s
              and its affiliates’ customers or competitors. Examples of
              Confidential Information include, without limitation, business
              plans, specifications, designs, methods, processes, ideas,
              concepts, drawings, software, pricing, operational plans and
              know-how, employee information, shareholder information, vendor
              information, customer information, and consumer information
              whether disclosed in oral, written, graphic or machine-readable
              form, or in forms otherwise embodying or displaying such
              information, but exclude Customer Data.
            </p>
            <br />
            <br />
            <p>
              7.2. Confidential Treatment. Confidential Information disclosed to
              a Receiving Party will be held in confidence by the Receiving
              Party and not disclosed to others or used except as expressly
              permitted under this Agreement or as expressly authorized in
              writing by the Disclosing Party for the Term of the Agreement and
              for two (2) years thereafter. Each Party will use the same degree
              of care to protect the other Party’s Confidential Information as
              it uses to protect its own confidential information of like
              nature, but in no circumstances less than reasonable care.
            </p>
            <br />
            <br />
            <p>
              7.3. Allowances and Exceptions. Notwithstanding anything to the
              contrary in this Section 8, Confidential Information may be
              disclosed by a Receiving Party: (a) to its employees, agents, and
              consultants who require it in connection with such Party’s
              obligations under this Agreement and who are contractually or
              legally obligated to hold such Confidential Information in
              confidence and restrict its use consistent with the Receiving
              Party’s obligations under this Agreement; (b) to the Receiving
              Party’s auditors, outside counsel, accountants and other similar
              business advisors, or in connection with an assignment or transfer
              permitted without consent under Section 11.7; and (c) to the
              extent required by law, provided that: (i) the Receiving Party
              provides the Disclosing Party with sufficient advance notice of
              such disclosure requirement or obligation to permit Disclosing
              Party to seek a protective order or other appropriate remedy
              protecting its Confidential Information from disclosure; and (ii)
              Receiving Party limits the release of the Confidential Information
              to the greatest extent possible under the circumstances.
              Obligations under this Section 8 will not apply to information
              which: (1) was publicly available prior to receipt thereof by the
              Receiving Party from the Disclosing Party, or which subsequently
              becomes publicly available before any wrongful act of the
              Receiving Party or its employee or agent; (2) was in the
              possession of the Receiving Party without breach of any obligation
              hereunder prior to receipt from the Disclosing Party; (3) is later
              received by the Receiving Party from a third party, unless the
              Receiving Party knows or has reason to know of an obligation of
              secrecy of the third party to the Disclosing Party with respect to
              such information; (4) is developed by the Receiving Party
              independent of the Disclosing Party’s Confidential Information; or
              (5) has previously been disclosed by the Disclosing Party to third
              parties without obligation of secrecy.
            </p>
            <br />
            <br />
            <p>
              7.4. Remedies. If the Receiving Party or its personnel has
              disclosed, or is threatening to disclose, any Confidential
              Information in breach of this Agreement, the Disclosing Party will
              be entitled to seek an injunction to prevent the Receiving Party
              personnel from disclosing Confidential Information, or to prevent
              the Receiving Party personnel from providing any services to any
              third party to whom such Confidential Information has been or may
              be disclosed. The Disclosing Party will not be prohibited by this
              provision from pursuing other remedies.
            </p>
          </PageText>
          <PageText heading="8. PRIVACY AND SECURITY">
            <p>
              Blacked IPs shall implement and maintain reasonable information
              security measures and policies intended to safeguard the security
              of Customer Data. By providing Customer Data to Blacked IPs, Customer
              grants Blacked IPs the nonexclusive, worldwide, transferable right,
              on a royalty-free basis, to possess, store, use, copy, distribute
              and process Customer Data solely for the purposes of fulfilling
              Blacked IPs's obligations and/or exercising Blacked IPs's rights
              hereunder. This right may be sublicensed only to third parties
              directly or indirectly assisting Blacked IPs in providing the
              Services or otherwise fulfilling Blacked IPs's obligations hereunder.
              For avoidance of doubt, the Parties acknowledge and agree that
              unauthorized access to or loss of Customer Data shall not
              constitute a breach by Blacked IPs of its confidentiality obligations
              under this Agreement. Customer is responsible for the security of
              its own computer, IT, and/or network systems.
            </p>
          </PageText>
          <PageText heading="9. INDEMNIFICATION AND LIMITATION OF LIABILITY">
            <p>
              9.1. Mutual Indemnification Obligations. Each Party (the
              “Indemnifying Party”) will indemnify, defend and hold the other
              Party, its directors, officers, employees and agents
              (collectively, the “Indemnified Party”) harmless against: (a)
              claims by employees, agents or subcontractors of the Indemnifying
              Party for personal injury, death, or property damage sustained by
              such employees, agents or subcontractors while performing Services
              pursuant to this Agreement; or (b) third party claims arising out
              of or in connection with the Indemnifying Party’s breach of its
              warranties and representations hereunder; provided, however, that
              if there is also fault on the part of the Indemnified Party or any
              entity or individual acting on behalf of such Indemnified Party,
              the foregoing indemnification will be on a comparative fault
              basis.
            </p>
            <br />
            <br />
            <p>
              9.2. IP Infringement Indemnification. Subject to the limitations
              of liability in Section 10.4, Blacked IPs shall indemnify and hold
              harmless Customer, its officers, agents, employees, affiliates,
              subsidiaries, assigns and successors in interest from, defend
              Customer against, pay any final judgments awarded against
              Customer, and pay Customer’s reasonable costs and attorneys’ fees
              resulting from any claims, liabilities, losses, suits, and damages
              asserted by a third party based on Blacked IPs’s alleged infringement
              of any patent, copyright, trademark, trade secret, or other
              intellectual property or proprietary rights of such third party
              under the laws of the United States arising out of the AI Product,
              unless and except to the extent that such infringement is caused
              by (a) modification of the AI Product by anyone other than
              Blacked IPs, (b) Blacked IPs’s compliance with Customer’s unique
              specification or instructions, (c) Blacked IPs’s use of trademarks,
              Customer Confidential Information, Customer Data, or other
              materials supplied by Customer, (d) use of any AI Product in
              connection or in combination with equipment, devices, or software
              not provided by Blacked IPs (but only to the extent that such AI
              Product alone would not have infringed); or (e) the use of any AI
              Product other than as permitted under this Agreement or in a
              manner for which it was not intended.
            </p>
            <br />
            <br />
            <p>
              9.3. Notice of Claim. The indemnified Party will provide the
              indemnifying Party with prompt notice of any claim for which
              indemnification will be sought hereunder and will cooperate in all
              reasonable respects with the indemnifying Party in connection with
              any such claim, at the indemnifying Party’s expense. The
              indemnifying Party will defend the indemnified Party at the
              indemnified Party’s request, provided that failure to give notice
              will not relieve indemnifying Party of its obligations under this
              Section 9. The indemnifying Party will be entitled to control the
              handling of any such claim and to defend or settle any such claim,
              in its sole discretion, with counsel of its own choosing, except
              that any settlement for other than money damages will be subject
              to the approval of the indemnified Party, which approval will not
              be unreasonably withheld.
            </p>
            <br />
            <br />
            <p>
              9.4. Limitation of Liability. EXCEPT WITH RESPECT TO THE
              INDEMNIFICATION OBLIGATIONS UNDER SECTIONS 10.1 AND 10.2, DAMAGES
              ARISING FROM CUSTOMER’S BREACH OF SECTION 4, AND DAMAGES ARISING
              AS A RESULT OF THE GROSS NEGLIGENCE OR WILLFUL MISCONDUCT OF A
              PARTY, IN NO EVENT WILL EITHER PARTY, THEIR SHAREHOLDERS,
              AFFILIATES, PARENT COMPANIES, CONTROLLING COMPANIES, PRINCIPALS,
              OFFICERS, DIRECTORS, MEMBERS OR EMPLOYEES BE LIABLE TO THE OTHER
              PARTY OR A THIRD PARTY FOR CONSEQUENTIAL, SPECIAL, INDIRECT,
              INCIDENTAL, PUNITIVE OR EXEMPLARY DAMAGES, COSTS, EXPENSES, OR
              LOSSES (INCLUDING, WITHOUT LIMITATION, LOST PROFITS, DATA, AND
              OPPORTUNITY COSTS). EXCEPT WITH RESPECT TO THE INDEMNIFICATION
              OBLIGATIONS UNDER SECTION 10.1, DAMAGES ARISING FROM CUSTOMER’S
              BREACH OF SECTION 4, OR DAMAGES ARISING AS A RESULT OF THE GROSS
              NEGLIGENCE OR WILLFUL MISCONDUCT OF A PARTY, IN NO EVENT WILL
              EITHER PARTY, THEIR SHAREHOLDERS, AFFILIATES, PARENT COMPANIES,
              CONTROLLING COMPANIES, PRINCIPALS, OFFICERS, DIRECTORS, MEMBERS OR
              EMPLOYEES BE LIABLE TO THE OTHER PARTY OR A THIRD PARTY FOR ANY
              ACTIONS, DAMAGES, CLAIMS, LIABILITIES, COSTS, EXPENSES, OR LOSSES
              IN ANY WAY RISING OUT OF OR RELATING TO THE SERVICES UNDER AN
              APPLICABLE AGREEMENT FOR AN AGGREGATE AMOUNT IN EXCESS OF THE FEES
              PAID BY CUSTOMER TO Blacked IPs UNDER THE APPLICABLE AGREEMENT UNDER
              WHICH LIABILITY AROSE IN THE SIX (6) MONTHS PRECEDING THE EVENT
              THAT GAVE RISE TO LIABILITY. IN FURTHERANCE AND NOT IN LIMITATION
              OF THE FOREGOING, Blacked IPs WILL NOT BE LIABLE IN RESPECT OF (A)
              ANY DECISION MADE BY CUSTOMER AS A RESULT OF THE PERFORMANCE BY
              Blacked IPs OF THE SERVICES PROVIDED UNDER ANY AGREEMENT OR (B)
              CUSTOMER’S MISUSE OF THE PERFORMED SERVICES, INTELLECTUAL PROPERTY
              OR OTHER DATA PROVIDED BY Blacked IPs IN CONNECTION WITH THE
              SERVICES. THE PROVISIONS OF THIS SECTION 10.4 SHALL APPLY
              REGARDLESS OF THE FORM OF ACTION, DAMAGE, CLAIM, LIABILITY, COST,
              EXPENSE, OR LOSS, WHETHER IN CONTRACT, STATUTE, TORT (INCLUDING,
              WITHOUT LIMITATION, NEGLIGENCE), OR OTHERWISE.
            </p>
          </PageText>
          <PageText heading="10. MISCELLANEOUS">
            <p>
              10.1. Relationship of Parties. It is understood by the Parties
              that Blacked IPs is an independent contractor with respect to
              Customer, and that neither this Agreement, nor any Agreement forms
              a partnership, joint venture or employment relationship between
              the Parties. Customer recognizes that Blacked IPs may be or become
              engaged to perform services that are similar to the Services for
              other parties, including parties in Customer’s market area or with
              which Customer or its affiliates compete. Nothing in this
              Agreement or any Agreement precludes Blacked IPs or any of its
              personnel from being engaged by any other party, including a
              competitor of Customer, for any purpose or in any manner.
            </p>
            <br />
            <br />
            <p>
              10.2. Attorneys’ Fees. In any suit or proceeding relating to this
              Agreement, the prevailing Party will have the right to recover
              from the other its costs and reasonable fees and expenses of
              attorneys, accountants, and other professionals incurred in
              connection with the suit or proceeding, including costs, fees and
              expenses upon appeal, separately from and in addition to any other
              amount included in such judgment. This provision is intended to be
              severable from the other provisions of this Agreement, and will
              survive and not be merged into any such judgment.
            </p>
            <br />
            <br />
            <p>
              10.3. Force Majeure. No Party will be liable for the failure to
              perform or delay in the performance of its obligations under this
              Agreement, except for payment obligations, to the extent such
              failure or delay is caused by or results from a force majeure
              event and the occurrence of such force majeure event(s) is
              reasonably provable. A “Force Majeure Event” means an event caused
              by a circumstance beyond a Party’s reasonable control, including,
              but not limited to: natural catastrophes, war, public power
              outages, civil unrest, terrorism, labor strikes or shortages
              (strikes and other labor unrest that affect only a Party, a
              Party’s financial hardship, an increase in prices, or a change of
              law will not constitute an excusable delay), and governmental
              action, provided that the delay or failure to perform cannot
              reasonably be circumvented by the non-performing Party through the
              use of other means. If a Party delays its performance or is unable
              to perform under this Agreement due to a Force Majeure Event, it
              will immediately notify the other Party and will also promptly
              notify the other Party when the Force Majeure Event (or its impact
              on such Party) has been abated.
            </p>
            <br />
            <br />
            <p>
              10.4. Notices. All notices required or permitted under this
              Agreement will be in writing and will be deemed delivered if
              delivered in person or by overnight courier service to the
              addresses set forth above. Such address may be changed by either
              Party by providing written notice to the other in the manner set
              forth above.
            </p>
            <br />
            <br />
            <p>
              10.5. Amendment. This Agreement may only be modified or amended
              through a tangible writing signed by both Parties.
            </p>
            <br />
            <br />
            <p>
              10.6. Construction. If any provision of this Agreement will be
              held to be invalid or unenforceable for any reason, the remaining
              provisions will continue to be valid and enforceable. If a court
              finds that any provision of this Agreement is invalid or
              unenforceable, but that by limiting such provision it would become
              valid and enforceable, then such provisions will be deemed to be
              written, construed and enforced as so limited.
            </p>
            <br />
            <br />
            <p>
              10.7. Assignment and Subcontracting. Customer will not, directly
              or indirectly, by assignment or change of control or otherwise,
              transfer this Agreement or any of its rights or obligations
              hereunder or under any Agreement without the prior written consent
              of Blacked IPs. Blacked IPs will have the right to assign its rights and
              obligations hereunder to: (a) a Blacked IPs affiliate or (b) in
              connection with any change of control, merger, acquisition, or
              other transaction involving the sale of all or substantially all
              of Blacked IPs’s assets without Customer’s consent. This Agreement
              will inure to the benefit of and bind the permitted successors and
              assigns of the Parties. Assignments made in violation of this
              Section 11.7 will be null and void. Blacked IPs may subcontract its
              obligations under this Agreement without restriction.
            </p>
            <br />
            <br />
            <p>
              10.8. No Waiver of Contractual Right. The failure of either Party
              to enforce any provision of this Agreement will not be construed
              as a waiver or limitation of that Party’s right to subsequently
              enforce and compel strict compliance with every provision of this
              Agreement. A waiver or consent given on one occasion is effective
              only in that instance and will not be construed as a bar to or
              waiver of any other right on any other occasion.
            </p>
            <br />
            <br />
            <p>
              10.9. Execution in Counterparts and by Electronic Means. This
              Agreement may be executed in counterparts and by electronic means
              (facsimile, electronic signatures, or digital image delivered by
              email) and the Parties agree that such electronic means and
              delivery shall have the same force and effect as delivery of an
              original document with original signatures.
            </p>
            <br />
            <br />
            <p>
              10.10. Compliance With laws. Both Parties will comply with all
              applicable international, federal, state, provincial and local
              laws, rules, regulations, directives and governmental requirements
              in effect now and at any time during the Term that relate to its
              performance under this Agreement.
            </p>
            <br />
            <br />
            <p>
              10.11. Governing Law. This Agreement and all Agreements entered
              into by the Parties hereunder will be governed and interpreted in
              accordance with the laws of the State of New York, without regard
              to its conflicts of laws rules. Customer and Blacked IPs agree that
              all actions and proceedings related to this Agreement or an
              applicable Agreement will be brought only in a state or federal
              court located in New York County, NY, and Customer and Blacked IPs
              hereby consent to such venue and to the jurisdiction of such
              courts over the subject matter of such proceeding and themselves.
            </p>
            <br />
            <br />
            <p>
              10.12. Survival. Sections 3, 5, 6.1, 6.2, 8, 10.2 and 10.11 will
              survive any termination of this Agreement.
            </p>
          </PageText>
          <PageText heading="Contact Information">
            <p>
              If you have any questions or concerns regarding the Agreement
              related to our services, please feel free to contact us at the
              following.
            </p>
            <br />
            <br />
            <p>Email: contact [AT] BlackedIPs.com</p>
          </PageText>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
};

export default TermsCondition;
