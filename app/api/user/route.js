import clientPromise from "@/lib/mongo";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { credentials } = await request.json();
  // const credentials = await request.json();
  // const { username, password } = await request.json();
  const client = await clientPromise;
  const db = client.db("todoapp");
  const users = await db.collection("user").findOne({
    username: credentials.username,
    password: credentials.password,
  });
  //for post we shouldn't use toArray()
  return NextResponse.json(users);
}
