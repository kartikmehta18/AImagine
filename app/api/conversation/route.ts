// import  {Configuration, OpenAIApi } from "openai";

// import { auth } from "@clerk/nextjs";
// //  import Configuration from "openai"
// //  import OpenAIApi  from "openai"
// import { NextResponse } from "next/server";


// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY ,
// });

// const openai = new OpenAIApi (configuration);

// export async function POST(
//     req : Request
//     ){
//         try {
//             const {userId}=auth();
//             const body = await req.json();
//             const { messages  } = body;

//             if (!userId) {
//                 return new NextResponse("Unauthorized", { status: 401 });
//               }
          
//               if (!configuration.apiKey) {
//                 return new NextResponse("OpenAI API Key not configured.", { status: 500 });
//               }
          
//               if (!messages) {
//                 return new NextResponse("Messages are required", { status: 400 });
//               }
              
//     const response = await openai.createChatCompletion({
//         model: "gpt-3.5-turbo",
//         messages
//       });
  
//       return NextResponse.json(response.data.choices[0].message);

              

//         } catch(error){
//             console.log("[CONVERSATION_ERROR]", error);
//             return new NextResponse("Internal error", {status :500});
//         }
//     }

//NEW

    // import  {Configuration ,OpenAIApi } from "openai";
import { auth } from "@clerk/nextjs";
//  import Configuration from "openai"
 import OpenAI from "openai"
import { NextResponse } from "next/server";


// const configuration =new Configuration({
//     apiKey: process.env.OPENAI_API_KEY ,
// });



const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(
    req : Request
    ){
        try {
            const {userId}=auth();
            const body = await req.json();
            const { messages  } = body;

            if (!userId) {
                return new NextResponse("Unauthorized", { status: 401 });
              }
          
              if (!OpenAI) {
                return new NextResponse("OpenAI API Key not configured.", { status: 500 });
              }
          
              if (!messages) {
                return new NextResponse("Messages are required", { status: 400 });
              }
              
              const response = await openai.completions.create({
                model: "gpt-3.5-turbo-instruct",
                prompt: `${prompt}`,
                max_tokens: 3000,
                top_p: 1,
                frequency_penalty: 0.5,
                presence_penalty: 0,
            });
    // const response = await openai.createChatCompletion({
    //     model: "gpt-3.5-turbo",
    //     messages
    //   });
  
      return NextResponse.json(response.choices[0].text);

              

        } catch(error){
            console.log("[CONVERSATION_ERROR]", error);
            return new NextResponse("Internal error", {status :500});
        }
    }





