const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImJmMmJkYThmLWI0NDQtNDY2Zi05MWUyLTUxNjFhN2NmYWNmMiIsImlhdCI6MTcyNjA0ODQxNCwic3ViIjoiZGV2ZWxvcGVyL2JiYTRiMjUzLWQ3Y2QtZDI4MC0yMWQyLTk0MWRmN2ZlY2VlYyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4OC4xNjMuMzAuNjUiXSwidHlwZSI6ImNsaWVudCJ9XX0.Qz0atEl61nK7F48nSTHWT_dFiyojy_9wSV_Bcvcni6KRJSYUoDAYccJouVoBm1eDbS9B-H8lyfih7K7K9NAYDA";

const url = "https://api.brawlstars.com/v1";

export async function getBrawlers() {
  const x = await fetch("https://api.clashofclans.com/v1/clans", {
    headers: { Authorization: `Bearer ${token}` },
    mode: "no-cors",
  });
  return x;
}
