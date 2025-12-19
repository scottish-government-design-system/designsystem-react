# Change log

All notable changes to the Scottish Government "Design System React" repository/package will be documented in this file.

Changes are grouped under the labels: `Added`, `Changed`, `Deprecated`, `Fixed`, 
`Removed` and `Security`.

---
## [0.13.0] - 2025-12-19

### Added
- eslint added to build task
### Changed
- Types moved from .d.ts files in @types folder to types.ts files in each component's folder
- HintText no longer allows content to be added with a 'text' prop -- use children instead
- NotificationBanner title (visually hidden) is customisable via a 'title' prop
### Fixed
- Checkbox stories updated to use 'isSmall' and 'isExclusive' (see v0.10.0).
- CookieBanner now fires the SG Design System cookie notification JS
### Removed
- 'SGDS' namespace no longer used for types etc
### Security
- Storybook version updated to address vulnerabilities

## [0.12.1] - 2025-11-19

### Added
- 'Barrel' index files
- 'main' and typings added to package.json
### Changed
- Move hooks and common components and to subfolders to match structure of the main components
### Security
- Update dependencies

## [0.12.0] - 2025-11-12

### Added
- type definitions included in /dist
- optional 'titleId' prop added to PageHeader
### Fixed
- include SGDS 'skip-links' script in SkipLinks

## [0.11.0] - 2025-10-22

### Added
- SearchResult, SearchFilters, SearchFacets, SearchSort components
- ButtonGroup component
### Changed
- Accordion.Item now uses a new `heading` prop for its heading content, which allows both string and ReactNode
- add "ariaLabel" property to SideNavigation to make the aria label editable
### Deprecated
- Accordion.Item `title` prop replaced with `heading`
### Fixed
- decorators added to many storybook components for correct rendering

## [0.10.2] - 2025-09-18
### Fixed
- correction to handling of subcomponents in Storybook

## [0.10.1] - 2025-09-18
### Fixed
- correction to white space on PageMetadata

## [0.10.0] - 2025-09-18
### Added
- Storybook now added for all components. `npm run storybook`
- CategoryList component
- CategoryItem component
- useTracking hook, to add DS tracking attributes
### Changed
- Accordion uses useContext instead of cloneElement to pass props (headingLevel) to its children
- CheckboxGroup uses useContext instead of cloneElement to pass props (isSmall) to its children
- RadioGroup use useContext instead of cloneElement to pass props (isSmall, name) to its children
- 'text' prop removed from ErrorMessage. Use children instead.
- Many boolean prop names updated for clarity/consistency
  - AbstractNotificationBanner (used by NotificationBanner and CookieBanner): close -> isDismissable
  - Accordion.Item: open -> isOpen
  - Button: small -> isSmall
  - Button: iconLeft -> isIconLeft
  - Button: iconOnly -> isIconOnly
  - Button: styleAsLink -> hasLinkStyle
  - Checkbox: exclusive -> isExclusive
  - CheckboxGroup: small -> isSmall
  - ContentsNav: curent -> isCurrent
  - DatePicker: multiple -> isMultiple
  - FileDownload: highlighted -> isHighlighted
  - Metadata: inline -> isInline
  - Pagination.Item: current -> isCurrent
  - RadioButton: inline -> isInline
  - RadioGroup: small -> isSmall
  - SideNavigation.Item: current -> isCurrent
  - SiteNavigation.Item: current -> isCurrent
  - SummaryList: noBorder -> isBorderless
  - Tabs: bordered -> isBorderless (logic inverted), manual -> isManual
  - TextInput: currency -> isCurrency

## [0.9.0] - skipped due to user error with the CI script

## [0.8.0] - 2025-08-18
### Added
- ActionLink component, centralising behaviour used in actions in both SummaryCard and SummaryList
- SiteFooter component
- Add support for the SkipLinks 'static' variant

### Changed

Two headline changes:

