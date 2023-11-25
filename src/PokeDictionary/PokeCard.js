function PokeCard({ order, name, image, genera, types }) {
  return (
    <div className="p-5 w-full border border-dashed rounded-md">
      <div>{name}</div>
      <div>{`#${order}`}</div>
      <img src={image} alt="None" />

      {types.map((item) => (
        <div key={item.type.name}>{item.type.name}</div>
      ))}
    </div>
  );
}

export default PokeCard;
