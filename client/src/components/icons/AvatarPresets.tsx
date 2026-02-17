interface PresetProps {
  size?: number;
}

function Cat({ size = 38 }: PresetProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="54" r="40" fill="#FFD4A8" />
      <polygon points="18,30 10,2 38,22" fill="#FFD4A8" stroke="#F5B07A" strokeWidth="2" />
      <polygon points="82,30 90,2 62,22" fill="#FFD4A8" stroke="#F5B07A" strokeWidth="2" />
      <polygon points="22,26 16,8 36,22" fill="#FFB5C5" />
      <polygon points="78,26 84,8 64,22" fill="#FFB5C5" />
      <circle cx="38" cy="48" r="5" fill="#4A3728" />
      <circle cx="62" cy="48" r="5" fill="#4A3728" />
      <circle cx="40" cy="46" r="1.5" fill="white" />
      <circle cx="64" cy="46" r="1.5" fill="white" />
      <ellipse cx="50" cy="58" rx="4" ry="3" fill="#FFB5C5" />
      <path d="M46 62 Q50 67 54 62" stroke="#4A3728" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <line x1="20" y1="52" x2="35" y2="54" stroke="#D4A574" strokeWidth="1" />
      <line x1="20" y1="58" x2="35" y2="58" stroke="#D4A574" strokeWidth="1" />
      <line x1="65" y1="54" x2="80" y2="52" stroke="#D4A574" strokeWidth="1" />
      <line x1="65" y1="58" x2="80" y2="58" stroke="#D4A574" strokeWidth="1" />
    </svg>
  );
}

function Dog({ size = 38 }: PresetProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="54" r="40" fill="#D4A574" />
      <ellipse cx="24" cy="40" rx="16" ry="24" fill="#A0714F" transform="rotate(-15 24 40)" />
      <ellipse cx="76" cy="40" rx="16" ry="24" fill="#A0714F" transform="rotate(15 76 40)" />
      <circle cx="38" cy="48" r="5" fill="#4A3728" />
      <circle cx="62" cy="48" r="5" fill="#4A3728" />
      <circle cx="40" cy="46" r="1.5" fill="white" />
      <circle cx="64" cy="46" r="1.5" fill="white" />
      <ellipse cx="50" cy="60" rx="6" ry="5" fill="#4A3728" />
      <ellipse cx="50" cy="59" rx="3" ry="2" fill="#8B6F5E" />
      <path d="M44 66 Q50 72 56 66" stroke="#4A3728" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <ellipse cx="50" cy="72" rx="8" ry="4" fill="#FFD4A8" />
    </svg>
  );
}

function Bunny({ size = 38 }: PresetProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="60" r="36" fill="#F5F0EB" />
      <ellipse cx="38" cy="22" rx="10" ry="28" fill="#F5F0EB" stroke="#E8DDD4" strokeWidth="1.5" />
      <ellipse cx="62" cy="22" rx="10" ry="28" fill="#F5F0EB" stroke="#E8DDD4" strokeWidth="1.5" />
      <ellipse cx="38" cy="22" rx="5" ry="20" fill="#FFB5C5" />
      <ellipse cx="62" cy="22" rx="5" ry="20" fill="#FFB5C5" />
      <circle cx="40" cy="54" r="4" fill="#4A3728" />
      <circle cx="60" cy="54" r="4" fill="#4A3728" />
      <circle cx="41.5" cy="52.5" r="1.2" fill="white" />
      <circle cx="61.5" cy="52.5" r="1.2" fill="white" />
      <ellipse cx="50" cy="62" rx="3" ry="2.5" fill="#FFB5C5" />
      <path d="M47 65 Q50 69 53 65" stroke="#4A3728" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <circle cx="34" cy="64" r="6" fill="#FFD4D4" opacity="0.5" />
      <circle cx="66" cy="64" r="6" fill="#FFD4D4" opacity="0.5" />
    </svg>
  );
}

