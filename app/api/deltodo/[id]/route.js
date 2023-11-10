import { NextResponse } from "next/server";

import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongo";

export async function DELETE(request, { params }) {
  const client = await clientPromise;
  const db = client.db("todoapp");
  const delPosts = await db
    .collection("todolist")
    .deleteOne({ _id: new ObjectId(params.id) });
  return NextResponse.json(delPosts);
}
