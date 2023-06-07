import Head from "next/head";
import { getSiteInfo } from "../../global/dataStore";
import CurriculumVitae from "../../components/CurriculumVitae";

export default function CurriculumVitaePage() {
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
        <CurriculumVitae />
      </main>
    </>
  );
}
