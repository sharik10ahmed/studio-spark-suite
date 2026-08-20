export type Status = "active" | "inactive";
export type PublishStatus = "published" | "draft";

export type Program = {
  id: string;
  name: string;
  category: string;
  description: string;
  level: string;
  batch: string;
  image: string;
  status: Status;
};

export type FitnessService = {
  id: string;
  name: string;
  description: string;
  image: string;
  order: number;
  status: Status;
};

export type ChoreographyService = {
  id: string;
  name: string;
  eventType: string;
  description: string;
  image: string;
  status: Status;
};

export type GalleryItem = {
  id: string;
  title: string;
  category: "Dance" | "Fitness" | "Training" | "Performances" | "Events";
  image: string;
  order: number;
  status: Status;
};

export type StudioEvent = {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  description: string;
  image: string;
  status: PublishStatus;
};

export type Testimonial = {
  id: string;
  name: string;
  clientType: string;
  rating: number;
  review: string;
  status: PublishStatus;
};

export type EnquiryStatus = "New" | "Contacted" | "Converted" | "Closed";

export type Enquiry = {
  id: string;
  name: string;
  phone: string;
  email: string;
  program: string;
  message: string;
  date: string;
  status: EnquiryStatus;
};

export type Settings = {
  businessName: string;
  phone: string;
  email: string;
  address: string;
  heroHeading: string;
  heroDescription: string;
  ctaText: string;
  footerDescription: string;
};

export const ADMIN_CREDENTIALS = {
  email: "admin@dmakerdancestudio.com",
  password: "admin123",
};

export const initialSettings: Settings = {
  businessName: "D Maker Dance & Fitness Studio",
  phone: "7507504230",
  email: "support@dmakerdancestudio.com",
  address:
    "Sai Darshan Apartment, Basement, Bhadgaav Road, near Sai Gardan, Gadhinglaj, Maharashtra 416502",
  heroHeading: "MOVE. TRAIN. PERFORM.",
  heroDescription:
    "Learn powerful dance styles, build functional fitness, master choreography, and perform with confidence at D Maker Dance & Fitness Studio.",
  ctaText: "Join a Batch",
  footerDescription:
    "Premium dance training, functional fitness and event choreography in Gadhinglaj — built for students, families and community performers.",
};

export const initialPrograms: Program[] = [
  {
    id: "p1",
    name: "Bollywood Dance",
    category: "Dance",
    description:
      "Energetic choreography combining expressive movements and popular Bollywood styles.",
    level: "All Levels",
    batch: "Evening Batch",
    image: "pBollywood",
    status: "active",
  },
  {
    id: "p2",
    name: "Hip-Hop",
    category: "Urban",
    description:
      "High-energy urban dance training focused on rhythm, movement, coordination, and performance.",
    level: "Beginner to Advanced",
    batch: "Weekday Batch",
    image: "pHiphop",
    status: "active",
  },
  {
    id: "p3",
    name: "Contemporary",
    category: "Dance",
    description: "Creative movement, expression, flexibility, and modern choreography.",
    level: "Intermediate",
    batch: "Morning Batch",
    image: "pContemporary",
    status: "active",
  },
  {
    id: "p4",
    name: "Freestyle",
    category: "Urban",
    description:
      "Confidence-building freestyle sessions designed around rhythm and individual movement.",
    level: "Beginner",
    batch: "Weekend Batch",
    image: "pFreestyle",
    status: "active",
  },
  {
    id: "p5",
    name: "Kids Dance",
    category: "Kids",
    description:
      "Fun and structured dance training designed to build confidence, coordination, rhythm, and stage presence.",
    level: "Age 5–12",
    batch: "Evening Kids Batch",
    image: "pKids",
    status: "active",
  },
  {
    id: "p6",
    name: "Group Dance Training",
    category: "Group",
    description:
      "Specialized group sessions designed for coordinated performances and community batches.",
    level: "All Levels",
    batch: "Group Batch",
    image: "pGroup",
    status: "active",
  },
];

