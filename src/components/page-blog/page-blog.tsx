import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'page-blog',
  styleUrl: 'page-blog.css'
})
export class PageBlog {

  title = 'Blog';

  @Prop({ connect: 'ion-modal-controller' }) modalCtrl: HTMLIonModalControllerElement;

  items = [
    {
      id: "/killing-kittens/",
      title: "Killing Kittens",
      teaser: "A memory of Mom, a .45 pistol, and a litter of kittens.",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/books/cage-book-thumb.jpg",
      datePublished: "2019/03/09",
      dateModified: "2019/06/10"
    },
    {
      id: "/zbrush-keyboard-shortcuts/",
      title: "ZBrush Keyboard Shortcuts",
      teaser: "My notes on ZBrush keyboard shortcuts (hotkeys) and control.",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/books/cage-book-thumb.jpg",
      datePublished: "2018/07/04",
      dateModified: "2019/04/17"
    },
    {
      id: "/format-currency-in-angular/",
      title: "Format Currency in Angular",
      teaser: "How format a number into currency with the Angular currency pipe.",
      thumbnail: "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/books/cage-book-thumb.jpg",
      datePublished: "2016/04/29",
      dateModified: "2018/09/25"
    }
  ]

  componentWillLoad() {
      document.title = this.title;
  }

  async presentFilter() {
    console.log('PageBlog > presentFilter()');
      const modal = await this.modalCtrl.create({
      component: 'page-blog-filter',
      componentProps: {
        // excludedTracks: this.excludeTracks,
      }
    });
    await modal.present();
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Blog</ion-title>
          <ion-buttons slot="end">
            <ion-button onClick={() => this.presentFilter()}>
              <ion-icon slot="icon-only" name="options"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>
          Welcome to the PWA Toolkit. You can use this starter to build entire
          apps with web components using Stencil and ionic/core! Check out the
          README for everything that comes in this starter out of the box and
          check out our docs on <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>


        <ion-list>
        {this.items.map((item) =>
            <ion-item href={item.id}>
              <ion-thumbnail slot="start">
                <img src={item.thumbnail}/>
              </ion-thumbnail>
              <ion-label text-wrap>
              {item.title}
              <p innerHTML={item.teaser}></p>
              <p><em>{new Date(item.datePublished).toDateString()}</em></p>
              </ion-label>
            </ion-item>
        )}
        </ion-list>

      </ion-content>
    ];
  }
}
