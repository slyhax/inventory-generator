import 'dotenv/config' 

export const config = () => {
   return {
	token: process.env.TOKEN
   }
}
