# Changelog

All notable changes to this project will be documented in this file.

The format is loosely based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.9.1 - May 24, 2020]

- Added new page: [/hide-gizmos-in-unity](https://codyburleson.com/hide-gizmos-in-unity)
- Redirects added to router for some legacy URL patterns shown as Page Not Found in Google Analytics
- Renamed all directories and component file names so that they are no longer prefixed with "page-". This just reduces some unnecessary visual noise in the IDE and hopefully also some bytes in the resulting build. The tag names for each component are still prefixed with "page-".
- Created a java utility to minify `site-data.json` and now use a minified version of it.

## [1.9.0 - May 21, 2020 - PRERENDERED]

- Update page: [/cage/vietnam-war-reference-resources](http://codyburleson.com/cage/vietnam-war-reference-resources); add reference to video documentary series on Tubi, US Marines in Vietnam.
- Update page: [/lifetime](https://codyburleson.com/lifetime); remove side column, allowing calendar to widen up on the screen.
- Refactor so that the setting of page titles and meta tags are done all in one single place (in the app-root.tsx file). Before, only the pages were having titles set there and then the posts were doing it in each post's component. Now, this not only puts the code in one single place, but it seems to be the only place where it works effectively also when prerendering (and I am trying to head into a fully prerendered site, eventually).
- Got prerendering working for at least the main pages and then, even when prerendered, the rest works as it normally did. So, this marks the first deployment of prerendered site!

## [1.8.2 - May 20, 2020]

- Fixed broken page: [/introduction-to-the-semantic-web-vision-and-technologies](https://codyburleson.com/introduction-to-the-semantic-web-vision-and-technologies); uploaded video version of presentation to YouTube and embedded it; uploaded zipped PowerPoint to Amazon S3 and linked to it.
- Added try/catch error handling cod eto Blog Service; it only logs a fetch error to the console for now, but it's a step toward bubbling a potential HTTP fetch error up to the UI in order to notify the user of what's wrong.

## [1.8.1 - May 19, 2020]

- Load DuckDuckGo Highlight Code component only on pages that use it (rather than global on `index.html`).
- Remove most `console.log` statements
- Made ALL content titles conform to the style guide (AP Style for titles) 

## [1.8.0 - May 19, 2020]

- Remove all legacy references to `<gls-adsense-ad />`
- Replace all legacy uses of Prism.js for the new `@deckdeckgo/highlight-code` component
- Fix for [issue #83](https://github.com/codyburleson/cburleson-pwa/issues/83) - URLs with trailing slashes do not work
- Implement `getPostsByMenu(menu: string)` in `services/blog-data.ts`
    - Refactor: Remove `vietnam-war-reference-resources` from 'blog' menu and include in `cage-ref-resources` menu of `site-data.json` file.
    - Modify page, [/cage](https://codyburleson.com/cage) to fetch ref resources from `cage-ref-resources` menu using Blog Service
    - Modify page, [/cage](https://codyburleson.com/cage) to fetch `recordItems` from `cage-documents` menu using Blog Service
    - Modify page, [/books](https://codyburleson.com/books) to fetch `writingItems` from `books-i-am-writing` menu using Blog Service
- Added `getPageHeaderById()` method to Blog Service; it's pretty much a copy of `getPostHeaderById()` (for now) (a step in the pages/posts consolidation)
- Moved all pages except blog, book, contact, and about out of /pages directory and into dated folders (a step in the pages/posts consolidation)
- Created `app-hoto-grid` component (a step in the pages/posts consolidation)
- Create `app-list-menu` component and use it on pages [/blog](https://codyburleson.com/blog) and [/cage](https://codyburleson.com/cage)
- Fix [issue #35](https://github.com/codyburleson/cburleson-pwa/issues/35) Get prismjs showing line numbers on pages that refer to them #35
- Conformed some (but not all) titles to style guideline for page titles (AP style)

## [1.7.10 - May 16, 2020]

- Former test (`1.7.9.`) failed on iOS; changed method of importing `@deckdeckgo/highlight-code` to using script tags in index.html (from unpkg CDN) instead of component import using the npm package and testing again.

## [1.7.9 - May 16, 2020]

- Update `package.json`:
    - Update prismjs from `^1.19.0` to `^1.20.0`
    - Add git repository info
    - Add bugs (issues) URL
    - Add new package: `"@deckdeckgo/highlight-code": "^1.0.5"`
- Update page with initial test for new deckdeckgo/highlight-code to replace former way of using Prismjs: [/format-currency-in-angular](https://codyburleson.com/format-currency-in-angular)

## [1.7.8 - May 15, 2020]

- Update package, `@stencil/core` from 1.12.0 to 1.13.0
- Content update (addition) to page: [/cage/vietnam-war-reference-resources](https://codyburleson.com/cage/vietnam-war-reference-resources)]; added Pentagon Papers and Records of War - Task Group Reports

## [1.7.7 - May 12, 2020]

- Minor content edit to page: [/photos/dennis-mannion](https://codyburleson.com/photos/dennis-mannion)

## [1.7.6 - May 12, 2020]

- Minor content edit to page: [/photos/dennis-mannion](https://codyburleson.com/photos/dennis-mannion)
- Name identification updates to page: [/cage/d-1-3-platoon](https://codyburleson.com/cage/d-1-3-platoon)
- Content update (additions) to page: [/cage/vietnam-war-reference-resources](https://codyburleson.com/cage/vietnam-war-reference-resources)

## [1.7.5]

- Minor content edit to page: [/photos/dennis-mannion](https://codyburleson.com/photos/dennis-mannion)

## [1.7.4]

- Added new page: [/photos/dennis-mannion](https://codyburleson.com/photos/dennis-mannion)
- Content update to page: [/cage/vietnam-war-reference-resources](https://codyburleson.com/cage/vietnam-war-reference-resources)
- Text change to page: [/photos/ray-kelley](https://codyburleson.com/photos/ray-kelley)

## [1.7.3]

- Digitally enhanced first image on page, [/photos/ray-kelley](https://codyburleson.com/photos/ray-kelley), using image editing software with A.I. features.

## [1.7.2]

- Revised new page [/photos/tom-harrison](https://codyburleson.com/photos/tom-harrison) with Tom's input and published with link coming from the [cage](https://codyburleson.com/cage) page.

## [1.7.1]

- Added new page [/photos/tom-harrison](https://codyburleson.com/photos/tom-harrison) for review and revision with Tom's input before link publishing.

## [1.7.0]

- Added some person identifications to [/cage/d-1-3-platoon](https://codyburleson.com/cage/d-1-3-platoon) and also unhid the page (making it public)
- Modified page: [/vietnam-war-reference-resources](https://codyburleson.com/cage/vietnam-war-reference-resources); added new reference to William (Bill) Taylor's coming book, &quot;13 Months - A Vietnam War Story&quot;
- Did more refactoring of the posts/pages system; was able to eliminate `page-data.json` file as well as the `PageData` service.

## [1.6.7]

- Modified all affiliate images to Amazon books to be local images so they not blocked by ad blockers.

## [1.6.6]

- Added new page: [/vietnam-war-reference-resources](https://codyburleson.com/vietnam-war-reference-resources)
- Added new page: [/cage/d-1-3-platoon](https://codyburleson.com/cage/d-1-3-platoon), but remains hidden until I can get better identifications
- Modified page: [/cage](https://codyburleson.com/cage); reordered photo items to be alphabetical, added link to [/vietnam-war-reference-resources](https://codyburleson.com/vietnam-war-reference-resources)

## [1.6.5]

- Modified content of page: [/photos/kevin-brooks](https://codyburleson.com/photos/kevin-brooks); added information regarding Kevin's recent passing.
- Modified content of page: [/memories-of-momma-6](https://codyburleson.com/memories-of-momma-6); removed introductory paragraph, which was really only relevant in the context of Facebook, where the content was originally posted.
- Refactored routing for all Cage pages that are not `/photos/...` pages so that a) they 'live' under the parent URL `/cage/...` instead of being flat and b) they have redirects from the old flat URLs to the new hierarchical structure. Users can now 'back-up' to the parent page via URL navigation and paving the way for a future breadcrumb trail.

## [1.6.4]

- Added new page, [/slf-after-action-cage-union](https://codyburleson.com/slf-after-action-cage-union)

## [1.6.3]

- Modified page, [/unreal-engine-doc-expanded](https://codyburleson.com/unreal-engine-doc-expanded); removed unused sidebar, so now the content fills the page from left-to-right and is not squished (especially on a mobile device)
- Modified page, [/sparql-examples-limit](https://codyburleson.com/sparql-examples-limit); added HTML &lt;code/&gt; tags to improve legibility.
- Modified page, [/sparql-examples-construct](https://codyburleson.com/sparql-examples-construct); added HTML &lt;code/&gt; tags to improve legibility.
- Refactored router code so that more is dynamic and defined in the data json files; this is a step towards consolidating and simplifying the use of the different page types.
- Content corrections to page, [/photos/kevin-brooks](https://codyburleson.com/photos/kevin-brooks)

## [1.6.2]

- Added the contact page back in, now that I have the back-end platform running under an SSL certificate.
- Modified page [/cavazos-center](https://codyburleson.com/photos/cavazos-center); added outro content to clarify source of photographs.

## [1.6.1]

- Temporarily removed contact page from menu until HTTPS can be enabled on the back-end service.

## [1.6.0]

- Added new page, [Contact](https://codyburleson.com/contact)
- Modified contents of page, [Linux and Unix commands](https://codyburleson.com/linux-and-unix-commands/); added `pwd` command and wrapped existing commands in HTML code tags for improved legibility
- Updated `@ionic/core` from `^5.0.5` to `5.0.7`
- Updated `@stencil/core` from `^1.8.11` to `1.12.0`

## [1.5.36] - 2020-03-20

- Added new page, [Vietnam War Photographs from the Martin Cavazos Center](https://codyburleson.com/photos/cavazos-center)
- Added new page,  [U.S. Marine Corps Platoon 156 - San Diego, 1966](https://codyburleson.com/marine-platoon-156-san-diego-1966)
- Modified content of [/about](https://codyburleson.com/about) page.
- Updated `@ionic/core` to  `^5.0.5`
- Removed unecessary `ionicons` package dependency.

## [1.5.35] - 2020-03-03

- Added new post: [http://localhost:3333/unreal-engine-doc-expanded](https://codyburleson.com/http://localhost:3333/unreal-engine-doc-expanded)
- Removed Google AdSense component (it was not working consistently)

## [1.5.32] - 2020-02-15

- Testing Google AdSense correction; attempt 11

## [1.5.31] - 2020-02-15

- Testing Google AdSense correction; attempt 10

## [1.5.30] - 2020-02-15

- Testing Google AdSense correction; attempt 9

## [1.5.29] - 2020-02-15

- Testing Google AdSense correction; attempt 8

## [1.5.28] - 2020-02-15

- Testing Google AdSense correction; attempt 7

## [1.5.27] - 2020-02-15

- Testing Google AdSense correction; attempt 6

## [1.5.26] - 2020-02-15

- Testing Google AdSense correction; attempt 5

## [1.5.25] - 2020-02-15

- Testing Google AdSense correction; attempt 4

## [1.5.24] - 2020-02-15

- Testing Google AdSense correction; attempt 3

## [1.5.23] - 2020-02-15

- Testing parent container 100% width to correct failing Google AdSense ads

## [1.5.22] - 2020-02-15

- Testing fixed width grid to correct failing Google AdSense ads

## [1.5.21] - 2020-02-13

- Added 4 new items to page [/sea-tiger-newspapers](https://codyburleson.com/sea-tiger-newspapers)
- Modified page [/sea-tiger-newspapers](https://codyburleson.com/sea-tiger-newspapers); added new found PDF, Vol III, No 95

## [1.5.20] - 2020-02-12

- Modified page [/quotes-for-writers](https://codyburleson.com/quotes-for-writers); added 1 new quote by Will Self.
- Modified page [/beaver-cage-command-chron](https://codyburleson.com/beaver-cage-command-chron); added links to locations on Google Maps (not finished, but it's a start)
- Revert to  `"@ionic/core": "5.0.0"`; just for safety to be on a release rather than a release candidate. 
- Update `"@stencil/core"` to `"1.8.8"`

## [1.5.19] - 2020-02-11

- Added page [/sea-tiger-newspapers](https://codyburleson.com/sea-tiger-newspapers)
- Modified page [/photos/kevin-brooks](https://codyburleson.com/photos/kevin-brooks); added additional descriptive info to a photograph provided from Kevin by email.
- Update `@ionic/core` to version `5.0.0-rc.4`

## [1.5.18] - 2020-02-06

- Modified [/books](https://codyburleson.com/books) page with new category for 'What I'm reading now'

## [1.5.17] - 2020-02-06

- Added Series content menus to all multi-part series content: 
    - [Memories of Momma](https://codyburleson.com/memories-of-momma-1)
    - [Build a PWA with Ionic, Angular, and the WordPress REST API](https://codyburleson.com/pwa-with-ionic-angular-wordpress-api-1)
    - [The IA Files](https://codyburleson.com//the-ia-files-001-into-the-fire)
    - [Build a Rendering Plugin to Integrate Velocity with IBM WCM](https://codyburleson.com/build-a-rendering-plugin-ibm-wcm-part-1)
- Added new page: [/about/experience](https://codyburleson.com/about/experience)
- Modified page [/create-polygroup-from-mask-in-zbrush](https://codyburleson.com/create-polygroup-from-mask-in-zbrush); minor content edits to improve quality / readability.

## [1.5.16] - 2020-01-30

- Added page [/book-review-the-goldfinch](https://codyburleson.com/book-review-the-goldfinch)
- Modified all existing posts and pages to set document meta description with teaser (previously, all Google search results were displaying meta description info for only index.html).
- Upgrade Ionic to version: 5.0.0-rc.2

## [1.5.15] - 2020-01-18

- **Modified** [/delete-hidden-geometry-in-zbrush](https://codyburleson.com/delete-hidden-geometry-in-zbrush); modified content (instructions) for improved clarity.

## [1.5.14] - 2020-01-14

- Revert attempts at Google Adsense component changes

## [1.5.13] - 2020-01-14

- Third attempt to fix #77 Improve Google Adsense component so that nothing attempts to load in local mode

## [1.5.12] - 2020-01-14

- Second attempt to fix #77 Improve Google Adsense component so that nothing attempts to load in local mode

## [1.5.11] - 2020-01-14

- Second attempt to fix #77 Improve Google Adsense component so that nothing attempts to load in local mode

## [1.5.10] - 2020-01-14

- Attempt to fix #77 Improve Google Adsense component so that nothing attempts to load in local mode

## [1.5.9] - 2020-01-14

- **Removed** Unsuccessful Disqus component experiments.

## [1.5.8] - 2020-01-14

- **Added** New Disqus component test (after previous failures, modification to `gls-disqus.tsx`).

## [1.5.7] - 2020-01-14

- **Added** New Disqus component test (after previous failures, modification to `app-root.tsx`).

## [1.5.6] - 2020-01-14

- **Added** New Disqus component test (after previous failures, moved parts of disqus component to `app-root.tsx`).

## [1.5.5] - 2020-01-14

- **Added** New Disqus component test (only on a few pages; the PWA Ionic/Wordpress pages).

## [1.5.4] - 2020-01-14

- **Added** New Disqus component test (only on a few pages; the Unity health status series).

## [1.5.3] - 2020-01-13

- **Fixed** bug where personalizing the Life Time Calendar cause calendar config data to be written to local storage using the excludeTopics field. This broke the topics filter after use of [/lifetime](https://codyburleson.com/lifetime) calendar.


## [1.5.2] - 2020-01-13

- **Added** pages from legacy WordPress blog:
    - [/setup-carbon-ldp-with-stardog-container-from-scratch](https://codyburleson.com/setup-carbon-ldp-with-stardog-container-from-scratch)
    - [/how-to-make-your-rational-project-use-ant-for-automatic-build](https://codyburleson.com/how-to-make-your-rational-project-use-ant-for-automatic-build)
    - [/free-zbrush-asset-gamblers-hat](https://codyburleson.com/free-zbrush-asset-gamblers-hat)
    - [/permitting-author-access-to-search-collection-in-wcm-search-component](https://codyburleson.com/permitting-author-access-to-search-collection-in-wcm-search-component)
    - [/remove-sign-up-link-on-wps-login-page](https://codyburleson.com/remove-sign-up-link-on-wps-login-page)
    - [/improve-your-rational-or-eclipse-based-ides-spelling-dictionary](https://codyburleson.com/improve-your-rational-or-eclipse-based-ides-spelling-dictionary)
    - [/collect-ui-ui-screenshots-to-inspire-design](https://codyburleson.com/collect-ui-ui-screenshots-to-inspire-design)
    - [/lifetime](https://codyburleson.com/lifetime)

## [1.5.1] - 2020-01-11

- **Added** page from LinkedIn (moved and deleted it from LinkedIn): [/treasure-web-stories-slavery](https://codyburleson.com/stories-of-slavery-as-told-by-ex-slaves)
- **Added** pages from legacy WordPress blog:
    - [/how-to-shake-hands](https://codyburleson.com/how-to-shake-hands)
    - [/fix-validation-errors-when-using-renderrequest-in-a-jsp](https://codyburleson.com/fix-validation-errors-when-using-renderrequest-in-a-jsp)
    - [/im-not-bored-im-thinking](https://codyburleson.com/im-not-bored-im-thinking)
    - [/how-to-start-a-simple-http-server-from-any-folder-on-a-mac](https://codyburleson.com/how-to-start-a-simple-http-server-from-any-folder-on-a-mac)
    - [/liferay-7-ubuntu-developer-vm-setup-log](https://codyburleson.com/liferay-7-ubuntu-developer-vm-setup-log)

## [1.5.0] - 2020-01-11

- **Added** pages from legacy WordPress blog:
    - [/user-impersonation-in-websphere-portal-video-demo](https://codyburleson.com/user-impersonation-in-websphere-portal-video-demo)
    - [/wcm-libraries-video-overview](https://codyburleson.com/wcm-libraries-video-overview)
    - [/wcm-security-video-overview](https://codyburleson.com/wcm-security-video-overview)
    - [/string-replace-helper-for-dust-js](https://codyburleson.com/string-replace-helper-for-dust-js)
    - [/touch-all-items-in-a-wcm-library](https://codyburleson.com/touch-all-items-in-a-wcm-library)
- **Modified**
    - `package.json` - updated prismjs version; since sparql and turtle components are now part of the package, I was also able to remove the `src/assets/prismjs` directory and have all files that referred to those refer to the components that are now in the package.
    - Gave `title` attribute to all iframes to improve Lighthouse Audit accessibility score (which was 78 before this change).
    - Gave new `showInMenus` attribute to items in `site-data.json`. Items not appearing in menus will still have a route in the router; this attribute can now be read to skip rendering in certain or all menus, however. It is used, for example, in the [/memories-of-momma-1] series. Only the first post in the series shows up in the blog menu of posts. The rest of the items ARE in the site-data.json file, so they have routes (and this allows a NEXT/BACK navigation through the series).
    - Removed `EnvironmentConfigService` in favor of more simplified use of `src/helpers/utils.ts`.
    - Gave Prev and Next controls to `IA Files` content series and removed parts 2 through 5 from menus; this now mimics how the Memories of Momma series works.
    - Gave Prev and Next controls to `Create a player health status indicator for the Unity GUI` content series and removed parts 2 through 5 from menus; this now mimics how the Memories of Momma series works.

## [1.4.3] - 2020-01-10

- **Added** Pages from legacy Wordpress blog:
    - [/the-ia-files-001-into-the-fire](https://codyburleson.com/the-ia-files-001-into-the-fire)
    - [/the-ia-files-002-concepts-crows-camels-and-the-cognitive-divide](https://codyburleson.com/the-ia-files-002-concepts-crows-camels-and-the-cognitive-divide)
    - [/the-ia-files-003-definitions-defined](https://codyburleson.com/the-ia-files-003-definitions-defined)
    - [/the-ia-files-004-taxonomies](https://codyburleson.com/the-ia-files-004-taxonomies)
    - [/the-ia-files-005-navigation-breadth-and-depth](https://codyburleson.com/the-ia-files-005-navigation-breadth-and-depth)
- **Modified** page - [/photos/kevin-brooks](https://codyburleson.com/kevin-brooks); added three new photos

## [1.4.2] - 2020-01-08

- **Added** New content: [Beaver Cage/Union memorial service program](https://codyburleson.com/beaver-cage-union-memorial)
- **Added** Pages from legacy WordPress blog:
    - [/java-system-properties](https://codyburleson.com/java-system-properties)
    - [/introduction-to-the-semantic-web-vision-and-technologies](https://codyburleson.com/introduction-to-the-semantic-web-vision-and-technologies)
    - [/show-item-namesin-ibm-wcm-authoring](https://codyburleson.com/show-item-namesin-ibm-wcm-authoring)
    - [/new-web-developer-toolkit-for-ibm-digital-experience](https://codyburleson.com/new-web-developer-toolkit-for-ibm-digital-experience)
    - [/how-to-tail-websphere-portal-log-files-in-microsoft-windows](https://codyburleson.com/how-to-tail-websphere-portal-log-files-in-microsoft-windows)
- **Modified**
    - [/life-events](https://codyburleson.com/life-events) with new content.
    - [/photos/kevin-brooks](https://codyburleson.com/kevin-brooks) to fix one text error and add newly received photos

## [1.4.1] - 2020-01-07

- **Added** pages from legacy WordPress blog:
    - [/how-to-use-wcm-categories-from-query-parameter-for-pzn](https://codyburleson.com/how-to-use-wcm-categories-from-query-parameter-for-pzn)
    - [/work-life-balance-is-overrated](https://codyburleson.com/work-life-balance-is-overrated)
    - [/meet-iife-the-quintessential-javascript-closure](https://codyburleson.com/meet-iife-the-quintessential-javascript-closure)
    - [/logging-through-websphere-portal-from-java-and-jsps](https://codyburleson.com/logging-through-websphere-portal-from-java-and-jsps)
- **Modified** The Cage photo pages (added new photographs):
    - [/photos/kevin-brooks](https://codyburleson.com/kevin-brooks)
    - [/photos/james-haight](https://codyburleson.com/james-haight)

## [1.4.0] - 2020-01-06

- **Fixes** [#72](https://github.com/codyburleson/cburleson-pwa/issues/72) Implement Google Site Search

## [1.3.1] - 2020-01-06

- **Added** initial test for Google Custom Search just on About page; must deploy to prod to test, unfortunately...

## [1.3.0] - 2020-01-06

- **Added** pages from legacy WordPress blog:
    - [intellij-idea-cheat-sheet](https://codyburleson.com/intellij-idea-cheat-sheet)
- **Fixes** [#1](https://github.com/codyburleson/cburleson-pwa/issues/1)Unable to select and copy text on desktop

## [1.2.8] - 2020-01-04

- **Added** pages from legacy WordPress blog:
    - [/quotes-for-writers](https://codyburleson.com/quotes-for-writers)
    - [/how-to-find-large-images-and-files-in-ibm-wcm](https://codyburleson.com/how-to-find-large-images-and-files-in-ibm-wcm)
    - [/curated-list-of-ibm-digital-experience-resources](https://codyburleson.com/curated-list-of-ibm-digital-experience-resources)
    - [/define-a-servlet-using-java-annotations-instead-of-xml](https://codyburleson.com/define-a-servlet-using-java-annotations-instead-of-xml)
    - [/create-custom-properties-for-a-resource-environment-provider-using-wasadmin-scripting](https://codyburleson.com/create-custom-properties-for-a-resource-environment-provider-using-wasadmin-scripting)
    - [/enhance-your-front-end-web-dev-workflow-with-emmet](https://codyburleson.com/enhance-your-front-end-web-dev-workflow-with-emmet)

## [1.2.7] - 2020-01-02

- **Added** new content: [/delete-node-modules-folder-on-windows](https://codyburleson.com/delete-node-modules-folder-on-windows)
- **Added** pages from legacy WordPress blog:
    - [/classnotfound-does-not-always-mean-class-not-found](https://codyburleson.com/classnotfound-does-not-always-mean-class-not-found)
    - [/musing-on-nostalgia](https://codyburleson.com/musing-on-nostalgia)
    - [/how-to-adjust-zsphere-sketch-depth-in-zbrush](https://codyburleson.com/how-to-adjust-zsphere-sketch-depth-in-zbrush)
    - [/trim-fat-from-your-content](https://codyburleson.com/trim-fat-from-your-content)
    - [/ldap-error-codes](https://codyburleson.com/ldap-error-codes)
    - [/linux-and-unix-commands](https://codyburleson.com/linux-and-unix-commands)

## [1.2.6] - 2019-12-30

- **Added** pages from legacy WordPress blog: 
    - [/build-a-rendering-plugin-ibm-wcm-part-1](https://codyburleson.com/build-a-rendering-plugin-ibm-wcm-part-1)
    - [/build-a-rendering-plugin-ibm-wcm-part-2](https://codyburleson.com/build-a-rendering-plugin-ibm-wcm-part-2)
    - [/use-spring-for-stardog-in-a-spring-boot-application](https://codyburleson.com/use-spring-for-stardog-in-a-spring-boot-application)
    - [/i-dare-you-to-touch-her](https://codyburleson.com/i-dare-you-to-touch-her)
- **Fixes** [#53](https://github.com/codyburleson/cburleson-pwa/issues/53) Create component for adsense and apply to all pages.

## [1.2.5] - 2019-12-29

- **Modified** new `gls-adsense-ad` component for testing on page [/automatically-build-and-include-one-eclipse-project-into-another](https://codyburleson.com/automatically-build-and-include-one-eclipse-project-into-another); attempt using `componentWillRender` did not work. This is a production test of `componentDidRender`.

## [1.2.4] - 2019-12-29

- **Added** new `gls-adsense-ad` component for testing on page [/automatically-build-and-include-one-eclipse-project-into-another](https://codyburleson.com/automatically-build-and-include-one-eclipse-project-into-another)
- **Added** Page from legacy WordPress blog: [/vs-code-cheat-sheet](https://codyburleson.com//vs-code-cheat-sheet)

## [1.1.4] - 2019-12-28

- **Added** pages from my legacy WordPress blog...
    - [/are-mashups-the-new-portals-and-gadgets-the-new-portlets](https://codyburleson.com/are-mashups-the-new-portals-and-gadgets-the-new-portlets)
    - [/avoid-tracking-ga-page-views-in-atlassian-confluence](https://codyburleson.com/avoid-tracking-ga-page-views-in-atlassian-confluence)
    - [/awesome-power-of-the-link-in-linked-data](https://codyburleson.com/awesome-power-of-the-link-in-linked-data)
    - [/base22-consultants-creed](https://codyburleson.com/base22-consultants-creed)
    - [/eclipse-tip-format-source-code-on-save](https://codyburleson.com/eclipse-tip-format-source-code-on-save)
    - [/better-error-messages-from-gulp-using-gulp-util](https://codyburleson.com/better-error-messages-from-gulp-using-gulp-util)
    - [/binding-to-a-zsphere-armature](https://codyburleson.com/binding-to-a-zsphere-armature)
    - [/user-impersonation-programming-in-websphere-portal](https://codyburleson.com/user-impersonation-programming-in-websphere-portal)
    - [/book-review-more-than-everything-by-vanessa-foster](https://codyburleson.com/book-review-more-than-everything-by-vanessa-foster)

## [1.1.3] - 2019-12-26

- **Added** pages from my legacy WordPress blog:
    - [/memories-of-momma-1](https://codyburleson.com/memories-of-momma-1)
    - [/memories-of-momma-2](https://codyburleson.com/memories-of-momma-2)
    - [/memories-of-momma-3](https://codyburleson.com/memories-of-momma-3)
    - [/memories-of-momma-4](https://codyburleson.com/memories-of-momma-4)
    - [/memories-of-momma-5](https://codyburleson.com/memories-of-momma-5)
    - [/memories-of-momma-6](https://codyburleson.com/memories-of-momma-6)

## [1.1.2] - 2019-12-25

- **Added** pages from my legacy WordPress blog...
    - [/access-the-was-console-from-websphere-portal-server](https://codyburleson.com/access-the-was-console-from-websphere-portal-server)
    - [/resolving-404-errors-accessing-wcm-content-through-poc-servlet](https://codyburleson.com/resolving-404-errors-accessing-wcm-content-through-poc-servlet)
    - [/notes-on-zbrush-slicecurve-brush](https://codyburleson.com/notes-on-zbrush-slicecurve-brush)
    - [/identifying-large-object...uming-memory-in-java-heap](https://codyburleson.com/identifying-large-objects-consuming-memory-in-java-heap)
    - [/about-zsphere-smoothing-brushes](https://codyburleson.com/about-zsphere-smoothing-brushes)
    - [/about-polygroups-in-zbrush](https://codyburleson.com/about-polygroups-in-zbrush)
    - [/a-look-at-sparql-sql-for-semantic-web](https://codyburleson.com/a-look-at-sparql-sql-for-semantic-web)
- **Changed** `app-root.tsx` routing code; simplified how it handles Page Not Found cases based on the `<ion-route url=":any" component="app-404"/>` solution suggested [here](https://github.com/ionic-team/ionic/issues/18687).
- **Changed** Google Analytics code so that it does not track when running in prod mode on localhost.
- **Removed** unused `app-root.css` file and reference

## [1.1.1] - 2019-12-25

- **Added** `robots.txt` file allowing all agents to crawl all resources, and pointing to the `sitemap.txt` file.
- **Added** 3 `<link rel="preconnect" href="..."/>` tags based on performance improvement suggestion from Lighthouse.
- **Changed** About page: Next to site version number, added a link to this changelog on Github.
- **Fixed** [#54](https://github.com/codyburleson/cburleson-pwa/issues/54) - URLs that end with fwd slash load appropriate page, but do not render

## [1.1.0] - 2019-12-24

- **Added** new Node.js script, `appGenSitemap.js` generates sitemap.txt file from `src/assets/data/site-data.json` file. `stencil.config.ts` is configured to copy the generated txt file into the `www` deployment folder.
- **Added** Pages from legacy WordPress blog: 
    - [/notes-on-zbrush-sculptris-pro](https://codyburleson.com/notes-on-zbrush-sculptris-pro)
    - [/accessing-the-authentica...r-from-a-separate-web-app](https://codyburleson.com/accessing-the-authenticated-websphere-portal-user-from-a-separate-web-app)
- **Changed** Defer offscreen images (based on Lighthouse performance test); changed some uses of `img` to `ion-img`, which defers offscreen images.
- **Fixed** [#50](https://github.com/codyburleson/cburleson-pwa/issues/50) Create a sitemap.xml (or other format) for Google

## [1.0.2] - 2019-12-22

- **Added** pages from legacy WordPress site: 
    - [/display-user-attributes-in-a-websphere-portal-theme](https://codyburleson.com/display-user-attributes-in-a-websphere-portal-theme)
    - [/how-to-check-user-access-role-in-a-websphere-portal-theme](https://codyburleson.com/how-to-check-user-access-role-in-a-websphere-portal-theme)

- **Changed** For testing purposes, added Google Adsense ad spot to single existing page, `zbrush-keyboard-shortcuts`; seems to work.

## [1.0.1] - 2019-12-20

- **Added** pages from legacy WordPress site: 
    - [/story-structure-diagram](https://codyburleson.com/story-structure-diagram)
    - [/show-both-sides-of-a-plane-in-zbrush](https://codyburleson.com/show-both-sides-of-a-plane-in-zbrush)
    - [/glossary-of-ldap-acronyms-and-terms](https://codyburleson.com/glossary-of-ldap-acronyms-and-terms)

## [1.0.0] - 2019-12-19

Initial release. A working static site built with Ionic 4 and Stencil.js. It has three main sections: Blog, Books, and About. It has several blog posts and pages which were carried over from my legacy WordPress blog.

