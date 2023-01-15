import Head from "next/head";
import { data } from "../global/dataStore";
import EventLogTimeline from "../components/EventLogTimeline";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          {`${data.fullName} // ${data.currentPosition} @ ${data.currentCompanyName}`}
        </title>
        <meta name="description" content={data.about} />
        <meta name="keywords" content={data.metaKeywords.join(", ")} />
      </Head>

      <header className="site-header"></header>

      <main>
        <section id="home">
          <h1>{data.fullName}</h1>
        </section>

        <section id="about">
          <p>{data.about}</p>

          <h2>Career highlights include:</h2>
          <ul>
            {data.careerHighlights.map((careerHighlight, index) => {
              return <li key={index}>{careerHighlight.description}</li>;
            })}
          </ul>
        </section>

        <EventLogTimeline />
      </main>

      <footer className="site-footer"></footer>
    </>
  );
}
