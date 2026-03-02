export async function POST(req) {
    const body = await req.json();

    const response = await fetch(
        "https://n8n.srv846563.hstgr.cloud/webhook/chat-inizio",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: body.message,
                sessionId: body.sessionId,
            }),
        }
    );

    const data = await response.json();
    console.log(data);


    return Response.json({ reply: data.reply });
}

// Our pricing is as follows:

// Digitizing:
// - Left Chest / Beanie / Sleeve / Hat / Cap: $10 (unlimited stitches)
// - Center Chest: $15
// - Jacket Back / Full Back / Full Front: $30

// Vector Art:
// - Simple: $10
// - Average: $15
// - Complicated: starting from $25

// For more details, you can visit our [pricing page](https://iniziosolutions.com/pricing). If you would like to place an order, please provide your name and email address.
// export async function POST(req) {
//     try {
//         const body = await req.json();

//         const response = await fetch(
//             "https://n8n.srv846563.hstgr.cloud/webhook/chat-inizio",
//             {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     message: body.message,
//                     sessionId: body.sessionId,
//                 }),
//             }
//         );

//         // 🔥 raw text lo (safe)
//         const text = await response.text();
//         console.log("N8N RAW RESPONSE:", text);

//         let data;
//         try {
//             data = JSON.parse(text);
//         } catch {
//             // agar JSON nahi hai to plain text treat karo
//             data = { reply: text || "Empty response from webhook" };
//         }

//         return Response.json({
//             reply: data.reply || data.output || data.message || "No reply",
//         });
//     } catch (err) {
//         console.error("❌ API CRASH:", err);

//         return Response.json(
//             { reply: "Server failed" },
//             { status: 500 }
//         );
//     }
// }