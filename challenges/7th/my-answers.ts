/** @score 230 */
function drawGift(size: number, symbol: string) {
  const endLine = "#\n";
  if (size <= 1) {
    return endLine;
  }
  const pound = "#";
  let gift = "";
  const lineLength = size * 2 - 1;
  const notFace = [1, size, lineLength];
  for (let i = 1; i <= lineLength; i++) {
    const isFace = !notFace.includes(i);
    const isMiddle = i === size;
    const growing = i < size;
    const prefix = growing 
      ? " ".repeat(lineLength - size -i + 1) + pound
      : pound;
    if (isFace) {
      const sideFace =
        pound + symbol.repeat(growing 
          ? i - 2
          : lineLength - i - 1
        );
      const topFace = symbol.repeat(size - 2);
      gift += prefix + topFace + sideFace + endLine;
    } else if (isMiddle) {
      const symbols = symbol.repeat(lineLength - size - 1)
      gift += pound.repeat(size) + symbols + endLine;
    } else {
      gift += prefix + pound.repeat(size - 2) + endLine;
    }
  }
  return gift;
}

/** @score 260 */
function drawGift2(size: number, symbol: string) {
  const endLine = "#\n";
  if (size <= 1) {
    return endLine;
  }
  const pound = "#";
  const lineLength = size * 2 - 1;
  let gift = " ".repeat(lineLength - size)+pound.repeat(size - 1) + endLine;
  const topFace = symbol.repeat(size - 2);
  for (let i = 2; i < lineLength; i++) {
    const isFace = i !== size;
    const calc = lineLength - size - i + 1
    const prefix = " ".repeat(Math.max(calc, 0)) + pound;
    if (isFace) {
      const sideFace = pound + symbol.repeat(size - 2 - Math.abs(size - i))
      gift += prefix + topFace + sideFace;
    } else {
      const symbols = symbol.repeat(lineLength - size - 1)
      gift += pound.repeat(size) + symbols;
    }
    gift += endLine
  }
  gift += pound.repeat(size - 1) + endLine
  return gift;
}

/** @score 270 */
function drawGift3(size: number, symbol: string) {
  const endLine = "\n";
  const pound = "#";
  if (size === 1) {
    return pound  + endLine;
  }
  const lineLength = size * 2 - 1;
  const firstLine = pound.repeat(size)
  const upperBox = [" ".repeat(lineLength - size) + firstLine]
  const bottomBox = [firstLine]
  const topFace = pound + symbol.repeat(size - 2);
  for (let i = 2; i < size; i++) {
    const calc = lineLength - size - i + 1
    const prefix = " ".repeat(Math.max(calc, 0));
    const symbols = symbol.repeat(size - 2 - Math.abs(size - i))
    const sideFace = pound + symbols + pound
    upperBox.push(prefix + topFace + sideFace)
    bottomBox.unshift(topFace + sideFace)
  }
  const symbols = symbol.repeat(lineLength - size - 1)
  const midLine = pound.repeat(size) + symbols + pound;
  const newBox = upperBox.concat([midLine, ...bottomBox])
  return newBox.join(endLine) + endLine;
}
