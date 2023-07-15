export const exerciseOptions =  {
    method: 'GET',
  
    headers: {
      'X-RapidAPI-Key':  '4f560c2467msh30f70925942e74ap1989d3jsnf4c16cc5ddc4',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4f560c2467msh30f70925942e74ap1989d3jsnf4c16cc5ddc4',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };