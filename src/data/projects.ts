export interface CaseStudy {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  location: string;
  area: string;
  coverImage: string;
  heroImage: string;
  secondaryImage: string;
  detailImage: string;
  accentQuote: string;
  context: string;
  concept: string;
  moodboard: {
    description: string;
    colors: string[];
    elements: string[];
  };
  materials: {
    name: string;
    description: string;
    finish: string;
  }[];
  spatialDirection: string;
  finalExperience: string;
  outcome: {
    highlight: string;
    stats: { label: string; value: string }[];
  };
  gallery: {
    url: string;
    caption: string;
    aspect: 'portrait' | 'landscape' | 'wide';
  }[];
}

export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  deliverables: string[];
}

export interface MaterialItem {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  tactileFeel: string;
  reflection: string;
}

export const SELECTED_PROJECTS: CaseStudy[] = [
  {
    slug: 'maison-neo-classique',
    number: '01',
    title: 'Maison Néo-Classique',
    subtitle: 'Flagship Visual Scenography & Architecture',
    category: 'Visual Merchandising · Spatial Design',
    year: '2026',
    location: 'Place Vendôme, Paris',
    area: '480 m²',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
    detailImage: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=85',
    accentQuote: 'A quiet dialogue between classical Haussmannian proportions and raw monolithic travertine plinths.',
    context: 'A century-old heritage maison on Place Vendôme needed to reinvent its flagship experience for a new generation of discerning collectors without sacrificing historic reverence.',
    concept: 'We introduced the architectural principle of "Negative Volume" — sculpting the retail path around dramatic voids of natural daylight, soft shadow transitions, and brushed brass plinths.',
    moodboard: {
      description: 'French limestone textures, hand-woven linen drapery, and warm champagne highlights.',
      colors: ['#F6F1E7', '#DED1BC', '#9A723E', '#4A3828'],
      elements: ['Roman Arches', 'Linear Sconce Lighting', 'Travertine Totems', 'Honed Bronze Vitrines']
    },
    materials: [
      { name: 'Navona Travertine', description: 'Unfilled honed stone sourced from Tivoli quarries.', finish: 'Matte Honed' },
      { name: 'Brushed Antique Bronze', description: 'Custom hand-patinated hardware with micro-brushing.', finish: 'Satin Bronze' },
      { name: 'Natural Belgian Linen', description: 'Acoustic wall panelling with unbleached organic texture.', finish: 'Textured Weave' }
    ],
    spatialDirection: 'The floor plan guides clients from a high-ceiling atrium through private salon alcoves, with sightlines curated to isolate single pieces of artistry.',
    finalExperience: 'Visitors report a distinct deceleration of pace upon crossing the threshold — moving from the energetic Parisian streets into an oasis of contemplative luxury.',
    outcome: {
      highlight: 'Elevated dwell time by 180% and captured the 2026 Prix de l’Architecture Commerciale.',
      stats: [
        { label: 'Average Client Dwell Time', value: '+180%' },
        { label: 'Bespoke Inquiries', value: '+64%' },
        { label: 'Spatial Efficiency', value: '94%' }
      ]
    },
    gallery: [
      { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85', caption: 'The Central Atrium and Travertine Altar', aspect: 'wide' },
      { url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85', caption: 'Private Consultation Chamber with Acoustic Linen', aspect: 'portrait' },
      { url: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=85', caption: 'Custom Bronze Display Plinth Details', aspect: 'landscape' }
    ]
  },
  {
    slug: 'aura-travertine-bronze',
    number: '02',
    title: 'Aura Travertine & Bronze',
    subtitle: 'Milan Design Week Pavilion & Installation',
    category: 'Retail Concept · Exhibition Design',
    year: '2026',
    location: 'Brera Design District, Milan',
    area: '320 m²',
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
    heroImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1400&q=85',
    detailImage: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=85',
    accentQuote: 'Sculpting solid mineral mass against ethereal light reflections.',
    context: 'Commissioned by a premier Italian furniture atelier to design an immersive pavilion exploring the tactile intimacy of mineral materials and sculptural forms.',
    concept: 'A sequence of monolithic stone colonnades that frame micro-atmospheres of curated furniture, creating moments of pause and sensory tactile engagement.',
    moodboard: {
      description: 'Earthy terracottas, warm ivory plaster, and hand-finished bronze details.',
      colors: ['#F6F1E7', '#B8A992', '#9A723E', '#24211D'],
      elements: ['Monumental Pillars', 'Indirect Skylight', 'Fluted Plaster', 'Cast Bronze Vessels']
    },
    materials: [
      { name: 'Roman Travertine Blocks', description: 'Rough-cut monolithic pedestals balancing smooth honed surfaces.', finish: 'Dual Texture' },
      { name: 'Smoked Cast Glass', description: 'Fluted panels creating soft optical diffusion of moving silhouettes.', finish: 'Low-Iron Fluted' },
      { name: 'Warm Lime Wash', description: 'Artisanal mineral pigment applied with wide strokes.', finish: 'Velvety Matte' }
    ],
    spatialDirection: 'A deliberate labyrinth of compression and expansion, heightening emotional anticipation before opening into the vaulted main rotunda.',
    finalExperience: 'A contemplative temple where ambient soundscapes and directional lighting accentuate the raw weight of Italian craft.',
    outcome: {
      highlight: 'Recognized as Top 3 Installations at Milan Design Week 2026 with over 45,000 visitors.',
      stats: [
        { label: 'Exhibition Attendees', value: '45,000+' },
        { label: 'Global Press Features', value: '38 Publications' },
        { label: 'Direct Acquisitions', value: '100% Sold' }
      ]
    },
    gallery: [
      { url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85', caption: 'The Monolithic Colonnade in Brera', aspect: 'wide' },
      { url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85', caption: 'Interplay of Direct Sun and Fluted Glass', aspect: 'portrait' }
    ]
  },
  {
    slug: 'lombre-solaire',
    number: '03',
    title: "L'Ombre Solaire",
    subtitle: 'High Jewellery Scenography & Exhibition',
    category: 'Brand Storytelling · Scenography',
    year: '2025',
    location: 'Geneva & Tokyo',
    area: '260 m²',
    coverImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1600&q=85',
    heroImage: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1800&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85',
    detailImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
    accentQuote: 'Jewellery presented not inside glass boxes, but suspended within controlled solar shafts.',
    context: 'A century-old Swiss high jeweller sought a traveling scenography that would break away from clinical vitrines and invoke the warmth of celestial mechanics.',
    concept: 'We engineered micro-spotlight solar tracks inside dark charcoal and warm champagne silk chambers, casting razor-sharp brilliance on gemstones.',
    moodboard: {
      description: 'Midnight bronze, brushed gold, hand-dyed velvet, and optical crystals.',
      colors: ['#24211D', '#4A3828', '#9A723E', '#F6F1E7'],
      elements: ['Solar Pinholes', 'Deep Velvet Niches', 'Floating Pedestals', 'Concealed Acoustics']
    },
    materials: [
      { name: 'Midnight Charcoal Velvet', description: 'Zero-reflection Italian cotton velvet backdrop.', finish: 'Deep Matte' },
      { name: 'Warm Champagne Gilt', description: 'Fine leaf gilding applied on architectural reveals.', finish: 'Hand Gilded' },
      { name: 'Acoustic Felt Lining', description: 'Sound-dampening insulation providing complete acoustic isolation.', finish: 'Seamless Felt' }
    ],
    spatialDirection: 'Darkened transitional tunnels leading to luminous circular chambers where a single high-jewellery masterpiece is illuminated.',
    finalExperience: 'An intimate ritual of discovery where every breath and glint of diamond is amplified in absolute quiet.',
    outcome: {
      highlight: 'Set record private client acquisition rates across Geneva and Tokyo showcases.',
      stats: [
        { label: 'Private Commissions', value: '€14.2M' },
        { label: 'VIP Satisfaction Index', value: '99.4%' },
        { label: 'Touring Locations', value: '4 Continents' }
      ]
    },
    gallery: [
      { url: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1400&q=85', caption: 'The Solar Chamber Vitrine Architecture', aspect: 'wide' },
      { url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=85', caption: 'Bespoke Pedestal with Optical Precision', aspect: 'portrait' }
    ]
  },
  {
    slug: 'atelier-de-soie',
    number: '04',
    title: 'Atelier de Soie',
    subtitle: 'Private Haute Couture Salon & Space Planning',
    category: 'Styling · Space Planning',
    year: '2025',
    location: 'Kyoto & Zurich',
    area: '380 m²',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    heroImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1800&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1400&q=85',
    detailImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85',
    accentQuote: 'Where Japanese spatial restraint meets European haute couture tailoring.',
    context: 'Creating an appointment-only client salon bridging traditional Japanese washi textures and Swiss minimalist precision for a bespoke couture brand.',
    concept: 'Sliding cedar and handmade washi partitions allowing the space to effortlessly reconfigure between an open salon runway and secluded fitting chambers.',
    moodboard: {
      description: 'Natural hinoki wood, raw silk wall hangings, and sand-colored microcement.',
      colors: ['#F6F1E7', '#DED1BC', '#B8A992', '#4A3828'],
      elements: ['Shoji Screen Geometry', 'Recessed Floor Lighting', 'Silk Drapes', 'Bronze Inlays']
    },
    materials: [
      { name: 'Echizen Handmade Washi', description: 'Fiber-rich translucent paper filtering external light.', finish: 'Organic Texture' },
      { name: 'Japanese Hinoki Cypress', description: 'Unvarnished fragrant timber with seamless tongue-and-groove joints.', finish: 'Raw Polished' },
      { name: 'Brushed Taupe Microcement', description: 'Continuous jointless floor providing warmth and stillness.', finish: 'Soft Satin' }
    ],
    spatialDirection: 'A fluid sequence of thresholds transitioning from ceremonial tea reception to the private fitting sanctuary.',
    finalExperience: 'Clients experience an aura of serene intimacy, enveloped in subtle cedar fragrance and soft diffused daylight.',
    outcome: {
      highlight: 'Featured in Architectural Digest as the archetype of modern confidential retail.',
      stats: [
        { label: 'Client Retention', value: '96%' },
        { label: 'Seasonal Order Growth', value: '+42%' },
        { label: 'Space Flexibility', value: '4 Formats' }
      ]
    },
    gallery: [
      { url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85', caption: 'The Fitting Sanctuary with Washi Screens', aspect: 'wide' },
      { url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=85', caption: 'Hinoki Timber Details and Bronze Floor Inlay', aspect: 'portrait' }
    ]
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    number: '01',
    title: 'Visual Merchandising',
    tagline: 'Translating brand essence into spatial presence and desire.',
    description: 'We conceive and execute window scenography, product presentation hierarchies, and tactile display architecture that captivate passerby and elevate customer reverence.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85',
    deliverables: [
      'Window Scenography & Kinetic Displays',
      'Seasonal In-Store Storytelling',
      'Merchandising Guidelines & Toolkits',
      'Custom Plinth & Vitrine Design'
    ]
  },
  {
    number: '02',
    title: 'Styling & Spatial Artistry',
    tagline: 'The art of micro-composition, material harmony, and tactile styling.',
    description: 'From luxury showrooms and VIP private lounges to editorial campaigns, we carefully curate textiles, flora, vintage objects, and finishes down to millimeter precision.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85',
    deliverables: [
      'Editorial & Campaign Set Styling',
      'Bespoke Prop & Object Sourcing',
      'Textile & Flora Art Direction',
      'Sensory Ambience Curation'
    ]
  },
  {
    number: '03',
    title: 'Retail Concepts & Pavilions',
    tagline: 'Next-generation retail environments built around emotion.',
    description: 'We develop end-to-end retail concept strategies, pop-up structures, and temporary design week pavilions that spark viral curiosity and long-term brand equity.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85',
    deliverables: [
      'Concept Feasibility & Spatial Strategy',
      'Pop-Up & Pavilion Architecture',
      'Interactive Customer Journey Maps',
      'Modular Display Systems'
    ]
  },
  {
    number: '04',
    title: 'Brand Storytelling',
    tagline: 'Crafting the poetic narrative that gives architecture its soul.',
    description: 'We weave brand heritage, artisanal craftsmanship, and contemporary culture into cohesive narratives that unfold naturally as customers journey through physical space.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=85',
    deliverables: [
      'Spatial Narrative Blueprints',
      'Multi-Sensory Story Integration',
      'Exhibition Curation & Copywriting',
      'Artisan Collaboration Direction'
    ]
  },
  {
    number: '05',
    title: 'Creative Direction',
    tagline: 'Unified aesthetic guardianship across spatial and digital touchpoints.',
    description: 'Guiding luxury fashion, jewellery, and architectural maisons with consistent visual rigor, material selection, photographic tonality, and design philosophy.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85',
    deliverables: [
      'Seasonal Aesthetic Roadmaps',
      'Campaign Art Direction',
      'Lookbook & Spatial Photography Guidance',
      'Cross-Disciplinary Team Leadership'
    ]
  },
  {
    number: '06',
    title: 'Space Planning & Architecture',
    tagline: 'Harmonizing flow, human scale, and architectural proportions.',
    description: 'Optimizing high-traffic retail spaces, intimate boutique salons, and experiential galleries with intelligent zoning, sightline control, and architectural lighting.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85',
    deliverables: [
      'Zoning & Circulation Schematics',
      'Architectural Lighting Design',
      'Material Finishes Schedule',
      'Execution & Build Supervision'
    ]
  }
];

export const MATERIAL_GALLERY: MaterialItem[] = [
  {
    id: 'travertine',
    name: 'Navona Travertine',
    category: 'Mineral Mass',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85',
    description: 'Porous limestone from Tuscan quarries, reflecting daylight with quiet monumental presence.',
    tactileFeel: 'Honed Matte, Cool Mineral Grain',
    reflection: 'Diffuse Daylight Scattering'
  },
  {
    id: 'bronze',
    name: 'Brushed Antique Bronze',
    category: 'Noble Metal',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1000&q=85',
    description: 'Hand-patinated bronze alloy with micro-directional brush marks that warm under evening illumination.',
    tactileFeel: 'Heavy, Silky Metallic Satin',
    reflection: 'Subtle Golden Specular Sheen'
  },
  {
    id: 'linen',
    name: 'Organic Belgian Linen',
    category: 'Tactile Weave',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=85',
    description: 'Unbleached natural flax fibers providing acoustic warmth and architectural softness.',
    tactileFeel: 'Slubbed Earthy Texture',
    reflection: 'Zero Glare, Light Absorbing'
  },
  {
    id: 'glass',
    name: 'Fluted Cast Glass',
    category: 'Optical Refraction',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85',
    description: 'Linear cast texture that breaks silhouettes into soft gradients of shadow and light.',
    tactileFeel: 'Crisp Ribbed Relief',
    reflection: 'Linear Optical Shimmer'
  },
  {
    id: 'velvet',
    name: 'Midnight Cotton Velvet',
    category: 'Sensory Depth',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=85',
    description: 'Dense Italian weave engineered to absorb unwanted reflections behind high-jewellery vitrines.',
    tactileFeel: 'Plush, Deeply Tactile',
    reflection: 'Deep Optical Void'
  },
  {
    id: 'paper',
    name: 'Handmade Echizen Washi',
    category: 'Cellulose Light',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85',
    description: 'Mulberry bark paper created with ancient Japanese techniques, transforming sunlight into a soft luminous cloud.',
    tactileFeel: 'Fibrous, Delicate Strength',
    reflection: 'Warm Translucent Glow'
  }
];

export const OREVA_METHOD_STEPS = [
  {
    number: '01',
    stage: 'RESEARCH',
    tag: 'Deep Context & Archeology',
    description: 'Understanding the brand heritage, architectural context, spatial constraints, and psychological motivations of your client base.',
    deliverable: 'Spatial Intelligence Brief & Audience Mapping'
  },
  {
    number: '02',
    stage: 'CONCEPT',
    tag: 'Poetic & Visual Direction',
    description: 'Distilling complex brand values into a singular creative thesis: defining materials, proportions, lighting philosophy, and emotional tone.',
    deliverable: 'Visual Scenography Blueprint & 3D Spatial Renders'
  },
  {
    number: '03',
    stage: 'CURATION',
    tag: 'Material & Object Selection',
    description: 'Sourcing rare stone slabs, patinated metals, bespoke textiles, and lighting fixtures from master artisans across Europe and Japan.',
    deliverable: 'Tactile Material Palette & Physical Sample Board'
  },
  {
    number: '04',
    stage: 'DESIGN',
    tag: 'Precision Spatial Detailing',
    description: 'Translating concept into architectural millwork specifications, vitrine mechanics, acoustic treatments, and custom lighting fixtures.',
    deliverable: 'Technical Execution Drawings & Fabrication Specs'
  },
  {
    number: '05',
    stage: 'EXPERIENCE',
    tag: 'Installation & Staging',
    description: 'On-site direction, fine styling, lighting calibration, and sensory tuning to deliver an unforgettable space that elicits immediate desire.',
    deliverable: 'Turnkey Space Handover & Visual Merchandising Manual'
  }
];

export const STUDIO_PHILOSOPHIES = [
  {
    title: 'Space',
    subtitle: 'Thoughtful Environments',
    description: 'We believe space is not merely empty area to be filled with fixtures, but a sculptural canvas shaped by light, shadow, and proportion.'
  },
  {
    title: 'Story',
    subtitle: 'Meaningful Connections',
    description: 'Every material selection and sightline must communicate a deeper narrative — honoring the craft and timeless values of the brand.'
  },
  {
    title: 'Experience',
    subtitle: 'Lasting Impressions',
    description: 'The ultimate measure of our work is emotional resonance: creating spaces people long to revisit, remember, and talk about.'
  }
];
