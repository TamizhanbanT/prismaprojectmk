import { PrismaClient} from "./generated/prisma";
const Prisma =new PrismaClient();

//creating books
async function main(){
const book= await Prisma.book.create({
    data:{
        title:"The Alchemist",
        author:"Paulo Coelho",
    }

}) 
}
