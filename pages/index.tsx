import Head from "next/head";
import { getSiteInfo } from "../global/dataStore";
import SiteIntro from "../components/SiteIntro";
import SiteFooter from "../components/SiteFooter";
import EventLogTimeline from "../components/EventLogTimeline";

export default function Home() {
  const siteInfo = getSiteInfo();
  return (
    <>
      <Head>
        <title>
          {`${siteInfo.fullName} // ${siteInfo.currentPosition} @ ${siteInfo.currentCompanyName}`}
        </title>
        <meta name="description" content={siteInfo.about} />
        <meta name="keywords" content={siteInfo.metaKeywords.join(", ")} />
      </Head>

      <main>
        <SiteIntro />

        <EventLogTimeline />
      </main>

      <SiteFooter />
    </>
  );
}
