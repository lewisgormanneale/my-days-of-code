export default function createChain(currentDay, index, arr) {
  const prevDay = arr[index - 1];
  const timeDifference =
    new Date(prevDay?.date).getTime() - new Date(currentDay?.date).getTime();
  const dayDifference = timeDifference / (1000 * 3600 * 24);
  const currentDate = new Date(currentDay?.date);
  const todaysDate = new Date();
  if (dayDifference === 1) {
    return <div className="chain"></div>;
  } else if (
    currentDate.setHours(0, 0, 0, 0) === todaysDate.setHours(0, 0, 0, 0)
  ) {
    return <div />;
  } else {
    return <div className="broken-chain"></div>;
  }
}
