/**
 * @name Footer.tsx
 * @type Page
 */

import { ParallaxLayer } from "@react-spring/parallax";
import { fontJersey15, fontInter } from "@/lib/font";
import { cn } from "@/lib/utils";
import Link from "next/link";

// import "./style/footer.css";
import { useLanguage } from "./contexts/language-context";


// Propriétés
type Props = {
  name: string;
  href: string;
};

/**
 * @FooterMedia
 *
 * @description Footer link item.
 *
 * @param name: Nom du media
 * @param href: Lien vers lequel renvoie le clique sur le texte
 */
const FooterMedia = ({ name, href }: Props) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="p-fluide-anim transform text-sm tracking-wide transition-all duration-200 hover:scale-105"
      style={{ color: "rgba(247,247,247,0.65)" }}
      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#a2fff4"; (e.currentTarget as HTMLAnchorElement).style.textShadow = "0 0 12px rgba(162,255,244,0.5)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(247,247,247,0.65)"; (e.currentTarget as HTMLAnchorElement).style.textShadow = "none"; }}
    >
      {name}
    </Link>
  );
};

/**
 * @Footer
 * Fonction principale
 *
 * @description Footer qui contient mon nom et mes réseaux sociaux.
 *
 */
function Footer() {

  // Récupération du textes
  const { texts } = useLanguage();

  return (
    <ParallaxLayer
      offset={3}
      speed={0}
      className="min-[600px] pointer-events-none relative"
    >
      {/* Gradient top separator */}
      <div
        className="absolute bottom-9 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(162,255,244,0.25) 30%, rgba(106,206,255,0.35) 50%, rgba(162,255,244,0.25) 70%, transparent)" }}
      />

      <div
        className="pointer-events-auto absolute bottom-0 flex h-9 w-full flex-row items-center justify-evenly"
        style={{
          background: "rgba(0, 13, 20, 0.75)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        {/* Nom Prénom */}
        <span
          className={cn(fontJersey15.className, "text-xl lg:text-3xl text-gradient")}
        >
          {texts.hero.ankit}
        </span>

        <div className="h-1/2 w-px opacity-25" style={{ background: "linear-gradient(to bottom, transparent, #a2fff4, transparent)" }}></div>

        <div
          className={cn(
            fontInter.className,
            "flex flex-row gap-3 text-sm lg:gap-16",
          )}
        >
          {/* Media Github */}
          <FooterMedia
            name={texts.footer.git}
            href="https://github.com/Ankit-kumar-CSE"
          />

          {/* Media Linkedin */}
          <FooterMedia
            name={texts.footer.linkedin}
            href="https://www.linkedin.com/in/ankit-kumar-8833a937b/"
          />

          {/* Media Mail */}
          <FooterMedia
            name={texts.footer.mail}
            href="mailto:ankitjaat00010@gmail.com"
          />
        </div>
      </div>
    </ParallaxLayer>
  );
}

export default Footer;

