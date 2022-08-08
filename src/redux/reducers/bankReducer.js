import { actions } from "../constants/constants";

const category1 = [{
    W: { title: "Heater 1", src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
    Q: { title: "Heater 2", src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
    E: { title: "Heater 3", src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
    A: { title: "Heater 4", src: ' https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
    S: { title: "Clap", src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
    D: { title: "Open HH", src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
    Z: { title: "Kit n' Hat", src: ' https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
    X: { title: "Kick", src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
    C: { title: "Closed HH", src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
    categoryTitle: "Heater Kit",
    categoryNo: 0
}]

const category2 = [{
    W: { title: "Chord 1", src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' },
    Q: { title: "Chord 2", src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3' },
    E: { title: "Chord 3", src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3' },
    A: { title: "Shaker", src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' },
    S: { title: "Open HH", src: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' },
    D: { title: "Closed HH", src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' },
    Z: { title: "Punchy Kick", src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' },
    X: { title: "Side Stick", src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' },
    C: { title: "Snare", src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' },
    categoryTitle: "Smooth Piano Kit",
    categoryNo: 1
}]

const category = [...category1, ...category2];

export default function bankReducer(state = { category: category[0] }, action) {
    switch (action.type) {
        case actions.TOGGLE_BANK: return { category: category[action.categoryNo ? 1 : 0] };
        default: return state;
    }
}
