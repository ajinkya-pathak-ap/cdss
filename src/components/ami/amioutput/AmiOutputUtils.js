export const utilis = {
  iterateOrderedList: (_arr) => {
    return (
      <ol>
        {_arr.map((v) => (
          <li key={v}>{v}</li>
        ))}
      </ol>
    );
  },
};
