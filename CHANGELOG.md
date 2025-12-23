# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025-12-23

### Added

**Internationalization (i18n):**
- Multi-language support using react-i18next
- Language selector component in all views (Landing, Facilitator, Player)
- English (en) as default language with complete translations
- French (fr) translations: "La simulation de gestion d'incidents cyber"
- Language preference persistence in localStorage
- Translation infrastructure: `src/i18n.js` and `src/locales/` directory
- All UI elements, scenarios, and game mechanics fully translated
- Documentation for adding new languages in CONTRIBUTING.md

**Scenario Translations:**
- DDoS Attack scenario - fully translated to French
- Ransomware scenario - fully translated to French
- Cloud Infrastructure Compromise scenario - fully translated to French
- Difficulty levels and action resolution text translated

### Changed

- Refactored `src/scenarios.js` to use dynamic `getScenarioData(t)` function for translations
- Updated all React components to use `useTranslation` hook
- Maintained "ROLLS & RESPONDERS" brand name unchanged across all languages
- Updated screenshots to show language selector
- Updated CONTRIBUTING.md with comprehensive i18n workflow documentation

### Fixed

- Screenshot script baseURL now correctly points to `http://localhost:5173/rolls-and-responders-app/`
- Corrected vite dev server port reference (5173 instead of 5174)

### Technical Details

**New Dependencies:**
- `i18next@^25.7.3` - Internationalization framework
- `react-i18next@^16.5.0` - React bindings for i18next

**Translation Structure:**
- `landing.*` - Landing page text
- `header.*` - Header and navigation elements
- `facilitator.*` - Facilitator console UI elements
- `player.*` - Player display UI elements
- `difficulty.*` - Difficulty levels and descriptions
- `log.*` - Log entry text
- `scenarios.*` - Complete scenario content (titles, descriptions, turns, injects)

### Migration Notes

- Fully backward compatible - no breaking changes
- Existing game state and localStorage data remain compatible
- Default language is English if no preference is set

## [1.0.0] - 2025-12-23

### Added

**Core Application Features:**
- Interactive tabletop exercise for cybersecurity incident response training
- Dual-view architecture with Facilitator Console and Player Display
- Real-time cross-tab synchronization using localStorage
- D20 dice rolling system with advantage/disadvantage mechanics
- Dynamic inject system for unexpected scenario events
- Game timer and phase management system

**Scenarios (NCSC NZ Official):**
- DDoS Attack scenario (Code 4452) - Easy difficulty
- Ransomware scenario (Code 1456) - Medium difficulty
- Cloud Infrastructure Compromise (Code 6244) - Hard difficulty

**Documentation:**
- Comprehensive README with setup and usage instructions
- CONTRIBUTING.md with PR workflow (branching vs forking)
- SECURITY.md for vulnerability reporting
- RELEASE.md for release process documentation
- Pull request template
- Branch protection setup guide
- CLAUDE.md for AI-assisted development

**Development Infrastructure:**
- CI/CD workflow for automated testing and building
- Automated release workflow with artifact generation
- ESLint configuration for code quality
- Playwright for screenshot automation
- Vite build system with React 19

**Repository Governance:**
- Branch protection guidelines
- Security policy and responsible disclosure process
- Commit message guidelines
- Code review requirements

### Technical Details

- **Frontend**: React 19 with hooks
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **License**: CC-BY-4.0 (based on NCSC NZ Rolls & Responders)

### Attribution

Based on NCSC New Zealand "Rolls & Responders" framework, licensed under Creative Commons Attribution 4.0 NZ.

Original concept by Kate Pearce & TradeMe NZ via NZITF.

---

[1.1.0]: https://github.com/joris-decombe/rolls-and-responders-app/releases/tag/v1.1.0
[1.0.0]: https://github.com/joris-decombe/rolls-and-responders-app/releases/tag/v1.0.0
