import { Component, Element, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

@Component({
  tag: 'page-home',
})
export class PageHome {

  @Element() el: HTMLElement;

  title = 'Home';

  // header for this individual item by id...
  header: any;

  async componentWillLoad() {
    if (isLocal()) {
      console.log('> AppHome.componentWillLoad');
    }
    // this.data = await BlogData.load();
    // Get the id from the URL path (slug)
    //let id = document.location.pathname.substr(1);
    //this.header = BlogData.getPostHeaderById(id);

    // set document title for browser / tab / bookmark
    document.title = this.title + ' | ' + SITENAME;
  }

  toggleSearch() {
    if (this.el.querySelector("#searchbar").classList.contains(`hidden`)) {
      this.el.querySelector("#searchbar").classList.remove('hidden');
    } else {
      this.el.querySelector("#searchbar").classList.add('hidden');
    }
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>{this.title}</ion-title>
          <ion-buttons slot="end">
            <ion-button onClick={() => this.toggleSearch()}>
              <ion-icon slot="icon-only" name="ios-search"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
        <gls-gcse-searchbox-only id="searchbar" class="hidden" />
      </ion-header>,

      <ion-content class="ion-padding">

        <ion-grid>
          <ion-row>
            <ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="7">
              <h1>{this.title}</h1>
              <app-entry-meta header={this.header} />

              <p>Here is some test Home content.</p>



              <ion-grid>
                <ion-row>
                  <ion-col>


                    <ion-card>
                      <ion-card-header>
                        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                        <ion-card-title>Writing</ion-card-title>
                      </ion-card-header>

                      <ion-card-content>
                        ...
            </ion-card-content>
                    </ion-card>


                  </ion-col>
                  <ion-col>

                    <ion-card>
                      <ion-card-header>
                        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                        <ion-card-title>Game Arts</ion-card-title>
                      </ion-card-header>

                      <ion-card-content>
                        ...
            </ion-card-content>
                    </ion-card>

                  </ion-col>
                  <ion-col>


                    <ion-card>
                      <ion-card-header>
                        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                        <ion-card-title>Software Dev</ion-card-title>
                      </ion-card-header>

                      <ion-card-content>
                        ...
            </ion-card-content>
                    </ion-card>


                  </ion-col>
                  <ion-col>

                    <ion-card>
                      <ion-card-header>
                        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                        <ion-card-title>Colorado Adventures</ion-card-title>
                      </ion-card-header>

                      <ion-card-content>
                        ...
            </ion-card-content>
                    </ion-card>

                  </ion-col>
                </ion-row>
              </ion-grid>





            </ion-col>
            <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">

            </ion-col>
          </ion-row>
        </ion-grid>

      </ion-content>

    ];
  }
}