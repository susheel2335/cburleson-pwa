import { Component, h, Listen } from '@stencil/core';
import { isLocal, SITENAME } from '../../helpers/utils';
import { BlogData } from '../../services/blog-data';
// import { PageData } from '../../services/page-data';

declare let gtag: Function;

@Component({
  tag: 'app-root'
})
export class AppRoot {

  data: any;

  unfoundRoute: any;

  //pageData: any = [];

  // See: How To Properly Add Google Analytics Tracking to Your Angular Web App...
  // https://medium.com/@PurpleGreenLemon/how-to-properly-add-google-analytics-tracking-to-your-angular-web-app-bc7750713c9e
  @Listen('ionRouteDidChange')
  routeDidChangeHandler(event: CustomEvent) {

    //if (isLocal()) {
    //console.log('> AppRoot.routeDidChangeHandler > event.detail: %o', event.detail);
    //}

    // Fix for Issue #5 - Switching main menu pages doesn't change page titles when clicking already loaded main page
    this.data.pages.map((item) => {
      if (event.detail.to == ('/' + item.id)) {
        document.title = item.title + ' | ' + SITENAME;
      }
    });

    if (!isLocal()) {
      if (event.detail.redirectedFrom !== null) {
        // We want to track what the user actually entered or clicked to get to the destination, not necessarily 
        // where they got redirected to (mainly '/' instead of 'blog'). If a redirection exists, take the redirectedFrom...
        gtag('config', 'UA-21819432-1', { 'page_path': event.detail.redirectedFrom });
      } else {
        // otherwise, take the to...
        gtag('config', 'UA-21819432-1', { 'page_path': event.detail.to });
      }
    }

  }

  async componentWillLoad() {

    if (isLocal()) {
      console.log('> AppRoot.componentWillLoad');
    }

    //this.pageData = await PageData.load();

    // This helps handle undefined routes ("page not found" cases)
    this.data = await BlogData.load();

  }

