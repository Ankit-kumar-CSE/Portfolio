/**
 * @name Skills.tsx
 * @type Page
 */

import { ParallaxLayer } from "@react-spring/parallax";
import Skill from "./components/Skill";
import CrossSkills from "./components/CrossSkills";
import { useOnScreen } from "./hooks/useOnScreen";
import { cn } from "@/lib/utils";
import { useLanguage } from "./contexts/language-context";

/**
 * @Skills
 * Fonction principale
 *
 * @description Page Skills.
 *
 */
function Skills() {
  // Référence pour l'apparition au scroll
  const [skillsRef, skillsVisible] = useOnScreen<HTMLDivElement>();
  const [titleRef, titleVisible] = useOnScreen<HTMLDivElement>();

  const { texts } = useLanguage();

  return (
    <ParallaxLayer
      offset={3}
      speed={0}
      className="min-[600px] flex flex-col items-center bg-blue-9 dark:bg-blue-4 pt-8"
    >
      {/* Section title */}
      <div
        ref={titleRef}
        className={cn(
          "flex flex-col items-center gap-2 mb-8 transition-all duration-700 ease-out",
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6",
        )}
      >
        <h2 className="section-title text-3xl lg:text-4xl text-gradient">
          {texts.hero.nav.skills}
        </h2>
        <div
          className="h-[2px] w-16 rounded-full"
          style={{ background: "linear-gradient(90deg, #a2fff4, #6aceff)" }}
        />
      </div>

      <div
        ref={skillsRef}
        className="p-fluide-anim relative m-auto flex aspect-[2/3] w-5/6 max-w-96 flex-col lg:scale-110"
      >
        <CrossSkills />
        <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-4">
          <Skill
            id={1}
            className={cn(
              "transition-all duration-1000 ease-in-out",
              skillsVisible ? "" : "scale-0 opacity-0",
            )}
          />
          <Skill
            id={2}
            className={cn(
              "transition-all delay-100 duration-1000 ease-in-out",
              skillsVisible ? "" : "scale-0 opacity-0",
            )}
          />
          <Skill
            id={3}
            className={cn(
              "transition-all delay-200 duration-1000 ease-in-out",
              skillsVisible ? "" : "scale-0 opacity-0",
            )}
          />
          <Skill
            id={4}
            className={cn(
              "transition-all delay-300 duration-1000 ease-in-out",
              skillsVisible ? "" : "scale-0 opacity-0",
            )}
          />
        </div>
      </div>
    </ParallaxLayer>
  );
}

export default Skills;

