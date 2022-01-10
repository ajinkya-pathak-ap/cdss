export const utils = {
  iterateOrderedList: (_arr) => {
    return (
      <ol>
        {_arr.map((v) => (
          <li key={v}>{v}</li>
        ))}
      </ol>
    );
  },
  riskScoreRange: (_range) => {
    let probRange = _range;
    probRange = probRange.replace("(", "");
    probRange = probRange.replace(")", "");
    probRange = probRange.replace(",", " -");
    return probRange;
  },
};
