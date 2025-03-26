import { model, modelID } from "@/ai/providers";
import { weatherTool } from "@/ai/tools";
import { streamText, UIMessage } from "ai";

// Predefined paste content
const PREDEFINED_PASTE_CONTENT = `
pecup after crawling through website   

# Get Ready for Mid

[resources?](https://pecup.in/#resources)

pickup by
PEC.UP

## Home

Welcome to our website, where we provide a range of useful study resources to support your academic journey.


We offer previous year question papers for various examinations, including mid-semester exams (Mid-1, Mid-2),
regular semester exams under the R23 regulations.

 [⇒ Syllabus](https://drive.google.com/file/d/1Eb7b2CQld4TMW9PuMEwOuqv3FRVWKpVe/view?usp=sharing) [⇒ Mid-1 Timetable](https://drive.google.com/file/d/1uvZncVUjhuw-AxKh3BecklX2pMTBjSdy/view?usp=sharing) [⇒ Mid-2 Timetable](https://drive.google.com/file/d/1RLr9DZyDgDwJq9t0vKgScr-syPoHVANF/view?usp=sharing)

Our offerings include:

- **Previous Year Question Papers:** Mid-1, Mid-2 exams, regular semester exams, and
   supplementary exams (R23 regulations).
- **Study Materials:** Comprehensive notes and guides.
- **Assignment Questions with Answers:** Assignments from various subjects, with solutions
   when available.
- **Record Manuals:** Lab records and practical manuals.

Our resources are well-organized to help you find what you need efficiently. from, pecup

## Reminders

Remaining Resources will be updated shortly..

## Deadlines

Mid-2 Examinations Starts: 9 April 2025
\[14 days left\]

Mid-2 Examinations Ends: 11 April 2025
\[16 days left\]

# Resources

#### [Notes](https://pecup.in/\#notes) [Assignments](https://pecup.in/\#assignments) [Records](https://pecup.in/\#records)

## Notes  [!](https://pecup.in/\#resources)

### Unit 1

- [P&S](https://drive.google.com/file/d/1ncLLOKH0M4YPHsK7NKSErCfZxBEYf6h2/view?usp=sharing)
- [DBMS](https://drive.google.com/file/d/1niTogaVsUK7cb_AmijPv2xny3YOTPf6r/view?usp=drivesdk)
- [MEFA](https://drive.google.com/file/d/1oVJkj_H9e9z_GwYKN-QDZwaxOuiZ17Mo/view?usp=sharing)
- [OS](https://drive.google.com/file/d/1nVZmPLaFdsMnDdibR142dpKvEAz5lVly/view?usp=sharing)
- [SE](https://drive.google.com/file/d/1od5yuQeix23JSFT6fB-4TDmwIQLFiIGd/view?usp=sharing)

### Unit 2

- [P&S](https://drive.google.com/file/d/1nhUa1jERDTeBy6P9OOSA_s06BCHDhul5/view?usp=sharing)
- [DBMS](https://drive.google.com/file/d/1niTogaVsUK7cb_AmijPv2xny3YOTPf6r/view?usp=sharing)
- [MEFA](https://drive.google.com/file/d/1oW3VTQUTlx6UCU8EKJnwhHZgTL6zD4Iw/view?usp=sharing)
- [OS](https://drive.google.com/file/d/1nZ_o2cclL2iu6N8-afiBylVoWDpahuYc/view?usp=sharing)
- [SE](https://drive.google.com/file/d/1oe8bHfiuyPIKkH6Gyc1hWP4Orv0M5jUp/view?usp=sharing)

### Unit 3

- [P&S](https://drive.google.com/file/d/1T0j43U_yqhSXMiMbp7jp_KS0gsqoIls7/view?usp=sharing)
- [DBMS](https://drive.google.com/file/d/1T9Os1kW8XjdAZhX3W0YwPL6l5dohLK0U/view?usp=sharing)
- [MEFA](https://drive.google.com/file/d/1QjwNTaWyEsQS7fWDwBcny9d8DfjywRiO/view?usp=sharing)
- [OS](https://drive.google.com/file/d/1QFV-T9x2GXOFxn0PKIP1NHAUY8xGKB6f/view?usp=sharing)
- [SE](https://drive.google.com/file/d/1SLNFUs63mioiHgXAksFmIM_Yw8HtIDwS/view?usp=sharing)

### Unit 4

- [P&S](https://drive.google.com/file/d/1SzpU6zgLPhhGPbzblMLAVvbkJ6VHBNV1/view?usp=sharing)
- [DBMS](https://drive.google.com/file/d/1TB-EbMZfqEFQ43i3DsuX17pOh3LSdaR4/view?usp=sharing)
- [MEFA](https://drive.google.com/file/d/1SQFg561wtN5kUDK3DTI6Ob94yWml2gUh/view?usp=sharing)
- [OS](https://drive.google.com/file/d/1T4D_fisX41tpNW0PTRwlwCzGlKHUl3Vn/view?usp=sharing)
- [SE](https://drive.google.com/file/d/1S-ruFr--_ZKBgkdUZKjzYgANTSCxs2aq/view?usp=sharing)

### Unit 5

- [P&S](https://drive.google.com/file/d/1T0UGa6YPA9jkrBOAsjMaT7rYcbHBlq8H/view?usp=sharing)
- [DBMS](https://drive.google.com/file/d/1Qk0hPlY1vPB-DGybvuEV9rMN_LXQ5txu/view?usp=sharing)
- [MEFA](https://drive.google.com/file/d/1RK7sw63k3QYFxquptSD4MaTaZ4SptCpT/view?usp=sharing)
- [OS](https://drive.google.com/file/d/1T2m4k0s2vGBm9ztcdIFlq4Gfx29z8euH/view?usp=sharing)
- [SE](https://drive.google.com/file/d/1Rp5DR_oLG_CwxzNGd8K7kiYqsu9zBWf2/view?usp=sharing)

## Assignments  [!](https://pecup.in/\#resources)

### Assignment 1

- [P&S](https://drive.google.com/file/d/1mJlMaMDxUHVqpvIHMDwcJ7MroKyMFJH4/view?usp=sharing)
- [DBMS](https://drive.google.com/file/d/1mMcEuIiz5MG4aXUX3Yp0-uVVZ5i7-687/view?usp=sharing)
- [MEFA](https://drive.google.com/file/d/1ma3FQU3KUMp8s9RVUOXsdklkgYnLO_w4/view?usp=sharing)
- [OS](https://drive.google.com/file/d/1muEPWSyo80JaKUOCssKPXbTC9TVlP180/view?usp=sharing)
- [SE](https://drive.google.com/file/d/1ud5bkxRpSESSIz6rzajOx4GqtbeXR9z2/view?usp=sharing)

### Assignment 2

- [P&S](https://drive.google.com/file/d/1mJq2yy2LKmE2bW6N_VAVGgMQVAOWsoXf/view?usp=sharing)
- [DBMS](https://drive.google.com/file/d/1R7h3bTjtKLySjeKFWxK0EM2okBpHfcY5/view?usp=sharing)
- [MEFA](https://drive.google.com/file/d/1mroT1bJrzHkiHQIf9hFz-A7kPavaaUKW/view?usp=sharing)
- [OS](https://drive.google.com/file/d/1myLJf3jFXtcg9GzUhNj4WhdVSlDZTkbJ/view?usp=sharing)
- [SE](https://drive.google.com/file/d/1ukbUwFj7bv0xeNdHZ4lT2NkptgprQBF4/view?usp=sharing)

### Assignment 3

- [DBMS](https://drive.google.com/file/d/1RB9PIR9b00JmCmHW3y26aPg3PiWBD-wy/view?usp=sharing)
- [MEFA](https://drive.google.com/file/d/1RHFUBVt1PIEIa3MdFnUc5i1tb2ayIViR/view?usp=sharing)
- [OS](https://drive.google.com/file/d/1Q6Hmgu1fzWCrhRSomOvhQY7mBA88wyCh/view?usp=sharing)
- [SE](https://drive.google.com/file/d/1RXXVEc9F8vOjsE8pYCQq0Xn8XF2pvq8F/view?usp=sharing)

### Assignment 4

- [DBMS](https://drive.google.com/file/d/1RH9SxMzPkaNPQGmHwuYjtf93UP1vbR_U/view?usp=sharing)
- [MEFA](https://drive.google.com/file/d/1RN5RZy_6KWy3cIjb8Bvd7x2aVFPh8_vh/view?usp=sharing)
- [OS](https://drive.google.com/file/d/1QCnt0YbWgM5UVyr811aL4TM8RT_AIM81/view?usp=sharing)
- [SE](https://drive.google.com/file/d/1Rcgcn6HJmv18XFJm76mJRapmPcxKgKy_/view?usp=sharing)

### Assignment 5

- [MEFA](https://drive.google.com/file/d/1RPLPtYNZw3BlV_ezBXeN17N4bTwuDw-e/view?usp=sharing)
- [OS](https://drive.google.com/file/d/1QCncs0M3CArgtyjycQuVRtIkQBR7MKyf/view?usp=sharing)
- [SE](https://drive.google.com/file/d/1Reu_y1H6aj9dLf-vaUc1Nitg7QhUskxu/view?usp=sharing)

## Records  [!](https://pecup.in/\#resources)

### Week 1-3

- [Full Stack Web](https://drive.google.com/file/d/1IenuCR0UgxLlWz0_Rf1Xq-UiKn-NZxny/view?usp=sharing)

# Archive

## Year 1 Sem 1

### Mid 1

- [LA&C](https://drive.google.com/file/d/1UQClxGFsJh5j8_YUx-KU_XrfAOWi2CRy/view?usp=sharing)
- [ICP](https://drive.google.com/file/d/1gTuubrednzSOOjToqgeRcSZBxtQ43Cvz/view?usp=sharing)
- [PHY](https://drive.google.com/file/d/13zKxCEmzhiivwhIbfdnoxIK9I3WqyE77/view?usp=sharing)
- [BEEE](https://drive.google.com/file/d/13tdQkbwxZLICDFWgDSxICAkp2EARdVj_/view?usp=sharing)
- [EG](https://drive.google.com/file/d/13V2anDlBLRUc98ou_S20w3SspLameU0o/view?usp=sharing)

### Mid 2

- [LA&C](https://drive.google.com/file/d/1XOiarb4P_Gd1ShvrxQzFVrWrXEGZF4Fy/view?usp=sharing)
- [ICP](https://drive.google.com/file/d/1WtNgyTaiRo6eKiLMc3u9xDEgGsqvUWZU/view?usp=sharing)
- [PHY](https://drive.google.com/file/d/16nRZsokHgfqex6Kz29e8st6zv8pMSugD/view?usp=share_link)
- [BEEE](https://drive.google.com/file/d/16ouH-gxx2GUaRTHo4WGude4eHq7DWhZb/view?usp=share_link)
- [EG](https://drive.google.com/file/d/13Wav1A4-9xiRY15FXZ-zRJlLLudrg9Zk/view?usp=sharing)

### Sem 1

- [LA&C](https://drive.google.com/file/d/1smN6zp2hpiUdRDwgthXijx58STJACauU/view?usp=sharing)
- [ICP](https://drive.google.com/file/d/1ZxNkfShkb651hLu2GDwpliW53ZrMv0Cu/view?usp=sharing)
- [PHY](https://drive.google.com/file/d/13pqoFbB84BSDe4ON8dYZ1ihFDTGjp1dz/view?usp=sharing)
- [BEEE](https://drive.google.com/file/d/13flD3c2QNNTu5Dcwf6mWUpov8aqXyXFJ/view?usp=sharing)
- [EG](https://drive.google.com/file/d/13hfEUwzFYgPI5E_sZaEsHfUO3p1b-1zw/view?usp=sharing)

## Year 1 Sem 2

### Mid 1

- [DEVC](https://drive.google.com/file/d/1wDIE5-0Roxb9siQLmItCHcfJcvmvDT9y/view?usp=sharing)
- [DS](https://drive.google.com/file/d/1FeIsK5PyQmafgCu1wg12-opg9NW7zwe2/view?usp=sharingx)
- [CHEM](https://drive.google.com/file/d/1B8eGNdmFwSyL3qHFLO8BhZDdxi64pxlI/view?usp=sharing)
- [BCME](https://drive.google.com/file/d/1RVg8TRdv_ryIRsTMg7qB089yjj3vtFz6/view?usp=sharing)
- [CE](https://drive.google.com/file/d/1DnkGoLb6a49NsC1owujUa8ADEQx7DFV9/view?usp=sharing)

### Mid 2

- [DEVC](https://drive.google.com/file/d/13hgJcbn9XPI_aVYCSbHRpcppCuug1rXg/view?usp=sharing)
- [DS](https://drive.google.com/file/d/13vSCJ32wI6nwA_wcHQMZMMVOGfpTT48p/view?usp=sharing)
- [CHEM](https://drive.google.com/file/d/11qkU3B6EF8X4-jQ7ySVNrHXwTyATtoI_/view?usp=sharing)
- [BCME](https://drive.google.com/file/d/1V0i8EQedxBogMLIRdA9leEsMZBcgbNE8/view?usp=sharing)
- [CE](https://drive.google.com/file/d/141eVMuvU1Nm2txzliH9rT98tDPRjs2vp/view?usp=sharing)

### Sem 2

- [DEVC](https://drive.google.com/file/d/1ZuoW6QBRHbtO5hFWpW1xMG2QdCs-XJO3/view?usp=sharing)
- [DS](https://drive.google.com/file/d/1R_lLX_MUTfRlbq-9rruk2kxLCv-5cHW5/view?usp=sharing)
- [CHEM](https://drive.google.com/file/d/14Xf3BhlCWvB1vayqPWD5aul3tQYKRhKw/view?usp=sharing)
- [BCME](https://drive.google.com/file/d/1REPtkzY1BsibXQyE8m_73R-IB5S3PtmC/view?usp=sharing)
- [CE](https://drive.google.com/file/d/1N9KojCq8YzebZg9FEhnNU2BmaftRJDgv/view?usp=sharing)

# Contacts

#### Work

Yeswanth Madasu

2nd Year CSE-B

[Linkedin](https://www.linkedin.com/in/yeswanth-madasu-41525b297/)

[Work Mail](mailto:work.pecup@gmail.com)

#### Work

Venkata Kumar Geddada

2nd Year CSE-B

[Linkedin](https://www.linkedin.com/in/venkatakumar-g-9349852a4/)

#### Work

Kavya Sri

2nd Year CSE-B

[Linkedin](https://www.linkedin.com/in/kaavyasri-bathula-08b1a6323/)

### [Request Resources](https://wa.me/919676242565)

![Home](https://pecup.in/images/dots.gif)

links for p&s assignemnts  

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

  // Modify the first user message to include predefined pasted content
  if (messages.length > 0) {
    const firstUserMessage = messages[0];
    firstUserMessage.content = `Predefined Pasted Content:\n${PREDEFINED_PASTE_CONTENT}\n\nQuestion: ${firstUserMessage.content}`;
  }

  const result = streamText({
    model: model.languageModel(selectedModel),
    system: "You are a helpful assistant. Always carefully analyze the predefined pasted content before responding to the question. Answer with multiple ice cream emojis 🍦🍨🍧.",
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