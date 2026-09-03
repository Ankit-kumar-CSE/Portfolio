/**
 * @name Projects.tsx
 * @type Page
 */

import { useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import Project from "./components/Project";
import { useOnScreen } from "./hooks/useOnScreen";
import { cn } from "@/lib/utils";
import { useLanguage } from "./contexts/language-context";

/**
 * @Projects
 * Fonction principale
 *
 * @description Page Projects.
 *
 */
function Projects() {
  // Id du project qui est extand (-1 signifie que aucun n'est expand)
  const [expandedProjectId, setExpandedProjectId] = useState(-1);

  /**
   *
   * Si grand écran, rien n'est expand.
   * Si petit écran, on expand si pas déjà expand et on dé expand sinon
   *
   * @param id: id du projet que l'on expand
   */
  const handleExpandProject = (id: number) => {
    if (window.innerWidth > 768) {
      setExpandedProjectId(-1);
    } else {
      setExpandedProjectId(expandedProjectId === id ? -1 : id);
    }
  };

  // Lorsque l'on resize la fenêtre, on dé expand tout
  window.addEventListener("resize", () => {
    handleExpandProject(-1);
  });

  // Références pour l'apparition au scroll
  const [titleRef, titleVisible] = useOnScreen<HTMLDivElement>();
  const [project1Ref, project1Visible] = useOnScreen<HTMLDivElement>();
  const [project2Ref, project2Visible] = useOnScreen<HTMLDivElement>();

  const { texts } = useLanguage();

  return (
    <ParallaxLayer
      offset={2}
      speed={0}
      className="h-min-[600px] flex flex-col items-center justify-center bg-blue-9 dark:bg-blue-4"
    >
      {/* Section title */}
      <div
        ref={titleRef}
        className={cn(
          "flex flex-col items-center gap-2 mb-6 transition-all duration-700 ease-out",
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6",
        )}
      >
        <h2 className="section-title text-3xl lg:text-4xl text-gradient">
          {texts.hero.nav.projects}
        </h2>
        <div
          className="h-[2px] w-16 rounded-full"
          style={{ background: "linear-gradient(90deg, #a2fff4, #6aceff)" }}
        />
      </div>

      {/* Project cards */}
      <div className="flex h-full w-full flex-col justify-center lg:h-4/5 lg:min-h-[600px] lg:flex-row">
        <Project
          ref={project1Ref}
          id={1}
          isExpanded={expandedProjectId === 1}
          onExpand={handleExpandProject}
          className={cn(
            "transition-all duration-1000 ease-in-out hover:duration-300",
            project1Visible ? "" : "pointer-events-none opacity-0",
          )}
        />
        <Project
          ref={project2Ref}
          id={2}
          isExpanded={expandedProjectId === 2}
          onExpand={handleExpandProject}
          className={cn(
            "transition-all delay-300 duration-1000 ease-in-out hover:delay-0 hover:duration-300",
            project2Visible ? "" : "opacity-0",
          )}
        />

      </div>
    </ParallaxLayer>
  );
}

export default Projects;

