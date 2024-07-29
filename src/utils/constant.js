export const GOOGLE_API_KEY = "AIzaSyB--KkTgY91j631VQwbEGmzZKacGmKeFWU";

export const youtube_api_url = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=27&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const youtubeVideoById = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="


export const youtubeSearch = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q="+"&key="


export const YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API= `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&key=${GOOGLE_API_KEY}&q=`

export const offset_live_chat = 12;