const authorStart = '\twritten by';

function getCurrentMonth() {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'Decemeber'
	];
	return months[new Date().getMonth()];
}

function getCurrentFormatedMonthDay() {
	const day = new Date().getDate();
	const suffix = getDaySuffix(day);
	return `${getCurrentMonth()} ${day}${suffix}`;
}

function getDaySuffix(day) {
	const suffixes = ['st', 'nd', 'rd'];
	const suffix = day > 3 ? 'th' : suffixes[day - 1];
	return suffix;
}

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

${authorStart} PersonNo4`,

	`Never fear the fall
Only fear the time you lose
Another reset

	Morflow`,

	`No games to stream now
Play Metal Gear Solid Four?
Increase the timer

${authorStart} Morflow`,

	`Head empty like scalp
Find yourself within the void
God Gamer returns

${authorStart} SV`,

	`fifth poop of the day
no toilet paper in sight
Must eat poop to clean

${authorStart} Palaalia`,

	`Upon shining hill,
Heavens' light blinds the masses,
No blinds in bald sight.

${authorStart} simpliv`,

	`Fresh Unblemished Snow
From Beneath, a patch of grass
Upon this bald hill

${authorStart} piano`,

	`waves flow
always opposing forces
animation wrong

${authorStart} icantread`,

	`Borpa cum today
Borpa no cum tomorrow
Borpa cum today

${authorStart} CaptHughJass`,

	`Words be incoherent 
The mind fort knox
I clint eastwood

${authorStart} icantread`,


	`Always wrong you are
There must always be opposing
Abaft your self now
	
${authorStart} icantread`,

	`Moon runs in the dark
Days later, his new best time
Clint is still faster
	
${authorStart} arufa
	Speedrunning Era`,

	`Fantastic cum burst
An unreal lil pup swallows
at the perfect pace

${authorStart} Veloso`,

	`stupidity known
Harmonius existence 
A vasectomy

${authorStart} socskal`,

	`Ascent to the sky
Marred by a single mistake
We begin again

${authorStart} bundler
	"Only Up!" Era`,

	`High dampness baldness
why a little, mad pup trots
before today's stream

${authorStart} Veloso`,

	`Yells heard from afar
A man believes he is right
The hairline recedes

${authorStart} ඞrufa`,

	`A climb to the peak.
Have we met the warmth of the sun?
alas, no curtains

${authorStart} MormonJeezy`,

	`I saw this on stream
I was told to come post here
Here is my haiku

${authorStart} Willster`,

	`unsure if farted
run hand through the ass canyon
hand comes back wetter

${authorStart} NannerFone`,

	`If chat notices
Pay tribute to missing PLEAD
NaM NaM NaM NaM NaM

${authorStart} ඞrufa`,

	`Bald man yells at chat
Taunted era begins now
Let the rage flow free

${authorStart} Atrick`,

	`The hot wind blowing
Jagged Lines across the sand
The crumbling buildings

${authorStart} Piano
	Metal-Gear-Rising Era`,

	`It never gets old.
When I see it, I will click.
Funny purple face.

${authorStart} showshank`,

	`Meandering thoughts
The references, bald man
At the perfect poop

${authorStart} Kia176`,

	`Game never done quick
Bald man climbs the green bean stalk 
My dad died, cancer

${authorStart} REFERENCE
	"Only Up!" Era`,

	`Tape reads the channel
He sees twenty three more posts
Back to janny work
	
${authorStart} Willster`,

	`A darkening moon
"Listen Chat, Vasectomy"
A Balding wolf howls.

${authorStart} Piano`,

	`baldness overwhelms
the emptiness of no hair
reflection bright

${authorStart} Dr Golfer`,

	`vacation retreat,
your fans await your visit,
Moon, come to brazil.

${authorStart} MormonJeezy`,

	`metal gear solid
playing next thursday for stream
disappointment soon

${authorStart} Shala`,

	`In jesus' hand
