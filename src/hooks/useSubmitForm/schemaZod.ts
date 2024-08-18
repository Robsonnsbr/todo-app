import { z } from 'zod';

// Define o esquema para os campos estáticos
const staticFieldsSchema = z.object({
  title: z.string().min(2, '*'),
  message: z.string().min(4, '*'),
  isFavorite: z.boolean().optional()
});

// Define o esquema para aceitar campos dinâmicos adicionais
const dynamicFieldsSchema = z.object({}).catchall(z.any());

// Cria o esquema combinando os campos estáticos e dinâmicos
export const schemaZod = staticFieldsSchema.merge(dynamicFieldsSchema);

// Tipo combinado para validação
export type CombinedSchemaType = z.infer<typeof schemaZod>;
