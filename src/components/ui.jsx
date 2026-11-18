/**
 * Small, reusable building blocks shared by every section.
 */
import { motion } from "framer-motion";

/**
 * Page section with an anchor id, an eyebrow label and a heading.
 * Content fades up once when it scrolls into view.
 */
export function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-20 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {title}
          </h2>
        )}
        <div className="mt-10">{children}</div>
      </motion.div>
    </section>
  );
}

/** Pill used for technologies and skills. */
export function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-slate">
      {children}
    </span>
  );
}

/**
 * Link styled as a button. External links open in a new tab safely.
 * variant: "primary" (filled navy) or "secondary" (outlined).
 */
export function ButtonLink({ href, children, variant = "primary", icon: Icon }) {
  const isExternal = href.startsWith("http");
  const styles =
    variant === "primary"
      ? "bg-navy text-white hover:bg-navy-dark"
      : "border border-line bg-white text-ink hover:border-navy hover:text-navy";

  return (
    <a
      href={href}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${styles}`}
    >
      {Icon && <Icon aria-hidden="true" className="text-base" />}
      {children}
    </a>
  );
}
