let prinderNamespace = {
    count: 0
}

let questions = [
    //Intro/tutorial text & img
    {
        isCon: null,
        text: "Prinde la timp impostorii",
        img: "https://c0.wallpaperflare.com/preview/71/194/487/call-center-operator-adult.jpg"
    },
    {
        isCon: null,
        text: "Ai 10 secunde să alegi...",
        img: "https://c1.wallpaperflare.com/preview/244/434/329/calling-car-communication-contact.jpg"
    },
    {
        isCon: null,
        text: "OK - glisare în dreapta",
        img: "https://publicdomainvectors.org/photos/mono-tab-duplicate.png"
    },
    {
        isCon: null,
        text: "sau Escrocherie - în stânga",
        img: "https://svgsilh.com/svg/309080.svg"
    },
    {
        isCon: null,
        text: "Glisează ca să incepi jocul",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/01/Gestures_Flick.png"
    },
    //Start real questions, after tutorial/intro
    {
        isCon: false,
        text: "Ați facut un transfer 30 de minute în urma?",
        img: "https://c7.uihere.com/files/352/279/653/man-male-hand-holding.jpg"
    },
    {
        isCon: true,
        text: "Dați-mi va rog pinul, el se afla in spatela cardului",
        img: "https://c1.wallpaperflare.com/preview/247/790/561/agency-business-cafe-computer.jpg"
    },
    {
        isCon: true,
        text: "Eu is Ilie, da pinu ciuvak",
        img: "https://p0.pikrepo.com/preview/689/419/woman-calling-on-smartphone.jpg"
    },
    {
        isCon: false,
        text: "Care e cuvintul secret",
        img: "https://cdn.pixabay.com/photo/2020/04/06/08/05/mask-5008669_960_720.jpg"
    }
];

let questionsWin = {
    isCon: null,
    text: "Felicitari, ai cistigat",
    img: "https://storage.needpix.com/rsynced_images/the-best-2634390_1280.png"
};
let questionsLoose0 = {
    isCon: null,
    text: "Ai fost victima unui imporstor :(",
    img: "https://storage.needpix.com/rsynced_images/have-money-3020814_1280.jpg"
};
let questionsLoose1 = {
    isCon: null,
    text: "Ai incurcat angajatul bancii cu un impostor :(",
    img: "https://storage.needpix.com/rsynced_images/have-money-3020814_1280.jpg"
};
let questionsLoose2 = {
    isCon: null,
    text: "Timpul a expirat :(",
    img: "https://storage.needpix.com/rsynced_images/have-money-3020814_1280.jpg"
};

