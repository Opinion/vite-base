export const faces = [
    '🤡', '😂', '🤣', '😁', '😵',
    '😄', '😅', '😆', '😒', '🫣',
    '😉', '🤗', '🤔', '😀', '😱',
    '🙃', '😲', '😖', '😨', '😬',    
    '🥸', '🪦',
];

export function getFace() {
    const key = Math.floor(Math.random() * faces.length);
    return faces[key];
}
