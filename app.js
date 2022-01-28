var pronoun = ['los', 'algunos', 'todos', 'esos', 'aquellos'];
var adj = ['grandes', 'mejores', 'fantásticos', 'geniales'];
var noun = ['lugares','jugadores', 'personajes', 'fantasmas'];
var domain = ['.es', '.com', '.io', '.net'];

for(let i = 0; i < pronoun.length; i++){
    for(let j = 0; j < adj.length; j++){
        for(let k = 0; k < noun.length; k++){
            for(let l = 0; l < domain.length; l++){
                console.log(pronoun[i]+adj[j]+noun[k]+domain[l]);
            }
        }
    }
}