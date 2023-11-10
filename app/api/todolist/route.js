import clientPromise from "@/lib/mongo";
import { NextResponse } from "next/server";

export async function GET(request) {
  // const { searchParams } = new URL(request.url);
  // const page = Number(searchParams.get("p"));
  // const limit = Number(searchParams.get("l"));
  // const skip = page * limit;

  const client = await clientPromise;
  const db = client.db("todoapp");
  const allPosts = await db
    .collection("todolist")
    .find()
    //   .sort({ $natural: -1 })
    //   //with this code you code reverse the order of result and show the last post first
    //   .limit(limit)
    //   .skip(skip)
    .toArray();
  return NextResponse.json(allPosts);
}

export async function POST(request) {
  const client = await clientPromise;
  const db = client.db("todoapp");
  const { text, isdone } = await request.json();
  const newPost = {
    text: text,
    isdone: isdone,
  };
  let myPost = await db.collection("todolist").insertOne(newPost);

  return NextResponse.json(myPost);
}
