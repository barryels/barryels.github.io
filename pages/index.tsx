import Head from "next/head";
import { data } from "../global/dataStore";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          {`${data.fullName} // ${data.currentPosition} @ ${data.currentCompanyName}`}
        </title>
        <meta name="description" content={data.about} />
        <meta name="keywords" content={data.metaKeywords.join(", ")} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/favicon.png" />
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
      </main>

      <footer className="site-footer"></footer>
    </>
  );
}
