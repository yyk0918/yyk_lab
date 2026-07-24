export function MarqueeTicker() {
  const text = "all day, everyday ";

  return (
    <div className="bg-[#c9a88c] py-4 overflow-hidden">
      <div className="flex animate-marquee">
        {/* 두 번 반복해서 끊김 없이 이어지도록 */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex shrink-0">
            {[...Array(8)].map((_, j) => (
              <span
                key={j}
                className="text-white/80 text-lg md:text-xl font-light tracking-wider whitespace-nowrap mx-4"
              >
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