1. Components that used an array of data to populate their children have been changed to use explicit child components.
  Affected components:
  - Breadcrumbs
  - Checkbox/CheckboxGroup
  - ContentsNav
  - ErrorSummary
  - RadioButton/RadioGroup
  - Select
  - SequentialNavigation
  - SideNavigation
  - SiteHeader
  - SiteNavigation
  - SkipLinks
  - SummaryCard
  - SummaryList

2. Many components that use links now accept a `linkComponent` param to provide a mechanism for overriding the default `<a>` element, for example to allow the use of the Next.js `<Link>` component.
  Affected components:
  - ActionLink
  - Breadcrumbs
  - ContentsNav
  - ErrorSummary
  - Pagination
  - SequentialNavigation
  - SideNavigation
  - SiteFooter
  - SiteHeader
  - TaskList

Other component changes:

- Prop names for many boolean properties made more explicit:
  - form fields (and Question) use `hasError` (was: `error`)
  - AbstractNotificationBanner (and components extending it) uses `hasColourIcon` and `hasInverseIcon` (was: `colourIcon`, `inverseIcon`)
  - Breadcrumb.Item uses `isHidden` (was: `hidden`)
  - SideNavigation.List uses `isRoot` (was: `root`)
- PhaseBanner and Tag only use their children instead of allowing content to be passed through a prop
- SequentialNav allows custom 'previous' and 'next' text labels
- SkipLinks will add a default link if it has no children; if any children are added the default link will not be included (i.e. include your own 'main' link if you're adding additional skip links)

Maintenance:

- Reduce use of legacy React APIs
  - remove use of `isValidElement`
  - Icon and FileIcon use JSX instead of `React.createElement`
- Components no longer use `React.FC<>` in their definitions
- ARIA attributes in props now derive their types from the React ARIA types

## [0.7.1] - 2025-08-04
### Removed
- Cleaned up unwanted items in the 'dist' folder 

## [0.7.0] - 2025-08-01
### Changed
- Change all component file names to Pascal case
- Use uppercase text for const variable names
- Nomenclature: prefer 'heading' over 'header' in variable names when referring to HTML headings (H1-H6)

## [0.6.0] - 2025-07-29
### Added
- Add 'File download' component
- Add 'File icon' component
### Changed
- Reorganise SVG icon components into subfolders

## [0.5.1] - 2025-07-28
### Changed
- 'DisplayName' property of some compound components updated (Metadata.Item, TaskList.Item, TaskList.Group)

## [0.5.0] - 2025-07-28
### Added
- Add 'Tabs' component

## [0.4.0] - 2025-07-23
### Added
- Add 'Abstract notification banner' component
- Add 'Cookie banner' component
- Add 'Table' component
- Add code of conduct
### Changed
- 'Notification banner' refactored to use AbstractNotificationBanner
### Fixed
- Fixed miscellaneous type warnings in unit tests

## [0.3.0] - 2025-07-15
### Added
- Add 'Site header' component/pattern
### Changed
- SiteNavigation: add useRef, to support mobile navigation
- DatePicker: add 'dateSelectCallback' prop

## [0.2.0] - 2025-07-07
### Added
- Add 'Error summary' component

## [0.1.7] - 2025-06-27
### Added
- Add 'Summary card' component
- Add 'Summary list' component

## [0.1.6] - 2025-06-27
### Added
- Add 'Hide this page' component

## [0.1.5] - 2025-06-23
### Added
- Add 'Pagination' component
### Changed
- Icon: refactor to use icon components generated from DS source using SVGR
- Add 'aria-invalid' to form fields that are in an error state

## [0.1.2] - 2025-06-17
### Added
- Add readme file

## [0.1.1] - 2025-06-13
### Changed
- Allow all components to have additional CSS classes passed to them

## [0.1.0] - 2025-06-13
### Added
- Add npmignore file
### Fixed
- Fix broken content navigation spec
