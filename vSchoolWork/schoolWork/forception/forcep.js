

const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
const alphabet = "abcdefghijklmnopqrstuvwxyz"



function forception (people, alphabet) {
    const final = [ ]
    console.log(people)
    for(let i = 0; i < people.length; i++){
        final.push(people[i])
        for(let i = 0; i < alphabet.length; i++){
                final.push(alphabet[i])
            }
    }

        // console.log(people)
        return final
}

console.log(forception(people, alphabet))