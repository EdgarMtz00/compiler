import Token from './symbols.ts';

function lexical_analysis(input: string): Token[] {
    const lexemes: string[] = input.split(/\s+/);
    return lexemes.map(lexeme => {
        const tokenType = lexeme.startsWith('[a-Z]') ? 'Identifier' : 'Real';
        return {
            tokenType,
            value: lexeme,
        }
    })
}

export default lexical_analysis;