export const initialFitness: FitnessService[] = [
  {
    id: "f1",
    name: "Functional Fitness",
    description:
      "Full-body movement training that builds real-world strength, balance and endurance.",
    image: "fFunctional",
    order: 1,
    status: "active",
  },
  {
    id: "f2",
    name: "Strength & Conditioning",
    description: "Progressive resistance work that develops power, posture and joint stability.",
    image: "fStrength",
    order: 2,
    status: "active",
  },
  {
    id: "f3",
    name: "Mobility Training",
    description: "Guided flexibility and mobility sessions that keep dancers injury-free.",
    image: "fMobility",
    order: 3,
    status: "active",
  },
  {
    id: "f4",
    name: "Dance Fitness",
    description: "Cardio-driven dance workouts that burn energy while sharpening rhythm.",
    image: "fDance",
    order: 4,
    status: "active",
  },
  {
    id: "f5",
    name: "Group Fitness",
    description: "High-tempo group circuits designed for motivation and consistency.",
    image: "fGroup",
    order: 5,
    status: "active",
  },
  {
    id: "f6",
    name: "Beginner Fitness",
    description: "A supportive starting point with coached form and manageable intensity.",
    image: "fBeginner",
    order: 6,
    status: "active",
  },
  {
    id: "f7",
    name: "Performance Conditioning",
    description: "Speed, agility and stamina work for performers preparing for the stage.",
    image: "fConditioning",
    order: 7,
    status: "active",
  },
];

export const initialChoreography: ChoreographyService[] = [
  {
    id: "c1",
    name: "Wedding Choreography",
    eventType: "Wedding",
    description: "Sangeet and reception sets choreographed for families of every skill level.",
    image: "eWedding",
    status: "active",
  },
  {
    id: "c2",
    name: "Event Performances",
    eventType: "Corporate Event",
    description: "Stage-ready routines designed around your event theme and run-time.",
    image: "eCorporate",
    status: "active",
  },
  {
    id: "c3",
    name: "Group Performances",
    eventType: "Group",
    description: "Formation-based group choreography with clean transitions and timing.",
    image: "pGroup",
    status: "active",
  },
  {
    id: "c4",
    name: "Stage Performances",
    eventType: "Stage Show",
    description: "Full production choreography with lighting cues and rehearsal planning.",
    image: "choreography",
    status: "active",
  },
  {
    id: "c5",
    name: "Special Occasions",
    eventType: "Celebration",
    description: "Birthdays, anniversaries and haldi sets built in short, focused sessions.",
    image: "eCollege",
    status: "active",
  },
  {
    id: "c6",
    name: "Community Events",
    eventType: "Community",
    description: "Cultural and festival performances staged with local groups in Gadhinglaj.",
    image: "eCultural",
    status: "active",
  },
];

export const initialGallery: GalleryItem[] = [
  { id: "g1", title: "Studio Silhouette", category: "Dance", image: "g1", order: 1, status: "active" },
  { id: "g2", title: "Freeze Frame", category: "Performances", image: "g2", order: 2, status: "active" },
  { id: "g3", title: "Grip & Grit", category: "Fitness", image: "g3", order: 3, status: "active" },
  { id: "g4", title: "Mirror Rehearsal", category: "Training", image: "g4", order: 4, status: "active" },
  { id: "g5", title: "Partner Lift", category: "Performances", image: "g5", order: 5, status: "active" },
  { id: "g6", title: "Mat Circuit", category: "Fitness", image: "g6", order: 6, status: "active" },
  { id: "g7", title: "Crew Portrait", category: "Dance", image: "g7", order: 7, status: "active" },
  { id: "g8", title: "Footwork Drill", category: "Training", image: "g8", order: 8, status: "active" },
  { id: "g9", title: "Backstage Minutes", category: "Events", image: "g9", order: 9, status: "active" },
  { id: "g10", title: "Showcase Night", category: "Events", image: "g10", order: 10, status: "active" },
];

export const initialEvents: StudioEvent[] = [
  {
    id: "e1",
    title: "Sangeet Night Showcase",
    category: "Wedding",
    date: "12 Feb 2026",
    location: "Gadhinglaj, Maharashtra",
    description: "A full family sangeet set choreographed and rehearsed across three weeks.",
    image: "eWedding",
    status: "published",
  },
  {
    id: "e2",
    title: "Gadhinglaj Cultural Utsav",
    category: "Cultural Event",
    date: "05 Mar 2026",
    location: "Town Grounds, Gadhinglaj",
    description: "Folk and fusion performance staged with our community batch dancers.",
    image: "eCultural",
    status: "published",
  },
  {
    id: "e3",
    title: "College Annual Day Battle",
    category: "College Event",
    date: "22 Mar 2026",
    location: "Kolhapur District",
    description: "Hip-hop crew showcase featuring our advanced student formation.",
    image: "eCollege",
    status: "published",
  },
  {
    id: "e4",
    title: "Corporate Gala Performance",
    category: "Corporate Event",
    date: "18 Apr 2026",
    location: "Kolhapur",
    description: "Sleek contemporary-jazz set produced for a corporate annual night.",
    image: "eCorporate",
    status: "published",
  },
  {
    id: "e5",
    title: "Community Street Showcase",
    category: "Community Performance",
    date: "09 May 2026",
    location: "Sai Gardan, Gadhinglaj",
    description: "Open-air performance bringing together kids, adults and fitness members.",
    image: "eCommunity",
    status: "published",
  },
];