A lazy baldie runs
A crypto farm game

${authorStart} langys
	"Only Up!" Era`,

	`A puzzle ordeal
From the land of the red sun
Countdown to escape

${authorStart} jesuscar
	Mario Era`,

	`The snipping of ties
No more little billies to come
Peace of mind, at last

${authorStart} JohnSoulz`,

	`下痢がある
トイレ使わず
刹那主義
	
${authorStart} Florburz`,

	`Moon sinks out of sight
A hundred harvests consumed
Burden borne by mods

${authorStart} Arufa`,

	`Claymore in the woods
Wait for enemy to tread
Joyful explosion

${authorStart} Willster
	Poopfist Era`,

	`missed the jump, fall far
a reset is imminent
back to favela

${authorStart} Jackrc11
	"Only Up!" Era`,

	`Oh, do not look up
we need to get to the top
I'm sure we'll make it

${authorStart} MormonJeezy
	"Only Up!" Era`,

	`Ghost in the corner
A soulfully green visage
I hate this camera

${authorStart} Piano`,

	`No more swimmers swim
Just a snip and a stitch and done
No more babies now

${authorStart} JohnSoulz`,

	`its named only up
but bald man keeps on falling
i am unsubbing

${authorStart} Magikarp
	"Only Up!" Era`,

	`An arcane spell chant:
"Vasecitmous MAXIMUS!"
The bald wizard's spell

${authorStart} Piano`,

	`a tumble down low
escape, main menu, hit play
time for the guitar

${authorStart} NannerFone
	"Only Up!" Era`,

	`Pressure change, a push
Through a tiny opening, a flow
Forces move things forth

${authorStart} JohnSoulz`,

	`A stupid question
Vasectomy is shouted
Prime pleb says taunted

${authorStart} Weirdough`,

	`sun shines from window
same time each day it blinds chat 
he will not get blinds

${authorStart} Jon on Drums`,

	`it's very hard to
make a choice when you are not
sure where it will lead

${authorStart} MormonJeezy
	"Only Up!" Era`,

	`wonder about game
ask the bald man about it
my speakers shatter

${authorStart} NannerFone`,

	`Old Snake, last stand
The world burns, but he fights on
A shadow in the night, a legend
	
${authorStart} JohnSoulz
	MGS4 Era`,

	`he wont learn ball skip
he claims it wont save him time
god hes fucking dumb

${authorStart} Magikarp
	"Only Up!" Era`,

	`"Ass or tits?" they ask
they know not the true answer
"Hair", moonmoon replies

${authorStart} SV`,

	`A silent toot, then swish
A warm liquid runs down your leg
Oh no, not again!

${authorStart} JohnSoulz`,

	`submarine missing
no gamers on the vessel
should go only up!

${authorStart} segfault_irl
	"Only Up!" Era`,

	`"what is a haiku?"
i ask Google and then search
right by accident

${authorStart} Jackrc11`,

	`Chun Li mah waifu
Got her to platinum 1
with Spining Bird Kicks

${authorStart} Water Boiled Pizza
	SF6 Era`,

	`"Use the beer box moon"
A chatter poses a tip
"VASCETOMY!" yelled

${authorStart} Willster
	"My Summer Car" Era`,

	`A shining dome of skin
A head free to roam the world
Of hair to worry about

${authorStart} JohnSoulz`,

	`the young one wakes up
who does he see before him?
a banana head

${authorStart} Jesuscar`,

	`We gaze down and think,
"How high a climb it has been"
To brazil, we came.

${authorStart} CaptHughJass
	"Only Up!" Era`,

	`cock and ball torture
what a fun activity
okay here I go

${authorStart} MeActually`,

	`head of a porpoise
puzzles confuse the old brain
still loading; tortoise

${authorStart} 2z,
	"Only Up!" Era`,

	`the thinking man's snack
yes, salt and vinegar chips
want barbeque, billy?

