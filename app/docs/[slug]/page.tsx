import { notFound } from "next/navigation";
import { DocsContent } from "@/components/docs/DocsContent";
import { docsEntries } from "../data";
import { contentMap } from "./contentMap";

export default async function DocSlugPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolved = params instanceof Promise ? await params : params;
  const entry = docsEntries.find((item) => item.slug === resolved.slug);
  const content = contentMap[resolved.slug];

  if (!entry && !content) return notFound();

  const title = entry?.title || "Documentacao Ateliux";
  const description =
    entry?.description || "Detalhes sobre produtos, termos, politicas e suporte da Ateliux.";

  return (
    <DocsContent title={title} description={description}>
      {content || <p>Conteudo em construcao.</p>}
    </DocsContent>
  );
}
