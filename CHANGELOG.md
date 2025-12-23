# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

[1.0.0]: https://github.com/joris-decombe/rolls-and-responders-app/releases/tag/v1.0.0