${authorStart} Jesuscar`,

	`Sack stuck on the thigh
Time for private adjustment
That's so much better

${authorStart} CaptHughJass`,

	`The nerd condemns nerds
Adhesive losing its grip
Tape shut the fuck up

${authorStart} Arufa
	Cyberbully Era`,

	`Bald man tries his best
But Timer does not go down
It goes only up

${authorStart} Winkyface
	"Only Up!" Era`,

	`A grim prediction
Bald Man sits down to start stream
HDMI lost

${authorStart} Piano`,

	`Green frog cries and scream,
Social understanding lost,
Incorect usage.

${authorStart} a random pepoYELL fan
	Emote Era`,

	`streamer losing hope
pe po yell for morale boost
it will never work

${authorStart} NannerFone
	Emote Era`,

	`Pep-double-u post,
The streamer is unaware,
Soon the man will know

${authorStart} Willster`,

	`I see a NaM post
I too, am compelled to post
Real ones go for 10

${authorStart} Willster`,

	`Ten minute timeout
Use that time to meditate
Reflect on the NaM

${authorStart} SV`,

	`Bald man makes coffee 
Stupid gifs cover our screen
Mods are not funny

${authorStart} NeatoBurrito`,

	`"Time for a break"
Refrigerator Magnets
Entertain the chat

${authorStart} Piano`,

	`No Henry for weeks
Streamer does not entertain
At least not bean chug

${authorStart} NeatoBurrito`,

	`He tries to mock pleb
"vowels may not be adjoining"
This man reproduced

${authorStart} NeatoBurrito`,

	`It's curious how
People with so called "free will"
All post the same thing

${authorStart} Willster`,

	`FishMoley Looking
Woah, that is a bigass fish
What if I spam it?

${authorStart} Willster`,

	`Sub thirty minutes
Even did the dragon skip
Dumbass still beefed it

${authorStart} Mars
	"Only Up!" Era`,

	`"Play with x streamer" 
Posts same message for hours
Timed out for three weeks

${authorStart} NeatoBurrito`,

	`I post cringe in chat
Bring great shame to family
Impending exile

${authorStart} ValkyrTankyr`,

	`Old Scholar Play Mario
Level hard lose many life
The vaccination abaft

${authorStart} ValkyrTankyr`,

	`A former exile
Aquatic, large, and lumpy
Observe FishMoley

${authorStart} jesuscar`,

	`Off_topic degens
Sit in dark mother's basement
They have no bitches

${authorStart} emily`,

	`badlands does a chug
beans regurgitate on me
I am disgusted

${authorStart} Naomi Luna`,

	`not a hair in sight
fake wife, fake kid, fake dog too
this is my streamer

${authorStart} blarkle`,

	`Fat, shit, bald and old
Cant finish a single game
What a fucking bitch

${authorStart} emily`,

	`Cock Cock Cock Cock Cock
Cum Cum Cum Cum Cum Cum Cum
Borpa spin for cum

${authorStart} Mora`,

	`Checking the stream chat
Endless stream of taunting jabs
The bald man cries out

${authorStart} Jimmy Large`,

	`chat scrolling on screen
bald man sits in the corner
did not read my sub

${authorStart} blarkle`,

	`GTA RP
Yung Dab tearing up the streets
xQc malds hard

${authorStart} emily
	Rollplay Era`,

	`large breasts on the screen
magnificent orbs of flesh
type and send "BOOBA"

${authorStart} Kerball`,

	`NaM NaM NaM NaM NaM 
NaM NaM NaM NaM NaM NaM NaM 
NaM NaM NaM NaM NaM

${authorStart} Kerball`,

	`tractor flipped over
chat chimes in with their best help
please grab the beer box

${authorStart} NannerFone`,

	`hopeful moonmoon
a bad final fantasy
makes a mad baldy

${authorStart} Langis`,

	`I hate every game
Joy left me with my hairline
My wife is not real

