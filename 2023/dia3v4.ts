export function findNaughtyStep(original: string, modified: string): string {
    const longer = [original, modified][+(original.length < modified.length)];
    const shorter = [modified, original][+(original.length < modified.length)];

    for (let i = 0; i < longer.length; i++) {
        if (longer[i] !== shorter[i]) {
            return longer[i];
        }
    }

    return '';
}
