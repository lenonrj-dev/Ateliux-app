export function ContactInfoSection() {
  return (
    <section className="mt-12 w-full max-w-[820px]">
      <hr className="border-t border-[#1a1a1a]" />
      <div className="mt-10 grid gap-10 text-sm text-slate-300 sm:grid-cols-2">
        <div className="space-y-1">
          <p className="text-white">Local de atendimento</p>
          <p>Ateliux Studio</p>
          <p>100% remoto</p>
          <p>Sao Paulo / Lisboa</p>
          <a href="https://maps.google.com" className="text-primary hover:underline">
            Google Maps
          </a>
        </div>
        <div className="space-y-1">
          <p className="text-white">Dados para faturamento</p>
          <p>CNPJ: 00.000.000/0000-00</p>
          <p>IE: 000.000.000</p>
          <p>ID fiscal: SK2024128028</p>
        </div>
      </div>
    </section>
  );
}
