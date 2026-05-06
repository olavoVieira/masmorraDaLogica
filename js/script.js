let aventureiro = 50;
let orc = 50;
let turno = 1;

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
} else {
    console.log("O Orc venceu a batalha. TENTE NOVAMENTE!");
};