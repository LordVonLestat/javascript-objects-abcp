var playlist = {
  Tool: 'sober',
  Offspring: 'The kids are alright'
}
function updatePlaylist(playlist, artistName, songTitles) {
  playlist[artistName] = songTitles
  return playlist
}