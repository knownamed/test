const getButtons = () => document.querySelectorAll('.Mines_mine__Iglsf');
const chooseButtonsWithoutBomb = (buttons) => {
    const buttonsWithoutBomb = Array.from(buttons).filter(btn => !btn.textContent.includes('@'));
    return new Set([...Array(5)].map(() => buttonsWithoutBomb[Math.floor(Math.random() * buttonsWithoutBomb.length)]));
};
const highlightButtonsGreen = (buttonsToHighlight) => {
    buttonsToHighlight.forEach(btn => btn.style.backgroundColor = 'green');
};
const runHack = () => {
    const allButtons = getButtons();
    const ButtonsWithoutBomb = chooseButtonsWithoutBomb(allButtons);
    highlightButtonsGreen(ButtonsWithoutBomb);
};
runHack();