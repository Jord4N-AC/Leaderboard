const getScores = async (url = URL) => {
  const scores = await fetch(url);
  const scoresJson = await scores.json();

  return scoresJson;
};

export default getScores;
