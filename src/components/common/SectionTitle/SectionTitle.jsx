export default function SectionTitle({ title, des }) {
  return (
    <>
      <h2 className="text-[40px] font-bold capitalize">{title}</h2>
      <h3 className="text-xl text-gray">{des}</h3>
    </>
  );
}
