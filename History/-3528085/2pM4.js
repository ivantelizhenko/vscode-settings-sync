const url =
  "https://youtube-media-downloader.p.rapidapi.com/v2/channel/videos?channelId=UCeY0bbntWzzVIaj2z3QigXg&type=videos&sortBy=newest";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "Sign Up for Key",
    "x-rapidapi-host": "youtube-media-downloader.p.rapidapi.com",
  },
};

export async function getData() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
getData();
