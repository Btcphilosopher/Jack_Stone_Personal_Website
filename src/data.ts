import { Essay, FragmentNote, InfluenceBook, SpeakingEvent } from './types';

export const ESSAYS: Essay[] = [
  {
    id: 'civilisational-renewal',
    title: 'The Architecture of Civilisational Renewal',
    subtitle: 'On institutions, inheritance, and the conditions for collective greatness.',
    date: '23 May 2026',
    readTime: '12 MIN READ',
    category: 'POLITICAL PHILOSOPHY',
    excerpt: 'On institutions, inheritance, and the conditions for collective greatness. Exploring how modern societies can rebuild long-term horizons.',
    image: '/src/assets/images/station_dome_bw_1780990916918.png',
    featured: true,
    tableOfContents: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'problem', title: 'I. The Problem of Chronophilia' },
      { id: 'framework', title: 'II. The Institutional Inheritance' },
      { id: 'future', title: 'III. The Architecture of Trust' },
      { id: 'conclusion', title: 'Conclusion' }
    ],
    pullQuote: 'Civilisations are not built by chance, but by the quiet discipline of ordered striving.',
    sections: [
      {
        id: 'introduction',
        heading: 'Introduction',
        paragraphs: [
          'Every age inherits not only the achievements of those who came before it, but also their unfinished tasks. We stand in such an age. Today, our societies suffer from a peculiar spatial and temporal claustrophobia, focused relentlessly on the immediate present. We have lost the art of the long view—the capacity to initiate projects whose completion we will never live to see.',
          'To renew a civilisation is not merely to restore its physical infrastructure or double its economic rate of growth, though these may be vital symptoms of vitality. It is first and foremost an act of the institutional imagination. It requires us to ask: What do we owe to the unborn, and how do we construct vessels sturdy enough to carry our finest values across the deep ocean of time?'
        ]
      },
      {
        id: 'problem',
        heading: 'I. The Problem of Chronophilia',
        paragraphs: [
          'We live in the wreckage of a short-term consensus. We might call this condition "chronophilia"—a worship of the current instant, which reduces all history to a set of preliminary steps leading to ourselves, and collapses the future into the next fiscal quarter or news cycle. This creates a civic environment that is highly dynamic but structurally hollowed out.',
          'Under the regime of chronophilia, public works become transactional, educational systems become hyper-focused on temporal instrumentation, and our common architectural expression is reduced to the cheap and disposable. When our structures are built to last thirty years, our thoughts naturally contract to accommodate that horizon. We begin to think in seasons rather than centuries.'
        ]
      },
      {
        id: 'framework',
        heading: 'II. The Institutional Inheritance',
        paragraphs: [
          'Consider the nature of an institution. In the Anglo-American tradition, from Burke to Oakeshott, an institution is not a theoretical abstraction or a cold piece of bureaucracy. It is a slow, accumulated wisdom—a partnership between those who are living, those who are dead, and those who are yet to be born.',
          'When we enter an old library, a historic university, or a well-ordered court of law, we feel a quiet authority. This authority does not stem from coercion, but from the weight of cumulative consensus. The architecture of these spaces is deliberate: it announces that we are temporary custodians of a continuous practice. The high ceilings, the stone columns, the linear symmetry—all serve as structural correctives to the hubris of the individual ego.'
        ]
      },
      {
        id: 'future',
        heading: 'III. The Architecture of Trust',
        paragraphs: [
          'How, then, do we build for a future we cannot fully predict? The answer lies in structural rigidity paired with functional flexibility. Great civilisations build monuments of physical integrity, but they leave their internal arrangements open to the dialogue of generations.',
          'An Anglo-futuristic perspective is one that looks forward without severing the cord of heritage. It harnesses modern material science—carbon composites, generative structural design, low-carbon steel—to construct spaces that echo classic proportions. It recognizes that to inspire public affection, civic projects must be beautiful. They must speak to our higher desire for order, beauty, and permanence. A railway station should feel as awe-inspiring as a cathedral, because both are portals through which human destiny passes.'
        ]
      },
      {
        id: 'conclusion',
        heading: 'Conclusion',
        paragraphs: [
          'The work of renewal is a quiet, continuous discipline. It requires us to resist the loud hysterias of the present and align ourselves with the slow, massive currents of historical continuity. To build for the future is to accept our role as links in a chain.',
          'Let us begin to design our civic life as if we intend to remain. When we build with stone, we declare our belief in tomorrow.'
        ]
      }
    ],
    notes: [
      'The concept of chronophilia is expanded from my lecture at the Royal Society of Arts (March 2026).',
      'For a similar investigation into physical permanence, see Burke’s "Reflections on the Revolution in France" regarding the intergenerational contract.'
    ],
    references: [
      'Burke, Edmund. Reflections on the Revolution in France. London: J. Dodsley, 1790.',
      'Oakeshott, Michael. On Human Conduct. Oxford: Clarendon Press, 1975.',
      'Scruton, Roger. Green Philosophy: How to Think Seriously About the Planet. London: Atlantic Books, 2012.'
    ]
  },
  {
    id: 'progress-without-optimism',
    title: 'Progress Without Optimism',
    subtitle: 'Why the future is an open project rather than a promise.',
    date: '14 April 2026',
    readTime: '18 MIN READ',
    category: 'PHILOSOPHY OF HISTORY',
    excerpt: 'A critical re-evaluation of historicist teleologies. We must separate our faith in improvement from the passive expectation that progress is guaranteed.',
    image: 'https://picsum.photos/seed/horizon3/800/600',
    pullQuote: 'Real progress is fought for in the shadow of potential failure. Optimism is a spectator sport; active hope is an engineering challenge.',
    sections: [
      {
        heading: 'Beyond Progressive Teleology',
        paragraphs: [
          'One of the major intellectual errors of the last two centuries was the belief that progress is a law of nature, or an inevitable outcome of economic expansion. This myth—common to both technocratic liberalism and dialetic materialism—has left us ill-equipped for a world of climate disruption, systemic volatility, and cultural fragmentation.',
          'Optimism is a passive orientation. It tells us that things will get better of their own accord. But history shows that order is an exception, and decay is the default state of complex systems. The second law of thermodynamics applies to civilizations as much as to steam engines.'
        ]
      },
      {
        heading: 'The Case for Active Construction',
        paragraphs: [
          'If progress is not guaranteed, our duty shifts from expectation to construction. We must replace our passive optimism with a serious and protective realism. We must become stewards of what we value.',
          'To cultivate progress without optimism is to act with the knowledge that our physical and institutional gains can be lost in a generation. It is to build robust, redundant, and beautiful safeguards around our scientific libraries, our legal structures, and our democratic assemblies. We do not build because history is on our side; we build because we are on the side of history.'
        ]
      }
    ],
    references: [
      'Lasch, Christopher. The True and Only Heaven: Progress and Its Critics. New York: W.W. Norton, 1991.',
      'Gray, John. Heresies: Against Progress and Other Illusions. London: Granta Books, 2004.'
    ]
  },
  {
    id: 'technology-human-horizon',
    title: 'Technology and the Human Horizon',
    subtitle: 'An inquiry into power, meaning, and the direction of our time.',
    date: '03 March 2026',
    readTime: '15 MIN READ',
    category: 'PHILOSOPHY OF TECHNOLOGY',
    excerpt: 'As our toolmaking capabilities outpace our philosophical maturity, we face a profound choice: will we automate the human spirit, or elevate it?',
    image: 'https://picsum.photos/seed/techgrid/800/600',
    pullQuote: 'The machine should release us from the mechanical, so that we may more fully inhabit the humane.',
    sections: [
      {
        heading: 'The Automating Impulse',
        paragraphs: [
          'We have arrived at a juncture where our machines do not merely supplement our physical labor; they mimic our intellectual and aesthetic gestures. We are tempted by a fatal laziness—the urge to surrender our judgment, our memories, and our creativity to synthetic algorithms.',
          'This is not merely a labor crisis; it is a metaphysical one. When we automate the writing of essays, the generation of sacred art, or the formulation of public policy, we do not save time for higher pursuits. We hollow out those very activities that make us conscious agents. We become passive consumers of our own alienated labor.'
        ]
      },
      {
        heading: 'A Humanist Blueprint for technology',
        paragraphs: [
          'The solution is not blockheaded Luddism, but a rigorous, humane direction of technological power. We must ask: Does this technology expand human agency or curtail it? Does it make our institutions more legible and trustworthy, or more opaque and manipulative?',
          'An Anglo-futuristic approach to technology would design systems of unparalleled elegance, speed, and precision, but would constrain them to serve human flourishing. We would build highly advanced cybernetic loops to optimize our transport, agriculture, and power grids, while keeping our political, educational, and philosophical decisions firmly in the hands of assembled citizens. The machine must remain an instrument of human greatness.'
        ]
      }
    ],
    references: [
      'Mumford, Lewis. Technics and Civilization. New York: Harcourt, Brace & Co., 1934.',
      'Ellul, Jacques. The Technological Society. New York: Alfred A. Knopf, 1964.'
    ]
  }
];

