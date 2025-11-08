# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.4] - 2025-11-08

### Fixed
- Hamburger icon not displaying due to missing Bootstrap Icons font files.
- Copied `bootstrap-icons.woff` and `bootstrap-icons.woff2` to `css/fonts/` and updated references.

## [1.0.3] - 2025-11-08

### Added
- Implemented a new color palette (sea-green, black, white) using CSS custom properties.

### Changed
- Replaced hardcoded black and white colors in `css/styles.css` with CSS variables.
- Applied `--sea-green` accent color to primary buttons (`.btn-primary`).

## [1.0.2] - 2025-11-08

### Changed
- Updated landing page heading in `index.html` to "OTG photography".
- Implemented a fix for the dropdown menu layering issue by adding `z-index` to the `.dropdown` class in `css/styles.css`.
- Updated navigation links across all HTML files to include a "HOME" link and correctly point "ABOUT ME" to `about.html`.
- Replaced "About Me" content in `index.html` with a generic landing page hero section.

## [1.0.1] - 2025-11-08

### Changed
- Updated `booking.html` with a new, detailed booking form structure.
- Centered the booking form on `booking.html`.
- Updated `about.html` content with stylized text and capitalized headings.

### Removed
- "Video add-on" option from the booking form on `booking.html`.
- "Section X" headings from `about.html`.

## [1.0.0] - 2025-11-08

### Added
- Initial project structure.
- `about.html`, `docs/CHANGELOG.md`, `data/bookings.json`, `docs/SRS.pdf`.

### Changed
- Refactored project structure to match the recommended structure.
- Renamed `OTG-CONTACT.html` to `contact.html`.
- Renamed `OTG-PORTFOLIO.html` to `portfolio.html`.
- Renamed `OTG-SCHEDULE.html` to `booking.html`.
- Renamed `OTG-REVIEW.html` to `pricing.html`.
- Renamed `JS` directory to `js`.
- Renamed `js/otg-script.js` to `js/main.js`.
- Renamed `css/otg-style.css` to `css/styles.css`.
- Moved images from `ASSETS` to `assets/images`.
- Moved `README.md` to `docs/README.md`.
- Updated all internal links and script/style tags in HTML files.

### Removed
- `OTG-SHOP.html`
- `ASSETS` directory.
- `<base>` tag from all HTML files.
