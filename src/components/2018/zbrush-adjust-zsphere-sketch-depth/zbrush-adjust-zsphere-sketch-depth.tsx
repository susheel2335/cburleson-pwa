import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-how-to-adjust-zsphere-sketch-depth-in-zbrush',
})
export class PageZBrushAdjustZsphereSketchDepth {

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

                            <p>You can adjust the depth that ZSphere will draw onto a surface in the brushes palette under Depth. There, you can adjust the Imbed slider or click the sphere symbol just to the left of the slider and drag it up and down.</p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zsphere-sketch-depth-1.png" alt="" /></p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zsphere-sketch-depth-2.png" alt="" /></p>
                            <p><img src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/2018/07/zsphere-sketch-depth-3.png" alt="" /></p>
                            <h2>References</h2>
                            <ul>
                                <li><a class="external-link" href="http://pixologic.com/zclassroom/lesson/sketch-brush" rel="nofollow">SKETCH BRUSH</a></li>
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