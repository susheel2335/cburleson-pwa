import { Component, Element, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-photos-stanley-hall'
})
export class PagePhotosStanleyHall {

    @Element() el: any;

    header: any;

    data: any = {
        "imagesURL": "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/vietnam-stanley-hall/",
        "photos": [
            {
                "id": "92411-R1-07-7",
                "subtitle": "Stanley &quot;Doc&quot; Hall",
                "content": "Corpsman for Delta Company, 1st Battalion, 3rd Marines"
            },
            {
                "id": "92411-R1-00-0",
                "subtitle": "Door Gunner's M60",
                "content": "Inbound from a helicopter ship on a mission over the South China Sea."
            },
            {
                "id": "92411-R1-01-1",
                "subtitle": "UH-34 Approach",
                "content": "UH-34 making approach to a ridge to unload supplies."
            },
            {
                "id": "92411-R1-23-23",
                "subtitle": "Mike Boats 1",
                "content": "Marines aboard LCM-8 &quot;Mike Boats&quot;."
            },
            {
                "id": "92411-R1-02-2",
                "subtitle": "Mike Boats 2",
                "content": "Marines aboard LCM-8 &quot;Mike Boats&quot;."
            },
            {
                "id": "92411-R1-03-3",
                "subtitle": "LST-649",
                "content": "&quot;Landing Ship, Tank (LST), or tank landing ship, supported amphibious operations by carrying tanks, vehicles, cargo, and landing troops directly onto shore. The bow had a large door that would open with a ramp for unloading the vehicles. The LST had a special flat keel that allowed the ship to be beached and stay upright. The twin propellers and rudders had protection from grounding.&quot; - Wikipedia, Sep. 2018"
            },
            {
                "id": "92411-R1-04-4",
                "subtitle": "UH-34 Supply Run",
                "content": "UH-34 bringing in supplies with a sling-load. The sling-load allows the Uh-34 to drop supplies without having to land."
            },
            {
                "id": "92411-R1-05-5",
                "subtitle": "Waiting for a Lift",
                "content": "Marines waiting for transport on the UH-34s. This may have been during Operation Beaver Cage; but I can't be sure."
            },
            {
                "id": "92411-R1-06-6",
                "subtitle": "Hovering in I-Corps",
                "content": "A Marine UH-34 somewhere in I-Corps, where South Vietnam meets North Vietnam at the DMZ."
            },
            {
                "id": "92411-R1-08-8",
                "subtitle": "South China Sea",
                "content": "Probably an inlet of the South China Sea. They had some beautiful white-sand beaches in Vietnam."
            },
            {
                "id": "92411-R1-09-9",
                "subtitle": "USS Duluth (LPD-6)",
                "content": "The ship in the background is an LPD (Landing Platform Dock), the <a href=\"https://en.wikipedia.org/wiki/USS_Duluth_(LPD-6)\" target=\"_blank\">USS Duluth (LPD-6)</a>. I think they now call those &quot;LPH&quot;), but back then it was called an LPD. They lower the gate, flood the well deck and either the Mike Boats or Amtraks can be released. Above there is space for chopper landing."
            },
            {
                "id": "92411-R1-10-10",
                "subtitle": "Sunset in the Nam",
                "content": "Sunset over Vietnam behind trees that have been stripped bare. Agent Orange?"
            },
            {
                "id": "92411-R1-11-11",
                "subtitle": "River",
                "content": "A river near Dong Ha."
            },
            {
                "id": "92411-R1-13-13",
                "subtitle": "Shootin' the Breeze",
                "content": "Men around the boat talking."
            },
            {
                "id": "92411-R1-14-14",
                "subtitle": "Sandy Terrain",
                "content": "Sandy terrain with mountains in the background. It was flat like that all the way back to those mountains. Pretty typical of South Vietnam until you got down further south to all the swampy waterways and such."
            },
            {
                "id": "92411-R1-15-15",
                "subtitle": "Platoon Command Group",
                "content": "Standing: Lieutenant Berkheiser (I think). Laying on the rubber mat: Staff Sergeant Amos. Other two: unknown. This is probably the Platoon command group. Precise location unknown."
            },
            {
                "id": "92411-R1-17-17",
                "subtitle": "South China Sea",
                "content": "South China Sea with mountains in the distance."
            },
            {
                "id": "92411-R1-21-21",
                "subtitle": "Offshore",
                "content": "In between operations, up and down the coast of I-Corps in the South China Sea."
            },
            {
                "id": "92411-R1-22-22",
                "subtitle": "LPD?",
                "content": "Probably the LPD."
            },
            {
                "id": "92411-R1-24-24",
                "subtitle": "Cleaning .45",
                "content": "James (Jim) Haight cleans his .45 caliber pistol on ship. At Camp Schwab in Okinawa, when they turned in their M14s for the M16s, Jim didn’t want &quot;that piece of junk,&quot; so he opted out for the 45. Being a Battalion radio operator, his main job was to keep comms. up and his head down. When humping in country, he carried extra M16 ammo along with his radio and extra batteries."
            },
            {
                "id": "92411-R1-25-25",
                "subtitle": "Amtraks on the Move",
                "content": "Amtraks moving inland (more than likely). Ocean may be behind the scrub-line (no tracks in the foreground)."
            },
            {
                "id": "92411-R1-26-26",
                "subtitle": "Bomb Crater? 1",
                "content": "Probably a bomb crater."
            },
            {
                "id": "92411-R1-27-27",
                "subtitle": "Bomb Crater? 2",
                "content": "Another shot of what could be a bomb crater."
            },
            {
                "id": "92411-R1-28-28",
                "subtitle": "Sergeant Shaving",
                "content": "I think Sergeant Turner, the supply Sergeant for the platoon."
            },
            {
                "id": "92411-R1-29-29",
                "subtitle": "Maybe LPD",
                "content": "Maybe LPD (Landing Platform/Dock)."
            },
            {
                "id": "92411-R1-30-30",
                "subtitle": "The Helmet that Saved Me",
                "content": "At right: Me - Corpsman, Stanley Hall. Other: unknown. Notice the dent on the helmet? Yeah - that's from a bullet."
            },
            {
                "id": "92411-R1-31-31",
                "subtitle": "Chopper Down",
                "content": "We were on a company-sized patrol North of Da Nang near the ocean. Engineers had cleared a landing spot. The helo was coming in to a ridge and, while the chopper was about ten feet from ground, the rear tail hit a stump and flipped him nose down on the side. She went 40 or 50 yards. Flying debris. Nobody was hurt."
            },
            {
                "id": "92411-R1-32-32",
                "subtitle": "Ship at Sea",
                "content": "In the waters surrounding the Republic of Vietnam."
            },
            {
                "id": "92411-R1-33-33",
                "subtitle": "In the Bush",
                "content": "A hillside in the jungles of Vietnam (same time frame as that chopper crash)."
            },
            {
                "id": "92411-R1-34-34",
                "subtitle": "South China Sea",
                "content": "Another shot of the South China Sea. Barring the circumstances, it was beautiful country."
            },
            {
                "id": "92411-R1-35-35",
                "subtitle": "Just Another Hill",
                "content": "A small hillside in the country. Hills were named by number according to their height."
            },
            {
                "id": "92411-R1-36-36",
                "subtitle": "On Patrol at Dusk",
                "content": "On patrol - putting down for the evening."
            },
            {
                "id": "92411-R1-37-37",
                "subtitle": "Stan and the Sea",
                "content": "Corpsman, Stanley Hall on a hill near the South China Sea."
            },
            {
                "id": "92411-R1-39-39",
                "subtitle": "River",
                "content": "Probably just a Mike boat on the river."
            },
            {
                "id": "92411-R1-41-41",
                "subtitle": "South China Sea",
                "content": "Another shot of the South China Sea"
            },
            {
                "id": "92411-R1-43-43",
                "subtitle": "Church Steeple",
                "content": "Church steeple in sandy, beach area. Precise location unknown."
            },
            {
                "id": "92411-R1-44-44",
                "subtitle": "Break",
                "content": "At left, sitting: Berkheiser. Center: Staff Sgt. Amos. Other two: unknown."
            },
            {
                "id": "92411-R1-45-45",
                "subtitle": "Marine Sitting",
                "content": "Marine (unidentified) rests with what looks like ocean or inlet in background."
            },
            {
                "id": "92411-R1-46-46",
                "subtitle": "Supply Ship 1",
                "content": "Probably a supply ship"
            },
            {
                "id": "92411-R1-47-47",
                "subtitle": "Supply Ship 2",
                "content": "Probably a supply ship"
            },
            {
                "id": "92411-R1-48-48",
                "subtitle": "Huddle",
                "content": "Marines huddle around a task; maybe map reading. At right: Corporal Hebsch (fire team leader); not 100% sure. Others: unidentified."
            },
            {
                "id": "92411-R1-49-49",
                "subtitle": "C Rat Resupply",
                "content": "Resupply of C rations. At left: Lt. Berkheiser (pretty sure); others: unidentified. I was told we had C rats that were left over from the Korean War. I liked the pound cake and fruit cocktail. Hot sauce would cure a lot of ills."
            },
            {
                "id": "92411-R1-50-50",
                "subtitle": "Brothers",
                "content": "51 years later, I have trouble remembering some of the names. Is that Stanley Wilson? I can't be sure. Others: unidentified."
            },
            {
                "id": "92411-R1-51-51",
                "subtitle": "Terrain 1",
                "content": ""
            },
            {
                "id": "92411-R1-52-52",
                "subtitle": "Terrain 2",
                "content": ""
            },
            {
                "id": "92411-R1-53-53",
                "subtitle": "Terrain 3",
                "content": ""
            },
            {
                "id": "92411-R1-54-54",
                "subtitle": "Marines in the Bush",
                "content": "Individuals unidentified."
            },
            {
                "id": "92411-R1-55-55",
                "subtitle": "Valley",
                "content": "Overlooking a valley."
            },
            {
                "id": "92411-R1-56-56",
                "subtitle": "Chopper Down 2",
                "content": "Another shot of the downed chopper."
            },
            {
                "id": "92411-R1-58-58",
                "subtitle": "Ocean and Inlet",
                "content": "Arial view of an inlet with the South China Sea in the background."
            },
            {
                "id": "92411-R1-59-59",
                "subtitle": "Huey",
                "content": "Huey with rocket pods. Not sure if it's a Marine chopper or Army; I suspect it's Marine."
            },
            {
                "id": "92411-R1-60-60",
                "subtitle": "Hooch",
                "content": "Sitting at left: Staff Sgt Amos, standing next: Lt Berkheiser, other 3: unidentified."
            },
            {
                "id": "92411-R1-61-61",
                "subtitle": "CH-47 Transporting Jeep",
                "content": "CH-47 twin rotor / Sea Knight transporting a Jeep. This is a Navy / Marine version. The Army had a similar version. The CH-47 had 3 wheels, the Chinook had 4."
            },
            {
                "id": "92411-R1-62-62",
                "subtitle": "Amtrak",
                "content": "Amtrak in the sand"
            },
            {
                "id": "92411-R1-63-63",
                "subtitle": "Getting Some Shade",
                "content": "At right facing camera: Staff Sgt Amos, others: unidentified. Amos came to the company in Okinawa;he'd been a drill Sgt in San Diego at the recruit training depot. He was a hard-ass, but he was a good man and fair to people. He didn't put up with a lot of nonsense."
            },
            {
                "id": "92411-R1-64-64",
                "subtitle": "The Sea",
                "content": "The South China Sea, more than likely."
            },
            {
                "id": "92411-R1-65-65",
                "subtitle": "Amphibious Landing",
                "content": "Mike Boats and Amtrak on the beach."
            },
            {
                "id": "92411-R1-66-66",
                "subtitle": "Foilage",
                "content": ""
            },
            {
                "id": "92411-R1-67-67",
                "subtitle": "A Rare Casual Day",
                "content": "Secure in some town, it seems (no helmets and gear). We didn't have many times like this."
            },
            {
                "id": "92411-R1-12-12",
                "subtitle": "Underway Replenishment (UnRep) 1",
                "content": "An &quot;Underway Replenishment&quot; (UnRep), also known as &quot;Replenishment at sea&quot; (RAS) - moving fuel and other supplies from one transport to another. It can be a risky operation."
            },
            {
                "id": "92411-R1-18-18",
                "subtitle": "UnRep 2",
                "content": ""
            },
            {
                "id": "92411-R1-20-20",
                "subtitle": "UnRep 3",
                "content": ""
            },
            {
                "id": "92411-R1-38-38",
                "subtitle": "UnRep 4",
                "content": ""
            },
            {
                "id": "92411-R1-40-40",
                "subtitle": "UnRep 5",
                "content": "One part of the UnRep involves putting tag-lines between ships and, with manpower, dragging them across through open doors on the side of the ship."
            },
            {
                "id": "92411-R1-42-42",
                "subtitle": "UnRep 6",
                "content": ""
            },
            {
                "id": "92411-R1-57-57",
                "subtitle": "UnRep 7",
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

                <p>A collection of photographs from Stanley &quot;Doc&quot; Hall (a Corpsman in Delta Company, 1st Battalion, 3rd Marines) taken during his tour of duty in the Vietnam War (around April 1967).</p>
                
                <p><em>Photographs &copy; 1967-2019 Stanley Hall; published with permission as compliments to <a href="/cage">The Cage</a>, an in-progress book project.</em></p>

                <app-entry-meta header={this.data} />

                <app-photo-grid photos={this.data.photos} image-path={this.data.imagesURL} />

            </ion-content>,

        ];
    }
}