---
name: Obsidian Scholar
colors:
  surface: '#101412'
  surface-dim: '#101412'
  surface-bright: '#363a38'
  surface-container-lowest: '#0b0f0d'
  surface-container-low: '#181c1a'
  surface-container: '#1c201e'
  surface-container-high: '#272b29'
  surface-container-highest: '#323633'
  on-surface: '#e0e3e0'
  on-surface-variant: '#bfc9c2'
  inverse-surface: '#e0e3e0'
  inverse-on-surface: '#2d312f'
  outline: '#89938c'
  outline-variant: '#3f4943'
  surface-tint: '#8fd5b5'
  primary: '#8fd5b5'
  on-primary: '#003827'
  primary-container: '#599e80'
  on-primary-container: '#003121'
  inverse-primary: '#226a50'
  secondary: '#b1cdbe'
  on-secondary: '#1d352b'
  secondary-container: '#334c40'
  on-secondary-container: '#a0bbad'
  tertiary: '#ffb3ae'
  on-tertiary: '#561e1d'
  tertiary-container: '#ca7b77'
  on-tertiary-container: '#4d1817'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#aaf1d0'
  primary-fixed-dim: '#8fd5b5'
  on-primary-fixed: '#002115'
  on-primary-fixed-variant: '#005139'
  secondary-fixed: '#cde9d9'
  secondary-fixed-dim: '#b1cdbe'
  on-secondary-fixed: '#072016'
  on-secondary-fixed-variant: '#334c40'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ae'
  on-tertiary-fixed: '#3a090a'
  on-tertiary-fixed-variant: '#723431'
  background: '#101412'
  on-background: '#e0e3e0'
  surface-variant: '#323633'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-code-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.01em
  label-code-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0em
  label-code-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-sm: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an authoritative, high-density, and meticulously structured visual language for an open-access Academic and Software Engineering Portfolio. It merges the austere precision of high-end developer tooling with the intellectual rigor of peer-reviewed scientific publishing. 

The aesthetic is grounded in a deep dark-mode paradigm: architectural slate layering, fine-gauge structural borders, and muted jade and forest telemetry accents. The emotional goal is immediate credibility, verified competence, and razor-sharp technical clarity. It rejects decorative skeuomorphism in favor of structural clarity, monospace telemetry, and typographic discipline.

## Colors

The palette operates under strict hierarchical constraints for luminous contrast against dark surfaces.

- **Canvas Background (`#0A0D10`):** An obsidian base that eliminates optical glare and sets maximum contrast for both text and data glyphs.
- **Elevated Surfaces (`#11161D` / `#161D26`):** Precision slate tiers used for cards, interactive toolbars, code blocks, and data grids.
- **Structural Dividers (`#1F2937`):** Hairline borders framing structural boundaries and tabular cells without drawing dominant visual weight.
- **Primary Forest Jade (`#3F8468` & `#637D70`):** Reserved strictly for active verification markers, git commit telemetry, active statuses, primary callouts, and live demo anchors.
- **Auxiliary Accent Brick (`#854340`):** Reserved for peer-review status codes, external DOI hyperlinks, and thesis citations.
- **Monochrome Typography:** `#F9FAFB` for primary titles and code scalars; `#9CA3AF` for continuous prose; `#6B7280` for metadata annotations, timestamp labels, and inactive states.

## Typography

Typographic hierarchy relies on the dual interaction between **Inter** and **JetBrains Mono**.

- **Inter** controls all structural layout hierarchy, long-form academic abstract reading, and navigational landmarks. Font weights stay between `400` (body copy) and `600`/`700` (headings) to preserve geometric crispness.
- **JetBrains Mono** is mandatory for all machine-readable context: paper citation keys (e.g., `[arXiv:2401.0892]`), cryptographic commit hashes, publication DOIs, repository metadata, telemetry numbers, and performance benchmark outputs.
- Display scale automatically transitions via dedicated mobile tokens (`display-lg-mobile`) below 768px viewports to prevent wrapping on terminal-style headlines.

## Layout & Spacing

The layout adheres to a structured, data-dense grid designed for dashboards, technical whitepapers, and software catalogs.