${authorStart} Lord Youngbull`,

	`moonmoon do kegels
just tighten that pelvic floor
a healthy pasttime

${authorStart} KegelKing`,

	`The Moon rises late 
The Sun reflects on its face 
The Moon sets early

${authorStart} Phil T`,

	`tag peacefulhaley
call her a big stinky nerd
eff you haley <farts>

${authorStart} Kegel King`,

	`Hello Nerevar
Time to ride a Silt Strider
Play Morrowind Now

${authorStart} Jake`,

	`Microwave coffee 
Is the only way to go
If you have shit taste

${authorStart} Lord Youngbull`,

	`I eat sushi
No dip soy sauce
Right way to eat

${authorStart} BetterWithButter`,

	`When coffee is cold,
Microwave brings back its warmth,
Artisanal taste

${authorStart} Guru`,

	`Moonmoon play yakuza 0
karaoke, disco and minigames
much fun you will have!

${authorStart} Haley`,

	`Lots of you guys suck
at correctly making a
haiku to put here

${authorStart} Willster`,

	`Will never go down
Another night spent on couch
Horny and alone

${authorStart} SimplyStin`,

	`disheveled, yelling
"DO I LOOK LIKE A PSYCHO"
i fear for my life

${authorStart} NannerFone`,

	`playing vr game
disappointment all over
nothing like boneworks

${authorStart} NannerFone`,

	`Bald head, glasses aglow,
Metal Gear solid soon
Copium for all.

${authorStart} Betwoobly`,

	`ask moon 'when rimworld?'
bully him into playing
rimworld streams are great

${authorStart} KegelKing`,

	`Ask my opinion
I will tell you honestly
Never reproduce

${authorStart} Excalibur_Z`,

	`two things in common
big tits and sweaty armpits
MOONMOON and Tifa

${authorStart} mcappy`,

	`Like warm morning rain
A breath of fresh air at dawn
Hot pee in my ass

${authorStart} Yungbull`,

	`Moon drinks the coffee
Provocative green frog man
Break is imminent

${authorStart} Zoul`,

	`Waiting in Cutscene
Skip All of the Dialog
Final Fantasy

${authorStart} Jon`,

	`What vasectomy
The balls wish to stay awake
Yet sleep claims them both

${authorStart} Bore`,

	`Bald man claims to stream
Chat left wanting waiting hours pass
It's snowing on Mt.Fuji

${authorStart} Playirtz`,

	`Cum cum cum cum cum
I am addicted to cum
Cum Cum, I must spin

${authorStart} Divine`,

	`You dumb or something?
Do you understand haikus? 
That’s completely wrong.

${authorStart} The Bee Keeper`,

	`I hate all the games
I have the worst reasoning 
My hair is missing

${authorStart} poop lol`,

	`Escape is the dream
Elevator, trauma dump 
Favelas again

${authorStart} armchair tugboat captain`,

	`white background, red dot
japanese puzzle level
one, two, three, SKIPPERS

${authorStart} Mattmattmattmatt.`,

	`prime pleb in chat: "thoughts?"
moon taunted, "VASECTOMY!"
permanently banned

${authorStart} Mattmattmattmatt.`,

	`You will never be
Born true of the rising sun
You are a loser

${authorStart} Lizard`,

	`Sit here with despair
Failed to defecate, only farted
Oh, how I lament.

${authorStart} ryyuuz`,

	`Bald man sits on couch
A woman sits on his lap
That was not a fart

${authorStart} Mars`,

	`Yapping bald, their hate
Fills the air with a foul stench
Please just shut up.

${authorStart} JohnSoulz`,

	`A brown stain on white
A reminder of his shame
He wont wash it soon

${authorStart} JohnSoulz`,

	`"Play the game, streamer"
Chatter, how foolish of you
BRB, coffee

${authorStart} EnDecc`,

	`to go number one
while number two is allowed
but not the reverse

${authorStart} NannerFone`,

	`Post pep double you 