export const initialTestimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sneha Patil",
    clientType: "Dance Student",
    rating: 5,
    review:
      "I joined with zero experience and performed on stage within four months. The training is structured and the energy never drops.",
    status: "published",
  },
  {
    id: "t2",
    name: "Rohit Kamble",
    clientType: "Fitness Member",
    rating: 5,
    review:
      "The functional fitness batch changed how I move. Coaching on form is serious, and the sessions are genuinely fun.",
    status: "published",
  },
  {
    id: "t3",
    name: "Anita Deshmukh",
    clientType: "Parent",
    rating: 5,
    review:
      "My daughter's confidence has grown so much in the kids batch. Safe space, disciplined teaching, brilliant stage prep.",
    status: "published",
  },
  {
    id: "t4",
    name: "Prasad & Family",
    clientType: "Event Client",
    rating: 5,
    review:
      "They choreographed our entire sangeet for fifteen family members. Everyone looked in sync and the crowd loved it.",
    status: "published",
  },
  {
    id: "t5",
    name: "Team Spandan",
    clientType: "Group Participant",
    rating: 4,
    review:
      "Our group batch was tailored to our competition theme. Clear formations, sharp transitions, great support.",
    status: "published",
  },
  {
    id: "t6",
    name: "Vaishnavi Jadhav",
    clientType: "Dance Student",
    rating: 5,
    review:
      "Best dance studio in Gadhinglaj. Contemporary classes helped my flexibility and expression a lot.",
    status: "published",
  },
];

export const initialEnquiries: Enquiry[] = [
  {
    id: "q1",
    name: "Kiran Shinde",
    phone: "9876543210",
    email: "kiran.shinde@example.com",
    program: "Hip-Hop",
    message: "Interested in the weekday evening hip-hop batch. What are the timings?",
    date: "14 Aug 2026",
    status: "New",
  },
  {
    id: "q2",
    name: "Meera Kulkarni",
    phone: "9823117744",
    email: "meera.k@example.com",
    program: "Kids Dance",
    message: "My son is 7. Looking for a beginner kids batch on weekends.",
    date: "12 Aug 2026",
    status: "Contacted",
  },
  {
    id: "q3",
    name: "Sagar Pawar",
    phone: "7402239911",
    email: "sagar.pawar@example.com",
    program: "Functional Fitness",
    message: "Want to join morning fitness sessions. Do you offer a trial class?",
    date: "09 Aug 2026",
    status: "Converted",
  },
  {
    id: "q4",
    name: "Ashwini More",
    phone: "9090112233",
    email: "ashwini.more@example.com",
    program: "Wedding Choreography",
    message: "Wedding in December, need choreography for 12 people.",
    date: "02 Aug 2026",
    status: "Closed",
  },
];

export const WHY_US = [
  {
    title: "Professional Training",
    text: "Structured instruction focused on technique and progression.",
    icon: "badge",
  },
  {
    title: "High-Energy Sessions",
    text: "Training designed to keep participants engaged and motivated.",
    icon: "bolt",
  },
  {
    title: "Specialized Batches",
    text: "Programs structured for different interests and experience levels.",
    icon: "layers",
  },
  {
    title: "Performance Focus",
    text: "Develop confidence, stage presence, coordination, and performance skills.",
    icon: "star",
  },
  {
    title: "Dance + Fitness",
    text: "A unique combination of creative movement and physical conditioning.",
    icon: "pulse",
  },
  {
    title: "Community Experience",
    text: "Learn, train, perform, and grow together.",
    icon: "users",
  },
] as const;

export const PROCESS = [
  {
    step: "01",
    title: "Choose Your Program",
    text: "Find the dance or fitness program that matches your goals.",
  },
  {
    step: "02",
    title: "Join Your Batch",
    text: "Select a suitable group or training session.",
  },
  {
    step: "03",
    title: "Train & Improve",
    text: "Build technique, strength, flexibility, rhythm, and confidence.",
  },
  {
    step: "04",
    title: "Perform & Progress",
    text: "Take your skills to performances, events, and new challenges.",
  },
] as const;

export const HERO_STATS = [
  { value: 12, suffix: "+", label: "Premium Dance Training" },
  { value: 7, suffix: "", label: "Functional Fitness" },
  { value: 20, suffix: "+", label: "Specialized Group Batches" },
  { value: 150, suffix: "+", label: "Event Choreography" },
] as const;
