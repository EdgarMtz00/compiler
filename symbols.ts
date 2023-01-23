type TokenType = 'Identifier' | 'Real';
type Token = {
    tokenType: TokenType,
    value: string
}
export default Token;