// Full Planviry "Plan" taxonomy. Occasion categories → occasion types →
// mapped vendor/business subcategories that orchestration pages query.

export type OccasionType = {
  name: string;
  slug: string;
};

export type OccasionCategory = {
  name: string;
  slug: string;
  blurb: string;
  occasions: OccasionType[];
  mapping: string[];
};

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const toOccasions = (arr: string[]): OccasionType[] =>
  arr.map((n) => ({ name: n, slug: slug(n) }));

export const occasionCategories: OccasionCategory[] = [
  {
    name: "Celebrations",
    slug: "celebrations",
    blurb: "Birthdays, showers, reunions, anniversaries — the everyday milestones.",
    occasions: toOccasions([
      "Birthday Party",
      "Sweet 16",
      "Anniversary",
      "Graduation Party",
      "Reunion",
      "Retirement Party",
      "Holiday Party",
      "Engagement Party",
      "Bridal Shower",
      "Baby Shower",
      "Bachelor Party",
      "Bachelorette Party",
      "Gender Reveal",
      "Welcome Party",
      "Going Away Party",
      "Family Gathering",
      "Celebration Dinner",
    ]),
    mapping: [
      "Venue & Event Space", "Restaurant", "Hotel", "Resort", "Lounge", "Bar",
      "Brewery", "Winery", "Wine Tasting Room", "Distillery", "DJ Service",
      "Musician", "Musical Band / Orchestra / Symphony", "Bartender", "Caterer",
      "Bakery", "Photographer", "Event Photography", "Session Photography",
      "Videographer", "Photo Booth Rental", "Balloon Services", "Florist",
      "Party & Event Planning", "Party Equipment Rental", "Party Bus Rental",
      "Limo Services", "Caricature", "Magician", "Clown", "Face Painting",
    ],
  },
  {
    name: "Weddings",
    slug: "weddings",
    blurb: "Ceremony, reception, and every ritual around the big day.",
    occasions: toOccasions([
      "Wedding Reception", "Wedding Ceremony", "Elopement Ceremony",
      "Rehearsal Dinner", "Bridal Luncheon", "Vow Renewal", "Wedding After Party",
    ]),
    mapping: [
      "Wedding Chapel", "Venue & Event Space", "Hotel", "Resort", "Restaurant",
      "Caterer", "Photographer", "Boudoir Photography", "Session Photography",
      "Videographer", "Florist", "Bridal Shop", "Formal Wear Store", "DJ Service",
      "Musician", "Musical Band / Orchestra / Symphony", "Bartender",
      "Limo Services", "Party & Event Planning",
    ],
  },
  {
    name: "Business & Corporate",
    slug: "business-corporate",
    blurb: "Meetings, offsites, launches, and everything in between.",
    occasions: toOccasions([
      "Meeting", "Work Session", "Workshop", "Seminar", "Forum", "Conference",
      "Networking Event", "Networking Mixer", "Team Building", "Corporate Retreat",
      "Company Party", "Holiday Party", "Product Launch", "Trade Show", "Expo",
      "Job Fair", "Recruiting Event", "Client Presentation", "Training Session",
      "Board Meeting",
    ]),
    mapping: [
      "Coworking Space", "Venue & Event Space", "Exhibition & Trade Center",
      "Auditorium", "Hotel", "Hotel Conference Facilities", "Event Technology Service",
      "Audio Visual Production & Design", "Audiovisual Equipment Rental",
      "Photographer", "Videographer", "Caterer", "Party & Event Planning",
      "Team Building Activity",
    ],
  },
  {
    name: "Creative Productions",
    slug: "creative-productions",
    blurb: "Photo shoots, video, film, and content — with the right space and crew.",
    occasions: toOccasions([
      "Photo Shoot", "Outdoor Photo Shoot", "Studio Shoot", "Head Shot",
      "Family Portrait", "Engagement Shoot", "Product Shoot", "Clothing Shoot",
      "Fashion Shoot", "Dance Shoot", "Music Video", "Film Shoot",
      "Documentary Shoot", "Commercial Shoot", "Video Shoot", "Influencer Shoot",
      "Content Creation",
    ]),
    mapping: [
      "Photographer", "Event Photography", "Session Photography",
      "Boudoir Photography", "Videographer", "Venue & Event Space", "Hotel",
      "Resort", "Beach", "Botanical Garden", "Art Gallery", "Museum",
      "Landmark & Historical Building", "Park", "Audio Visual Production & Design",
      "Audiovisual Equipment Rental",
    ],
  },
  {
    name: "Dining Occasions",
    slug: "dining-occasions",
    blurb: "From brunches to chef's tables — planned menus, private rooms.",
    occasions: toOccasions([
      "Breakfast", "Brunch", "Lunch", "Dinner", "Private Dinner", "Chef's Table",
      "Wine Pairing", "Tasting Event",
    ]),
    mapping: [
      "Restaurant", "Cafe", "Bistro", "Breakfast & Brunch Restaurant", "Steakhouse",
      "Seafood Restaurant", "Winery", "Wine Tasting Room", "Brewery", "Distillery",
      "Food Truck", "Caterer",
    ],
  },
  {
    name: "Entertainment & Social",
    slug: "entertainment-social",
    blurb: "Nights out, mixers, pop-ups, galas.",
    occasions: toOccasions([
      "Live Music", "Open Mic", "Karaoke Night", "Trivia Night", "Comedy Night",
      "Paint & Sip", "Pop-Up", "Gala", "Fundraiser", "Mixer", "Watch Party",
    ]),
    mapping: [
      "Music Venue", "Comedy Club", "Karaoke", "Paint & Sip", "Bar", "Lounge",
      "Restaurant", "Brewery", "Winery", "Venue & Event Space", "Theatre",
      "Auditorium", "DJ Service", "Musician",
    ],
  },
  {
    name: "Community",
    slug: "community",
    blurb: "Meetings, forums, fundraisers, civic gatherings.",
    occasions: toOccasions([
      "Club Meeting", "Association Meeting", "Nonprofit Event", "Community Meeting",
      "Civic Forum", "Volunteer Event", "Fundraiser", "Awareness Event",
    ]),
    mapping: [
      "Venue & Event Space", "Cultural Center", "Auditorium", "Coworking Space",
      "Hotel", "Caterer", "Photographer",
    ],
  },
  {
    name: "Religious",
    slug: "religious",
    blurb: "Receptions, baptisms, memorials — services with meaning.",
    occasions: toOccasions([
      "Church Reception", "Baptism Celebration", "Confirmation",
      "Memorial Reception", "Celebration of Life",
    ]),
    mapping: [
      "Baptist Church", "Wedding Chapel", "Venue & Event Space", "Restaurant",
      "Caterer", "Florist", "Photographer",
    ],
  },
  {
    name: "Family",
    slug: "family",
    blurb: "Kids' parties, showers, reunions, graduation days.",
    occasions: toOccasions([
      "Kids Birthday", "Baby Shower", "Family Reunion", "Graduation Celebration",
    ]),
    mapping: [
      "Indoor Playcenter", "Trampoline Park", "Bowling Alley", "Amusement Park",
      "Water Park", "Zoo", "Aquarium", "Petting Zoo", "Restaurant",
      "Venue & Event Space", "Balloon Services", "Face Painting", "Clown",
      "Magician", "Bakery",
    ],
  },
];

