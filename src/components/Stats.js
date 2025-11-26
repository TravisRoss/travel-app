export function Stats({ items }) {
  if (items.length === 0) {
    return (
      <p className="stats">
        <em>Get started by adding some items!</em>
      </p>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You packed everything! You are good to go!"
          : `You have ${numItems} items on your list and you already packed
        ${numPacked} (${packedPercentage || 0}%) 🧳`}
      </em>
    </footer>
  );
}
