# Design System: Community Impact Hub

## 1. Colour System

**Core Philosophy:** Trust, Compassion, Transparency, Social Impact.

### Primary Palette

| Role          | Colour Name  | Hex Code  | Usage                                                          |
| ------------- | ------------ | --------- | -------------------------------------------------------------- |
| **Primary**   | Deep Blue    | `#0A3D62` | Brand identity, headers, primary trust elements.               |
| **Secondary** | Forest Green | `#1E8449` | Growth indicators, nature motifs, support sections.            |
| **Accent**    | Warm Orange  | `#F39C12` | **Call-to-Action (CTA)**, donation buttons, urgent highlights. |

### Backgrounds

| Role                   | Hex Code  | Usage                                                      |
| ---------------------- | --------- | ---------------------------------------------------------- |
| **Main Background**    | `#FFFFFF` | Standard page background for readability.                  |
| **Section Background** | `#F4F6F8` | Light grey for alternate sections to create visual rhythm. |

### Typography Colours

| Role             | Hex Code  | Usage                                              |
| ---------------- | --------- | -------------------------------------------------- |
| **Headings**     | `#1C1C1C` | High contrast for primary legibility.              |
| **Body Text**    | `#4A4A4A` | Softer contrast for comfortable long-form reading. |
| **Muted/Labels** | `#7D7D7D` | Meta-data, captions, secondary information.        |

### Status & Utility

| Role        | Hex Code  | Usage                                           |
| ----------- | --------- | ----------------------------------------------- |
| **Success** | `#2ECC71` | Form submission success, donation confirmation. |
| **Warning** | `#F1C40F` | Non-critical alerts.                            |
| **Error**   | `#E74C3C` | Form validation errors, critical issues.        |

### Constraints

- **Contrast:** All text/background combinations must meet WCAG AA standards
  (4.5:1 minimum).
- **Accent Usage:** Maximum one accent colour occurrence per visual section to
  maintain focus.

---

## 2. Animation & Motion Guidelines

### Design Philosophy

- **Style:** Minimal, subtle, purposeful.
- **Tone:** Professional NGO/Corporate. Not playful or flashy.
- **Function:** Motion guides attention; it does not distract.

### Global Timing Variables

- **Fade-in Duration:** 400ms - 600ms
- **Hover Duration:** 200ms
- **Transition Easing:** `ease-out` (starts fast, slows down)

### Component Patterns

#### Page Load

- **Effect:** Fade-in with slight upward movement (approx. 20px).
- **Timing:** 400-600ms, `ease-out`.

#### Navigation Bar

- **Behavior:** Sticky on scroll.
- **Visual Change:** Background transitions from transparent to solid color with
  a soft shadow.
- **Duration:** 300ms.

#### Buttons (Interactions)

- **Hover State:**
  - Scale up slightly (`1.03x`).
  - Background colour darkens subtly (10-15%).
  - Transition: 200ms.
- **Primary CTA (Donate):**
  - Passive Loop: Gentle pulse or glow every 8–10 seconds. VERY subtle.

#### Section Transitions

- **Trigger:** Scroll-triggered.
- **Effect:** Fade-in or subtle slide-up.
- **Staggering:** For grids/cards, stagger elements by 100ms increments.
- **Constraint:** No parallax overload.

#### Gallery

- **Image Hover:** Soft zoom (`1.05x`).
- **Overlay:** Fade-in overlay with caption text.
- **Duration:** 250ms.

#### Donation Experience

- **Card Highlight:** Soft shadow elevation on hover/selection.
- **Selection:** Quick micro-animation (scale/border) when an option is clicked.
- **Confirmation:** Smooth fade-in of checkmark or success message
  post-donation.

### Performance & Accessibility

- **Reduced Motion:** Respect system "Prefers Reduced Motion" settings by
  disabling movement-based animations (fade-only).
- **Loops:** Avoid infinite loops aside from the subtle CTA pulse.