Now massacre the elpers
He is not aware

${authorStart} CaptHughJass`,

	`On the way to eternal wisdom
A sage must pass seven gates
Puzzle level, skip

${authorStart} Cubert`,

	`Hello, dear chat room
How are you doing today?
Hopefully good, smile

${authorStart} SqWires`,

	`chat wait patiently
no metal gear solid four
a single tear falls

${authorStart} YGGDRA`,

	`Put Chat on left Side
Shooting Baldman across Stream
Baldman dies, Big W

${authorStart} Sylicix`,

	`This is a fun game
Not sure if Moon will enjoy
Prepare for anger

${authorStart} Zoul`,

	`Green shit on the floor
He don't pick it up at all
Saving for next game

${authorStart} Willster`,

	`As wife dies of piss
Basket full of poops Moon stores
Walk miles silently

${authorStart} Sylicix`,

	`stories written like
bad middle school poetry
final fantasy

${authorStart} mcappy`,

	`Ask chat for some games,
deny all good suggestions,
play metal gear please

${authorStart} Metalus`,

	`Any games to play?
Thousands of options 'fore me...
I'm gonna go piss.

${authorStart} 12trillioniq`,

	`games rebellion
roleplaying abandoned
hair subsides

${authorStart} Splendiferous`,

	`Soft raindrops PLAP down,
Life's gentle whispers echo,
Dreams GET PREGNANT now.

${authorStart} Cubey`,

	`You're a Kitty Girl
You're just like me, Kitty Craze
Kitty Craze Ah Ah

${authorStart} Harry Wizard`,

	`Man with hand in pants
No matter the obstacle
Feel cocky all-day

${authorStart} TylerDurden`,

	`Metal Gear Solid,
Will Be Played Next Thursday Guys,
For Real This Time, Trust

${authorStart} LeadingTone`,

	`The English Language
Two vowels aside another
It can never be 

${authorStart} 12trillioniq`,

	`Read Stream_Talk discord
On break trying to take shit
Get  mad at true facts 

${authorStart} Harlinson`,

	`Funny green frog spins 
Endless hunger for sea men 
Spin spin spin spin spin

${authorStart} Szkud`,

	`Believer of Moon
Gets fucked over and over
Doubter of Moon lole

${authorStart} Wryllevo`,

	`Shitposts fill the stream,
Bald head shines, madness takes hold,
Wisdom lost, chaos gleams.

${authorStart} Naoo`,

	`Smells of sweaty feet,
Please play Spongebob-Lemonade,
My neck was drippin

${authorStart} Kyle4U`,

	`Another piss break,
My bladder is old and small,
I will be right back

${authorStart} Metalus`,

	`Dampish eventide
A many, bald man hotdogs fits
in spite of the ass

${authorStart} Noodleru`,

	`Bald man takes are shit
Contrarian opinion 
Why do we still pay?

${authorStart} TylerDurden`,

	`Hairline disarray
Follicles departing swift
Scalp on full display

${authorStart} Yacobe`,

	`It is still so real
Baldies nightmare fullfilled
The poop expanding

${authorStart} Refraint`,

	`Bald man's shining dome,
Nest for hotdogs with delight,
No hair in his way.

${authorStart} Noodleru`,

	`Howl at monitor
Please attend, Brother Bald Man
the wedding of Chang

${authorStart} horsedrawnhorse
	GTA-RP Era`,

	`Red and blue, smiling
Eyes wide and hips shaking
PawgChamp never dies

${authorStart} ariesXf`,

	`Bald man's shining dome,
Nest for hotdogs with delight,
No hair in his way.

${authorStart} Noodleru`,

	`A gaunt visage
rythmically, how is this
skeleton dancing?

${authorStart} Refraint`,

	`Copyrighted tune
Requested by chat room pleb
VOD muted again

${authorStart} Emily`,

	`Off-topic is cringe,
Today's not my birthday, but
Maybe one day's mine.

