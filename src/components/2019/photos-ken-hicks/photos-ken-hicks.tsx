import { Component, Element, h } from '@stencil/core';
import { extractIdFromDocumentPath } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';

@Component({
    tag: 'page-photos-ken-hicks'
})
export class PagePhotosKenHicks {

    @Element() el: any;

    header: any;

    data: any = {
        "imagesURL": "https://s3.us-east-2.amazonaws.com/codyburleson.com/images/vietnam-ken-hicks/",
        "photos": [
            {
                "id": "scan-137",
                "subtitle": "Khe Sanh",
                "content": "Loading CH-46 at the Ponderosa for a 5 day patrol."
            },
            {
                "id": "scan-145",
                "subtitle": "Khe Sanh",
                "content": "CH-46 landing at Ponderosa to lift out a 5 day patrol."
            },
            {
                "id": "scan-201",
                "subtitle": "Khe Sanh",
                "content": "Rice paddy."
            },
            {
                "id": "scan-204",
                "subtitle": "Khe Sanh",
                "content": "Rice paddy."
            },
            {
                "id": "scan-197",
                "subtitle": "Khe Sanh",
                "content": "Mountains at Khe Sanh."
            },
            {
                "id": "scan-198",
                "subtitle": "Khe Sanh",
                "content": "Otter."
            },
            {
                "id": "scan-168",
                "subtitle": "Khe Sanh",
                "content": "Plantation."
            },
            {
                "id": "scan-163",
                "subtitle": "Khe Sanh",
                "content": "Plantation 60mm mortar position"
            },
            {
                "id": "scan-169",
                "subtitle": "Khe Sanh",
                "content": "Bill Hibbard."
            },
            {
                "id": "scan-170",
                "subtitle": "Khe Sanh",
                "content": ""
            },
            {
                "id": "scan-171",
                "subtitle": "Khe Sanh",
                "content": ""
            },
            {
                "id": "scan-147",
                "subtitle": "Khe Sanh",
                "content": "Ponderosa, Khe Sanh."
            },
            {
                "id": "scan-38",
                "subtitle": "Khe Sanh",
                "content": ""
            },
            {
                "id": "scan-129",
                "subtitle": "Khe Sanh",
                "content": "BCH-34 loading at the Ponderosa, Khe Sanh. The Ponderosa was a combat outpost outside the wire. Delta Company occupied it when the Battalion first arrived there."
            },
            {
                "id": "scan-130",
                "subtitle": "Khe Sanh",
                "content": "CH-34 loading at the Ponderosa."
            },
            {
                "id": "scan-131",
                "subtitle": "Khe Sanh",
                "content": "The Ponderosa, outside the wire."
            },
            {
                "id": "scan-132",
                "subtitle": "Khe Sanh",
                "content": "The Ponderosa, outside the wire."
            },
            {
                "id": "scan-134",
                "subtitle": "Khe Sanh",
                "content": "Bill Hibbard washing clothes near the Ponderosa."
            },
            {
                "id": "scan-135",
                "subtitle": "Khe Sanh",
                "content": "Ken Hicks washing clothes near the Ponderosa."
            },
            {
                "id": "scan-136",
                "subtitle": "Khe Sanh",
                "content": "Rice paddies."
            },
            {
                "id": "scan-139",
                "subtitle": "Khe Sanh",
                "content": ""
            },
            {
                "id": "scan-140",
                "subtitle": "Khe Sanh",
                "content": ""
            },
            {
                "id": "scan-199",
                "subtitle": "Khe Sanh",
                "content": "Bill Hibbard and our puppy 'Gook' (a politically incorrect name for today)."
            },
            {
                "id": "scan-200",
                "subtitle": "Khe Sanh",
                "content": "Myself and Carrol Giles in our gun hole with our puppy, 'Gook'."
            },
            {
                "id": "scan-202",
                "subtitle": "Khe Sanh",
                "content": "Bill Hibbard at the gun hole."
            },
            {
                "id": "scan-205",
                "subtitle": "Khe Sanh",
                "content": "Martini out on the plantation. He was in Weapons Platoon."
            },
            {
                "id": "scan-187",
                "subtitle": "Da Nang",
                "content": "Marble Mountain washing clothes"
            },
            {
                "id": "scan-189",
                "subtitle": "Da Nang",
                "content": "Marble Mountain washing clothes"
            },
            {
                "id": "scan-186",
                "subtitle": "Da Nang",
                "content": "Marble Mountain"
            },
            {
                "id": "scan-188",
                "subtitle": "Da Nang",
                "content": "Marble Mountain"
            },
            {
                "id": "scan-2",
                "subtitle": "Da Nang",
                "content": ""
            },
            {
                "id": "scan-161",
                "subtitle": "Da Nang",
                "content": "Bill Hibbard at Marble Mountain."
            },
            {
                "id": "scan-193",
                "subtitle": "Da Nang",
                "content": "Da Nang Harbor."
            },
            {
                "id": "scan-194",
                "subtitle": "Da Nang",
                "content": "Da Nang Harbor."
            },
            {
                "id": "scan-195",
                "subtitle": "Da Nang",
                "content": "Da Nang Harbor"
            },
            {
                "id": "scan-172",
                "subtitle": "Da Nang",
                "content": "Da Nang harbor from Mike boat."
            },
            {
                "id": "scan-30",
                "subtitle": "Da Nang",
                "content": "Da Nang Harbor."
            },
            {
                "id": "scan-25",
                "subtitle": "Da Nang to Okinawa",
                "content": "U.S.S. Henrico after boarding in Da Nang."
            },
            {
                "id": "scan-35",
                "subtitle": "Da Nang to Okinawa",
                "content": "U.S.S. Henrico enroute to Okinawa."
            },
            {
                "id": "scan-24",
                "subtitle": "Da Nang to Okinawa",
                "content": "Bill Hibbard on the U.S.S. Henrico heading to Okinawa."
            },
            {
                "id": "scan-26",
                "subtitle": "Da Nang to Okinawa",
                "content": "Bill Jackson in the Henrico troop compartment."
            },
            {
                "id": "scan-27",
                "subtitle": "Da Nang to Okinawa",
                "content": "Bill Hibbard in the Henrico troop compartment."
            },
            {
                "id": "scan-178",
                "subtitle": "Okinawa",
                "content": "Barracks at Camp Schwab. We didn't have lights on at night (otherwise, one could aim a mortar)."
            },
            {
                "id": "scan-179",
                "subtitle": "Okinawa",
                "content": "Bill Hibbard - Camp Schwab."
            },
            {
                "id": "scan-185",
                "subtitle": "Okinawa",
                "content": "Camp Schwab"
            },
            {
                "id": "scan-184",
                "subtitle": "Okinawa",
                "content": "Road to Camp Schwab."
            },
            {
                "id": "scan-183",
                "subtitle": "Okinawa",
                "content": "Main gate at Camp Schwab."
            },
            {
                "id": "scan-156",
                "subtitle": "Okinawa",
                "content": "Bill Hibbard outside barracks. Going on liberty"
            },
            {
                "id": "scan-158",
                "subtitle": "Okinawa",
                "content": "Barracks at Camp Schwab - Doc Slade and unidentified"
            },
            {
                "id": "scan-126",
                "subtitle": "Okinawa",
                "content": "Barracks at Camp Schwab."
            },
            {
                "id": "scan-180",
                "subtitle": "Okinawa",
                "content": "Barracks at Camp Schwab."
            },
            {
                "id": "scan-181",
                "subtitle": "Okinawa",
                "content": "Barracks at Camp Schwab."
            },
            {
                "id": "scan-182",
                "subtitle": "Okinawa",
                "content": "Barracks at Camp Schwab."
            },
            {
                "id": "scan-174",
                "subtitle": "Okinawa",
                "content": "Bill Jackson, Bill Hibbard, and unidentified at Camp Schwab."
            },
            {
                "id": "scan-175",
                "subtitle": "Okinawa",
                "content": "Bill Hibbard at Camp Schwab."
            },
            {
                "id": "scan-176",
                "subtitle": "Okinawa",
                "content": "Beach near Camp Schwab."
            },
            {
                "id": "scan-157",
                "subtitle": "Okinawa",
                "content": "Beach near Camp Schwab."
            },
            {
                "id": "scan-177",
                "subtitle": "Okinawa",
                "content": "Camp Schwab."
            },
            {
                "id": "scan-155",
                "subtitle": "Okinawa",
                "content": "E-Club at Camp Schwab."
            },
            {
                "id": "scan-41",
                "subtitle": "Okinawa",
                "content": "Doc Rodney Slade and Bill Hibbard at the barracks at Camp Schwab."
            },
            {
                "id": "scan-29",
                "subtitle": "Okinawa",
                "content": "Charles Dickens, Bill Jackson, Bill Peters, Charles Brugh, Frank Delaney and Sgt. Lee. at Camp Schwab."
            },
            {
                "id": "scan-151",
                "subtitle": "Okinawa",
                "content": "Australian Marines at Camp Schwab."
            },
            {
                "id": "scan-34",
                "subtitle": "Okinawa",
                "content": "Australian Marines at Camp Schwab."
            },
            {
                "id": "scan-128",
                "subtitle": "Okinawa",
                "content": "Australian Marines."
            },
            {
                "id": "scan-152",
                "subtitle": "Okinawa",
                "content": "Australian Marines at Camp Schwab."
            },
            {
                "id": "scan-191",
                "subtitle": "Okinawa",
                "content": "Barracks at Camp Schwab."
            },
            {
                "id": "scan-1",
                "subtitle": "Okinawa",
                "content": "Bill Hibbard in barracks at Camp Schwab."
            },
            {
                "id": "scan-3",
                "subtitle": "Okinawa",
                "content": "Bill Hibbard cleaning windows at the barracks at Camp Schwab, Feb/March '67."
            },
            {
                "id": "scan-5",
                "subtitle": "Okinawa",
                "content": "Bill Hibbard with new M-16 rifle in the barracks at Camp Schwab, March '67."
            },
            {
                "id": "scan-6",
                "subtitle": "Okinawa",
                "content": "Bill Hibbard outside barracks at Camp Schwab, March '67."
            },
            {
                "id": "scan-9",
                "subtitle": "Okinawa",
                "content": "Bill Hibbard outside barracks at Camp Schwab, March '67."
            },
            {
                "id": "scan-11",
                "subtitle": "Okinawa",
                "content": "Bill Hibbard - Camp Schwab, March '67."
            },
            {
                "id": "scan-10",
                "subtitle": "Okinawa",
                "content": "Field Day at the barracks at Camp Schwab -  Carol Giles, Bill Peters (died of lung cancer in 2014), and Bill Hibbard."
            },
            {
                "id": "scan-146",
                "subtitle": "Okinawa",
                "content": "Okinawa. L-R Bill Peters, Bill Hibbard. Kneeling - unknown, Carrol Giles"
            },
            {
                "id": "scan-153",
                "subtitle": "Okinawa",
                "content": "Beach in Okinawa."
            },
            {
                "id": "scan-192",
                "subtitle": "Okinawa",
                "content": "Mike boat Okinawa"
            },
            {
                "id": "scan-32",
                "subtitle": "Okinawa",
                "content": "Okinawa."
            },
            {
                "id": "scan-12",
                "subtitle": "Okinawa",
                "content": "Bill Hibbard, Carol Giles, and Harry Bernfield getting ready to go on Liberty."
            },
            {
                "id": "scan-7",
                "subtitle": "Okinawa",
                "content": "Liberty - BC Street, Okinawa, Feb/March '67"
            },
            {
                "id": "scan-14",
                "subtitle": "Okinawa",
                "content": "Bill Hibbard with bar girl - BC Street, Okinawa."
            },
            {
                "id": "scan-15",
                "subtitle": "Okinawa",
                "content": "Bar girl - BC Street, Okinawa."
            },
            {
                "id": "scan-16",
                "subtitle": "Okinawa",
                "content": "Bill Hibbard with bar girls on BC Street."
            },
            {
                "id": "scan-17",
                "subtitle": "Okinawa",
                "content": "Bill Hibbard with bar girls on BC Street."
            },
            {
                "id": "scan-18",
                "subtitle": "Okinawa",
                "content": "Bill Hibbard with bar girls on BC Street."
            },
            {
                "id": "scan-19",
                "subtitle": "Okinawa",
                "content": "Bill Hibbard with bar girls on BC Street."
            },
            {
                "id": "scan-20",
                "subtitle": "Okinawa",
                "content": "Bill Hibbard with bar girls on BC Street."
            },
            {
                "id": "scan-21",
                "subtitle": "Okinawa",
                "content": "Bill Hibbard with bar girls on BC Street."
            },
            {
                "id": "scan-22",
                "subtitle": "Okinawa",
                "content": "Bill Hibbard with bar girls on BC Street.)"
            },
            {
                "id": "scan-23",
                "subtitle": "Okinawa",
                "content": "Bill Hibbard with bar girls on BC Street."
            },
            {
                "id": "scan-36",
                "subtitle": "Okinawa",
                "content": "Bar girl on BC Street."
            },
            {
                "id": "scan-160",
                "subtitle": "Okinawa",
                "content": "Bill Hibbard and Bill Jackson on 6x6 heading to NTA, Okinawa"
            },
            {
                "id": "scan-144",
                "subtitle": "Okinawa",
                "content": "6x6 ride to NTA from Camp Hansen"
            },
            {
                "id": "scan-143",
                "subtitle": "Okinawa",
                "content": "6x6 ride to NTA from Camp Hansen"
            },
            {
                "id": "scan-4",
                "subtitle": "Okinawa",
                "content": "Heating C-rats at NTA - Okinawa."
            },
            {
                "id": "scan-8",
                "subtitle": "Okinawa",
                "content": "Bill Hibbard, Bill Jackson (he killed himself in 2018), myself and Carol Giles - NTA, Okinawa."
            },
            {
                "id": "scan-13",
                "subtitle": "Okinawa",
                "content": "Bill Hibbard sleeping - NTA, March '67."
            },
            {
                "id": "scan-133",
                "subtitle": "Okinawa",
                "content": "Long, wet night in the mud during NTA. Bill Hibbard, Bill Jackson, Carroll Giles, myself behind Giles with helmet on."
            },
            {
                "id": "scan-142",
                "subtitle": "Okinawa",
                "content": "NTA Okinawa. Mock punji pit."
            },
            {
                "id": "scan-159",
                "subtitle": "Okinawa",
                "content": "Bill Hibbard and Doc Slade"
            },
            {
                "id": "scan-108",
                "subtitle": "Taiwan",
                "content": "Harbor at Kaohsiung, Taiwan - Apr '67."
            },
            {
                "id": "scan-109",
                "subtitle": "Taiwan",
                "content": "Harbor at Kaohsiung."
            },
            {
                "id": "scan-110",
                "subtitle": "Taiwan",
                "content": "Harbor at Kaohsiung."
            },
            {
                "id": "scan-53",
                "subtitle": "Taiwan",
                "content": "Bill Hibbard and Carol Giles. In harbor; could be Kaoshung."
            },
            {
                "id": "scan-97",
                "subtitle": "Taiwan",
                "content": "Kaohsiung."
            },
            {
                "id": "scan-98",
                "subtitle": "Taiwan",
                "content": "Kaohsiung."
            },
            {
                "id": "scan-104",
                "subtitle": "Taiwan",
                "content": "Wally Baker and Bill Hibbard."
            },
            {
                "id": "scan-105",
                "subtitle": "Taiwan",
                "content": "Wally Baker and Bill Hibbard."
            },
            {
                "id": "scan-99",
                "subtitle": "Taiwan",
                "content": "Wally and Bill Hibbard on rickshaw."
            },
            {
                "id": "scan-100",
                "subtitle": "Taiwan",
                "content": "Kaohsiung."
            },
            {
                "id": "scan-101",
                "subtitle": "Taiwan",
                "content": "Kaohsiung."
            },
            {
                "id": "scan-102",
                "subtitle": "Taiwan",
                "content": "Kaohsiung."
            },
            {
                "id": "scan-106",
                "subtitle": "Taiwan",
                "content": ""
            },
            {
                "id": "scan-107",
                "subtitle": "Taiwan",
                "content": ""
            },
            {
                "id": "scan-111",
                "subtitle": "Taiwan",
                "content": "Kaohsiung."
            },
            {
                "id": "scan-112",
                "subtitle": "Taiwan",
                "content": "Kaohsiung."
            },
            {
                "id": "scan-117",
                "subtitle": "Taiwan",
                "content": "Kaohsiung."
            },
            {
                "id": "scan-118",
                "subtitle": "Taiwan",
                "content": "Kaohsiung."
            },
            {
                "id": "scan-119",
                "subtitle": "Taiwan",
                "content": "Kaohsiung."
            },
            {
                "id": "scan-124",
                "subtitle": "Taiwan",
                "content": "Kaohsiung."
            },
            {
                "id": "scan-43",
                "subtitle": "Philippines",
                "content": "Subic Bay."
            },
            {
                "id": "scan-166",
                "subtitle": "Boarding Bayfield",
                "content": "Mike boat to U.S.S. Bayfield"
            },
            {
                "id": "scan-167",
                "subtitle": "Boarding Bayfield",
                "content": "Mike boat to U.S.S. Bayfield"
            },
            {
                "id": "scan-173",
                "subtitle": "Boarding Bayfield",
                "content": "U.S.S. Bayfield"
            },
            {
                "id": "scan-114",
                "subtitle": "Operation Union I",
                "content": "In sticks to load CH-34s to move inland for Union I."
            },
            {
                "id": "scan-77",
                "subtitle": "Operation Union I",
                "content": "CH-34 - Moving inland to start Operation Union I."
            },
            {
                "id": "scan-79",
                "subtitle": "Operation Union I",
                "content": "CH-34 picking up Marines to move inland for Operation Union I."
            },
            {
                "id": "scan-123",
                "subtitle": "Operation Beaver Cage",
                "content": "Loading the dead who were killed on May 4 onto CH-34 - May 5, '67."
            },
            {
                "id": "scan-115",
                "subtitle": "Operation Beaver Cage",
                "content": "Moving through fields near coast with Ontos on Operation Beaver Cage."
            },
            {
                "id": "scan-116",
                "subtitle": "Operation Beaver Cage",
                "content": "Field on Operation Beaver Cage."
            },
            {
                "id": "scan-95",
                "subtitle": "Operation Beaver Cage",
                "content": "Beach - Beaver Cage."
            },
            {
                "id": "scan-67",
                "subtitle": "Operation Beaver Cage",
                "content": "Vietnamese grave on Operation Beaver Cage."
            },
            {
                "id": "scan-45",
                "subtitle": "Operation Beaver Cage",
                "content": "Loading CH-34 to move inland on Operation Beaver Cage."
            },
            {
                "id": "scan-56",
                "subtitle": "Operation Beaver Cage",
                "content": "Along the coast - Operation Beaver Cage."
            },
            {
                "id": "scan-57",
                "subtitle": "Operation Beaver Cage",
                "content": "M-48 tank along the coast - Operation Beaver Cage."
            },
            {
                "id": "scan-58",
                "subtitle": "Operation Beaver Cage",
                "content": "105 mm howitzer at the Battalion CP."
            },
            {
                "id": "scan-60",
                "subtitle": "Operation Beaver Cage",
                "content": "Operation Beaver Cage."
            },
            {
                "id": "scan-63",
                "subtitle": "Operation Beaver Cage",
                "content": "CH-53 helo resupply (probably Beaver Cage; it's hard to tell)."
            },
            {
                "id": "scan-65",
                "subtitle": "Operation Beaver Cage",
                "content": "Village after moving inland on Operation Beaver Cage."
            },
            {
                "id": "scan-71",
                "subtitle": "Operation Beaver Cage",
                "content": "Bill Jackson, Charles Dickens, Bill Peters, Mike Brugh, Carol Giles - Operation Beaver Cage."
            },
            {
                "id": "scan-80",
                "subtitle": "Operation Beaver Cage",
                "content": ".50 Cal MG. This would have to be the Battalion CP as .50 Cal MGs are a battalion weapon."
            },
            {
                "id": "scan-61",
                "subtitle": "Near the DMZ",
                "content": "Insland near the DMZ."
            },
            {
                "id": "scan-62",
                "subtitle": "Near the DMZ",
                "content": "M-48 tank inland near the DMZ."
            },
            {
                "id": "scan-88",
                "subtitle": "Near the DMZ",
                "content": "Tree/shrub line dileniating farm fields."
            },
            {
                "id": "scan-121",
                "subtitle": "Near the DMZ",
                "content": "This looks like up near the DMZ in May or June '67."
            },
            {
                "id": "scan-122",
                "subtitle": "Near the DMZ",
                "content": "This looks like up near the DMZ in May or June '67."
            },
            {
                "id": "scan-72",
                "subtitle": "Near the DMZ",
                "content": "Just south of the DMZ May '67. Bill Hibbard."
            },
            {
                "id": "scan-73",
                "subtitle": "Near the DMZ",
                "content": "South of the DMZ - Bill Jackson and Bill Hibbard."
            },
            {
                "id": "scan-74",
                "subtitle": "Near the DMZ",
                "content": "South of the DMZ - Bill Jackson and Bill Hibbard."
            },
            {
                "id": "scan-75",
                "subtitle": "Near the DMZ",
                "content": "South of the DMZ - Bill Jackson and Bill Hibbard."
            },
            {
                "id": "scan-69",
                "subtitle": "Phu Bai Airfield - MAG 36",
                "content": "Digging in just outside of MAG (Marine Air Group) 36, Phu Bai airfield south of Hue City off Highway 1. We had humped from the coast to Phu Bai."
            },
            {
                "id": "scan-70",
                "subtitle": "Phu Bai Airfield - MAG 36",
                "content": "Digging in outside of MAG 36."
            },
            {
                "id": "scan-76",
                "subtitle": "",
                "content": "Bill Hibbard and Carol Giles; probably on the Deluth. Probably end of May, early June."
            },
            {
                "id": "scan-39",
                "subtitle": "U.S.S. Okinawa",
                "content": "Flight deck with CH-34s on the U.S.S. Okinawa."
            },
            {
                "id": "scan-40",
                "subtitle": "U.S.S. Okinawa",
                "content": "Bill Hibbard standing next to CH-34 on the U.S.S. Okinawa."
            },
            {
                "id": "scan-47",
                "subtitle": "U.S.S. Okinawa",
                "content": "Bill Hibbard. Probably on the Okinawa, but maybe the Deluth."
            },
            {
                "id": "scan-48",
                "subtitle": "U.S.S. Okinawa",
                "content": "Mechanics working on CH-34 onboard the U.S.S. Okinawa."
            },
            {
                "id": "scan-49",
                "subtitle": "U.S.S. Okinawa",
                "content": "View from the flight deck of the U.S.S. Okinawa. Antenna."
            },
            {
                "id": "scan-50",
                "subtitle": "U.S.S. Okinawa",
                "content": "Unknown (unidentified)."
            },
            {
                "id": "scan-54",
                "subtitle": "U.S.S. Okinawa",
                "content": "CH-34 on the flight deck of the U.S.S. Okinawa. Person unknown (unidentified)."
            },
            {
                "id": "scan-52",
                "subtitle": "U.S.S. Okinawa",
                "content": "CH-34 on the flight deck of the U.S.S. Okinawa."
            },
            {
                "id": "scan-55",
                "subtitle": "U.S.S. Okinawa",
                "content": "CH-34 on the flight deck of the U.S.S. Okinawa."
            },
            {
                "id": "scan-28",
                "subtitle": "",
                "content": "Unknown."
            },
            {
                "id": "scan-33",
                "subtitle": "",
                "content": "U.S.S. Okinawa from the U.S.S. Bayfield."
            },
            {
                "id": "scan-37",
                "subtitle": "U.S.S. Point Defiance.",
                "content": ""
            },
            {
                "id": "scan-46",
                "subtitle": "U.S.S. Point Defiance.",
                "content": ""
            },
            {
                "id": "scan-42",
                "subtitle": "",
                "content": "At sea."
            },
            {
                "id": "scan-44",
                "subtitle": "",
                "content": "CH-34."
            },
            {
                "id": "scan-64",
                "subtitle": "",
                "content": "Punji pit. Probably between Phu Bai and Hue City along the coast. The French called that area 'The Streets Without Joy'."
            },
            {
                "id": "scan-66",
                "subtitle": "",
                "content": "Moving down a trail."
            },
            {
                "id": "scan-68",
                "subtitle": "",
                "content": "Camp Evans, 4th Marines rear off of Highway 1, north of Hue City and South of Quang Tri. This is well after Operation Beaver Cage; probably in June."
            },
            {
                "id": "scan-82",
                "subtitle": "",
                "content": "105 mm howitser."
            },
            {
                "id": "scan-83",
                "subtitle": "",
                "content": "Amtracs south of the DMZ - May '67."
            },
            {
                "id": "scan-84",
                "subtitle": "",
                "content": "M-60 MG. Not sure where this is. The position is built up with lumber, with overhead, so it’s not a hasty fighting hole."
            },
            {
                "id": "scan-86",
                "subtitle": "",
                "content": "CH-34 in background."
            },
            {
                "id": "scan-90",
                "subtitle": "",
                "content": "(M-48 tanks in the distance)."
            },
            {
                "id": "scan-91",
                "subtitle": "",
                "content": "(M-48 tanks in the distance)."
            },
            {
                "id": "scan-92",
                "subtitle": "Near the DMZ",
                "content": "Tree/shrub line dileniating farm fields."
            },
            {
                "id": "scan-93",
                "subtitle": "",
                "content": "Someone’s pack."
            },
            {
                "id": "scan-94",
                "subtitle": "",
                "content": "Climbing cargo nets down the side of the Bayfield."
            },
            {
                "id": "scan-96",
                "subtitle": "",
                "content": "Climbing cargo nets down the side of the Bayfield."
            },
            {
                "id": "scan-125",
                "subtitle": "",
                "content": "Camp Evans. Home of 4th Marines. North of Hue City off of Highway 1."
            },
            {
                "id": "scan-138",
                "subtitle": "",
                "content": "CH-46."
            },
            {
                "id": "scan-141",
                "subtitle": "",
                "content": ""
            },
            {
                "id": "scan-148",
                "subtitle": "",
                "content": "Patrol moving to load CH-46."
            },
            {
                "id": "scan-149",
                "subtitle": "",
                "content": "Carrol Giles in front of patrol getting ready to move out on CH-46."
            },
            {
                "id": "scan-150",
                "subtitle": "",
                "content": "Bill Hibbard and some locals."
            },
            {
                "id": "scan-154",
                "subtitle": "",
                "content": "Bill Peters, Bill Hibbard, Carrol Giles, and unidentified."
            },
            {
                "id": "scan-150",
                "subtitle": "",
                "content": "Bill Hibbard and some locals."
            },
            {
                "id": "scan-162",
                "subtitle": "",
                "content": "Island on the U.S.S. Okinawa"
            },
            {
                "id": "scan-164",
                "subtitle": "",
                "content": "Unknown"
            },
            {
                "id": "scan-165",
                "subtitle": "",
                "content": "Unknown"
            },
            {
                "id": "scan-206",
                "subtitle": "",
                "content": "Hibbard with the locals."
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

                <p>A collection of photographs by Ken Hicks (Delta Company, 1st Battalion, 3rd Marines) taken during his tour of duty in the Vietnam War.</p>
                
                <p><em>Photographs &copy; 1967-2019 Ken Hicks; published with permission as compliments to <a href="/cage">The Cage</a>, an in-progress book project.</em></p>

                <app-entry-meta header={this.data} />

                <app-photo-grid photos={this.data.photos} image-path={this.data.imagesURL} />

            </ion-content>,

        ];
    }
}