export const FRAGMENT_NOTES: FragmentNote[] = [
  {
    id: 'note-1',
    date: '08 June 2026',
    content: 'We suffer from an excess of feedback and a deficit of echo. Feedback is immediate, anxious, and local; echo is deep, slow, and historical.',
    category: 'EPISTEMOLOGY',
    citation: 'Fragment on Solitude'
  },
  {
    id: 'note-2',
    date: '27 May 2026',
    content: 'A society that cannot design a beautiful railway station is a society that has lost faith in its collective future. Beauty is the tax we pay to the environment to register our intent to remain in it.',
    category: 'AESTHETICS',
    citation: 'Marginalia on Ruskin'
  },
  {
    id: 'note-3',
    date: '12 May 2026',
    content: 'The major battle of our century is not between left and right, but between the long-sighted custodians and the short-sighted liquidators.',
    category: 'POLITICS',
    citation: 'Political Fragment IV'
  },
  {
    id: 'note-4',
    date: '01 May 2026',
    content: 'The digital realm is infinite in breadth but zero in depth. It has no shadow, no grain, and no decay. Without these physical dimensions, memory cannot take root, and without memory, there is no culture.',
    category: 'CULTURE',
    citation: 'Notes on the Virtual'
  },
  {
    id: 'note-5',
    date: '18 April 2026',
    content: 'To converse with traditional texts is not to retreat from the world; it is to equip oneself with the weapons of antiquity so as to resist the tyranny of the contemporary.',
    category: 'METHODOLOGY',
    citation: 'Scholarly Reflections'
  }
];

