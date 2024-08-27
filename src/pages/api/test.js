export const config = { runtime: 'edge' };
export default async function Authenticate(req, res) {
  const test = { shop: 'staffa' };

  try {
    const { results } = await process.env.DB.prepare('SELECT * FROM users');
    // .bind('Joe').all();
  
    console.log("resut",results)
    // return Response.json(results);
    
  } catch (error) {
    console.log("catch error",error.message)
  }
  if (test.shop !== 'staff') {
    console.log('is not staff');
  }
  let kvData = await process.env.WORDS.get("joyboy")
  // kvData = JSON.parse(kvData);
  console.log("kvdata",kvData)

  return new Response('test', { status: 200 });
  // return Response.json(results);
}
