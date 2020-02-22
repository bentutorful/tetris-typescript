export default function generateRandomShape (): string {
    const pieces = [
        'I', 'I', 'I', 'I',
        'J', 'J', 'J', 'J',
        'L', 'L', 'L', 'L',
        'O', 'O', 'O', 'O',
        'S', 'S', 'S', 'S',
        'T', 'T', 'T', 'T',
        'Z', 'Z', 'Z', 'Z'
    ];
    const piece = pieces.splice((Math.random() * (pieces.length - 1)), 1)[0];

    return piece;
}
