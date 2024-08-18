import { z } from 'zod';
import { schemaZod } from './schemaZod';

export type FormDataProps = z.infer<typeof schemaZod>;
