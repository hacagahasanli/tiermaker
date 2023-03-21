import { p_langs_thumbnail, console_thumbnail, ufc_thumbnail, sports_thumbnail } from "assets/index"


export const buttonValues = {
    SOD: "Save or Download",
    NORMAL_VIEW: "Normal View",
    RESET: "Reset",
    C_B_COLOR: "Change Background Color",
    C_B_COLOR_PICKER: "Close Background Color Picker",
    FULL_SCREEN: "Full Screen View"
}

export const colorSets = {
    S: "#FF7F7F",
    A: "#FFBF7F",
    B: "#FFDF7F",
    C: "#FFFF7F",
    D: "#BFFF7F",
    F: "#7FFF7F",
    G: "#7FFFFF"
}

export const defaultBoards = [
    {
        id: 1,
        bgColor: colorSets.S,
        value: 'S',
        items: []
    },
    {
        id: 2,
        bgColor: colorSets.A,
        value: "A",
        items: []
    },
    {
        id: 3,
        bgColor: colorSets.B,
        value: "B",
        items: []
    },
    {
        id: 4,
        bgColor: colorSets.C,
        value: "C",
        items: []
    },
    {
        id: 5,
        bgColor: colorSets.D,
        value: "D",
        items: []
    },
    {
        id: 6,
        bgColor: colorSets.F,
        value: "F",
        items: []
    },
    {
        id: 7,
        bgColor: colorSets.G,
        value: "G",
        items: []
    },
    {
        id: 8,
        diff: true,
        items: []
    }
]