export const INFLUENCES: InfluenceBook[] = [
  {
    id: 'burke',
    title: 'Reflections on the Revolution in France',
    author: 'Edmund Burke',
    year: 1790,
    excerpt: 'Society is indeed a contract... a partnership not only between those who are living, but between those who are living, those who are dead, and those who are to be born.',
    review: 'A foundational text for understanding intergenerational responsibility. Burke’s warnings against the violent dissolution of organic social contracts remain highly relevant. It teaches us that institutions are delicate, highly complex systems that are far easier to destroy than to build. A central reference for civilisational restoration.',
    color: '#0d1b2a',
    textColor: '#e0e1dd',
    borderColor: '#c5a880'
  },
  {
    id: 'kirk',
    title: 'The Conservative Mind',
    author: 'Russell Kirk',
    year: 1953,
    excerpt: 'We are part of a giant chain of being. If we cut ourselves off from our dead, we seal our own death.',
    review: 'Kirk’s masterpiece systematizes the imaginative and literary traditionalism of Anglo-American letters. It is a vital antidote to mechanical utilitarianism, arguing that a society is held together by its shared symbols, high-quality literature, and moral consensus. It provides the intellectual backbone for our critique of hyper-rationalised modern planning.',
    color: '#eae0d5',
    textColor: '#0a0908',
    borderColor: '#5e503f'
  },
  {
    id: 'newman',
    title: 'The Idea of a University',
    author: 'John Henry Newman',
    year: 1852,
    excerpt: 'An academic education is the high road to intellectual culture... It aims at raising the intellectual tone of society.',
    review: 'Newman’s defence of liberal learning for its own sake is a profound corrective to the corporate, skill-centric model of modern higher-education. He argues that a university exists to form a "philosophical habit of mind" rather than to produce units of economic output. Highly influential on my work surrounding the architecture of judgment.',
    color: '#00251a',
    textColor: '#f1f8f5',
    borderColor: '#bf9b30'
  },
  {
    id: 'murdoch',
    title: 'The Sovereignty of Good',
    author: 'Iris Murdoch',
    year: 1970,
    excerpt: 'Goodness is connected with the attempt to see the real world clearly, to see with an eye that is unclouded by the self.',
    review: 'Murdoch presents a beautiful moral realism. She argues that being good requires "unselfing"—a disciplined attention directed outward toward other humans, nature, and art. Her writing is intellectually clean, serious, and deeply poetic. It underpins my belief that civilisational renewal is fundamentally an ethical task.',
    color: '#3d0c11',
    textColor: '#f1e3e4',
    borderColor: '#d2963a'
  },
  {
    id: 'hayek',
    title: 'The Road to Serfdom',
    author: 'Friedrich A. Hayek',
    year: 1944,
    excerpt: 'We must face the fact that we have been building a system which makes the state the master of our lives.',
    review: 'Hayek’s warnings against top-down technocratic planning remain incredibly vital in an age of big-data statecraft and smart cities. He demonstrates that complex systems cannot be centrally calculated without suppressing the natural distributed intelligence of free human coordination. A profound essay on epistemic modesty.',
    color: '#1a1f2c',
    textColor: '#f8fafc',
    borderColor: '#94a3b8'
  }
];

