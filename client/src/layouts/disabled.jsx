import React from 'react';
import { PageTitle, Footer, PageText } from "@/widgets/layout";

export const Disabled = () => {
    return (    
      <>
      <section className="relative bg-blue-gray-50/50 py-24 ">
        <div className="container mx-auto ">
          <PageTitle heading="Security problems detected" />
          <div className="mb-10"></div>
          <PageText heading="Page is disabled by Blacked IPs">
            <p>
            We regret to inform you that this page is currently unavailable due to security reasons. Our systems have detected some unusual activities that breach our security protocols. We prioritize your security and are diligently working to rectify this issue. Please note that this measure is purely precautionary, and we sincerely apologize for any inconvenience this may have caused.
            <br />
            <br />
            In the meantime, we are redirecting you to a safer zone. If you're interested, you can check out the Black Eyed Peas' official site for some amazing music. Just follow the link here: <a href="https://www.blackeyedpeas.com/" className="font-semibold text-blue-600">https://www.blackeyedpeas.com/</a>
            <br />
            <br />
            We understand that this is an unexpected interruption, but we are making efforts to restore normalcy as soon as possible. We request your understanding and patience during this time. If you have any concerns or questions, feel free to reach out to us. Thank you for your cooperation.
            </p>
          </PageText>
        </div>
      </section>
    </>
    )
}

export default Disabled;
