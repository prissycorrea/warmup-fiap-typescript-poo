export class Armazenador {
    private construtor() {}

    static salvar(chave: string, valor: any): void {
        const valorComoString = JSON.stringify(valor);
        localStorage.setItem(chave, valorComoString);
    }

    static obter(chave: string, reviver?: (this: any, key: string, value: any) => any) {
        const valor = localStorage.getItem(chave);
        if (valor === null) {
            return null;
        }
        return JSON.parse(valor, reviver);
    }
}