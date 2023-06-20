function randomDate() {
	//generates a random date

	const year = Math.floor(Math.random() * 2000);

	const eras = [
		'Cumbio era',
		'Pre-Moon era',
		'Vasectomy rennaissance era',
		'Post-Vasectomy era',
		'Stream era',
		'Post-Stream era',
		'Chat era',
		'Post-Chat era',
		'Emote era',
		'Post-Emote era',
	];

	const era = eras[Math.floor(Math.random() * eras.length)];

	return `${year}, ${era}`;
}


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

const wisdom = [
	`Moonmoon's vast wisdom,
Streaming tales of knowledge deep,
Bald head shines so bright.`,

	`Twitch's wise old sage,
Moonmoon shares his knowledge wide,
Bald head, thoughts untamed.`,

	`In chat, minds expand,
Moonmoon's wisdom flows like stream,
Bald beacon of light.`,

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

	`In the realm of Twitch,
Moonmoon shares his wisdom,
Haikus for all tasks.`,

	`Nipple itches deep,
Gentle strokes, relief bestowed,
Scratch with grace, friend.`,

	`Bald head shining bright,
Wisdom gleams in moonlit stream,
Embrace your baldness.`,

	`Ball itch is a plight,
Patience is key, my friends,
Resist urge to scratch.`,

	`Streaming all night long,
Energy wanes, mind grows weak,
Hydrate, refuel.`,

	`Game grips tight, tense hands,
Stretch and flex, find equilibrium,
Relax, improve aim.`,

	`Moonlight on plush chair,
Posture matters, oh so much,
Sit up tall, proud streamer.`,

	`Chat's endless emotes,
Laughter echoes through the stream,
Share joy with emotes.`,

	`Don't forget to eat,
Nibble on snacks, fuel the grind,
Keep hunger at bay.`,

	`Sleepless nights, fatigue,
Rest your weary eyes, streamer,
Dreams fuel creativity.`,

	`Tips for life's journey,
Moonmoon's haikus guide the way,
Balance, peace, and growth.`,

	`Sitting at my desk,
Health whispers in my ear's reach,
Stretch, breathe, find balance.`,

	`Bulging waistline groans,
Posture suffers, body moans,
Move, hydrate, thrive.`,

	`Desk bound, mind on fire,
Step away, nature's attire,
Refreshed, create higher.`,

	`Fingers dance on keys,
Eyes locked on screen's mystery,
Break, blink, set eyes free.`,

	`Snacks tempt and beckon,
Choose wisely, nourish within,
Fuel for wins and grins.`,

	`Stretch like morning sun,
Limbs untangle, breath begun,
Rejuvenation.`,

	`Water's pure embrace,
Hydration's vital chase,
Desk wellness, grace.`,

	`Mindful, be aware,
Balance work and self with care,
Desk health is a dare.`,

	`Time ticks, hours pass,
Stand tall, give your back some sass,
Ergonomics class.`,

	`Moonmoon's desk decree,
Embrace wellness, set mind free,
Stream health, let it be.`,
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

const soulful = [
	`Silent whispers flow,
Within my chubby embrace,
Soul dances on stream.`,

	`Bald head, shining bright,
Heart full of passion and grace,
Soulful tunes take flight.`,

	`Emotes fill the chat,
My stream is a symphony,
Soul's melody sings.`,

	`In pixels, I share,
Embracing souls near and far,
Connection is real.`,

	`Plump, yet soulful gaze,
Streaming with love and laughter,
My essence takes stage.`,

	`Moonlight's gentle touch,
Streaming with a soulful fire,
Community's heart.`,

	`Through laughter and tears,
My stream echoes with spirit,
Soul's journey unveiled.`,

	`In the realm of games,
Soulful stories come alive,
My voice finds its home.`,

	`Beneath the moon's gaze,
An old streamer finds solace,
Soul's warmth flows freely.`,

	`Aging, but alive,
Fat, bald, and soulful I stream,
Eternal fire burns.`,

	`My pixels flicker,
A soulful streamer's journey,
Emotes light my path.`,

	`Whispers in the night,
My bald head shines with wisdom,
Soulful tales unfold.`,

	`Moonlight fills my room,
A streamer's heart beats softly,
Soulful tunes unite.`,

	`The chat scrolls so fast,
Yet, my soul dances with joy,
Embracing each word.`,

	`In my pixel world,
A moon reflects deep within,
Soulful whispers rise.`,

	`Old, but not feeble,
Bald head shining with secrets,
Soulful streams endure.`,

	`My weight can't hold back,
The depths of my soul's passion,
Twitch echoes with love.`,

	`Silent moonlit nights,
My soul, a beacon of light,
Guiding lost wanderers.`,

	`Whispers of my past,
Streaming soul, bound to the screen,
Moonmoon's legacy.`,

	`Beneath my bald dome,
Wisdom and passion unite,
Soul's flame never fades.`,

	`Chat's laughter resounds,
In my plump, jolly belly,
Soulful joy we share.`,

	`Emotes paint the chat,
Embracing my pudgy frame,
Soul's expression blooms.`,

	`Silent streams at dawn,
Whispering secrets of life,
Soulful solitude.`,

	`Glasses frame my eyes,
Reflecting depths of my soul,
Serenade through streams.`,

	`Weighty, but buoyant,
My soul carries me forward,
Streaming tales of old.`,
]


const userSubmitted = [
	`teach man to cum
never hungry

	PersonNo4`,

	`Never fear the fall
Only fear the time you lose
Another reset

	Morflow`,

	`No games to stream now
Play Metal Gear Solid Four?
Increase the timer

	Morflow`,

	`Head empty like scalp
Find yourself within the void
God Gamer returns

	SV`,

	`fifth poop of the day
no toilet paper in sight
Must eat poop to clean

	Palaalia`,

	`Upon shining hill,
Heavens' light blinds the masses,
No blinds in bald sight.

	simpliv`,

	`Fresh Unblemished Snow
From Beneath, a patch of grass
Upon this bald hill

	piano`,

	`waves flow
always opposing forces
animation wrong

	icantread`,

	`Borpa cum today
Borpa no cum tomorrow
Borpa cum today

	CaptHughJass`,

	`Words be incoherent 
The mind fort knox
I clint eastwood

	icantread`,


	`Always wrong you are
There must always be opposing
Abaft your self now
	
	icantread`,

	`Moon runs in the dark
Days later, his new best time
Clint is still faster
	
	arufa`,

	`Fantastic cum burst
An unreal lil pup swallows
at the perfect pace

	Veloso`

	`stupidity known
Harmonius existence 
A vasectomy

	socskal`,

	`Ascent to the sky
Marred by a single mistake
We begin again

	bundler`,

	`High dampness baldness
why a little, mad pup trots
before today's stream

	ඞrufa`,

	`Yells heard from afar
A man believes he is right
The hairline recedes

	ඞrufa`,
]
for (let i = 0; i < userSubmitted.length; i++) {
	userSubmitted[i] = userSubmitted[i] + '\n\t' + randomDate();
}

let combined = [
	...angryAtChat,
	...wisdom,
	...advice,
	...vasectomy,
	...soulful
].sort(() => Math.random() - 0.5);

combined = [
	...userSubmitted,
	...combined,
]

export const haikus = combined;

combined.splice(0, 0,
	`Submit new haikus,
Share your wisdom with the stream,
Subscriber discord.

#arts-and-crafts / #Haiku`);


combined.splice(0, 0,
	`${userSubmitted.length} haikus,
made by the community,
number keeps growing.
`);