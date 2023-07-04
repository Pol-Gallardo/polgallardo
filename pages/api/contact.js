import { connectToDatabase } from '../../utils/mongo';

export default async function handler(req, res) {
  const { method } = req;

  const { db } = await connectToDatabase();

  const collection = db.collection('contacto');

  switch (method) {
    case 'GET':
      const lista = await collection.find({}).toArray();
      res.status(200).json({ lista });
      break;
    case 'POST':
      const { name, email, subject, message } = req.body;
      const timestamp = Date.now()      
      const result = await collection.insertOne({ name, email, subject, message, timestamp });
      res.status(201).json("enviado");
      break;
//    case 'PUT':
//      const { id, text: updatedText } = req.body;
//      await collection.updateOne({ _id: id }, { $set: { text: updatedText } });
//      res.status(200).json({});
//      break;
//    case 'DELETE':
//      const { id: deletedId } = req.body;
//      await collection.deleteOne({ _id: deletedId });
//      res.status(200).json({});
//      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
