// função que formata valores no padrão moeda (R$ 00,00)
function formataMoeda(valor)
{
    return parseFloat(valor).toLocaleString( 'pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}
