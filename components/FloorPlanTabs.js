import { useState } from 'react';

const plans = [
  { key: 'ground', label: 'Ground Level', img: '/projects/mixed-use/ground-plan.jpg' },
  { key: 'podium', label: 'Podium Levels', img: '/projects/mixed-use/podium-plan.jpg' },
  { key: 'upper', label: 'Upper Levels', img: '/projects/mixed-use/upper-plan.jpg' },
];

export default function FloorPlanTabs() {
  const [active, setActive] = useState(plans[0].key);

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        {plans.map((p) => (
          <button
            key={p.key}
            onClick={() => setActive(p.key)}
            className={`chip ${active === p.key ? 'ring-1 ring-black' : ''}`}>
            {p.label}
          </button>
        ))}
      </div>

      <div className="rounded-lg overflow-hidden border bg-white">
        <img src={plans.find((p) => p.key === active).img} alt="plan" />
      </div>
    </div>
  );
}
