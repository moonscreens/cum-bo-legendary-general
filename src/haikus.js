const baldFatOld = [
    `Moonmoon entertains,
Chubby and bald, he streams on,
Laughs echo brightly.`,

    `Twitch's jolly moon,
Chubby cheeks, laughter consumes,
Streaming joy he brings.`,

    `Bald head shines so bright,
Moonmoon's voice fills the night sky,
Fans rejoice with glee.`,

    `Moonmoon's belly sways,
Laughter ripples through the stream,
Hearts warmed by his charm.`,

    `In his gaming den,
Moonmoon, a Twitch delight,
Laughs shake the server.`,

    `Fat and bald he stands,
Moonmoon, a beacon of fun,
Streaming brings us joy.`,

    `Chuckles from the void,
Moonmoon's stream, a sanctuary,
Baldness fuels his might.`,

    `Twitch's round hero,
Moonmoon's laughter takes control,
Fat and bald, love grows.`,

    `Moonmoon on Twitch's stage,
Chubby cheeks, a comic sage,
Laughs erupt, hearts engage.`,

    `Bald head, radiant,
Moonmoon's streams bring mirth and cheer,
Fans embrace the moon.`
];

const angryAtChat = [
    `Moonmoon rages fierce,
    Bald head gleaming in the light,
    Chat fuels his anger.`,

    `Twitch chat provokes,
Fat and bald, Moonmoon seethes,
Emotes flow like tears.`,

    `Moonmoon, the streamer,
Chat trolls, mocking his physique,
Rage consumes his soul.`,

    `Bald head glistens bright,
Moonmoon's anger takes flight,
Chat's words fuel his spite.`,

    `Old and overweight,
Moonmoon's wrath can't abate,
Twitch chat bears his weight.`,

    `Moonmoon's fiery glare,
Bald and round, he cannot bear,
Twitch chat's taunting snare.`,

    `Stream filled with disdain,
Moonmoon, bald and full of pain,
Chat's insults remain.`,

    `Angry streamer's plight,
Moonmoon's rage burns through the night,
Bald head reflects light.`,

    `Moonmoon, overweight,
Twitch chat fuels his deep hate,
Bald and raging fate.`,

    `Bald and fat, Moonmoon,
Twitch chat fuels his furious tune,
Madness blooms too soon.`
];

const goodAtGames = [
    `Moonmoon's bald head shines,
Streaming mastery displayed,
Victorious games.`,

    `On Twitch he sits proud,
Old and wise, a gaming sage,
Moonmoon's reign begins.`,

    `Fierce skills on display,
Fat and bald, a gaming god,
Moonmoon conquers all.`,

    `Chat erupts in cheer,
Moonmoon's gameplay astounds,
Victory is near.`,

    `In pixels he thrives,
Master of virtual worlds,
Moonmoon's dominance.`,

    `A streamer's delight,
Moonmoon's expertise amazes,
Fat, bald, and divine.`,

    `Silent but deadly,
Moonmoon's gaming prowess,
Old streamer's triumph.`,

    `Bald head, no regret,
Moonmoon's gaming expertise,
A legend is born.`,

    `Plump and bald he streams,
Moonmoon's gaming greatness shines,
Twitch fans are in awe.`,

    `Through pixels he soars,
Moonmoon, the gaming titan,
Old, fat, and bald star.`
]

const wisdom = [
    `Moonmoon's vast wisdom,
Streaming tales of knowledge deep,
Bald head shines so bright.`,

    `Old and fat he sits,
Streaming wisdom through the night,
Moonmoon's radiant.`,

    `Twitch's wise old sage,
Moonmoon shares his knowledge wide,
Bald head, thoughts untamed.`,

    `In chat, minds expand,
Moonmoon's wisdom flows like stream,
Bald beacon of light.`,

    `A bald moonlight glow,
Fat and wise, Moonmoon's stream shines,
Knowledge, a river.`,

    `Stream's currents whisper,
Moonmoon's wisdom fills the air,
Bald truth spoken loud.`,

    `A moon's ancient face,
Bald, fat, and filled with wisdom,
Streamer's knowledge glows.`,

    `Moonmoon's stream unfolds,
Ancient tales and knowledge old,
Bald head, streams of gold.`,

    `Bald streamer, Moonmoon,
Knowledgeable and profound,
Wisdom never wanes.`,

    `Old and wise, Moonmoon,
Streaming wisdom through the night,
Baldness, his power.`
]

const advice = [
    `Listen, young ones,
Avoid eating spicy snacks,
To spare your butts' wrath.`,

    `Embrace your baldness,
Shine like a polished beacon,
Hats are overrated.`,

    `Don't be a stream snipe,
Fortune favors those patient,
Patience is a gift.`,

    `Games won't fix your life,
Seek a balance, find your joy,
Real friends don't lag.`,

    `Treat trolls with kindness,
They're lost souls seeking laughter,
Your chat reflects you.`,

    `Toxicity, no!
Spread positivity, bro,
Banhammer shall strike.`,

    `Stream late into night,
But remember sleep's delight,
Stream health, stay bright.`,

    `Beware the dark web,
Protect your passwords with care,
Chat is full of spies.`,

    `When raiding small streams,
Lift spirits, spread love and cheer,
Moonmoon's here, my dears.`,

    `In the realm of memes,
Embrace the silly and dumb,
Laughter's therapy.`,
]

const vasectomy = [
    `MoonMoon's rage flows on,
Angry words from his chat flood,
Get snipped, no more trolls.`,

    `In the chat you lurk,
    Vasectomy you need,
    Silence your offspring.`,

    `Words can't hurt my soul,
Snip those cords, let the hate go,
    Vasectomy, bro.`,

    `Trolls breeding like flies,
    Vasectomy, their demise,
    Chat's peace shall arise.`,

    `Angry streamer roars,
Vasectomy for trolls,
Silence, he implores.`,

    `My words cut you deep,
A vasectomy would keep,
Silence, peace, and sleep.`,

    `Troll, cease your typing,
Vasectomy, no more griping,
Silence, pure delight.`,

    `Vasectomy plea,
Barren chat, set us all free,
Peace, tranquility.`,

    `Anger fills my screen,
Vasectomy, I deem,
Silence reigns supreme.`,

    `Troll's words sting and bite,
Vasectomy, end the fight,
Silence, find your light.`
];

const combined = [
    ...angryAtChat,
    ...wisdom,
    ...advice,
    ...vasectomy
]

export const haikus = combined.sort(() => Math.random() - 0.5);