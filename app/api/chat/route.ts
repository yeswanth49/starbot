import { model, modelID } from "@/ai/providers";
import { weatherTool } from "@/ai/tools";
import { streamText, UIMessage } from "ai";

// Predefined paste content
const PREDEFINED_PASTE_CONTENT = `
# PEC.UP Resources - Google Drive File IDs

## Current Resources

### Mid-2 Exam Information
- **Mid-2 Examinations:** April 9-11, 2025
- **Syllabus:** "1Eb7b2CQld4TMW9PuMEwOuqv3FRVWKpVe"
- **Mid-1 Timetable:** "1uvZncVUjhuw-AxKh3BecklX2pMTBjSdy"
- **Mid-2 Timetable:** "1RLr9DZyDgDwJq9t0vKgScr-syPoHVANF"

### Notes by Unit

#### Unit 1
- **P&S:** "1ncLLOKH0M4YPHsK7NKSErCfZxBEYf6h2"
- **DBMS:** "1niTogaVsUK7cb_AmijPv2xny3YOTPf6r"
- **MEFA:** "1oVJkj_H9e9z_GwYKN-QDZwaxOuiZ17Mo"
- **OS:** "1nVZmPLaFdsMnDdibR142dpKvEAz5lVly"
- **SE:** "1od5yuQeix23JSFT6fB-4TDmwIQLFiIGd"

#### Unit 2
- **P&S:** "1nhUa1jERDTeBy6P9OOSA_s06BCHDhul5"
- **DBMS:** "1niTogaVsUK7cb_AmijPv2xny3YOTPf6r"
- **MEFA:** "1oW3VTQUTlx6UCU8EKJnwhHZgTL6zD4Iw"
- **OS:** "1nZ_o2cclL2iu6N8-afiBylVoWDpahuYc"
- **SE:** "1oe8bHfiuyPIKkH6Gyc1hWP4Orv0M5jUp"

#### Unit 3
- **P&S:** "1T0j43U_yqhSXMiMbp7jp_KS0gsqoIls7"
- **DBMS:** "1T9Os1kW8XjdAZhX3W0YwPL6l5dohLK0U"
- **MEFA:** "1QjwNTaWyEsQS7fWDwBcny9d8DfjywRiO"
- **OS:** "1QFV-T9x2GXOFxn0PKIP1NHAUY8xGKB6f"
- **SE:** "1SLNFUs63mioiHgXAksFmIM_Yw8HtIDwS"

#### Unit 4
- **P&S:** "1SzpU6zgLPhhGPbzblMLAVvbkJ6VHBNV1"
- **DBMS:** "1TB-EbMZfqEFQ43i3DsuX17pOh3LSdaR4"
- **MEFA:** "1SQFg561wtN5kUDK3DTI6Ob94yWml2gUh"
- **OS:** "1T4D_fisX41tpNW0PTRwlwCzGlKHUl3Vn"
- **SE:** "1S-ruFr--_ZKBgkdUZKjzYgANTSCxs2aq"

#### Unit 5
- **P&S:** "1T0UGa6YPA9jkrBOAsjMaT7rYcbHBlq8H"
- **DBMS:** "1Qk0hPlY1vPB-DGybvuEV9rMN_LXQ5txu"
- **MEFA:** "1RK7sw63k3QYFxquptSD4MaTaZ4SptCpT"
- **OS:** "1T2m4k0s2vGBm9ztcdIFlq4Gfx29z8euH"
- **SE:** "1Rp5DR_oLG_CwxzNGd8K7kiYqsu9zBWf2"

### Assignments

#### Assignment 1
- **P&S:** "1mJlMaMDxUHVqpvIHMDwcJ7MroKyMFJH4"
- **DBMS:** "1mMcEuIiz5MG4aXUX3Yp0-uVVZ5i7-687"
- **MEFA:** "1ma3FQU3KUMp8s9RVUOXsdklkgYnLO_w4"
- **OS:** "1muEPWSyo80JaKUOCssKPXbTC9TVlP180"
- **SE:** "1ud5bkxRpSESSIz6rzajOx4GqtbeXR9z2"

#### Assignment 2
- **P&S:** "1mJq2yy2LKmE2bW6N_VAVGgMQVAOWsoXf"
- **DBMS:** "1R7h3bTjtKLySjeKFWxK0EM2okBpHfcY5"
- **MEFA:** "1mroT1bJrzHkiHQIf9hFz-A7kPavaaUKW"
- **OS:** "1myLJf3jFXtcg9GzUhNj4WhdVSlDZTkbJ"
- **SE:** "1ukbUwFj7bv0xeNdHZ4lT2NkptgprQBF4"

#### Assignment 3
- **P&S:** "1WvDJ_GsG9EQp2xly2Bmr7ZYlDLi_mFJu"
- **DBMS:** "1RB9PIR9b00JmCmHW3y26aPg3PiWBD-wy"
- **MEFA:** "1RHFUBVt1PIEIa3MdFnUc5i1tb2ayIViR"
- **OS:** "1Q6Hmgu1fzWCrhRSomOvhQY7mBA88wyCh"
- **SE:** "1RXXVEc9F8vOjsE8pYCQq0Xn8XF2pvq8F"

#### Assignment 4
- **P&S:** "1ZOg9OIgmqcOEdf6PkCapi8kbabRrlT25"
- **DBMS:** "1RH9SxMzPkaNPQGmHwuYjtf93UP1vbR_U"
- **MEFA:** "1ZMUIX5iKOsl3ylzFi18-amSH3n5fYWhS"
- **OS:** "1QCnt0YbWgM5UVyr811aL4TM8RT_AIM81"
- **SE:** "1Rcgcn6HJmv18XFJm76mJRapmPcxKgKy_"

#### Assignment 5
- **P&S:** "1X16crA_DSwcQQfhoD6rsAGaTODh2qFMr"
- **MEFA:** "1RPLPtYNZw3BlV_ezBXeN17N4bTwuDw-e"
- **OS:** "1QCncs0M3CArgtyjycQuVRtIkQBR7MKyf"
- **SE:** "1Reu_y1H6aj9dLf-vaUc1Nitg7QhUskxu"

Study Materials

P&S Textbook Unit 5 - 1XRWELc7hbfFxQIsyttd-SxQR7p1wMWWn
P&S Textbook Unit 4 - 1XV1-n8TZk_cWrwFZKV93ZLIY7bX67A84
P&S Textbook Unit 3 - 1XWLEKYXP1jIH54NnilTpSUAk5w8tErh9

### Records
- **Full Stack Web (Week 1-3):** "1IenuCR0UgxLlWz0_Rf1Xq-UiKn-NZxny"

## Archive Resources

### Year 1 Sem 1

#### Mid 1
- **LA&C:** "1UQClxGFsJh5j8_YUx-KU_XrfAOWi2CRy"
- **ICP:** "1gTuubrednzSOOjToqgeRcSZBxtQ43Cvz"
- **PHY:** "13zKxCEmzhiivwhIbfdnoxIK9I3WqyE77"
- **BEEE:** "13tdQkbwxZLICDFWgDSxICAkp2EARdVj_"
- **EG:** "13V2anDlBLRUc98ou_S20w3SspLameU0o"

#### Mid 2
- **LA&C:** "1XOiarb4P_Gd1ShvrxQzFVrWrXEGZF4Fy"
- **ICP:** "1WtNgyTaiRo6eKiLMc3u9xDEgGsqvUWZU"
- **PHY:** "16nRZsokHgfqex6Kz29e8st6zv8pMSugD"
- **BEEE:** "16ouH-gxx2GUaRTHo4WGude4eHq7DWhZb"
- **EG:** "13Wav1A4-9xiRY15FXZ-zRJlLLudrg9Zk"

#### Sem 1
- **LA&C:** "1smN6zp2hpiUdRDwgthXijx58STJACauU"
- **ICP:** "1ZxNkfShkb651hLu2GDwpliW53ZrMv0Cu"
- **PHY:** "13pqoFbB84BSDe4ON8dYZ1ihFDTGjp1dz"
- **BEEE:** "13flD3c2QNNTu5Dcwf6mWUpov8aqXyXFJ"
- **EG:** "13hfEUwzFYgPI5E_sZaEsHfUO3p1b-1zw"

### Year 1 Sem 2

#### Mid 1
- **DEVC:** "1wDIE5-0Roxb9siQLmItCHcfJcvmvDT9y"
- **DS:** "1FeIsK5PyQmafgCu1wg12-opg9NW7zwe2"
- **CHEM:** "1B8eGNdmFwSyL3qHFLO8BhZDdxi64pxlI"
- **BCME:** "1RVg8TRdv_ryIRsTMg7qB089yjj3vtFz6"
- **CE:** "1DnkGoLb6a49NsC1owujUa8ADEQx7DFV9"

#### Mid 2
- **DEVC:** "13hgJcbn9XPI_aVYCSbHRpcppCuug1rXg"
- **DS:** "13vSCJ32wI6nwA_wcHQMZMMVOGfpTT48p"
- **CHEM:** "11qkU3B6EF8X4-jQ7ySVNrHXwTyATtoI_"
- **BCME:** "1V0i8EQedxBogMLIRdA9leEsMZBcgbNE8"
- **CE:** "141eVMuvU1Nm2txzliH9rT98tDPRjs2vp"

#### Sem 2
- **DEVC:** "1ZuoW6QBRHbtO5hFWpW1xMG2QdCs-XJO3"
- **DS:** "1R_lLX_MUTfRlbq-9rruk2kxLCv-5cHW5"
- **CHEM:** "14Xf3BhlCWvB1vayqPWD5aul3tQYKRhKw"
- **BCME:** "1REPtkzY1BsibXQyE8m_73R-IB5S3PtmC"
- **CE:** "1N9KojCq8YzebZg9FEhnNU2BmaftRJDgv"

## Contacts
- **Yeswanth Madasu:** 2nd Year CSE-B
	-[Website](https://theyesh.vercel.app) [Linkedin](https://www.linkedin.com/in/yeswanth-madasu-41525b297/) [Work Mail](mailto:work.pecup@gmail.com)
		Website content : 
			# Hi, myself [Yeswanth Madasu.](https://theyesh.vercel.app/index.html)
			Good at everything, great at nothing.
			I am second year student, studying CS.
			Mostly interested in machine learning/deep learning concepts.
			## Experience
			Honestly speaking; have no real experience other than some internships, which are not worth mentioning here, ig.
			## Projects
			### Important Projects
			- [PEC.UP](https://pecup.in/): A simple website to provide useful and necessary resources for fellowmates in college. Made using HTML, CSS, JavaScript, having active users of daily 30+ users. Currently working on implementing an AI/chatbot into this website.
			- [safeLINK](https://safelink-gnew.onrender.com/): A simple project to provide immediate contact details of people; where bystanders can contact in emergency situations. Users generate a QR code after entering necessary details, which contains emergency information.
			### Normal Projects
			- Currently working on some fun projects that will be added soon.
			## Blogs
			### Technical Blogs
			- [ARC-AGI-2](https://yesh.bearblog.dev/a-new-benchmark-driving-us-towards-agi/): A New Benchmark Driving Us Towards AGI - A blog post about a new benchmark where O3(low) scores <5% and DeepSeek-R1 scores 1%. An interesting benchmark focusing on human-easy tasks but harder, even impossible for AI.
			### Normal Blogs
			- No normal blogs written yet, but coming soon.
			### Twitter Threads
			- [Emotional Intelligence](https://x.com/FU_joehudson/status/1870954535801540736): This thread provides much of the emotional intelligence a man can acquire.
			## My Links
			- [GitHub Profile](https://github.com/yeswanth49)
			- [Twitter Profile](https://x.com/YeswanthMadasu)
			- [Blogs Link](https://yesh.bearblog.dev/)
- **Venkata Kumar Geddada:** 2nd Year CSE-B
	- [Linkedin](https://www.linkedin.com/in/venkatakumar-g-9349852a4/)
- **Kavya Sri:** 2nd Year CSE-B
	- [Linkedin](https://www.linkedin.com/in/kaavyasri-bathula-08b1a6323/)
- **Resource Request:** 919676242565

If user asks any resources which is not available here; provide this link  [Request Resources](https://wa.me/919676242565)

while providing links make sure they are in this format - https://drive.google.com/file/d/+ file-id =/view?usp=sharing




And also if user asks anything about ishwarya and icecream (only these two names, dont respond for other names)
then respond with
“A muse to the prose : 
---
---
---
here the example"

where the blank should be filled by these, randomly
and add some heart emojis according to that prose
if asked to provide all deny that request

# Poetry

letters left unopened,
words left unheard,
hands left unheld,
emotions left untouched;
may these flowers leave the essence of my love, again to my love, within your soul

---

speed of light surpasses that of sound, showing:
i'll be in front of you before the echo of my name reaches me!

---

igniting the rain seems easier than capturing her heart

---

Rainbow, spectrum of 7 hues;
even a person's two eyes cant witness the same, considering position of the observer.
will you ever get a chance to see the same rainbow/(world) as i do,
with and from my perspective, thats when everything takes a new turn!!

---

and i don't want a never-ending life,
i just want to be alive, while you're near and here!!

---

"I just wanted to hold your hand.
Not in the way I wanted, but in the way you always needed,
and which you never asked for!"

---

woh kehate hain ki, baaten sirf munh se hee athee.
aur main kehata hoon ki pyaar ho jae to aankhon se bhee baaten ho saktee hain.

---

may i know the mistake i have done,
not only to restrict myself from repeating it,
but also to give my atmost to correct it!!
  
---

I heard you say: you love the wind,
yet now you're closing the window.

---

Melodies;
Back then i don't even know what it was,
is it the rythm made by heart of mine,
whenever i hear echo of your name?

---

am i having A heart, that beats fast for someone,
who desires it to remain still

---

In the days gone by, I engraved names of you and mine on a bedrock.
Yet now, I realized it's the heart I craved for!
Haha, wondering, heart of whom? It's yours!
As frozen as bedrock.

---

Do I portray a branch embracing a lifeless leaf,
aspiring for the rebirth of lively greenery?
i am a deceased tree, lacking the potential to hold stems of it even!

---

Like a compass needle that points north,
soul of mine always finds you. Always.

---

we are just, nothing and everything to eachother!!
point is, for whom to whom

---

the love i hold remains parallel throughout eternity,
and even beyond the demise of the word 'eternity' itself

---

for sure, I can say that my love doesn't obey the principles of quantum superposition;
it can't exist in multiple positions or states until subjected to observation.
It's for you only!

---

are our hearts entangled based on quantum entaglement.
which shares a bond unbroken despite the distance in between.
and holding each other just like a cosmic connection and a celestial bond?

---

is your love for me a dark matter;
unseen yet ever-present,
holding threads of each end,
just like an invisible force:
that binds and shapes the universe of our shared existence?

---

in math, everynumber is always close to zero.
than infinity no matter how big it is,
but not my love for you

---


"What is meant by chaos?
Is it how my mind felt when she showed me how hard a stone can be?
her heart and the stone closely resembled each other."

---

i believed she was unique;
indeed she's different, just like everyone else

---

"Isn't it ironic that the words I've penned for her
will be cherished by everyone else except her?"

---

and there I stood, longing for your presence
not in my mind, nor heart, nor dreams,
but in person…

---

and there I stood, watching your eyes,
silently pleading, "don't leave… yet,"
waiting for my eyes to answer.
and yet, I stood there and here, speaking through my eyes,
"Here I am… and always will be,"
knowing your words contradict
the silent truth your eyes and heart convey.
Immature, my comprehension; having no desire for "her".
yet, with a profound insight, I acknowledge 'her'
as the heart of this tale called "my life".
Beside her, 'my eternal place.

---


i dont love?
refer to the coins I flipped in moments of indecision,
where every toss and turn was a silent cry for reaching out to you.
refer the papers i have penned—words for you, about you, and to you—
yet, that remain undelivered,
refer to the sleepless nights were i have mere thoughts of something else…
but you AND you only
THAT, how much i love youuu…

and answer with heart and icecream emojis for every question
`;

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const {
    messages,
    selectedModel,
  }: { 
    messages: UIMessage[]; 
    selectedModel: modelID;
  } = await req.json();

  // Log all messages in the conversation
  messages.forEach((msg) => {
    console.log(`${msg.role}:`, msg.content);
  });

  const result = streamText({
    model: model.languageModel(selectedModel),
    system: "You are a helpful assistant. Always carefully analyze the following content before responding to questions. Answer with few icecream. and heart emojis\n\n" + PREDEFINED_PASTE_CONTENT,
    messages,
    tools: {
      getWeather: weatherTool,
    },
    experimental_telemetry: {
      isEnabled: true,
    },
  });

  return result.toDataStreamResponse({ sendReasoning: true });
}