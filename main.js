
// TEMPLATE LITERALS

// Bitte erstelle Variablen mit deinen persönlichen Daten (Name, Nachname, Alter, Geburtsort, Größe, Gewicht, Hobbys, Computerspiele, Lieblingsessen, Lieblingssport, Lieblingsmodemarke, Lieblingsjahreszeit, Lieblingsurlaubsort). Bilde einen Satz mit Hilfe von: 

// String Concatenation: "string text " + let + " string text"
// Template Literals: `string text ${expression} string text`


// Gib mit Hilfe von String Concatenation oder Template Literals einen Satz in der Konsole und in der HTML aus, der diese Variablen nutzt.

const vorName = "Kevin"
const nachName = "Mcallister"
let alter = 20
const geburtsort = "USA"
let groesse = "1.80m"
let gewicht = "85kg"
const hobby = "skaten"
const pcSpiel = "Doom"
const essen = "Pizza"
const sport = "Fahrrad fahren"
const marke = "Nike"
const jahreszeit = "Sommer"
const urlaubsort = "Italien"

let concat = vorName.concat(" ", nachName, " ist mein Name. Ich bin ", alter, " Jahre alt und lebe in den ", geburtsort, ". Ich bin ", groesse, " groß und ", gewicht, " schwer. Ich gehe gerne ", hobby, " und spiele ", pcSpiel, " auf meinem PC. Am liebsten esse ich ", essen, " und gehe danach ", sport, ". Ich trage gerne Klamotten von ", marke, " und liebe es in ", urlaubsort, " den ", jahreszeit, " zu verbringen")

let temLit = `Mein Name ist ${vorName} ${nachName} ,ich bin ${alter} Jahre alt und lebe in den ${geburtsort}. Ich bin ${groesse} groß und ${gewicht} schwer. Meine Hobbys sind ${hobby}, ${sport}, ${pcSpiel} spielen und ${essen} essen :D. Ich liebe den ${jahreszeit} und den verbringe ich am liebsten in ${urlaubsort}.`

console.log(concat)
console.log(temLit)

document.write(concat, "<br>", temLit, "<br>")