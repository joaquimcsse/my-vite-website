import { Download, X } from "lucide-react";
import { profile } from "@/content";

export function ResumeModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      role="presentation"
      onMouseDown={onClose}
      className="fixed inset-0 z-40 flex items-center justify-center bg-background/85 px-4 py-8 backdrop-blur-sm"
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
        onMouseDown={(event) => event.stopPropagation()}
        className="max-h-[90dvh] w-full max-w-2xl overflow-auto rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4 border-b border-border pb-5">
          <div>
            <p className="font-mono-custom text-xs uppercase tracking-[.2em] text-primary">
              Resume preview
            </p>
            <h2 id="resume-title" className="mt-2 font-display text-2xl font-semibold">
              {profile.name}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">{profile.role}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close resume preview"
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X size={18} />
          </button>
        </div>

        <div className="grid gap-7 pt-7 text-sm leading-7 text-muted-foreground sm:grid-cols-1">
          <div>
            <h3 className="font-mono-custom text-xs uppercase tracking-[.16em] font-bold text-primary">
              Objetivo
            </h3>
            <p className="mt-3">
              Estudante de graduação em Ciência da Computação (formatura prevista: dez/2027) buscando estágio em
                engenharia de software, desenvolvimento ou suporte técnico.
            </p>
            <h3 className="mt-7 font-mono-custom text-xs uppercase tracking-[.16em] font-bold text-primary">
              Formação Acadêmica
            </h3>
            <p className="mt-3 font-medium text-foreground">Pontifı́cia Universidade Católica do Paraná</p>
            <p>Bacharelado em Ciência da Computação · [2024 - 2027]</p>
          </div>
          <div>
            <h3 className="font-mono-custom text-xs uppercase tracking-[.16em] font-bold text-primary">
              Experiência
            </h3>
            <p className="mt-3 font-medium text-foreground">Programa Institucional de Bolsas de Iniciação em Desenvolvimento Tecnológico e Inovação · [Ago. 2026 - Ago. 2027]</p>
            <p>Aprimorando o design de um sistema distribuı́do.</p>
            <p>Integrando novos métodos ao sistema de aprendizado federado.</p>
            <p>Combinando diferentes técnicas buscando identificar uma abordagem inovadora.</p>
            <p className="mt-5 font-medium text-foreground">Programa Institucional de Bolsas de Iniciação em Desenvolvimento Tecnológico e Inovação · [Ago. 2025 - Ago. 2026]</p>
            <p>Apliquei diferentes estratégias de fine tuning.</p>
            <p>Otimizei um único algoritmo para bases de dados heterogêneas.</p>
            <p>Submeti um artigo à revista IEEE Access.</p>
            <h3 className="mt-7 font-mono-custom text-xs uppercase tracking-[.16em] font-bold text-primary">
              Habilidades Técnicas
            </h3>
            <p className="mt-3 font-bold text-foreground">Ferramentas</p>
            <p className="mt-3 font-medium text-foreground">Bash, Git, Docker, VMware Workstation</p>
            <p className="mt-3 font-bold text-foreground">Linguagens</p>
            <p className="mt-3 font-medium text-foreground">Python, JavaScript </p>
            <p className="mt-3 font-bold text-foreground">Agentes</p>
            <p className="mt-3 font-medium text-foreground">GitHub Copilot, LangChain</p>
            <h3 className="mt-7 font-mono-custom text-xs uppercase tracking-[.16em] font-bold text-primary">
              Línguas
            </h3>
            <p className="mt-3 font-medium text-foreground">Inglês - Avançado</p>
            <p className="mt-3 font-medium text-foreground">Italiano - Básico</p>
            
            <h3 className="mt-7 font-mono-custom text-xs uppercase tracking-[.16em] font-bold text-primary">
              Certificados Complementares
            </h3>

            <p className="mt-3 font-medium text-foreground">Fundamentals of Building AI Agents (Coursera)</p>
            <a
            href={"https://www.coursera.org/account/accomplishments/verify/P83X3KB1WVFU?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >Clique para acessar</a>

            <p className="mt-3 font-medium text-foreground">The Complete Full-Stack Web Development Bootcamp (Udemy)</p>
            <a
            href={"https://www.udemy.com/certificate/UC-a839c9a4-be3d-40c7-91ca-326c69283583"}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >Clique para acessar</a>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center mt-8 border-t border-border pt-6">
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-4 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Download resume
          </a>
        </div>

      </section>
    </div>
  );
}
