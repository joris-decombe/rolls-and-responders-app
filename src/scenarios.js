// Rolls & Responders Scenario Library
// Based on NCSC NZ Rolls & Responders Facilitator Manual V1.1

// Get scenario data with translations
export function getScenarioData(t) {
  return {
    'ddos-attack': {
      id: 'ddos-attack',
      code: '4452',
      title: t('scenarios.ddosAttack.title'),
      difficulty: t('scenarios.ddosAttack.difficulty'),
      description: t('scenarios.ddosAttack.description'),
      turns: [
        {
          id: 0,
          title: t('scenarios.ddosAttack.briefingTitle'),
          publicText: t('scenarios.ddosAttack.briefingPublic'),
          facilitatorInfo: t('scenarios.ddosAttack.briefingFacilitator')
        },
        {
          id: 1,
          title: t('scenarios.ddosAttack.turn1Title'),
          publicText: t('scenarios.ddosAttack.turn1Public'),
          facilitatorInfo: t('scenarios.ddosAttack.turn1Facilitator')
        },
        {
          id: 2,
          title: t('scenarios.ddosAttack.turn2Title'),
          publicText: t('scenarios.ddosAttack.turn2Public'),
          facilitatorInfo: t('scenarios.ddosAttack.turn2Facilitator')
        },
        {
          id: 3,
          title: t('scenarios.ddosAttack.turn3Title'),
          publicText: t('scenarios.ddosAttack.turn3Public'),
          facilitatorInfo: t('scenarios.ddosAttack.turn3Facilitator')
        }
      ],
      injects: [
        {
          id: 'inject_11',
          title: t('scenarios.ddosAttack.inject11Title'),
          content: t('scenarios.ddosAttack.inject11Content')
        },
        {
          id: 'inject_8',
          title: t('scenarios.ddosAttack.inject8Title'),
          content: t('scenarios.ddosAttack.inject8Content')
        },
        {
          id: 'inject_6',
          title: t('scenarios.ddosAttack.inject6Title'),
          content: t('scenarios.ddosAttack.inject6Content')
        }
      ]
    },
    'ransomware': {
      id: 'ransomware',
      code: '1456',
      title: t('scenarios.ransomware.title'),
      difficulty: t('scenarios.ransomware.difficulty'),
      description: t('scenarios.ransomware.description'),
      turns: [
        {
          id: 0,
          title: t('scenarios.ransomware.briefingTitle'),
          publicText: t('scenarios.ransomware.briefingPublic'),
          facilitatorInfo: t('scenarios.ransomware.briefingFacilitator')
        },
        {
          id: 1,
          title: t('scenarios.ransomware.turn1Title'),
          publicText: t('scenarios.ransomware.turn1Public'),
          facilitatorInfo: t('scenarios.ransomware.turn1Facilitator')
        },
        {
          id: 2,
          title: t('scenarios.ransomware.turn2Title'),
          publicText: t('scenarios.ransomware.turn2Public'),
          facilitatorInfo: t('scenarios.ransomware.turn2Facilitator')
        },
        {
          id: 3,
          title: t('scenarios.ransomware.turn3Title'),
          publicText: t('scenarios.ransomware.turn3Public'),
          facilitatorInfo: t('scenarios.ransomware.turn3Facilitator')
        }
      ],
      injects: [
        {
          id: 'inject_13',
          title: t('scenarios.ransomware.inject13Title'),
          content: t('scenarios.ransomware.inject13Content')
        }
      ]
    },
    'cloud-compromise': {
      id: 'cloud-compromise',
      code: '6244',
      title: t('scenarios.cloudCompromise.title'),
      difficulty: t('scenarios.cloudCompromise.difficulty'),
      description: t('scenarios.cloudCompromise.description'),
      turns: [
        {
          id: 0,
          title: t('scenarios.cloudCompromise.briefingTitle'),
          publicText: t('scenarios.cloudCompromise.briefingPublic'),
          facilitatorInfo: t('scenarios.cloudCompromise.briefingFacilitator')
        },
        {
          id: 1,
          title: t('scenarios.cloudCompromise.turn1Title'),
          publicText: t('scenarios.cloudCompromise.turn1Public'),
          facilitatorInfo: t('scenarios.cloudCompromise.turn1Facilitator')
        },
        {
          id: 2,
          title: t('scenarios.cloudCompromise.turn2Title'),
          publicText: t('scenarios.cloudCompromise.turn2Public'),
          facilitatorInfo: t('scenarios.cloudCompromise.turn2Facilitator')
        },
        {
          id: 3,
          title: t('scenarios.cloudCompromise.turn3Title'),
          publicText: t('scenarios.cloudCompromise.turn3Public'),
          facilitatorInfo: t('scenarios.cloudCompromise.turn3Facilitator')
        }
      ],
      injects: [
        {
          id: 'inject_12',
          title: t('scenarios.cloudCompromise.inject12Title'),
          content: t('scenarios.cloudCompromise.inject12Content')
        },
        {
          id: 'inject_18',
          title: t('scenarios.cloudCompromise.inject18Title'),
          content: t('scenarios.cloudCompromise.inject18Content')
        }
      ]
    },
    'deepfake-cfo': {
      id: 'deepfake-cfo',
      code: '1461',
      title: t('scenarios.deepfakeCfo.title'),
      difficulty: t('scenarios.deepfakeCfo.difficulty'),
      description: t('scenarios.deepfakeCfo.description'),
      turns: [
        {
          id: 0,
          title: t('scenarios.deepfakeCfo.briefingTitle'),
          publicText: t('scenarios.deepfakeCfo.briefingPublic'),
          facilitatorInfo: t('scenarios.deepfakeCfo.briefingFacilitator')
        },
        {
          id: 1,
          title: t('scenarios.deepfakeCfo.turn1Title'),
          publicText: t('scenarios.deepfakeCfo.turn1Public'),
          facilitatorInfo: t('scenarios.deepfakeCfo.turn1Facilitator')
        },
        {
          id: 2,
          title: t('scenarios.deepfakeCfo.turn2Title'),
          publicText: t('scenarios.deepfakeCfo.turn2Public'),
          facilitatorInfo: t('scenarios.deepfakeCfo.turn2Facilitator')
        },
        {
          id: 3,
          title: t('scenarios.deepfakeCfo.turn3Title'),
          publicText: t('scenarios.deepfakeCfo.turn3Public'),
          facilitatorInfo: t('scenarios.deepfakeCfo.turn3Facilitator')
        }
      ],
      injects: [
        {
          id: 'inject_5',
          title: t('scenarios.deepfakeCfo.inject5Title'),
          content: t('scenarios.deepfakeCfo.inject5Content')
        },
        {
          id: 'inject_9',
          title: t('scenarios.deepfakeCfo.inject9Title'),
          content: t('scenarios.deepfakeCfo.inject9Content')
        }
      ]
    },
    'poisoned-package': {
      id: 'poisoned-package',
      code: '3164',
      title: t('scenarios.poisonedPackage.title'),
      difficulty: t('scenarios.poisonedPackage.difficulty'),
      description: t('scenarios.poisonedPackage.description'),
      turns: [
        {
          id: 0,
          title: t('scenarios.poisonedPackage.briefingTitle'),
          publicText: t('scenarios.poisonedPackage.briefingPublic'),
          facilitatorInfo: t('scenarios.poisonedPackage.briefingFacilitator')
        },
        {
          id: 1,
          title: t('scenarios.poisonedPackage.turn1Title'),
          publicText: t('scenarios.poisonedPackage.turn1Public'),
          facilitatorInfo: t('scenarios.poisonedPackage.turn1Facilitator')
        },
        {
          id: 2,
          title: t('scenarios.poisonedPackage.turn2Title'),
          publicText: t('scenarios.poisonedPackage.turn2Public'),
          facilitatorInfo: t('scenarios.poisonedPackage.turn2Facilitator')
        },
        {
          id: 3,
          title: t('scenarios.poisonedPackage.turn3Title'),
          publicText: t('scenarios.poisonedPackage.turn3Public'),
          facilitatorInfo: t('scenarios.poisonedPackage.turn3Facilitator')
        }
      ],
      injects: [
        {
          id: 'inject_20',
          title: t('scenarios.poisonedPackage.inject20Title'),
          content: t('scenarios.poisonedPackage.inject20Content')
        },
        {
          id: 'inject_17',
          title: t('scenarios.poisonedPackage.inject17Title'),
          content: t('scenarios.poisonedPackage.inject17Content')
        }
      ]
    },
    'hypervisor-ransomware': {
      id: 'hypervisor-ransomware',
      code: '5126',
      title: t('scenarios.hypervisorRansomware.title'),
      difficulty: t('scenarios.hypervisorRansomware.difficulty'),
      description: t('scenarios.hypervisorRansomware.description'),
      turns: [
        {
          id: 0,
          title: t('scenarios.hypervisorRansomware.briefingTitle'),
          publicText: t('scenarios.hypervisorRansomware.briefingPublic'),
          facilitatorInfo: t('scenarios.hypervisorRansomware.briefingFacilitator')
        },
        {
          id: 1,
          title: t('scenarios.hypervisorRansomware.turn1Title'),
          publicText: t('scenarios.hypervisorRansomware.turn1Public'),
          facilitatorInfo: t('scenarios.hypervisorRansomware.turn1Facilitator')
        },
        {
          id: 2,
          title: t('scenarios.hypervisorRansomware.turn2Title'),
          publicText: t('scenarios.hypervisorRansomware.turn2Public'),
          facilitatorInfo: t('scenarios.hypervisorRansomware.turn2Facilitator')
        },
        {
          id: 3,
          title: t('scenarios.hypervisorRansomware.turn3Title'),
          publicText: t('scenarios.hypervisorRansomware.turn3Public'),
          facilitatorInfo: t('scenarios.hypervisorRansomware.turn3Facilitator')
        }
      ],
      injects: [
        {
          id: 'inject_13',
          title: t('scenarios.hypervisorRansomware.inject13Title'),
          content: t('scenarios.hypervisorRansomware.inject13Content')
        },
        {
          id: 'inject_14',
          title: t('scenarios.hypervisorRansomware.inject14Title'),
          content: t('scenarios.hypervisorRansomware.inject14Content')
        }
      ]
    }
  };
}

