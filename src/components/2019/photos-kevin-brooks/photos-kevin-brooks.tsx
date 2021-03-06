import { Component, Element, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-photos-kevin-brooks'
})
export class PagePhotosKevinBrooks {

    @Element() el: any;

    header: any;

    data: any = {
        "imagesURL": "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/vietnam-kevin-brooks/",
        "photos": [
            {
                "id": "imh-236",
                "subtitle": "June 15, 1967",
                "content": "First day in Vietnam. Helo to Camp Evans. Picture taken S of city of Hue."
            },
            {
                "id": "imh-238",
                "subtitle": "June 15, 1967",
                "content": "Flying over city of Hue on way to Camp Evans."
            },
            {
                "id": "imh-234",
                "subtitle": "June 17, 1967",
                "content": "Passing Hue Cathedral on a truck headed to DaNang."
            },
            {
                "id": "imh-242",
                "subtitle": "June 17, 1967",
                "content": "On truck trip between Camp Evans and Danang. Picture taken between Hue and Phu Bai."
            },
            {
                "id": "imh-287",
                "subtitle": "June 30, 1967",
                "content": "USS Okinawa (LPH-3) in the South China Sea. The Okinawa was home to the squadron of H-34 helicopters and also Charlie and Delta rifle companies plus the Battalion Command Group."
            },
            {
                "id": "imh-245",
                "subtitle": "June 30, 1967",
                "content": "USS Okinawa at sunset in Gulf of Tonkin"
            },
            {
                "id": "imh-244",
                "subtitle": "June 30, 1967",
                "content": "Sunset on USS Okinawa in the Gulf of Tonkin"
            },
            {
                "id": "imh-251",
                "subtitle": "July 3, 1967",
                "content": "Preparing for Operation Buffalo on hanger deck of USS Okinawa on 4 hours notice. Tall Marine without helmet is 1st Lt. Bill Neuss, XO of Charlie Company. To his right with radio is Cpl. Harry Stidham, my Artillery FO radio operator."
            },
            {
                "id": "imh-247",
                "subtitle": "July 3, 1967",
                "content": "Operation Buffalo. With Cpl. Harry Stidham (at left), my Arty FO radio operator. Me, Kevin Brooks, at right."
            },
            {
                "id": "imh-250",
                "subtitle": "July 3, 1967",
                "content": "Operation Buffalo. Flight into area E of Con Thien called the Market Place."
            },
            {
                "id": "imh-249",
                "subtitle": "July 3, 1967",
                "content": "Operation Buffalo. BLT 1/3 landing SE of Con Thien, just S of the Marketplace."
            },
            {
                "id": "imh-253",
                "subtitle": "July 5, 1967",
                "content": "Operation Buffalo. Air and artillery strikes on DMZ near The Marketplace."
            },
            {
                "id": "imh-258",
                "subtitle": "July 12, 1967",
                "content": "Helicopters from HMM-362 landing on USS Okinawa."
            },
            {
                "id": "imh-259",
                "subtitle": "July 12, 1967",
                "content": "USS Cimarron (O-22) retrieving fuel lines."
            },
            {
                "id": "imh-263",
                "subtitle": "",
                "content": "USS Okinawa, USS Cimarron and USS Hermitage during refueling process."
            },
            {
                "id": "imh-260",
                "subtitle": "July 12, 1967",
                "content": "USS Hermitage (LSD-34) pulls away after being refueled."
            },
            {
                "id": "imh-264",
                "subtitle": "July 19, 1967",
                "content": "USS Hermitage, where Alpha Battery, 1st Bn/12th Marines was berthed, being refused by USS Cimarron (O-22)."
            },
            {
                "id": "imh-261",
                "subtitle": "July 19, 1967",
                "content": "Refueling at sea. USS Cimarron (O-22) pulls alongside USS Okinawa."
            },
            {
                "id": "imh269",
                "subtitle": "",
                "content": "Operation Beacon Guide along Highway #1 between Hue and Danang"
            },
            {
                "id": "imh270",
                "subtitle": "July 26, 1967",
                "content": "Operation Beacon Guide along Highway #1."
            },
            {
                "id": "imh271",
                "subtitle": "July 26, 1967",
                "content": "Operation Beacon Guide. Kids in village of Thon Trung Kien."
            },
            {
                "id": "imh272",
                "subtitle": "July 26, 1967",
                "content": "Operation Beacon Guide. With Cpl. Harry Stidham, my radio operator."
            },
            {
                "id": "imh273",
                "subtitle": "July 29, 1967",
                "content": "Operation Beacon Guide. Lifting off to move from Phase I of Operation Beacon Guide to Phase II of Operation Beacon Guide (roughly 15 klicks north)."
            },
            {
                "id": "imh274",
                "subtitle": "July 31, 1967",
                "content": "Charlie Company 1/3 formation on USS Okinawa to present promotions and awards. Captain Reczek (Company CO) and 1st Sgt. Campo make the presentations."
            },
            {
                "id": "imh275",
                "subtitle": "July 31, 1967",
                "content": "Award ceremony for Charlie Company, 1/3."
            },
            {
                "id": "imh281",
                "subtitle": "Aug 8, 1967",
                "content": "Operation Beacon Gate. VC found hiding in a hole inside our night position."
            },
            {
                "id": "imh282",
                "subtitle": "Aug 8, 1967",
                "content": "Operation Beacon Gate. VC prisoners guarded by Sgt. Valencia."
            },
            {
                "id": "imh283",
                "subtitle": "Aug 8, 1967",
                "content": "Operation Beacon Gate. Cpl Love fires 3.5 rocket as marking round for Phantom jet."
            },
            {
                "id": "imh285",
                "subtitle": "Aug 9, 1967",
                "content": "Operation Beacon Gate. Marking round right on target."
            },
            {
                "id": "imh286",
                "subtitle": "Aug 9, 1967",
                "content": "Operation Beacon Gate. Charlie Company CP briefing with (L-R)(kneeling/sitting) Lt. Perry Gesell, Captain Gerry Reczek (Charlie Company CO0, Lt. Jack Francis, Lt. Bill Neuss (XO). Standing, 1st Sgt Campo, Lt. Kevin Brooks (FO)"
            },
            {
                "id": "imh291",
                "subtitle": "Aug 16, 1967",
                "content": "Operation Cochise in Hiep Duc Valley"
            },
            {
                "id": "imh292",
                "subtitle": "Aug 16, 1967",
                "content": "Operation Cochise in Hiep Duc Valley"
            },
            {
                "id": "imh293",
                "subtitle": "Aug 16, 1967",
                "content": "Operation Cochise in Hiep Duc Valley"
            },
            {
                "id": "imh294",
                "subtitle": "Aug 16, 1967",
                "content": "Operation Cochise in Hiep Duc Valley"
            },
            {
                "id": "imh295",
                "subtitle": "Aug 16, 1967",
                "content": "Operation Cochise in Hiep Duc Valley. USMC Phantom dropping napalm on NVA."
            },
            {
                "id": "imh296",
                "subtitle": "Aug 22, 1967",
                "content": "Operation Cochise in Hiep Duc Valley. Crossing Song Thu Bon"
            },
            {
                "id": "imh297",
                "subtitle": "Aug 22, 1967",
                "content": "Operation Cochise in Hiep Duc Valley. Crossing Song Thu Bon"
            },
            {
                "id": "imh298",
                "subtitle": "Aug 23, 1967",
                "content": "Operation Cochise in Hiep Duc Valley"
            },
            {
                "id": "imh290",
                "subtitle": "Aug 27, 1967",
                "content": "Operation Cochise in Hiep Duc Valley. (Lots of facial hair because we had no water for 4 days.)"
            },
            {
                "id": "imh301",
                "subtitle": "Aug 27, 1967",
                "content": "Operation Cochise in Hiep Duc Valley. Unshaved, unwashed, unfed but still smiling after 18 day operation."
            },
            {
                "id": "imh302",
                "subtitle": "Sept 2, 1967",
                "content": "Operation Beacon Point. Church near Street Without Joy."
            },
            {
                "id": "imh303",
                "subtitle": "Sept. 5, 1967",
                "content": "Operation Beacon Point. Moving W across open desert with 1st monsoon of season approaching."
            },
            {
                "id": "imh304",
                "subtitle": "Sept 5, 1967",
                "content": "Operation Beacon Point. Crossing desert but looking E towards ocean, away from approaching monsoon."
            },
            {
                "id": "imh305",
                "subtitle": "Sept 5, 1967",
                "content": "Operation Beacon Point. Charlie Company CP taking a break. Cpl. Steve Fanter, Capt. Gerry Reczek, CO, Cpl. French, 1st Lt. Bill Neuss, XO."
            },
            {
                "id": "imh306",
                "subtitle": "Sept 5, 1967",
                "content": "Operation Beacon Point. Looking back E at village burning after artillery strike."
            },
            {
                "id": "imh307",
                "subtitle": "Sept. 8, 1967",
                "content": "Operation Fremont (providing security for national elections). Cpl. Roseboro (arty radio operator), 2nd Lt Kevin Brooks, arty FO."
            },
            {
                "id": "imh309",
                "subtitle": "Sept. 9, 1967",
                "content": "Charlie Company returning temporarily to USS Duluth (LPD-6) because seas were too rough to climb nets onto USS Okinawa (LPH-3)"
            },
            {
                "id": "imh310",
                "subtitle": "Sept. 9, 1967",
                "content": "USS Duluth (LPD-6) flight deck"
            },
            {
                "id": "imh311",
                "subtitle": "Sept. 14, 1967",
                "content": "Promotions to Sgt. by new company commander, Capt. Burleson and 1st Sgt. Proctor on board USS Okinawa (LPH-3)"
            },
            {
                "id": "imh314",
                "subtitle": "Sept 14, 1967",
                "content": "Charlie Company Staff Meeting with S/Sgt Parker, 2nd Lt Brooks, Captain. Burleson & GySgt Williamson"
            },
            {
                "id": "imh325",
                "subtitle": "Sept 14, 1967",
                "content": "Charlie Company Staff Meeting with 2nd Lt Brooks (FO), 2nd Lt. Gesell (2nd Platoon), Captain Burleson (CO), 1st Sgt Proctor & 1st Lt. Neuss (XO)"
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

                <p>A collection of photographs from Kevin Patrick Brooks (Charlie Company, 1st Battalion / 3rd Marines) taken during his tour of duty in the Vietnam War. Kevin died in Southampton Hospital on April 3, 2020 from complications from the COVID-19 Virus.  He was 75.</p>
                
                <p><em>Photographs &copy; 2019 Kevin Brooks; published with permission as compliments to <a href="/cage">The Cage</a>, an in-progress book project.</em></p>

                <app-entry-meta header={this.data} />

                <app-photo-grid photos={this.data.photos} image-path={this.data.imagesURL} />

            </ion-content>,

        ];
    }
}