function Bear({ size = 38 }: PresetProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="56" r="38" fill="#C4956A" />
      <circle cx="24" cy="28" r="14" fill="#C4956A" />
      <circle cx="76" cy="28" r="14" fill="#C4956A" />
      <circle cx="24" cy="28" r="8" fill="#A0714F" />
      <circle cx="76" cy="28" r="8" fill="#A0714F" />
      <circle cx="50" cy="62" r="18" fill="#D4A574" />
      <circle cx="40" cy="50" r="4.5" fill="#4A3728" />
      <circle cx="60" cy="50" r="4.5" fill="#4A3728" />
      <circle cx="41.5" cy="48.5" r="1.3" fill="white" />
      <circle cx="61.5" cy="48.5" r="1.3" fill="white" />
      <ellipse cx="50" cy="60" rx="5" ry="4" fill="#4A3728" />
      <path d="M46 66 Q50 71 54 66" stroke="#4A3728" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function Fox({ size = 38 }: PresetProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="56" r="38" fill="#F97316" />
      <polygon points="20,34 8,4 40,26" fill="#F97316" stroke="#E8650E" strokeWidth="1.5" />
      <polygon points="80,34 92,4 60,26" fill="#F97316" stroke="#E8650E" strokeWidth="1.5" />
      <polygon points="24,30 14,10 38,26" fill="#FFD4A8" />
      <polygon points="76,30 86,10 62,26" fill="#FFD4A8" />
      <ellipse cx="50" cy="68" rx="22" ry="18" fill="white" />
      <circle cx="38" cy="50" r="4.5" fill="#4A3728" />
      <circle cx="62" cy="50" r="4.5" fill="#4A3728" />
      <circle cx="39.5" cy="48.5" r="1.3" fill="white" />
      <circle cx="63.5" cy="48.5" r="1.3" fill="white" />
      <ellipse cx="50" cy="60" rx="4" ry="3" fill="#4A3728" />
      <path d="M46 64 Q50 68 54 64" stroke="#4A3728" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function Owl({ size = 38 }: PresetProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="56" r="38" fill="#A0714F" />
      <polygon points="32,22 50,8 68,22" fill="#A0714F" />
      <polygon points="36,24 50,14 64,24" fill="#C4956A" />
      <circle cx="38" cy="48" r="12" fill="white" />
      <circle cx="62" cy="48" r="12" fill="white" />
      <circle cx="38" cy="48" r="6" fill="#4A3728" />
      <circle cx="62" cy="48" r="6" fill="#4A3728" />
      <circle cx="40" cy="46" r="2" fill="white" />
      <circle cx="64" cy="46" r="2" fill="white" />
      <polygon points="50,56 46,62 54,62" fill="#F59E0B" />
      <ellipse cx="50" cy="74" rx="16" ry="10" fill="#C4956A" />
      <path d="M42 74 L50 70 L58 74" stroke="#A0714F" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function Panda({ size = 38 }: PresetProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="56" r="38" fill="white" />
      <circle cx="26" cy="30" r="13" fill="#4A3728" />
      <circle cx="74" cy="30" r="13" fill="#4A3728" />
      <ellipse cx="36" cy="48" rx="12" ry="11" fill="#4A3728" />
      <ellipse cx="64" cy="48" rx="12" ry="11" fill="#4A3728" />
      <circle cx="36" cy="48" r="5" fill="white" />
      <circle cx="64" cy="48" r="5" fill="white" />
      <circle cx="37" cy="47" r="1.5" fill="white" />
      <circle cx="65" cy="47" r="1.5" fill="white" />
      <ellipse cx="50" cy="60" rx="5" ry="4" fill="#4A3728" />
      <path d="M46 65 Q50 69 54 65" stroke="#4A3728" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function Penguin({ size = 38 }: PresetProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="56" r="38" fill="#374151" />
      <ellipse cx="50" cy="64" rx="24" ry="26" fill="white" />
      <circle cx="38" cy="44" r="4.5" fill="white" />
      <circle cx="62" cy="44" r="4.5" fill="white" />
      <circle cx="38" cy="44" r="2.5" fill="#4A3728" />
      <circle cx="62" cy="44" r="2.5" fill="#4A3728" />
      <circle cx="39" cy="43" r="0.8" fill="white" />
      <circle cx="63" cy="43" r="0.8" fill="white" />
      <polygon points="50,52 44,58 56,58" fill="#F59E0B" />
      <circle cx="40" cy="60" r="5" fill="#FFB5C5" opacity="0.4" />
      <circle cx="60" cy="60" r="5" fill="#FFB5C5" opacity="0.4" />
    </svg>
  );
}

function Unicorn({ size = 38 }: PresetProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="58" r="36" fill="#F5F0EB" />
      <polygon points="50,2 44,30 56,30" fill="#FFD700" stroke="#F59E0B" strokeWidth="1" />
      <ellipse cx="34" cy="28" rx="8" ry="16" fill="#F5F0EB" stroke="#E8DDD4" strokeWidth="1" />
      <ellipse cx="66" cy="28" rx="8" ry="16" fill="#F5F0EB" stroke="#E8DDD4" strokeWidth="1" />
      <ellipse cx="34" cy="28" rx="4" ry="10" fill="#FFB5C5" />
      <ellipse cx="66" cy="28" rx="4" ry="10" fill="#FFB5C5" />
      <circle cx="40" cy="54" r="4" fill="#4A3728" />
      <circle cx="60" cy="54" r="4" fill="#4A3728" />
      <circle cx="41.2" cy="52.5" r="1.2" fill="white" />
      <circle cx="61.2" cy="52.5" r="1.2" fill="white" />
      <path d="M47 64 Q50 68 53 64" stroke="#4A3728" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <circle cx="36" cy="64" r="5" fill="#FFD4D4" opacity="0.4" />
      <circle cx="64" cy="64" r="5" fill="#FFD4D4" opacity="0.4" />
      <path d="M28 76 Q34 82 38 76 Q42 82 46 76" stroke="#FFB5C5" strokeWidth="2" fill="none" />
      <path d="M54 76 Q58 82 62 76 Q66 82 70 76" stroke="#B5DEFF" strokeWidth="2" fill="none" />
    </svg>
  );
}

function Frog({ size = 38 }: PresetProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="58" r="36" fill="#6DBE6D" />
      <circle cx="34" cy="32" r="12" fill="#6DBE6D" />
      <circle cx="66" cy="32" r="12" fill="#6DBE6D" />
      <circle cx="34" cy="32" r="8" fill="white" />
      <circle cx="66" cy="32" r="8" fill="white" />
      <circle cx="34" cy="32" r="4" fill="#4A3728" />
      <circle cx="66" cy="32" r="4" fill="#4A3728" />
      <circle cx="35.5" cy="30.5" r="1.2" fill="white" />
      <circle cx="67.5" cy="30.5" r="1.2" fill="white" />
      <path d="M34 58 Q50 72 66 58" stroke="#4A8C4A" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="36" cy="52" r="6" fill="#FFB5C5" opacity="0.3" />
      <circle cx="64" cy="52" r="6" fill="#FFB5C5" opacity="0.3" />
    </svg>
  );
}

function Koala({ size = 38 }: PresetProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="56" r="36" fill="#9CA3AF" />
      <circle cx="22" cy="40" r="16" fill="#9CA3AF" />
      <circle cx="78" cy="40" r="16" fill="#9CA3AF" />
      <circle cx="22" cy="40" r="10" fill="#D1D5DB" />
      <circle cx="78" cy="40" r="10" fill="#D1D5DB" />
      <circle cx="40" cy="50" r="4" fill="#4A3728" />
      <circle cx="60" cy="50" r="4" fill="#4A3728" />
      <circle cx="41.2" cy="48.5" r="1.2" fill="white" />
      <circle cx="61.2" cy="48.5" r="1.2" fill="white" />
      <ellipse cx="50" cy="60" rx="8" ry="6" fill="#4A3728" />
      <ellipse cx="50" cy="58" rx="4" ry="2.5" fill="#6B5B4F" />
    </svg>
  );
}