export function getDifficultyTable(t) {
  return [
    { level: t('difficulty.trivial'), roll: t('difficulty.noRoll'), ex: t('difficulty.checkingComms') },
    { level: t('difficulty.routine'), roll: "5+", ex: t('difficulty.examiningLogs') },
    { level: t('difficulty.challenging'), roll: "10+", ex: t('difficulty.unfamiliarTool') },
    { level: t('difficulty.hard'), roll: "15+", ex: t('difficulty.restoringBackups') },
    { level: t('difficulty.eliteHacker'), roll: "20", ex: t('difficulty.complexWizardry') },
  ];
}

// Keep DIFFICULTY_TABLE for backwards compatibility
export const DIFFICULTY_TABLE = [
  { level: "Trivial", roll: "No Roll", ex: "Checking Slack/Email" },
  { level: "Routine", roll: "5+", ex: "Examining Logs" },
  { level: "Challenging", roll: "10+", ex: "Unfamiliar Tool / Code Review" },
  { level: "Hard", roll: "15+", ex: "Restoring locked backups / IAM Fix" },
  { level: "Elite Hacker", roll: "20", ex: "Highly complex technical wizardry" },
];

// Get scenario by ID with translations
export function getScenario(id, t) {
  const scenarios = getScenarioData(t);
  return scenarios[id] || scenarios['ddos-attack'];
}

// Get all scenario IDs
export function getScenarioIds() {
  return ['ddos-attack', 'ransomware', 'cloud-compromise', 'deepfake-cfo', 'poisoned-package', 'hypervisor-ransomware'];
}

// Get scenario list for selection
export function getScenarioList(t) {
  const scenarios = getScenarioData(t);
  return Object.values(scenarios).map(s => ({
    id: s.id,
    title: s.title,
    difficulty: s.difficulty,
    description: s.description
  }));
}
