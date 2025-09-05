import { dbAdmin } from "../lib/FirebaseAdmin";

export async function getContentFromFirestore() {
  const docRef = dbAdmin.collection("websites").doc("customer-portal");
  const docSnap = await docRef.get();
  return docSnap.data();
}