${authorStart} Naoo
(It's Naoo's birthday today ${getCurrentFormatedMonthDay()} btw)`,

	`Bald man leaves his chair
Images of food on screen
Hunger fills the chat

${authorStart} Corrino`,

	`Happy birthday Naoo
It is Naoo's birthday today!
You cannot protest

${authorStart} Emily

Happy birthday Naoo! ${getCurrentFormatedMonthDay()} Era`,

	`blue and red hogs dance
A strenuous hard-fought battle
Or passionate sort?

${authorStart} Splendidferous`,

	`Cumming in the sink
It flows over the counter 
Sinking in the cum

${authorStart} Zoul
	Terrible-Idea Era`,

	`Indecisive man
Seeks gaming's magnum opus
Then plays shovelware

${authorStart} Excalibur Z`,

	`Trials of Moonmoon
Each mistake fuels more teasing
Rage rises; hair falls

${authorStart} Excailbur Z`,

	`If you want to sex
You must snip your tubes apart
No more children here

${authorStart} Boku`,

`it will not come out
help me help me help me help
great log in the pond

${authorStart} 123`,

`Coffee break Inbound
Delusions of family
Microwave goes ding

${authorStart} Yacobe`,

`A dream of fresh snow
Is it cool and refreshing
Or a dire omen

${authorStart} Jake`,

`Shut up bald assboy,
Play Metal Gear Solid Four,
It has been three years

${authorStart} Bisquickway`,

`every time you ask 
he increases the timer
you making it worse

${authorStart} Tape
	don't ask for MGS4 please Era`,

`please post .png
of cumbo art by tacos
it must be archived

${authorStart} VerbalSilence`,

`Give a man a brick
See him observe the half-wall
Now man stuck Lo-Ding

${authorStart} AriesXf
	Landlord Super Era`,

`Man with hand in pants
No matter the obstacle
Feel cocky all-day

${authorStart} TylerDurden`,

`Many have fallen
A magnificent demon
John Souls walks again

${authorStart} Jayvrekk`,

`Options presented:
Play good game, or shovelware.
You know the outcome.

${authorStart} Sv`,

`Angry bald slams fist
Each strike a straw on the back
Cannot risk desk death

${authorStart} Azeban`,

`Construction gone mad
Bald man runs from life on Earth
Stairway to heaven

${authorStart} 12trillioniq
	Landlord Super Era`,

`Gamba alarm rings
Bet is set, now back to bed
"When Live" not paid out

${authorStart} EnDecc
	Internet Janitor Era`,

`Wait what is this screen
What do you mean "it's haiku"
What's a syllable

${authorStart} EnDecc`,

`Shitty gaming skills
"I'm the god gamer, you bitch"
Moon is bald and old

${authorStart} Emily`,

`piss running down leg
wetting my blue jeans darker
filling up my shoes

${authorStart} Iowaman`,

`bald man in "stealth" game
non targets die too often
is it really stealth

${authorStart} inanimateblob`,

`Tape adds the haikus
Poetry ever-growing
Many more to come

${authorStart} SV`,

`Bald man's dark deceit,
Poopfist's trust shattered, pain seeps,
Betrayal's cruel feat.

${authorStart} who`,

`A dank beachfront shop
Balding man with shit stick lurks
Diaper Dan beware

${authorStart} Dennisdamenace`,

`Bald streamer's losing,
Fury flares, chat feels the heat,
Gaming skills lacking

${authorStart} Songbird`,

`Late and overweight,
Bald head shines in sun's bright light,
Start stream and take break 

${authorStart} who`,
].sort(() => Math.random() - 0.5);

for (let i = 0; i < userSubmitted.length; i++) {
	if (!userSubmitted[i].match(/era$/i)) {
		userSubmitted[i] = userSubmitted[i] + '\n\t' + randomDate();
	}

	console.log(userSubmitted[i]);
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
	`${userSubmitted.length} haikus
`);
