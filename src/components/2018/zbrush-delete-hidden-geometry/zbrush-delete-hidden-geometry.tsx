import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-delete-hidden-geometry-in-zbrush',
})
export class PagedZbrushDleteHiddenGeometry {

    header: any;

    async componentWillLoad() {
        let id = extractIdFromDocumentPath();
        this.header = BlogData.getPostHeaderById(id);
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

                            <ul>
                                <li><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> and drag out a selection to select geometry to hide. The selection area will appear green.</li>
                                <li>Before releasing the left mouse button, or before lifting the stylus pen, press <kbd>ALT</kbd>. The selection area will turn red.</li>
                                <li>In Tools &gt; Geometry &gt; Modify Topology, click Del Hidden.</li>
                                <li>Optionally, in the same panel, you may click Close Holes to cap open holes.</li>
                            </ul>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                            
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>


        ];
    }
}