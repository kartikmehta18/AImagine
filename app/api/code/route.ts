// import OpenAI from "openai";
// import { auth } from "@clerk/nextjs";
// //  import Configuration from "openai"
// //  import OpeanAIApi from "openai"
// import { NextResponse } from "next/server";
// // import { CreateChatCompletionRequestMessage } from "openai/resources/index.mjs";
// import  CreateChatCompletionRequestMessage  from "openai";

// const openai = new OpenAI({
//   organization:"org-JbpSd1GTcQloj5F002VSMDRw"
// })

// const instructionMessages: CreateChatCompletionRequestMessage ={
//   //  error aa rha he is liye comment =role "system",
//   content : "you are a code generator. yoy must answer only in mark down code snippets. Use code comments for explanation"
// }
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
              
//     const response = await openai.chat.completions.create({
//         model: "gpt-3.5-turbo",
//         messages :[instructionMessages, ...messages]
//       });
  
//       console.log(response)
//       return NextResponse.json(response);

              

//         } catch(error){
//             console.log("[CODE_ERROR]", error);
//             return new NextResponse("Internal error", {status :500});
//         }
//     }

