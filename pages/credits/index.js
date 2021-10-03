import Head from "next/head";
import Header from "../../components/Header";

export default function CreditsPage() {
  return (
    <>
      <Head>
        <title>Credits | Docker Genius</title>
      </Head>
      <div className="Container">
        <Header
          tagline="Effortless development environments with pure Docker."
          title="Docker Genius"
        />
        <main>
          <h2>Credits</h2>
          <p>Website design and development by <a href="https://evanbyrne.com" rel="noreferrer" target="_blank">Evan Byrne</a> at <a href="https://beakerstudio.com" rel="noreferrer" target="_blank">Beaker Studio</a>.</p>

          <h3>Open Source</h3>
          <ul>
            <li><a href="https://www.docker.com" rel="noreferrer" target="_blank">Docker</a></li>
            <li><a href="https://github.com/eslint/eslint" rel="noreferrer" target="_blank">ESLint</a></li>
            <li><a href="https://github.com/nodeca/js-yaml" rel="noreferrer" target="_blank">JS-YAML</a></li>
            <li><a href="https://nextjs.org" rel="noreferrer" target="_blank">Next.js</a></li>
            <li><a href="https://nodejs.org" rel="noreferrer" target="_blank">Node.js</a></li>
            <li><a href="https://reactjs.org" rel="noreferrer" target="_blank">React</a></li>
            <li><a href="https://react-hook-form.com" rel="noreferrer" target="_blank">React Hook Form</a></li>
          </ul>
        </main>
      </div>
    </>
  );
}
