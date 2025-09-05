import { dbAdmin } from "../../lib/FirebaseAdmin";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const docRef = dbAdmin.collection("websites").doc("customer-portal");
    const docSnap = await docRef.get();

    if (!docSnap.exists) {
      return NextResponse.json(
        { error: "Document not found" },
        { status: 404 }
      );
    }

    const data = docSnap.data();
    return NextResponse.json(data);
  } catch (err) {
    console.error("[API ERROR]", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const docRef = dbAdmin.collection("websites").doc("customer-portal");

    await docRef.set(data);

    return NextResponse.json(
      { message: "Data saved successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.error("[API ERROR]", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
