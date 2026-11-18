// Datos del caso de estudio de VSwiss.

export const MAX_PLAYERS = 1024;

export const anaPositions = [
    { label: "1.º", value: 9.4 },
    { label: "2.º", value: 11.0 },
    { label: "3.º–4.º", value: 16.0 },
    { label: "5.º–8.º", value: 34.6 },
    { label: "9.º–16.º", value: 13.0 },
    { label: "17.º–32.º", value: 10.0 },
    { label: "33.º o más", value: 6.0 },
];

export const anaTopCut = 71;
export const anaChampion = 9.4;
export const anaAvgPosition = 10;

export const realPlayers = [
    { name: "Ana", deck: "Control", topCut: 71, champion: 9.4, avgPosition: 10, record: [7.6, 1.0, 1.4] },
    { name: "Marc", deck: "Aggro", topCut: 38, champion: 3.1, avgPosition: 47, record: [6.1, 1.2, 2.7] },
    { name: "Lía", deck: "Combo", topCut: 22, champion: 1.8, avgPosition: 96, record: [5.4, 1.1, 3.5] },
] as const;

const positionsSum = anaPositions.reduce((s, p) => s + p.value, 0);
const topEightSum = anaPositions.slice(0, 4).reduce((s, p) => s + p.value, 0);
if (Math.abs(positionsSum - 100) > 0.01) throw new Error(`vswissCase: positions sum ${positionsSum} !== 100`);
if (Math.abs(topEightSum - anaTopCut) > 0.01) throw new Error(`vswissCase: top8 ${topEightSum} !== ${anaTopCut}`);
