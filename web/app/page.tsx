import { Card, CardContent } from "@/components/ui/card";
import LeadForm from "@/components/lead-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* HEADLINE */}
      <section className="px-6 pt-16 pb-10 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          Você treina, se esforça…{" "}
          <span className="text-green-500">mas sente que está indo sozinho.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-zinc-300">
          Assessoria esportiva individual para quem quer resultado de verdade —
          sem planilha genérica, sem achismo, sem enrolação.
        </p>
      </section>

      {/* PROBLEMA */}
      <section className="px-6 py-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">Você reconhece isso?</h2>
        <p className="text-zinc-400 mb-4">
          Você não falta treino. O problema é que ninguém te olha, te corrige, te ajusta.
        </p>
        <p className="text-zinc-400 mb-4">
          Você segue uma planilha que foi feita pra qualquer um. Testa exercício
          novo no YouTube. E no final do mês… o resultado não veio como esperava.
        </p>
        <p className="text-zinc-300 font-semibold">
          Não é falta de esforço. É falta de direção.
        </p>
      </section>

      {/* SOLUÇÃO */}
      <section className="px-6 py-10 bg-zinc-900 max-w-full">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">A solução é simples</h2>
          <p className="text-zinc-300 mb-3">
            Com a assessoria individual, você tem um profissional olhando{" "}
            <strong className="text-white">só para você</strong> — ajustando treino,
            respeitando sua rotina e te levando para o resultado mais rápido possível.
          </p>
          <p className="text-zinc-400">
            Sem complicação. Sem modinha. O que funciona para o{" "}
            <strong className="text-white">seu</strong> corpo.
          </p>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="px-6 py-12 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">O que você vai ter</h2>
        <div className="grid gap-4">
          {[
            "Treino montado para a sua realidade (tempo, equipamentos, objetivo)",
            "Acompanhamento contínuo — você não some, e eu não some",
            "Ajustes semanais conforme sua evolução",
            "Resposta rápida quando bater a dúvida",
            "Resultado visível em semanas, não em meses",
          ].map((benefit, i) => (
            <Card key={i} className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-4 flex items-start gap-3">
                <span className="text-green-500 text-lg mt-0.5">✓</span>
                <p className="text-zinc-200">{benefit}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="px-6 py-10 bg-zinc-900 max-w-full">
        <div className="max-w-2xl mx-auto">
          <blockquote className="border-l-4 border-green-500 pl-6">
            <p className="text-zinc-300 text-lg italic">
              &quot;Treinava há 2 anos sem ver evolução. Em 6 semanas com
              acompanhamento individual mudou tudo.&quot;
            </p>
            <footer className="mt-3 text-zinc-500 text-sm">— Cliente real</footer>
          </blockquote>
        </div>
      </section>

      {/* CTA + FORMULÁRIO */}
      <section className="px-6 py-14 max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-3">
          Deixa eu te acompanhar.
        </h2>
        <p className="text-zinc-400 mb-8">
          Coloca seu nome e WhatsApp abaixo — entro em contato em até 24h para
          entender o que você precisa.
        </p>
        <LeadForm />
      </section>

      {/* GARANTIA */}
      <section className="px-6 pb-16 max-w-xl mx-auto text-center">
        <p className="text-zinc-500 text-sm">
          Sem compromisso na primeira conversa. É só um papo para ver se faz
          sentido para você.
        </p>
      </section>
    </main>
  );
}