// Orchestration destination pages — combine a city + a use case.
export const cityOrchestrations = [
  "Birthday", "Wedding", "Bachelor Party", "Bachelorette Party", "Team Building",
  "Corporate Retreat", "Reunion", "Graduation Party", "Baby Shower",
  "Bridal Shower", "Photo Shoot", "Film Shoot", "Music Video", "Pop-Up", "Gala",
  "Networking Event",
];

// Concierge/professional planner types.
export const conciergeTypes = [
  "Wedding Planners",
  "Corporate Occasion Planners",
  "Gala Occasion Planners",
  "Destination Occasion Planners",
  "Adult Birthday Party Planners",
  "Kids Birthday Party Planners",
  "Bar & Bat Mitzvah Planners",
  "Baby Shower Planners",
  "Travel Agents",
  "Vacation Rental Agents",
];

// Vendor buckets shown as top-level "Plan" navigation.
export type PlanBucket = {
  slug: string;
  title: string;
  tagline: string;
  items: string[];
};

export const planBuckets: PlanBucket[] = [
  {
    slug: "venues",
    title: "Venues",
    tagline: "Halls, hotels, rooftops, ranches — where it happens.",
    items: [
      "Venue & Event Space", "Auditorium", "Exhibition & Trade Center",
      "Coworking Space", "Hotel", "Resort", "Bed & Breakfast", "Guest House",
      "Lodge", "Cabin", "Campground", "RV Park", "Wedding Chapel",
      "Restaurant", "Private Dining", "Bar", "Lounge", "Brewery", "Winery",
      "Distillery", "Beach Bar", "Rooftop Bar", "Sports Bar", "Cocktail Bar",
      "Irish Pub", "Dance Club", "Nightclub", "Music Venue", "Theatre",
      "Cinema", "Drive-In Theater", "Art Gallery", "Museum", "Cultural Center",
      "Planetarium", "Aquarium", "Zoo", "Castle", "Palace",
      "Landmark & Historical Building", "Botanical Garden", "Beach", "Marina",
      "Ranch", "Golf Course", "Vacation Rental", "Cottage",
    ],
  },
  {
    slug: "planning-production",
    title: "Planning & Production",
    tagline: "Producers, coordinators, and AV crews who run the day.",
    items: [
      "Party & Event Planning", "Wedding Planning", "Event Technology Service",
      "Audio Visual Production & Design", "Audiovisual Equipment Rental",
      "Event Staffing", "Officiant", "Photo Studio", "Recording Studio",
      "Sign Making", "Screen Printing", "Trophy Shop", "Printing Services",
    ],
  },
  {
    slug: "food-beverage",
    title: "Food & Beverage",
    tagline: "Caterers, bakers, bartenders, food trucks.",
    items: [
      "Caterer", "Bakery", "Patisserie / Cake Shop", "Bartender",
      "Bartending Service", "Food Truck", "Restaurant", "Coffee Shop",
      "Tea Room", "Ice Sculpture",
    ],
  },
  {
    slug: "entertainment",
    title: "Entertainment",
    tagline: "DJs, bands, comedians, magicians, and characters for kids.",
    items: [
      "DJ Service", "Musician", "Musical Band / Orchestra / Symphony",
      "Live Band", "Choir", "Karaoke", "Comedy Club", "Magician", "Clown",
      "Face Painting", "Caricature Artist", "Fortune Teller", "Juggler",
      "Animal Entertainment",
    ],
  },
  {
    slug: "photo-video",
    title: "Photo & Video",
    tagline: "Photographers, videographers, photo booths.",
    items: [
      "Photographer", "Event Photography", "Session Photography",
      "Boudoir Photography", "Videographer", "Photo Booth Rental",
    ],
  },
  {
    slug: "rentals",
    title: "Rentals",
    tagline: "Tents, chairs, linens, dance floors, sound, lights.",
    items: [
      "Party Equipment Rental", "Furniture Rental Service", "Bounce House Rental",
      "Tent Rental", "Table & Chair Rental", "Linen Rental", "Dance Floor Rental",
      "Stage Rental", "Lighting Rental", "Sound Rental",
      "Portable Restroom Rental", "Generator Rental", "Game Truck Rental",
      "Casino Party Rental", "Chair Covers", "Projectors", "Video Equipment",
      "Audio Equipment", "Moon-bounces",
    ],
  },
  {
    slug: "decor-florals",
    title: "Decor & Florals",
    tagline: "Florists, balloons, styling, floral design.",
    items: ["Florist", "Floral Designer", "Balloon Services", "Event Décor"],
  },
  {
    slug: "transportation",
    title: "Transportation",
    tagline: "Limos, party buses, valet, shuttles.",
    items: [
      "Limo Services", "Party Bus Rental", "Taxi Service", "Valet Service",
      "Valet Company", "Car Rental Agency",
    ],
  },
  {
    slug: "wedding-services",
    title: "Wedding Services",
    tagline: "Bridal wear, beauty, chapels, and rings.",
    items: [
      "Bridal Shop", "Formal Wear Store", "Wedding Planning", "Wedding Chapel",
      "Makeup Artist", "Hair Stylist",
    ],
  },
  {
    slug: "activities",
    title: "Activities & Add-ons",
    tagline: "Team building, tours, adventures, group games.",
    items: [
      "Team Building Activity", "Escape Rooms", "Axe Throwing", "Bowling Alley",
      "Trampoline Park", "Go-Karts", "Mini Golf", "Paintball", "Laser Tag",
      "Arcade", "Casino", "Sightseeing Tours", "Food Tours", "Boat Charter",
      "Hot Air Balloon Tours", "Horseback Riding", "Surfing School",
      "Climbing Service", "Diving Center",
    ],
  },
  {
    slug: "operations",
    title: "Operations & Safety",
    tagline: "Security, cleaning, insurance — the invisible plumbing.",
    items: [
      "Security Services", "Cleaning Services", "Waitstaff / Servers",
      "Event Insurance",
    ],
  },
  {
    slug: "wellness",
    title: "Wellness",
    tagline: "Spa days, yoga, retreats — restorative add-ons.",
    items: ["Spa", "Yoga Instructor", "Yoga Studio"],
  },
];