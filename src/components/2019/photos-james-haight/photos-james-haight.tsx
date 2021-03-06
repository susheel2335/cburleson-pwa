import { Component, Element, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-photos-james-haight'
})
export class PagePhotosJamesHaight {

    @Element() el: any;

    header: any;

    data: any = {
        "imagesURL": "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/vietnam-james-haight/",
        "photos": [
            {
                "id": "slide-11",
                "subtitle": "Marines on the USS Bayfield",
                "content": "Someone said these are engineers because of the M14s they're carrying. The photo was taken of Marines on the <a href=\"https://en.wikipedia.org/wiki/USS_Bayfield_(APA-33)\" target=\"_blank\">USS Bayfield</a>. I'm not sure on what operation; it  could be Operation Beaver Cage. The landing craft called &quot;Papa Boats&quot; were made in WW2 by the Higgins Company in Louisiana (also known as Higgins Boats). I always thought that 1st Battalion 3rd Marines in Vietnam were the last of the old Corps because of going over the side down the rope ladders. The Bayfield was decommissioned after leaving Vietnam in July 67."
            },
            {
                "id": "slide-12",
                "subtitle": "Action outside the wire",
                "content": "This is Bruce (Smokey) Bale taking in some action in front of us. It could have been a air strike.  We were on this hill (PF outpost) because it was centrally located for the operation. With the FM antennas wired up to the PRC-25 radios we had good coverage of Battalion communications. Our job was to keep communications up.  One day Smokey wasn’t saying much and when I asked him what was wrong, he said that it was his first wedding anniversary.  I had been hoarding this 2 1/2 lb canned Danish ham that a neighbor had sent me. That night I opened it up and we shared it with some C-rats and a couple of warm beers. He thanked me for dinner and said that he knew how special that 'damn' ham was to me because I had been caring it around for a whole month."
            },
            {
                "id": "slide-13",
                "subtitle": "Bruce (Smokey) Bale Sleeping",
                "content": "Bruce sleeping in front of our bunker. We took 4 hours on and 4 hours off at night for radio watch. Bruce passed away on September 16, 1983.  On Bruce's grave stone it says that he was Married May 14, 1966 and that he left behind a wife and 4 children. September 16, is the date I left Vietnam, and the day I got married."
            },
            {
                "id": "slide-14",
                "subtitle": "CH-34s at Phu Bai",
                "content": "This is <abbr title=\"Battalion Landing Team\">BLT</abbr> 1/3 Marines boarding CH-34s at the Phu Bai sir Port, summer 67. This 34 is also on display at the Navel Air Museum in Pensacola, Florida."
            },
            {
                "id": "slide-17",
                "subtitle": "USS Okinawa LPH-3",
                "content": "<a href=\"https://en.wikipedia.org/wiki/USS_Okinawa_(LPH-3)\" target=\"_blank\">USS Okinawa LPH-3</a>, South China Sea; part of Task Force Alpha in support of Battalion Landing Team 1/3 - 9th Marine Amphibious Brigade."
            },
            {
                "id": "slide-27",
                "subtitle": "A Break in Da Nang",
                "content": "A break we took in Da Nang transferring from the Bayfield to the Duluth. These guys are either engineers or members of Delta Company. This photo was taken right before or after the ham and mother’s incident on the 6 by truck."
            },
            {
                "id": "slide-82",
                "subtitle": "Marine gun ship 1",
                "content": "Marine gun ship; one of the few we had in country. Photo taken on USS Duluth in the summer of 1967. As of 1967 the Marine Corps had about 215 helicopters total, as far as I can recall. The Army’s 101st had more."
            },
            {
                "id": "slide-34",
                "subtitle": "Marine gun ship 2",
                "content": "I have a friend who was a crew chief with the &quot;KINGSMAN&quot; special opps helo outfit in Nam. He (Army) called gunships &quot;slicks&quot;, though I don’t recall that name. I showed him this photo and he says the helo was old; probably an 'A' model. Typical for the Marine Corps at the time; most of our equipment was hand-me-downs. Even our MRC 84 radio Jeep was an original Army Jeep. It still had Army brown with star and serial number under the Marine Corps green paint."
            },
            {
                "id": "slide-83",
                "subtitle": "CH-46s on Duluth",
                "content": "CH-46s on Duluth"
            },
            {
                "id": "slide-84",
                "subtitle": "CH-34 on the Duluth",
                "content": "This is a 34 that caught a wheel in the netting on the side of the deck taking off the Duluth. It lost the wheel supports and ripped open the gas tank. I have to find the pics of Marines jumping out (I have them some place). With those you can see the fuel puddle on the flight deck. This 34 made it back to the Oki landing in a cradle — all ok."
            },
            {
                "id": "slide-102",
                "subtitle": "H&amp;S Communication guys at Camp Evens",
                "content": "This photo is of some of the H&S Communication guys at Camp Evens about 30 miles south of Hue. Left to right first row: I forget his name, but I know he spoke Japanese well because his father was with the embassy stationed in Japan when he was a kid. Next Bruce &quot;Smoky&quot; Bale, from Kentucky, me, forget his name but he did time as a Delta Co. Battalion radio operator. Top: is &quot;Pel&quot; Pelletier from  Bennington Vt. — just right of this pic about 50 yards away is the perimeter wire. At about 3 in the morning one night (we were there about 4 days), <abbr title=\"Viet Cong\">VC</abbr> tried to overrun the camp.  VC KIA 27, Marines 0."
            },
            {
                "id": "imag0002",
                "subtitle": "46 Down",
                "content": "This 46 was on a recon extraction out of Camp Evans, Vietnam. I was on the radio listening to the recon radio operator tell the pilot that the only thing he had to worry about was the tree on the right. Next thing I heard was the radio operator saying, &quot;you hit the f$&@g tree!&quot; A squad was sent out for protection so the 46 copter could be cut apart and brought back to Camp Evans. Marine radio operators of H&S company: left is Leon Coats from D.C. and Charlie (Ski) Sliwkoski, a TACP operator now living in Punta Gorta, FL."
            },
            {
                "id": "imag0014",
                "subtitle": "R&amp;R at China Beach",
                "content": "1/3 Marines on a day's R&R, landing at China Beach, Da Nang in the summer of 1967. <a href=\"https://en.wikipedia.org/wiki/USS_Duluth_(LPD-6)\" target=\"_blank\">USS Duluth</a> in the background."
            },
            {
                "id": "imag0031",
                "subtitle": "Offloading Papa Boat",
                "content": "USS Bayfield (APA-33) offloading a papa boat, Vietnam 1967 - Marines of Battalion Landing Team, 1st Bn / 3d Marines looking on."
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

                <p>A collection of photographs by James Haight (Delta Company, 1st Battalion, 3rd Marines) taken during his tour of duty in the Vietnam War.</p>
                
                <p><em>Photographs &copy; 1967-2020 James Haight; published with permission as compliments to <a href="/cage">The Cage</a>, an in-progress book project.</em></p>

                <app-entry-meta header={this.data} />

                <app-photo-grid photos={this.data.photos} image-path={this.data.imagesURL} />

            </ion-content>,

        ];
    }
}