import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-female-anatomy-out-of-the-box-in-zbrush',
})
export class PageZbrushFemaleAnatomy {

    title = 'Blog';

    // header for this individual item by id...
    header: any;

    async componentWillLoad() {
        if (isLocal()) {
            console.log('> PageZbrushFemaleAnatomy.componentWillLoad');
        }
        // this.data = await BlogData.load();
        // Get the id from the URL path (slug)
        let id = document.location.pathname.substring( document.location.pathname.lastIndexOf('/') + 1 );
        this.header = BlogData.getPostHeaderById(id);

        // set document title for browser / tab / bookmark
        document.title = this.header.title + ' | ' + SITENAME;
        if (this.header.teaser) {
            document.getElementById("meta-desc").setAttribute("content", this.header.teaser);
        }
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-buttons slot="start">
                        <ion-back-button defaultHref="/" />
                    </ion-buttons>
                    <ion-title>Blog</ion-title>
                </ion-toolbar>
            </ion-header>,

            <ion-content class="ion-padding">

                <ion-grid>
                    <ion-row>
                        <ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="7">
                            <h1>{this.header.title}</h1>
                            <app-entry-meta header={this.header} />

                            <p>I just learned that there’s a fabulously detailed female anatomy model that comes out-of-the-box with ZBrush. I never took much notice of the tool because it’s thumbnail in the tool palette is just a skeleton, but as it turns out, it’s really much more.</p>
                            <p>In ZBrush, press <kbd>,</kbd> to open the Lightbox.</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-female-anatomy-1.jpg" alt="" /></p>
                            <p>Find and open the Ryan_Kingslien_Anatomy_Model.ZTL file with the thumbnail preview of a skeleton. Draw the tool on the canvas and you will see there’s more to it than just a skeleton!</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-female-anatomy-2.jpg" alt="" /></p>
                            <p>If you examine the subtool palette, you will also note that the tool is comprised of several subtools with anatomical names for each. This is great for helping you learn the anatomical names of various body parts.</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-female-anatomy-3.jpg" alt="" /></p>
                            <p>The tool was developed by <a href="https://www.ryankingslien.com/">Ryan Kingslien</a>. To learn from this master, check out <a href="https://www.youtube.com/user/rkingslien" rel="nofollow">his YouTube channel</a>. He’s an amazing dude.</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                            <gls-adsense-ad />
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}