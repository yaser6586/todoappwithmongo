import clientPromise from "@/lib/mongo";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { username, password } = await request.json();
  const client = await clientPromise;
  const db = client.db("todoapp");
  const users = await db
    .collection("user")
    .find({ username: username, password: password });

  return NextResponse.json(users);
}
