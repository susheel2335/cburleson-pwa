import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-mirror-polygroup-on-subtool-in-zbrush',
})
export class PageZBrushMirrorPolygroup {

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

                            <p>Suppose you have made a polygroup on one side of your subtool (using the SliceCurve brush, for example)…</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-mirror-polygroup-1.png" alt="" /></p>
                            <p>If you want to mirror that polygroup onto the other side of the subtool, follow this procedure.</p>
                            <p>In the Deformation palette, on the Mirror button, select the axis on which to mirror (usually x).</p>
                            <p>Click the Mirror button. You’ll see the polygroup flip to the other side.</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-mirror-polygroup-2.png" alt="" /></p>
                            <p>Now go to the Geometry palette, expand the Modify Topology section, and click the Mirror and Weld button.</p>
                            <p>The polygroup is then mirrored to the other side as shown below.</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zbrush-mirror-polygroup-3.png" alt="" /></p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                            
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>


        ];
    }
}