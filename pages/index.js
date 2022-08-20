import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Barry Els // Technical Architect @ Platform45</title>
        <meta
          name="description"
          content="Barry Els is one of several Technical Architects at Platform 45. He joined the team in July 2018 after spending 20 years as an engineer, and later as a Technical Architect, across multiple domains and a diverse range of clients, from multinational corporate clients to small businesses and start-ups."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className="site-header"></header>

      <main>
        <section id="home">
          <h1>Barry Els</h1>
        </section>

        <section id="about">
          <p>
            Barry Els is one of several Technical Architects at Platform 45. He
            joined the team in July 2018 after spending 20 years as an engineer,
            and later as a Technical Architect, across multiple domains and a
            diverse range of clients, from multinational corporate clients to
            small businesses and start-ups.
          </p>

          <h2>Career highlights include:</h2>
          <ul>
            <li>
              Leading a team of engineers in the development of a bespoke
              Content Management and Delivery micro-platform for rich digital
              experiences within the retail space.
            </li>
            <li>
              Architecting and leading a team of engineers in the development of
              a white-labelled Hybrid mobile application platform to rapidly
              deploy custom mobile applications for insurance companies.
            </li>
          </ul>
          <p>
            Barry is passionate about building a better web for end users, and
            consequently the businesses that utilise this amazing platform.
            Whether through technical innovation, solid user experience or
            process engineering, his focus is always on making small, consistent
            improvements over time. Barry has had the good fortune to experience
            many years building solutions using a wide range of technologies
            within a multitude of business domains.
          </p>
        </section>
      </main>

      <footer className="site-footer"></footer>
    </div>
  );
}
