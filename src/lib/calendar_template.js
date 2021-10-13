module.exports = (zoom, talk) => {
  return {
    title: `${talk.name}: Biophysics Australia Seminar Series`,
    description: `Hi There!\n  Talk by ${talk.name} at Biophysics Australia Seminar Series.\n Zoom details: \n ${zoom.url}\n zoom id: ${zoom.id} password: ${zoom.password}.\n\n --\nRegards,\nTeam biophysicsaus.com`,
    start: `${zoom.date} ${zoom.time} +1000`,
    duration: [1, "hour"],
  };
};
