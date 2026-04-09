---
task: WritePageCopy
responsavel: "@copy (Cora)"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - produto: Nome ou descrição do produto/serviço
  - publico: Público-alvo ideal
  - beneficio: Principal transformação entregue
  - objecao: Maior dúvida ou medo do cliente
  - tom: profissional | casual | urgente
Saida: |
  - copy_completo: Copy estruturado em markdown com todas as seções
Checklist:
  - "[ ] Elicitar informações do produto"
  - "[ ] Escrever headline orientada a benefício"
  - "[ ] Redigir seção de problema/dor"
  - "[ ] Apresentar solução com clareza"
  - "[ ] Listar 3-5 benefícios (não features)"
  - "[ ] Incluir prova social"
  - "[ ] Escrever CTA com urgência"
  - "[ ] Adicionar garantia para remover risco"
---

# *write-page

Escreve copy completo de uma página de alta conversão.

## Elicitação

```
? Produto ou serviço: [descreva o que você vende]
? Público-alvo: [quem é o cliente ideal]
? Principal benefício: [qual é a transformação que você entrega]
? Objeção #1: [qual é a maior dúvida ou medo do cliente]
? Tom: (profissional / casual / urgente)
```

## Estrutura do Copy Gerado

1. **Headline** — Promessa principal (benefício + público)
2. **Subheadline** — Reforça a headline com mais contexto
3. **Problema** — Agita a dor do cliente (2-3 parágrafos)
4. **Solução** — Apresenta o produto como saída
5. **Benefícios** — Lista de 3-5 benefícios (não features)
6. **Prova social** — Depoimento ou dado de resultado
7. **CTA principal** — Chamada para ação clara e urgente
8. **Garantia** — Remove risco da decisão

## Output

Copy estruturado em markdown, pronto para implementar na página.

## Princípios Aplicados

- AIDA (Atenção, Interesse, Desejo, Ação)
- PAS (Problema, Agitação, Solução)
- Especificidade gera credibilidade
- Uma página = uma oferta = um CTA
