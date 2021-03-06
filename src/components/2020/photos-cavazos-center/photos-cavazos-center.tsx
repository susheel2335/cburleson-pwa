import { Component, Element, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-photos-cavazos-center'
})
export class PagePhotosCavazosCenter {

    @Element() el: any;

    header: any;

    data: any = {
        "imagesURL": "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/vietnam-cavazos-center/",
        "photos": [
            {
                "id": "cavazos-center_0027",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0028",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0030",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0032",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0054",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0034",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0048",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0036",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0037",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0038",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0039",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0040",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0041",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0042",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0044",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0047",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0046",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0053",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0045",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0049",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0062",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0051",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0052",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0035",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0033",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0056",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0058",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0060",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0061",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0050",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0063",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "cavazos-center_0064",
                "subtitle": "",
                "content": ""
            }
        ]
    }

    async componentWillLoad() {
        let id = extractIdFromDocumentPath();
        this.header = BlogData.getPostHeaderById(id);
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
                        <ion-back-button defaultHref="/cage" />
                    </ion-buttons>
                    <ion-title>The Cage - Vietnam</ion-title>
                    <ion-buttons slot="end">
                        <ion-button onClick={() => this.toggleSearch()}>
                            <ion-icon slot="icon-only" name="search-outline"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>
                <gls-gcse-searchbox-only id="searchbar" class="hidden" />
            </ion-header>,

            <ion-content class="ion-padding">

                <h1>{this.header.title}</h1>
                <app-entry-meta header={this.header} />

                <p>These photographs were originally donated to the Martin Cavazos Center in Sebastian, Texas in honor of Cpl Martin Cavazos (1st Battalion, 3rd Marines). Martin was killed on May 5, 1967 during Operation Beaver Cage when his company (Delta) was ambushed. When the Martin Cavazos Center was shut down, these photos were transferred to the care of his younger brother, Daniel Cavazos who presents them here in his brother's honor.</p>

                <app-entry-meta header={this.data} />

                <app-photo-grid photos={this.data.photos} image-path={this.data.imagesURL} />

                <p>The photographer of these images is said to have been Bruce Alexrod. Regarding these pictures, fellow 1/3 Marine, Jim Groeger, wrote to me in an email, &quot;I ran down this combat photographer for 1/3; he was a Chicago boy like me, Bruce Alexrod. When we finally met face-to-face in the 70's he told me he never turned in the pictures he'd taken of the 1967 tour. I asked him to give the pics to me, which he did. We had the first (for me) mini-reunion at a guy's home near Chicago.  I brought the pictures and that's how some of these shots were seen in Texas (at the Martin Cavazos Center); <a href="/ray-kelley-silver-star">Ray Kelly</a> asked me to send them down there. I finally gave them to the officer in charge of me who is a hitter in DC, now retired.  He gave them to a depository and I'm sorry to say, I didn't get the name of which one.&quot;</p>
                
                <p>In a brief search online, I was able to find one black-and-white photo, similar in style, attributed to a photographer by the name of Bruce Alexrod and used in the book, <a target="_blank" href="https://www.amazon.com/gp/product/1615300112/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1615300112&linkCode=as2&tag=burtecgrollc-20&linkId=92f45ea070ea793a3d16759903d06c92">The Korean War and the Vietnam War: People, Politics, and Power (America at War)</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=burtecgrollc-20&l=am2&o=1&a=1615300112" width="1" height="1" alt="" style={{border:`none !important`, margin:`0px !important`}} />. The image used in that book is an editorial photo from Getty Images that features American Navy medics and marines carrying a wounded comrade to safety near Dong Ha, Vietnam (it does not appear on this page). My point is that finding the other Vietnam War image attributed to Bruce Alexrod lends to the credibility of Jim's claim that these photos were taken by Bruce Axelrod.</p>

            </ion-content>,

        ];
    }
}