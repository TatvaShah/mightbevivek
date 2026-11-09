import { Pic } from "@/components/pic";
import { IgEmbeds } from "@/components/ig-embeds";
import { YouTubeLite } from "@/components/youtube-lite";
import {
  CLAUDAURA_URL, DM, IG, TICKETS, YT, clips, embeds, enquiries, letters, numbers, quotes, shows, specials, ticker,
} from "@/lib/data";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function Stamp({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`stamp ${className}`} data-stamp aria-hidden="true">
      {children}
    </span>
  );
}

function Header() {
  return (
    <header className="topbar">
      <a href="#top" className="brand" aria-label="Vivek Muralidharan, back to top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo.png" alt="" width={36} height={36} />
        <span>Vivek Muralidharan</span>
      </a>
      <nav aria-label="Sections">
        <a href="#tour">Tour</a>
        <a href="#specials">Specials</a>
        <a href="#advice">Advice</a>
        <a href="#record">On record</a>
        <a href="#classifieds">Enquiries</a>
      </nav>
      <a href={TICKETS} {...ext} className="btn btn-red btn-sm">
        Get tickets
      </a>
    </header>
  );
}

function Masthead() {
  return (
    <section id="top" className="masthead wrap">
      <div className="dateline mono">
        <span>Vol. XI</span>
        <span className="hide-sm">Hyderabad edition, also circulated in Chennai and Bengaluru</span>
        <span>Price: one laugh</span>
      </div>
      <h1 className="mast-title" data-mast>
        The Sanity Gazette
      </h1>
      <div className="rule-double" data-rule />
      <div className="dateline mono">
        <span><span className="hide-sm">Published by </span>Vivek Muralidharan</span>
        <span className="hide-sm">Political stand-up. Questions only.</span>
        <a href={IG} {...ext}>@mightbevivek</a>
      </div>

      <div className="front">
        <div className="front-copy">
          <p className="kicker mono">Exclusive</p>
          <h2 className="headline" data-words>
            Chief Minister of West Bengal caught doing stand-up comedy again
          </h2>
          <p className="deck">
            Sources close to the microphone confirm a new hour, <em>Sanity in Diversity</em>, is on tour now. The
            accused, Vivek Muralidharan, has offered no explanation, only jokes.
          </p>
          <div className="cta-row">
            <a href={TICKETS} {...ext} className="btn btn-red" data-magnetic>
              Get tickets
            </a>
            <a href={DM} {...ext} className="btn btn-ink">
              DM @mightbevivek
            </a>
          </div>
          <p className="byline mono">Filed from Hyderabad. Ok bye friends.</p>
        </div>
        <figure className="front-photo">
          <div className="halftone" data-reveal-img>
            <Pic src="/images/hero-stage.jpg" alt="Vivek Muralidharan on stage, both hands raised at the microphone" sizes="(max-width: 900px) 92vw, 40vw" priority />
          </div>
          <Stamp className="stamp-hero">On tour</Stamp>
          <figcaption className="mono">Pictured: the accused, mid explanation. Both hands visible at all times.</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Ticker() {
  const items = [...ticker, ...ticker];
  return (
    <div className="ticker" aria-label="Latest">
      <div className="ticker-track" data-ticker>
        {items.map((t, i) => (
          <span key={i} aria-hidden={i >= ticker.length}>
            {t}
            <b>✱</b>
          </span>
        ))}
      </div>
    </div>
  );
}

function Tour() {
  return (
    <section id="tour" className="section wrap">
      <div className="section-head">
        <p className="mono kicker">Page 2 · Official notification</p>
        <h2 className="h2" data-words>Sanity in Diversity. Now touring.</h2>
        <p className="lede">
          Unity in diversity, we can get later. The new hour is about the country right now: stories, straight talk
          and the absurd bits in between.
        </p>
      </div>
      <div className="tour-grid">
        <ol className="schedule">
          {shows.map((s) => (
            <li key={s.city} className={s.joke ? "row joke" : "row"} data-row>
              <span className="mono when">{s.date}</span>
              <span className="city">{s.city}</span>
              <span className="detail">{s.detail}</span>
              {s.href ? (
                <a href={s.href} {...ext} className="btn btn-outline btn-sm">
                  {s.cta}
                </a>
              ) : (
                <span className="mono redacted">No seats</span>
              )}
            </li>
          ))}
        </ol>
        <figure className="poster">
          <div className="halftone">
            <Pic src="/images/tour-poster.jpg" alt="Sanity in Diversity tour poster with dates for Jupiter, Hyderabad, Chennai and Bengaluru" sizes="(max-width: 900px) 92vw, 34vw" />
          </div>
          <Stamp className="stamp-poster">Approved</Stamp>
          <figcaption className="mono">Exhibit A: the poster. Ticket links live in his Instagram bio.</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Specials() {
  const g = specials.goat;
  const ij = specials.indiaJuice;
  return (
    <section id="specials" className="section section-ink">
      <div className="wrap">
        <div className="section-head">
          <p className="mono kicker">Arts and culture</p>
          <h2 className="h2" data-words>Two full specials. No subscription required.</h2>
        </div>
        <div className="feature">
          <div className="feature-video" data-reveal-img>
            <YouTubeLite id={g.id} title="GOAT, full stand-up comedy special by Vivek Muralidharan" image={g.image} />
          </div>
          <div className="feature-copy">
            <p className="mono kicker red">{g.year} · Full special</p>
            <h3 className="h3">{g.title}</h3>
            <p className="pull">“{g.question}”</p>
            <p>{g.blurb}</p>
            <p className="mono small muted-ink">{g.credits}</p>
          </div>
        </div>
        <div className="more">
          <a href={ij.href} {...ext} className="clip clip-wide" data-card>
            <div className="clip-img">
              <Pic src={ij.image} alt="India Juice special thumbnail" sizes="(max-width: 900px) 92vw, 40vw" />
            </div>
            <div>
              <p className="mono kicker red">{ij.year} · Full special</p>
              <h3 className="h4">{ij.title}</h3>
              <p>{ij.blurb}</p>
            </div>
          </a>
          <div className="clips">
            {clips.map((c) => (
              <a key={c.title} href={c.href} {...ext} className="clip" data-card>
                <div className="clip-img">
                  <Pic src={c.image} alt={`${c.title} stand-up clip thumbnail`} sizes="(max-width: 640px) 46vw, 20vw" />
                </div>
                <p className="h5">{c.title}</p>
              </a>
            ))}
          </div>
          <a href={YT} {...ext} className="btn btn-paper">
            More on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}

function Advice() {
  return (
    <section id="advice" className="section wrap">
      <div className="section-head">
        <p className="mono kicker">Agony column</p>
        <h2 className="h2" data-words>Life advice. Questions only.</h2>
        <p className="lede">
          You ask for life advice. You get the news, explained badly on purpose. Real questions from real readers,
          answered on camera.
        </p>
      </div>
      <div className="letters">
        {letters.map((l, i) => (
          <a key={l.q} href={l.href} {...ext} className="letter" data-card>
            <p className="mono small">Letter No. {String(i + 1).padStart(3, "0")}</p>
            <p className="letter-q">“{l.q}”</p>
            <p className="mono small">Answer enclosed. Watch the reply ↗</p>
          </a>
        ))}
      </div>
      <IgEmbeds urls={embeds} />
      <div className="center">
        <a href={DM} {...ext} className="btn btn-red" data-magnetic>
          Send in your question
        </a>
      </div>
    </section>
  );
}

function OnRecord() {
  return (
    <section id="record" className="section section-paper2">
      <div className="wrap">
        <div className="section-head">
          <p className="mono kicker">Op ed · On the record</p>
          <h2 className="h2" data-words>He said it. We printed it.</h2>
        </div>
        <div className="quotes">
          {quotes.map((q) => (
            <figure key={q.text} className="quote" data-card>
              <blockquote>“{q.text}”</blockquote>
              <figcaption className="mono small">
                <a href={q.href} {...ext}>{q.source} ↗</a>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="numbers">
          {numbers.map((n) => (
            <div key={n.label} className="num" data-row>
              <span className="num-n" data-count={n.n}>{n.n}</span>
              <span className="num-l">{n.label}</span>
              <span className="mono small muted">{n.note}</span>
            </div>
          ))}
        </div>
        <div className="portrait-row">
          <div className="portrait halftone" data-reveal-img>
            <Pic src="/images/portrait.jpg" alt="Portrait of Vivek Muralidharan on stage" sizes="(max-width: 900px) 60vw, 22vw" />
          </div>
          <div className="portrait-copy">
            <p className="drop">
              Vivek Muralidharan is a stand-up comedian from Hyderabad who writes about politics, religion, atheism,
              festivals, dogs and whatever the news did this week. While many comics stick to dating, he picks the
              topics that make a room go quiet, then finds the funny way to say them.
            </p>
            <p>
              He performs across the south, from Hyderabad to Chennai and Bengaluru, and posts the evidence on Instagram.
            </p>
            <a href={IG} {...ext} className="btn btn-ink">
              Follow @mightbevivek
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Classifieds() {
  return (
    <section id="classifieds" className="section wrap">
      <div className="section-head">
        <p className="mono kicker">Classifieds</p>
        <h2 className="h2" data-words>Wanted: rooms that still laugh at the news.</h2>
      </div>
      <div className="ads">
        {enquiries.map((e) =>
          e.href ? (
            <a key={e.k} href={e.href} {...(e.href.startsWith("tel:") ? {} : ext)} className="ad" data-card>
              <p className="mono small">{e.k}</p>
              <p className="ad-v">{e.v}</p>
            </a>
          ) : (
            <div key={e.k} className="ad ad-pending">
              <p className="mono small">{e.k}</p>
              <p className="ad-v">{e.v}</p>
            </div>
          ),
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <p className="bye" data-words>Ok bye friends.</p>
        <div className="rule-double light" />
        <div className="foot-row mono small">
          <span>© {new Date().getFullYear()} Vivek Muralidharan. The Sanity Gazette is satire. Mostly.</span>
          <span className="foot-links">
            <a href={IG} {...ext}>Instagram</a>
            <a href={YT} {...ext}>YouTube</a>
            <a href={TICKETS} {...ext}>Tickets</a>
          </span>
          <span>
            Website by{" "}
            <a href={CLAUDAURA_URL} {...ext} className="ul">
              ClaudAura
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Masthead />
        <Ticker />
        <Tour />
        <Specials />
        <Advice />
        <OnRecord />
        <Classifieds />
      </main>
      <Footer />
      <a href={TICKETS} target="_blank" rel="noopener noreferrer" className="float-cta mono">
        Tickets ↗
      </a>
    </>
  );
}
