export async function getJson(url:string) {
  try{

    const res = await fetch(url);
    const data = await res.json();
    
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
  }carhc(err){

  }
}
