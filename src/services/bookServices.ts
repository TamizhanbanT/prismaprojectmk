import prisma from '../../utils/db';



export const createBook = async (data: { id: number }) => {
  return await prisma.book.create({ data });
};

export const getAllBooks = async () => {
  return await prisma.book.findMany({ data:{
    skip:offset,
    take:limit
  }});
};