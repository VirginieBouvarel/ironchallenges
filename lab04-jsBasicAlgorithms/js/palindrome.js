/*BONUS 2*/
/*
Write a code that will check if the value we assigned to a variable is a Palindrome.
*/

/*
cleartext()
Fonction qui enleve les espaces, ponctuations et majuscules d'un texte
- prend une  chaine de texte en paramètre
- parcoure le texte en ne lisant que les lettres (saute les autres caractères)
- ajoute chaque lettre lue a une nouvelle variable clearText
- retourne la valeur de clearText contenant le text nettoyé et passé en minuscules
*/
function clearText(phrase){
    let clearText = "";
    for (let i = 0; i < phrase.length; i++){
        if (phrase[i] === " " || phrase[i] === "," || phrase[i] === "!" || phrase[i] === "?" || phrase[i] === "'"){
            continue;
        }
        clearText += phrase[i];
    }
    return clearText.toLowerCase();
}

/*
reverse()
Fonction qui inverse les caractères d'une chaine de texte
- prend un texte en paramètre
- le coupe tout les caractères
- inverse leur ordre
- recolle les caractères dans l'ordre inverse
*/
function reverse(text){
    text = text.split("").reverse().join("");
    return text;
}

/*
palindrome()
Fonction qui vérifie si une chaine est un palindrome
- prend une chaine en paramètre
- appelle la fonction clearText() pour enlever tous les caractères qui ne sont pas une lettre minuscule
- appelle la fonction reverse() pour créer une copie inversée de la chaine 
- compare la chaine nettoyée et son envers
- affiche un message en fonction du resultat de la comparaison
*/
function palindrome(phraseToCheck){
    if (clearText(phraseToCheck) === reverse(clearText(phraseToCheck))){
        console.log(`${phraseToCheck} is a palindrome.`);
    }else{
        console.log(`${phraseToCheck} isn't a palindrome.`);
    }
}


/*TESTS*/
palindrome("A man, a plan, a canal, Panama!");
palindrome("Amor, Roma");
palindrome("race car");
palindrome("step on no pets");
palindrome("Was it a car or a cat I saw?");
palindrome("No 'x' in Nixon");
palindrome("je ne suis pas un palindrome");
palindrome("Moi non plus");