/**
 * @name About.tsx
 * @type Page
 */

import { ParallaxLayer } from "@react-spring/parallax";

import Timeline from "./components/Timeline";
import "./style/about.css";
import Button from "./components/Button";
import Link from "next/link";
import { useOnScreen } from "./hooks/useOnScreen";
import { cn } from "@/lib/utils";
import SocialMedia from "./components/SocialMedia";


import githubBadge from "../public/img/social_media/github-badge.svg";
import linkedinBadge from "../public/img/social_media/linkedin-badge.svg";
import mailBadge from "../public/img/social_media/mail-badge.svg";
import { useLanguage } from "./contexts/language-context";

/**
 * @About
 * Fonction principale
 *
 * @description Page About.
 *
 */
function About() {
  // Références pour l'apparition au scroll
  const [aboutRef, aboutVisible] = useOnScreen<HTMLDivElement>();

  const [descRef, descVisible] = useOnScreen<HTMLDivElement>();
  const [cvRef, cvVisible] = useOnScreen<HTMLButtonElement>();
  const [contactRef, contactVisible] = useOnScreen<HTMLDivElement>();

  // Récupération du textes
  const { texts } = useLanguage();

  const techTags = ["Full-Stack", "MERN", "Next.js", "PostgreSQL", "React Native", "AI"];

  return (
    <ParallaxLayer
      offset={1}
      speed={0}
      className="relative flex min-h-[600px] flex-col items-center justify-evenly bg-blue-9 dark:bg-blue-4 lg:flex-row"
    >
      {/* Decorative top wave */}
      <div className="absolute top-0 -z-10 hidden h-32 w-full flex-col items-center bg-blue-9 dark:flex">
        <div className="half-ellipse absolute bg-blue-8"></div>
        <div className="half-ellipse absolute top-2 bg-blue-7"></div>
        <div className="half-ellipse absolute top-4 bg-blue-5"></div>
        <div className="half-ellipse absolute top-6 bg-blue-6"></div>
        <div className="half-ellipse absolute top-8 bg-blue-4"></div>
      </div>

      {/* Ambient orbs */}
      <div
        className="gradient-orb"
        style={{
          width: "320px",
          height: "320px",
          background: "radial-gradient(circle, rgba(162,255,244,0.18) 0%, transparent 70%)",
          top: "10%",
          left: "-80px",
        }}
      />
      <div
        className="gradient-orb"
        style={{
          width: "250px",
          height: "250px",
          background: "radial-gradient(circle, rgba(106,206,255,0.15) 0%, transparent 70%)",
          bottom: "15%",
          right: "-60px",
          animationDelay: "3s",
        }}
      />

      {/* ── Main info card ── */}
      <div
        ref={aboutRef}
        className={cn(
          "mx-4 flex flex-col items-center justify-center rounded-2xl transition-all duration-700 ease-out lg:mx-0",
          aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        )}
        style={{
          background: "rgba(0, 19, 28, 0.55)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(162, 255, 244, 0.15)",
          boxShadow: "0 8px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(162,255,244,0.1)",
        }}
      >
        <div className="m-px flex flex-col items-center justify-evenly gap-6 rounded-2xl py-8 lg:h-full lg:py-6 lg:min-h-[620px]">

          {/* Section title */}
          <div className="flex flex-col items-center gap-1">
            <h2
              className="section-title text-2xl lg:text-3xl text-gradient"
            >
              About Me
            </h2>
            <div
              className="h-[2px] w-12 rounded-full"
              style={{ background: "linear-gradient(90deg, #a2fff4, #6aceff)" }}
            />
          </div>

          {/* Description */}
          <div
            ref={descRef}
            className={cn(
              "mx-8 max-w-[400px] text-sm leading-relaxed transition-all duration-500 ease-in-out lg:text-base",
              descVisible ? "" : "-translate-x-40 opacity-0",
            )}
            style={{ color: "rgba(247,247,247,0.82)", fontFamily: "'Inter', sans-serif", lineHeight: "1.75" }}
          >
            {texts.about.desc}
          </div>

          {/* Animated tech tags */}
          <div className="flex flex-wrap justify-center gap-2 px-8 max-w-[400px]">
            {techTags.map((tag, i) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 text-[11px] font-semibold tracking-wider uppercase"
                style={{
                  background: "rgba(162,255,244,0.08)",
                  border: "1px solid rgba(162,255,244,0.25)",
                  color: "#a2fff4",
                  animationDelay: `${i * 0.15}s`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CV button */}
          <Link href="/CV_RASERA_Arthur_FR.pdf" target="_blank">
            <Button
              ref={cvRef}
              text={texts.about.seeCV}
              className={cn(
                "transition-all duration-500 ease-in-out",
                cvVisible ? "" : "translate-x-40 opacity-0",
              )}
            />
          </Link>

          {/* Social badges */}
          <div
            ref={contactRef}
            className={cn(
              "flex flex-row gap-5 transition-all duration-500 ease-in-out md:scale-125",
              contactVisible ? "" : "-translate-x-40 opacity-0",
            )}
          >
            <div
              className="rounded-full p-px duration-300 hover:scale-125"
              style={{ background: "linear-gradient(135deg, #a2fff4, #6aceff)", boxShadow: "0 0 0 rgba(162,255,244,0)", transition: "box-shadow 0.3s ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 16px rgba(162,255,244,0.45)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 rgba(162,255,244,0)"; }}
            >
              <SocialMedia
                svgSrc={githubBadge}
                num="1"
                href="https://github.com/Ankit-kumar-CSE"
                alt={texts.hero.social.altGit}
              />
            </div>

            {/* Badge Linkedin */}
            <div
              className="rounded-full p-px duration-300 hover:scale-125"
              style={{ background: "linear-gradient(135deg, #a2fff4, #6aceff)", boxShadow: "0 0 0 rgba(162,255,244,0)", transition: "box-shadow 0.3s ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 16px rgba(162,255,244,0.45)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 rgba(162,255,244,0)"; }}
            >
              <SocialMedia
                svgSrc={linkedinBadge}
                num="2"
                href="https://www.linkedin.com/in/ankit-kumar-8833a937b/"
                alt={texts.hero.social.altLinkedin}
              />
            </div>

            {/* Badge Mail */}
            <div
              className="rounded-full p-px duration-300 hover:scale-125"
              style={{ background: "linear-gradient(135deg, #a2fff4, #6aceff)", boxShadow: "0 0 0 rgba(162,255,244,0)", transition: "box-shadow 0.3s ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 16px rgba(162,255,244,0.45)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 rgba(162,255,244,0)"; }}
            >
              <SocialMedia
                svgSrc={mailBadge}
                num="3"
                href="mailto:ankitjaat00010@gmail.com"
                alt={texts.hero.social.altMail}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Timeline sur mon parcours */}
      <Timeline className="scale-90 lg:scale-110" />
    </ParallaxLayer>
  );
}

export default About;

