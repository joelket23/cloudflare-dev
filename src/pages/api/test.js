import { getRequestContext } from '@cloudflare/next-on-pages';
export const config = { runtime: 'edge' };


export default async function Authenticate(req, res) {
  const test = { shop: 'staffa' };

  // try {
  //   const { results } = await process.env.DB.prepare('SELECT * FROM users');
  //   // .bind('Joe').all();

  //   console.log('resut', results);
  //   // return Response.json(results);
  // } catch (error) {
  //   console.log('catch error', error.message);
  // }
  // if (test.shop !== 'staff') {
  //   console.log('is not staff');
  // }
  const myVariable = getRequestContext().env.imgz;
  try {
    const { env, cf, ctx } = getRequestContext();
    // const myKv =
    // let kvData = await process.env.WORDS.get('test');
    let kvData = await env.words.get("test");
    // kvData = JSON.parse(kvData);
    console.log('kvdata', kvData);
  } catch (error) {
    console.log("error in kv: ",error.message)
  }
 

  return new Response("test", { status: 200 });
  // return Response.json(results);
}
