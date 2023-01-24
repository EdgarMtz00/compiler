import Token from './symbols.ts';

function lexical_analysis(input: string): Token[] {
    const lexemes: string[] = input.split(/\s+/);
    return lexemes.map(lexeme => {
        let state = 0;
        for (const character of lexeme) {
            switch (state) {
                case 0:
                    if (character.match(/[0-9]/)) {
                        state = 1;
                    } else if (character.match(/[A-z]/)) {
                        state = 2;
                    } else {
                        throw new Error('Invalid char');
                    }
                    break;
                case 1:
                    if (character.match(/[0-9]/)) {
                        state = 1;
                    } else if (character.match('.')) {
                        state = 3;
                    } else {
                        throw new Error('Invalid char')
                    }
                    break;
                case 2:
                    if (!character.match(/[A-z0-9]/)) {
                        throw new Error('Invalid char')
                    }
                    break;
                case 3:
                    if (!character.match(/[0-9]/)) {
                        throw new Error('Invalid char')
                    }
            }
        }

        if (state == 1) {
            throw new Error('Incomplete number');
        }

        const tokenType = state == 2 ? 'Real' : 'Identifier'

        return {
            tokenType,
            value: lexeme,
        }
    });
}

export default lexical_analysis;