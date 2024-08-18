'use server';
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('A variável de ambiente MONGODB_URI não foi definida');
}

export async function connectDB() {
  if (mongoose.connection.readyState === 1) return;
  try {
    if (MONGODB_URI) {
      await mongoose.connect(MONGODB_URI);
      console.log('mongodb connected');
    }
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    throw error;
  }
}

export async function disconnectDB() {
  if (mongoose.connection.readyState === 0) return;
  try {
    await mongoose.disconnect();
    console.log('mongodb disconnected');
  } catch (error) {
    console.error('Erro ao desconectar do banco de dados:', error);
    throw error;
  }
}
