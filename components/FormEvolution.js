export default function FormEvolution() {
  const steps = [
    { title: 'Concept', img: '/projects/mixed-use/form-evolution.jpg' },
    { title: 'Massing', img: '/projects/mixed-use/form-evolution.jpg' },
    { title: 'Fluid Form', img: '/projects/mixed-use/form-evolution.jpg' },
    { title: 'Final', img: '/projects/mixed-use/form-evolution.jpg' },
  ];

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto flex gap-4 py-2">
        {steps.map((s, i) => (
          <div key={i} className="min-w-[280px] rounded-lg overflow-hidden border bg-white">
            <img src={s.img} alt={s.title} />
            <div className="p-3">
              <div className="font-medium">{s.title}</div>
            </div>
          </div>
        ))}
      </div>
      <p className="muted">Form shaped by movement, access, and program relationships.</p>
    </div>
  );
}
