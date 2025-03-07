window.onload = function() {
    const audio = document.getElementById('audio');
    audio.play(); 

    setInterval(calcularTempo, 1000);

    calcularTempo();
};

function calcularTempo() {
    const dataInicio = new Date('2025-03-02T14:29:10');
    const hoje = new Date();
    
    let anos = hoje.getFullYear() - dataInicio.getFullYear();
    let meses = hoje.getMonth() - dataInicio.getMonth();
    let dias = hoje.getDate() - dataInicio.getDate();
    let horas = hoje.getHours() - dataInicio.getHours();
    let minutos = hoje.getMinutes() - dataInicio.getMinutes();
    let segundos = hoje.getSeconds() - dataInicio.getSeconds();

    if (segundos < 0) {
        minutos--;
        segundos += 60;
    }
    if (minutos < 0) {
        horas--;
        minutos += 60;
    }
    if (horas < 0) {
        dias--;
        horas += 24;
    }
    if (dias < 0) {
        meses--;
        const ultimoMes = new Date(hoje.getFullYear(), hoje.getMonth(), 0); // Último dia do mês anterior
        dias += ultimoMes.getDate();
    }
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    document.getElementById('contador').textContent = `${anos} anos, ${meses} mêses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos!`;
}
