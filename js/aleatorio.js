export function aleatorio (lista){
const posicao = Math.floor(Math.random()* lista.length);
return lista[posicao];
}
const nomes = [&quot;Fernanda&quot;, &quot;Giuliana&quot;, &quot;Maria Eduarda&quot;, &quot;Marcelo&quot;, &quot;Amanda&quot;, &quot;Gustavo&quot;,
&quot;Gabriel&quot;];

export function aleatorio (lista){
const posicao = Math.floor(Math.random()* lista.length);
return lista[posicao];
}

export const nome = aleatorio(nomes)
