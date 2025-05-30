const API_KEY =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImIyOGM2MzBlLTk2YTAtNGE2ZC1hNGJhLTA0ZDBjZDkxMzJlNiIsImlhdCI6MTcyNjA0NjIyMSwic3ViIjoiZGV2ZWxvcGVyLzExMTY3NzZlLTljYTYtODE2Zi1hZTJlLWE0OGYxOTg4NWE0ZCIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTg4LjE2My4zMC42NSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.WVEjcmB_Hjw3rlBNUGZrjV2HZYKFz4qg0YwXyezgoMt5szjFS97vzl3D_0GL58LNR9KXw21tgHRx54fCltvXDg";

const url = "https://api.brawlstars.com/v1";

export async function getBrawlers() {
  const x = await fetch("https://api.brawlstars.com/v1/brawlers", {
    headers: { Authorization: `Bearer ${API_KEY}` },
    mode: "no-cors",
  });
  return x;
}
