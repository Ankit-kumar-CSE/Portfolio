/**
 * @name Project
 * @type Component
 */

"use client";

import { cn } from "@/lib/utils";
import { fontJersey15 } from "@/lib/font";
import "../style/project.css";
import SocialMedia from "./SocialMedia";

import Image from "next/image";
import { Ref } from "react";

import projectsEn from "../../lang/data-projects-en";

import githubBadge from "../../public/img/social_media/github-badge.svg";
import { useLanguage } from "../contexts/language-context";

// Propriétés
type Props = {
  ref?: Ref<HTMLDivElement>;
  id: number;
  isExpanded: boolean;
  onExpand: (id: number) => void;
  className?: string;
};

/**
 * @Project
 * Fonction principale
 *
 * @description Affichage d'un projet, avec son titre
 * sa description, une image représentative et un lien github.
 *
 * @param ref: Reference qui sert pour l'apparition au scroll
 * @param id: Id du projet à afficher
 * @param isExpended: Indicateur si le projet est actuellement expand
 * @param onExpand: Fonction a éxécuter lorsque un projet s'extand
 * @param className: Classe supplémentaire à appliquer au bouton
 *
 */
function Project({ ref, id, isExpanded, onExpand, className }: Props) {

  const projects = projectsEn;

  // Récupération du projet correspondant à l'id
  const selectedProject = projects?.find((project) => project.id === id);

  // Couleur de fond du projet
  const bg_col = selectedProject?.color ?? "#000000";

  /**
   * Assombrie la couleur passée en paramètre.
   */
  const darkenColor = (color: string, percent: number) => {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const newR = Math.floor(r * (1 - percent));
    const newG = Math.floor(g * (1 - percent));
    const newB = Math.floor(b * (1 - percent));
    return `#${((1 << 24) | (newR << 16) | (newG << 8) | newB).toString(16).slice(1)}`;
  };

  const darkenedColor = darkenColor(bg_col, 0.35);
  const { texts } = useLanguage();
  const tags = (selectedProject as { tags?: string[] })?.tags ?? [];

  return (
    <div
      ref={ref}
      className={cn(
        "group relative mx-3 my-2 flex flex-col overflow-hidden rounded-3xl transition-all duration-500 lg:w-[360px] lg:flex-grow-0 lg:hover:-translate-y-6 lg:hover:scale-[1.03]",
        className,
      )}
      style={{
        background: `linear-gradient(145deg, ${darkenedColor} 0%, ${bg_col} 60%, ${darkenedColor} 100%)`,
        boxShadow: `0 20px 60px ${bg_col}50, 0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12)`,
        border: `1px solid ${bg_col}60`,
      }}
    >
      {/* ── Hero image fills top of card ── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "220px" }}
        onClick={() => onExpand(id)}
      >
        {/* Background image with slight dark vignette */}
        <Image
          src={selectedProject?.image_path ?? ""}
          alt={selectedProject?.title ?? ""}
          fill
          className="object-contain transition-transform duration-700 group-hover:scale-110"
          style={{ background: "rgba(0,0,0,0.18)" }}
        />

        {/* Top vignette for gradient blending */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, transparent 40%, ${darkenedColor}dd 100%)`,
          }}
        />

        {/* GitHub badge – top right */}
        <div className="absolute top-3 right-3 z-20">
          <SocialMedia
            svgSrc={githubBadge}
            className="p-fluide-anim shadow-[0_2px_12px_rgba(0,0,0,0.6)] scale-95 lg:scale-100"
            href={selectedProject?.link}
            alt={`${texts.projects.altProjects} ${selectedProject?.title}`}
          />
        </div>

        {/* Expanded overlay description */}
        {isExpanded && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 p-6 text-center text-white">
            <p className="text-sm leading-relaxed">{selectedProject?.description ?? texts.projects.noDescription}</p>
          </div>
        )}
      </div>

      {/* ── Card body ── */}
      <div className="p-bg-lines flex flex-col gap-3 px-5 pt-4 pb-5">

        {/* Title row */}
        <div className="flex items-center gap-3">
          {/* Small logo icon */}
          <div
            className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-xl border border-white/20"
            style={{ background: "rgba(0,0,0,0.3)" }}
          >
            <Image
              src={selectedProject?.image_path ?? ""}
              alt=""
              fill
              className="object-contain p-1"
            />
          </div>

          {/* Title */}
          <div className="flex flex-col min-w-0">
            <h2
              className={cn(
                "truncate text-xl leading-snug text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] lg:text-2xl",
                fontJersey15.className,
              )}
            >
              {selectedProject?.title}
            </h2>
            {/* Animated accent bar */}
            <div
              className="mt-1 h-[2px] w-8 rounded-full transition-all duration-500 group-hover:w-16"
              style={{ background: "rgba(255,255,255,0.55)" }}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.1)" }} />

        {/* Description */}
        <p className="line-clamp-3 text-xs leading-relaxed text-white/75 lg:text-[13px]">
          {selectedProject?.description ?? texts.projects.noDescription}
        </p>

        {/* Tech tag chips */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase text-white/85"
                style={{
                  background: "rgba(0,0,0,0.30)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;
