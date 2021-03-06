import { Component, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';

import { BlogData } from '../../../services/blog-data';


@Component({
    tag: 'page-classnotfound-does-not-always-mean-class-not-found',
})
export class PageClassNotFound {

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

                            <p><img class="alignleft" src="https://s3.us-east-2.amazonaws.com/codyburleson.com/images/logo-java.svg" alt="Java icon" width="75"/>A Java ClassNotFound exception does not always mean that a class could not be found on the classpath. It seems that sometimes it can mean that the class was actually found 2 or more times – a conflict in the classloader.</p>

                            <p class="clear">Recently, while developing a portlet for WebSphere Portal, I got the following exception:</p>

                            <p><code>Caused by: java.lang.ClassNotFoundException: javax.el.ELException</code></p>

                            <p>My portlet ran fine in my local development environment, but when I deployed it to Production, it crapped out. This is because I had included JSTL jar files in my portlet’s WEB-INF/<span class="s3">lib</span> folder. As it turns out, those jar files, or similar ones, were already somewhere on the classpath in the Production environment.</p>

                            <p>So…It seems that the class was actually found – just more times than expected. It is as if the classloader cancels them all out if it finds duplicates or conflicts. This, in turn, can lead to the ClassNotFound message, which in that case is somewhat misleading.</p>

                            <p>Just something to keep in mind.</p>

                        </ion-col>
                        <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
                            
                        </ion-col>
                    </ion-row>
                </ion-grid>

            </ion-content>

        ];
    }
}