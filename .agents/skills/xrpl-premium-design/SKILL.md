---
name: xrpl-premium-design
description: Professional cinematic visual design for the XRPL education website, adapted from user-supplied 10k-websites skill.
---

# XRPL Premium Web Design (curated)
Source: user-supplied `10k-websites-main.zip`. Adapted for static GitHub Pages, zero paid services, and the established XRPL project.

## Visual direction
- Premium editorial Web3 visual identity: distinct typography, disciplined spacing, accessible contrast, refined color, strong hierarchy.
- Design with narrative progression: headline → why XRPL → interactive lessons → XLS-66 simulator → assessment → official references.
- Use meaningful motion only. Respect `prefers-reduced-motion`; avoid distracting scroll-jacking.
- Motion and hover are progressive enhancements, not prerequisites to read content.
- Responsive layouts must work at 320px width and touch devices without hover.
- Don't invent partnerships, testimonials, finance returns, or amendment activation.
- Preserve informative content, keyboard accessibility and core interactive widgets.

## Adapted techniques
- Subtle pointer-following ambient spotlight (desktop only).
- Scroll-triggered entrance for feature cards via IntersectionObserver.
- Layered mesh grid and glow for cinematic depth without heavy images or paid media.
- Readable static fallback and reduced-motion compatibility.
- Use self-hosted CSS / JS. No external scripts or tracking.

## Security and deployment
- Do not copy or execute supplied PHP admin, form handlers, OpenArt/Hostinger integrations, or tool installation scripts.
- No credentials, wallet prompts, payments, or unnecessary runtime packages.
- Site stays deployable as static HTML to GitHub Pages.
- Validate all simulations as local demonstration and link to official specifications.

## Review checklist
- No horizontal overflow on mobile.
- Buttons, anchors and inputs keyboard-usable.
- Simulator remains correct and distinct from real finance calculations.
- Animated elements visible when JavaScript disabled or motion reduced.
- GitHub Actions Pages deploy works without local installation.
