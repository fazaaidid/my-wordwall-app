function showLevel(level) {
    const links = {
        1: 'https://wordwall.net/resource/74915996/operasi-bilangan-bulat-level-1-a410229105',
        2: 'https://wordwall.net/resource/75795940',
        3: 'https://wordwall.net/resource/75796130',
        4: 'https://wordwall.net/resource/75796379',
        5: 'https://wordwall.net/resource/75796706',
    };
    const frame = document.getElementById('wordwallFrame');
    frame.src = links[level];
}
