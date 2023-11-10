import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongo";

export async function GET(request, { params }) {
  const client = await clientPromise;
  const db = client.db("todoapp");
  const todo = await db
    .collection("todolist")
    .find({ _id: new ObjectId(params.id) })
    .toArray();
  return NextResponse.json(todo);
}
