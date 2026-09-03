/**
 * @name CrossSkills.tsx
 * @type Component
 */

/**
 * @CrossSkills
 * Fonction principale
 *
 * @description Affiche 4 compartiements de couleurs séparés de lignes.
 *
 */
function CrossSkills() {
  return (
    <>
      {/* Trait vertical */}
      <div className="pointer-events-none absolute flex h-full w-full items-center justify-center">
        <div
          className="h-full w-[2px]"
          style={{
            background:
              "linear-gradient(to bottom, transparent,#6aceff 10% ,#6aceff 90% ,transparent)",
          }}
        ></div>
      </div>

      {/* Trait horizontal (un seul pour créer 4 compartiments) */}
      <div className="pointer-events-none absolute flex h-full w-full flex-col items-center justify-center">
        <div
          className="h-[2px] w-full"
          style={{
            background:
              "linear-gradient(to right, transparent,  #6aceff 10% ,#6aceff 90% , transparent)",
          }}
        ></div>
      </div>

      {/* Les 4 compartiments */}
      <div
        className="p-fluide-anim absolute left-0 top-0 h-1/2 w-1/2 opacity-50 hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at bottom right, rgba(0,255,0,0.2), transparent 70%)",
        }}
      />

      <div
        className="p-fluide-anim absolute right-0 top-0 h-1/2 w-1/2 opacity-50 hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at bottom left, rgba(255,255,0,0.2), transparent 70%)",
        }}
      />

      <div
        className="p-fluide-anim absolute bottom-0 left-0 h-1/2 w-1/2 opacity-50 hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(255,0,0,0.3), transparent 70%)",
        }}
      />

      <div
        className="p-fluide-anim absolute bottom-0 right-0 h-1/2 w-1/2 opacity-50 hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(128,0,128,0.4), transparent 70%)",
        }}
      />
    </>
  );
}

export default CrossSkills;