export const SPEAKING_EVENTS: SpeakingEvent[] = [
  {
    id: 'talk-1',
    title: 'Institutions and the Long Future',
    date: '14 Oct 2026',
    venue: 'Royal Institution',
    location: 'London, UK',
    description: 'An address on how modern constitutional republics can build and shield intergenerational spaces from the accelerationist pressures of the digital epoch.',
    status: 'upcoming',
    topic: 'LECTURE'
  },
  {
    id: 'talk-2',
    title: 'The Ethics of Physical Permanence',
    date: '08 Nov 2026',
    venue: 'Sheldonian Theatre',
    location: 'Oxford, UK',
    description: 'A philosophical examination of architectural decay, the high aesthetic standards of civic planning, and our moral obligation to construct beautiful physical legacies.',
    status: 'upcoming',
    topic: 'COLLOQUIUM'
  },
  {
    id: 'talk-3',
    title: 'Technological Solitude and Democratic Echoes',
    date: '28 Jan 2026',
    venue: 'Senate House, University of London',
    location: 'London, UK',
    description: 'A public lecture evaluating the impact of generative media models on collective human memory, historical scholarship, and the public square.',
    status: 'past',
    topic: 'KEYNOTE'
  },
  {
    id: 'talk-4',
    title: 'Burke and the Future: A Paradoxical Alliance',
    date: '11 Nov 2025',
    venue: 'Trinity College Dublin',
    location: 'Dublin, IE',
    description: 'Exploration of Edmund Burke’s concept of intergenerational partnerships as a blueprint for progressive environmental conservancy and civic architecture.',
    status: 'past',
    topic: 'ACADEMIC PAPER'
  }
];