- **Grid Architecture:** Desktop views employ a 12-column fluid grid system with a maximum canvas constraint of `1280px`. Gutters scale from `1rem` on mobile devices to `1.5rem` on desktop screens. Outer layout margins provide a minimum breathing frame of `1rem` (mobile) to `2rem` (desktop).
- **Rhythm & Padding:** Spacing follows a base-4 metric. Dense components (badges, status flags, code tokens) leverage `space-xs` and `space-sm`. Surface-level wrappers (cards, publication blocks) utilize `space-md` through `space-lg`. Layout-level section separation strictly maintains `space-xl` intervals to ensure academic clarity without excessive negative space.
- **Breakpoint Dynamics:**
  - **Mobile (<768px):** 4-column single-stack structure; data tables convert to bordered vertical detail lists.
  - **Tablet (768px - 1024px):** 8-column layout; split-pane view for source code and publication abstracts.
  - **Desktop (>1024px):** 12-column architecture featuring persistent telemetry sidebars, verification columns, and research portfolios.

## Elevation & Depth

This system avoids soft drop shadows in favor of a **Layered Tonal + Hairline Border** paradigm typical of production-grade developer environments:

- **Surface 0 (Base Canvas):** `#0A0D10` – Foundation floor.
- **Surface 1 (Cards, Code Wells, Tables):** `#11161D` with a crisp `1px solid #1F2937` perimeter.
- **Surface 2 (Hover States, Popovers, Modals):** `#161D26` bounded by `1px solid #374151`.
- **Active Elevation / Accent Halo:** Interactive components on focus or verification highlight do not use diffuse blur. Instead, apply a razor `0 0 0 1px #3F8468` border ring combined with a very subtle inner illumination (`inset 0 1px 0 0 rgba(63, 132, 104, 0.2)`).
- **Z-Index Layering:** Strict categorical z-indexing: Base Content (`1`), Floating Status Strips (`10`), Fixed Top Navigation (`50`), Verification Modals & Drawers (`100`).

## Shapes

The design system implements a **Soft (Level 1)** geometric contour language:

- **Standard Containers, Code Panes, Cards:** `0.25rem` (`4px`) border radius. This preserves a crisp, scientific, instrument-panel profile.
- **Modals, Floating Panels, Large Cards:** `0.5rem` (`8px`) border radius via `rounded-lg`.
- **Badges, Verification Pills, Status Flags:** Retain strict structural geometry with `4px` or contextual full-pill micro-capsules (`9999px`) exclusively when conveying live server or pipeline health.

## Components

### Buttons
- **Primary (Action / Verify):** Background `#3F8468`, foreground text `#0A0D10` (Inter `600`), 1px border `#637D70`, radius `4px`. Hover shifts background to `#4A997B`.
- **Secondary (Code / Paper PDF):** Background `#11161D`, text `#F9FAFB`, 1px border `#1F2937`. Hover shifts background to `#161D26` and border to `#374151`.
- **Ghost (Inline Action):** Text `#9CA3AF`, no background, 1px border `transparent`. Hover text `#3F8468`.

### Chips & Verification Badges
- **Status Indicators (Live, Peer-Reviewed, Open-Source):** Background `rgba(63, 132, 104, 0.1)`, 1px border `rgba(63, 132, 104, 0.3)`, text `#3F8468` (JetBrains Mono `11px`). Preceded by a 6px solid jade glowing dot.
- **Metadata Tags (Tech Stack, Conference Tags):** Background `#161D26`, border `#1F2937`, text `#9CA3AF` (JetBrains Mono `12px`).

### Cards (Academic Papers & Repositories)
- **Base Style:** Background `#11161D`, border `1px solid #1F2937`, padding `space-lg`, radius `4px`.
- **Interaction:** Hover transitions border to `#374151` and introduces a subtle jade top-edge line indicator (`2px solid #3F8468`).
- **Internal Anatomy:** Header containing JetBrains Mono DOI/version tag; middle section with Inter headline and abstract body; bottom row with GitHub metrics, star telemetry, and citation counters.

### Lists & Academic Indexes
- **Structure:** Tabular rows separated by `1px solid #1F2937`. Alternate row striping using `rgba(17, 22, 29, 0.4)`.
- **Cells:** Left-aligned research title with monospace publication date anchored to the right column.

### Input Fields & Terminal Prompts
- **Field Styling:** Background `#0A0D10`, border `1px solid #1F2937`, text `#F9FAFB`, font JetBrains Mono `13px`, padding `space-sm space-md`.
- **Focus:** 1px border `#3F8468` with zero fuzzy shadow.
- **Prefix:** Built-in unselectable terminal caret (`$ ` or `> `) colored in `#6B7280`.

### Checkboxes & Toggle Switches
- **Checkboxes:** Square with `2px` radius, `#11161D` background, `1px solid #374151`. Checked state fills `#3F8468` with `#0A0D10` checkmark icon.
- **Radio Buttons:** Circular, `#11161D` background, `1px solid #374151`. Active state centers a `#3F8468` indicator dot.