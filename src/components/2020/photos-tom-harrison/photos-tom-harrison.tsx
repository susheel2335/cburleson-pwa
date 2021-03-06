import { Component, Element, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-photos-tom-harrison'
})
export class PagePhotosTomHarrison {

    @Element() el: any;

    header: any;

    data: any = {
        "imagesURL": "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/vietnam-tom-harrison/",
        "photos": [
            {
                "id": "tom-harrison_008",
                "subtitle": "Khe Sanh",
                "content": "Scott (last name), Dula, Jenkens at haircut time."
            },
            {
                "id": "tom-harrison_009",
                "subtitle": "Khe Sanh",
                "content": "Dula &amp; Widner in back of our gun hole. The gun is covered up."
            },
            {
                "id": "tom-harrison_010",
                "subtitle": "Khe Sanh",
                "content": "Helfer in doorway of our hooch with wet clothes hanging on &quot;line.&quot; In the far background, center of photo is Hill 881. To the right of the photo (just out view) is Hill 861."
            },
            {
                "id": "tom-harrison_001a",
                "subtitle": "Air Strike - Operation Cochise",
                "content": ""
            },
            {
                "id": "tom-harrison_001b",
                "subtitle": "Air Strike - Operation Cochise",
                "content": ""
            },
            {
                "id": "tom-harrison_001c",
                "subtitle": "Air Strike - Operation Cochise",
                "content": ""
            },
            {
                "id": "tom-harrison_002",
                "subtitle": "",
                "content": "Miller"
            },
            {
                "id": "tom-harrison_004",
                "subtitle": "In Squad Bay on the USS Okinawa (LPH-3)",
                "content": "(L-R) Mike Hartman, Rowe, Cpl. John Hughes"
            },
            {
                "id": "tom-harrison_005",
                "subtitle": "Chu Lai",
                "content": "Ken Burkitt"
            },
            {
                "id": "tom-harrison_006",
                "subtitle": "Operation Cochise",
                "content": "(L-R on flag) Me, Miller, and <em>unidentified</em>."
            },
            {
                "id": "tom-harrison_007",
                "subtitle": "",
                "content": "Hartman"
            },
            {
                "id": "tom-harrison_011b",
                "subtitle": "Burning &quot;gook&quot; houses.",
                "content": "<em>Note: The derogatory term, &quot;gook,&quot; which appeared in the handwritten description on the back of this photo is reprinted as originally written for its factual and historical significance.</em></em>"
            },
            {
                "id": "tom-harrison_011a",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "tom-harrison_012",
                "subtitle": "USS Okinawa (LPH-3)",
                "content": ""
            },
            {
                "id": "tom-harrison_014",
                "subtitle": "Operation Buffalo",
                "content": "Helfer. This and the following two photos were taken just after the big fight on Operation Buffalo. The temperature was extremely hot."
            },
            {
                "id": "tom-harrison_015",
                "subtitle": "Operation Buffalo",
                "content": "Me, at right."
            },
            {
                "id": "tom-harrison_016",
                "subtitle": "Operation Buffalo",
                "content": "(L-R) Belts, Thompson, Parker, Roger Bacon"
            },
            {
                "id": "tom-harrison_017",
                "subtitle": "On the hangar Deck of the USS Okinawa (LPH-3)",
                "content": "(L-R) unidentified, Boseman, Helfer, Belts, Rowe"
            },
            {
                "id": "tom-harrison_018",
                "subtitle": "At (Chu Lai sp?)",
                "content": "(L-R) George Norbut, who later stepped on a mine that killed him on Sept 2, 1967, me, <em>unditentified</em>"
            },
            {
                "id": "tom-harrison_019",
                "subtitle": "",
                "content": "At right, Don Bumgardner. At left, <em>unditentified</em>."
            },
            {
                "id": "tom-harrison_020",
                "subtitle": "",
                "content": "(L-R) Hartman, Kalwara, Boseman, <em>unidentified</em>, me, Ken Burkitt"
            },
            {
                "id": "tom-harrison_021",
                "subtitle": "Operation Buffalo",
                "content": "<em>unidentified</em>, Helfer, and me"
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

                <p>A collection of photographs from Tom Harrison (Charlie Company, 1st Battalion, 3rd Marines) taken during his tour of duty in the Vietnam War.</p>
                
                <p><em>Photographs &copy; 1966-2020 Thomas Harrison; published with permission as compliments to <a href="/cage">The Cage</a>, an in-progress book project.</em></p>

                <app-entry-meta header={this.data} />

                <app-photo-grid photos={this.data.photos} image-path={this.data.imagesURL} />

            </ion-content>,

        ];
    }
}