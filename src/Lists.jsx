function Lists({ name, score, emo, colorp, colors }) {
  return (
    <div
      style={{ background: colors }}
      className="flex justify-between rounded-xl p-3"
    >
      <div style={{ color: colorp }} className="flex gap-2 items-center">
        <img src={emo.img} alt="" className="w-4 h-4" />
        <p className="font-extrabold text-sm">{name}</p>
      </div>
      <p className="text-[#303b59] font-bold text-sm">
        {score} <span className="text-[#b6b4bb]">/ 100</span>
      </p>
    </div>
  );
}

export default Lists;
