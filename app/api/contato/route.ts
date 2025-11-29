import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body?.email || !body?.nome) {
      return NextResponse.json({ ok: false, message: "Campos obrigatorios ausentes" }, { status: 400 });
    }

    // Simula processamento
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json({ ok: true, message: "Contato recebido" });
  } catch (error) {
    return NextResponse.json({ ok: false, message: "Erro ao processar" }, { status: 500 });
  }
}