function Hedgehog({ size = 38 }: PresetProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <ellipse cx="50" cy="50" rx="44" ry="40" fill="#8B6F5E" />
      <path d="M20 30 L26 18 L30 30" fill="#6B5347" />
      <path d="M30 24 L36 10 L40 24" fill="#6B5347" />
      <path d="M40 20 L46 6 L52 20" fill="#6B5347" />
      <path d="M52 20 L56 6 L62 20" fill="#6B5347" />
      <path d="M62 24 L66 10 L72 24" fill="#6B5347" />
      <path d="M72 30 L76 18 L82 30" fill="#6B5347" />
      <ellipse cx="50" cy="62" rx="30" ry="26" fill="#FFD4A8" />
      <circle cx="40" cy="54" r="3.5" fill="#4A3728" />
      <circle cx="60" cy="54" r="3.5" fill="#4A3728" />
      <circle cx="41" cy="52.5" r="1" fill="white" />
      <circle cx="61" cy="52.5" r="1" fill="white" />
      <circle cx="50" cy="62" r="4" fill="#4A3728" />
      <path d="M46 68 Q50 72 54 68" stroke="#4A3728" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <circle cx="38" cy="64" r="5" fill="#FFB5C5" opacity="0.3" />
      <circle cx="62" cy="64" r="5" fill="#FFB5C5" opacity="0.3" />
    </svg>
  );
}

export const AVATAR_PRESETS: Record<string, { component: React.FC<PresetProps>; label: string; color: string }> = {
  cat: { component: Cat, label: 'Cat', color: '#FFD4A8' },
  dog: { component: Dog, label: 'Dog', color: '#D4A574' },
  bunny: { component: Bunny, label: 'Bunny', color: '#F5F0EB' },
  bear: { component: Bear, label: 'Bear', color: '#C4956A' },
  fox: { component: Fox, label: 'Fox', color: '#F97316' },
  owl: { component: Owl, label: 'Owl', color: '#A0714F' },
  panda: { component: Panda, label: 'Panda', color: '#E5E7EB' },
  penguin: { component: Penguin, label: 'Penguin', color: '#374151' },
  unicorn: { component: Unicorn, label: 'Unicorn', color: '#F5F0EB' },
  frog: { component: Frog, label: 'Frog', color: '#6DBE6D' },
  koala: { component: Koala, label: 'Koala', color: '#9CA3AF' },
  hedgehog: { component: Hedgehog, label: 'Hedgehog', color: '#8B6F5E' },
};

export function AvatarPresetIcon({ presetId, size = 38 }: { presetId: string; size?: number }) {
  const preset = AVATAR_PRESETS[presetId];
  if (!preset) return null;
  const Component = preset.component;
  return <Component size={size} />;
}