  renderRouter() {

    const blogPostRoutes = [];
    const primaryNavRoutes = [];
    const pageRoutes = [];

    this.data.content.map((item) => {

        // It is not required to add the "tab" : "blog" attribute set to an item in site-data.json
        // because we assume that is the majority home for content and we don't want to have to 
        // have all that data in site-data as weight or impose the inconvenience of adding it for 
        // every item. But, it it does not exist, we need to assume the tab is "blog" and add it 
        // dynamically before creating the routes.

        if (!item.tab) {
          item.tab = "blog";
        }

        // If the item does not have the "menus" array OR if it has the "menus" array, but the array does not contain menu name "main"...
        if (!item.menus || (item.menus && item.menus.indexOf('main') == -1)) {
          if (typeof item.parent == 'undefined') {
            // No parent is defined because the item does not have a defined "parent" attribute; thus, generate this...
            // <ion-route url="/cage" component="tab-books">
            //    <ion-route component="page-cage"></ion-route>
            // </ion-route>
            pageRoutes.push(<ion-route url={'/' + item.id} component={'tab-' + item.tab}><ion-route component={'page-' + item.id}></ion-route></ion-route>);
          } else {
            // parent is defined; generate this...
            // <ion-route url="/about" component="tab-about">
            //    <ion-route url="/life-events" component="page-life-events"></ion-route>
            // </ion-route>
            pageRoutes.push(<ion-route url={'/' + item.parent} component={'tab-' + item.tab}><ion-route url={'/' + item.id} component={'page-' + item.id}></ion-route></ion-route>);
          }
        }
      
    });

    // Primary nav routes are expected to have parent tabs with a corresponding id (i.e. the 'blog' page goes to the 'blog' tab)
    this.data.pages.map((item) => {
      if (item.isTab) {
        // The item is defined as a tab (primary item) because it has an "isTab" attribute and the value is `true`; thus, generate this...
        // <ion-route url="/blog" component="tab-blog">
        //    <ion-route component="page-blog"></ion-route>
        // </ion-route>
        primaryNavRoutes.push(<ion-route url={'/' + item.id} component={'tab-' + item.id}><ion-route component={'page-' + item.id}></ion-route></ion-route>);
      } else {
        // If the item does not have the "menus" array OR if it has the "menus" array, but the array does not contain menu name "main"...
        if (!item.menus || (item.menus && item.menus.indexOf('main') == -1)) {
          if (typeof item.parent == 'undefined') {
            // No parent is defined because the item does not have a defined "parent" attribute; thus, generate this...
            // <ion-route url="/cage" component="tab-books">
            //    <ion-route component="page-cage"></ion-route>
            // </ion-route>
            pageRoutes.push(<ion-route url={'/' + item.id} component={'tab-' + item.tab}><ion-route component={'page-' + item.id}></ion-route></ion-route>);
          } else {
            // parent is defined; generate this...
            // <ion-route url="/about" component="tab-about">
            //    <ion-route url="/life-events" component="page-life-events"></ion-route>
            // </ion-route>
            pageRoutes.push(<ion-route url={'/' + item.parent} component={'tab-' + item.tab}><ion-route url={'/' + item.id} component={'page-' + item.id}></ion-route></ion-route>);
          }
        }
      }
    });


    return (
      <ion-router useHash={false}>

        <ion-route component="app-tabs">

          {primaryNavRoutes}

          {pageRoutes}

          <ion-route url="/photos" component="tab-books">
            <ion-route url="/:name" component="app-photos"></ion-route>
          </ion-route>
          <ion-route url="/photos" component="tab-books">
            <ion-route url="/:name/:any" component="app-404-page-not-found"></ion-route>
          </ion-route>

          {blogPostRoutes}

        </ion-route>

        <ion-route url="/search" component="app-search" />
        <ion-route url=":any" component="app-404-page-not-found" />

        <ion-route-redirect from="/" to='/blog' />

        <ion-route-redirect from="/d-1-3-weapons-platoon" to='/cage/d-1-3-weapons-platoon' />
        <ion-route-redirect from="/marine-platoon-156-san-diego-1966" to='/cage/marine-platoon-156-san-diego-1966' />
        <ion-route-redirect from="/ray-kelley-silver-star" to='/cage/ray-kelley-silver-star' />
        <ion-route-redirect from="/vietnam-1967-amphibious-combat" to='/cage/vietnam-1967-amphibious-combat' />
        <ion-route-redirect from="/sea-tiger-newspapers" to='/cage/sea-tiger-newspapers' />
        <ion-route-redirect from="/beaver-cage-union-memorial" to='/cage/beaver-cage-union-memorial' />
        <ion-route-redirect from="/slf-after-action-cage-union" to='/cage/slf-after-action-cage-union' />
        <ion-route-redirect from="/beaver-cage-command-chron" to='/cage/beaver-cage-command-chron' />

        {/* 
        <ion-route-redirect from="/photos/curt-bruce" to='/cage/curt-bruce' />
        <ion-route-redirect from="/photos/ed-kalwara" to='/cage/ed-kalwara' />
        <ion-route-redirect from="/photos/gary-culp" to='/cage/gary-culp' />
        <ion-route-redirect from="/photos/jack-depope" to='/cage/jack-depope' />
        <ion-route-redirect from="/photos/james-haight" to='/cage/james-haight' />
        <ion-route-redirect from="/photos/jim-shipp" to='/cage/jim-shipp' />
        <ion-route-redirect from="/photos/kevin-brooks" to='/cage/kevin-brooks' />
        <ion-route-redirect from="/photos/ray-kelley" to='/cage/ray-kelley' />
        <ion-route-redirect from="/photos/stanley-hall" to='/cage/stanley-hall' />
        <ion-route-redirect from="/photos/cavazos-center" to='/cage/cavazos-center' />
        */}

        <ion-route-redirect from="/book-review-the-goldfinch" to='/books/book-review-the-goldfinch' />
        <ion-route-redirect from="/book-review-more-than-everything-by-vanessa-foster" to='/books/book-review-more-than-everything-by-vanessa-foster' />
        <ion-route-redirect from="/vietnam-war-reference-resources" to='/cage/vietnam-war-reference-resources' />

      </ion-router>
    );
  }

  renderMainMenu() {

    const pages = [];

    this.data.pages.map((item) => {
      // Render item as a main menu item only if the "menus" array of the 
      // given item exists and also contains the menu name "main"
      if (item.menus && item.menus.indexOf('main') > -1) {
        pages.push(
          <ion-menu-toggle autoHide={false}>
            <ion-item href={'/' + item.id}>
              <ion-icon slot="start" name={item.icon}></ion-icon>
              <ion-label>{item.title}</ion-label>
            </ion-item>
          </ion-menu-toggle>
        );
      }
    });

    return (
      <ion-menu content-id="menu-content" menu-id="primaryNav">
        <ion-header>
          <ion-toolbar>
            <ion-title>Menu</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content forceOverscroll={false}>
          <ion-list>
            {/* <ion-list-header>Browse</ion-list-header> */}
            {pages}
          </ion-list>
        </ion-content>
      </ion-menu>
    );

  }

  render() {
    return (
      <ion-app>
        {this.renderRouter()}
        <ion-split-pane content-id="menu-content">
          {this.renderMainMenu()}
          <ion-router-outlet animated={false} id="menu-content"></ion-router-outlet>
        </ion-split-pane>
      </ion-app>
    );
  }

}
