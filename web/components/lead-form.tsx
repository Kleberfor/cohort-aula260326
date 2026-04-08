"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getSupabase } from "@/lib/supabase";

export default function LeadForm() {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nome.trim() || !whatsapp.trim()) return;

    setLoading(true);
    setError(false);

    const { error: supabaseError } = await getSupabase()
      .from("leads")
      .insert([{ nome: nome.trim(), whatsapp: whatsapp.trim() }]);

    setLoading(false);

    if (supabaseError) {
      setError(true);
    } else {
      setSuccess(true);
    }
  }

  if (success) {
    return (
      <div className="rounded-xl bg-zinc-800 border border-green-500/30 p-8 text-center">
        <p className="text-green-400 text-xl font-semibold">
          Recebemos seu contato!
        </p>
        <p className="text-zinc-400 mt-2">Falaremos em breve. 🚀</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="text-left">
        <label htmlFor="nome" className="block text-sm text-zinc-400 mb-1">
          Nome completo
        </label>
        <Input
          id="nome"
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
        />
      </div>

      <div className="text-left">
        <label htmlFor="whatsapp" className="block text-sm text-zinc-400 mb-1">
          WhatsApp (com DDD)
        </label>
        <Input
          id="whatsapp"
          type="tel"
          placeholder="(11) 99999-9999"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          required
          className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm">
          Algo deu errado. Tente novamente.
        </p>
      )}

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 text-base"
      >
        {loading ? "Enviando..." : "QUERO MEU ACOMPANHAMENTO"}
      </Button>
    </form>
  );
}
