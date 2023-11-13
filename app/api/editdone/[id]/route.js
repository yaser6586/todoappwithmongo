import { NextResponse } from "next/server";

import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongo";

export async function PATCH(request, { params }) {
  const client = await clientPromise;
  const { isdone } = await request.json();
  const db = client.db("todoapp");
  const upPosts = await db
    .collection("todolist")
    .updateOne({ _id: new ObjectId(params.id) }, { $set: { isdone: !isdone } });
  return NextResponse.json(upPosts);
}
