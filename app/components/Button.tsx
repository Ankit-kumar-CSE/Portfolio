/**
 * @name Button.tsx
 * @type Component
 */

import { cn } from "@/lib/utils";
import { Ref } from "react";

// Propriétés
type Props = {
  ref?: Ref<HTMLButtonElement>;
  text: string;
  className?: string;
  onClick?: () => void;
};

/**
 * @Button
 * Fonction principale
 *
 * @description Bouton avec des styles appliqués.
 *
 * @param ref: Reference qui sert pour l'apparition au scroll
 * @param text: Texte a afficher dans le boutton
 * @param className: Classe supplémentaire à appliquer au bouton
 * @param onClick: Fonction qui va s'éxécuter lors du click sur le bouton
 *
 */
function Button({ ref, text, className = "", onClick = () => {} }: Props) {
  return (
    <button
      ref={ref}
      className={cn("group relative p-[2px] rounded-xl focus:outline-none", className)}
      onClick={onClick}
      style={{
        filter: "drop-shadow(0 0 0px rgba(162,255,244,0))",
        transition: "filter 0.3s ease",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.filter =
          "drop-shadow(0 0 14px rgba(162,255,244,0.55))";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.filter =
          "drop-shadow(0 0 0px rgba(162,255,244,0))";
      }}
    >
      {/* Animated gradient border */}
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          background:
            "linear-gradient(135deg, #a2fff4 0%, #6aceff 50%, #a2fff4 100%)",
          backgroundSize: "200% 200%",
          animation: "gradient-sweep 3s ease infinite",
        }}
      />

      {/* Inner surface */}
      <div
        className="relative rounded-[10px] px-8 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-300 lg:text-sm"
        style={{
          background: "rgba(0, 19, 28, 0.92)",
          color: "#a2fff4",
          letterSpacing: "0.08em",
        }}
      >
        {/* Shimmer overlay on hover */}
        <span
          className="pointer-events-none absolute inset-0 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shimmer-btn"
        />
        {text}
      </div>
    </button>
  );
}

export default Button;