export const tiersCategories = {
    p_lang: {
        items: [
            {
                id: 1,
                uri: "https://tiermaker.com/images/chart/chart/programming-languages--32215/assemblypng"
            },
            {
                id: 2,
                uri: "https://tiermaker.com/images/chart/chart/programming-languages--32215/bashpng"
            },
            {
                id: 3,
                uri: "https://tiermaker.com/images/chart/chart/programming-languages--32215/cpppng"
            },
            {
                id: 4,
                uri: "https://tiermaker.com/images/chart/chart/programming-languages--32215/cpng"
            },
            {
                id: 5,
                uri: "https://tiermaker.com/images/chart/chart/programming-languages--32215/csharppng"
            },
            {
                id: 6,
                uri: "https://tiermaker.com/images/chart/chart/programming-languages--32215/csspng"
            },
            {
                id: 7,
                uri: "https://tiermaker.com/images/chart/chart/programming-languages--32215/fortranpng"
            },
            {
                id: 8,
                uri: "https://tiermaker.com/images/chart/chart/programming-languages--32215/go-oldpng"
            },
            {
                id: 10,
                uri: "https://tiermaker.com/images/chart/chart/programming-languages--32215/haskellpng"
            },
            {
                id: 11,
                uri: "https://tiermaker.com/images/chart/chart/programming-languages--32215/htmlpng"
            },
            {
                id: 12,
                uri: "https://tiermaker.com/images/chart/chart/programming-languages--32215/javapng"
            },
            {
                id: 13,
                uri: "https://tiermaker.com/images/chart/chart/programming-languages--32215/javascriptpng"
            },
            {
                id: 14,
                uri: "https://tiermaker.com/images/chart/chart/programming-languages--32215/kotlinpng"
            },
            {
                id: 15,
                uri: "https://tiermaker.com/images/chart/chart/programming-languages--32215/latexpng"
            },
            {
                id: 16,
                uri: "https://tiermaker.com/images/chart/chart/programming-languages--32215/lisppng"
            },
            {
                id: 17,
                uri: "https://tiermaker.com/images/chart/chart/programming-languages--32215/luapng"
            },
            {
                id: 18,
                uri: "https://tiermaker.com/images/chart/chart/programming-languages--32215/matlabjpg"
            },
            {
                id: 19,
                uri: "https://tiermaker.com/images/chart/chart/programming-languages--32215/mysqlpng"
            },
            {
                id: 20,
                uri: "https://tiermaker.com/images/chart/chart/programming-languages--32215/perljpg"
            },
            {
                id: 21,
                uri: "https://tiermaker.com/images/chart/chart/programming-languages--32215/phppng"
            },
            {
                id: 22,
                uri: "https://tiermaker.com/images/chart/chart/programming-languages--32215/powershellpng"
            },
            {
                id: 23,
                uri: "https://tiermaker.com/images/chart/chart/programming-languages--32215/pythonpng"
            },
            {
                id: 24,
                uri: "https://tiermaker.com/images/chart/chart/programming-languages--32215/rpng"
            },
            {
                id: 25,
                uri: "https://tiermaker.com/images/chart/chart/programming-languages--32215/rubypng"
            },
            {
                id: 29,
                uri: 'https://tiermaker.com/images/chart/chart/programming-languages-33471/rustprogramminglanguageblacklogosvgpng.png'
            },
            {
                id: 27,
                uri: "https://tiermaker.com/images/chart/chart/programming-languages--32215/swiftpng"
            },
            {
                id: 28,
                uri: "https://tiermaker.com/images/chart/chart/programming-languages--32215/visualbasicjpg"
            }
        ]
    },
    console: {
        items: [
            {
                id: 1,
                uri: "https://tiermaker.com/images/chart/chart/best-gaming-consoles--453459/dreamcastpng.png"
            },
            {
                id: 2,
                uri: "https://tiermaker.com/images/chart/chart/best-gaming-consoles--453459/gamecubepng.png"
            },
            {
                id: 3,
                uri: "https://tiermaker.com/images/chart/chart/best-gaming-consoles--453459/n64png.png"
            },
            {
                id: 4,
                uri: "https://tiermaker.com/images/chart/chart/best-gaming-consoles--453459/nintendopng.png"
            },
            {
                id: 5,
                uri: "https://tiermaker.com/images/chart/chart/best-gaming-consoles--453459/ps1png.png"
            },
            {
                id: 6,
                uri: "https://tiermaker.com/images/chart/chart/best-gaming-consoles--453459/ps2png.png"
            },
            {
                id: 7,
                uri: "https://tiermaker.com/images/chart/chart/best-gaming-consoles--453459/ps3png.png"
            },
            {
                id: 8,
                uri: "https://tiermaker.com/images/chart/chart/best-gaming-consoles--453459/ps4-1png.png"
            },
            {
                id: 9,
                uri: "https://tiermaker.com/images/chart/chart/best-gaming-consoles--453459/ps5png.png"
            },
            {
                id: 10,
                uri: "https://tiermaker.com/images/chart/chart/best-gaming-consoles--453459/sega-genesis-1png.png"
            },
            {
                id: 11,
                uri: "https://tiermaker.com/images/chart/chart/best-gaming-consoles--453459/super-nintendopng.png"
            },
            {
                id: 12,
                uri: "https://tiermaker.com/images/chart/chart/best-gaming-consoles--453459/switchpng.png"
            },
            {
                id: 13,
                uri: "https://tiermaker.com/images/chart/chart/best-gaming-consoles--453459/wii-upng.png"
            },
            {
                id: 14,
                uri: "https://tiermaker.com/images/chart/chart/best-gaming-consoles--453459/wiipng.png"
            },
            {
                id: 15,
                uri: "https://tiermaker.com/images/chart/chart/best-gaming-consoles--453459/xbox-360png.png"
            },
            {
                id: 16,
                uri: "https://tiermaker.com/images/chart/chart/best-gaming-consoles--453459/xbox-onepng.png"
            },
            {
                id: 17,
                uri: "https://tiermaker.com/images/chart/chart/best-gaming-consoles--453459/xbox-xpng.png"
            },
            {
                id: 18,
                uri: "https://tiermaker.com/images/chart/chart/best-gaming-consoles--453459/xboxpng.png"
            },
            {
                id: 19,
                uri: "https://tiermaker.com/images/chart/chart/best-gaming-consoles--453459/zz1621004671sega-saturnpng.png"
            },
        ]
    },
    ufc_grapplers: {
        items: [
            {
                id: 1,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/203khabibnurmagomedovxdustinpoirierjpg.png"
            },
            {
                id: 2,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/230georgesst-pierrevsjohnyhendricksjpg.png"
            },
            {
                id: 3,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz16322371561ff80790-b292-11eb-befe-08530cb8be88jpg.png"
            },
            {
                id: 4,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz16322371562fecc082-2bda-4850-88f7-482a59ff6b56jpg.png"
            },
            {
                id: 5,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz16322371566caf1635-fad0-4592-b8ef-f1522a198ee6-xxxc01jonjonesjpg.png"
            },
            {
                id: 6,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz1632237157063chadmendesvsdarrenelkinsgallerypost0jpg.png"
            },
            {
                id: 7,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz1632237157080demetriousjohnsonvsrayborgjpg.png"
            },
            {
                id: 8,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz1632237157085cainvelasquezvsantoniosilva00jpg.png"
            },
            {
                id: 9,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz1632237157104natediazvsconormcgregor0jpg.png"
            },
            {
                id: 10,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz16322371571183571368jpg.png"
            },
            {
                id: 11,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz1632237157120aljamainsterlingjpg.png"
            },
            {
                id: 12,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz1632237157201810060413tonyfergusonxanthonypettisjpg.png"
            },
            {
                id: 13,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz1632237157303danielcormierxstipemiocicjpg.png"
            },
            {
                id: 14,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz16322371579164059080jpg.png"
            },
            {
                id: 15,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz163223715794ad3261-1422-0e8c-9ab4a5484fe7defajpg.png"
            },
            {
                id: 16,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz16322371581183575170jpg0jpg.png"
            },
            {
                id: 17,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz163223715812808319440jpg.png"
            },
            {
                id: 18,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz16322371581305737154jpg.png"
            },
            {
                id: 19,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz16322371581330458448jpg.png"
            },
            {
                id: 20,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz1632237158brandon-moreno-deiveson-figueiredo-ufc-263-2jpg.png"
            },

            {
                id: 21,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz1632237158brock-lesnar-ufc-herojpg.png"
            },
            {
                id: 22,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz1632237158gettyimages-1096757524jpg.png"
            },
            {
                id: 23,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz1632237158gettyufc-252-miocic-v-cormier-3spogyi1266544931jpg-js602205931-e1598786611476jpg.png"
            },
            {
                id: 24,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz1632237159gettyimages-1159311100jpg.png"
            },
            {
                id: 25,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz1632237159gilbertburnsheroupdatedjpg.png"
            },
            {
                id: 26,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz1632237159hi-res-a43aca48d177e60afcc5a86eb277a417cropnorthjpg.png"
            },
            {
                id: 27,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz1632237159ipng.png"
            },
            {
                id: 28,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz1632237159porier-dustinheroupdated-012621png.png"
            },
            {
                id: 29,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz1632237159telemmglpict000146146508transnvbqzqnjv4bqd42x-0xugkdu9zkvrtls3zprxc-rkxpsenzsjucqgejpeg.png"
            },
            {
                id: 30,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz1632237159thekoreanzombieheroupdatedjpg.png"
            },
            {
                id: 31,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz1632237160usatoday160838290jpg.png"
            },
            {
                id: 32,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz16323214881201jpg.png"
            },
            {
                id: 33,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz163232148878wk-6kl400x400jpg.png"
            },
            {
                id: 34,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz1632321488hi-res-caf35355ef5942c895feea4f5cddf13acropnorthjpg.png"
            },
            {
                id: 35,
                uri: "https://tiermaker.com/images/chart/chart/best-ufc-grapplers-ever-1250559/zz1632321488usatoday14157344jpg.png"
            },

        ]
    },
    all_sports: {
        items: [
            {
                id: 1,
                uri: 'https://tiermaker.com/images/chart/chart/all-good-sports-51616/105927711-two-badminton-racquets-or-rackets-with-shuttlecock-birdie-line-art-vector-icon-for-sports-apps-and-wjpg'
            },
            {
                id: 2,
                uri: 'https://tiermaker.com/images/chart/chart/all-good-sports-51616/1163943thumbpng'
            },
            {
                id: 3,
                uri: 'https://tiermaker.com/images/chart/chart/all-good-sports-51616/41syqewawaljpg'
            },
            {
                id: 4,
                uri: 'https://tiermaker.com/images/chart/chart/all-good-sports-51616/61pdhaieyklsx569picountsize-2topright00aa569sh20jpg'
            },
            {
                id: 5,
                uri: 'https://tiermaker.com/images/chart/chart/all-good-sports-51616/71q6bi6zzolsx466jpg'
            },
            {
                id: 6,
                uri: 'https://tiermaker.com/images/chart/chart/all-good-sports-51616/8bfed7310b382146b2ace17e35d7636bpng'
            },
            {
                id: 7,
                uri: 'https://tiermaker.com/images/chart/chart/all-good-sports-51616/95798942-vector-cycling-logo-icon-emblem-design-template-human-silhouette-on-colorful-bike-overlapping-isolatjpg'
            },
            {
                id: 8,
                uri: 'https://tiermaker.com/images/chart/chart/all-good-sports-51616/download-10jpg'
            },
            {
                id: 9,
                uri: 'https://tiermaker.com/images/chart/chart/all-good-sports-51616/download-11jpg'
            },
            {
                id: 10,
                uri: 'https://tiermaker.com/images/chart/chart/all-good-sports-51616/download-12jpg'
            },
            {
                id: 11,
                uri: 'https://tiermaker.com/images/chart/chart/all-good-sports-51616/download-13jpg'
            },
            {
                id: 12,
                uri: 'https://tiermaker.com/images/chart/chart/all-good-sports-51616/download-1png'
            },
            {
                id: 13,
                uri: 'https://tiermaker.com/images/chart/chart/all-good-sports-51616/download-2png'
            },
            {
                id: 14,
                uri: 'https://tiermaker.com/images/chart/chart/all-good-sports-51616/download-3png'
            },
            {
                id: 15,
                uri: 'https://tiermaker.com/images/chart/chart/all-good-sports-51616/download-4jpg'
            },
            {
                id: 16,
                uri: 'https://tiermaker.com/images/chart/chart/all-good-sports-51616/download-4png'
            },
            {
                id: 17,
                uri: 'https://tiermaker.com/images/chart/chart/all-good-sports-51616/download-5jpg'
            },
            {
                id: 18,
                uri: 'https://tiermaker.com/images/chart/chart/all-good-sports-51616/download-6jpg'
            },
            {
                id: 19,
                uri: 'https://tiermaker.com/images/chart/chart/all-good-sports-51616/download-7jpg'
            },
            {
                id: 20,
                uri: 'https://tiermaker.com/images/chart/chart/all-good-sports-51616/download-8jpg'
            },
            {
                id: 21,
                uri: 'https://tiermaker.com/images/chart/chart/all-good-sports-51616/download-9jpg'
            },
            {
                id: 22,
                uri: 'https://tiermaker.com/images/chart/chart/all-good-sports-51616/downloadpng'
            },
        ]
    }
}

export const colourPalattes = {
    A1: "#1A1A17",
    A2: '#F7F7F7',
    A3: '#CFCFCF',
    A4: '#858585',
    A5: '#3B3B3B',
    A6: '#BF7FBF',
    A7: '#FF7FFF',
    A8: '#7F7FFF',
    A9: '#7FBFFF',
    A10: '#7FFFFF',
    A11: '#7FFF7F',
    A12: '#BFFF7F',
    A13: '#FFFF7F',
    A14: '#FFDF7F',
    A15: '#FFBF7F',
    A16: '#FF7F7F'
}

export const cardTiers = [
    {
        id: "p_lang",
        name: "Programming Languages",
        thumbnail: p_langs_thumbnail
    },
    {
        id: 'console',
        name: "Gaming Consoles",
        thumbnail: console_thumbnail
    },
    {
        id: 'ufc_grapplers',
        name: 'Best UFC Grapplers',
        thumbnail: ufc_thumbnail
    },
    {
        id: 'all_sports',
        name: "All Well-known Sports",
        thumbnail: sports_thumbnail
    }
] 