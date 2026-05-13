// Inventário inicial
let mochila = ["Tocha", "Corda"];
let aventureiro = 50;
let orc = 50;
let turno = 1;

// Itens do baú
let bau = ["Espada de Ouro", "Poção de Cura", "Escudo Quebrado", "Gema Preciosa"];

console.log("---- SE PREPARE PARA A BATALHA! ----");
console.log("Itens na mochila do Aventureiro: ");

for (let i = 0; i < mochila.length; i++) {
    console.log(`- ${mochila[i]}`);
}

while (aventureiro > 0 && orc > 0) {
    console.log(`Turno ${turno}`);

    // Ataque do Aventureiro
    let ataqueAventureiro = Math.floor(Math.random() * (12 - 5 + 1) + 5);
    if (ataqueAventureiro > 10) {
        console.log("Ataque crítico do Aventureiro!");
    }
    orc -= ataqueAventureiro;
    console.log(`O Aventureiro ataca o Orc e causa ${ataqueAventureiro} de dano. Vida do Orc cai para: ${orc}`);

    // Ataque do Orc
    if (orc > 0) {
        let ataqueOrc = 8;
        aventureiro -= ataqueOrc;
        console.log(`O Orc ataca o Aventureiro e causa ${ataqueOrc} de dano. Vida do Aventureiro cai para: ${aventureiro}`);
    }

    turno++;
};
console.log("\n------------------------------------------")
if (aventureiro > 0) {
    console.log("O Aventureiro venceu a batalha. PARABÉNS!");

    console.log("\n--- Coletando itens do baú ---");
    for (let i = 0; i < bau.length; i++) {
        let item = bau[i];
        if (item === "Escudo Quebrado") {
        console.log("Item lixo descartado: " + item);
        } else {
            mochila.push(item);
            console.log("Você coletou: " + item);
        }
    }

    console.log("\n--- Itens finais na mochila ---");
    for (let i = 0; i < mochila.length; i++) {
        console.log("Mochila: " + mochila[i]);
    };

} else {
    console.log("O Orc venceu a batalha. TENTE NOVAMENTE!");
};